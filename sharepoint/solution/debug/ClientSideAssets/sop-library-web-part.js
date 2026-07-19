define(["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-property-pane","@microsoft/sp-webpart-base","SopLibraryWebPartStrings"], (__WEBPACK_EXTERNAL_MODULE__85959__, __WEBPACK_EXTERNAL_MODULE__48398__, __WEBPACK_EXTERNAL_MODULE__89676__, __WEBPACK_EXTERNAL_MODULE__39877__, __WEBPACK_EXTERNAL_MODULE__56642__, __WEBPACK_EXTERNAL_MODULE__76898__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ 26852:
/*!***********************************!*\
  !*** ./lib/services/pnpClient.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   graph: () => (/* binding */ graph),
/* harmony export */   initGraph: () => (/* binding */ initGraph),
/* harmony export */   initPnp: () => (/* binding */ initPnp),
/* harmony export */   sp: () => (/* binding */ sp)
/* harmony export */ });
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/sp */ 2011);
/* harmony import */ var _pnp_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/graph */ 29080);
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/webs */ 47339);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/lists */ 52185);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/items */ 95324);
/* harmony import */ var _pnp_sp_attachments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/attachments */ 9926);
/* harmony import */ var _pnp_sp_site_users_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/sp/site-users/web */ 43500);
/* harmony import */ var _pnp_sp_site_groups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/sp/site-groups */ 7918);
/* harmony import */ var _pnp_sp_security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pnp/sp/security */ 8330);
/* harmony import */ var _pnp_sp_files__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pnp/sp/files */ 14603);
/* harmony import */ var _pnp_sp_folders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pnp/sp/folders */ 79757);
/* harmony import */ var _pnp_graph_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pnp/graph/users */ 13071);












let _sp;
let _graph;
function initPnp(context) {
    _sp = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.spfi)().using((0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.SPFx)(context));
}
function initGraph(context) {
    _graph = (0,_pnp_graph__WEBPACK_IMPORTED_MODULE_1__.graphfi)().using((0,_pnp_graph__WEBPACK_IMPORTED_MODULE_1__.SPFx)(context));
}
const sp = new Proxy({}, {
    get(_target, prop) {
        if (!_sp)
            throw new Error("PnP SP not initialized — call initPnp(context) in onInit");
        return _sp[prop];
    },
});
const graph = new Proxy({}, {
    get(_target, prop) {
        if (!_graph)
            throw new Error("PnP Graph not initialized — call initGraph(context) in onInit");
        return _graph[prop];
    },
});


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


/***/ }),

/***/ 96323:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearStyleOptions: () => (/* binding */ ClearStyleOptions),
/* harmony export */   Mode: () => (/* binding */ Mode),
/* harmony export */   clearStyles: () => (/* binding */ clearStyles),
/* harmony export */   configureLoadStyles: () => (/* binding */ configureLoadStyles),
/* harmony export */   configureRunMode: () => (/* binding */ configureRunMode),
/* harmony export */   detokenize: () => (/* binding */ detokenize),
/* harmony export */   flush: () => (/* binding */ flush),
/* harmony export */   loadStyles: () => (/* binding */ loadStyles),
/* harmony export */   loadTheme: () => (/* binding */ loadTheme),
/* harmony export */   splitStyles: () => (/* binding */ splitStyles)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * In sync mode, styles are registered as style elements synchronously with loadStyles() call.
 * In async mode, styles are buffered and registered as batch in async timer for performance purpose.
 */
var Mode;
(function (Mode) {
    Mode[Mode["sync"] = 0] = "sync";
    Mode[Mode["async"] = 1] = "async";
})(Mode || (Mode = {}));
/**
 * Themable styles and non-themable styles are tracked separately
 * Specify ClearStyleOptions when calling clearStyles API to specify which group of registered styles should be cleared.
 */
var ClearStyleOptions;
(function (ClearStyleOptions) {
    /** only themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["onlyThemable"] = 1] = "onlyThemable";
    /** only non-themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["onlyNonThemable"] = 2] = "onlyNonThemable";
    /** both themable and non-themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["all"] = 3] = "all";
})(ClearStyleOptions || (ClearStyleOptions = {}));
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? __webpack_require__.g : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: Mode.sync,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === Mode.async) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    // Use "self" to distinguish conflicting global typings for setTimeout() from lib.dom.d.ts vs Jest's @types/node
    // https://github.com/jestjs/jest/issues/14418
    return self.setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = ClearStyleOptions.all; }
    if (option === ClearStyleOptions.all || option === ClearStyleOptions.onlyNonThemable) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === ClearStyleOptions.all || option === ClearStyleOptions.onlyThemable) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(ClearStyleOptions.onlyThemable);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                // eslint-disable-next-line no-console
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}


/***/ }),

/***/ 89676:
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__89676__;

/***/ }),

/***/ 39877:
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__39877__;

/***/ }),

/***/ 56642:
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__56642__;

/***/ }),

/***/ 76898:
/*!*******************************************!*\
  !*** external "SopLibraryWebPartStrings" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__76898__;

/***/ }),

/***/ 85959:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__85959__;

/***/ }),

/***/ 48398:
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__48398__;

/***/ }),

/***/ 92083:
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/assign-from.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssignFrom: () => (/* binding */ AssignFrom)
/* harmony export */ });
/**
 * Behavior that will assign a ref to the source's observers and reset the instance's inheriting flag
 *
 * @param source The source instance from which we will assign the observers
 */
function AssignFrom(source) {
    return (instance) => {
        instance.observers = source.observers;
        instance._inheritingObservers = true;
        return instance;
    };
}


/***/ }),

/***/ 41015:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/copy-from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyFrom: () => (/* binding */ CopyFrom)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ 89607);
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../timeline.js */ 59596);


/**
 * Behavior that will copy all the observers in the source timeline and apply it to the incoming instance
 *
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @param filter If provided filters the moments from which the observers are copied. It should return true for each moment to include.
 * @returns The mutated this
 */
function CopyFrom(source, behavior = "append", filter) {
    return (instance) => {
        return Reflect.apply(copyObservers, instance, [source, behavior, filter]);
    };
}
/**
 * Function with implied this allows us to access protected members
 *
 * @param this The timeline whose observers we will copy
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @returns The mutated this
 */
function copyObservers(source, behavior, filter) {
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(source) || !(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(source.observers)) {
        return this;
    }
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunc)(filter)) {
        filter = () => true;
    }
    const clonedSource = (0,_timeline_js__WEBPACK_IMPORTED_MODULE_0__.cloneObserverCollection)(source.observers);
    const keys = Object.keys(clonedSource).filter(filter);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const on = this.on[key];
        if (behavior === "replace") {
            on.clear();
        }
        const momentObservers = clonedSource[key];
        momentObservers.forEach(v => on(v));
    }
    return this;
}


/***/ }),

/***/ 49671:
/*!*****************************************!*\
  !*** ./node_modules/@pnp/core/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssignFrom: () => (/* reexport safe */ _behaviors_assign_from_js__WEBPACK_IMPORTED_MODULE_4__.AssignFrom),
/* harmony export */   CopyFrom: () => (/* reexport safe */ _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_5__.CopyFrom),
/* harmony export */   PnPClientStorage: () => (/* reexport safe */ _storage_js__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorage),
/* harmony export */   PnPClientStorageWrapper: () => (/* reexport safe */ _storage_js__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorageWrapper),
/* harmony export */   Timeline: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.Timeline),
/* harmony export */   asyncBroadcast: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.asyncBroadcast),
/* harmony export */   asyncReduce: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.asyncReduce),
/* harmony export */   broadcast: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.broadcast),
/* harmony export */   cloneObserverCollection: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.cloneObserverCollection),
/* harmony export */   combine: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.combine),
/* harmony export */   dateAdd: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.dateAdd),
/* harmony export */   delay: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.delay),
/* harmony export */   getGUID: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.getGUID),
/* harmony export */   getHashCode: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.getHashCode),
/* harmony export */   getRandomString: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.getRandomString),
/* harmony export */   hOP: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.hOP),
/* harmony export */   isArray: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isArray),
/* harmony export */   isFunc: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isFunc),
/* harmony export */   isUrlAbsolute: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isUrlAbsolute),
/* harmony export */   jsS: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.jsS),
/* harmony export */   lifecycle: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.lifecycle),
/* harmony export */   noInherit: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.noInherit),
/* harmony export */   objectDefinedNotNull: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull),
/* harmony export */   once: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.once),
/* harmony export */   parseToAtob: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.parseToAtob),
/* harmony export */   reduce: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.reduce),
/* harmony export */   request: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.request),
/* harmony export */   stringIsNullOrEmpty: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.stringIsNullOrEmpty)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ 94718);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ 89607);
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.js */ 80370);
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ 59596);
/* harmony import */ var _behaviors_assign_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/assign-from.js */ 92083);
/* harmony import */ var _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/copy-from.js */ 41015);




/**
 * Behavior exports
 */




/***/ }),

/***/ 80370:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/moments.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncBroadcast: () => (/* binding */ asyncBroadcast),
/* harmony export */   asyncReduce: () => (/* binding */ asyncReduce),
/* harmony export */   broadcast: () => (/* binding */ broadcast),
/* harmony export */   lifecycle: () => (/* binding */ lifecycle),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 89607);

/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
function broadcast() {
    return function (observers, ...args) {
        const obs = [...observers];
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
    };
}
/**
 * Defines a moment that executes each observer asynchronously in parallel awaiting all promises to resolve or reject before continuing
 *
 * @returns The final set of arguments
 */
function asyncBroadcast() {
    return async function (observers, ...args) {
        // get our initial values
        const r = args;
        const obs = [...observers];
        const promises = [];
        for (let i = 0; i < obs.length; i++) {
            promises.push(Reflect.apply(obs[i], this, r));
        }
        return Promise.all(promises);
    };
}
/**
 * Defines a moment that executes each observer synchronously, passing the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function reduce() {
    return function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((params, func) => Reflect.apply(func, this, params), args);
    };
}
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function asyncReduce() {
    return async function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((prom, func) => prom.then((params) => Reflect.apply(func, this, params)), Promise.resolve(args));
    };
}
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
function request() {
    return async function (observers, ...args) {
        if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(observers) || observers.length < 1) {
            return undefined;
        }
        const handler = observers[0];
        return Reflect.apply(handler, this, args);
    };
}
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
function lifecycle() {
    return function (observers, ...args) {
        const obs = [...observers];
        // process each handler which updates our instance in order
        // very similar to asyncReduce but the state is the object itself
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
        return this;
    };
}


/***/ }),

/***/ 94718:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PnPClientStorage: () => (/* binding */ PnPClientStorage),
/* harmony export */   PnPClientStorageWrapper: () => (/* binding */ PnPClientStorageWrapper)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 89607);

let storageShim;
function getStorageShim() {
    if (typeof storageShim === "undefined") {
        storageShim = new MemoryStorage();
    }
    return storageShim;
}
/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store) {
        this.store = store;
        this.enabled = this.test();
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    async getOrPut(key, getter, expire) {
        if (!this.enabled) {
            return getter();
        }
        let o = this.get(key);
        if (o === null) {
            o = await getter();
            this.put(key, o, expire);
        }
        return o;
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    async deleteExpired() {
        if (!this.enabled) {
            return;
        }
        for (let i = 0; i < this.store.length; i++) {
            const key = this.store.key(i);
            if (key !== null) {
                // test the stored item to see if we stored it
                if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                    // get those items as get will delete from cache if they are expired
                    await this.get(key);
                }
            }
        }
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            expire = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "minute", 5);
        }
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.jsS)({ pnp: 1, expiration: expire, value: o });
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage, substituting basic memory storage for nodejs
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof localStorage === "undefined" ? getStorageShim() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof sessionStorage === "undefined" ? getStorageShim() : sessionStorage);
        }
        return this._session;
    }
}


/***/ }),

/***/ 59596:
/*!********************************************!*\
  !*** ./node_modules/@pnp/core/timeline.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   cloneObserverCollection: () => (/* binding */ cloneObserverCollection),
/* harmony export */   noInherit: () => (/* binding */ noInherit),
/* harmony export */   once: () => (/* binding */ once)
/* harmony export */ });
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moments.js */ 80370);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 89607);


/**
 * Field name to hold any flags on observer functions used to modify their behavior
 */
const flags = Symbol.for("ObserverLifecycleFlags");
/**
 * Creates a filter function for use in Array.filter that will filter OUT any observers with the specified [flag]
 *
 * @param flag The flag used to exclude observers
 * @returns An Array.filter function
 */
// eslint-disable-next-line no-bitwise
const byFlag = (flag) => ((observer) => !((observer[flags] || 0) & flag));
/**
 * Creates an observer lifecycle modification flag application function
 * @param flag The flag to the bound function should add
 * @returns A function that can be used to apply [flag] to any valid observer
 */
const addFlag = (flag) => ((observer) => {
    // eslint-disable-next-line no-bitwise
    observer[flags] = (observer[flags] || 0) | flag;
    return observer;
});
/**
 * Observer lifecycle modifier that indicates this observer should NOT be inherited by any child
 * timelines.
 */
const noInherit = addFlag(1 /* ObserverLifecycleFlags.noInherit */);
/**
 * Observer lifecycle modifier that indicates this observer should only fire once per instance, it is then removed.
 *
 * Note: If you have a parent and child timeline "once" will affect both and the observer will fire once for a parent lifecycle
 * and once for a child lifecycle
 */
const once = addFlag(2 /* ObserverLifecycleFlags.once */);
/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
class Timeline {
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments, observers = {}) {
        this.moments = moments;
        this.observers = observers;
        this._onProxy = null;
        this._emitProxy = null;
        this._inheritingObservers = true;
    }
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors) {
        for (let i = 0; i < behaviors.length; i++) {
            behaviors[i](this);
        }
        return this;
    }
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on() {
        if (this._onProxy === null) {
            this._onProxy = new Proxy(this, {
                get: (target, p) => Object.assign((handler) => {
                    target.cloneObserversOnChange();
                    addObserver(target.observers, p, handler, 1 /* ObserverAddBehavior.Add */);
                    return target;
                }, {
                    toArray: () => {
                        return Reflect.has(target.observers, p) ? [...Reflect.get(target.observers, p)] : [];
                    },
                    replace: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, 3 /* ObserverAddBehavior.Replace */);
                        return target;
                    },
                    prepend: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, 2 /* ObserverAddBehavior.Prepend */);
                        return target;
                    },
                    clear: () => {
                        if (Reflect.has(target.observers, p)) {
                            target.cloneObserversOnChange();
                            // we trust ourselves that this will be an array
                            target.observers[p].length = 0;
                            return true;
                        }
                        return false;
                    },
                }),
            });
        }
        return this._onProxy;
    }
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message, level = 0) {
        this.emit.log(message, level);
    }
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    error(e) {
        if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(e)) {
            this.emit.error(e);
        }
    }
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    get emit() {
        if (this._emitProxy === null) {
            this._emitProxy = new Proxy(this, {
                get: (target, p) => (...args) => {
                    // handle the case where no observers registered for the target moment
                    const observers = Reflect.has(target.observers, p) ? Reflect.get(target.observers, p) : [];
                    if ((!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(observers) || observers.length < 1) && p === "error") {
                        // if we are emitting an error, and no error observers are defined, we throw
                        throw Error(`Unhandled Exception: ${args[0]}`);
                    }
                    try {
                        // default to broadcasting any events without specific impl (will apply to log and error)
                        const moment = Reflect.has(target.moments, p) ? Reflect.get(target.moments, p) : p === "init" || p === "dispose" ? (0,_moments_js__WEBPACK_IMPORTED_MODULE_1__.lifecycle)() : (0,_moments_js__WEBPACK_IMPORTED_MODULE_1__.broadcast)();
                        // pass control to the individual moment's implementation
                        return Reflect.apply(moment, target, [observers, ...args]);
                    }
                    catch (e) {
                        if (p !== "error") {
                            this.error(e);
                        }
                        else {
                            // if all else fails, re-throw as we are getting errors from error observers meaning something is sideways
                            throw e;
                        }
                    }
                    finally {
                        // here we need to remove any "once" observers
                        if (observers && observers.length > 0) {
                            Reflect.set(target.observers, p, observers.filter(byFlag(2 /* ObserverLifecycleFlags.once */)));
                        }
                    }
                },
            });
        }
        return this._emitProxy;
    }
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    start(init) {
        // initialize our timeline
        this.emit.init();
        // get a ref to the promise returned by execute
        const p = this.execute(init);
        // attach our dispose logic
        p.finally(() => {
            try {
                // provide an opportunity for cleanup of the timeline
                this.emit.dispose();
            }
            catch (e) {
                // shouldn't happen, but possible dispose throws - which may be missed as the usercode await will have resolved.
                const e2 = Object.assign(Error("Error in dispose."), { innerException: e });
                this.error(e2);
            }
        }).catch(() => void (0));
        // give the promise back to the caller
        return p;
    }
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    cloneObserversOnChange() {
        if (this._inheritingObservers) {
            this._inheritingObservers = false;
            this.observers = cloneObserverCollection(this.observers);
        }
    }
}
/**
 * Adds an observer to a given target
 *
 * @param target The object to which events are registered
 * @param moment The name of the moment to which the observer is registered
 * @param addBehavior Determines how the observer is added to the collection
 *
 */
function addObserver(target, moment, observer, addBehavior) {
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunc)(observer)) {
        throw Error("Observers must be functions.");
    }
    if (!Reflect.has(target, moment)) {
        // if we don't have a registration for this moment, then we just add a new prop
        target[moment] = [observer];
    }
    else {
        // if we have an existing property then we follow the specified behavior
        switch (addBehavior) {
            case 1 /* ObserverAddBehavior.Add */:
                target[moment].push(observer);
                break;
            case 2 /* ObserverAddBehavior.Prepend */:
                target[moment].unshift(observer);
                break;
            case 3 /* ObserverAddBehavior.Replace */:
                target[moment].length = 0;
                target[moment].push(observer);
                break;
        }
    }
    return target[moment];
}
function cloneObserverCollection(source) {
    return Reflect.ownKeys(source).reduce((clone, key) => {
        clone[key] = [...source[key].filter(byFlag(1 /* ObserverLifecycleFlags.noInherit */))];
        return clone;
    }, {});
}


/***/ }),

/***/ 89607:
/*!****************************************!*\
  !*** ./node_modules/@pnp/core/util.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   dateAdd: () => (/* binding */ dateAdd),
/* harmony export */   delay: () => (/* binding */ delay),
/* harmony export */   getGUID: () => (/* binding */ getGUID),
/* harmony export */   getHashCode: () => (/* binding */ getHashCode),
/* harmony export */   getRandomString: () => (/* binding */ getRandomString),
/* harmony export */   hOP: () => (/* binding */ hOP),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   isUrlAbsolute: () => (/* binding */ isUrlAbsolute),
/* harmony export */   jsS: () => (/* binding */ jsS),
/* harmony export */   objectDefinedNotNull: () => (/* binding */ objectDefinedNotNull),
/* harmony export */   parseToAtob: () => (/* binding */ parseToAtob),
/* harmony export */   stringIsNullOrEmpty: () => (/* binding */ stringIsNullOrEmpty)
/* harmony export */ });
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    let ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param f The thing to test for functionness
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunc(f) {
    return typeof f === "function";
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray(array);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return typeof s === "undefined" || s === null || s.length < 1;
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * @returns validates and returns a valid atob conversion
*/
function parseToAtob(str) {
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    try {
        // test if str has been JSON.stringified
        const parsed = JSON.parse(str);
        if (base64Regex.test(parsed)) {
            return atob(parsed);
        }
        return null;
    }
    catch (err) {
        // Not a valid JSON string, check if it's a standalone Base64 string
        return base64Regex.test(str) ? atob(str) : null;
    }
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


/***/ }),

/***/ 17293:
/*!*************************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/advanced-query.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedQuery: () => (/* binding */ AdvancedQuery)
/* harmony export */ });
/* harmony import */ var _pnp_graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/graph */ 29080);

function AdvancedQuery() {
    return (instance) => {
        instance.using((0,_pnp_graph__WEBPACK_IMPORTED_MODULE_0__.ConsistencyLevel)());
        instance.query.set("$count", "true");
        return instance;
    };
}


/***/ }),

/***/ 49655:
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/consistency-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsistencyLevel: () => (/* binding */ ConsistencyLevel)
/* harmony export */ });
function ConsistencyLevel(level = "eventual") {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            init.headers = { ...init.headers, "ConsistencyLevel": level };
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 42056:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/defaults.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHeaders: () => (/* binding */ DefaultHeaders),
/* harmony export */   DefaultInit: () => (/* binding */ DefaultInit)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telemetry.js */ 6451);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ 29080);




function DefaultInit(graphUrl = _index_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_GRAPH_URL) {
    if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(graphUrl)) {
        throw Error("Graph baseUrl must be absolute.");
    }
    return (instance) => {
        instance.using((0,_telemetry_js__WEBPACK_IMPORTED_MODULE_3__.Telemetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.RejectOnError)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.ResolveOnData)());
        instance.on.pre(async (url, init, result) => {
            init.cache = "default";
            init.credentials = "same-origin";
            if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url)) {
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(graphUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.InjectHeaders)({
            "Content-Type": "application/json",
        }));
        return instance;
    };
}


/***/ }),

/***/ 93543:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/endpoint.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Endpoint: () => (/* binding */ Endpoint)
/* harmony export */ });
function Endpoint(endpoint) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            const all = ["beta", "v1.0"];
            let regex = new RegExp(endpoint, "i");
            const replaces = all.filter(s => !regex.test(s)).map(s => s.replace(".", "\\."));
            regex = new RegExp(`/?(${replaces.join("|")})/?`, "ig");
            url = url.replace(regex, `/${endpoint}/`);
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 47090:
/*!***********************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/graphbrowser.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphBrowser: () => (/* binding */ GraphBrowser)
/* harmony export */ });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.js */ 42056);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ 29080);



function GraphBrowser(props) {
    const { baseUrl } = {
        baseUrl: _index_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_GRAPH_URL,
        ...props,
    };
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_1__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_1__.DefaultInit)(baseUrl), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.DefaultParse)());
        return instance;
    };
}


/***/ }),

/***/ 23637:
/*!****************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/paged.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Count: () => (/* binding */ Count),
/* harmony export */   Paged: () => (/* binding */ Paged)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _graphqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphqueryable.js */ 670);
/* harmony import */ var _consistency_level_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consistency-level.js */ 49655);




