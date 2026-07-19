# Initial Page-Load Performance — Phases 1 & 2

## Summary

The intranet home page was slow to load because the main web part shipped a 2.8 MB JavaScript bundle (containing an Excel-parsing library, every world locale for the date library, a timezone database, and an unused jQuery copy), the deployment package carried ~10 stale copies of every bundle, a 3.6 MB fallback image downloaded on most visits, and two hero videos downloaded in full at first paint. This change removes or defers all of that. The home bundle is now **57% smaller (2.80 MB → 1.20 MB)**, the events bundle **77% smaller (1.27 MB → 0.30 MB)**, and the deployment package **78% smaller (21.4 MB → 4.8 MB)** — with no functional changes for end users.

## What changed

- **Build hygiene**: `gulp clean` is now part of the documented ship flow — stale hash-variant bundles no longer accumulate in the package (230 → 130 files).
- **moment locales stripped** (webpack `ContextReplacementPlugin`, English only) — ~300 KB saved in each of 5 bundles; no code calls `moment.locale()`.
- **xlsx lazy-loaded** — the ~1 MB Excel parser now loads only when an admin picks a bulk-upload file (matches the existing lazy exceljs pattern).
- **moment-timezone removed** — its ~500 KB timezone database was only used to convert UTC→browser-local, which plain `moment.utc(x).local()` does.
- **fabric.min.css un-inlined** — the 260 KB stylesheet was baked into 3 bundles as a JS string; now loaded once from the Microsoft CDN via `SPComponentLoader.loadCss` (verified rule-identical, Fabric Core 9.6.1).
- **Fluent UI path imports** — root-barrel `@fluentui/react` imports replaced with tree-shakeable `/lib/<Control>` imports in 5 web parts; several entirely-unused Fluent/jQuery/moment imports deleted.
- **SopLibrary + sample template lazy-loaded** inside Home (only needed on the `#/sop-library` route / admin download).
- **Hero video**: only the active slot preloads fully; the standby slot fetches metadata only (one video download at first paint instead of two).
- **Video thumbnails**: the hidden helper video that grabs a midpoint poster frame now uses `preload='metadata'` + range requests instead of downloading each full video.
- **SubpageTemplate**: removed an artificial 1-second preloader delay.
- **Dead AAD token round-trip removed** in Home and Events (token was acquired and never used).
- **tsconfig `target: es5 → es2017`** — stops down-compiling async/await for evergreen browsers.
- **Images compressed in place**: `Event.jpg` 3.6 MB → 177 KB (6471×4314 → 1200×800), `Anno.jpg` 456 → 215 KB (×2 copies), `Announcement.jpg` 332 → 281 KB, `annobanner.jpg` 400 → 330 KB.
- **~78 MB of dead repo assets deleted**: `Projects.mp4` (16.6 MB ×2, referenced only via a remote URL), 60 unreferenced `.otf` fonts (~40 MB; CSS uses the `.woff` copies), `MCALogoLoadingIcon.gif` (1.4 MB), and 5 unreferenced images.

### Bundle sizes (ship, minified)

| Bundle | Before | After | Δ |
|---|---|---|---|
| home-web-part | 2,800,111 B | 1,198,059 B | **−57%** |
| events-web-part | 1,273,427 B | 296,080 B | **−77%** |
| page-banner-web-part | 1,037,221 B | 783,225 B | −24% |
| subpage-template-web-part | ~919,045 B | 421,426 B | −54% |
| birthdays-web-part | 373,236 B | 128,617 B | −66% |
| celebration-web-part | 372,962 B | 128,180 B | −66% |
| **sp-page.sppkg** | **21,366,515 B (230 files)** | **4,794,545 B (130 files)** | **−78%** |

New async chunks (load on demand only): xlsx ~420 KB (bulk upload), exceljs ~940 KB (bulk upload image extraction).

## Files modified

**Build/config**
- `gulpfile.js` — moment locale ContextReplacementPlugin
- `tsconfig.json` — target es2017
- `CLAUDE.md` — ship flow with `gulp clean`; bundle-size guardrails section

**Home web part**
- `src/webparts/home/components/Home.tsx` — lazy xlsx, lazy SopLibrary, lazy sample template, moment-timezone → moment.utc().local(), hero preload, thumbnail helper preload, deleted jquery import + dead AAD token call, Fluent path imports, fabric.min.css un-require'd
- `src/webparts/home/HomeWebPart.ts` — `SPComponentLoader.loadCss(Fabric Core 9.6.1)`
- `src/webparts/home/assets/` — Event.jpg / Anno.jpg / Announcement.jpg / annobanner.jpg compressed; Projects.mp4, MCALogoLoadingIcon.gif, *.otf deleted

