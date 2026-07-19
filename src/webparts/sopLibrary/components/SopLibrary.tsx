import * as React from 'react';
import { sp } from '../../../services/pnpClient';
import { ISopLibraryProps } from './ISopLibraryProps';
require('../assets/style.css');

// ─── Data types ───────────────────────────────────────────────────────────────

interface ISopFile {
  id: number;
  name: string;
  code: string;
  fileRef: string;
  fileLeafRef: string;
  fileExt: string;
  modified: string;
  version: string;
  revDate: string;
  phase: string;
  avgRating: number;
  ratingCount: number;
  myRating: number;
  myRatingItemId: number;
  searchCount: number;
  isInteractive: boolean;
  section: string;        // top-level folder (folderPath[0]); groups leaderboards
  folderPath: string[];   // full folder chain under the library root, any depth
}

// File types treated as "interactive playbooks" (video / web content).
const INTERACTIVE_EXTS = ['mp4', 'mov', 'm4v', 'webm', 'html', 'htm', 'aspx'];

// A folder node in the library tree. Recursive: a folder can hold both files and
// nested subfolders to any depth (the SharePoint library nests several levels
// deep — e.g. Organization ▸ Employee Resources ▸ Drivers List ▸ Templates).
interface ISopFolder {
  name: string;
  path: string;            // full path key from the root, e.g. "1-Organization/Employee Resources"
  folders: ISopFolder[];
  files: ISopFile[];
}