/**
 * A function that will take a collection defining IGraphCollection and return the count of items
 * in that collection. Not all Graph collections support Count.
 *
 * @param col The collection to count
 * @returns number representing the count
 */
async function Count(col) {
    const q = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_2__.GraphCollection)(col).using(Paged(), (0,_consistency_level_js__WEBPACK_IMPORTED_MODULE_3__.ConsistencyLevel)());
    q.query.set("$count", "true");
    q.top(1);
    const y = await q();
    return y.count;
}
/**
 * Behavior that converts results to pages when used with a collection (exposed through the paged method of GraphCollection)
 *
 * @returns A TimelinePipe used to configure the queryable
 */
function Paged(supportsCount = false) {
    return (instance) => {
        instance.on.parse.replace(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.errorCheck);
        instance.on.parse(async (url, response, result) => {
            const txt = await response.text();
            const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
            const nextLink = json["@odata.nextLink"];
            const deltaLink = json["@odata.deltaLink"];
            const count = supportsCount && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "@odata.count") ? parseInt(json["@odata.count"], 10) : 0;
            const hasNext = !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(nextLink);
            const hasDelta = !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(deltaLink);
            result = {
                count,
                hasNext,
                nextLink: hasNext ? nextLink : null,
                deltaLink: hasDelta ? deltaLink : null,
                value: (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.parseODataJSON)(json),
            };
            return [url, response, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 34587:
/*!***************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/spfx.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFx: () => (/* binding */ SPFx),
/* harmony export */   SPFxToken: () => (/* binding */ SPFxToken)
/* harmony export */ });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.js */ 42056);


class SPFxTokenNullOrUndefinedError extends Error {
    constructor(behaviorName) {
        super(`SPFx Context supplied to ${behaviorName} Behavior is null or undefined.`);
    }
    static check(behaviorName, context) {
        if (typeof context === "undefined" || context === null) {
            throw new SPFxTokenNullOrUndefinedError(behaviorName);
        }
    }
}
function SPFxToken(context) {
    SPFxTokenNullOrUndefinedError.check("SPFxToken", context);
    return (instance) => {
        instance.on.auth.replace(async function (url, init) {
            const provider = await context.aadTokenProviderFactory.getTokenProvider();
            const token = await provider.getToken(`${url.protocol}//${url.hostname}`);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            init.headers["Authorization"] = `Bearer ${token}`;
            return [url, init];
        });
        return instance;
    };
}
function SPFx(context) {
    SPFxTokenNullOrUndefinedError.check("SPFx", context);
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_1__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_1__.DefaultInit)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.DefaultParse)(), SPFxToken(context));
        return instance;
    };
}


/***/ }),

/***/ 6451:
/*!********************************************************!*\
  !*** ./node_modules/@pnp/graph/behaviors/telemetry.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Telemetry: () => (/* binding */ Telemetry)
/* harmony export */ });
function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            init.headers = { ...init.headers, SdkVersion: "PnPCoreJS/4.20.0" };
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/dot-notation
            this.log(`Request Tag: ${init.headers["SdkVersion"]}`, 0);
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 73060:
/*!***********************************************!*\
  !*** ./node_modules/@pnp/graph/decorators.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addable: () => (/* binding */ addable),
/* harmony export */   defaultPath: () => (/* binding */ defaultPath),
/* harmony export */   deleteable: () => (/* binding */ deleteable),
/* harmony export */   deleteableWithETag: () => (/* binding */ deleteableWithETag),
/* harmony export */   getById: () => (/* binding */ getById),
/* harmony export */   getByName: () => (/* binding */ getByName),
/* harmony export */   hasDelta: () => (/* binding */ hasDelta),
/* harmony export */   updateable: () => (/* binding */ updateable),
/* harmony export */   updateableWithETag: () => (/* binding */ updateableWithETag)
/* harmony export */ });
/* harmony import */ var _graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphqueryable.js */ 670);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);


/**
 * Decorator used to specify the default path for Queryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}
/**
 * Adds the delete method to the tagged class
 */
function deleteable() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            delete() {
                return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphDelete)(this);
            }
        };
    };
}
/**
 * Adds the delete method to the tagged class
 */
function deleteableWithETag() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            delete(eTag = "*") {
                return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphDelete)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.headers)({
                    "If-Match": eTag,
                }));
            }
        };
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateable() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            update(props) {
                return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphPatch)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(props));
            }
        };
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateableWithETag() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            update(props, eTag = "*") {
                return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphPatch)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(props, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.headers)({
                    "If-Match": eTag,
                })));
            }
        };
    };
}
/**
 * Adds the add method to the tagged class
 */
function addable() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            add(props) {
                return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(props));
            }
        };
    };
}
/**
 * Adds the getById method to a collection
 */
function getById(factory) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            getById(id) {
                return factory(this, `${id}`);
            }
        };
    };
}
/**
 * Adds the getByName method to a collection
 */
function getByName(factory) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            getByName(name) {
                return factory(this, name);
            }
        };
    };
}
function hasDelta() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            delta(properties = {}) {
                var _a;
                const querystring = ((_a = Object.keys(properties)) === null || _a === void 0 ? void 0 : _a.map(key => `${key}=${properties[key]}`).join("&")) || "";
                const path = (querystring.length > 0) ? `delta?${querystring}` : "delta";
                const query = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.GraphCollection)(this, path);
                if (properties === null || properties === void 0 ? void 0 : properties.maxPageSize) {
                    query.using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.InjectHeaders)({
                        "Prefer": `odata.maxpagesize=${properties.maxPageSize}`,
                    }));
                }
                query.on.parse.replace(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.errorCheck);
                query.on.parse(async (url, response, result) => {
                    const json = await response.json();
                    const nextLink = json["@odata.nextLink"];
                    const deltaLink = json["@odata.deltaLink"];
                    result = {
                        next: () => (nextLink ? (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.GraphCollection)([this, nextLink]) : null),
                        delta: () => (deltaLink ? (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.GraphCollection)([query, deltaLink])() : null),
                        values: json.value,
                    };
                    return [url, response, result];
                });
                return query;
            }
        };
    };
}


/***/ }),

/***/ 90644:
/*!************************************************************!*\
  !*** ./node_modules/@pnp/graph/directory-objects/types.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectoryObject: () => (/* binding */ DirectoryObject),
/* harmony export */   DirectoryObjectTypes: () => (/* binding */ DirectoryObjectTypes),
/* harmony export */   DirectoryObjects: () => (/* binding */ DirectoryObjects),
/* harmony export */   _DirectoryObject: () => (/* binding */ _DirectoryObject),
/* harmony export */   _DirectoryObjects: () => (/* binding */ _DirectoryObjects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphqueryable.js */ 670);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators.js */ 73060);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _behaviors_paged_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../behaviors/paged.js */ 23637);





/**
 * Represents a Directory Object entity
 */
let _DirectoryObject = class _DirectoryObject extends _graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__._GraphInstance {
    /**
   * Returns all the groups and directory roles that the specified Directory Object is a member of. The check is transitive
   *
   * @param securityEnabledOnly
   */
    getMemberObjects(securityEnabledOnly = false) {
        return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphPost)(DirectoryObject(this, "getMemberObjects"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)({ securityEnabledOnly }));
    }
    /**
   * Returns all the groups that the specified Directory Object is a member of. The check is transitive
   *
   * @param securityEnabledOnly
   */
    getMemberGroups(securityEnabledOnly = false) {
        return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphPost)(DirectoryObject(this, "getMemberGroups"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)({ securityEnabledOnly }));
    }
    /**
   * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
   * This function is transitive.
   * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
   */
    checkMemberGroups(groupIds) {
        return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphPost)(DirectoryObject(this, "checkMemberGroups"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)({ groupIds }));
    }
};
_DirectoryObject = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_1__.deleteable)()
], _DirectoryObject);

const DirectoryObject = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphInvokableFactory)(_DirectoryObject);
/**
 * Describes a collection of Directory Objects
 *
 */
let _DirectoryObjects = class _DirectoryObjects extends _graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__._GraphCollection {
    /**
  * Returns the directory objects specified in a list of ids. NOTE: The directory objects returned are the full objects containing all their properties.
  * The $select query option is not available for this operation.
  *
  * @param ids A collection of ids for which to return objects. You can specify up to 1000 ids.
  * @param type A collection of resource types that specifies the set of resource collections to search. Default is directoryObject.
  */
    getByIds(ids, type = DirectoryObjectTypes.directoryObject) {
        return (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphPost)(DirectoryObjects(this, "getByIds"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)({ ids, type }));
    }
    /**
     * 	Retrieves the total count of matching resources
     *  If the resource doesn't support count, this value will always be zero
     */
    async count() {
        return (0,_behaviors_paged_js__WEBPACK_IMPORTED_MODULE_3__.Count)(this);
    }
};
_DirectoryObjects = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_1__.defaultPath)("directoryObjects"),
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_1__.getById)(DirectoryObject)
], _DirectoryObjects);

const DirectoryObjects = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphInvokableFactory)(_DirectoryObjects);
/**
 * DirectoryObjectTypes
 */
var DirectoryObjectTypes;
(function (DirectoryObjectTypes) {
    /**
   * Directory Objects
   */
    DirectoryObjectTypes[DirectoryObjectTypes["directoryObject"] = 0] = "directoryObject";
    /**
   * User
   */
    DirectoryObjectTypes[DirectoryObjectTypes["user"] = 1] = "user";
    /**
   * Group
   */
    DirectoryObjectTypes[DirectoryObjectTypes["group"] = 2] = "group";
    /**
   * Device
   */
    DirectoryObjectTypes[DirectoryObjectTypes["device"] = 3] = "device";
})(DirectoryObjectTypes || (DirectoryObjectTypes = {}));


/***/ }),

/***/ 5439:
/*!***************************************!*\
  !*** ./node_modules/@pnp/graph/fi.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphFI: () => (/* binding */ GraphFI),
/* harmony export */   graphfi: () => (/* binding */ graphfi)
/* harmony export */ });
/* harmony import */ var _graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphqueryable.js */ 670);

class GraphFI {
    /**
     * Creates a new instance of the GraphFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.GraphQueryable)(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function graphfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new GraphFI(root);
}


/***/ }),

/***/ 670:
/*!***************************************************!*\
  !*** ./node_modules/@pnp/graph/graphqueryable.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphCollection: () => (/* binding */ GraphCollection),
/* harmony export */   GraphInstance: () => (/* binding */ GraphInstance),
/* harmony export */   GraphQueryable: () => (/* binding */ GraphQueryable),
/* harmony export */   _GraphCollection: () => (/* binding */ _GraphCollection),
/* harmony export */   _GraphInstance: () => (/* binding */ _GraphInstance),
/* harmony export */   _GraphQueryable: () => (/* binding */ _GraphQueryable),
/* harmony export */   graphDelete: () => (/* binding */ graphDelete),
/* harmony export */   graphGet: () => (/* binding */ graphGet),
/* harmony export */   graphInvokableFactory: () => (/* binding */ graphInvokableFactory),
/* harmony export */   graphPatch: () => (/* binding */ graphPatch),
/* harmony export */   graphPost: () => (/* binding */ graphPost),
/* harmony export */   graphPut: () => (/* binding */ graphPut)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _behaviors_consistency_level_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behaviors/consistency-level.js */ 49655);
/* harmony import */ var _behaviors_paged_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behaviors/paged.js */ 23637);




const graphInvokableFactory = (f) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.queryableFactory)(f);
};
/**
 * Queryable Base Class
 *
 */
class _GraphQueryable extends _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.Queryable {
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param base A string or Queryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        super(base, path);
        // we need to use the graph implementation to handle our special encoding
        this._query = new GraphQueryParams();
        if (typeof base === "string") {
            this.parentUrl = base;
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(base)) {
            this.parentUrl = base[0].toUrl();
        }
        else {
            this.parentUrl = base.toUrl();
        }
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, path, base = this.parentUrl) {
        return factory([this, base], path);
    }
}
const GraphQueryable = graphInvokableFactory(_GraphQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _GraphCollection extends _GraphQueryable {
    /**
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", filter);
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        var _a;
        const o = "$orderby";
        const query = ((_a = this.query.get(o)) === null || _a === void 0 ? void 0 : _a.split(",")) || [];
        query.push(`${orderBy} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    skip(num) {
        this.query.set("$skip", num.toString());
        return this;
    }
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    search(query) {
        this.using((0,_behaviors_consistency_level_js__WEBPACK_IMPORTED_MODULE_3__.ConsistencyLevel)());
        this.query.set("$search", query);
        return this;
    }
    /**
     * 	To request second and subsequent pages of Graph data
     */
    skipToken(token) {
        this.query.set("$skiptoken", token);
        return this;
    }
    [Symbol.asyncIterator]() {
        const q = GraphCollection(this).using((0,_behaviors_paged_js__WEBPACK_IMPORTED_MODULE_2__.Paged)(), (0,_behaviors_consistency_level_js__WEBPACK_IMPORTED_MODULE_3__.ConsistencyLevel)());
        // Issue #3136, some APIs take other query params that need to persist through the paging, so we just include everything
        for (const [key, value] of this.query) {
            q.query.set(key, value);
        }
        return {
            _next: q,
            async next() {
                if (this._next === null) {
                    return { done: true, value: undefined };
                }
                const result = await this._next();
                if (result.hasNext) {
                    this._next = GraphCollection([this._next, result.nextLink]);
                    return { done: false, value: result.value };
                }
                else {
                    this._next = null;
                    return { done: false, value: result.value };
                }
            },
        };
    }
}
const GraphCollection = graphInvokableFactory(_GraphCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _GraphInstance extends _GraphQueryable {
}
const GraphInstance = graphInvokableFactory(_GraphInstance);
const graphGet = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.get, init);
};
const graphPost = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.post, init);
};
const graphDelete = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.del, init);
};
const graphPatch = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.patch, init);
};
const graphPut = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.put, init);
};
class GraphQueryParams extends Map {
    toString() {
        const params = new URLSearchParams();
        const literals = [];
        for (const item of this) {
            // and here is where we add some "enhanced" parsing as we get issues.
            if (/\/any\(.*?\)/i.test(item[1])) {
                literals.push(`${item[0]}=${item[1]}`);
            }
            else {
                params.append(item[0], item[1]);
            }
        }
        literals.push(params.toString());
        return literals.join("&");
    }
}


/***/ }),

/***/ 29080:
/*!******************************************!*\
  !*** ./node_modules/@pnp/graph/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedQuery: () => (/* reexport safe */ _behaviors_advanced_query_js__WEBPACK_IMPORTED_MODULE_2__.AdvancedQuery),
/* harmony export */   ConsistencyLevel: () => (/* reexport safe */ _behaviors_consistency_level_js__WEBPACK_IMPORTED_MODULE_3__.ConsistencyLevel),
/* harmony export */   Count: () => (/* reexport safe */ _behaviors_paged_js__WEBPACK_IMPORTED_MODULE_7__.Count),
/* harmony export */   DEFAULT_GRAPH_URL: () => (/* binding */ DEFAULT_GRAPH_URL),
/* harmony export */   DefaultHeaders: () => (/* reexport safe */ _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_4__.DefaultHeaders),
/* harmony export */   DefaultInit: () => (/* reexport safe */ _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_4__.DefaultInit),
/* harmony export */   Endpoint: () => (/* reexport safe */ _behaviors_endpoint_js__WEBPACK_IMPORTED_MODULE_5__.Endpoint),
/* harmony export */   GraphBrowser: () => (/* reexport safe */ _behaviors_graphbrowser_js__WEBPACK_IMPORTED_MODULE_6__.GraphBrowser),
/* harmony export */   GraphCollection: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.GraphCollection),
/* harmony export */   GraphFI: () => (/* reexport safe */ _fi_js__WEBPACK_IMPORTED_MODULE_0__.GraphFI),
/* harmony export */   GraphInstance: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.GraphInstance),
/* harmony export */   GraphQueryable: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.GraphQueryable),
/* harmony export */   Paged: () => (/* reexport safe */ _behaviors_paged_js__WEBPACK_IMPORTED_MODULE_7__.Paged),
/* harmony export */   SPFx: () => (/* reexport safe */ _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_9__.SPFx),
/* harmony export */   SPFxToken: () => (/* reexport safe */ _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_9__.SPFxToken),
/* harmony export */   Telemetry: () => (/* reexport safe */ _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.Telemetry),
/* harmony export */   _GraphCollection: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__._GraphCollection),
/* harmony export */   _GraphInstance: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__._GraphInstance),
/* harmony export */   _GraphQueryable: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__._GraphQueryable),
/* harmony export */   graphDelete: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.graphDelete),
/* harmony export */   graphGet: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.graphGet),
/* harmony export */   graphInvokableFactory: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.graphInvokableFactory),
/* harmony export */   graphPatch: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.graphPatch),
/* harmony export */   graphPost: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.graphPost),
/* harmony export */   graphPut: () => (/* reexport safe */ _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__.graphPut),
/* harmony export */   graphfi: () => (/* reexport safe */ _fi_js__WEBPACK_IMPORTED_MODULE_0__.graphfi)
/* harmony export */ });
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fi.js */ 5439);
/* harmony import */ var _graphqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphqueryable.js */ 670);
/* harmony import */ var _behaviors_advanced_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behaviors/advanced-query.js */ 17293);
/* harmony import */ var _behaviors_consistency_level_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behaviors/consistency-level.js */ 49655);
/* harmony import */ var _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/defaults.js */ 42056);
/* harmony import */ var _behaviors_endpoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/endpoint.js */ 93543);
/* harmony import */ var _behaviors_graphbrowser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/graphbrowser.js */ 47090);
/* harmony import */ var _behaviors_paged_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/paged.js */ 23637);
/* harmony import */ var _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/telemetry.js */ 6451);
/* harmony import */ var _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/spfx.js */ 34587);










const DEFAULT_GRAPH_URL = "https://graph.microsoft.com/v1.0";


/***/ }),

/***/ 13071:
/*!************************************************!*\
  !*** ./node_modules/@pnp/graph/users/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   People: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.People),
/* harmony export */   User: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.User),
/* harmony export */   Users: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Users)
/* harmony export */ });
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ 5439);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 54278);



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__.GraphFI.prototype, "me", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__.User, "me");
    },
});
Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__.GraphFI.prototype, "users", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__.Users);
    },
});


/***/ }),

/***/ 54278:
/*!************************************************!*\
  !*** ./node_modules/@pnp/graph/users/types.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   People: () => (/* binding */ People),
/* harmony export */   User: () => (/* binding */ User),
/* harmony export */   Users: () => (/* binding */ Users),
/* harmony export */   _People: () => (/* binding */ _People),
/* harmony export */   _User: () => (/* binding */ _User),
/* harmony export */   _Users: () => (/* binding */ _Users)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphqueryable.js */ 670);
/* harmony import */ var _directory_objects_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directory-objects/types.js */ 90644);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators.js */ 73060);




let _User = class _User extends _directory_objects_types_js__WEBPACK_IMPORTED_MODULE_1__._DirectoryObject {
    /**
    * The groups and directory roles associated with the user
    */
    get memberOf() {
        return (0,_directory_objects_types_js__WEBPACK_IMPORTED_MODULE_1__.DirectoryObjects)(this, "memberOf");
    }
    /**
    * The groups and directory roles associated with the user
    */
    get transitiveMemberOf() {
        return (0,_directory_objects_types_js__WEBPACK_IMPORTED_MODULE_1__.DirectoryObjects)(this, "transitiveMemberOf");
    }
    /**
     * Retrieve a collection of person objects ordered by their relevance to the user
     */
    get people() {
        return People(this);
    }
    /**
    * People that have direct reports to the user
    */
    get directReports() {
        return People(this, "directReports");
    }
    /**
    * The manager associated with this user
    */
    get manager() {
        return User(this, "manager");
    }
};
_User = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_2__.updateable)(),
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_2__.deleteable)()
], _User);

const User = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphInvokableFactory)(_User);
let _Users = class _Users extends _directory_objects_types_js__WEBPACK_IMPORTED_MODULE_1__._DirectoryObjects {
};
_Users = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_2__.defaultPath)("users"),
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_2__.getById)(User)
], _Users);

const Users = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphInvokableFactory)(_Users);
let _People = class _People extends _directory_objects_types_js__WEBPACK_IMPORTED_MODULE_1__._DirectoryObjects {
};
_People = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_2__.defaultPath)("people")
], _People);

const People = (0,_graphqueryable_js__WEBPACK_IMPORTED_MODULE_0__.graphInvokableFactory)(_People);


/***/ }),

/***/ 62191:
/*!***************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/bearer-token.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BearerToken: () => (/* binding */ BearerToken)
/* harmony export */ });
/* harmony import */ var _inject_headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject-headers.js */ 37164);

function BearerToken(token) {
    return (instance) => {
        instance.using((0,_inject_headers_js__WEBPACK_IMPORTED_MODULE_0__.InjectHeaders)({
            "Authorization": `Bearer ${token}`,
        }));
        return instance;
    };
}


/***/ }),

/***/ 4009:
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/browser-fetch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserFetch: () => (/* binding */ BrowserFetch),
/* harmony export */   BrowserFetchWithRetry: () => (/* binding */ BrowserFetchWithRetry)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers.js */ 70188);


function BrowserFetch(props) {
    const { replace } = {
        replace: true,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            this.log(`Fetch: ${init.method} ${url.toString()}`, 0);
            return fetch(url.toString(), init);
        });
        return instance;
    };
}
function BrowserFetchWithRetry(props) {
    const { interval, replace, retries } = {
        replace: true,
        interval: 200,
        retries: 3,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            let response;
            let wait = interval;
            let count = 0;
            let lastErr;
            const retry = async () => {
                // if we've tried too many times, throw
                if (count >= retries) {
                    throw lastErr || new _parsers_js__WEBPACK_IMPORTED_MODULE_1__.HttpRequestError(`Retry count exceeded (${retries}) for this request. ${response.status}: ${response.statusText};`, response);
                }
                count++;
                if (typeof response === "undefined" || (response === null || response === void 0 ? void 0 : response.status) === 429 || (response === null || response === void 0 ? void 0 : response.status) === 503 || (response === null || response === void 0 ? void 0 : response.status) === 504) {
                    // this is our first try and response isn't defined yet
                    // we have been throttled OR http status code 503 or 504, we can retry this
                    if (typeof response !== "undefined") {
                        // this isn't our first try so we need to calculate delay
                        if (response.headers.has("Retry-After")) {
                            // if we have gotten a header, use that value as the delay value in seconds
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            wait = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                        }
                        else {
                            // Increment our counters.
                            wait *= 2;
                        }
                        this.log(`Attempt #${count} to retry request which failed with ${response.status}: ${response.statusText}`, 0);
                        await (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.delay)(wait);
                    }
                    try {
                        const u = url.toString();
                        this.log(`Fetch: ${init.method} ${u}`, 0);
                        response = await fetch(u, init);
                        // if we got a good response, return it, otherwise see if we can retry
                        return response.ok ? response : retry();
                    }
                    catch (err) {
                        if (/AbortError/.test(err.name)) {
                            // don't retry aborted requests
                            throw err;
                        }
                        // if there is no network the response is undefined and err is all we have
                        // so we grab the err and save it to throw if we exceed the number of retries
                        // #2226 first reported this
                        lastErr = err;
                        return retry();
                    }
                }
                else {
                    return response;
                }
            };
            // this the the first call to retry that starts the cycle
            // response is undefined and the other values have their defaults
            return retry();
        });
        return instance;
    };
}