**Other web parts**
- `src/webparts/events/components/Events.tsx` — moment-timezone removed, dead AAD token call removed
- `src/webparts/subpageTemplate/components/SubpageTemplate.tsx` — 1 s delay removed, Fluent path imports, fabric.min.css un-require'd
- `src/webparts/subpageTemplate/SubpageTemplateWebPart.ts` — loadCss
- `src/webparts/pageBanner/components/PageBanner.tsx` — Fluent path imports (dropped unused Label/Pivot), fabric.min.css un-require'd
- `src/webparts/pageBanner/PageBannerWebPart.ts` — loadCss
- `src/webparts/pageBanner/assets/Images/` — Anno.jpg compressed; Banner-Boston.png, bg.png deleted
- `src/webparts/banner/components/Banner.tsx` — Fluent path import
- `src/webparts/announcementDetailPage/components/AnnouncementDetailPage.tsx` — deleted unused jquery/moment/Fluent imports
- `src/webparts/announcementDetailPage/assets/` — Projects.mp4, Event.jpg, Announcement.jpg, news.png, *.otf deleted
- All web part `assets/` — *.otf deleted (60 files)

## Dev time

| Sub-task | Estimated | Actual |
|---|---|---|
| Exploration (bundle analysis, waterfall trace, platform survey) | 45m | 30m |
| Plan + review | 30m | 20m |
| Build config (gulpfile, tsconfig, CLAUDE.md) | 15m | 10m |
| Lazy xlsx + SopLibrary + template | 45m | 30m |
| moment-timezone removal (Home + Events) | 30m | 15m |
| fabric.min.css → CDN loadCss (3 web parts, incl. rule-set verification) | 45m | 30m |
| Fluent path imports + dead import cleanup (5 web parts) | 30m | 25m |
| Video preload fixes (hero + thumbnails) | 20m | 10m |
| Image compression + dead asset audit/deletion | 45m | 30m |
| Ship build + size verification | 20m | 15m |
| **Total** | **~5.5h** | **~3.75h** |

## Risks / regressions watched for

- **moment-timezone removal** (highest-risk item): all 4 usages were `Moment.tz(x,"UTC").tz(browserTz)` — mathematically identical to `moment.utc(x).local()`. **Needs a hosted smoke test of event times in a non-UTC browser timezone.**
- **fabric.min.css from CDN**: local copy was stock Fabric Core 9.6.1; selector sets verified identical (2,226 selectors, matching hashes). If the tenant blocks `static2.sharepointonline.com` (unlikely — it's Microsoft's own CDN used by SPO itself), grid styles would regress.
- **Lazy xlsx**: `normalizeBulkDate` depends on the module being loaded; it is only called from `handleBulkFile`, which loads the module first. Bulk upload (xlsx + csv) needs one round of manual testing.
- **Hero crossfade**: standby slot now buffers when it becomes active; test the A→B transition with 2+ hero videos for a visible gap.
- **es2017 target**: changes emitted code shape everywhere; full home-page smoke test recommended (all supported browsers are evergreen).
- Image recompression is visual-only; originals recoverable via git.

## Verification

- `gulp clean && gulp bundle --ship && gulp package-solution --ship` — clean build, zero TS errors.
- Bundle sizes recorded above (`ls -laS ClientSideAssets`); exactly one hashed JS per web part in the package.
- Home bundle greps: 0 moment locales, 0 timezone data, 0 inlined fabric css; xlsx library present only in async `chunk.959`.
- **Adversarial code review** (4 reviewers → per-finding verification) run against the diff. It confirmed the timezone swap, thumbnail helper, Fabric-CDN loadCss, and es2017/build changes are correct, and surfaced 3 regressions in the lazy-loading / video changes — all fixed:
  1. *(medium)* `React.lazy(SopLibrary)` had no error boundary → a stale-deploy/offline chunk 404 would blank the whole Home web part for the session. **Fixed**: added `ChunkErrorBoundary` (new `src/webparts/home/components/ChunkErrorBoundary.tsx`) around the Suspense, with a Reload action.
  2. *(low)* `downloadSampleTemplate`'s dynamic import had no catch → silent no-op button on chunk failure. **Fixed**: try/catch with a user alert.
  3. *(low)* standby hero `preload='metadata'` could show a crossfade gap on slow networks. **Fixed**: `handleHeroPlay` upgrades the standby slot to full buffering only *after* the active video starts playing — first paint still downloads one video, but the crossfade is warmed ahead of time.
- Hosted smoke test (after deploying the new sppkg): pending — home page cold load, one hero-video request + seamless crossfade, event times in local timezone, bulk upload as admin, `#/sop-library` deep link (and the error-boundary Reload path on a stale chunk).

## Follow-ups

- **Phase 3 (data waterfall)** — not in this change: dedupe Company Events / Announcements / BirthdayWorkAnniversary duplicate reads (list fetched 3× at load), remove the N+1 `getById` probes in `getCompanyEvents`, defer tab-only fetches (`getAnnouncementsall`, `getAllCalendarEvents`, `loadVideos`, quiz), share the `currentUser` read, sessionStorage cache for the Graph group calendar (duplicated between Home and Events), PnP `Caching` behavior for near-static lists, right-size `top(4999)` reads, SopLibrary duplicate existence probes.
- **Enable the Office 365 public CDN** (tenant admin, one-time): `Set-SPOTenantCdnEnabled -CdnType Public` in the SPO Management Shell — app-catalog assets then serve from `publiccdn.sharepointonline.com` automatically.
- Optional: migrate the remaining lazy xlsx usage to exceljs entirely (removes one of the two Excel libraries).
- Optional: pngquant/optipng for the remaining alpha PNGs (eventbanner.png 833 KB, vidoesBanner.png 244 KB).