interface ISopLibraryState {
  allFiles: ISopFile[];
  sections: ISopFolder[];   // top-level folders
  mostSearched: ISopFile[];
  highestRated: ISopFile[];
  isLoading: boolean;
  errorMessage: string;
  searchQuery: string;
  expandedPaths: string[];  // folder paths currently expanded (any depth)
  activePhase: 'ALL' | 'P1' | 'P2';
  hasPhaseData: boolean;
  currentUserId: number;
  savingRatingForFileId: number;
  ratingErrorForFileId: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseLeafRef(leafRef: string): { code: string; name: string; ext: string } {
  const dotIdx = leafRef.lastIndexOf('.');
  const ext = dotIdx >= 0 ? leafRef.slice(dotIdx + 1).toLowerCase() : '';
  const base = dotIdx >= 0 ? leafRef.slice(0, dotIdx) : leafRef;
  // Matches "BB01 - Title", "CSI-01 - Title", "BB01-Title", "BB01_Title" etc.
  const m = base.match(/^([A-Z]{1,6}[-]?\d{1,4})\s*[-–_]\s*(.+)$/i);
  if (m) return { code: m[1].toUpperCase(), name: m[2].trim(), ext };
  return { code: '', name: base.trim(), ext };
}

function fmtDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return `Rev ${d.getMonth() + 1}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
}

function fileTypeIcon(ext: string): string {
  switch ((ext || '').toLowerCase()) {
    case 'pdf':   return '📄';
    case 'docx':
    case 'doc':   return '📝';
    case 'xlsx':
    case 'xls':   return '📊';
    case 'pptx':
    case 'ppt':   return '📋';
    case 'mp4':
    case 'mov':   return '🎬';
    default:      return '📄';
  }
}

// ─── Star rating display ──────────────────────────────────────────────────────

interface IStarProps { avg: number; count: number; }

class StarRating extends React.Component<IStarProps> {
  public render(): JSX.Element {
    const { avg, count } = this.props;
    const filled = Math.round(avg);
    return (
      <div className="sop-rating">
        {[1, 2, 3, 4, 5].map(s => (
          <span key={s} className={`sop-star ${s <= filled ? 'sop-star-filled' : ''}`}>★</span>
        ))}
        {count > 0
          ? <span className="sop-rating-meta">{avg.toFixed(1)} avg · {count} ratings</span>
          : <span className="sop-rating-meta">Not yet rated</span>}
      </div>
    );
  }
}

// ─── Interactive "rate this SOP" control ──────────────────────────────────────

interface IRatingInputProps {
  myRating: number;
  saving: boolean;
  error: string;
  onRate: (stars: number) => void;
}

interface IRatingInputState { hover: number; }

class RatingInput extends React.Component<IRatingInputProps, IRatingInputState> {
  constructor(props: IRatingInputProps) {
    super(props);
    this.state = { hover: 0 };
  }

  public render(): JSX.Element {
    const { myRating, saving, error, onRate } = this.props;
    const { hover } = this.state;
    const filled = hover || myRating;
    return (
      <div
        className="sop-rating-input"
        onClick={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
      >
        <span className="sop-rating-input-label">
          {myRating > 0 ? 'Your rating:' : 'Rate this SOP:'}
        </span>
        <span className="sop-rating-input-stars" onMouseLeave={() => this.setState({ hover: 0 })}>
          {[1, 2, 3, 4, 5].map(s => (
            <button
              key={s}
              type="button"
              className={`sop-star-input ${s <= filled ? 'sop-star-input-filled' : ''}`}
              disabled={saving}
              aria-label={`Rate ${s} star${s === 1 ? '' : 's'}`}
              onMouseEnter={() => this.setState({ hover: s })}
              onClick={e => { e.stopPropagation(); onRate(s); }}
            >
              ★
            </button>
          ))}
        </span>
        {saving && <span className="sop-rating-saving">Saving…</span>}
        {!saving && error && <span className="sop-rating-error">{error}</span>}
      </div>
    );
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

export default class SopLibrary extends React.Component<ISopLibraryProps, ISopLibraryState> {

  constructor(props: ISopLibraryProps) {
    super(props);
    this.state = {
      allFiles: [],
      sections: [],
      mostSearched: [],
      highestRated: [],
      isLoading: true,
      errorMessage: '',
      searchQuery: '',
      expandedPaths: [],
      activePhase: 'ALL',
      hasPhaseData: false,
      currentUserId: 0,
      savingRatingForFileId: 0,
      ratingErrorForFileId: 0,
    };
  }

  public componentDidMount(): void {
    this.loadLibrary().catch(err => {
      this.setState({ isLoading: false, errorMessage: String(err) });
    });
  }

  // ─── Data load ─────────────────────────────────────────────────────────────

  private loadLibrary = async (): Promise<void> => {
    const { libraryTitle, versionColumn, revDateColumn, phaseColumn } = this.props;

    // Build the select list dynamically
    const selectFields = [
      'ID', 'Title', 'FileLeafRef', 'FileRef', 'FileDirRef', 'FSObjType', 'Modified',
    ];
    if (versionColumn) selectFields.push(versionColumn);
    if (revDateColumn) selectFields.push(revDateColumn);
    if (phaseColumn)   selectFields.push(phaseColumn);

    // .top(5000) is SharePoint's max page size — covers libraries up to 5000 files
    // in one request (the prior 2000 silently truncated larger libraries).
    const rawItems: any[] = await sp.web.lists.getByTitle(libraryTitle)
      .items
      .select(selectFields.join(','))
      .filter('FSObjType eq 0')
      .top(5000)();

    // The independent data sources run in parallel (not as sequential round-trips):
    // ratings, search counts, the library root path, and the current user (needed
    // to look up their own ratings).
    const [ratingsMap, searchMap, libraryRootPath, currentUser] = await Promise.all([
      this.loadRatings(),
      this.loadSearchCounts(),
      this.loadRootPath(libraryTitle, rawItems),
      sp.web.currentUser().catch(() => null),
    ]);
    const currentUserId: number = currentUser ? currentUser.Id : 0;
    const myRatingsMap = currentUserId ? await this.loadMyRatings(currentUserId) : new Map();

    let hasPhaseData = false;

    const allFiles: ISopFile[] = rawItems.map((item: any) => {
      const parsed   = parseLeafRef(item.FileLeafRef || '');
      const name     = (item.Title && item.Title !== item.FileLeafRef) ? item.Title : parsed.name;
      const version  = versionColumn && item[versionColumn] ? String(item[versionColumn]) : '';
      const rawRev   = revDateColumn && item[revDateColumn] ? item[revDateColumn] : item.Modified;
      const revDate  = fmtDate(rawRev);
      const phase    = phaseColumn && item[phaseColumn] ? String(item[phaseColumn]) : '';
      if (phase) hasPhaseData = true;

      // Derive the full folder chain from the file's path, relative to the
      // library root. Files at the root land in "General". The chain can be any
      // depth — the render tree nests to match.
      const dirDecoded  = decodeURIComponent(item.FileDirRef || '');
      let relPath = dirDecoded;
      if (libraryRootPath && relPath.indexOf(libraryRootPath) === 0) {
        relPath = relPath.slice(libraryRootPath.length).replace(/^\//, '');
      }
      const parts       = relPath.split('/').filter(Boolean);
      const folderPath  = parts.length ? parts : ['General'];
      const section     = folderPath[0];

      const rating = ratingsMap.get(item.ID) || { avg: 0, count: 0 };
      const myRating = myRatingsMap.get(item.ID) as { itemId: number; rating: number } | undefined;

      return {
        id: item.ID,
        name: name || parsed.name || item.FileLeafRef,
        code: parsed.code,
        fileRef: item.FileRef,
        fileLeafRef: item.FileLeafRef,
        fileExt: parsed.ext,
        modified: item.Modified,
        version,
        revDate,
        phase,
        avgRating: rating.avg,
        ratingCount: rating.count,
        myRating: myRating ? myRating.rating : 0,
        myRatingItemId: myRating ? myRating.itemId : 0,
        searchCount: searchMap.get(item.ID) || 0,
        isInteractive: INTERACTIVE_EXTS.indexOf(parsed.ext) >= 0,
        section,
        folderPath,
      };
    });

    const { sections, mostSearched, highestRated } = this.buildDerivedState(allFiles);

    this.setState({
      allFiles,
      sections,
      mostSearched,
      highestRated,
      isLoading: false,
      hasPhaseData,
      currentUserId,
      // Open first section by default
      expandedPaths: sections.length > 0 ? [sections[0].path] : [],
    });
  };

  // Builds the recursive folder tree and the two "Popular SOPs" leaderboards
  // from a flat file list. Shared by the initial load and by refreshRatings()
  // (after a rating submit) so the tree/leaderboard logic lives in one place.
  private buildDerivedState(allFiles: ISopFile[]): {
    sections: ISopFolder[]; mostSearched: ISopFile[]; highestRated: ISopFile[];
  } {
    // Walk each file's folderPath, creating/reusing a folder node per segment,
    // then drop the file into its deepest folder. Handles arbitrary nesting.
    const root: ISopFolder = { name: '', path: '', folders: [], files: [] };
    for (const file of allFiles) {
      let node = root;
      for (let i = 0; i < file.folderPath.length; i++) {
        const seg = file.folderPath[i];
        const path = file.folderPath.slice(0, i + 1).join('/');
        let child = node.folders.filter(f => f.name === seg)[0];
        if (!child) {
          child = { name: seg, path, folders: [], files: [] };
          node.folders.push(child);
        }
        node = child;
      }
      node.files.push(file);
    }

    // Sort folders (by name) and files (by code/name) recursively, depth-first.
    const sortFolder = (f: ISopFolder): void => {
      f.folders.sort((a, b) => a.name.localeCompare(b.name));
      f.files.sort((a, b) => (a.code || a.name).localeCompare(b.code || b.name));
      f.folders.forEach(sortFolder);
    };
    sortFolder(root);
    const sections: ISopFolder[] = root.folders;

    // Popular SOPs — two independent leaderboards from real team activity.
    // Most Searched: by search count (empty until there's search history).
    const mostSearched = allFiles
      .filter(f => f.searchCount > 0)
      .sort((a, b) => b.searchCount - a.searchCount)
      .slice(0, 5);
    // Highest Rated: by average rating, then by number of ratings (empty if none).
    const highestRated = allFiles
      .filter(f => f.ratingCount > 0)
      .sort((a, b) => b.avgRating - a.avgRating || b.ratingCount - a.ratingCount)
      .slice(0, 5);

    return { sections, mostSearched, highestRated };
  }

  // Optional "SOP Ratings" companion list (each row: SOPFileId + Rating). Probed
  // with a filter so an absent list logs no 404. SOPFileId is coerced to Number
  // to match the numeric item.ID (a Text column would otherwise never match), and
  // non-finite ratings are dropped so an average is never NaN.
  private async loadRatings(): Promise<Map<number, { avg: number; count: number }>> {
    const map: Map<number, { avg: number; count: number }> = new Map();
    try {
      const exists: any[] = await sp.web.lists
        .filter("Title eq 'SOP Ratings'").select('Id').top(1)();
      if (!exists || exists.length === 0) return map;
      const rows: any[] = await sp.web.lists.getByTitle('SOP Ratings')
        .items.select('SOPFileId,Rating').top(5000)();
      const groups: Map<number, number[]> = new Map();
      for (const r of rows) {
        const id = Number(r.SOPFileId);
        const rating = Number(r.Rating);
        if (!isFinite(id) || !isFinite(rating)) continue;
        if (!groups.has(id)) groups.set(id, []);
        groups.get(id).push(rating);
      }
      groups.forEach((vals, id) => {
        const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
        map.set(id, { avg: Math.round(avg * 10) / 10, count: vals.length });
      });
    } catch (_) { /* ratings unavailable — silent */ }
    return map;
  }

  // The current user's own rows in "SOP Ratings", keyed by SOPFileId, so the
  // interactive control knows whether to add a new row or update an existing one.
  private async loadMyRatings(userId: number): Promise<Map<number, { itemId: number; rating: number }>> {
    const map: Map<number, { itemId: number; rating: number }> = new Map();
    try {
      const exists: any[] = await sp.web.lists
        .filter("Title eq 'SOP Ratings'").select('Id').top(1)();
      if (!exists || exists.length === 0) return map;
      const rows: any[] = await sp.web.lists.getByTitle('SOP Ratings')
        .items.select('Id,SOPFileId,Rating').filter(`UserId eq '${userId}'`).top(5000)();
      for (const r of rows) {
        const fileId = Number(r.SOPFileId);
        const rating = Number(r.Rating);
        if (!isFinite(fileId) || !isFinite(rating)) continue;
        map.set(fileId, { itemId: r.Id, rating });
      }
    } catch (_) { /* per-user ratings unavailable (e.g. no UserId column) — silent */ }
    return map;
  }

  // Optional "SOP Searches" list (each row = one search event with SOPFileId).
  // Keys coerced to Number to match item.ID. Absent list / no rows → empty map.
  private async loadSearchCounts(): Promise<Map<number, number>> {
    const map: Map<number, number> = new Map();
    try {
      const exists: any[] = await sp.web.lists
        .filter("Title eq 'SOP Searches'").select('Id').top(1)();
      if (!exists || exists.length === 0) return map;
      const rows: any[] = await sp.web.lists.getByTitle('SOP Searches')
        .items.select('SOPFileId').top(10000)();
      for (const r of rows) {
        const id = Number(r.SOPFileId);
        if (isFinite(id)) map.set(id, (map.get(id) || 0) + 1);
      }
    } catch (_) { /* search history unavailable — silent */ }
    return map;
  }

  // The library's root server-relative path. The list Title can differ from its
  // URL segment (e.g. "Documents" lives at ".../Shared Documents"), so we read the
  // actual root folder; fall back to inferring from the first item's path.
  private async loadRootPath(libraryTitle: string, rawItems: any[]): Promise<string> {
    try {
      const rootFolder: any = await sp.web.lists.getByTitle(libraryTitle)
        .rootFolder.select('ServerRelativeUrl')();
      return decodeURIComponent(rootFolder.ServerRelativeUrl || '').replace(/\/$/, '');
    } catch (_) {
      if (rawItems.length > 0) {
        const firstDir = decodeURIComponent(rawItems[0].FileDirRef || '');
        const marker = `/${libraryTitle}/`;
        const idx = firstDir.indexOf(marker);
        if (idx >= 0) return firstDir.slice(0, idx + marker.length).replace(/\/$/, '');
      }
      return '';
    }
  }

  // ─── Rating submission ─────────────────────────────────────────────────────

  // Writes a rating to "SOP Ratings": update()s the caller's existing row if
  // they've already rated this file, otherwise add()s a new one. If the target
  // list is missing an expected column (e.g. a manually-created list without
  // "UserId"), the unknown field is stripped and the write retried once — same
  // resiliency pattern used for the Company Events bulk import in Home.tsx.
  private submitRating = async (file: ISopFile, stars: number): Promise<void> => {
    if (this.state.savingRatingForFileId) return;
    this.setState({ savingRatingForFileId: file.id, ratingErrorForFileId: 0 });

    const payload: { [key: string]: any } = {
      Title: file.fileLeafRef,
      SOPFileId: file.id,
      Rating: stars,
      // UserId is a Text column (see docs/sop-ratings-list-setup.md) — send it
      // as a string or the REST add() 400s with "Cannot convert a primitive
      // value to the expected type 'Edm.String'".
      UserId: String(this.state.currentUserId),
    };

    const writeWithRetry = async (): Promise<void> => {
      try {
        if (file.myRatingItemId) {
          await sp.web.lists.getByTitle('SOP Ratings').items.getById(file.myRatingItemId)
            .update({ Rating: stars });
        } else {
          await sp.web.lists.getByTitle('SOP Ratings').items.add(payload);
        }
      } catch (err) {
        const msg = String(err && err.message ? err.message : err);
        const m = msg.match(/property '(\w+)' does not exist/i);
        if (m && payload[m[1]] !== undefined) {
          delete payload[m[1]];
          await sp.web.lists.getByTitle('SOP Ratings').items.add(payload);
          return;
        }
        throw err;
      }
    };

    try {
      await writeWithRetry();
      await this.refreshRatings();
      this.setState({ savingRatingForFileId: 0 });
    } catch (err) {
      // Surface the real cause for diagnosis (e.g. 403 = no Contribute rights,
      // 404 = the "SOP Ratings" list isn't provisioned on this site yet).
      console.error('[SopLibrary] rating save failed:', err);
      this.setState({ savingRatingForFileId: 0, ratingErrorForFileId: file.id });
      window.setTimeout(() => {
        if (this.state.ratingErrorForFileId === file.id) {
          this.setState({ ratingErrorForFileId: 0 });
        }
      }, 4000);
    }
  };

  // Re-reads ratings (aggregate + the current user's own) after a submit and
  // rebuilds the section tree / leaderboards so the new average is reflected
  // everywhere it's shown, without hand-rolling running-average math.
  private refreshRatings = async (): Promise<void> => {
    const { currentUserId, allFiles } = this.state;
    const [ratingsMap, myRatingsMap] = await Promise.all([
      this.loadRatings(),
      currentUserId ? this.loadMyRatings(currentUserId) : Promise.resolve(new Map()),
    ]);

    const updatedFiles: ISopFile[] = allFiles.map(f => {
      const rating = ratingsMap.get(f.id) || { avg: 0, count: 0 };
      const mine = myRatingsMap.get(f.id) as { itemId: number; rating: number } | undefined;
      return {
        ...f,
        avgRating: rating.avg,
        ratingCount: rating.count,
        myRating: mine ? mine.rating : 0,
        myRatingItemId: mine ? mine.itemId : 0,
      };
    });

    const { sections, mostSearched, highestRated } = this.buildDerivedState(updatedFiles);
    this.setState({ allFiles: updatedFiles, sections, mostSearched, highestRated });
  };

  // ─── Filtering ─────────────────────────────────────────────────────────────

  private filterFiles = (files: ISopFile[]): ISopFile[] => {
    const { searchQuery, activePhase } = this.state;
    const q = searchQuery.toLowerCase();
    return files.filter(f => {
      const matchSearch = !q
        || f.name.toLowerCase().includes(q)
        || f.code.toLowerCase().includes(q)
        || f.folderPath.join(' ').toLowerCase().includes(q);
      const matchPhase = activePhase === 'ALL' || !f.phase || f.phase === activePhase;
      return matchSearch && matchPhase;
    });
  };

  // ─── Interactions ──────────────────────────────────────────────────────────

  // Expand/collapse a folder at any depth, keyed by its full path.
  private toggleFolder = (path: string): void => {
    this.setState(prev => ({
      expandedPaths: prev.expandedPaths.includes(path)
        ? prev.expandedPaths.filter(p => p !== path)
        : [...prev.expandedPaths, path],
    }));
  };

  // Tenant origin (scheme + host) from siteUrl — robust to /sites/, /teams/, and
  // root-site collections (siteUrl may be the full web URL or already the origin).
  // fileRef from PnP is server-relative, so origin + fileRef is the absolute URL.
  private fileOrigin = (): string => {
    const m = (this.props.siteUrl || '').match(/^(https?:\/\/[^/]+)/);
    return m ? m[1] : '';
  };

  private openFile = (fileRef: string): void => {
    window.open(this.fileOrigin() + fileRef, '_blank', 'noopener,noreferrer');
  };

  // Opening a file from the search results counts as a "search" for that doc.
  // Logs one row to "SOP Searches" (feeding the Most Searched leaderboard) and
  // optimistically bumps the local count so the board reflects it immediately.
  private openFromSearch = (file: ISopFile): void => {
    this.logSearch(file);
    this.openFile(file.fileRef);
  };

  private logSearch = (file: ISopFile): void => {
    // Optimistic: bump this file's count and rebuild the leaderboard in place.
    const updatedFiles = this.state.allFiles.map(f =>
      f.id === file.id ? { ...f, searchCount: f.searchCount + 1 } : f
    );
    const { sections, mostSearched, highestRated } = this.buildDerivedState(updatedFiles);
    this.setState({ allFiles: updatedFiles, sections, mostSearched, highestRated });

    // Persist the event to the provisioned "SOP Searches" list. Best-effort:
    // failures are non-fatal — the optimistic bump still stands for this session.
    sp.web.lists.getByTitle('SOP Searches').items
      .add({ Title: file.fileLeafRef, SOPFileId: file.id })
      .catch(() => { /* search logging is best-effort — silent */ });
  };

  // Force a download via the web's download.aspx (instead of opening in-browser).
  private downloadFile = (fileRef: string): void => {
    const origin = this.fileOrigin();
    const webMatch = fileRef.match(/^(\/sites\/[^/]+|\/teams\/[^/]+)/);
    const webPath = webMatch ? webMatch[1] : '';
    const url = `${origin}${webPath}/_layouts/15/download.aspx?SourceUrl=${encodeURIComponent(origin + fileRef)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // ─── Render helpers ────────────────────────────────────────────────────────

  private renderFileRow(file: ISopFile, showBreadcrumb?: boolean): JSX.Element {
    const meta: string[] = [];
    if (file.code)    meta.push(file.code);
    if (file.version) meta.push(file.version);
    if (file.revDate) meta.push(file.revDate);
    const breadcrumb = showBreadcrumb
      ? file.folderPath.join(' › ')
      : '';
    // showBreadcrumb is true only when the row is rendered inside search
    // results — opening from there logs a "search" for the Most Searched board.
    const open = showBreadcrumb
      ? () => this.openFromSearch(file)
      : () => this.openFile(file.fileRef);

    return (
      <div
        key={file.id}
        className={`sop-file-row${file.isInteractive ? ' sop-file-interactive' : ''}`}
        onClick={open}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && open()}
      >
        <span className="sop-file-icon" aria-hidden="true">
          {file.isInteractive ? '▶' : fileTypeIcon(file.fileExt)}
        </span>
        <div className="sop-file-details">
          <span className="sop-file-name">
            {file.name}
            {file.isInteractive && (
              <span className="sop-interactive-badge">INTERACTIVE PLAYBOOK</span>
            )}
          </span>
          {(meta.length > 0 || breadcrumb) && (
            <span className="sop-file-meta">
              {meta.join(' · ')}
              {breadcrumb && <span className="sop-breadcrumb"> · {breadcrumb}</span>}
            </span>
          )}
          <StarRating avg={file.avgRating} count={file.ratingCount} />
          <RatingInput
            myRating={file.myRating}
            saving={this.state.savingRatingForFileId === file.id}
            error={this.state.ratingErrorForFileId === file.id ? "Couldn't save rating" : ''}
            onRate={stars => this.submitRating(file, stars)}
          />
        </div>
        <button
          className="sop-download-btn"
          onClick={(e) => { e.stopPropagation(); this.downloadFile(file.fileRef); }}
          aria-label={`Download ${file.name}`}
        >
          ⬇ DOWNLOAD
        </button>
      </div>
    );
  }