/***/ }),

/***/ 24513:
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching-pessimistic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachingPessimisticRefresh: () => (/* binding */ CachingPessimisticRefresh)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryable.js */ 80500);
/* harmony import */ var _caching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.js */ 80181);



/**
 * Pessimistic Caching Behavior
 * Always returns the cached value if one exists but asynchronously executes the call and updates the cache.
 * If a expireFunc is included then the cache update only happens if the cache has expired.
 *
 * @param store Use local or session storage
 * @param keyFactory: a function that returns the key for the cache value, if not provided a default hash of the url will be used
 * @param expireFunc: a function that returns a date of expiration for the cache value, if not provided the cache never expires but is always updated.
 */
function CachingPessimisticRefresh(props) {
    return (instance) => {
        const pre = async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = (0,_caching_js__WEBPACK_IMPORTED_MODULE_2__.bindCachingCore)(url, init, props);
            if (!shouldCache) {
                return [url, init, result];
            }
            const cached = getCachedValue();
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(cached)) {
                // set our result
                result = cached;
                setTimeout(async () => {
                    const q = new _queryable_js__WEBPACK_IMPORTED_MODULE_1__.Queryable(this);
                    const a = q.on.pre.toArray();
                    q.on.pre.clear();
                    // filter out this pre handler from the original queryable as we don't want to re-run it
                    a.filter(v => v !== pre).map(v => q.on.pre(v));
                    // in this case the init should contain the correct "method"
                    const value = await q(init);
                    setCachedValue(value);
                }, 0);
            }
            else {
                // register the post handler to cache the value as there is not one already in the cache
                // and we need to run this request as normal
                this.on.post((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.noInherit)(async function (url, result) {
                    setCachedValue(result);
                    return [url, result];
                }));
            }
            return [url, init, result];
        };
        instance.on.pre(pre);
        return instance;
    };
}


/***/ }),

/***/ 80181:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheAlways: () => (/* binding */ CacheAlways),
/* harmony export */   CacheKey: () => (/* binding */ CacheKey),
/* harmony export */   CacheNever: () => (/* binding */ CacheNever),
/* harmony export */   Caching: () => (/* binding */ Caching),
/* harmony export */   bindCachingCore: () => (/* binding */ bindCachingCore)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);

/**
 * Behavior that forces caching for the request regardless of "method"
 *
 * @returns TimelinePipe
 */
function CacheAlways() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheAlways": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that blocks caching for the request regardless of "method"
 *
 * Note: If both Caching and CacheAlways are present AND CacheNever is present the request will not be cached
 * as we give priority to the CacheNever case
 *
 * @returns TimelinePipe
 */
function CacheNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that allows you to specify a cache key for a request
 *
 * @param key The key to use for caching
  */
function CacheKey(key) {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheKey": key };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Adds caching to the requests based on the supplied props
 *
 * @param props Optional props that configure how caching will work
 * @returns TimelinePipe used to configure requests
 */
function Caching(props) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = bindCachingCore(url, init, props);
            // only cache get requested data or where the CacheAlways header is present (allows caching of POST requests)
            if (shouldCache) {
                const cached = getCachedValue();
                // we need to ensure that result stays "undefined" unless we mean to set null as the result
                if (cached === null) {
                    // if we don't have a cached result we need to get it after the request is sent. Get the raw value (un-parsed) to store into cache
                    this.on.post((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.noInherit)(async function (url, result) {
                        setCachedValue(result);
                        return [url, result];
                    }));
                }
                else {
                    result = cached;
                }
            }
            return [url, init, result];
        });
        return instance;
    };
}
const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorage();
/**
 * Based on the supplied properties, creates bound logic encapsulating common caching configuration
 * sharable across implementations to more easily provide consistent behavior across behaviors
 *
 * @param props Any caching props used to initialize the core functions
 */
function bindCachingCore(url, init, props) {
    var _a, _b;
    const { store, keyFactory, expireFunc } = {
        store: "local",
        keyFactory: (url) => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getHashCode)(url.toLowerCase()).toString(),
        expireFunc: () => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "minute", 5),
        ...props,
    };
    const s = store === "session" ? storage.session : storage.local;
    const key = (init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheKey"]) ? init.headers["X-PnP-CacheKey"] : keyFactory(url);
    return [
        // calculated value indicating if we should cache this request
        (/get/i.test(init.method) || ((_a = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheAlways"]) !== null && _a !== void 0 ? _a : false)) && !((_b = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheNever"]) !== null && _b !== void 0 ? _b : false),
        // gets the cached value
        () => s.get(key),
        // sets the cached value
        (value) => s.put(key, value, expireFunc(url)),
    ];
}


/***/ }),

/***/ 8784:
/*!*************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/cancelable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelAction: () => (/* binding */ CancelAction),
/* harmony export */   Cancelable: () => (/* binding */ Cancelable),
/* harmony export */   asCancelableScope: () => (/* binding */ asCancelableScope),
/* harmony export */   cancelableScope: () => (/* binding */ cancelableScope)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);

/**
 * Cancelable is a fairly complex behavior as there is a lot to consider through multiple timelines. We have
 * two main cases:
 *
 * 1. basic method that is a single call and returns the result of an operation (return spPost(...))
 * 2. complex method that has multiple async calls within
 *
 * 1. For basic calls the cancel info is attached in init as it is only involved within a single request.
 *    This works because there is only one request and the cancel logic doesn't need to persist across
 *    inheriting instances. Also, many of these requests are so fast canceling is likely unnecessary
 *
 * 2. Complex method present a larger challenge because they are comprised of > 1 request and the promise
 *    that is actually returned to the user is not directly from one of our calls. This promise is the
 *    one "created" by the language when you await. For complex methods we have two things that solve these
 *    needs.
 *
 *    The first is the use of either the cancelableScope decorator or the asCancelableScope method
 *    wrapper. These create an upper level cancel info that is then shared across the child requests within
 *    the complex method. Meaning if I do a files.addChunked the same cancel info (and cancel method)
 *    are set on the current "this" which is user object on which the method was called. This info is then
 *    passed down to any child requests using the original "this" as a base using the construct moment.
 *
 *    The CancelAction behavior is used to apply additional actions to a request once it is canceled. For example
 *    in the case of uploading files chunked in sp we cancel the upload by id.
 */
// this is a special moment used to broadcast when a request is canceled
const MomentName = "__CancelMoment__";
// this value is used to track cancel state and the value is represetented by IScopeInfo
const ScopeId = Symbol.for("CancelScopeId");
// module map of all currently tracked cancel scopes
const cancelScopes = new Map();
/**
 * This method is bound to a scope id and used as the cancel method exposed to the user via cancelable promise
 *
 * @param this unused, the current promise
 * @param scopeId Id bound at creation time
 */
async function cancelPrimitive(scopeId) {
    const scope = cancelScopes.get(scopeId);
    scope.controller.abort();
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(scope === null || scope === void 0 ? void 0 : scope.actions)) {
        scope.actions.map(action => scope.currentSelf.on[MomentName](action));
    }
    try {
        await scope.currentSelf.emit[MomentName]();
    }
    catch (e) {
        scope.currentSelf.log(`Error in cancel: ${e}`, 3);
    }
}
/**
 * Creates a new scope id, sets it on the instance's ScopeId property, and adds the info to the map
 *
 * @returns the new scope id (GUID)
 */
function createScope(instance) {
    const id = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
    instance[ScopeId] = id;
    cancelScopes.set(id, {
        cancel: cancelPrimitive.bind({}, id),
        actions: [],
        controller: null,
        currentSelf: instance,
    });
    return id;
}
/**
 * Function wrapper that turns the supplied function into a cancellation scope
 *
 * @param func Func to wrap
 * @returns The same func signature, wrapped with our cancel scoping logic
 */
const asCancelableScope = (func) => {
    return function (...args) {
        // ensure we have setup "this" to cancel
        // 1. for single requests the value is set in the behavior's init observer
        // 2. for complex requests the value is set here
        if (!Reflect.has(this, ScopeId)) {
            createScope(this);
        }
        // execute the original function, but don't await it
        const result = func.apply(this, args).finally(() => {
            // remove any cancel scope values tied to this instance
            cancelScopes.delete(this[ScopeId]);
            delete this[ScopeId];
        });
        // ensure the synthetic promise from a complex method has a cancel method
        result.cancel = cancelScopes.get(this[ScopeId]).cancel;
        return result;
    };
};
/**
 * Decorator used to mark multi-step methods to ensure all subrequests are properly cancelled
 */
function cancelableScope(_target, _propertyKey, descriptor) {
    // wrapping the original method
    descriptor.value = asCancelableScope(descriptor.value);
}
/**
 * Allows requests to be canceled by the caller by adding a cancel method to the Promise returned by the library
 *
 * @returns Timeline pipe to setup canelability
 */
function Cancelable() {
    if (!AbortController) {
        throw Error("The current environment appears to not support AbortController, please include a suitable polyfill.");
    }
    return (instance) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        instance.on.construct(function (init, path) {
            if (typeof init !== "string") {
                const parent = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(init) ? init[0] : init;
                if (Reflect.has(parent, ScopeId)) {
                    // ensure we carry over the scope id to the new instance from the parent
                    this[ScopeId] = parent[ScopeId];
                }
                // define the moment's implementation
                this.moments[MomentName] = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncBroadcast)();
            }
        });
        // init our queryable to support cancellation
        instance.on.init(function () {
            if (!Reflect.has(this, ScopeId)) {
                // ensure we have setup "this" to cancel
                // 1. for single requests this will set the value
                // 2. for complex requests the value is set in asCancelableScope
                const id = createScope(this);
                // if we are creating the scope here, we have not created it within asCancelableScope
                // meaning the finally handler there will not delete the tracked scope reference
                this.on.dispose(() => {
                    cancelScopes.delete(id);
                });
            }
            this.on[this.InternalPromise]((promise) => {
                // when a new promise is created add a cancel method
                promise.cancel = cancelScopes.get(this[ScopeId]).cancel;
                return [promise];
            });
        });
        instance.on.pre(async function (url, init, result) {
            // grab the current scope, update the controller and currentSelf
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we are here without a scope we are likely running a CancelAction request so we just ignore canceling
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(existingScope)) {
                const controller = new AbortController();
                existingScope.controller = controller;
                existingScope.currentSelf = this;
                if (init.signal) {
                    // we do our best to hook our logic to the existing signal
                    init.signal.addEventListener("abort", () => {
                        existingScope.cancel();
                    });
                }
                else {
                    init.signal = controller.signal;
                }
            }
            return [url, init, result];
        });
        // clean up any cancel info from the object after the request lifecycle is complete
        instance.on.dispose(function () {
            delete this[ScopeId];
            delete this.moments[MomentName];
        });
        return instance;
    };
}
/**
 * Allows you to define an action that is run when a request is cancelled
 *
 * @param action The action to run
 * @returns A timeline pipe used in the request lifecycle
 */
function CancelAction(action) {
    return (instance) => {
        instance.on.pre(async function (...args) {
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we don't have a scope this request is not using Cancelable so we do nothing
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(existingScope)) {
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(existingScope.actions)) {
                    existingScope.actions = [];
                }
                if (existingScope.actions.indexOf(action) < 0) {
                    existingScope.actions.push(action);
                }
            }
            return args;
        });
        return instance;
    };
}


/***/ }),

/***/ 61944:
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/debug-headers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DebugHeaders: () => (/* binding */ DebugHeaders)
/* harmony export */ });
/**
 *
 * @param otherHeaders Optional list of additional headers to log from the response
 * @returns A timeline pipe
 */
function DebugHeaders(otherHeaders = []) {
    return (instance) => {
        instance.on.parse.prepend(async function (url, response, result) {
            var _a;
            // here we add logging for the request id and timestamp to assist in reporting issues to Microsoft
            const searchHeaders = ["request-id", "sprequestguid", "date", ...otherHeaders];
            for (let i = 0; i < searchHeaders.length; i++) {
                this.log(`${searchHeaders[i]}: ${(_a = response.headers.get(searchHeaders[i])) !== null && _a !== void 0 ? _a : ""}`);
            }
            return [url, response, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 37164:
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/inject-headers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectHeaders: () => (/* binding */ InjectHeaders)
/* harmony export */ });
function InjectHeaders(headers, prepend = false) {
    return (instance) => {
        const f = async function (url, init, result) {
            init.headers = { ...init.headers, ...headers };
            return [url, init, result];
        };
        if (prepend) {
            instance.on.pre.prepend(f);
        }
        else {
            instance.on.pre(f);
        }
        return instance;
    };
}


/***/ }),

/***/ 70188:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/parsers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlobParse: () => (/* binding */ BlobParse),
/* harmony export */   BufferParse: () => (/* binding */ BufferParse),
/* harmony export */   DefaultParse: () => (/* binding */ DefaultParse),
/* harmony export */   HeaderParse: () => (/* binding */ HeaderParse),
/* harmony export */   HttpRequestError: () => (/* binding */ HttpRequestError),
/* harmony export */   JSONHeaderParse: () => (/* binding */ JSONHeaderParse),
/* harmony export */   JSONParse: () => (/* binding */ JSONParse),
/* harmony export */   TextParse: () => (/* binding */ TextParse),
/* harmony export */   errorCheck: () => (/* binding */ errorCheck),
/* harmony export */   parseBinderWithErrorCheck: () => (/* binding */ parseBinderWithErrorCheck),
/* harmony export */   parseODataJSON: () => (/* binding */ parseODataJSON)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);


function DefaultParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return parseODataJSON(json);
    });
}
function TextParse() {
    return parseBinderWithErrorCheck(r => r.text());
}
function BlobParse() {
    return parseBinderWithErrorCheck(r => r.blob());
}
function JSONParse() {
    return parseBinderWithErrorCheck(r => r.json());
}
function BufferParse() {
    return parseBinderWithErrorCheck(r => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(r.arrayBuffer) ? r.arrayBuffer() : r.buffer());
}
function HeaderParse() {
    return parseBinderWithErrorCheck(async (r) => r.headers);
}
function JSONHeaderParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return { data: { ...parseODataJSON(json) }, headers: response.headers };
    });
}
async function errorCheck(url, response, result) {
    if (!response.ok) {
        throw await HttpRequestError.init(response);
    }
    return [url, response, result];
}
function parseODataJSON(json) {
    let result = json;
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "d")) {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json.d, "results")) {
            result = json.d.results;
        }
        else {
            result = json.d;
        }
    }
    else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "value")) {
        result = json.value;
    }
    return result;
}
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
function parseBinderWithErrorCheck(impl) {
    return (instance) => {
        // we clear anything else registered for parse
        // add error check
        // add the impl function we are supplied
        instance.on.parse.replace(errorCheck);
        instance.on.parse(async (url, response, result) => {
            if (response.ok && typeof result === "undefined") {
                result = await impl(response);
            }
            return [url, response, result];
        });
        return instance;
    };
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static async init(r) {
        const t = await r.clone().text();
        return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r);
    }
}


/***/ }),

/***/ 71723:
/*!************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/resolvers.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RejectOnError: () => (/* binding */ RejectOnError),
/* harmony export */   ResolveOnData: () => (/* binding */ ResolveOnData)
/* harmony export */ });
function ResolveOnData() {
    return (instance) => {
        instance.on.data(function (data) {
            this.emit[this.InternalResolve](data);
        });
        return instance;
    };
}
function RejectOnError() {
    return (instance) => {
        instance.on.error(function (err) {
            this.emit[this.InternalReject](err);
        });
        return instance;
    };
}


/***/ }),

/***/ 97443:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/timeout.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timeout: () => (/* binding */ Timeout)
/* harmony export */ });
/**
 * Behavior that will cause a timeout in the request after the specified milliseconds
 *
 * @param timeout Number of milliseconds to set the timeout
 */
function Timeout(timeout) {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            const controller = new AbortController();
            init.signal = controller.signal;
            setTimeout(() => controller.abort(), timeout);
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 2464:
/*!**********************************************!*\
  !*** ./node_modules/@pnp/queryable/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BearerToken: () => (/* reexport safe */ _behaviors_bearer_token_js__WEBPACK_IMPORTED_MODULE_2__.BearerToken),
/* harmony export */   BlobParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.BlobParse),
/* harmony export */   BrowserFetch: () => (/* reexport safe */ _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_3__.BrowserFetch),
/* harmony export */   BrowserFetchWithRetry: () => (/* reexport safe */ _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_3__.BrowserFetchWithRetry),
/* harmony export */   BufferParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.BufferParse),
/* harmony export */   CacheAlways: () => (/* reexport safe */ _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_4__.CacheAlways),
/* harmony export */   CacheKey: () => (/* reexport safe */ _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_4__.CacheKey),
/* harmony export */   CacheNever: () => (/* reexport safe */ _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_4__.CacheNever),
/* harmony export */   Caching: () => (/* reexport safe */ _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_4__.Caching),
/* harmony export */   CachingPessimisticRefresh: () => (/* reexport safe */ _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_5__.CachingPessimisticRefresh),
/* harmony export */   CancelAction: () => (/* reexport safe */ _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_6__.CancelAction),
/* harmony export */   Cancelable: () => (/* reexport safe */ _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_6__.Cancelable),
/* harmony export */   DebugHeaders: () => (/* reexport safe */ _behaviors_debug_headers_js__WEBPACK_IMPORTED_MODULE_8__.DebugHeaders),
/* harmony export */   DefaultParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.DefaultParse),
/* harmony export */   HeaderParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.HeaderParse),
/* harmony export */   HttpRequestError: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.HttpRequestError),
/* harmony export */   InjectHeaders: () => (/* reexport safe */ _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_7__.InjectHeaders),
/* harmony export */   JSONHeaderParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.JSONHeaderParse),
/* harmony export */   JSONParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.JSONParse),
/* harmony export */   Queryable: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.Queryable),
/* harmony export */   RejectOnError: () => (/* reexport safe */ _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_11__.RejectOnError),
/* harmony export */   ResolveOnData: () => (/* reexport safe */ _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_11__.ResolveOnData),
/* harmony export */   TextParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.TextParse),
/* harmony export */   Timeout: () => (/* reexport safe */ _behaviors_timeout_js__WEBPACK_IMPORTED_MODULE_10__.Timeout),
/* harmony export */   addProp: () => (/* binding */ addProp),
/* harmony export */   asCancelableScope: () => (/* reexport safe */ _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_6__.asCancelableScope),
/* harmony export */   bindCachingCore: () => (/* reexport safe */ _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_4__.bindCachingCore),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   cancelableScope: () => (/* reexport safe */ _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_6__.cancelableScope),
/* harmony export */   del: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.del),
/* harmony export */   errorCheck: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.errorCheck),
/* harmony export */   get: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.get),
/* harmony export */   headers: () => (/* binding */ headers),
/* harmony export */   invokable: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.invokable),
/* harmony export */   op: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.op),
/* harmony export */   parseBinderWithErrorCheck: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.parseBinderWithErrorCheck),
/* harmony export */   parseODataJSON: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__.parseODataJSON),
/* harmony export */   patch: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.patch),
/* harmony export */   post: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.post),
/* harmony export */   put: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.put),
/* harmony export */   queryableFactory: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.queryableFactory)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryable.js */ 80500);
/* harmony import */ var _behaviors_bearer_token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behaviors/bearer-token.js */ 62191);
/* harmony import */ var _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behaviors/browser-fetch.js */ 4009);
/* harmony import */ var _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/caching.js */ 80181);
/* harmony import */ var _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/caching-pessimistic.js */ 24513);
/* harmony import */ var _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/cancelable.js */ 8784);
/* harmony import */ var _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/inject-headers.js */ 37164);
/* harmony import */ var _behaviors_debug_headers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/debug-headers.js */ 61944);
/* harmony import */ var _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/parsers.js */ 70188);
/* harmony import */ var _behaviors_timeout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/timeout.js */ 97443);
/* harmony import */ var _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/resolvers.js */ 71723);


/**
 * Behavior exports
 */










/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path || name);
        },
    });
}
/**
 * takes the supplied object of type U, JSON.stringify's it, and sets it as the value of a "body" property
 */
function body(o, previous) {
    return Object.assign({ body: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.jsS)(o) }, previous);
}
/**
 * Adds headers to an new/existing RequestInit
 *
 * @param o Headers to add
 * @param previous Any previous partial RequestInit
 * @returns RequestInit combining previous and specified headers
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({}, previous, { headers: { ...previous === null || previous === void 0 ? void 0 : previous.headers, ...o } });
}


/***/ }),

/***/ 80500:
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Queryable: () => (/* binding */ Queryable),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   invokable: () => (/* binding */ invokable),
/* harmony export */   op: () => (/* binding */ op),
/* harmony export */   patch: () => (/* binding */ patch),
/* harmony export */   post: () => (/* binding */ post),
/* harmony export */   put: () => (/* binding */ put),
/* harmony export */   queryableFactory: () => (/* binding */ queryableFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);


