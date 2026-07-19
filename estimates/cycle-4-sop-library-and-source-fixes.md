# Cycle 4 — SOP Library + The Source Front-End Fixes — Estimate

## Summary

This covers the Cycle 4 front-end work for The Source: one large new feature (a browsable **SOP Document Library** UI surfacing the 858 SOP files already migrated into SharePoint) plus a set of smaller polish/bug fixes raised in the 6/23 mid-sprint review (header overlay glitch, smoother video transitions, the SharePoint side-bar/scroll chrome, and a downloadable sample Excel for the Events bulk-upload). The SOP Library is the main build and replaces the Birthdays & Anniversaries UI as the priority; the rest are small, mostly-CSS items on the existing home web part. Estimated total is roughly **6 working days** for the core scope, or **~7 days** if the optional SOP star-rating system is included. Two items are blocked on inputs (the sample Excel file, and the SharePoint path/library for the SOP files).

## Scope (per ticket)

1. **SOP Document Library UI (main build).** New SPFx web part that mirrors the SharePoint SOP folder structure (sections → subfolders → files), lets users browse, search, and open/download individual files, shows a "Popular SOPs" panel, and leaves a reserved blank area at the top for Sahit's Copilot chatbot. V1 is browse + access only — no per-section checkboxes, video, or progress tracking.
2. **Header transparent-overlay cutoff bug.** The gradient/hue overlay on the header image is clipped at the top on Announcements/Events/Videos, leaving a white/partial bar. Find the cause, fix so it renders across the full header, verify on the 3 sections + desktop/mobile, and confirm no conflict with the recent header changes.
3. **Header video crossfade.** Replace the current hard/slide cut between carousel videos with a calm fade/crossfade, without altering playback logic, carousel structure, or the auto-replay/loop behavior.
4. **Events bulk-upload sample file.** Host/link `McAlvain_CompanyEvents_SampleUpload.xlsx` (2-tab file from MCA-113) in the bulk-upload modal as a clearly-labeled download, with the caption: *"When you're ready to upload, use only the 'Upload Version' tab from the downloaded template. Do not upload the full file with both tabs."*
5. **SharePoint white side-bar + orange-on-scroll.** Tidy the SharePoint app-bar (`#sp-appBar`) chrome and stop the orange theme colour appearing on overscroll/scroll. CSS overrides in the web-part stylesheets.
6. **Homepage SOP link update.** Repoint the existing "SOPs" Quick Link (currently old folders) to the new SOP Library UI once it's live.
7. **SOP star ratings (nice-to-have).** Per-SOP rating with average + count, backed by a new SharePoint list. Green-lit only if it fits in a few hours; otherwise deferred.

## Files to be modified

**New — SOP Library web part**
- `src/webparts/sopLibrary/` (new): `SopLibraryWebPart.ts`, `SopLibraryWebPart.manifest.json`, `components/SopLibrary.tsx` + `.module.scss`, `loc/`, `assets/`
- `config/config.json` — new `bundle` entry + `SopLibraryWebPartStrings` localized-resource entry
- `src/services/pnpClient.ts` — reuse existing `sp`; add `@pnp/sp/folders`/`files` calls (already imported)
- `teams/` — paired color/outline icons for the new component id

**Header / video / chrome / bulk-upload (existing home web part)**
- `src/webparts/home/components/Home.tsx` — video crossfade (`handleHeroVideoEnded`, slot classes), bulk-upload modal sample-file link, Quick Link target for SOPs
- `src/webparts/home/assets/style.css` — header overlay fix, hero-slot transition (crossfade), `#sp-appBar` chrome + overscroll/background colour
- Mirror chrome tweaks in `pageBanner`/`subpageTemplate`/`announcementDetailPage` stylesheets if the side-bar/scroll fix must hold site-wide
- Sample Excel asset hosted in `SiteAssets` (or web-part `assets/`) + linked from the modal

## Dev time

Estimated vs Actual (Actual filled in as work completes; — = not started).