  // Total files under a folder subtree that match the active phase/search filter.
  private countVisible = (folder: ISopFolder): number => {
    return this.filterFiles(folder.files).length
      + folder.folders.reduce((n, f) => n + this.countVisible(f), 0);
  };

  // Recursively renders a folder. depth 0 = a top-level "section" (numbered,
  // uppercase header); depth ≥ 1 = a nested subfolder (indented, deeper each
  // level). Folders with no filter-matching files anywhere in their subtree are
  // hidden. Files in a folder render before its subfolders.
  private renderFolder(folder: ISopFolder, depth: number, index?: number): JSX.Element | null {
    const visible = this.countVisible(folder);
    if (visible === 0) return null;

    const isExpanded = this.state.expandedPaths.includes(folder.path);
    const files = this.filterFiles(folder.files);
    const childFolders = folder.folders
      .map(f => this.renderFolder(f, depth + 1))
      .filter((el): el is JSX.Element => el !== null);

    const countLabel = childFolders.length > 0
      ? `${childFolders.length} ${childFolders.length === 1 ? 'folder' : 'folders'}`
      : `${visible} ${visible === 1 ? 'SOP' : 'SOPs'}`;

    const body = isExpanded && (
      <div className="sop-section-body">
        {files.length > 0 && (
          <div className="sop-file-list">
            {files.map(f => this.renderFileRow(f))}
          </div>
        )}
        {childFolders}
      </div>
    );

    if (depth === 0) {
      return (
        <div key={folder.path} className="sop-section">
          <div
            className="sop-section-header"
            onClick={() => this.toggleFolder(folder.path)}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onKeyDown={e => e.key === 'Enter' && this.toggleFolder(folder.path)}
          >
            <span className="sop-section-num" aria-hidden="true">{index}</span>
            <span className="sop-section-name">{folder.name.toUpperCase()}</span>
            <span className="sop-section-count">{countLabel}</span>
            <span className={`sop-chevron ${isExpanded ? 'sop-chevron-up' : ''}`} aria-hidden="true" />
          </div>
          {body}
        </div>
      );
    }

    // Nested subfolder — indent the header a bit more for each level of depth.
    return (
      <div key={folder.path} className="sop-subsection">
        <div
          className="sop-subsection-header"
          style={{ paddingLeft: 28 + (depth - 1) * 18 }}
          onClick={e => { e.stopPropagation(); this.toggleFolder(folder.path); }}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={e => e.key === 'Enter' && this.toggleFolder(folder.path)}
        >
          <span className="sop-file-icon" aria-hidden="true">{isExpanded ? '📂' : '📁'}</span>
          <span className="sop-subsection-name">{folder.name}</span>
          <span className="sop-subsection-count">{countLabel}</span>
          <span className={`sop-chevron ${isExpanded ? 'sop-chevron-up' : ''}`} aria-hidden="true" />
        </div>
        {body}
      </div>
    );
  }