const DefaultMoments = {
    construct: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.lifecycle)(),
    pre: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    auth: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    send: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.request)(),
    parse: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    post: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    data: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.broadcast)(),
};
let Queryable = class Queryable extends _pnp_core__WEBPACK_IMPORTED_MODULE_0__.Timeline {
    constructor(init, path) {
        super(DefaultMoments);
        // these keys represent internal events for Queryable, users are not expected to
        // subscribe directly to these, rather they enable functionality within Queryable
        // they are Symbols such that there are NOT cloned between queryables as we only grab string keys (by design)
        this.InternalResolve = Symbol.for("Queryable_Resolve");
        this.InternalReject = Symbol.for("Queryable_Reject");
        this.InternalPromise = Symbol.for("Queryable_Promise");
        // default to use the included URL search params to parse the query string
        this._query = new URLSearchParams();
        // add an internal moment with specific implementation for promise creation
        this.moments[this.InternalPromise] = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.reduce)();
        let parent;
        if (typeof init === "string") {
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(init, path);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(init)) {
            if (init.length !== 2) {
                throw Error("When using the tuple param exactly two arguments are expected.");
            }
            if (typeof init[1] !== "string") {
                throw Error("Expected second tuple param to be a string.");
            }
            parent = init[0];
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(init[1], path);
        }
        else {
            parent = init;
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(parent._url, path);
        }
        if (typeof parent !== "undefined") {
            this.observers = parent.observers;
            this._inheritingObservers = true;
        }
    }
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart) {
        this._url += pathPart;
        return this;
    }
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl() {
        let url = this.toUrl();
        const query = this.query.toString();
        if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query() {
        return this._query;
    }
    /**
     * Gets the current url
     *
     */
    toUrl() {
        return this._url;
    }
    execute(userInit) {
        // if there are NO observers registered this is likely either a bug in the library or a user error, direct to docs
        if (Reflect.ownKeys(this.observers).length < 1) {
            throw Error("No observers registered for this request. (https://pnp.github.io/pnpjs/queryable/queryable#no-observers-registered-for-this-request)");
        }
        // schedule the execution after we return the promise below in the next event loop
        setTimeout(async () => {
            const requestId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
            let requestUrl;
            const log = (msg, level) => {
                // this allows us to easily and consistently format our messages
                this.log(`[${requestId}] ${msg}`, level);
            };
            try {
                log("Beginning request", 0);
                // include the request id in the headers to assist with debugging against logs
                const initSeed = {
                    ...userInit,
                    headers: { ...userInit.headers, "X-PnPjs-RequestId": requestId },
                };
                // eslint-disable-next-line prefer-const
                let [url, init, result] = await this.emit.pre(this.toRequestUrl(), initSeed, undefined);
                log(`Url: ${url}`, 1);
                if (typeof result !== "undefined") {
                    log("Result returned from pre, Emitting data");
                    this.emit.data(result);
                    log("Emitted data");
                    return;
                }
                log("Emitting auth");
                [requestUrl, init] = await this.emit.auth(new URL(url), init);
                log("Emitted auth");
                // we always resepect user supplied init over observer modified init
                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                log("Emitting send");
                let response = await this.emit.send(requestUrl, init);
                log("Emitted send");
                log("Emitting parse");
                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                log("Emitted parse");
                log("Emitting post");
                [requestUrl, result] = await this.emit.post(requestUrl, result);
                log("Emitted post");
                log("Emitting data");
                this.emit.data(result);
                log("Emitted data");
            }
            catch (e) {
                log(`Emitting error: "${e.message || e}"`, 3);
                // anything that throws we emit and continue
                this.error(e);
                log("Emitted error", 3);
            }
            finally {
                log("Finished request", 0);
            }
        }, 0);
        // this allows us to internally hook the promise creation and modify it. This was introduced to allow for
        // cancelable to work as envisioned, but may have other users. Meant for internal use in the library accessed via behaviors.
        return this.emit[this.InternalPromise](new Promise((resolve, reject) => {
            // we overwrite any pre-existing internal events as a
            // given queryable only processes a single request at a time
            this.on[this.InternalResolve].replace(resolve);
            this.on[this.InternalReject].replace(reject);
        }))[0];
    }
};
Queryable = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    invokable()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
], Queryable);

function ensureInit(method, init = { headers: {} }) {
    return { method, ...init, headers: { ...init.headers } };
}
function get(init) {
    return this.start(ensureInit("GET", init));
}
function post(init) {
    return this.start(ensureInit("POST", init));
}
function put(init) {
    return this.start(ensureInit("PUT", init));
}
function patch(init) {
    return this.start(ensureInit("PATCH", init));
}
function del(init) {
    return this.start(ensureInit("DELETE", init));
}
function op(q, operation, init) {
    return Reflect.apply(operation, q, [init]);
}
function queryableFactory(constructor) {
    return (init, path) => {
        // construct the concrete instance
        const instance = new constructor(init, path);
        // we emit the construct event from the factory because we need all of the decorators and constructors
        // to have fully finished before we emit, which is now true. We type the instance to any to get around
        // the protected nature of emit
        instance.emit.construct(init, path);
        return instance;
    };
}
/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
function invokable(invokeableAction) {
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                const invokableInstance = Object.assign(function (init) {
                    if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(invokeableAction)) {
                        invokeableAction = function (init) {
                            return op(this, get, init);
                        };
                    }
                    return Reflect.apply(invokeableAction, invokableInstance, [init]);
                }, Reflect.construct(clz, args, newTarget));
                Reflect.setPrototypeOf(invokableInstance, newTarget.prototype);
                return invokableInstance;
            },
        });
    };
}


/***/ }),

/***/ 9926:
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/attachments/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attachment: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Attachment),
/* harmony export */   Attachments: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Attachments)
/* harmony export */ });
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ 92255);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 83067);




/***/ }),

/***/ 92255:
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/attachments/item.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ 93305);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 83067);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item, "attachmentFiles", _types_js__WEBPACK_IMPORTED_MODULE_2__.Attachments);


/***/ }),

/***/ 83067:
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/attachments/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attachment: () => (/* binding */ Attachment),
/* harmony export */   Attachments: () => (/* binding */ Attachments),
/* harmony export */   _Attachment: () => (/* binding */ _Attachment),
/* harmony export */   _Attachments: () => (/* binding */ _Attachments)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators.js */ 43445);
/* harmony import */ var _files_readable_file_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/readable-file.js */ 37710);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 6181);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 96290);






let _Attachments = class _Attachments extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__._SPCollection {
    /**
    * Gets a Attachment File by filename
    *
    * @param name The name of the file, including extension.
    */
    getByName(name) {
        const f = Attachment(this);
        f.concat(`('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_2__.encodePath)(name)}')`);
        return f;
    }
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    async add(name, content) {
        const response = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spPost)(Attachments(this, `add(FileName='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_2__.encodePath)(name)}')`), { body: content });
        return {
            data: response,
            file: this.getByName(name),
        };
    }
};
_Attachments = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_5__.defaultPath)("AttachmentFiles")
], _Attachments);

const Attachments = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spInvokableFactory)(_Attachments);
class _Attachment extends _files_readable_file_js__WEBPACK_IMPORTED_MODULE_1__.ReadableFile {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.deleteableWithETag)();
    }
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    async setContent(body) {
        await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spPost)(Attachment(this, "$value"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.headers)({ "X-HTTP-Method": "PUT" }, { body }));
        return this;
    }
    /**
     * Delete this attachment file and send it to recycle bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    recycle(eTag = "*") {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spPost)(Attachment(this, "recycleObject"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.headers)({
            "IF-Match": eTag,
            "X-HTTP-Method": "DELETE",
        }));
    }
}
const Attachment = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spInvokableFactory)(_Attachment);


/***/ }),

/***/ 82815:
/*!******************************************!*\
  !*** ./node_modules/@pnp/sp/batching.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchNever: () => (/* binding */ BatchNever),
/* harmony export */   createBatch: () => (/* binding */ createBatch)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spqueryable.js */ 96290);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fi.js */ 17066);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webs/types.js */ 4970);





_fi_js__WEBPACK_IMPORTED_MODULE_3__.SPFI.prototype.batched = function (props) {
    const batched = (0,_fi_js__WEBPACK_IMPORTED_MODULE_3__.spfi)(this);
    const [behavior, execute] = createBatch(batched._root, props);
    batched.using(behavior);
    return [batched, execute];
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_4__._Web.prototype.batched = function (props) {
    const batched = (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_4__.Web)(this);
    const [behavior, execute] = createBatch(batched, props);
    batched.using(behavior);
    return [batched, execute];
};
/**
 * Tracks on a batched instance that registration is complete (the child request has gotten to the send moment and the request is included in the batch)
 */
const RegistrationCompleteSym = Symbol.for("batch_registration");
/**
 * Tracks on a batched instance that the child request timeline lifecycle is complete (called in child.dispose)
 */
const RequestCompleteSym = Symbol.for("batch_request");
/**
 * Special batch parsing behavior used to convert the batch response text into a set of Response objects for each request
 * @returns A parser behavior
 */
function BatchParse() {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.parseBinderWithErrorCheck)(async (response) => {
        const text = await response.text();
        return parseResponse(text);
    });
}
/**
 * Internal class used to execute the batch request through the timeline lifecycle
 */
class BatchQueryable extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPQueryable {
    constructor(base, requestBaseUrl = base.toUrl().replace(/_api[\\|/].*$/i, "")) {
        super(requestBaseUrl, "_api/$batch");
        this.requestBaseUrl = requestBaseUrl;
        // this will copy over the current observables from the base associated with this batch
        // this will replace any other parsing present
        this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(base, "replace"), BatchParse());
        this.on.dispose(() => {
            // there is a code path where you may invoke a batch, say on items.add, whose return
            // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
            // is immediately usable to make additional queries. Without this step when that IItem instance is
            // created using "this.getById" within IITems.add all of the current observers of "this" are
            // linked to the IItem instance created (expected), BUT they will be the set of observers setup
            // to handle the batch, meaning invoking `item` will result in a half batched call that
            // doesn't really work. To deliver the expected functionality we "reset" the
            // observers using the original instance, mimicing the behavior had
            // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
            // that we maintain the references to the InternalResolve and InternalReject events through
            // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
            // which ignores symbol properties.
            base.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(this, "replace", (k) => /(auth|send|pre|init)/i.test(k)));
        });
    }
}
/**
 * Creates a batched version of the supplied base, meaning that all chained fluent operations from the new base are part of the batch
 *
 * @param base The base from which to initialize the batch
 * @param props Any properties used to initialize the batch functionality
 * @returns A tuple of [behavior used to assign objects to the batch, the execute function used to resolve the batch requests]
 */
function createBatch(base, props) {
    const registrationPromises = [];
    const completePromises = [];
    const requests = [];
    const batchQuery = new BatchQueryable(base);
    // this id will be reused across multiple batches if the number of requests added to the batch
    // exceeds the configured maxRequests value
    const batchId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
    // this query is used to copy back the behaviors after the batch executes
    // it should not manipulated or have behaviors added.
    const refQuery = new BatchQueryable(base);
    const { headersCopyPattern, maxRequests } = {
        headersCopyPattern: /Accept|Content-Type|IF-Match/i,
        maxRequests: 20,
        ...props,
    };
    const execute = async () => {
        await Promise.all(registrationPromises);
        if (requests.length < 1) {
            // even if we have no requests we need to await the complete promises to ensure
            // that execute only resolves AFTER every child request disposes #2457
            // this likely means caching is being used, we returned values for all child requests from the cache
            return Promise.all(completePromises).then(() => void (0));
        }
        // create a working copy of our requests
        const requestsWorkingCopy = requests.slice();
        while (requestsWorkingCopy.length > 0) {
            const requestsChunk = requestsWorkingCopy.splice(0, maxRequests);
            const batchBody = [];
            let currentChangeSetId = "";
            for (let i = 0; i < requestsChunk.length; i++) {
                const [, url, init] = requestsChunk[i];
                if (init.method === "GET") {
                    if (currentChangeSetId.length > 0) {
                        // end an existing change set
                        batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                        currentChangeSetId = "";
                    }
                    batchBody.push(`--batch_${batchId}\n`);
                }
                else {
                    if (currentChangeSetId.length < 1) {
                        // start new change set
                        currentChangeSetId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
                        batchBody.push(`--batch_${batchId}\n`);
                        batchBody.push(`Content-Type: multipart/mixed; boundary="changeset_${currentChangeSetId}"\n\n`);
                    }
                    batchBody.push(`--changeset_${currentChangeSetId}\n`);
                }
                // common batch part prefix
                batchBody.push("Content-Type: application/http\n");
                batchBody.push("Content-Transfer-Encoding: binary\n\n");
                // these are the per-request headers
                const headers = new Headers(init.headers);
                // this is the url of the individual request within the batch
                const reqUrl = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url) ? url : (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(batchQuery.requestBaseUrl, url);
                if (init.method !== "GET") {
                    let method = init.method;
                    if (headers.has("X-HTTP-Method")) {
                        method = headers.get("X-HTTP-Method");
                        headers.delete("X-HTTP-Method");
                    }
                    batchBody.push(`${method} ${reqUrl} HTTP/1.1\n`);
                }
                else {
                    batchBody.push(`${init.method} ${reqUrl} HTTP/1.1\n`);
                }
                // lastly we apply any default headers we need that may not exist
                if (!headers.has("Accept")) {
                    headers.append("Accept", "application/json");
                }
                if (!headers.has("Content-Type")) {
                    headers.append("Content-Type", "application/json;charset=utf-8");
                }
                // write headers into batch body
                headers.forEach((value, name) => {
                    if (headersCopyPattern.test(name)) {
                        batchBody.push(`${name}: ${value}\n`);
                    }
                });
                batchBody.push("\n");
                if (init.body) {
                    batchBody.push(`${init.body}\n\n`);
                }
            }
            if (currentChangeSetId.length > 0) {
                // Close the changeset
                batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                currentChangeSetId = "";
            }
            batchBody.push(`--batch_${batchId}--\n`);
            const responses = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(batchQuery, {
                body: batchBody.join(""),
                headers: {
                    "Content-Type": `multipart/mixed; boundary=batch_${batchId}`,
                },
            });
            if (responses.length !== requestsChunk.length) {
                throw Error("Could not properly parse responses to match requests in batch.");
            }
            for (let index = 0; index < responses.length; index++) {
                // resolve the child request's send promise with the parsed response
                requestsChunk[index][3](responses[index]);
            }
        } // end of while (requestsWorkingCopy.length > 0)
        await Promise.all(completePromises).then(() => void (0));
    };
    const register = (instance) => {
        instance.on.init(function () {
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RegistrationCompleteSym])) {
                throw Error("This instance is already part of a batch. Please review the docs at https://pnp.github.io/pnpjs/concepts/batching#reuse.");
            }
            // we need to ensure we wait to start execute until all our batch children hit the .send method to be fully registered
            registrationPromises.push(new Promise((resolve) => {
                this[RegistrationCompleteSym] = resolve;
            }));
            return this;
        });
        instance.on.pre(async function (url, init, result) {
            // Do not add to timeline if using BatchNever behavior
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-PnP-BatchNever")) {
                // clean up the init operations from the timeline
                // not strictly necessary as none of the logic that uses this should be in the request, but good to keep things tidy
                if (typeof (this[RequestCompleteSym]) === "function") {
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                }
                this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(refQuery, "replace", (k) => /(init|pre)/i.test(k)));
                return [url, init, result];
            }
            // the entire request will be auth'd - we don't need to run this for each batch request
            this.on.auth.clear();
            // we replace the send function with our batching logic
            this.on.send.replace(async function (url, init) {
                // this is the promise that Queryable will see returned from .emit.send
                const promise = new Promise((resolve) => {
                    // add the request information into the batch
                    requests.push([this, url.toString(), init, resolve]);
                });
                this.log(`[batch:${batchId}] (${(new Date()).getTime()}) Adding request ${init.method} ${url.toString()} to batch.`, 0);
                // we need to ensure we wait to resolve execute until all our batch children have fully completed their request timelines
                completePromises.push(new Promise((resolve) => {
                    this[RequestCompleteSym] = resolve;
                }));
                // indicate that registration of this request is complete
                this[RegistrationCompleteSym]();
                return promise;
            });
            this.on.dispose(function () {
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RegistrationCompleteSym])) {
                    // if this request is in a batch and caching is in play we need to resolve the registration promises to unblock processing of the batch
                    // because the request will never reach the "send" moment as the result is returned from "pre"
                    this[RegistrationCompleteSym]();
                    // remove the symbol props we added for good hygene
                    delete this[RegistrationCompleteSym];
                }
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RequestCompleteSym])) {
                    // let things know we are done with this request
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                    // there is a code path where you may invoke a batch, say on items.add, whose return
                    // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
                    // is immediately usable to make additional queries. Without this step when that IItem instance is
                    // created using "this.getById" within IITems.add all of the current observers of "this" are
                    // linked to the IItem instance created (expected), BUT they will be the set of observers setup
                    // to handle the batch, meaning invoking `item` will result in a half batched call that
                    // doesn't really work. To deliver the expected functionality we "reset" the
                    // observers using the original instance, mimicing the behavior had
                    // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
                    // that we maintain the references to the InternalResolve and InternalReject events through
                    // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
                    // which ignores symbol properties.
                    this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(refQuery, "replace", (k) => /(auth|pre|send|init|dispose)/i.test(k)));
                }
            });
            return [url, init, result];
        });
        return instance;
    };
    return [register, execute];
}
/**
 * Behavior that blocks batching for the request regardless of "method"
 *
 * This is used for requests to bypass batching methods. Example - Request Digest where we need to get a request-digest inside of a batch.
 * @returns TimelinePipe
 */
function BatchNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-BatchNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Parses the text body returned by the server from a batch request
 *
 * @param body String body from the server response
 * @returns Parsed response objects
 */
function parseResponse(body) {
    const responses = [];
    const header = "--batchresponse_";
    // Ex. "HTTP/1.1 500 Internal Server Error"
    const statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
    const lines = body.split("\n");
    let state = "batch";
    let status;
    let statusText;
    let headers = {};
    const bodyReader = [];
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i];
        switch (state) {
            case "batch":
                if (line.substring(0, header.length) === header) {
                    state = "batchHeaders";
                }
                else {
                    if (line.trim() !== "") {
                        throw Error(`Invalid response, line ${i}`);
                    }
                }
                break;
            case "batchHeaders":
                if (line.trim() === "") {
                    state = "status";
                }
                break;
            case "status": {
                const parts = statusRegExp.exec(line);
                if (parts.length !== 3) {
                    throw Error(`Invalid status, line ${i}`);
                }
                status = parseInt(parts[1], 10);
                statusText = parts[2];
                state = "statusHeaders";
                break;
            }
            case "statusHeaders":
                if (line.trim() === "") {
                    state = "body";
                }
                else {
                    const headerParts = line.split(":");
                    if ((headerParts === null || headerParts === void 0 ? void 0 : headerParts.length) === 2) {
                        headers[headerParts[0].trim()] = headerParts[1].trim();
                    }
                }
                break;
            case "body":
                // reset the body reader
                bodyReader.length = 0;
                // this allows us to capture batch bodies that are returned as multi-line (renderListDataAsStream, #2454)
                while (line.substring(0, header.length) !== header) {
                    bodyReader.push(line);
                    line = lines[++i];
                }
                // because we have read the closing --batchresponse_ line, we need to move the line pointer back one
                // so that the logic works as expected either to get the next result or end processing
                i--;
                responses.push(new Response(status === 204 ? null : bodyReader.join(""), { status, statusText, headers }));
                state = "batch";
                headers = {};
                break;
        }
    }
    if (state !== "status") {
        throw Error("Unexpected end of input");
    }
    return responses;
}


/***/ }),

/***/ 59801:
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/defaults.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHeaders: () => (/* binding */ DefaultHeaders),
/* harmony export */   DefaultInit: () => (/* binding */ DefaultInit)
/* harmony export */ });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemetry.js */ 46936);


function DefaultInit() {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            init.cache = "no-cache";
            init.credentials = "same-origin";
            return [url, init, result];
        });
        instance.using((0,_telemetry_js__WEBPACK_IMPORTED_MODULE_1__.Telemetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.RejectOnError)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.ResolveOnData)());
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.InjectHeaders)({
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8",
        }));
        return instance;
    };
}


/***/ }),

/***/ 25359:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/request-digest.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestDigest: () => (/* binding */ RequestDigest)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 48939);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../batching.js */ 82815);





function clearExpired(digest) {
    const now = new Date();
    return !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest) || (now > digest.expiration) ? null : digest;
}
// allows for the caching of digests across all calls which each have their own IDigestInfo wrapper.
const digests = new Map();
function RequestDigest(hook) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // add the request to the auth moment of the timeline
            this.on.auth(async (url, init) => {
                // eslint-disable-next-line max-len
                if (/get/i.test(init.method) || (init.headers && ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-RequestDigest") || (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "Authorization") || (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-PnPjs-NoDigest")))) {
                    return [url, init];
                }
                const urlAsString = url.toString();
                const webUrl = (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(urlAsString);
                // do we have one in the cache that is still valid
                // from #2186 we need to always ensure the digest we get isn't expired
                let digest = clearExpired(digests.get(webUrl));
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest) && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(hook)) {
                    digest = clearExpired(hook(urlAsString, init));
                }
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest)) {
                    digest = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spPost)((0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.SPQueryable)([this, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(webUrl, "_api/contextinfo")]).using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.JSONParse)(), (0,_batching_js__WEBPACK_IMPORTED_MODULE_4__.BatchNever)()), {
                        headers: {
                            "Accept": "application/json",
                            "X-PnPjs-NoDigest": "1",
                        },
                    }).then(p => ({
                        expiration: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "second", p.FormDigestTimeoutSeconds),
                        value: p.FormDigestValue,
                    }));
                }
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest)) {
                    // if we got a digest, set it in the headers
                    init.headers = {
                        "X-RequestDigest": digest.value,
                        ...init.headers,
                    };
                    // and cache it for future requests
                    digests.set(webUrl, digest);
                }
                return [url, init];
            });
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 6438:
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spbrowser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPBrowser: () => (/* binding */ SPBrowser)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ 59801);
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ 25359);




function SPBrowser(props) {
    if ((props === null || props === void 0 ? void 0 : props.baseUrl) && !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(props.baseUrl)) {
        throw Error("SPBrowser props.baseUrl must be absolute when supplied.");
    }
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultInit)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.DefaultParse)(), (0,_request_digest_js__WEBPACK_IMPORTED_MODULE_3__.RequestDigest)());
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(props === null || props === void 0 ? void 0 : props.baseUrl)) {
            // we want to fix up the url first
            instance.on.pre.prepend(async (url, init, result) => {
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url)) {
                    url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(props.baseUrl, url);
                }
                return [url, init, result];
            });
        }
        return instance;
    };
}


/***/ }),

/***/ 89754:
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spfx.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFx: () => (/* binding */ SPFx),
/* harmony export */   SPFxToken: () => (/* binding */ SPFxToken)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ 59801);
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ 25359);