| Ticket / sub-task | Estimated | Actual |
|---|---|---|
| **1. SOP Library UI** | **~34 h (≈4.5 d)** | — |
| &nbsp;&nbsp;Web-part scaffold + config.json/loc wiring | 3 h | — |
| &nbsp;&nbsp;PnP data layer — recursive folders/subfolders/files + metadata + download URLs | 5 h | — |
| &nbsp;&nbsp;Browser UI — collapsible sections, subfolder grouping, file rows, file-type icons, open/download | 12 h | — |
| &nbsp;&nbsp;Search across SOPs (client-side filter) | 3 h | — |
| &nbsp;&nbsp;"Popular SOPs" panel (V1 simplified — recent/most-rated; full team-activity deferred) | 3 h | — |
| &nbsp;&nbsp;Reserved chatbot space at top | 0.5 h | — |
| &nbsp;&nbsp;Responsive + Source styling | 5 h | — |
| &nbsp;&nbsp;Build / package / deploy / smoke test | 2.5 h | — |
| **2. Header overlay cutoff bug** | **3 h** | — |
| &nbsp;&nbsp;Root-cause investigation | 1 h | — |
| &nbsp;&nbsp;Fix + verify across Announcements/Events/Videos, desktop+mobile | 2 h | — |
| **3. Header video crossfade** | **4 h** | — |
| &nbsp;&nbsp;Crossfade implementation (opacity, dual-slot) | 2.5 h | — |
| &nbsp;&nbsp;Test across video lengths + confirm loop intact | 1.5 h | — |
| **4. Events sample Excel link** *(blocked on file)* | **1.5 h** | — |
| **5. White side-bar + orange-on-scroll** | **3 h** | — |
| &nbsp;&nbsp;App-bar (`#sp-appBar`) chrome | 1.5 h | — |
| &nbsp;&nbsp;Orange overscroll/background fix + verify | 1.5 h | — |
| **6. Homepage SOP link update** *(after #1 live)* | **1 h** | — |
| **Core subtotal** | **~46.5 h (≈6 d)** | — |
| **7. SOP star ratings (optional)** | **~8 h (≈1 d)** | — |
| &nbsp;&nbsp;New SharePoint list + schema | 1.5 h | — |
| &nbsp;&nbsp;Rating read/write + average/count + UI | 5 h | — |
| &nbsp;&nbsp;Test/build | 1.5 h | — |
| **Total incl. ratings** | **~54.5 h (≈7 d)** | — |

## Risks / regressions watched for

- **SOP folder shape unknown** — estimate assumes a tidy sections→subfolders→files hierarchy in one library. Deeper nesting, inconsistent naming, or 858 files across many folders could push the data-layer/UI numbers up. Need the exact library path to confirm.
- **"Popular SOPs" needs activity data** — true "surfaced from team activity / searches" requires tracking infrastructure (a list/log). V1 estimate is for a simplified version; the full version is extra.
- **Header overlay + video crossfade interplay** — both touch the hero header recently changed (auto-replay loop fix, loader, spacing). Must verify the overlay fix and crossfade don't regress those.
- **Chrome overrides are fragile** — `#sp-appBar`/suite-bar/scroll tweaks target SharePoint's own DOM; Microsoft can change those ids/classes. Orange-on-scroll may be the theme/overscroll background and may need a body/canvas background override.
- **Ratings is not trivial** — requires a new SharePoint list and write access; flagged nice-to-have for a reason.
- **SPFx asset bundling** — new fonts/files must be `.woff`/supported types (SPFx skips `.otf`); the hosted sample `.xlsx` should live in SiteAssets, not bundled.

## Verification

For each item: `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp bundle` must complete clean (tsc + webpack), then smoke-test on the hosted workbench. SOP Library additionally verified by browsing real folders, opening + downloading files, and search; header/video/chrome items verified on Announcements/Events/Videos across desktop + mobile. Production check via `gulp bundle --ship` + `gulp package-solution --ship` → `sharepoint/solution/sp-page.sppkg`.

## Follow-ups / blockers / dependencies

- **Blocker (Ticket 4):** need `McAlvain_CompanyEvents_SampleUpload.xlsx` from MCA-113. (Supersedes the auto-generated template currently in the bulk-upload modal — that code would be replaced by a link to this real file.)
- **Blocker (Ticket 1):** need the SharePoint **site + library path** where the 858 SOP files live, and confirmation of the folder hierarchy.
- **Dependency:** Ticket 6 (homepage link) is done only after Ticket 1 is live.
- **Out of scope:** Copilot chatbot (Sahit) — we only reserve the top space.
- **Coordinate:** header tickets must not conflict with MCA-112 (auto-replay) and MCA-138 referenced in the bug ticket.
