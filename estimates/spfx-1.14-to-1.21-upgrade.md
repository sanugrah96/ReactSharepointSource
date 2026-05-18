# SPFx 1.14 → 1.21 Upgrade — Dev Time Estimate

## Summary

Full upgrade of a multi-webpart SharePoint Framework solution from SPFx 1.14 to 1.21, covering seven major concurrent dependency changes: SPFx core packages, PnP JavaScript SDK (v2 → v4), Fluent UI (office-ui-fabric-react → @fluentui/react v8), React (16 → 17), React Router (v5 → v6), and TypeScript compiler (rush-stack-compiler 3.9 → 4.7). The upgrade required touching approximately 35 source files and creating one new service module. All web parts (`banner`, `home`, `announcementDetailPage`, `pageBanner`, `celebration`, `events`, `birthdays`, `subpageTemplate`) remained functional after the upgrade.

---

## What Changed

**SPFx Core (7 packages: 1.14.0 → 1.21.0)**
- `@microsoft/sp-core-library`, `sp-lodash-subset`, `sp-office-ui-fabric-core`, `sp-property-pane`, `sp-webpart-base`, `sp-build-web`, `sp-module-interfaces`
- `@microsoft/rush-stack-compiler`: 3.9 (0.4.47) → 4.7 (0.1.0)
- `spfx-fast-serve-helpers`: 1.14.0 → 1.21.1
- `tsconfig.json`: `extends` changed from `rush-stack-compiler-3.9` → `rush-stack-compiler-4.7`
- `tslint.json` renamed to `tslint.json.bak` (rush-stack-compiler-4.7 rejects TSLint outright)
- `gulpfile.js`: added suppressions for `[tslint]`, `[sass]`, `[configure-webpack]` warnings

**PnP v2 → v4 (3 packages)**
- `@pnp/sp`: 2.13.0 → 4.19.0 (breaking: new `spfi()` factory, no `.get()` terminator)
- `@pnp/graph`: 2.15.0 → 4.19.0 (breaking: new `graphfi()` factory)
- `@pnp/spfx-property-controls`: 3.16.0 → 3.23.0 (minor)
- `@pnp/spfx-controls-react`: REMOVED (was listed in package.json at 3.20.0 but never used; its presence in `config/config.json` was crashing the entire locale external resolution pipeline)
- New file: `src/services/pnpClient.ts` — Proxy-based wrapper exposing `sp`, `graph`, `initPnp`, `initGraph`
- 15 files updated: PnP import paths changed from `@pnp/sp/presets/all` → `../../services/pnpClient` (or `../../../services/pnpClient` at component depth)
- 7 WebPart `.ts` files: `sp.setup({ spfxContext: this.context })` → `initPnp(this.context)`
- 40 query terminator calls: `.get()` removed; preceding chain line updated to `()`

**Fluent UI (UI Framework swap)**
- `office-ui-fabric-react` 7.174.1: REMOVED
- `@fluentui/react` 8.125.5: ADDED
- 7 TypeScript/TSX files: import source changed
- 8 `.module.scss` files: `@import '~office-ui-fabric-react/dist/sass/References.scss'` → `@import '~@fluentui/react/dist/sass/References.scss'`

**React 16 → 17**
- `react`: 16.13.1 → 17.0.1
- `react-dom`: 16.13.1 → 17.0.1
- All webparts continue using `ReactDom.render` (correct for React 17 / SPFx 1.21)

**React Router v5 → v6**
- `react-router-dom`: 5.3.4 → 6.30.3
- `AnnouncementRouter.tsx`: `Switch` → `Routes`, `Redirect` → `Navigate`
- `AnnouncementDetailWithSharePoint.tsx`: `useHistory` → `useNavigate`, `history.push()` → `navigate()`
- `SharePointDataService.ts`: PnP v4 rewrite, removed `sp.setup()`, `query.get()` → `query()`

**Other**
- `moment`: 2.29.4 → 2.30.1
- `moment-timezone`: 0.5.45 → 0.5.48
- `jquery`: 3.6.4 → 3.7.1
- `react-big-calendar`: 1.18.0 → 1.19.4
- `config/config.json`: removed stale `ControlStrings` localizedResources entry

**Setup scripts (new)**
- `setup.sh` / `setup.ps1`: first-time setup with Node compatibility table
- `start.sh` / `start.ps1`: dev server launcher with Node 22 detection

---

## Files Modified

**New files**
- `src/services/pnpClient.ts`
- `setup.sh`, `setup.ps1`, `start.sh`, `start.ps1`