class SPFxTokenNullOrUndefinedError extends Error {
    constructor(behaviorName) {
        super(`SPFx Context supplied to ${behaviorName} Behavior is null or undefined.`);
    }
    static check(behaviorName, context) {
        if (typeof context === "undefined" || context === null) {
            throw new SPFxTokenNullOrUndefinedError(behaviorName);
        }
    }
}
function SPFxToken(context) {
    SPFxTokenNullOrUndefinedError.check("SPFxToken", context);
    return (instance) => {
        instance.on.auth.replace(async function (url, init) {
            const provider = await context.aadTokenProviderFactory.getTokenProvider();
            const token = await provider.getToken(`${url.protocol}//${url.hostname}`);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            init.headers["Authorization"] = `Bearer ${token}`;
            return [url, init];
        });
        return instance;
    };
}
function SPFx(context) {
    SPFxTokenNullOrUndefinedError.check("SPFx", context);
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultInit)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.DefaultParse)(), 
        // remove SPFx Token in default due to issues #2570, #2571
        // SPFxToken(context),
        (0,_request_digest_js__WEBPACK_IMPORTED_MODULE_3__.RequestDigest)((url) => {
            var _a, _b, _c;
            const sameWeb = (new RegExp(`^${(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(context.pageContext.web.absoluteUrl, "/_api")}`, "i")).test(url);
            if (sameWeb && ((_b = (_a = context === null || context === void 0 ? void 0 : context.pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.formDigestValue)) {
                const creationDateFromDigest = new Date(context.pageContext.legacyPageContext.formDigestValue.split(",")[1]);
                // account for page lifetime in timeout #2304 & others
                // account for tab sleep #2550
                return {
                    value: context.pageContext.legacyPageContext.formDigestValue,
                    expiration: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(creationDateFromDigest, "second", ((_c = context.pageContext.legacyPageContext) === null || _c === void 0 ? void 0 : _c.formDigestTimeoutSeconds) - 15 || 1585),
                };
            }
        }));
        // we want to fix up the url first
        instance.on.pre.prepend(async (url, init, result) => {
            if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url)) {
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(context.pageContext.web.absoluteUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 46936:
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/telemetry.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Telemetry: () => (/* binding */ Telemetry)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);

function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            let clientTag = "PnPCoreJS:4.20.0:";
            // make our best guess based on url to the method called
            const { pathname } = new URL(url);
            // remove anything before the _api as that is potentially PII and we don't care, just want to get the called path to the REST API
            // and we want to modify any (*) calls at the end such as items(3) and items(344) so we just track "items()"
            clientTag = pathname.split("/")
                .filter((v) => !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(v) && ["_api", "v2.1", "v2.0"].indexOf(v) < 0)
                .map((value, index, arr) => index === arr.length - 1 ? value.replace(/\(.*?$/i, "()") : value[0])
                .join(".");
            if (clientTag.length > 32) {
                clientTag = clientTag.substring(0, 32);
            }
            this.log(`Request Tag: ${clientTag}`, 0);
            init.headers = { ...init.headers, ["X-ClientService-ClientTag"]: clientTag };
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 77374:
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/context-info/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 48939);



_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPQueryable.prototype.getContextInfo = async function (path = this.parentUrl) {
    const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)((0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPQueryable)([this, (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(path)], "_api/contextinfo"));
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(data, "GetContextWebInformation")) {
        const info = data.GetContextWebInformation;
        info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
        return info;
    }
    else {
        return data;
    }
};


/***/ }),

/***/ 43445:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPath: () => (/* binding */ defaultPath)
/* harmony export */ });
/**
 * Decorator used to specify the default path for SPQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}


/***/ }),

/***/ 17066:
/*!************************************!*\
  !*** ./node_modules/@pnp/sp/fi.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFI: () => (/* binding */ SPFI),
/* harmony export */   spfi: () => (/* binding */ spfi)
/* harmony export */ });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ 96290);

class SPFI {
    /**
     * Creates a new instance of the SPFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function spfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new SPFI(root);
}


/***/ }),

/***/ 94203:
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/files/folder.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _folders_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../folders/types.js */ 12820);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 3082);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_folders_types_js__WEBPACK_IMPORTED_MODULE_1__._Folder, "files", _types_js__WEBPACK_IMPORTED_MODULE_2__.Files);


/***/ }),

/***/ 14603:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/files/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinType: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.CheckinType),
/* harmony export */   File: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.File),
/* harmony export */   Files: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Files),
/* harmony export */   MoveOperations: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.MoveOperations),
/* harmony export */   TemplateFileType: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.TemplateFileType),
/* harmony export */   Version: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Version),
/* harmony export */   Versions: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Versions),
/* harmony export */   fileFromAbsolutePath: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.fileFromAbsolutePath),
/* harmony export */   fileFromPath: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.fileFromPath),
/* harmony export */   fileFromServerRelativePath: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.fileFromServerRelativePath)
/* harmony export */ });
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.js */ 94203);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ 13484);
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ 56305);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 3082);






/***/ }),

/***/ 13484:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/files/item.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ 93305);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 3082);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item, "file", _types_js__WEBPACK_IMPORTED_MODULE_2__.File, "file");


/***/ }),

/***/ 37710:
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/files/readable-file.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadableFile: () => (/* binding */ ReadableFile),
/* harmony export */   StreamParse: () => (/* binding */ StreamParse)
/* harmony export */ });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ 96290);


function StreamParse() {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.parseBinderWithErrorCheck)(async (r) => { var _a; return ({ body: r.body, knownLength: parseInt(((_a = r === null || r === void 0 ? void 0 : r.headers) === null || _a === void 0 ? void 0 : _a.get("content-length")) || "-1", 10) }); });
}
class ReadableFile extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPInstance {
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    getText() {
        return this.getParsed((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.TextParse)());
    }
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    getBlob() {
        return this.getParsed((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.BlobParse)());
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    getBuffer() {
        return this.getParsed((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.BufferParse)());
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    getJSON() {
        return this.getParsed((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.JSONParse)());
    }
    /**
     * Gets the content of a file as a ReadableStream
     *
     */
    getStream() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPQueryable)(this, "$value").using(StreamParse(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.CacheNever)())((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.headers)({ "binaryStringResponseBody": "true" }));
    }
    getParsed(parser) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPQueryable)(this, "$value").using(parser, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.CacheNever)())();
    }
}


/***/ }),

/***/ 3082:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/files/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinType: () => (/* binding */ CheckinType),
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   Files: () => (/* binding */ Files),
/* harmony export */   MoveOperations: () => (/* binding */ MoveOperations),
/* harmony export */   TemplateFileType: () => (/* binding */ TemplateFileType),
/* harmony export */   Version: () => (/* binding */ Version),
/* harmony export */   Versions: () => (/* binding */ Versions),
/* harmony export */   _File: () => (/* binding */ _File),
/* harmony export */   _Files: () => (/* binding */ _Files),
/* harmony export */   _Version: () => (/* binding */ _Version),
/* harmony export */   _Versions: () => (/* binding */ _Versions),
/* harmony export */   fileFromAbsolutePath: () => (/* binding */ fileFromAbsolutePath),
/* harmony export */   fileFromPath: () => (/* binding */ fileFromPath),
/* harmony export */   fileFromServerRelativePath: () => (/* binding */ fileFromServerRelativePath)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _items_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/index.js */ 95324);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 64177);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../decorators.js */ 43445);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 48939);
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/to-resource-path.js */ 96897);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 6181);
/* harmony import */ var _readable_file_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readable-file.js */ 37710);
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../batching.js */ 82815);
/* harmony import */ var _context_info_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context-info/index.js */ 77374);













/**
 * Describes a collection of File objects
 *
 */
let _Files = class _Files extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    getByUrl(name) {
        if (/%#/.test(name)) {
            throw Error("For file names containing % or # please use web.getFileByServerRelativePath");
        }
        return File(this).concat(`('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(name)}')`);
    }
    /**
     * Adds a file using the pound percent safe methods
     *
     * @param url Encoded url of the file
     * @param content The file content
     * @param parameters Additional parameters to control method behavior
     */
    async addUsingPath(url, content, parameters = { Overwrite: false }) {
        const path = [`AddUsingPath(decodedurl='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(url)}'`];
        if (parameters) {
            if (parameters.Overwrite) {
                path.push(",Overwrite=true");
            }
            if (parameters.EnsureUniqueFileName) {
                path.push(`,EnsureUniqueFileName=${parameters.EnsureUniqueFileName}`);
            }
            if (parameters.AutoCheckoutOnInvalidData) {
                path.push(",AutoCheckoutOnInvalidData=true");
            }
            if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.stringIsNullOrEmpty)(parameters.XorHash)) {
                path.push(`,XorHash=${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(parameters.XorHash)}`);
            }
        }
        path.push(")");
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Files(this, path.join("")), { body: content });
    }
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The Blob file content to add
     * @param props Set of optional values that control the behavior of the underlying addUsingPath and chunkedUpload feature
     * @returns The new File and the raw response.
     */
    async addChunked(url, content, props) {
        // add an empty stub
        const response = await this.addUsingPath(url, null, props);
        const file = fileFromServerRelativePath(this, response.ServerRelativeUrl);
        file.using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.CancelAction)(() => {
            return File(file).delete();
        }));
        return file.setContentChunked(content, props);
    }
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    async addTemplateFile(fileUrl, templateFileType) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Files(this, `addTemplateFile(urloffile='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(fileUrl)}',templatefiletype=${templateFileType})`));
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.cancelableScope
], _Files.prototype, "addUsingPath", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.cancelableScope
], _Files.prototype, "addChunked", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.cancelableScope
], _Files.prototype, "addTemplateFile", null);
_Files = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_11__.defaultPath)("files")
], _Files);

const Files = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Files);
/**
 * Describes a single File instance
 *
 */
class _File extends _readable_file_js__WEBPACK_IMPORTED_MODULE_7__.ReadableFile {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteableWithETag)();
    }
    /**
     * Gets a value that specifies the list item field values for the list item corresponding to the file.
     *
     */
    get listItemAllFields() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPInstance)(this, "listItemAllFields");
    }
    /**
     * Gets a collection of versions
     *
     */
    get versions() {
        return Versions(this);
    }
    /**
     * Gets the current locked by user
     *
     */
    async getLockedByUser() {
        const u = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spGet)(File(this, "lockedByUser"));
        if (u["odata.null"] === true) {
            return null;
        }
        else {
            return u;
        }
    }
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    approve(comment = "") {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, `approve(comment='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(comment)}')`));
    }
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    cancelUpload(uploadId) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, `cancelUpload(uploadId=guid'${uploadId}')`));
    }
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    checkin(comment = "", checkinType = CheckinType.Major) {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, `checkin(comment=@a2,checkintype=@a3)?@a2=${encodeURIComponent(`'${comment.replace(/'/g, "''")}'`)}&@a3=${checkinType}`));
    }
    /**
     * Checks out the file from a document library.
     */
    checkout() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, "checkout"));
    }
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    copyTo(url, shouldOverWrite = true) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, `copyTo(strnewurl='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(url)}',boverwrite=${shouldOverWrite})`));
    }
    async copyByPath(destUrl, ...rest) {
        let options = {
            ShouldBypassSharedLocks: true,
            ResetAuthorAndCreatedOnCopy: true,
            KeepBoth: false,
        };
        if (rest.length === 2) {
            if (typeof rest[1] === "boolean") {
                options.KeepBoth = rest[1];
            }
            else if (typeof rest[1] === "object") {
                options = { ...options, ...rest[1] };
            }
        }
        return this.moveCopyImpl(destUrl, options, rest[0], "CopyFileByPath");
    }
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    deny(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, `deny(comment='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(comment)}')`));
    }
    async moveByPath(destUrl, ...rest) {
        let options = {
            KeepBoth: false,
            ShouldBypassSharedLocks: true,
            RetainEditorAndModifiedOnMove: false,
        };
        if (rest.length === 2) {
            if (typeof rest[1] === "boolean") {
                options.KeepBoth = rest[1];
            }
            else if (typeof rest[1] === "object") {
                options = { ...options, ...rest[1] };
            }
        }
        return this.moveCopyImpl(destUrl, options, rest[0], "MoveFileByPath");
    }
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    publish(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, `publish(comment='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(comment)}')`));
    }
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, "recycle"));
    }
    /**
     * Deletes the file object with options.
     *
     * @param parameters Specifies the options to use when deleting a file.
     */
    async deleteWithParams(parameters) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, "DeleteWithParameters"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({ parameters }));
    }
    /**
     * Reverts an existing checkout for the file.
     *
     */
    undoCheckout() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, "undoCheckout"));
    }
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    unpublish(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, `unpublish(comment='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(comment)}')`));
    }
    /**
     * Checks to see if the file represented by this object exists
     *
     */
    async exists() {
        try {
            const r = await File(this).select("Exists")();
            return r.Exists;
        }
        catch (e) {
            // this treats any error here as the file not existing, which
            // might not be true, but is good enough.
            return false;
        }
    }
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    async setContent(content) {
        await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(this, "$value"), {
            body: content,
            headers: {
                "X-HTTP-Method": "PUT",
            },
        });
        return File(this);
    }
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    async getItem(...selects) {
        const q = this.listItemAllFields;
        const d = await q.select(...selects)();
        return Object.assign((0,_items_index_js__WEBPACK_IMPORTED_MODULE_3__.Item)([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__.odataUrlFrom)(d)]), d);
    }
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    async setContentChunked(file, props) {
        const { progress, chunkSize = 10485760 } = applyChunckedOperationDefaults(props);
        const uploadId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.getGUID)();
        let first = true;
        let chunk;
        let offset = 0;
        const fileRef = File(this).using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.CancelAction)(() => {
            return File(fileRef).cancelUpload(uploadId);
        }));
        const contentStream = sourceToReadableStream(file);
        const reader = contentStream.getReader();
        let buffer = new Uint8Array();
        while ((chunk = await reader.read())) {
            if (chunk.value) {
                const newBuffer = new Uint8Array(buffer.length + chunk.value.length);
                newBuffer.set(buffer);
                newBuffer.set(chunk.value, buffer.length);
                buffer = newBuffer;
            }
            while (buffer.length >= chunkSize) {
                const chunkToUpload = buffer.slice(0, chunkSize);
                buffer = buffer.slice(chunkSize);
                if (first) {
                    progress({ offset, stage: "starting", uploadId });
                    offset = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(fileRef, `startUpload(uploadId=guid'${uploadId}')`), { body: chunkToUpload });
                    first = false;
                }
                else {
                    progress({ offset, stage: "continue", uploadId });
                    offset = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(fileRef, `continueUpload(uploadId=guid'${uploadId}',fileOffset=${offset})`), { body: chunkToUpload });
                }
            }
            if (chunk.done) {
                if (first) {
                    // Small file: not enough data to trigger a chunk upload
                    progress({ offset, stage: "starting", uploadId });
                    offset = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(fileRef, `startUpload(uploadId=guid'${uploadId}')`), { body: buffer });
                    first = false;
                    buffer = new Uint8Array(); // reset buffer on small file upload, so we don't duplicate the buffer on finishUpload. Issue #3278
                }
                progress({ offset, stage: "finishing", uploadId });
                return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(File(fileRef, `finishUpload(uploadId=guid'${uploadId}',fileOffset=${offset})`), { body: buffer.length ? buffer : "" });
            }
        }
    }
    moveCopyImpl(destUrl, options, overwrite, methodName) {
        // create a timeline we will manipulate for this request
        const poster = File(this);
        // add our pre-request actions, this fixes issues with batching hanging #2668
        poster.on.pre((0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.noInherit)(async (url, init, result) => {
            const { ServerRelativeUrl: srcUrl, ["odata.id"]: absoluteUrl } = await File(this).using((0,_batching_js__WEBPACK_IMPORTED_MODULE_8__.BatchNever)()).select("ServerRelativeUrl")();
            const webBaseUrl = new URL((0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__.extractWebUrl)(absoluteUrl));
            url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.combine)(webBaseUrl.toString(), `/_api/SP.MoveCopyUtil.${methodName}(overwrite=@a1)?@a1=${overwrite}`);
            init = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
                destPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_12__.toResourcePath)((0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.isUrlAbsolute)(destUrl) ? destUrl : `${webBaseUrl.protocol}//${webBaseUrl.host}${destUrl}`),
                options,
                srcPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_12__.toResourcePath)((0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.isUrlAbsolute)(srcUrl) ? srcUrl : `${webBaseUrl.protocol}//${webBaseUrl.host}${srcUrl}`),
            }, init);
            return [url, init, result];
        }));
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(poster).then(() => fileFromPath(this, destUrl));
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.cancelableScope
], _File.prototype, "copyByPath", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.cancelableScope
], _File.prototype, "moveByPath", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.cancelableScope
], _File.prototype, "setContentChunked", null);
const File = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_File);
/**
 * Creates an IFile instance given a base object and a server relative path
 *
 * @param base Valid SPQueryable from which the observers will be used and the web url extracted
 * @param serverRelativePath The server relative url to the file (ex: '/sites/dev/documents/file.txt')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
function fileFromServerRelativePath(base, serverRelativePath) {
    return File([base, (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__.extractWebUrl)(base.toUrl())], `_api/web/getFileByServerRelativePath(decodedUrl='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(serverRelativePath)}')`);
}
/**
 * Creates an IFile instance given a base object and an absolute path
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath The absolute url to the file (ex: 'https://tenant.sharepoint.com/sites/dev/documents/file.txt')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
async function fileFromAbsolutePath(base, absoluteFilePath) {
    const { WebFullUrl } = await File(base).using((0,_batching_js__WEBPACK_IMPORTED_MODULE_8__.BatchNever)()).getContextInfo(absoluteFilePath);
    const { pathname } = new URL(absoluteFilePath);
    return fileFromServerRelativePath(File([base, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.combine)(WebFullUrl, "_api/web")]), decodeURIComponent(pathname));
}
/**
 * Creates an IFile intance given a base object and either an absolute or server relative path to a file
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath server relative or absolute url to the file (ex: 'https://tenant.sharepoint.com/sites/dev/documents/file.txt' or '/sites/dev/documents/file.txt')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
async function fileFromPath(base, path) {
    return ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.isUrlAbsolute)(path) ? fileFromAbsolutePath : fileFromServerRelativePath)(base, path);
}
/**
 * Describes a collection of Version objects
 *
 */
let _Versions = class _Versions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return Version(this).concat(`(${versionId})`);
    }
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    deleteAll() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Versions(this, "deleteAll"));
    }
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    deleteById(versionId) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Versions(this, `deleteById(vid=${versionId})`));
    }
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    recycleByID(versionId) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Versions(this, `recycleByID(vid=${versionId})`));
    }
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    deleteByLabel(label) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Versions(this, `deleteByLabel(versionlabel='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(label)}')`));
    }
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    recycleByLabel(label) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Versions(this, `recycleByLabel(versionlabel='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(label)}')`));
    }
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    restoreByLabel(label) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Versions(this, `restoreByLabel(versionlabel='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(label)}')`));
    }
};
_Versions = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_11__.defaultPath)("versions")
], _Versions);

const Versions = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Versions);
/**
 * Describes a single Version instance
 *
 */
class _Version extends _readable_file_js__WEBPACK_IMPORTED_MODULE_7__.ReadableFile {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteable)();
    }
}
const Version = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Version);
/**
 * Types for document check in.
 * Minor = 0
 * Major = 1
 * Overwrite = 2
 */
var CheckinType;
(function (CheckinType) {
    CheckinType[CheckinType["Minor"] = 0] = "Minor";
    CheckinType[CheckinType["Major"] = 1] = "Major";
    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
})(CheckinType || (CheckinType = {}));
/**
 * File move opertions
 */
var MoveOperations;
(function (MoveOperations) {
    /**
     * Produce an error if a file with the same name exists in the destination
     */
    MoveOperations[MoveOperations["None"] = 0] = "None";
    /**
     * Overwrite a file with the same name if it exists. Value is 1.
     */
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    /**
     * Complete the move operation even if supporting files are separated from the file. Value is 8.
     */
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
    /**
     * Boolean specifying whether to retain the source of the move's editor and modified by datetime.
     */
    MoveOperations[MoveOperations["RetainEditorAndModifiedOnMove"] = 2048] = "RetainEditorAndModifiedOnMove";
})(MoveOperations || (MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType || (TemplateFileType = {}));
function applyChunckedOperationDefaults(props) {
    return {
        progress: () => null,
        ...props,
    };
}
/**
 * Converts the source into a ReadableStream we can understand
 */
function sourceToReadableStream(source) {
    if (isBlob(source)) {
        return source.stream();
    }
    else if (hasOn(source)) {
        // we probably have a passthrough stream from NodeFetch or some other type that supports "on(data)"
        return new ReadableStream({
            start(controller) {
                source.on("data", (chunk) => {
                    controller.enqueue(chunk);
                });
                source.on("end", () => {
                    controller.close();
                });
            },
        });
    }
    else if (isBuffer(source)) {
        // we think we have a buffer
        return new ReadableStream({
            start(controller) {
                controller.enqueue(source);
                controller.close();
            },
        });
    }
    else if (isTransform(source)) {
        return source.readable;
    }
    else {
        return source;
    }
}
const NAME = Symbol.toStringTag;
function hasOn(object) {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    return typeof object["on"] === "function";
}
// FROM: node-fetch source code
function isBlob(object) {
    return typeof object === "object" &&
        typeof object.arrayBuffer === "function" &&
        typeof object.type === "string" &&
        typeof object.stream === "function" &&
        typeof object.constructor === "function" &&
        (/^(Blob|File)$/.test(object[NAME]) ||
            /^(Blob|File)$/.test(object.constructor.name));
}
function isBuffer(object) {
    return typeof object === "object" && typeof object.length === "number";
}
function isTransform(object) {
    return typeof object === "object" && typeof object.readable === "object";
}


/***/ }),

/***/ 56305:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/files/web.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 6181);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ 4970);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 3082);



