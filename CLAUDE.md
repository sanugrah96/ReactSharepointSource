# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Node version:** SPFx 1.21's build rig only accepts **Node 18.17/20.11/22.14** — the project is locked to Node 22 LTS via `engines` in `package.json`, `.nvmrc`, and `.node-version`. The system `node` on this machine is v25.x (Homebrew default) which SPFx rejects, but the `node@22` keg is installed at `/opt/homebrew/opt/node@22/bin/` and the npm scripts below automatically prefix `PATH` to use it.

**Use the npm scripts — they handle Node 22 selection automatically:**

- `npm install --legacy-peer-deps` — install deps. `--legacy-peer-deps` is required because `office-ui-fabric-react` was replaced by `@fluentui/react@8` and PnP v4 has slightly tighter peer ranges. Run this with **node@22** explicitly the first time: `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm install --legacy-peer-deps` (npm itself can run on any Node version, but doing it under node@22 avoids a pile of `EBADENGINE` warnings).
- `npm run serve` — runs `gulp serve --nobrowser`, hosting the bundle on `https://localhost:4321`. The **local workbench was removed in SPFx 1.13** — there is no usable page at `https://localhost:4321/_layouts/workbench.aspx`. Open the **hosted workbench** at `https://<your-tenant>.sharepoint.com/_layouts/workbench.aspx` and click "Load debug scripts" when SharePoint prompts. The tenant URL lives in [config/serve.json](config/serve.json) → `initialPage` (placeholder is `https://{your-tenant}.sharepoint.com/...` — replace with your real tenant before serving). One-time prereq: `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp trust-dev-cert` to install the dev TLS cert.
- `npm run build` — produce a debug bundle in `lib/` (alias for `gulp bundle`).
- `npm run clean` — wipe `lib/`, `temp/`, `dist/`.

For production builds and packaging, call gulp directly (npm scripts do not expose `--ship`). **Always `gulp clean` first** — without it, stale hash-variant bundles from previous builds accumulate in `temp/deploy` and get packed into the `.sppkg` (~10 stale copies of every bundle ≈ 21 MB package instead of ~8 MB):

```sh
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp clean
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp bundle --ship
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp package-solution --ship
```

This produces `sharepoint/solution/sp-page.sppkg`.

If you bypass the npm scripts and invoke `gulp` directly, prefix PATH yourself:

```sh
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp bundle
```

### Bundle-size guardrails (do not regress)

- `gulpfile.js` has a `ContextReplacementPlugin` that strips all moment locales except `en` from every bundle. Do not call `moment.locale(...)` with a non-en locale without removing that plugin.
- `xlsx` and `exceljs` are **lazy-loaded** via dynamic `import()` inside `Home.tsx`'s bulk-upload handlers — never re-add top-level imports for them.
- The SopLibrary component is `React.lazy`-loaded inside Home (route `#/sop-library`).
- `@fluentui/react` must be imported via **path imports** (`@fluentui/react/lib/<Control>`), never the root barrel.
- Fabric Core CSS is NOT bundled: each web part that needs it calls `SPComponentLoader.loadCss` with the Fabric Core 9.6.1 CDN URL in `onInit` (see `HomeWebPart.ts`). The old `src/webparts/*/assets/fabric.min.css` copies are no longer require()'d.
- `moment-timezone` was removed — UTC→local conversion uses `moment.utc(x).local()`.
- `tsconfig.json` targets `es2017` (matches the SPFx 1.21 evergreen-browser baseline).

TSLint was removed in the SPFx 1.21 upgrade — `tslint.json` has been renamed to `tslint.json.bak` to prevent the `rush-stack-compiler-4.7` lint task from throwing. No `.eslintrc.js` is present yet; the lint step passes as a no-op. `gulpfile.js` has three suppressions so warnings don't break ship builds:
- `build.addSuppression(/Warning - \[tslint\]/)` — legacy tslint log lines
- `build.addSuppression(/Warning - \[sass\]/)` — non-camelCase class warnings
- `build.addSuppression(/Warning - \[configure-webpack\]/)` — unresolvable SPFx manifest references to `office-ui-fabric-react` and `@pnp/spfx-controls-react` (not installed; safe to suppress)

## Architecture

This is a **SharePoint Framework (SPFx) 1.21** client-side solution targeting React 17.0.1 + TypeScript 4.7 (via `@microsoft/rush-stack-compiler-4.7`). Output targets `es2017` and `strictNullChecks` is off — be mindful when adding code that relies on strict-null guarantees. Note: SPFx 1.21 still ships React 17, not 18 or 19; do not unilaterally bump React.

**TypeScript caveat:** SPFx 1.21's `gulp-core-build-typescript@8.6.3` still pins TypeScript via `rush-stack-compiler-4.7` even though the surrounding ecosystem has moved on. Adding a higher `typescript` version directly to `package.json` is silently ignored — the build always uses rush-stack's bundled 4.7. Don't waste time bumping TS until SPFx ships a newer compiler peer.

The web parts use the legacy **`ReactDom.render`** API (correct for React 17 / SPFx 1.21). Each `*WebPart.ts` calls `ReactDom.render(element, this.domElement)` in `render()`. Do **not** swap in `createRoot` — that's React 18+ and SPFx 1.21 typings still target React 17.

### Multi-webpart bundle layout

