# SOP Ratings & SOP Searches Lists — Setup

These two SharePoint lists back the interactive features of the SOP Library web part (`src/webparts/sopLibrary/components/SopLibrary.tsx`):

- **`SOP Ratings`** — one row per user per SOP; powers the star display, "Your rating", and the "Highest Rated" leaderboard.
- **`SOP Searches`** — one row per search-driven file open; powers the "Most Searched" leaderboard.

## How they're created — auto-provisioned by the solution

Both lists are **provisioned declaratively by the package**, not created by hand. They're defined in [sharepoint/assets/elements.xml](../sharepoint/assets/elements.xml) (site columns → content types → `ListInstance`s at `Lists/SOPRatings` and `Lists/SOPSearches` → content-type bindings), and that feature is referenced by [config/package-solution.json](../config/package-solution.json).

The one requirement that makes provisioning actually run: **`skipFeatureDeployment` must be `false`** in `package-solution.json` (it was previously `true`, which is why the lists never appeared and rating/search writes returned `403 Forbidden`).

### Deploying

1. `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp bundle --ship`
2. `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx gulp package-solution --ship` → `sharepoint/solution/sp-page.sppkg`
3. Upload the `.sppkg` to the tenant **App Catalog** and deploy it.
4. On the target site (e.g. TheSource): **Site Contents → Add an app →** add this solution. Adding the app **activates the feature**, which creates `SOP Ratings` and `SOP Searches`.

> Because `skipFeatureDeployment` is now `false`, the app must be **added to each site** where the web parts are used — this applies to the whole solution, not just the SOP web part. For a single-site deployment, add the app once and everything (web parts + list provisioning) is covered.

After adding the app, confirm both lists appear under **Site Contents**.

## List columns (for reference / manual fallback)

If you ever need to create the lists by hand (e.g. provisioning didn't run), match these exactly:

### `SOP Ratings` (`Lists/SOPRatings`)

| Column | Type | Notes |
|---|---|---|
| `Title` | Single line of text | Default; set to the SOP file name (not read back) |
| `SOPFileId` | Number | The document's list Item ID in the SOP library |
| `Rating` | Number | Integer 1–5 |
| `UserId` | Text | The rater's SharePoint user id (`sp.web.currentUser().Id`) — lets a user update their own rating instead of adding a duplicate |

### `SOP Searches` (`Lists/SOPSearches`)

| Column | Type | Notes |
|---|---|---|
| `Title` | Single line of text | Default; set to the SOP file name |
| `SOPFileId` | Number | The document's list Item ID |

## Permissions

Writing a rating or logging a search now needs only **Contribute** (Edit) on the site — the client no longer tries to create lists/columns at runtime. Viewers with **Read/Visitor**-only rights can browse and see aggregates but cannot submit ratings; that's a SharePoint permissions decision, not a code limit.

## How the code uses these lists

- `loadRatings()` — aggregates all `SOP Ratings` rows by `SOPFileId` → `{avg, count}`.
- `loadMyRatings(userId)` — the current user's own rows (`UserId eq '<id>'`) so the control knows whether to `update()` or `add()`.
- `submitRating(file, stars)` — `items.add` (new) or `items.getById(id).update` (existing), with a field-strip-and-retry fallback; then re-reads and rebuilds leaderboards.
- `logSearch(file)` — best-effort `items.add` to `SOP Searches` on a search-result open; failures are silent (the optimistic in-memory bump stands for the session).

All reads use `top(5000)`/`top(10000)` — fine for the current ~858-file library; revisit if the ratings/searches lists grow past that.

## Code references

- [src/webparts/sopLibrary/components/SopLibrary.tsx](../src/webparts/sopLibrary/components/SopLibrary.tsx)
- [sharepoint/assets/elements.xml](../sharepoint/assets/elements.xml) — declarative list/column definitions
- [config/package-solution.json](../config/package-solution.json) — `skipFeatureDeployment: false`, feature → `elements.xml`