_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.fileFromServerRelativePath)(this, fileRelativeUrl);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getFileById = function (uniqueId) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.File)(this, `getFileById('${uniqueId}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getFileByUrl = function (fileUrl) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.File)(this, `getFileByUrl('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_0__.encodePath)("!@p1::" + fileUrl)}')`);
};


/***/ }),

/***/ 79757:
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Folder: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Folder),
/* harmony export */   Folders: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Folders),
/* harmony export */   folderFromAbsolutePath: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.folderFromAbsolutePath),
/* harmony export */   folderFromPath: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.folderFromPath),
/* harmony export */   folderFromServerRelativePath: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.folderFromServerRelativePath)
/* harmony export */ });
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ 33822);
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ 91765);
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ 53127);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 12820);






/***/ }),

/***/ 33822:
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/item.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ 93305);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 12820);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item, "folder", _types_js__WEBPACK_IMPORTED_MODULE_2__.Folder);


/***/ }),

/***/ 91765:
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/list.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ 71528);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 12820);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List, "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__.Folder);


/***/ }),

/***/ 12820:
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/types.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Folder: () => (/* binding */ Folder),
/* harmony export */   Folders: () => (/* binding */ Folders),
/* harmony export */   _Folder: () => (/* binding */ _Folder),
/* harmony export */   _Folders: () => (/* binding */ _Folders),
/* harmony export */   folderFromAbsolutePath: () => (/* binding */ folderFromAbsolutePath),
/* harmony export */   folderFromPath: () => (/* binding */ folderFromPath),
/* harmony export */   folderFromServerRelativePath: () => (/* binding */ folderFromServerRelativePath)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 64177);
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/types.js */ 93305);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../decorators.js */ 43445);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 48939);
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/to-resource-path.js */ 96897);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 6181);
/* harmony import */ var _context_info_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context-info/index.js */ 77374);
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../batching.js */ 82815);












let _Folders = class _Folders extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    getByUrl(name) {
        return Folder(this).concat(`('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(name)}')`);
    }
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    async addUsingPath(serverRelativeUrl, overwrite = false) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Folders(this, `addUsingPath(DecodedUrl='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(serverRelativeUrl)}',overwrite=${overwrite})`));
    }
};
_Folders = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_10__.defaultPath)("folders")
], _Folders);

const Folders = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Folders);
class _Folder extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteableWithETag)();
    }
    /**
     * Gets this folder's sub folders
     *
     */
    get folders() {
        return Folders(this);
    }
    /**
     * Gets this folder's list item field values
     *
     */
    get listItemAllFields() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPInstance)(this, "listItemAllFields");
    }
    /**
     * Gets the parent folder, if available
     *
     */
    get parentFolder() {
        return Folder(this, "parentFolder");
    }
    /**
     * Gets this folder's properties
     *
     */
    get properties() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPInstance)(this, "properties");
    }
    /**
     * Gets this folder's storage metrics information
     *
     */
    get storageMetrics() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPInstance)(this, "storagemetrics");
    }
    /**
     * Updates folder's properties
     * @param props Folder's properties to update
     */
    async update(props) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(props));
    }
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Folder(this, "recycle"));
    }
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    async getItem(...selects) {
        const q = this.listItemAllFields;
        const d = await q.select(...selects)();
        if (d["odata.null"]) {
            throw Error("No associated item was found for this folder. It may be the root folder, which does not have an item.");
        }
        return Object.assign((0,_items_types_js__WEBPACK_IMPORTED_MODULE_4__.Item)([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(d)]), d);
    }
    async moveByPath(destUrl, ...rest) {
        let options = {
            KeepBoth: false,
            ShouldBypassSharedLocks: true,
            RetainEditorAndModifiedOnMove: false,
        };
        if (rest.length === 1) {
            if (typeof rest[0] === "boolean") {
                options.KeepBoth = rest[0];
            }
            else if (typeof rest[0] === "object") {
                options = { ...options, ...rest[0] };
            }
        }
        return this.moveCopyImpl(destUrl, options, "MoveFolderByPath");
    }
    async copyByPath(destUrl, ...rest) {
        let options = {
            ShouldBypassSharedLocks: true,
            ResetAuthorAndCreatedOnCopy: true,
            KeepBoth: false,
        };
        if (rest.length === 1) {
            if (typeof rest[0] === "boolean") {
                options.KeepBoth = rest[0];
            }
            else if (typeof rest[0] === "object") {
                options = { ...options, ...rest[0] };
            }
        }
        return this.moveCopyImpl(destUrl, options, "CopyFolderByPath");
    }
    /**
     * Deletes the folder object with options.
     *
     * @param parameters Specifies the options to use when deleting a folder.
     */
    async deleteWithParams(parameters) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Folder(this, "DeleteWithParameters"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ parameters }));
    }
    /**
     * Create the subfolder inside the current folder, as specified by the leafPath
     *
     * @param leafPath leafName of the new folder
     */
    async addSubFolderUsingPath(leafPath) {
        await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Folder(this, "AddSubFolderUsingPath"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ leafPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_11__.toResourcePath)(leafPath) }));
        return this.folders.getByUrl(leafPath);
    }
    /**
     * Gets the parent information for this folder's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("ServerRelativeUrl", "ListItemAllFields/ParentList/Id", "ListItemAllFields/ParentList/RootFolder/UniqueId", "ListItemAllFields/ParentList/RootFolder/ServerRelativeUrl", "ListItemAllFields/ParentList/RootFolder/ServerRelativePath", "ListItemAllFields/ParentList/ParentWeb/Id", "ListItemAllFields/ParentList/ParentWeb/Url", "ListItemAllFields/ParentList/ParentWeb/ServerRelativeUrl", "ListItemAllFields/ParentList/ParentWeb/ServerRelativePath").expand("ListItemAllFields/ParentList", "ListItemAllFields/ParentList/RootFolder", "ListItemAllFields/ParentList/ParentWeb")();
        return {
            Folder: {
                ServerRelativeUrl: urlInfo.ServerRelativeUrl,
            },
            ParentList: {
                Id: urlInfo.ListItemAllFields.ParentList.Id,
                RootFolderServerRelativePath: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ListItemAllFields.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ListItemAllFields.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ListItemAllFields.ParentList.ParentWeb.Url,
            },
        };
    }
    /**
     * Implementation of folder move/copy
     *
     * @param destUrl The server relative path to which the folder will be copied/moved
     * @param options Any options
     * @param methodName The method to call
     * @returns An IFolder representing the moved or copied folder
     */
    moveCopyImpl(destUrl, options, methodName) {
        // create a timeline we will manipulate for this request
        const poster = Folder(this);
        // add our pre-request actions, this fixes issues with batching hanging #2668
        poster.on.pre((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.noInherit)(async (url, init, result) => {
            const { ServerRelativeUrl: srcUrl, ["odata.id"]: absoluteUrl } = await Folder(this).using((0,_batching_js__WEBPACK_IMPORTED_MODULE_8__.BatchNever)()).select("ServerRelativeUrl")();
            const uri = new URL((0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__.extractWebUrl)(absoluteUrl));
            url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(uri.href, `/_api/SP.MoveCopyUtil.${methodName}()`);
            init = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({
                destPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_11__.toResourcePath)((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(destUrl) ? destUrl : (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(uri.origin, destUrl)),
                options,
                srcPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_11__.toResourcePath)((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(uri.origin, srcUrl)),
            }, init);
            return [url, init, result];
        }));
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(poster).then(() => folderFromPath(this, destUrl));
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.cancelableScope
], _Folder.prototype, "moveByPath", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.cancelableScope
], _Folder.prototype, "copyByPath", null);
const Folder = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Folder);
/**
 * Creates an IFolder instance given a base object and a server relative path
 *
 * @param base Valid SPQueryable from which the observers will be used and the web url extracted
 * @param serverRelativePath The server relative url to the folder (ex: '/sites/dev/documents/folder3')
 * @returns IFolder instance referencing the folder described by the supplied parameters
 */
function folderFromServerRelativePath(base, serverRelativePath) {
    /**
     * Replaced `encodePathNoURIEncode` with `encodePath` which was added by PR in #3230 we think mistakenly as it doesn't seem to be part of the fix #3223 the pr references.
     * New issue #3250 identified this change as a breaking one so this feels like the right adjustment.
     **/
    return Folder([base, (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__.extractWebUrl)(base.toUrl())], `_api/web/getFolderByServerRelativePath(decodedUrl='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__.encodePath)(serverRelativePath)}')`);
}
/**
 * Creates an IFolder instance given a base object and an absolute path
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath The absolute url to the folder (ex: 'https://tenant.sharepoint.com/sites/dev/documents/folder/')
 * @returns IFolder instance referencing the folder described by the supplied parameters
 */
async function folderFromAbsolutePath(base, absoluteFolderPath) {
    const { WebFullUrl } = await Folder(base).using((0,_batching_js__WEBPACK_IMPORTED_MODULE_8__.BatchNever)()).getContextInfo(absoluteFolderPath);
    const { pathname } = new URL(absoluteFolderPath);
    return folderFromServerRelativePath(Folder([base, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(WebFullUrl, "_api/web")]), decodeURIComponent(pathname));
}
/**
 * Creates an IFolder intance given a base object and either an absolute or server relative path to a folder
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath server relative or absolute url to the file (ex: 'https://tenant.sharepoint.com/sites/dev/documents/folder' or '/sites/dev/documents/folder')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
async function folderFromPath(base, path) {
    return ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(path) ? folderFromAbsolutePath : folderFromServerRelativePath)(base, path);
}


/***/ }),

/***/ 53127:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/web.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ 4970);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 12820);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "folders", _types_js__WEBPACK_IMPORTED_MODULE_2__.Folders);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__.Folder);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.folderFromServerRelativePath)(this, folderRelativeUrl);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getFolderById = function (uniqueId) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.Folder)(this, `getFolderById('${uniqueId}')`);
};


/***/ }),

/***/ 2011:
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComparisonResult: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.ComparisonResult),
/* harmony export */   DefaultHeaders: () => (/* reexport safe */ _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_10__.DefaultHeaders),
/* harmony export */   DefaultInit: () => (/* reexport safe */ _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_10__.DefaultInit),
/* harmony export */   InitialFieldQuery: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.InitialFieldQuery),
/* harmony export */   PageType: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.PageType),
/* harmony export */   PrincipalSource: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.PrincipalSource),
/* harmony export */   PrincipalType: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.PrincipalType),
/* harmony export */   RequestDigest: () => (/* reexport safe */ _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_12__.RequestDigest),
/* harmony export */   SPBrowser: () => (/* reexport safe */ _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_13__.SPBrowser),
/* harmony export */   SPCollection: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPCollection),
/* harmony export */   SPFI: () => (/* reexport safe */ _fi_js__WEBPACK_IMPORTED_MODULE_2__.SPFI),
/* harmony export */   SPFx: () => (/* reexport safe */ _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__.SPFx),
/* harmony export */   SPFxToken: () => (/* reexport safe */ _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__.SPFxToken),
/* harmony export */   SPInstance: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance),
/* harmony export */   SPQueryable: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable),
/* harmony export */   Telemetry: () => (/* reexport safe */ _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_11__.Telemetry),
/* harmony export */   _SPCollection: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection),
/* harmony export */   _SPInstance: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance),
/* harmony export */   _SPQueryable: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPQueryable),
/* harmony export */   containsInvalidFileFolderChars: () => (/* reexport safe */ _utils_file_names_js__WEBPACK_IMPORTED_MODULE_6__.containsInvalidFileFolderChars),
/* harmony export */   createChangeToken: () => (/* reexport safe */ _utils_create_change_token_js__WEBPACK_IMPORTED_MODULE_4__.createChangeToken),
/* harmony export */   defaultPath: () => (/* reexport safe */ _decorators_js__WEBPACK_IMPORTED_MODULE_1__.defaultPath),
/* harmony export */   deleteable: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteable),
/* harmony export */   deleteableWithETag: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteableWithETag),
/* harmony export */   emptyGuid: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.emptyGuid),
/* harmony export */   encodePath: () => (/* reexport safe */ _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_9__.encodePath),
/* harmony export */   encodePathNoURIEncode: () => (/* reexport safe */ _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_9__.encodePathNoURIEncode),
/* harmony export */   extractWebUrl: () => (/* reexport safe */ _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__.extractWebUrl),
/* harmony export */   odataUrlFrom: () => (/* reexport safe */ _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_7__.odataUrlFrom),
/* harmony export */   spDelete: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spDelete),
/* harmony export */   spGet: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spGet),
/* harmony export */   spInvokableFactory: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory),
/* harmony export */   spPatch: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPatch),
/* harmony export */   spPost: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost),
/* harmony export */   spPostDelete: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPostDelete),
/* harmony export */   spPostDeleteETag: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPostDeleteETag),
/* harmony export */   spPostMerge: () => (/* reexport safe */ _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPostMerge),
/* harmony export */   spfi: () => (/* reexport safe */ _fi_js__WEBPACK_IMPORTED_MODULE_2__.spfi),
/* harmony export */   stripInvalidFileFolderChars: () => (/* reexport safe */ _utils_file_names_js__WEBPACK_IMPORTED_MODULE_6__.stripInvalidFileFolderChars),
/* harmony export */   toResourcePath: () => (/* reexport safe */ _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_8__.toResourcePath)
/* harmony export */ });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ 96290);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators.js */ 43445);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fi.js */ 17066);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 48986);
/* harmony import */ var _utils_create_change_token_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/create-change-token.js */ 61870);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/extract-web-url.js */ 48939);
/* harmony import */ var _utils_file_names_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/file-names.js */ 70070);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/odata-url-from.js */ 64177);
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/to-resource-path.js */ 96897);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/encode-path-str.js */ 6181);
/* harmony import */ var _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/defaults.js */ 59801);
/* harmony import */ var _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/telemetry.js */ 46936);
/* harmony import */ var _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviors/request-digest.js */ 25359);
/* harmony import */ var _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/spbrowser.js */ 6438);
/* harmony import */ var _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./behaviors/spfx.js */ 89754);

















/***/ }),

/***/ 95324:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Item),
/* harmony export */   ItemVersion: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.ItemVersion),
/* harmony export */   ItemVersions: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.ItemVersions),
/* harmony export */   Items: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Items)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ 94454);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 93305);




/***/ }),

/***/ 94454:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/items/list.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ 71528);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 93305);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List, "items", _types_js__WEBPACK_IMPORTED_MODULE_2__.Items);


/***/ }),

/***/ 93305:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   ItemVersion: () => (/* binding */ ItemVersion),
/* harmony export */   ItemVersions: () => (/* binding */ ItemVersions),
/* harmony export */   Items: () => (/* binding */ Items),
/* harmony export */   _Item: () => (/* binding */ _Item),
/* harmony export */   _ItemVersion: () => (/* binding */ _ItemVersion),
/* harmony export */   _ItemVersions: () => (/* binding */ _ItemVersions),
/* harmony export */   _Items: () => (/* binding */ _Items)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ 2011);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lists/types.js */ 71528);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 43445);







/**
 * Describes a collection of Item objects
 *
 */
let _Items = class _Items extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id) {
        return Item(this).concat(`(${id})`);
    }
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId) {
        // creates an item with the parent list path and append out method call
        return Item([this, this.parentUrl], `getItemByStringId('${stringId}')`);
    }
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    skip(skip, reverse = false) {
        if (reverse) {
            this.query.set("$skiptoken", `Paged=TRUE&PagedPrev=TRUE&p_ID=${skip}`);
        }
        else {
            this.query.set("$skiptoken", `Paged=TRUE&p_ID=${skip}`);
        }
        return this;
    }
    [Symbol.asyncIterator]() {
        const nextInit = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPCollection)(this).using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseBinderWithErrorCheck)(async (r) => {
            const json = await r.json();
            const nextLink = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.hOP)(json, "d") && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.hOP)(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
            return {
                hasNext: typeof nextLink === "string" && nextLink.length > 0,
                nextLink,
                value: (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseODataJSON)(json),
            };
        }));
        const queryParams = ["$top", "$select", "$expand", "$filter", "$orderby", "$skiptoken"];
        for (let i = 0; i < queryParams.length; i++) {
            const param = this.query.get(queryParams[i]);
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(param)) {
                nextInit.query.set(queryParams[i], param);
            }
        }
        return {
            _next: nextInit,
            async next() {
                if (this._next === null) {
                    return { done: true, value: undefined };
                }
                const result = await this._next();
                if (result.hasNext) {
                    this._next = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPCollection)([this._next, result.nextLink]);
                    return { done: false, value: result.value };
                }
                else {
                    this._next = null;
                    return { done: false, value: result.value };
                }
            },
        };
    }
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    async add(properties = {}) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)(properties));
    }
};
_Items = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("items")
], _Items);

const Items = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_Items);
/**
 * Descrines a single Item instance
 *
 */
class _Item extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteableWithETag)();
    }
    /**
     * Gets the effective base permissions for the item
     *
     */
    get effectiveBasePermissions() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    get effectiveBasePermissionsForUI() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(this, "EffectiveBasePermissionsForUI");
    }
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    get fieldValuesAsHTML() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesAsHTML");
    }
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    get fieldValuesAsText() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesAsText");
    }
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    get fieldValuesForEdit() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesForEdit");
    }
    /**
     * Gets the collection of versions associated with this item
     */
    get versions() {
        return ItemVersions(this);
    }
    /**
     * this item's list
     */
    get list() {
        return this.getParent(_lists_types_js__WEBPACK_IMPORTED_MODULE_3__.List, "", this.parentUrl.substring(0, this.parentUrl.lastIndexOf("/")));
    }
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)(properties, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.headers)({
            "IF-Match": eTag,
            "X-HTTP-Method": "MERGE",
        }));
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this).using(ItemUpdatedParser()), postBody);
    }
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "recycle"));
    }
    /**
     * Deletes the item object with options.
     *
     * @param parameters Specifies the options to use when deleting a item.
     */
    async deleteWithParams(parameters) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "DeleteWithParameters"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)({ parameters }));
    }
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    async getWopiFrameUrl(action = 0) {
        const i = Item(this, "getWOPIFrameUrl(@action)");
        i.query.set("@action", action);
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(i);
    }
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues, bNewDocumentUpdate = false) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "validateupdatelistitem"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)({ formValues, bNewDocumentUpdate }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "ParentList/Id", "ParentList/Title", "ParentList/RootFolder/UniqueId", "ParentList/RootFolder/ServerRelativeUrl", "ParentList/RootFolder/ServerRelativePath", "ParentList/ParentWeb/Id", "ParentList/ParentWeb/Url", "ParentList/ParentWeb/ServerRelativeUrl", "ParentList/ParentWeb/ServerRelativePath").expand("ParentList", "ParentList/RootFolder", "ParentList/ParentWeb")();
        return {
            Item: {
                Id: urlInfo.Id,
            },
            ParentList: {
                Id: urlInfo.ParentList.Id,
                Title: urlInfo.ParentList.Title,
                RootFolderServerRelativePath: urlInfo.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentList.ParentWeb.Url,
            },
        };
    }
    async setImageField(fieldName, imageName, imageContent) {
        const contextInfo = await this.getParentInfos();
        const webUrl = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(this.toUrl());
        const q = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)([this, webUrl], "/_api/web/UploadImage");
        q.concat("(listTitle=@a1,imageName=@a2,listId=@a3,itemId=@a4)");
        q.query.set("@a1", `'${contextInfo.ParentList.Title}'`);
        q.query.set("@a2", `'${imageName}'`);
        q.query.set("@a3", `'${contextInfo.ParentList.Id}'`);
        q.query.set("@a4", contextInfo.Item.Id);
        const result = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(q, { body: imageContent });
        const itemInfo = {
            "type": "thumbnail",
            "fileName": result.Name,
            "nativeFile": {},
            "fieldName": fieldName,
            "serverUrl": contextInfo.ParentWeb.Url.replace(contextInfo.ParentWeb.ServerRelativeUrl, ""),
            "serverRelativeUrl": result.ServerRelativeUrl,
            "id": result.UniqueId,
        };
        return this.validateUpdateListItem([{
                FieldName: fieldName,
                FieldValue: JSON.stringify(itemInfo),
            }]);
    }
}
const Item = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_Item);
/**
 * Describes a collection of Version objects
 *
 */
let _ItemVersions = class _ItemVersions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return ItemVersion(this).concat(`(${versionId})`);
    }
};
_ItemVersions = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("versions")
], _ItemVersions);

const ItemVersions = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
class _ItemVersion extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteableWithETag)();
    }
}
const ItemVersion = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_ItemVersion);
function ItemUpdatedParser() {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseBinderWithErrorCheck)(async (r) => ({
        etag: r.headers.get("etag"),
    }));
}


/***/ }),

/***/ 52185:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlMode: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.ControlMode),
/* harmony export */   List: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.List),
/* harmony export */   Lists: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Lists),
/* harmony export */   RenderListDataOptions: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.RenderListDataOptions)
/* harmony export */ });
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ 42475);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 71528);




/***/ }),

/***/ 71528:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlMode: () => (/* binding */ ControlMode),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Lists: () => (/* binding */ Lists),
/* harmony export */   RenderListDataOptions: () => (/* binding */ RenderListDataOptions),
/* harmony export */   _List: () => (/* binding */ _List),
/* harmony export */   _Lists: () => (/* binding */ _Lists)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 64177);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 43445);
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-resource-path.js */ 96897);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 6181);








let _Lists = class _Lists extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id) {
        return List(this).concat(`('${id}')`);
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title) {
        return List(this, `getByTitle('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(title)}')`);
    }
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    async add(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addSettings = {
            "AllowContentTypes": enableContentTypes,
            "BaseTemplate": template,
            "ContentTypesEnabled": enableContentTypes,
            "Description": desc,
            "Title": title,
            ...additionalSettings,
        };
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(addSettings));
    }
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    async ensure(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addOrUpdateSettings = { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes, ...additionalSettings };
        const list = this.getByTitle(addOrUpdateSettings.Title);
        try {
            await list.select("Title")();
            const data = await list.update(addOrUpdateSettings);
            return { created: false, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
        catch (e) {
            const data = await this.add(title, desc, template, enableContentTypes, addOrUpdateSettings);
            return { created: true, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
    }
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    async ensureSiteAssetsLibrary() {
        const json = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Lists(this, "ensuresiteassetslibrary"));
        return List([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json)]);
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    async ensureSitePagesLibrary() {
        const json = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Lists(this, "ensuresitepageslibrary"));
        return List([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json)]);
    }
};
_Lists = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("lists")
], _Lists);

const Lists = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Lists);
class _List extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteableWithETag)();
    }
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPCollection)(this, "EventReceivers");
    }
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "getRelatedFields");
    }
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "InformationRightsManagementSettings");
    }
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(properties, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.headers)({ "IF-Match": eTag })));
        return data;
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getchanges"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query, ...expands) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getitems").expand(...expands), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getlistitemchangessincetoken").using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.TextParse)()), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    async recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "recycle"));
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    async renderListData(viewXml) {
        const q = List(this, "renderlistdata(@viewXml)");
        q.query.set("@viewXml", `'${viewXml}'`);
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(q);
        return JSON.parse(data);
    }
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    // eslint-disable-next-line max-len
    renderListDataAsStream(parameters, overrideParameters = null, query = new Map()) {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(parameters, "RenderOptions") && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce((v, c) => v + c);
        }
        const clone = List(this, "RenderListDataAsStream");
        if (query && query.size > 0) {
            query.forEach((v, k) => clone.query.set(k, v));
        }
        const params = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(overrideParameters) ? { parameters, overrideParameters } : { parameters };
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(clone, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(params));
    }
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    async renderListFormData(itemId, formId, mode) {
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
        // data will be a string, so we parse it again
        return JSON.parse(data);
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    async reserveListItemId() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "reservelistitemid"));
    }
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    async addValidateUpdateItemUsingPath(formValues, decodedUrl, bNewDocumentUpdate = false, checkInComment, additionalProps) {
        const addProps = {
            FolderPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__.toResourcePath)(decodedUrl),
        };
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(additionalProps)) {
            if (additionalProps.leafName) {
                addProps.LeafName = (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__.toResourcePath)(additionalProps.leafName);
            }
            if (additionalProps.objectType) {
                addProps.UnderlyingObjectType = additionalProps.objectType;
            }
        }
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "AddValidateUpdateItemUsingPath()"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({
            bNewDocumentUpdate,
            checkInComment,
            formValues,
            listItemCreateInfo: addProps,
        }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")();
        return {
            List: {
                Id: urlInfo.Id,
                RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentWeb.Url,
            },
        };
    }
}
const List = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    /**
     * The returned list will have a FileSystemItemId field on each item if possible.
     */
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    /**
     * Returns the client form schema to add and edit items.
     */
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    /**
     * Returns QuickLaunch navigation nodes.
     */
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    /**
     * Returns Spotlight rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    /**
     * Returns Visualization rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    /**
     * Returns view XML and other information about the current view.
     */
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    /**
     * Prevents AutoHyperlink from being run on text fields in this query.
     */
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    /**
     * Enables urls pointing to Media TA service, such as .thumbnailUrl, .videoManifestUrl, .pdfConversionUrls.
     */
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    /**
     * Return Parant folder information.
     */
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    /**
     * Return Page context info for the current list being rendered.
     */
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    /**
     * Return client-side component manifest information associated with the list.
     */
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
    /**
     * Return all content-types available on the list.
     */
    RenderListDataOptions[RenderListDataOptions["ListAvailableContentTypes"] = 65536] = "ListAvailableContentTypes";
    /**
      * Return the order of items in the new-item menu.
      */
    RenderListDataOptions[RenderListDataOptions["FolderContentTypeOrder"] = 131072] = "FolderContentTypeOrder";
    /**
     * Return information to initialize Grid for quick edit.
     */
    RenderListDataOptions[RenderListDataOptions["GridInitInfo"] = 262144] = "GridInitInfo";
    /**
     * Indicator if the vroom API of the SPItemUrl returned in MediaTAUrlGenerator should use site url as host.
     */
    RenderListDataOptions[RenderListDataOptions["SiteUrlAsMediaTASPItemHost"] = 524288] = "SiteUrlAsMediaTASPItemHost";
    /**
     * Return the files representing mount points in the list.
     */
    RenderListDataOptions[RenderListDataOptions["AddToOneDrive"] = 1048576] = "AddToOneDrive";
    /**
     * Return SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["SPFXCustomActions"] = 2097152] = "SPFXCustomActions";
    /**
     * Do not return non-SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["CustomActions"] = 4194304] = "CustomActions";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));


/***/ }),

/***/ 42475:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/lists/web.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ 4970);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 71528);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 64177);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 6181);






(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "lists", _types_js__WEBPACK_IMPORTED_MODULE_2__.Lists);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "siteUserInfoList", _types_js__WEBPACK_IMPORTED_MODULE_2__.List);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "defaultDocumentLibrary", _types_js__WEBPACK_IMPORTED_MODULE_2__.List);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "customListTemplates", _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__.SPCollection, "getcustomlisttemplates");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getList = function (listRelativeUrl) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)(this, `getList('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__.encodePath)(listRelativeUrl)}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getCatalog = async function (type) {
    const data = await (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_1__.Web)(this, `getcatalog(${type})`).select("Id")();
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(data)]);
};