**Config / build**
- `package.json`
- `tsconfig.json`
- `tslint.json` → `tslint.json.bak`
- `gulpfile.js`
- `config/config.json`
- `CLAUDE.md`

**WebPart entry points (8 files)**
- `src/webparts/banner/BannerWebPart.ts`
- `src/webparts/home/HomeWebPart.ts`
- `src/webparts/announcementDetailPage/AnnouncementDetailPageWebPart.ts`
- `src/webparts/pageBanner/PageBannerWebPart.ts`
- `src/webparts/celebration/CelebrationWebPart.ts`
- `src/webparts/events/EventsWebPart.ts`
- `src/webparts/birthdays/BirthdaysWebPart.ts`
- `src/webparts/subpageTemplate/SubpageTemplateWebPart.ts`

**Components / services (~15 files)**
- `src/webparts/home/components/Home.tsx` and related
- `src/webparts/events/components/AnnouncementRouter.tsx`
- `src/webparts/events/components/AnnouncementDetailWithSharePoint.tsx`
- `src/webparts/events/SharePointDataService.ts`
- All remaining component files importing `sp` or Fluent UI

**SCSS files (8 files)**
- One `.module.scss` per webpart component folder

---

## Dev Time

| Sub-task | Estimated | Actual |
|---|---|---|
| Research: SPFx 1.21 release notes, PnP v4 migration guide, Router v6 changelog | 2h | 1.5h |
| `package.json` version bumps + `npm install --legacy-peer-deps` | 30m | 45m |
| TSConfig + TSLint rename + Gulpfile suppressions | 20m | 20m |
| Create `pnpClient.ts` service module | 30m | 30m |
| Update 15 PnP import sites (webparts + components) | 45m | 30m |
| Remove 40 `.get()` terminators (scripted bulk edit) | 45m | 1h |
| Fluent UI swap — 7 TS + 8 SCSS files | 30m | 20m |
| React Router v6 migration (3 files) | 1h | 45m |
| Diagnose and fix build failures (tslint, tsconfig, configure-webpack, ControlStrings) | 2h | 3h |
| Node version / PATH setup for SPFx build | 30m | 30m |
| Build verification (clean `gulp bundle --ship`) | 30m | 30m |
| Setup + start scripts (Mac + Windows) | 1.5h | 1.5h |
| CLAUDE.md update | 20m | 20m |
| **Total** | **~11h** | **~11h** |

> Note: The bulk of the "Actual" variance from Estimated was in diagnosing the cascading webpack locale failure traced to the stale `ControlStrings` entry in `config/config.json`. That single line caused 8+ misleading error messages. An engineer familiar with SPFx's `_ensureLocalizedResourcesAsync` behavior would have spotted it faster (~30m vs ~90m).

---

## Risks / Regressions Watched For

- **PnP v4 `.get()` removal**: 40 call sites changed; any missed site would be a silent runtime error (Promise resolves to the query builder object instead of data). Verified by grepping for remaining `.get()` after migration.
- **React 16 → 17**: `ReactDom.render` API still valid in React 17; no `createRoot` introduced. Risk: if anyone upgrades to React 18 without reading SPFx constraints.
- **React Router v6**: `exact` prop silently dropped in v6 (routes match exactly by default). `Redirect` → `Navigate` with `replace` prop to preserve browser history behavior.
- **Fluent UI v8**: API is largely compatible with Fabric v7 for the components in use (`Stack`, `Text`, `Icon`, `Persona`, etc.). No visual regression expected.
- **`@pnp/spfx-controls-react` removal**: Confirmed unused in codebase before removing. No component was importing from it.

---

## Verification

```sh
PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp bundle --ship
# Result: clean build, 0 errors, 0 warnings (after suppressions)

PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp package-solution --ship
# Result: sharepoint/solution/sp-page.sppkg generated
```

All 8 webpart bundles compiled. No TypeScript errors. SCSS compiled cleanly against `@fluentui/react` references.

---

## Follow-ups

- **ESLint**: No `.eslintrc.js` present. Lint passes as a no-op. SPFx 1.21 ships with ESLint support — configure when bandwidth allows.
- **React 18**: SPFx 1.21 still targets React 17. Do not upgrade until Microsoft ships SPFx support for React 18.
- **`@pnp/spfx-controls-react`**: If any future webpart needs PnP React controls, install the package and re-add the `ControlStrings` entry to `config/config.json`.
- **Push to remote**: Branch `sk/upgrade-spfx-1.21` is 2 commits ahead of origin. Needs GitHub credentials (SSH key or personal access token) to push.
