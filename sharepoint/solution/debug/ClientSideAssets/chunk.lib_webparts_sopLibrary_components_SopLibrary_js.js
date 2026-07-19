"use strict";
(self["webpackJsonp_a2dd83f3c87efad5c0a65e2149dd3991"] = self["webpackJsonp_a2dd83f3c87efad5c0a65e2149dd3991"] || []).push([["lib_webparts_sopLibrary_components_SopLibrary_js"],{

/***/ 72667:
/*!**************************************************!*\
  !*** ./lib/webparts/sopLibrary/assets/style.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles("#sp-appBar{display:none!important}#spPageCanvasContent,#spPageChromeAppDiv,#spoAppComponent,[class*=CanvasSection],[class*=CanvasZoneSectionContainer],[class*=Canvas],[class*=ControlZone],[class*=SectionContainer],[class*=canvas],[data-automation-id=CanvasControl],[data-automation-id=CanvasSection],[data-automation-id=CanvasZone-SectionContainer],[data-automation-id=CanvasZone],[data-automation-id=contentScrollRegion]{border-radius:0!important}.sop-library{background:#1f2226;color:#e8e8e8;font-family:Helvetica Neue,Segoe UI,Arial,sans-serif;min-height:400px;padding:0 0 40px}.sop-titlebar{align-items:baseline;display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;padding:20px 20px 0}.sop-title{color:#fff;font-size:30px;font-weight:800;letter-spacing:.5px;margin:0;text-transform:uppercase}.sop-doc-count{color:#8a8d94;font-size:14px;white-space:nowrap}.sop-chatbot-placeholder{align-items:center;background:#2a2d33;border:2px dashed #3a3d44;border-radius:10px;color:#7a7d84;display:flex;font-size:14px;font-style:italic;gap:10px;height:72px;justify-content:center;margin:20px 20px 0}.sop-chatbot-icon{font-size:22px}.sop-toolbar{align-items:center;display:flex;flex-wrap:wrap;gap:14px;padding:18px 20px 14px}.sop-search-wrapper{flex:1;min-width:220px;position:relative}.sop-search-icon{font-size:14px;left:12px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%)}.sop-search{background:#2a2d33;border:1px solid #3a3d44;border-radius:8px;box-sizing:border-box;color:#e8e8e8;font-size:14px;outline:none;padding:10px 36px;transition:border-color .2s;width:100%}.sop-search:-ms-input-placeholder{color:#6a6d74}.sop-search::placeholder{color:#6a6d74}.sop-search:focus{border-color:#ff7a00}.sop-search-clear{background:none;border:none;color:#8a8d94;cursor:pointer;font-size:13px;padding:2px 4px;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.sop-search-clear:hover{color:#e8e8e8}.sop-phase-toggle{display:flex;gap:6px}.sop-phase-btn{background:#2a2d33;border:1px solid #3a3d44;border-radius:6px;color:#b0b3ba;cursor:pointer;font-size:13px;font-weight:600;padding:8px 16px;transition:all .15s;white-space:nowrap}.sop-phase-btn:hover{border-color:#ff7a00;color:#ff7a00}.sop-phase-btn.sop-phase-active{background:#ff7a00;border-color:#ff7a00;color:#fff}.sop-search-results{margin:0 20px}.sop-results-header{color:#8a8d94;font-size:13px;padding:0 20px 10px}.sop-section{background:#252830;border:1px solid #2e3138;border-radius:10px;margin:14px 20px 0;overflow:hidden}.sop-section-header{align-items:center;cursor:pointer;display:flex;gap:10px;padding:16px 18px;transition:background .15s;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sop-section-header:hover{background:#2c2f38}.sop-section-header-static{cursor:default}.sop-section-header-static:hover{background:transparent}.sop-accent-bar{background:#ff7a00;border-radius:2px;flex-shrink:0;height:20px;width:4px}.sop-section-num{align-items:center;background:#ff7a00;border-radius:6px;color:#fff;display:flex;flex-shrink:0;font-size:13px;font-weight:700;height:26px;justify-content:center;width:26px}.sop-section-name{color:#f0f0f0;flex:1;font-size:15px;font-weight:700;letter-spacing:.5px}.sop-section-count{background:#1f2226;border-radius:12px;color:#6a6d74;font-size:12px;padding:3px 10px;white-space:nowrap}.sop-chevron{display:inline-block;flex-shrink:0;height:16px;position:relative;width:16px}.sop-chevron:before{border-bottom:2px solid #8a8d94;border-right:2px solid #8a8d94;content:\"\";display:block;height:7px;left:4px;position:absolute;top:2px;transform:rotate(45deg);transition:transform .2s;width:7px}.sop-chevron.sop-chevron-up:before{top:6px;transform:rotate(-135deg)}.sop-section-body{border-top:1px solid #2e3138}.sop-subsection{border-bottom:1px solid #2a2d33}.sop-subsection:last-child{border-bottom:none}.sop-subsection-header{align-items:center;background:#202328;cursor:pointer;display:flex;gap:10px;padding:12px 22px 12px 28px;transition:background .15s;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sop-subsection-header:hover{background:#272a32}.sop-subsection-name{color:#c8cad0;flex:1;font-size:13px;font-weight:600}.sop-subsection-count{background:#2a2d33;border-radius:10px;color:#6a6d74;font-size:11px;min-width:24px;padding:2px 8px;text-align:center}.sop-file-list{padding:4px 0}.sop-file-row{align-items:center;border-bottom:1px solid #1f2226;border-left:3px solid transparent;cursor:pointer;display:flex;gap:14px;padding:12px 24px;transition:background .12s}.sop-file-row:last-child{border-bottom:none}.sop-file-row:hover{background:#2e3240}.sop-file-interactive{background:rgba(255,122,0,.06);border-left-color:#ff7a00}.sop-file-interactive .sop-file-icon{color:#ff7a00}.sop-file-icon{flex-shrink:0;font-size:20px}.sop-file-details{display:flex;flex:1;flex-direction:column;gap:3px;min-width:0}.sop-file-name{align-items:center;color:#e8e8e8;display:flex;flex-wrap:wrap;font-size:14px;font-weight:600;gap:10px;line-height:1.3;word-break:break-word}.sop-file-row:hover .sop-file-name{color:#ff9a30}.sop-interactive-badge{background:#ff7a00;border-radius:4px;color:#fff;font-size:10px;font-weight:700;letter-spacing:.5px;padding:3px 8px;white-space:nowrap}.sop-download-btn{align-items:center;align-self:center;background:transparent;border:1px solid #ff7a00;border-radius:6px;color:#ff7a00;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:11px;font-weight:700;gap:5px;letter-spacing:.5px;margin-left:auto;opacity:0;padding:6px 12px;transition:opacity .12s,background .12s}.sop-download-btn:focus,.sop-file-row:hover .sop-download-btn{opacity:1}.sop-download-btn:hover{background:#ff7a00;color:#fff}.sop-file-meta{color:#7a7d84;font-size:11px;line-height:1.4}.sop-breadcrumb{color:#5a5d64}.sop-rating{align-items:center;display:flex;gap:3px;margin-top:2px}.sop-star{color:#3a3d44;font-size:13px}.sop-star-filled{color:#ff7a00}.sop-rating-meta{color:#7a7d84;font-size:11px;margin-left:4px}.sop-rating-input{align-items:center;display:flex;gap:6px;margin-top:4px}.sop-rating-input-label{color:#7a7d84;font-size:11px}.sop-rating-input-stars{display:inline-flex;gap:2px}.sop-star-input{background:transparent;border:none;color:#3a3d44;cursor:pointer;font-size:15px;line-height:1;margin:0;padding:0}.sop-star-input-filled{color:#ff7a00}.sop-star-input:disabled{cursor:default;opacity:.6}.sop-rating-saving{color:#7a7d84;font-size:11px;font-style:italic}.sop-rating-error{color:#ff5c5c;font-size:11px}.sop-popular-wrap{margin:16px 20px 8px}.sop-popular-head{margin-bottom:14px}.sop-popular-title{color:#fff;font-size:22px;font-weight:700;margin:0}.sop-popular-sub{color:#8a8d94;font-size:13px;margin:4px 0 0}.sop-popular-cols{display:grid;gap:16px;grid-template-columns:1fr 1fr}.sop-pop-col{background:#1c1f25;border:1px solid #2a2d33;border-radius:12px;padding:16px 18px}.sop-pop-col-head{align-items:center;display:flex;gap:8px;margin-bottom:8px}.sop-pop-dot{border-radius:50%;flex-shrink:0;height:9px;width:9px}.sop-pop-dot.dot-blue{background:#4a90e2}.sop-pop-dot.dot-orange{background:#ff7a00}.sop-pop-col-label{color:#b0b3ba;font-size:12px;font-weight:700;letter-spacing:.6px}.sop-pop-row{align-items:center;border-bottom:1px solid #23262d;cursor:pointer;display:flex;gap:14px;padding:11px 4px;transition:background .12s}.sop-pop-row:last-child{border-bottom:none}.sop-pop-row:hover{background:#262b34}.sop-pop-rank{align-items:center;background:#2e3138;border-radius:50%;color:#b0b3ba;display:flex;flex-shrink:0;font-size:12px;font-weight:700;height:26px;justify-content:center;width:26px}.sop-pop-rank-1{background:#f5b321;color:#1f2226}.sop-pop-rank-2{background:#b8bcc4;color:#1f2226}.sop-pop-rank-3{background:#e8843c;color:#1f2226}.sop-pop-info{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}.sop-pop-name{color:#e8e8e8;font-size:14px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sop-pop-row:hover .sop-pop-name{color:#ff9a30}.sop-pop-sub{color:#7a7d84;font-size:11px}.sop-pop-metric{color:#8a8d94;flex-shrink:0;font-size:12px;white-space:nowrap}.sop-pop-empty{color:#6a6d74;font-size:13px;font-style:italic;padding:18px 4px}@media (max-width:720px){.sop-popular-cols{grid-template-columns:1fr}}.sop-loading{align-items:center;color:#7a7d84;display:flex;flex-direction:column;font-size:14px;gap:16px;height:200px;justify-content:center}.sop-spinner{animation:sopSpin .9s linear infinite;border:3px solid #2e3138;border-radius:50%;border-top-color:#ff7a00;height:36px;width:36px}@keyframes sopSpin{to{transform:rotate(1turn)}}.sop-error{background:#2a1a1a;border:1px solid #5a2a2a;border-radius:8px;color:#f08080;font-size:14px;margin:24px 20px;padding:20px}.sop-error p{color:#c08080;font-size:13px;margin:6px 0 0}.sop-empty{color:#6a6d74;font-size:14px;margin:40px 20px;text-align:center}@media (max-width:600px){.sop-toolbar{align-items:stretch;flex-direction:column}.sop-phase-toggle{justify-content:center}.sop-file-row{padding:10px 16px}.sop-section{margin:10px 10px 0}}", true);


/***/ }),

/***/ 97919:
/*!**********************************************************!*\
  !*** ./lib/webparts/sopLibrary/components/SopLibrary.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SopLibrary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/pnpClient */ 26852);