/***/ }),

/***/ 2737:
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/security/funcs.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   breakRoleInheritance: () => (/* binding */ breakRoleInheritance),
/* harmony export */   currentUserHasPermissions: () => (/* binding */ currentUserHasPermissions),
/* harmony export */   getCurrentUserEffectivePermissions: () => (/* binding */ getCurrentUserEffectivePermissions),
/* harmony export */   getUserEffectivePermissions: () => (/* binding */ getUserEffectivePermissions),
/* harmony export */   hasPermissions: () => (/* binding */ hasPermissions),
/* harmony export */   resetRoleInheritance: () => (/* binding */ resetRoleInheritance),
/* harmony export */   userHasPermissions: () => (/* binding */ userHasPermissions)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ 27815);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ 96290);


/**
* Gets the effective permissions for the user supplied
*
* @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
*/
async function getUserEffectivePermissions(loginName) {
    const q = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPInstance)(this, "getUserEffectivePermissions(@user)");
    q.query.set("@user", `'${loginName}'`);
    return q();
}
/**
 * Gets the effective permissions for the current user
 */
async function getCurrentUserEffectivePermissions() {
    return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPQueryable)(this, "EffectiveBasePermissions")();
}
/**
 * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
 *
 * @param copyRoleAssignments If true the permissions are copied from the current parent scope
 * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
 */
async function breakRoleInheritance(copyRoleAssignments = false, clearSubscopes = false) {
    return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)((0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPQueryable)(this, `breakroleinheritance(copyroleassignments=${copyRoleAssignments}, clearsubscopes=${clearSubscopes})`));
}
/**
 * Removes the local role assignments so that it re-inherit role assignments from the parent object.
 *
 */
async function resetRoleInheritance() {
    return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)((0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPQueryable)(this, "resetroleinheritance"));
}
/**
 * Determines if a given user has the appropriate permissions
 *
 * @param loginName The user to check
 * @param permission The permission being checked
 */
async function userHasPermissions(loginName, permission) {
    const perms = await getUserEffectivePermissions.call(this, loginName);
    return this.hasPermissions(perms, permission);
}
/**
 * Determines if the current user has the requested permissions
 *
 * @param permission The permission we wish to check
 */
async function currentUserHasPermissions(permission) {
    const perms = await getCurrentUserEffectivePermissions.call(this);
    return this.hasPermissions(perms, permission);
}
/**
 * Taken from sp.js, checks the supplied permissions against the mask
 *
 * @param value The security principal's permissions on the given object
 * @param perm The permission checked against the value
 */
/* eslint-disable no-bitwise */
function hasPermissions(value, perm) {
    if (!perm) {
        return true;
    }
    if (perm === _types_js__WEBPACK_IMPORTED_MODULE_0__.PermissionKind.FullMask) {
        return (value.High & 32767) === 32767 && value.Low === 65535;
    }
    perm = perm - 1;
    let num = 1;
    if (perm >= 0 && perm < 32) {
        num = num << perm;
        return 0 !== (value.Low & num);
    }
    else if (perm >= 32 && perm < 64) {
        num = num << perm - 32;
        return 0 !== (value.High & num);
    }
    return false;
}
/* eslint-enable no-bitwise */


/***/ }),

/***/ 8330:
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/security/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionKind: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.PermissionKind),
/* harmony export */   RoleAssignment: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.RoleAssignment),
/* harmony export */   RoleAssignments: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.RoleAssignments),
/* harmony export */   RoleDefinition: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.RoleDefinition),
/* harmony export */   RoleDefinitions: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.RoleDefinitions)
/* harmony export */ });
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ 99851);
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ 51688);
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ 49392);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 27815);






/***/ }),

/***/ 99851:
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/security/item.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ 93305);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 27815);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs.js */ 2737);





(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item, "roleAssignments", _types_js__WEBPACK_IMPORTED_MODULE_2__.RoleAssignments);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item, "firstUniqueAncestorSecurableObject", _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.SPInstance);
_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item.prototype.getUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.getUserEffectivePermissions;
_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item.prototype.getCurrentUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentUserEffectivePermissions;
_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item.prototype.breakRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.breakRoleInheritance;
_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item.prototype.resetRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.resetRoleInheritance;
_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item.prototype.userHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.userHasPermissions;
_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item.prototype.currentUserHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.currentUserHasPermissions;
_items_types_js__WEBPACK_IMPORTED_MODULE_1__._Item.prototype.hasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.hasPermissions;


/***/ }),

/***/ 51688:
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/security/list.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ 71528);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 27815);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs.js */ 2737);





(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List, "roleAssignments", _types_js__WEBPACK_IMPORTED_MODULE_2__.RoleAssignments);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List, "firstUniqueAncestorSecurableObject", _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.SPInstance);
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List.prototype.getUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.getUserEffectivePermissions;
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List.prototype.getCurrentUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentUserEffectivePermissions;
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List.prototype.breakRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.breakRoleInheritance;
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List.prototype.resetRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.resetRoleInheritance;
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List.prototype.userHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.userHasPermissions;
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List.prototype.currentUserHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.currentUserHasPermissions;
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List.prototype.hasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.hasPermissions;


/***/ }),

/***/ 27815:
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/security/types.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionKind: () => (/* binding */ PermissionKind),
/* harmony export */   RoleAssignment: () => (/* binding */ RoleAssignment),
/* harmony export */   RoleAssignments: () => (/* binding */ RoleAssignments),
/* harmony export */   RoleDefinition: () => (/* binding */ RoleDefinition),
/* harmony export */   RoleDefinitions: () => (/* binding */ RoleDefinitions),
/* harmony export */   _RoleAssignment: () => (/* binding */ _RoleAssignment),
/* harmony export */   _RoleAssignments: () => (/* binding */ _RoleAssignments),
/* harmony export */   _RoleDefinition: () => (/* binding */ _RoleDefinition),
/* harmony export */   _RoleDefinitions: () => (/* binding */ _RoleDefinitions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _site_groups_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site-groups/types.js */ 99043);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators.js */ 43445);






/**
 * Describes a set of role assignments for the current scope
 *
 */
let _RoleAssignments = class _RoleAssignments extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    getById(id) {
        return RoleAssignment(this).concat(`(${id})`);
    }
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    async add(principalId, roleDefId) {
        await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(RoleAssignments(this, `addroleassignment(principalid=${principalId}, roledefid=${roleDefId})`));
    }
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    async remove(principalId, roleDefId) {
        await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(RoleAssignments(this, `removeroleassignment(principalid=${principalId}, roledefid=${roleDefId})`));
    }
};
_RoleAssignments = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_5__.defaultPath)("roleassignments")
], _RoleAssignments);

const RoleAssignments = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_RoleAssignments);
/**
 * Describes a role assignment
 *
 */
class _RoleAssignment extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteable)();
    }
    /**
     * Gets the groups that directly belong to the access control list (ACL) for this securable object
     *
     */
    get groups() {
        return (0,_site_groups_types_js__WEBPACK_IMPORTED_MODULE_3__.SiteGroups)(this, "groups");
    }
    /**
     * Gets the role definition bindings for this role assignment
     *
     */
    get bindings() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPCollection)(this, "roledefinitionbindings");
    }
}
const RoleAssignment = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_RoleAssignment);
/**
 * Describes a collection of role definitions
 *
 */
let _RoleDefinitions = class _RoleDefinitions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    getById(id) {
        return RoleDefinition(this, `getById(${id})`);
    }
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    getByName(name) {
        return RoleDefinition(this, `getbyname('${name}')`);
    }
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    getByType(roleTypeKind) {
        return RoleDefinition(this, `getbytype(${roleTypeKind})`);
    }
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition, high and low values need to be converted to string
     *
     */
    async add(name, description, order, basePermissions) {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({
            BasePermissions: { "High": basePermissions.High.toString(), "Low": basePermissions.Low.toString() },
            Description: description,
            Name: name,
            Order: order,
        });
        // __metadata: { "type": "SP.RoleDefinition" },
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(this, postBody);
        return {
            data: data,
            definition: this.getById(data.Id),
        };
    }
};
_RoleDefinitions = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_5__.defaultPath)("roledefinitions")
], _RoleDefinitions);

const RoleDefinitions = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_RoleDefinitions);
/**
 * Describes a role definition
 *
 */
class _RoleDefinition extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteable)();
    }
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    async update(properties) {
        const s = ["BasePermissions"];
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(properties, s[0]) !== undefined) {
            const bpObj = properties[s[0]];
            bpObj.High = bpObj.High.toString();
            bpObj.Low = bpObj.Low.toString();
        }
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(properties));
        let definition = this;
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(properties, "Name")) {
            const parent = this.getParent(RoleDefinitions);
            definition = parent.getByName(properties.Name);
        }
        return {
            data,
            definition,
        };
    }
}
const RoleDefinition = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_RoleDefinition);
var PermissionKind;
(function (PermissionKind) {
    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["EmptyMask"] = 0] = "EmptyMask";
    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["ViewListItems"] = 1] = "ViewListItems";
    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["AddListItems"] = 2] = "AddListItems";
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    PermissionKind[PermissionKind["EditListItems"] = 3] = "EditListItems";
    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    PermissionKind[PermissionKind["DeleteListItems"] = 4] = "DeleteListItems";
    /**
     * Approve a minor version of a list item or document.
     */
    PermissionKind[PermissionKind["ApproveItems"] = 5] = "ApproveItems";
    /**
     * View the source of documents with server-side file handlers.
     */
    PermissionKind[PermissionKind["OpenItems"] = 6] = "OpenItems";
    /**
     * View past versions of a list item or document.
     */
    PermissionKind[PermissionKind["ViewVersions"] = 7] = "ViewVersions";
    /**
     * Delete past versions of a list item or document.
     */
    PermissionKind[PermissionKind["DeleteVersions"] = 8] = "DeleteVersions";
    /**
     * Discard or check in a document which is checked out to another user.
     */
    PermissionKind[PermissionKind["CancelCheckout"] = 9] = "CancelCheckout";
    /**
     * Create, change, and delete personal views of lists.
     */
    PermissionKind[PermissionKind["ManagePersonalViews"] = 10] = "ManagePersonalViews";
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    PermissionKind[PermissionKind["ManageLists"] = 12] = "ManageLists";
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    PermissionKind[PermissionKind["ViewFormPages"] = 13] = "ViewFormPages";
    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessList"] = 14] = "AnonymousSearchAccessList";
    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    PermissionKind[PermissionKind["Open"] = 17] = "Open";
    /**
     * View pages in a Site.
     */
    PermissionKind[PermissionKind["ViewPages"] = 18] = "ViewPages";
    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    PermissionKind[PermissionKind["AddAndCustomizePages"] = 19] = "AddAndCustomizePages";
    /**
     * Apply a theme or borders to the entire Site.
     */
    PermissionKind[PermissionKind["ApplyThemeAndBorder"] = 20] = "ApplyThemeAndBorder";
    /**
     * Apply a style sheet (.css file) to the Site.
     */
    PermissionKind[PermissionKind["ApplyStyleSheets"] = 21] = "ApplyStyleSheets";
    /**
     * View reports on Site usage.
     */
    PermissionKind[PermissionKind["ViewUsageData"] = 22] = "ViewUsageData";
    /**
     * Create a Site using Self-Service Site Creation.
     */
    PermissionKind[PermissionKind["CreateSSCSite"] = 23] = "CreateSSCSite";
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    PermissionKind[PermissionKind["ManageSubwebs"] = 24] = "ManageSubwebs";
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    PermissionKind[PermissionKind["CreateGroups"] = 25] = "CreateGroups";
    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    PermissionKind[PermissionKind["ManagePermissions"] = 26] = "ManagePermissions";
    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    PermissionKind[PermissionKind["BrowseDirectories"] = 27] = "BrowseDirectories";
    /**
     * View information about users of the Site.
     */
    PermissionKind[PermissionKind["BrowseUserInfo"] = 28] = "BrowseUserInfo";
    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    PermissionKind[PermissionKind["AddDelPrivateWebParts"] = 29] = "AddDelPrivateWebParts";
    /**
     * Update Web Parts to display personalized information.
     */
    PermissionKind[PermissionKind["UpdatePersonalWebParts"] = 30] = "UpdatePersonalWebParts";
    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    PermissionKind[PermissionKind["ManageWeb"] = 31] = "ManageWeb";
    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessWebLists"] = 32] = "AnonymousSearchAccessWebLists";
    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    PermissionKind[PermissionKind["UseClientIntegration"] = 37] = "UseClientIntegration";
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    PermissionKind[PermissionKind["UseRemoteAPIs"] = 38] = "UseRemoteAPIs";
    /**
     * Manage alerts for all users of the Site.
     */
    PermissionKind[PermissionKind["ManageAlerts"] = 39] = "ManageAlerts";
    /**
     * Create e-mail alerts.
     */
    PermissionKind[PermissionKind["CreateAlerts"] = 40] = "CreateAlerts";
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    PermissionKind[PermissionKind["EditMyUserInfo"] = 41] = "EditMyUserInfo";
    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    PermissionKind[PermissionKind["EnumeratePermissions"] = 63] = "EnumeratePermissions";
    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["FullMask"] = 65] = "FullMask";
})(PermissionKind || (PermissionKind = {}));


/***/ }),

/***/ 49392:
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/security/web.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ 4970);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 27815);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs.js */ 2737);





(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "roleDefinitions", _types_js__WEBPACK_IMPORTED_MODULE_2__.RoleDefinitions);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "roleAssignments", _types_js__WEBPACK_IMPORTED_MODULE_2__.RoleAssignments);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "firstUniqueAncestorSecurableObject", _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.SPInstance);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.getUserEffectivePermissions;
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getCurrentUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentUserEffectivePermissions;
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.breakRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.breakRoleInheritance;
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.resetRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.resetRoleInheritance;
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.userHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.userHasPermissions;
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.currentUserHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.currentUserHasPermissions;
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.hasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__.hasPermissions;


/***/ }),

/***/ 7918:
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/site-groups/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteGroup: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.SiteGroup),
/* harmony export */   SiteGroups: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.SiteGroups)
/* harmony export */ });
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ 49036);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 99043);




/***/ }),

/***/ 99043:
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/site-groups/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteGroup: () => (/* binding */ SiteGroup),
/* harmony export */   SiteGroups: () => (/* binding */ SiteGroups),
/* harmony export */   _SiteGroup: () => (/* binding */ _SiteGroup),
/* harmony export */   _SiteGroups: () => (/* binding */ _SiteGroups)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _site_users_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site-users/types.js */ 51299);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators.js */ 43445);





let _SiteGroups = class _SiteGroups extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    getById(id) {
        return SiteGroup(this).concat(`(${id})`);
    }
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    async add(properties) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)(properties));
    }
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    getByName(groupName) {
        return SiteGroup(this, `getByName('${groupName}')`);
    }
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    removeById(id) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(SiteGroups(this, `removeById('${id}')`));
    }
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    removeByLoginName(loginName) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(SiteGroups(this, `removeByLoginName('${loginName}')`));
    }
};
_SiteGroups = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_4__.defaultPath)("sitegroups")
], _SiteGroups);

const SiteGroups = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_SiteGroups);
class _SiteGroup extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    /**
     * Gets the users for this group
     *
     */
    get users() {
        return (0,_site_users_types_js__WEBPACK_IMPORTED_MODULE_1__.SiteUsers)(this, "users");
    }
    /**
    * @param props Group properties to update
    */
    async update(props) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)(props));
    }
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    setUserAsOwner(userId) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(SiteGroup(this, `SetUserAsOwner(${userId})`));
    }
}
const SiteGroup = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_SiteGroup);


/***/ }),

/***/ 49036:
/*!*************************************************!*\
  !*** ./node_modules/@pnp/sp/site-groups/web.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webs/types.js */ 4970);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 99043);
/* harmony import */ var _security_web_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/web.js */ 49392);





(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__._Web, "siteGroups", _types_js__WEBPACK_IMPORTED_MODULE_3__.SiteGroups);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__._Web, "associatedOwnerGroup", _types_js__WEBPACK_IMPORTED_MODULE_3__.SiteGroup);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__._Web, "associatedMemberGroup", _types_js__WEBPACK_IMPORTED_MODULE_3__.SiteGroup);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__._Web, "associatedVisitorGroup", _types_js__WEBPACK_IMPORTED_MODULE_3__.SiteGroup);
_webs_types_js__WEBPACK_IMPORTED_MODULE_2__._Web.prototype.createDefaultAssociatedGroups = async function (groupNameSeed, siteOwner, copyRoleAssignments = false, clearSubscopes = true, siteOwner2) {
    await this.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
    const q = (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_2__.Web)(this, "createDefaultAssociatedGroups(userLogin=@u,userLogin2=@v,groupNameSeed=@s)");
    q.query.set("@u", `'${siteOwner || ""}'`);
    q.query.set("@v", `'${siteOwner2 || ""}'`);
    q.query.set("@s", `'${groupNameSeed || ""}'`);
    return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(q);
};


/***/ }),

/***/ 51299:
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/site-users/types.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteUser: () => (/* binding */ SiteUser),
/* harmony export */   SiteUsers: () => (/* binding */ SiteUsers),
/* harmony export */   _SiteUser: () => (/* binding */ _SiteUser),
/* harmony export */   _SiteUsers: () => (/* binding */ _SiteUsers)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _site_groups_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site-groups/types.js */ 99043);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators.js */ 43445);





let _SiteUsers = class _SiteUsers extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    getById(id) {
        return SiteUser(this, `getById(${id})`);
    }
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    getByEmail(email) {
        return SiteUser(this, `getByEmail('${email}')`);
    }
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     *   e.g. SharePoint Online: 'i:0#.f|membership|user@domain'
     */
    getByLoginName(loginName) {
        return SiteUser(this).concat(`('!@v::${loginName}')`);
    }
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    removeById(id) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(SiteUsers(this, `removeById(${id})`));
    }
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    removeByLoginName(loginName) {
        const o = SiteUsers(this, "removeByLoginName(@v)");
        o.query.set("@v", `'${loginName}'`);
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(o);
    }
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    async add(loginName) {
        await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)({ LoginName: loginName }));
        return this.getByLoginName(loginName);
    }
};
_SiteUsers = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_4__.defaultPath)("siteusers")
], _SiteUsers);