Each web part is its own bundle declared in `config/config.json` under `bundles`. Adding a new web part requires three coordinated edits:
1. A new folder under `src/webparts/<name>/` containing `<Name>WebPart.ts`, `<Name>WebPart.manifest.json`, `components/`, `loc/`, `assets/`.
2. A bundle entry in `config/config.json` pointing at `./lib/webparts/<name>/<Name>WebPart.js`.
3. A localized-resources entry in the same `config.json` (`<Name>WebPartStrings`) pointing at `lib/webparts/<name>/loc/{locale}.js`.

Currently shipping web parts: `banner`, `home`, `announcementDetailPage`, `pageBanner`, `celebration`, `events`, `birthdays`, `subpageTemplate`. Each follows the same `BaseClientSideWebPart` → `React.createElement` → `ReactDom.render` pattern (see `src/webparts/home/HomeWebPart.ts` as the canonical example, including PnP v4 `initPnp(this.context)` initialization in `onInit` from `src/services/pnpClient.ts`).

### Data access

All SharePoint and Graph access goes through `src/services/pnpClient.ts` — a thin module exposing the PnP v4 factories. Web parts must call `initPnp(this.context)` (and `initGraph(this.context)` if Graph is needed) in `onInit` before any `sp.*` / `graph.*` access. The module exports `sp` / `graph` Proxy objects for ergonomic call sites; both throw if init wasn't called. **PnP v4 terminators:** chains end with `()` — e.g. `sp.web.lists.getByTitle("X").items()` — the v2 `.get()` no longer exists. Note: `@pnp/spfx-controls-react` is **not** installed; `ControlStrings` has been removed from `config/config.json`.

### Property pane / file picker pattern

Web parts that take banner imagery use `PropertyFieldFilePicker` from `@pnp/spfx-property-controls`, persisting an `IFilePickerResult` on the web part's `properties` object (see `HomeWebPart.getPropertyPaneConfiguration`). The result is rendered by passing it through to the React component.

### Solution packaging

Solution metadata lives in `config/package-solution.json` (solution id `fc3b7e4e-a510-4a91-95ba-bf315858c945`, package `sharepoint/solution/sp-page.sppkg`). `*.sppkg` is gitignored — do not commit the built package.

`sharepoint/assets/elements.xml` provisions the two SOP Library companion lists — `SOP Ratings` (`Lists/SOPRatings`) and `SOP Searches` (`Lists/SOPSearches`) — with their site columns/content types. For that feature to actually run, `skipFeatureDeployment` is `false` (not the SPFx default `true`), which means the app must be **added to each site** (Site Contents → Add an app) to activate provisioning — this applies to the whole solution, so every web part now expects the app added on the target site. The `SopLibrary` component only reads/writes rows on these lists at runtime (needs Contribute), never creates them.

### Teams icons

`teams/` contains paired `<componentId>_color.png` / `<componentId>_outline.png` Teams app icons keyed by web part component IDs from the manifests. When adding a Teams-surfaceable web part, generate the matching icon pair here.

## Conventions

- Web part component folders use `Component.module.scss` + the generated `Component.module.scss.ts` typings — let SPFx regenerate the `.ts` file; do not hand-edit it.
- New SPFx assets, manifests, and loc strings are loaded by string keys (`HomeWebPartStrings` etc.) — string-key changes must be mirrored in `config/config.json` `localizedResources`.
- `gulp serve` will not pick up new bundles without restarting after edits to `config/config.json`.

## Estimate / hand-off docs (for the manager)

Whenever the user asks for an "estimate doc", "doc for the manager", a write-up of "what changed and how long it took", or any similar deliverable summarizing a unit of work, follow this convention:

1. **Location**: write the file under `estimates/` at the repo root (`/Users/Sujay/ReactSharepoint/estimates/`). Create the folder if missing. Never write these to `~/.claude/` or to `plans/`.
2. **Filename**: derive from the changes themselves — kebab-case, descriptive, scoped to what shipped in that change set. Examples:
   - `spfx-1.14-to-1.15.md` (single-version SPFx step)
   - `pnp-v2-to-v4-factory-migration.md` (Phase 3)
   - `moment-to-date-fns.md` (Phase 5)
   - `fluentui-v7-to-v8-rename.md` (Phase 2)
   Do not use generic names like `update.md`, `report.md`, or dated names like `2026-05-04.md`.
3. **Required sections** (in this order):
   - **Summary** (one paragraph, manager-readable, no jargon)
   - **What changed** (bullet list of concrete edits — package versions before/after, files touched with counts, config files modified)
   - **Files modified** (full paths, grouped by area)
   - **Dev time** — split into `Estimated` vs `Actual` columns; break down by sub-task (e.g. "config bumps: 15m, npm install: 20m, build verification: 10m"). Always include both even if estimate equals actual.
   - **Risks / regressions watched for** (what could break, what was tested)
   - **Verification** (commands run, results — `gulp bundle` clean? sppkg generated? webparts smoke-tested?)
   - **Follow-ups** (anything deferred to a later phase or branch)
4. **Update as work progresses** — write the doc *while* doing the work, not after. Capture actual time in real time. If the work spans multiple sessions, append to the same file.
5. **Cross-link** from the relevant plan file in `plans/` if one exists, so the plan→estimate trail is traceable.