__webpack_require__(/*! ../assets/style.css */ 72667);
// File types treated as "interactive playbooks" (video / web content).
const INTERACTIVE_EXTS = ['mp4', 'mov', 'm4v', 'webm', 'html', 'htm', 'aspx'];
// ─── Helpers ─────────────────────────────────────────────────────────────────
function parseLeafRef(leafRef) {
    const dotIdx = leafRef.lastIndexOf('.');
    const ext = dotIdx >= 0 ? leafRef.slice(dotIdx + 1).toLowerCase() : '';
    const base = dotIdx >= 0 ? leafRef.slice(0, dotIdx) : leafRef;
    // Matches "BB01 - Title", "CSI-01 - Title", "BB01-Title", "BB01_Title" etc.
    const m = base.match(/^([A-Z]{1,6}[-]?\d{1,4})\s*[-–_]\s*(.+)$/i);
    if (m)
        return { code: m[1].toUpperCase(), name: m[2].trim(), ext };
    return { code: '', name: base.trim(), ext };
}
function fmtDate(iso) {
    if (!iso)
        return '';
    const d = new Date(iso);
    if (isNaN(d.getTime()))
        return '';
    return `Rev ${d.getMonth() + 1}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
}
function fileTypeIcon(ext) {
    switch ((ext || '').toLowerCase()) {
        case 'pdf': return '📄';
        case 'docx':
        case 'doc': return '📝';
        case 'xlsx':
        case 'xls': return '📊';
        case 'pptx':
        case 'ppt': return '📋';
        case 'mp4':
        case 'mov': return '🎬';
        default: return '📄';
    }
}
class StarRating extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        const { avg, count } = this.props;
        const filled = Math.round(avg);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-rating" },
            [1, 2, 3, 4, 5].map(s => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: s, className: `sop-star ${s <= filled ? 'sop-star-filled' : ''}` }, "\u2605"))),
            count > 0
                ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-rating-meta" },
                    avg.toFixed(1),
                    " avg \u00B7 ",
                    count,
                    " ratings")
                : react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-rating-meta" }, "Not yet rated")));
    }
}
class RatingInput extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        this.state = { hover: 0 };
    }
    render() {
        const { myRating, saving, error, onRate } = this.props;
        const { hover } = this.state;
        const filled = hover || myRating;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-rating-input", onClick: e => e.stopPropagation(), onKeyDown: e => e.stopPropagation() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-rating-input-label" }, myRating > 0 ? 'Your rating:' : 'Rate this SOP:'),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-rating-input-stars", onMouseLeave: () => this.setState({ hover: 0 }) }, [1, 2, 3, 4, 5].map(s => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { key: s, type: "button", className: `sop-star-input ${s <= filled ? 'sop-star-input-filled' : ''}`, disabled: saving, "aria-label": `Rate ${s} star${s === 1 ? '' : 's'}`, onMouseEnter: () => this.setState({ hover: s }), onClick: e => { e.stopPropagation(); onRate(s); } }, "\u2605")))),
            saving && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-rating-saving" }, "Saving\u2026"),
            !saving && error && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-rating-error" }, error)));
    }
}
// ─── Main component ───────────────────────────────────────────────────────────
class SopLibrary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        // ─── Data load ─────────────────────────────────────────────────────────────
        this.loadLibrary = async () => {
            const { libraryTitle, versionColumn, revDateColumn, phaseColumn } = this.props;
            // Build the select list dynamically
            const selectFields = [
                'ID', 'Title', 'FileLeafRef', 'FileRef', 'FileDirRef', 'FSObjType', 'Modified',
            ];
            if (versionColumn)
                selectFields.push(versionColumn);
            if (revDateColumn)
                selectFields.push(revDateColumn);
            if (phaseColumn)
                selectFields.push(phaseColumn);
            // .top(5000) is SharePoint's max page size — covers libraries up to 5000 files
            // in one request (the prior 2000 silently truncated larger libraries).
            const rawItems = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle(libraryTitle)
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
                _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.currentUser().catch(() => null),
            ]);
            const currentUserId = currentUser ? currentUser.Id : 0;
            const myRatingsMap = currentUserId ? await this.loadMyRatings(currentUserId) : new Map();
            let hasPhaseData = false;
            const allFiles = rawItems.map((item) => {
                const parsed = parseLeafRef(item.FileLeafRef || '');
                const name = (item.Title && item.Title !== item.FileLeafRef) ? item.Title : parsed.name;
                const version = versionColumn && item[versionColumn] ? String(item[versionColumn]) : '';
                const rawRev = revDateColumn && item[revDateColumn] ? item[revDateColumn] : item.Modified;
                const revDate = fmtDate(rawRev);
                const phase = phaseColumn && item[phaseColumn] ? String(item[phaseColumn]) : '';
                if (phase)
                    hasPhaseData = true;
                // Derive the full folder chain from the file's path, relative to the
                // library root. Files at the root land in "General". The chain can be any
                // depth — the render tree nests to match.
                const dirDecoded = decodeURIComponent(item.FileDirRef || '');
                let relPath = dirDecoded;
                if (libraryRootPath && relPath.indexOf(libraryRootPath) === 0) {
                    relPath = relPath.slice(libraryRootPath.length).replace(/^\//, '');
                }
                const parts = relPath.split('/').filter(Boolean);
                const folderPath = parts.length ? parts : ['General'];
                const section = folderPath[0];
                const rating = ratingsMap.get(item.ID) || { avg: 0, count: 0 };
                const myRating = myRatingsMap.get(item.ID);
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
        // ─── Rating submission ─────────────────────────────────────────────────────
        // Writes a rating to "SOP Ratings": update()s the caller's existing row if
        // they've already rated this file, otherwise add()s a new one. If the target
        // list is missing an expected column (e.g. a manually-created list without
        // "UserId"), the unknown field is stripped and the write retried once — same
        // resiliency pattern used for the Company Events bulk import in Home.tsx.
        this.submitRating = async (file, stars) => {
            if (this.state.savingRatingForFileId)
                return;
            this.setState({ savingRatingForFileId: file.id, ratingErrorForFileId: 0 });
            const payload = {
                Title: file.fileLeafRef,
                SOPFileId: file.id,
                Rating: stars,
                // UserId is a Text column (see docs/sop-ratings-list-setup.md) — send it
                // as a string or the REST add() 400s with "Cannot convert a primitive
                // value to the expected type 'Edm.String'".
                UserId: String(this.state.currentUserId),
            };
            const writeWithRetry = async () => {
                try {
                    if (file.myRatingItemId) {
                        await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle('SOP Ratings').items.getById(file.myRatingItemId)
                            .update({ Rating: stars });
                    }
                    else {
                        await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle('SOP Ratings').items.add(payload);
                    }
                }
                catch (err) {
                    const msg = String(err && err.message ? err.message : err);
                    const m = msg.match(/property '(\w+)' does not exist/i);
                    if (m && payload[m[1]] !== undefined) {
                        delete payload[m[1]];
                        await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle('SOP Ratings').items.add(payload);
                        return;
                    }
                    throw err;
                }
            };
            try {
                await writeWithRetry();
                await this.refreshRatings();
                this.setState({ savingRatingForFileId: 0 });
            }
            catch (err) {
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
        this.refreshRatings = async () => {
            const { currentUserId, allFiles } = this.state;
            const [ratingsMap, myRatingsMap] = await Promise.all([
                this.loadRatings(),
                currentUserId ? this.loadMyRatings(currentUserId) : Promise.resolve(new Map()),
            ]);
            const updatedFiles = allFiles.map(f => {
                const rating = ratingsMap.get(f.id) || { avg: 0, count: 0 };
                const mine = myRatingsMap.get(f.id);
                return Object.assign(Object.assign({}, f), { avgRating: rating.avg, ratingCount: rating.count, myRating: mine ? mine.rating : 0, myRatingItemId: mine ? mine.itemId : 0 });
            });
            const { sections, mostSearched, highestRated } = this.buildDerivedState(updatedFiles);
            this.setState({ allFiles: updatedFiles, sections, mostSearched, highestRated });
        };
        // ─── Filtering ─────────────────────────────────────────────────────────────
        this.filterFiles = (files) => {
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
        this.toggleFolder = (path) => {
            this.setState(prev => ({
                expandedPaths: prev.expandedPaths.includes(path)
                    ? prev.expandedPaths.filter(p => p !== path)
                    : [...prev.expandedPaths, path],
            }));
        };
        // Tenant origin (scheme + host) from siteUrl — robust to /sites/, /teams/, and
        // root-site collections (siteUrl may be the full web URL or already the origin).
        // fileRef from PnP is server-relative, so origin + fileRef is the absolute URL.
        this.fileOrigin = () => {
            const m = (this.props.siteUrl || '').match(/^(https?:\/\/[^/]+)/);
            return m ? m[1] : '';
        };
        this.openFile = (fileRef) => {
            window.open(this.fileOrigin() + fileRef, '_blank', 'noopener,noreferrer');
        };
        // Opening a file from the search results counts as a "search" for that doc.
        // Logs one row to "SOP Searches" (feeding the Most Searched leaderboard) and
        // optimistically bumps the local count so the board reflects it immediately.
        this.openFromSearch = (file) => {
            this.logSearch(file);
            this.openFile(file.fileRef);
        };
        this.logSearch = (file) => {
            // Optimistic: bump this file's count and rebuild the leaderboard in place.
            const updatedFiles = this.state.allFiles.map(f => f.id === file.id ? Object.assign(Object.assign({}, f), { searchCount: f.searchCount + 1 }) : f);
            const { sections, mostSearched, highestRated } = this.buildDerivedState(updatedFiles);
            this.setState({ allFiles: updatedFiles, sections, mostSearched, highestRated });
            // Persist the event to the provisioned "SOP Searches" list. Best-effort:
            // failures are non-fatal — the optimistic bump still stands for this session.
            _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle('SOP Searches').items
                .add({ Title: file.fileLeafRef, SOPFileId: file.id })
                .catch(() => { });
        };
        // Force a download via the web's download.aspx (instead of opening in-browser).
        this.downloadFile = (fileRef) => {
            const origin = this.fileOrigin();
            const webMatch = fileRef.match(/^(\/sites\/[^/]+|\/teams\/[^/]+)/);
            const webPath = webMatch ? webMatch[1] : '';
            const url = `${origin}${webPath}/_layouts/15/download.aspx?SourceUrl=${encodeURIComponent(origin + fileRef)}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        };
        // Total files under a folder subtree that match the active phase/search filter.
        this.countVisible = (folder) => {
            return this.filterFiles(folder.files).length
                + folder.folders.reduce((n, f) => n + this.countVisible(f), 0);
        };
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
    componentDidMount() {
        this.loadLibrary().catch(err => {
            this.setState({ isLoading: false, errorMessage: String(err) });
        });
    }
    // Builds the recursive folder tree and the two "Popular SOPs" leaderboards
    // from a flat file list. Shared by the initial load and by refreshRatings()
    // (after a rating submit) so the tree/leaderboard logic lives in one place.
    buildDerivedState(allFiles) {
        // Walk each file's folderPath, creating/reusing a folder node per segment,
        // then drop the file into its deepest folder. Handles arbitrary nesting.
        const root = { name: '', path: '', folders: [], files: [] };
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
        const sortFolder = (f) => {
            f.folders.sort((a, b) => a.name.localeCompare(b.name));
            f.files.sort((a, b) => (a.code || a.name).localeCompare(b.code || b.name));
            f.folders.forEach(sortFolder);
        };
        sortFolder(root);
        const sections = root.folders;
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
    async loadRatings() {
        const map = new Map();
        try {
            const exists = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists
                .filter("Title eq 'SOP Ratings'").select('Id').top(1)();
            if (!exists || exists.length === 0)
                return map;
            const rows = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle('SOP Ratings')
                .items.select('SOPFileId,Rating').top(5000)();
            const groups = new Map();
            for (const r of rows) {
                const id = Number(r.SOPFileId);
                const rating = Number(r.Rating);
                if (!isFinite(id) || !isFinite(rating))
                    continue;
                if (!groups.has(id))
                    groups.set(id, []);
                groups.get(id).push(rating);
            }
            groups.forEach((vals, id) => {
                const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
                map.set(id, { avg: Math.round(avg * 10) / 10, count: vals.length });
            });
        }
        catch (_) { /* ratings unavailable — silent */ }
        return map;
    }
    // The current user's own rows in "SOP Ratings", keyed by SOPFileId, so the
    // interactive control knows whether to add a new row or update an existing one.
    async loadMyRatings(userId) {
        const map = new Map();
        try {
            const exists = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists
                .filter("Title eq 'SOP Ratings'").select('Id').top(1)();
            if (!exists || exists.length === 0)
                return map;
            const rows = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle('SOP Ratings')
                .items.select('Id,SOPFileId,Rating').filter(`UserId eq '${userId}'`).top(5000)();
            for (const r of rows) {
                const fileId = Number(r.SOPFileId);
                const rating = Number(r.Rating);
                if (!isFinite(fileId) || !isFinite(rating))
                    continue;
                map.set(fileId, { itemId: r.Id, rating });
            }
        }
        catch (_) { /* per-user ratings unavailable (e.g. no UserId column) — silent */ }
        return map;
    }
    // Optional "SOP Searches" list (each row = one search event with SOPFileId).
    // Keys coerced to Number to match item.ID. Absent list / no rows → empty map.
    async loadSearchCounts() {
        const map = new Map();
        try {
            const exists = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists
                .filter("Title eq 'SOP Searches'").select('Id').top(1)();
            if (!exists || exists.length === 0)
                return map;
            const rows = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle('SOP Searches')
                .items.select('SOPFileId').top(10000)();
            for (const r of rows) {
                const id = Number(r.SOPFileId);
                if (isFinite(id))
                    map.set(id, (map.get(id) || 0) + 1);
            }
        }
        catch (_) { /* search history unavailable — silent */ }
        return map;
    }
    // The library's root server-relative path. The list Title can differ from its
    // URL segment (e.g. "Documents" lives at ".../Shared Documents"), so we read the
    // actual root folder; fall back to inferring from the first item's path.
    async loadRootPath(libraryTitle, rawItems) {
        try {
            const rootFolder = await _services_pnpClient__WEBPACK_IMPORTED_MODULE_1__.sp.web.lists.getByTitle(libraryTitle)
                .rootFolder.select('ServerRelativeUrl')();
            return decodeURIComponent(rootFolder.ServerRelativeUrl || '').replace(/\/$/, '');
        }
        catch (_) {
            if (rawItems.length > 0) {
                const firstDir = decodeURIComponent(rawItems[0].FileDirRef || '');
                const marker = `/${libraryTitle}/`;
                const idx = firstDir.indexOf(marker);
                if (idx >= 0)
                    return firstDir.slice(0, idx + marker.length).replace(/\/$/, '');
            }
            return '';
        }
    }
    // ─── Render helpers ────────────────────────────────────────────────────────
    renderFileRow(file, showBreadcrumb) {
        const meta = [];
        if (file.code)
            meta.push(file.code);
        if (file.version)
            meta.push(file.version);
        if (file.revDate)
            meta.push(file.revDate);
        const breadcrumb = showBreadcrumb
            ? file.folderPath.join(' › ')
            : '';
        // showBreadcrumb is true only when the row is rendered inside search
        // results — opening from there logs a "search" for the Most Searched board.
        const open = showBreadcrumb
            ? () => this.openFromSearch(file)
            : () => this.openFile(file.fileRef);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: file.id, className: `sop-file-row${file.isInteractive ? ' sop-file-interactive' : ''}`, onClick: open, role: "button", tabIndex: 0, onKeyDown: e => e.key === 'Enter' && open() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-file-icon", "aria-hidden": "true" }, file.isInteractive ? '▶' : fileTypeIcon(file.fileExt)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-file-details" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-file-name" },
                    file.name,
                    file.isInteractive && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-interactive-badge" }, "INTERACTIVE PLAYBOOK"))),
                (meta.length > 0 || breadcrumb) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-file-meta" },
                    meta.join(' · '),
                    breadcrumb && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-breadcrumb" },
                        " \u00B7 ",
                        breadcrumb))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(StarRating, { avg: file.avgRating, count: file.ratingCount }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(RatingInput, { myRating: file.myRating, saving: this.state.savingRatingForFileId === file.id, error: this.state.ratingErrorForFileId === file.id ? "Couldn't save rating" : '', onRate: stars => this.submitRating(file, stars) })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "sop-download-btn", onClick: (e) => { e.stopPropagation(); this.downloadFile(file.fileRef); }, "aria-label": `Download ${file.name}` }, "\u2B07 DOWNLOAD")));
    }
    // Recursively renders a folder. depth 0 = a top-level "section" (numbered,
    // uppercase header); depth ≥ 1 = a nested subfolder (indented, deeper each
    // level). Folders with no filter-matching files anywhere in their subtree are
    // hidden. Files in a folder render before its subfolders.
    renderFolder(folder, depth, index) {
        const visible = this.countVisible(folder);
        if (visible === 0)
            return null;
        const isExpanded = this.state.expandedPaths.includes(folder.path);
        const files = this.filterFiles(folder.files);
        const childFolders = folder.folders
            .map(f => this.renderFolder(f, depth + 1))
            .filter((el) => el !== null);
        const countLabel = childFolders.length > 0
            ? `${childFolders.length} ${childFolders.length === 1 ? 'folder' : 'folders'}`
            : `${visible} ${visible === 1 ? 'SOP' : 'SOPs'}`;
        const body = isExpanded && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-section-body" },
            files.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-file-list" }, files.map(f => this.renderFileRow(f)))),
            childFolders));
        if (depth === 0) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: folder.path, className: "sop-section" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-section-header", onClick: () => this.toggleFolder(folder.path), role: "button", tabIndex: 0, "aria-expanded": isExpanded, onKeyDown: e => e.key === 'Enter' && this.toggleFolder(folder.path) },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-section-num", "aria-hidden": "true" }, index),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-section-name" }, folder.name.toUpperCase()),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-section-count" }, countLabel),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `sop-chevron ${isExpanded ? 'sop-chevron-up' : ''}`, "aria-hidden": "true" })),
                body));
        }
        // Nested subfolder — indent the header a bit more for each level of depth.
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: folder.path, className: "sop-subsection" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-subsection-header", style: { paddingLeft: 28 + (depth - 1) * 18 }, onClick: e => { e.stopPropagation(); this.toggleFolder(folder.path); }, role: "button", tabIndex: 0, "aria-expanded": isExpanded, onKeyDown: e => e.key === 'Enter' && this.toggleFolder(folder.path) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-file-icon", "aria-hidden": "true" }, isExpanded ? '📂' : '📁'),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-subsection-name" }, folder.name),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-subsection-count" }, countLabel),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `sop-chevron ${isExpanded ? 'sop-chevron-up' : ''}`, "aria-hidden": "true" })),
            body));
    }
    // ─── Popular SOPs leaderboards ───────────────────────────────────────────────
    renderRankedRow(file, rank, metric) {
        const sub = [file.section, file.code].filter(Boolean).join(' · ');
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: file.id, className: "sop-pop-row", onClick: () => this.openFile(file.fileRef), role: "button", tabIndex: 0, onKeyDown: e => e.key === 'Enter' && this.openFile(file.fileRef) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `sop-pop-rank sop-pop-rank-${rank}` }, rank),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-pop-info" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-pop-name" }, file.name),
                sub && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-pop-sub" }, sub)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-pop-metric" }, metric)));
    }
    renderPopularColumn(label, dotClass, files, metric, emptyMsg) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-pop-col" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-pop-col-head" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `sop-pop-dot ${dotClass}`, "aria-hidden": "true" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-pop-col-label" }, label)),
            files.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-pop-list" }, files.map((f, i) => this.renderRankedRow(f, i + 1, metric(f))))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-pop-empty" }, emptyMsg))));
    }
    // ─── Render ────────────────────────────────────────────────────────────────
    render() {
        const { isLoading, errorMessage, searchQuery, sections, mostSearched, highestRated, activePhase, hasPhaseData, allFiles, } = this.state;
        if (isLoading) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-library" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-spinner" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Loading SOP Library\u2026"))));
        }
        if (errorMessage) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-library" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-error" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Could not load SOP Library"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, errorMessage),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Verify the library name in the web part settings."))));
        }
        const isSearching = searchQuery.trim().length > 0;
        const searchResults = isSearching ? this.filterFiles(allFiles) : [];
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-library" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-titlebar" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "sop-title" }, "SOP DOCUMENT LIBRARY"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-doc-count" },
                    allFiles.length,
                    " ",
                    allFiles.length === 1 ? 'document' : 'documents')),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-chatbot-placeholder", "aria-label": "AI Assistant \u2014 reserved area" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-chatbot-icon" }, "\uD83E\uDD16"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-chatbot-label" }, "AI Assistant \u2014 coming soon")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-toolbar" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-search-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sop-search-icon", "aria-hidden": "true" }, "\uD83D\uDD0D"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", className: "sop-search", placeholder: "Search SOPs by name, code, or category\u2026", value: searchQuery, onChange: e => this.setState({ searchQuery: e.target.value }), "aria-label": "Search SOPs" }),
                    searchQuery && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "sop-search-clear", onClick: () => this.setState({ searchQuery: '' }), "aria-label": "Clear search" }, "\u2715"))),
                hasPhaseData && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-phase-toggle", role: "group", "aria-label": "Filter by project phase" }, ['ALL', 'P1', 'P2'].map(p => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { key: p, className: `sop-phase-btn ${activePhase === p ? 'sop-phase-active' : ''}`, onClick: () => this.setState({ activePhase: p }) }, p === 'ALL' ? 'All Phases' : `Phase ${p.slice(1)}`)))))),
            !isSearching && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-popular-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-popular-head" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "sop-popular-title" }, "Popular SOPs"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "sop-popular-sub" }, "Surfaced from team activity. Refreshes as people search and rate.")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-popular-cols" },
                    this.renderPopularColumn('MOST SEARCHED', 'dot-blue', mostSearched, f => `${f.searchCount} ${f.searchCount === 1 ? 'search' : 'searches'}`, 'No search activity yet.'),
                    this.renderPopularColumn('HIGHEST RATED', 'dot-orange', highestRated, f => `★ ${f.avgRating.toFixed(1)} · ${f.ratingCount} ${f.ratingCount === 1 ? 'rating' : 'ratings'}`, 'No ratings yet.')))),
            isSearching && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-search-results" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-results-header" }, searchResults.length > 0
                    ? `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${searchQuery}"`
                    : `No SOPs match "${searchQuery}"`),
                searchResults.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-file-list" }, searchResults.map(f => this.renderFileRow(f, true)))))),
            !isSearching && sections.map((sec, i) => this.renderFolder(sec, 0, i + 1)),
            !isSearching && sections.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sop-empty" },
                "No documents found in \"",
                this.props.libraryTitle,
                "\". Check the library name in settings."))));
    }
}


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_sopLibrary_components_SopLibrary_js.js.map