const SiteUsers = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_SiteUsers);
/**
 * Describes a single user
 *
 */
class _SiteUser extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteable)();
    }
    /**
     * Gets the groups for this user
     *
     */
    get groups() {
        return (0,_site_groups_types_js__WEBPACK_IMPORTED_MODULE_1__.SiteGroups)(this, "groups");
    }
    /**
     * Updates this user
     *
     * @param props Group properties to update
     */
    async update(props) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__.body)(props));
    }
}
const SiteUser = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_SiteUser);


/***/ }),

/***/ 43500:
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/site-users/web.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ 4970);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 51299);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 96290);




(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "siteUsers", _types_js__WEBPACK_IMPORTED_MODULE_2__.SiteUsers);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "currentUser", _types_js__WEBPACK_IMPORTED_MODULE_2__.SiteUser);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.ensureUser = async function (logonName) {
    return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spPost)((0,_webs_types_js__WEBPACK_IMPORTED_MODULE_1__.Web)(this, "ensureuser"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({ logonName }));
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getUserById = function (id) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.SiteUser)(this, `getUserById(${id})`);
};


/***/ }),

/***/ 96290:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/spqueryable.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComparisonResult: () => (/* binding */ ComparisonResult),
/* harmony export */   InitialFieldQuery: () => (/* binding */ InitialFieldQuery),
/* harmony export */   SPCollection: () => (/* binding */ SPCollection),
/* harmony export */   SPInstance: () => (/* binding */ SPInstance),
/* harmony export */   SPQueryable: () => (/* binding */ SPQueryable),
/* harmony export */   _SPCollection: () => (/* binding */ _SPCollection),
/* harmony export */   _SPInstance: () => (/* binding */ _SPInstance),
/* harmony export */   _SPQueryable: () => (/* binding */ _SPQueryable),
/* harmony export */   deleteable: () => (/* binding */ deleteable),
/* harmony export */   deleteableWithETag: () => (/* binding */ deleteableWithETag),
/* harmony export */   spDelete: () => (/* binding */ spDelete),
/* harmony export */   spGet: () => (/* binding */ spGet),
/* harmony export */   spInvokableFactory: () => (/* binding */ spInvokableFactory),
/* harmony export */   spPatch: () => (/* binding */ spPatch),
/* harmony export */   spPost: () => (/* binding */ spPost),
/* harmony export */   spPostDelete: () => (/* binding */ spPostDelete),
/* harmony export */   spPostDeleteETag: () => (/* binding */ spPostDeleteETag),
/* harmony export */   spPostMerge: () => (/* binding */ spPostMerge)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 2464);


const spInvokableFactory = (f) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.queryableFactory)(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SPQueryable extends _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.Queryable {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param base A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        if (typeof base === "string") {
            let url = "";
            let parentUrl = "";
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(base) || base.lastIndexOf("/") < 0) {
                parentUrl = base;
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base, path);
            }
            else if (base.lastIndexOf("/") > base.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = base.lastIndexOf("/");
                parentUrl = base.slice(0, index);
                path = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base.slice(index), path);
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = base.lastIndexOf("(");
                parentUrl = base.slice(0, index);
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base, path);
            }
            // init base with corrected string value
            super(url);
            this.parentUrl = parentUrl;
        }
        else {
            super(base, path);
            const q = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(base) ? base[0] : base;
            this.parentUrl = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(base) ? base[1] : q.toUrl();
        }
    }
    /**
     * Gets the full url with query information
     */
    toRequestUrl() {
        const aliasedParams = new URLSearchParams(this.query);
        // this regex is designed to locate aliased parameters within url paths
        let url = this.toUrl().replace(/'!(@.+?)::((?:[^']|'')+)'/ig, (match, labelName, value) => {
            this.log(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0);
            aliasedParams.set(labelName, `'${value}'`);
            return labelName;
        });
        const query = aliasedParams.toString();
        if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, path, base = this.parentUrl) {
        return factory([this, base], path);
    }
}
const SPQueryable = spInvokableFactory(_SPQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SPCollection extends _SPQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        if (typeof filter === "object") {
            this.query.set("$filter", filter.toString());
            return this;
        }
        if (typeof filter === "function") {
            this.query.set("$filter", filter(SPOData.Where()).toString());
            return this;
        }
        this.query.set("$filter", filter.toString());
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${orderBy} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SPCollection = spInvokableFactory(_SPCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SPInstance extends _SPQueryable {
}
const SPInstance = spInvokableFactory(_SPInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable() {
    return function () {
        return spPostDelete(this);
    };
}
function deleteableWithETag() {
    return function (eTag = "*") {
        return spPostDeleteETag(this, {}, eTag);
    };
}
const spGet = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.get, init);
};
const spPost = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.post, init);
const spPostMerge = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers, "X-HTTP-Method": "MERGE" };
    return spPost(o, init);
};
const spPostDelete = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers || {}, "X-HTTP-Method": "DELETE" };
    return spPost(o, init);
};
const spPostDeleteETag = (o, init, eTag = "*") => {
    init = init || {};
    init.headers = { ...init.headers || {}, "IF-Match": eTag };
    return spPostDelete(o, init);
};
const spDelete = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.del, init);
const spPatch = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.patch, init);
var FilterOperation;
(function (FilterOperation) {
    FilterOperation["Equals"] = "eq";
    FilterOperation["NotEquals"] = "ne";
    FilterOperation["GreaterThan"] = "gt";
    FilterOperation["GreaterThanOrEqualTo"] = "ge";
    FilterOperation["LessThan"] = "lt";
    FilterOperation["LessThanOrEqualTo"] = "le";
    FilterOperation["StartsWith"] = "startswith";
    FilterOperation["SubstringOf"] = "substringof";
})(FilterOperation || (FilterOperation = {}));
var FilterJoinOperator;
(function (FilterJoinOperator) {
    FilterJoinOperator["And"] = "and";
    FilterJoinOperator["AndWithSpace"] = " and ";
    FilterJoinOperator["Or"] = "or";
    FilterJoinOperator["OrWithSpace"] = " or ";
})(FilterJoinOperator || (FilterJoinOperator = {}));
class SPOData {
    static Where() {
        return new InitialFieldQuery([]);
    }
}
// Linting complains that TBaseInterface is unused, but without it all the intellisense is lost since it's carrying it through the chain
class BaseQuery {
    constructor(query) {
        this.query = [];
        this.query = query;
    }
}
class QueryableFields extends BaseQuery {
    constructor(q) {
        super(q);
    }
    text(internalName) {
        return new TextField([...this.query, internalName]);
    }
    choice(internalName) {
        return new TextField([...this.query, internalName]);
    }
    multiChoice(internalName) {
        return new TextField([...this.query, internalName]);
    }
    number(internalName) {
        return new NumberField([...this.query, internalName]);
    }
    date(internalName) {
        return new DateField([...this.query, internalName]);
    }
    boolean(internalName) {
        return new BooleanField([...this.query, internalName]);
    }
    lookup(internalName) {
        return new LookupQueryableFields([...this.query], internalName);
    }
    lookupId(internalName) {
        const col = internalName.endsWith("Id") ? internalName : `${internalName}Id`;
        return new NumberField([...this.query, col]);
    }
}
class QueryableAndResult extends QueryableFields {
    or(...queries) {
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.OrWithSpace)})`]);
    }
}
class QueryableOrResult extends QueryableFields {
    and(...queries) {
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.AndWithSpace)})`]);
    }
}
class InitialFieldQuery extends QueryableFields {
    or(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableFields([...this.query, FilterJoinOperator.Or]);
        }
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.OrWithSpace)})`]);
    }
    and(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableFields([...this.query, FilterJoinOperator.And]);
        }
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.AndWithSpace)})`]);
    }
}
class LookupQueryableFields extends BaseQuery {
    constructor(q, LookupField) {
        super(q);
        this.LookupField = LookupField;
    }
    Id(id) {
        return new ComparisonResult([...this.query, `${this.LookupField}/Id`, FilterOperation.Equals, id.toString()]);
    }
    text(internalName) {
        return new TextField([...this.query, `${this.LookupField}/${internalName}`]);
    }
    number(internalName) {
        return new NumberField([...this.query, `${this.LookupField}/${internalName}`]);
    }
}
class NullableField extends BaseQuery {
    constructor(q) {
        super(q);
        this.LastIndex = q.length - 1;
        this.InternalName = q[this.LastIndex];
    }
    toODataValue(value) {
        return `'${value}'`;
    }
    isNull() {
        return new ComparisonResult([...this.query, FilterOperation.Equals, "null"]);
    }
    isNotNull() {
        return new ComparisonResult([...this.query, FilterOperation.NotEquals, "null"]);
    }
}
class ComparableField extends NullableField {
    equals(value) {
        return new ComparisonResult([...this.query, FilterOperation.Equals, this.toODataValue(value)]);
    }
    notEquals(value) {
        return new ComparisonResult([...this.query, FilterOperation.NotEquals, this.toODataValue(value)]);
    }
    in(...values) {
        return SPOData.Where().or(...values.map(x => this.equals(x)));
    }
    notIn(...values) {
        return SPOData.Where().and(...values.map(x => this.notEquals(x)));
    }
}
class TextField extends ComparableField {
    startsWith(value) {
        const filter = `${FilterOperation.StartsWith}(${this.InternalName}, ${this.toODataValue(value)})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
    contains(value) {
        const filter = `${FilterOperation.SubstringOf}(${this.toODataValue(value)}, ${this.InternalName})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
}
class BooleanField extends NullableField {
    toODataValue(value) {
        return `${value == null ? "null" : value ? 1 : 0}`;
    }
    isTrue() {
        return new ComparisonResult([...this.query, FilterOperation.Equals, this.toODataValue(true)]);
    }
    isFalse() {
        return new ComparisonResult([...this.query, FilterOperation.Equals, this.toODataValue(false)]);
    }
    isFalseOrNull() {
        const filter = `(${[
            this.InternalName,
            FilterOperation.Equals,
            this.toODataValue(null),
            FilterJoinOperator.Or,
            this.InternalName,
            FilterOperation.Equals,
            this.toODataValue(false),
        ].join(" ")})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
}
class NumericField extends ComparableField {
    greaterThan(value) {
        return new ComparisonResult([...this.query, FilterOperation.GreaterThan, this.toODataValue(value)]);
    }
    greaterThanOrEquals(value) {
        return new ComparisonResult([...this.query, FilterOperation.GreaterThanOrEqualTo, this.toODataValue(value)]);
    }
    lessThan(value) {
        return new ComparisonResult([...this.query, FilterOperation.LessThan, this.toODataValue(value)]);
    }
    lessThanOrEquals(value) {
        return new ComparisonResult([...this.query, FilterOperation.LessThanOrEqualTo, this.toODataValue(value)]);
    }
}
class NumberField extends NumericField {
    toODataValue(value) {
        return `${value}`;
    }
}
class DateField extends NumericField {
    toODataValue(value) {
        return `'${value.toISOString()}'`;
    }
    isBetween(startDate, endDate) {
        const filter = `(${[
            this.InternalName,
            FilterOperation.GreaterThan,
            this.toODataValue(startDate),
            FilterJoinOperator.And,
            this.InternalName,
            FilterOperation.LessThan,
            this.toODataValue(endDate),
        ].join(" ")})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
    isToday() {
        const StartToday = new Date();
        StartToday.setHours(0, 0, 0, 0);
        const EndToday = new Date();
        EndToday.setHours(23, 59, 59, 999);
        return this.isBetween(StartToday, EndToday);
    }
}
class ComparisonResult extends BaseQuery {
    // eslint-disable-next-line max-len
    and(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableAndResult([...this.query, FilterJoinOperator.And]);
        }
        return new ComparisonResult([...this.query, FilterJoinOperator.And, `(${queries.map(x => x.toString()).join(FilterJoinOperator.AndWithSpace)})`]);
    }
    // eslint-disable-next-line max-len
    or(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableOrResult([...this.query, FilterJoinOperator.Or]);
        }
        return new ComparisonResult([...this.query, FilterJoinOperator.Or, `(${queries.map(x => x.toString()).join(FilterJoinOperator.OrWithSpace)})`]);
    }
    toString() {
        return this.query.join(" ");
    }
}


/***/ }),

/***/ 48986:
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/types.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageType: () => (/* binding */ PageType),
/* harmony export */   PrincipalSource: () => (/* binding */ PrincipalSource),
/* harmony export */   PrincipalType: () => (/* binding */ PrincipalType),
/* harmony export */   emptyGuid: () => (/* binding */ emptyGuid)
/* harmony export */ });
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
const emptyGuid = "00000000-0000-0000-0000-000000000000";
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));


/***/ }),

/***/ 61870:
/*!***********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/create-change-token.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChangeToken: () => (/* binding */ createChangeToken)
/* harmony export */ });
/**
 * Creates a change token for use with sites, webs, or lists
 *
 * @param resourceType The type of resource for which you want a change token
 * @param resource The identifier (GUID) of the resource site.Id, web.Id, or List.Id
 * @param tokenDate The date for this token (if start token, start date of chages; if end token, end date of the changes)
 * @param versionNumber Version number for token (default = 1)
 * @returns A properly formatted change token
 */
function createChangeToken(resourceType = "site", resource, tokenDate = new Date(), versionNumber = 1) {
    const resourceTypeMapping = new Map([["site", 1], ["web", 2], ["list", 3]]).get(resourceType);
    // The value of the string assigned to ChangeTokenStart.StringValue is semicolon delimited, and takes the following parameters in the order listed:
    // Version number.
    // The change scope (0 - Content Database, 1 - site collection, 2 - site, 3 - list).
    // GUID of the item the scope applies to (for example, GUID of the list).
    // Time (in UTC) from when changes occurred in Ticks (but its .NET ticks so we do this math)
    // Initialize the change item on the ChangeToken using a default value of -1.
    const tokenDateTicks = (tokenDate.getTime() * 10000) + 621355968000000000;
    return { StringValue: `${versionNumber};${resourceTypeMapping};${resource};${tokenDateTicks};-1` };
}


/***/ }),

/***/ 6181:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/encode-path-str.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodePath: () => (/* binding */ encodePath),
/* harmony export */   encodePathNoURIEncode: () => (/* binding */ encodePathNoURIEncode)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);

/**
 * Encodes path portions of SharePoint urls such as decodedUrl=`encodePath(pathStr)`
 *
 * @param value The string path to encode
 * @returns A path encoded for use in SP urls
 */
function encodePath(value) {
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            // we do not need to encodeURIComponent v as it will be encoded automatically when it is added as a query string param
            // we do need to double any ' chars
            return `!${labelName}::${v.replace(/'/ig, "''")}`;
        });
    }
    else {
        // because this is a literal path value we encodeURIComponent after doubling any ' chars
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}
function encodePathNoURIEncode(value) {
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            // we do not need to encodeURIComponent v as it will be encoded automatically when it is added as a query string param
            // we do need to double any ' chars
            return `!${labelName}::${v.replace(/'/ig, "''")}`;
        });
    }
    else {
        // because this is a literal path value we encodeURIComponent after doubling any ' chars
        return value.replace(/'/ig, "''");
    }
}


/***/ }),

/***/ 48939:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extract-web-url.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractWebUrl: () => (/* binding */ extractWebUrl)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);

function extractWebUrl(candidateUrl) {
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substring(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}


/***/ }),

/***/ 70070:
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/file-names.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containsInvalidFileFolderChars: () => (/* binding */ containsInvalidFileFolderChars),
/* harmony export */   stripInvalidFileFolderChars: () => (/* binding */ stripInvalidFileFolderChars)
/* harmony export */ });
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise = false) {
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer = "", onPremise = false) {
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}


/***/ }),

/***/ 64177:
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/odata-url-from.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   odataUrlFrom: () => (/* binding */ odataUrlFrom)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extract-web-url.js */ 48939);


function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[3]) && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push((0,_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__.extractWebUrl)(candidate[s[3]]), "_api", editLink);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        return "";
    }
    return (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(...parts);
}


/***/ }),

/***/ 96897:
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/to-resource-path.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toResourcePath: () => (/* binding */ toResourcePath)
/* harmony export */ });
function toResourcePath(url) {
    return {
        DecodedUrl: url,
    };
}


/***/ }),

/***/ 47339:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.Web),
/* harmony export */   Webs: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.Webs)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ 4970);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fi.js */ 17066);



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_1__.SPFI.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_0__.Web);
    },
});


/***/ }),

/***/ 4970:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/types.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web: () => (/* binding */ Web),
/* harmony export */   Webs: () => (/* binding */ Webs),
/* harmony export */   _Web: () => (/* binding */ _Web),
/* harmony export */   _Webs: () => (/* binding */ _Webs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 2464);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ 96290);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 43445);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 48939);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/core */ 49671);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 6181);







let _Webs = class _Webs extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPCollection {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    async add(Title, Url, Description = "", WebTemplate = "STS", Language = 1033, UseSamePermissionsAsParentSite = true) {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            "parameters": {
                Description,
                Language,
                Title,
                Url,
                UseSamePermissionsAsParentSite,
                WebTemplate,
            },
        });
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Webs(this, "add"), postBody);
    }
};
_Webs = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("webs")
], _Webs);

const Webs = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spInvokableFactory)(_Webs);
/**
 * Ensures the url passed to the constructor is correctly rebased to a web url
 *
 * @param candidate The candidate web url
 * @param path The caller supplied path, which may contain _api, meaning we don't append _api/web
 */
function rebaseWebUrl(candidate, path) {
    let replace = "_api/web";
    // this allows us to both:
    // - test if `candidate` already has an api path
    // - ensure that we append the correct one as sometimes a web is not defined
    //   by _api/web, in the case of _api/site/rootweb for example
    const matches = /(_api[/|\\](site\/rootweb|site|web))/i.exec(candidate);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) > 0) {
        // we want just the base url part (before the _api)
        candidate = (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(candidate);
        // we want to ensure we put back the correct string
        replace = matches[1];
    }
    // we only need to append the _api part IF `path` doesn't already include it.
    if ((path === null || path === void 0 ? void 0 : path.indexOf("_api")) < 0) {
        candidate = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.combine)(candidate, replace);
    }
    return candidate;
}
/**
 * Describes a web
 *
 */
let _Web = class _Web extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPInstance {
    constructor(base, path) {
        if (typeof base === "string") {
            base = rebaseWebUrl(base, path);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.isArray)(base)) {
            base = [base[0], rebaseWebUrl(base[1], path)];
        }
        else {
            base = [base, rebaseWebUrl(base.toUrl(), path)];
        }
        super(base, path);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.deleteable)();
    }
    /**
     * Gets this web's subwebs
     *
     */
    get webs() {
        return Webs(this);
    }
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPInstance)(this, "allproperties");
    }
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, "webinfos");
    }
    /**
     * Gets this web's parent web and data
     *
     */
    async getParentWeb() {
        const { Url, ParentWeb } = await this.select("Url", "ParentWeb/ServerRelativeUrl").expand("ParentWeb")();
        if (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.ServerRelativeUrl) {
            return Web([this, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.combine)((new URL(Url)).origin, ParentWeb.ServerRelativeUrl)]);
        }
        return null;
    }
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    async update(properties) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)(properties));
    }
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            backgroundImageUrl,
            colorPaletteUrl,
            fontSchemeUrl,
            shareGenerated,
        });
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "applytheme"), postBody);
    }
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, `applywebtemplate(webTemplate='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(template)}')`));
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "getchanges"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({ query }));
    }
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename, size = 0, progId = "") {
        return Web(this, `maptoicon(filename='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(filename)}',progid='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(progId)}',size=${size})`)();
    }
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key) {
        return Web(this, `getStorageEntity('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(key)}')`)();
    }
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key, value, description = "", comments = "") {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "setStorageEntity"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            comments,
            description,
            key,
            value,
        }));
    }
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, `removeStorageEntity('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(key)}')`));
    }
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter = -1, nConfigurationFilter = -1) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, `getSubwebsFilteredForCurrentUser(nWebTemplateFilter=${nWebTemplateFilter},nConfigurationFilter=${nConfigurationFilter})`);
    }
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language = 1033, includeCrossLanugage = true) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, `getavailablewebtemplates(lcid=${language},doincludecrosslanguage=${includeCrossLanugage})`);
    }
};
_Web = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("_api/web")
], _Web);

const Web = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spInvokableFactory)(_Web);


/***/ }),

/***/ 31635:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./lib/webparts/sopLibrary/SopLibraryWebPart.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SopLibraryWebPart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 48398);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ 89676);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ 39877);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ 56642);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! SopLibraryWebPartStrings */ 76898);
/* harmony import */ var SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SopLibrary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SopLibrary */ 97919);
/* harmony import */ var _services_pnpClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/pnpClient */ 26852);








class SopLibraryWebPart extends _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__.BaseClientSideWebPart {
    onInit() {
        (0,_services_pnpClient__WEBPACK_IMPORTED_MODULE_7__.initPnp)(this.context);
        return super.onInit();
    }
    render() {
        var _a, _b;
        const element = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SopLibrary__WEBPACK_IMPORTED_MODULE_6__["default"], {
            libraryTitle: this.properties.libraryTitle || 'SOP',
            versionColumn: this.properties.versionColumn || '',
            revDateColumn: this.properties.revDateColumn || '',
            phaseColumn: this.properties.phaseColumn || '',
            siteUrl: ((_b = (_a = this.context.pageContext) === null || _a === void 0 ? void 0 : _a.web) === null || _b === void 0 ? void 0 : _b.absoluteUrl) || '',
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, this.domElement);
    }
    onDispose() {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(this.domElement);
    }
    get dataVersion() {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__.Version.parse('1.0');
    }
    getPropertyPaneConfiguration() {
        return {
            pages: [
                {
                    header: { description: SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.PropertyPaneDescription },
                    groups: [
                        {
                            groupName: SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.BasicGroupName,
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)('libraryTitle', {
                                    label: SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.LibraryTitleLabel,
                                    placeholder: 'SOP Library',
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)('versionColumn', {
                                    label: SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.VersionColumnLabel,
                                    placeholder: 'DocumentVersion',
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)('revDateColumn', {
                                    label: SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.RevDateColumnLabel,
                                    placeholder: 'RevisionDate',
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)('phaseColumn', {
                                    label: SopLibraryWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.PhaseColumnLabel,
                                    placeholder: 'Phase',
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=sop-library-web-part.js.map