  // ─── Popular SOPs leaderboards ───────────────────────────────────────────────

  private renderRankedRow(file: ISopFile, rank: number, metric: string): JSX.Element {
    const sub = [file.section, file.code].filter(Boolean).join(' · ');
    return (
      <div
        key={file.id}
        className="sop-pop-row"
        onClick={() => this.openFile(file.fileRef)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && this.openFile(file.fileRef)}
      >
        <span className={`sop-pop-rank sop-pop-rank-${rank}`}>{rank}</span>
        <div className="sop-pop-info">
          <span className="sop-pop-name">{file.name}</span>
          {sub && <span className="sop-pop-sub">{sub}</span>}
        </div>
        <span className="sop-pop-metric">{metric}</span>
      </div>
    );
  }

  private renderPopularColumn(
    label: string,
    dotClass: string,
    files: ISopFile[],
    metric: (f: ISopFile) => string,
    emptyMsg: string,
  ): JSX.Element {
    return (
      <div className="sop-pop-col">
        <div className="sop-pop-col-head">
          <span className={`sop-pop-dot ${dotClass}`} aria-hidden="true" />
          <span className="sop-pop-col-label">{label}</span>
        </div>
        {files.length > 0 ? (
          <div className="sop-pop-list">
            {files.map((f, i) => this.renderRankedRow(f, i + 1, metric(f)))}
          </div>
        ) : (
          <div className="sop-pop-empty">{emptyMsg}</div>
        )}
      </div>
    );
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  public render(): React.ReactElement {
    const {
      isLoading, errorMessage, searchQuery, sections,
      mostSearched, highestRated, activePhase, hasPhaseData, allFiles,
    } = this.state;

    if (isLoading) {
      return (
        <div className="sop-library">
          <div className="sop-loading">
            <div className="sop-spinner" />
            <span>Loading SOP Library…</span>
          </div>
        </div>
      );
    }

    if (errorMessage) {
      return (
        <div className="sop-library">
          <div className="sop-error">
            <strong>Could not load SOP Library</strong>
            <p>{errorMessage}</p>
            <p>Verify the library name in the web part settings.</p>
          </div>
        </div>
      );
    }

    const isSearching = searchQuery.trim().length > 0;
    const searchResults = isSearching ? this.filterFiles(allFiles) : [];

    return (
      <div className="sop-library">

        {/* ── Title bar ── */}
        <div className="sop-titlebar">
          <h1 className="sop-title">SOP DOCUMENT LIBRARY</h1>
          <span className="sop-doc-count">
            {allFiles.length} {allFiles.length === 1 ? 'document' : 'documents'}
          </span>
        </div>

        {/* ── Chatbot placeholder ── */}
        <div className="sop-chatbot-placeholder" aria-label="AI Assistant — reserved area">
          <span className="sop-chatbot-icon">🤖</span>
          <span className="sop-chatbot-label">AI Assistant — coming soon</span>
        </div>

        {/* ── Toolbar: search + phase toggle ── */}
        <div className="sop-toolbar">
          <div className="sop-search-wrapper">
            <span className="sop-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="sop-search"
              placeholder="Search SOPs by name, code, or category…"
              value={searchQuery}
              onChange={e => this.setState({ searchQuery: e.target.value })}
              aria-label="Search SOPs"
            />
            {searchQuery && (
              <button
                className="sop-search-clear"
                onClick={() => this.setState({ searchQuery: '' })}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {hasPhaseData && (
            <div className="sop-phase-toggle" role="group" aria-label="Filter by project phase">
              {(['ALL', 'P1', 'P2'] as const).map(p => (
                <button
                  key={p}
                  className={`sop-phase-btn ${activePhase === p ? 'sop-phase-active' : ''}`}
                  onClick={() => this.setState({ activePhase: p })}
                >
                  {p === 'ALL' ? 'All Phases' : `Phase ${p.slice(1)}`}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Popular SOPs: two activity-driven leaderboards ── */}
        {!isSearching && (
          <div className="sop-popular-wrap">
            <div className="sop-popular-head">
              <h2 className="sop-popular-title">Popular SOPs</h2>
              <p className="sop-popular-sub">Surfaced from team activity. Refreshes as people search and rate.</p>
            </div>
            <div className="sop-popular-cols">
              {this.renderPopularColumn(
                'MOST SEARCHED', 'dot-blue', mostSearched,
                f => `${f.searchCount} ${f.searchCount === 1 ? 'search' : 'searches'}`,
                'No search activity yet.'
              )}
              {this.renderPopularColumn(
                'HIGHEST RATED', 'dot-orange', highestRated,
                f => `★ ${f.avgRating.toFixed(1)} · ${f.ratingCount} ${f.ratingCount === 1 ? 'rating' : 'ratings'}`,
                'No ratings yet.'
              )}
            </div>
          </div>
        )}

        {/* ── Search results ── */}
        {isSearching && (
          <div className="sop-search-results">
            <div className="sop-results-header">
              {searchResults.length > 0
                ? `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${searchQuery}"`
                : `No SOPs match "${searchQuery}"`}
            </div>
            {searchResults.length > 0 && (
              <div className="sop-file-list">
                {searchResults.map(f => this.renderFileRow(f, true))}
              </div>
            )}
          </div>
        )}

        {/* ── All sections (recursive folder tree) ── */}
        {!isSearching && sections.map((sec, i) => this.renderFolder(sec, 0, i + 1))}

        {/* ── Empty state ── */}
        {!isSearching && sections.length === 0 && (
          <div className="sop-empty">
            No documents found in "{this.props.libraryTitle}". Check the library name in settings.
          </div>
        )}
      </div>
    );
  }
}
