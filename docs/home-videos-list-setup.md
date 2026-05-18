# HomeVideos SharePoint List — Setup Guide

This document describes the SharePoint list that powers the **rotating hero video** on the home page (`THE SOURCE` tab). The list lives at:

`https://<your-tenant>.sharepoint.com/sites/TheSource/Lists/HomeVideos`

The home web part loads all items from this list at page load, sorts them by `DisplayOrder` ascending, and plays each video in sequence. When the current video ends (`onEnded`), the hero advances to the next item, looping back to item 1 after the last.

The hero uses two stacked `<video>` slots and animates a horizontal **slide transition** between them (~1s): the outgoing video slides out to the left while the incoming video slides in from the right. Both slots preload, so the next video is ready when its turn arrives.

---

## List configuration

- **List name (display title):** `HomeVideos`
- **Internal name:** can be anything — the code looks up by display title `getByTitle("HomeVideos")`
- **List type:** standard SharePoint List (no document library — videos are referenced by URL, not uploaded)

### Required columns

| Column name | Type | Required | Notes |
|---|---|---|---|
| `Title` | Single line of text | Default | Used as the video's display title |
| `VideoUrl` | Single line of text **or** Hyperlink | Yes | Direct URL to a `.mp4`/`.webm`/`.mov` file. Must start with `http://` or `https://` |
| `VideoDescription` | Multiple lines of text | No | Optional caption (not currently rendered, but read by code) |
| `DisplayOrder` | Number | Yes | Integer 1, 2, 3… — controls the playback sequence |
| `Time` | Single line of text | No | Optional duration label like `"2:30"` |

### How the code reads `VideoUrl`

The home web part (`Home.tsx → loadHomeVideos`) does **not** assume a specific column internal name. It scans every non-system field on each list item and picks the first value that:

1. Starts with `http://` or `https://`
2. Ends with a video file extension (`.mp4`, `.webm`, `.mov`, `.m4v`, `.ogv`, `.mkv`, `.avi`, `.wmv`, `.mpeg`, `.mpg`)

If no field has a video extension, it falls back to the first plain `http(s)` URL it finds. System fields (`odata.*`, `ServerRedirectedEmbedUri`, `ServerRedirectedEmbedUrl`) are skipped so the list metadata never gets confused for a video.

This means it doesn't matter if you name the column `VideoUrl`, `VideoURL`, `Url`, `Link`, etc. — as long as the value is a direct video URL, the code finds it.

### What does NOT work

- ❌ YouTube watch pages (`https://www.youtube.com/watch?v=...`) — these are HTML pages, not video files
- ❌ Vimeo viewer pages
- ❌ Page URLs that *embed* a video — must be the raw file URL
- ❌ Streaming URLs that require authentication (Sharepoint Stream URLs need extra handling)

---

## Test data

Use these public sample MP4 URLs to verify the rotation works end-to-end. Add each as a separate row in the list.

### Quick test (3 items)

| Title | VideoUrl | DisplayOrder |
|---|---|---|
| Sample 5s | `https://download.samplelib.com/mp4/sample-5s.mp4` | 1 |
| Sample 10s | `https://download.samplelib.com/mp4/sample-10s.mp4` | 2 |
| Big Buck Bunny | `https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4` | 3 |

### Extended test (5 items)

| Title | VideoUrl | DisplayOrder |
|---|---|---|
| Sample 5s | `https://download.samplelib.com/mp4/sample-5s.mp4` | 1 |
| Sample 10s | `https://download.samplelib.com/mp4/sample-10s.mp4` | 2 |
| Sample 15s | `https://download.samplelib.com/mp4/sample-15s.mp4` | 3 |
| W3 Sample | `https://www.w3schools.com/html/mov_bbb.mp4` | 4 |
| Big Buck Bunny | `https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4` | 5 |

### Project's own example

| Title | VideoUrl | DisplayOrder |
|---|---|---|
| Big-D Projects | `https://cms.big-d.com/wp-content/uploads/2024/02/Projects.mp4` | 1 |

---

## Verifying it works

1. Open the home page in workbench: `https://<your-tenant>.sharepoint.com/sites/TheSource?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/build/manifests.js`
2. Open DevTools → Console.
3. Filter the console by `[HomeVideos]`.
4. You should see two log lines:
   - `[HomeVideos] raw items:` — array of items returned by SharePoint
   - `[HomeVideos] filtered+sorted:` — items with `_videoUrl` populated, sorted by `DisplayOrder`
5. The hero video on `THE SOURCE` tab should auto-play the first video and advance every 12 seconds.

If `filtered+sorted` is **empty** (`[]`):
- Confirm the list is named exactly `HomeVideos` (case-sensitive display title)
- Confirm at least one row has a `VideoUrl` starting with `http://` or `https://`
- Confirm the URL ends with a video extension (or is at least a valid URL)

---

## Code references

- Fetching: [src/webparts/home/components/Home.tsx](../src/webparts/home/components/Home.tsx) → `loadHomeVideos()`
- State: `homeVideos`, `currentHeroVideoIndex` in `IHomeState`
- Rotation timer: `heroVideoTimer` field on the `Home` component, runs every 12s
- Rendering: hero `<video>` element inside `hero-video-wrapper` (around line 309–340)

## Fallback chain

If `HomeVideos` is empty or unreachable, the hero falls back to:

1. Property pane → "Hero Video" file picker (`heroVideoFilePicker`)
2. Property pane → "Or paste a Hero Video URL" text field (`heroVideoUrl`)
3. Hardcoded fallback: `https://cms.big-d.com/wp-content/uploads/2024/02/Projects.mp4`

So the page is never broken — it always plays *some* video.
