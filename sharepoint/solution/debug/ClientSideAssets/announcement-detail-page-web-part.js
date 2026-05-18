define(["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-property-pane","@microsoft/sp-webpart-base","AnnouncementDetailPageWebPartStrings"], (__WEBPACK_EXTERNAL_MODULE__85959__, __WEBPACK_EXTERNAL_MODULE__48398__, __WEBPACK_EXTERNAL_MODULE__89676__, __WEBPACK_EXTERNAL_MODULE__39877__, __WEBPACK_EXTERNAL_MODULE__56642__, __WEBPACK_EXTERNAL_MODULE__27390__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 92456:
/*!**************************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/components/AnnouncementDetail.module.css ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".announcementDetailContainer_d789b0f1_a910cbc0{background:0 0;color:#fff;margin-left:5%;margin-right:5%;min-height:100vh}.loading_d789b0f1_a910cbc0{align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:400px;padding:3rem 1rem}.loading_d789b0f1_a910cbc0 p{color:#888;font-family:Helvetica Neue,sans-serif;font-size:1rem;margin-top:1rem}.spinner_d789b0f1_a910cbc0{animation:spin_d789b0f1_a910cbc0 1s linear infinite;border:4px solid #3a3a3a;border-radius:50%;border-top-color:#ff6b35;height:48px;width:48px}@keyframes spin_d789b0f1_a910cbc0{to{transform:rotate(1turn)}}.breadcrumbWrapper_d789b0f1_a910cbc0{margin:0 auto;max-width:1400px;padding:1.5rem 2rem 0}.pageHeader_d789b0f1_a910cbc0{margin:2rem auto 0;max-width:1400px;padding:0 2rem}.pageTitle_d789b0f1_a910cbc0{color:#fff;font-family:Druk Text Trial,sans-serif;font-size:4rem;font-weight:700;letter-spacing:-.02em;line-height:1.1;margin:0;text-transform:uppercase}.heroSection_d789b0f1_a910cbc0{margin:0 auto 3rem;max-width:1400px;padding:0 2rem;position:relative;width:100%}.heroImageWrapper_d789b0f1_a910cbc0{background:#2a2a2a;border-radius:16px;height:600px;overflow:hidden;position:relative;width:100%}.heroImage_d789b0f1_a910cbc0{height:100%;object-fit:cover;width:100%}.heroOverlay_d789b0f1_a910cbc0{background:linear-gradient(180deg,rgba(0,0,0,.1) 0,transparent 20%,transparent 60%,rgba(0,0,0,.4));height:100%;left:0;position:absolute;top:0;width:100%}.heroBadge_d789b0f1_a910cbc0{left:2rem;position:absolute;top:2rem;z-index:2}.heroMeta_d789b0f1_a910cbc0{align-items:center;bottom:2rem;color:hsla(0,0%,100%,.9);display:flex;font-family:Helvetica Neue,sans-serif;font-size:.875rem;gap:.75rem;left:2rem;position:absolute;z-index:2}.heroDate_d789b0f1_a910cbc0{color:hsla(0,0%,100%,.9);font-weight:400}.contentWrapper_d789b0f1_a910cbc0{background:0 0}.contentContainer_d789b0f1_a910cbc0{margin:0 auto;max-width:900px;padding:0 2rem 4rem}.textSection_d789b0f1_a910cbc0{margin-bottom:2rem}.sectionHeading_d789b0f1_a910cbc0{color:#fff;font-family:Helvetica Neue,sans-serif;font-size:1.125rem;font-weight:700;line-height:1.4;margin:3rem 0 1.5rem}.paragraph_d789b0f1_a910cbc0{color:#d0d0d0;font-family:Helvetica Neue,sans-serif;font-size:1rem;font-weight:400;line-height:1.8;margin:0 0 1.5rem}.quoteSection_d789b0f1_a910cbc0{background:0 0;border-left:none;border-radius:0;font-style:italic;margin:3rem 0;padding:2.5rem 3rem;position:relative}.quoteIcon_d789b0f1_a910cbc0{color:#fff;font-family:Georgia,serif;font-size:5rem;font-weight:700;left:0;line-height:1;opacity:.15;position:absolute;top:1rem}.quoteText_d789b0f1_a910cbc0{color:#fff;font-family:Druk Text Trial,sans-serif;font-size:1.5rem;font-style:normal;font-weight:700;line-height:1.6;margin:0 0 1rem;position:relative;z-index:1}.quoteAuthor_d789b0f1_a910cbc0{color:#888;font-family:Helvetica Neue,sans-serif;font-size:1rem;font-style:normal;font-weight:400;margin:0}.navigationSection_d789b0f1_a910cbc0{border-top:1px solid #3a3a3a;margin-top:4rem;padding-top:2rem}.backToListButton_d789b0f1_a910cbc0{align-items:center;background:0 0;border:2px solid #ff6b35;border-radius:8px;color:#ff6b35;cursor:pointer;display:inline-flex;font-family:Druk Text Trial,sans-serif;font-size:1rem;font-weight:600;gap:.5rem;padding:.875rem 1.5rem;transition:all .2s ease}.backToListButton_d789b0f1_a910cbc0:hover{background:#ff6b35;color:#fff;transform:translateX(-4px)}.backToListButton_d789b0f1_a910cbc0:focus{outline:3px solid rgba(255,107,53,.3);outline-offset:2px}.backToListButton_d789b0f1_a910cbc0:active{transform:translateX(-2px)}.backToListButton_d789b0f1_a910cbc0 svg{transition:transform .2s ease}.backToListButton_d789b0f1_a910cbc0:hover svg{transform:translateX(-4px)}.notFound_d789b0f1_a910cbc0{margin:0 auto;max-width:600px;padding:4rem 1rem;text-align:center}.notFound_d789b0f1_a910cbc0 h1{color:#fff;font-family:Druk Text Trial,sans-serif;font-size:2rem;margin:0 0 1rem}.notFound_d789b0f1_a910cbc0 p{color:#888;font-family:Helvetica Neue,sans-serif;font-size:1.125rem;line-height:1.6;margin:0 0 2rem}.backButton_d789b0f1_a910cbc0{background:#ff6b35;border:none;border-radius:8px;color:#fff;cursor:pointer;font-family:Druk Text Trial,sans-serif;font-size:1rem;font-weight:600;padding:.875rem 1.5rem;transition:all .2s ease}.backButton_d789b0f1_a910cbc0:hover{background:#e55a2b;box-shadow:0 4px 12px rgba(255,107,53,.3);transform:translateY(-2px)}.backButton_d789b0f1_a910cbc0:focus{outline:3px solid rgba(255,107,53,.3);outline-offset:2px}.backButton_d789b0f1_a910cbc0:active{transform:translateY(0)}@media (max-width:1024px){.pageTitle_d789b0f1_a910cbc0{font-size:3rem}.heroImageWrapper_d789b0f1_a910cbc0{height:500px}.heroSection_d789b0f1_a910cbc0,.pageHeader_d789b0f1_a910cbc0{padding:0 1rem}.contentContainer_d789b0f1_a910cbc0{padding:0 1rem 4rem}}@media (max-width:768px){.pageTitle_d789b0f1_a910cbc0{font-size:2.5rem}.heroImageWrapper_d789b0f1_a910cbc0{height:400px}.heroBadge_d789b0f1_a910cbc0{left:1.5rem;top:1.5rem}.heroMeta_d789b0f1_a910cbc0{bottom:1.5rem;flex-wrap:wrap;font-size:.875rem;left:1.5rem}.paragraph_d789b0f1_a910cbc0{font-size:1rem}.quoteSection_d789b0f1_a910cbc0{margin:2rem 0;padding:2rem}.quoteIcon_d789b0f1_a910cbc0{font-size:4rem;left:0}.quoteText_d789b0f1_a910cbc0{font-size:1.25rem}.contentContainer_d789b0f1_a910cbc0{padding:0 1rem 3rem}.breadcrumbWrapper_d789b0f1_a910cbc0{padding:1.5rem 1rem 0}.pageHeader_d789b0f1_a910cbc0{margin:1.5rem auto 0;padding:0 1rem}}@media (max-width:480px){.pageTitle_d789b0f1_a910cbc0{font-size:2rem}.heroImageWrapper_d789b0f1_a910cbc0{border-radius:8px;height:350px}.heroBadge_d789b0f1_a910cbc0{left:1rem;top:1rem}.heroMeta_d789b0f1_a910cbc0{bottom:1rem;left:1rem}.quoteSection_d789b0f1_a910cbc0{padding:1.5rem}.quoteText_d789b0f1_a910cbc0{font-size:1.125rem}.backToListButton_d789b0f1_a910cbc0{justify-content:center;width:100%}}@media (prefers-reduced-motion:reduce){.backButton_d789b0f1_a910cbc0,.backToListButton_d789b0f1_a910cbc0{transition:none}.backButton_d789b0f1_a910cbc0:hover,.backToListButton_d789b0f1_a910cbc0:hover{transform:none}}@media (prefers-contrast:high){.heroOverlay_d789b0f1_a910cbc0{background:rgba(0,0,0,.8)}.quoteSection_d789b0f1_a910cbc0{border-left-width:6px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvU3VqYXkvUmVhY3RTaGFyZXBvaW50L3NyYy93ZWJwYXJ0cy9hbm5vdW5jZW1lbnREZXRhaWxQYWdlL2NvbXBvbmVudHMvQW5ub3VuY2VtZW50RGV0YWlsLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUVFLGNBQUEsQ0FDQSxVQUFBLENBQ0EsY0FBQSxDQUNBLGVBQUEsQ0FKQSxnQkFJQSxDQUlGLDJCQUdFLGtCQUFBLENBRkEsWUFBQSxDQUNBLHFCQUFBLENBRUEsc0JBQUEsQ0FDQSxnQkFBQSxDQUNBLGlCQUFBLENBRUEsNkJBR0UsVUFBQSxDQUNBLHFDQUFBLENBRkEsY0FBQSxDQURBLGVBR0EsQ0FJSiwyQkFNRSxtREFBQSxDQUZBLHdCQUFBLENBQ0EsaUJBQUEsQ0FEQSx3QkFBQSxDQUZBLFdBQUEsQ0FEQSxVQUtBLENBR0Ysa0NBQ0UsR0FDRSx1QkFBQSxDQUFBLENBSUoscUNBRUUsYUFBQSxDQURBLGdCQUFBLENBRUEscUJBQUEsQ0FJRiw4QkFFRSxrQkFBQSxDQURBLGdCQUFBLENBRUEsY0FBQSxDQUdGLDZCQUdFLFVBQUEsQ0FHQSxzQ0FBQSxDQUxBLGNBQUEsQ0FDQSxlQUFBLENBTUEscUJBQUEsQ0FIQSxlQUFBLENBREEsUUFBQSxDQUdBLHdCQUNBLENBSUYsK0JBSUUsa0JBQUEsQ0FEQSxnQkFBQSxDQUVBLGNBQUEsQ0FKQSxpQkFBQSxDQUNBLFVBR0EsQ0FHRixvQ0FNRSxrQkFBQSxDQUZBLGtCQUFBLENBREEsWUFBQSxDQUVBLGVBQUEsQ0FKQSxpQkFBQSxDQUNBLFVBSUEsQ0FHRiw2QkFFRSxXQUFBLENBQ0EsZ0JBQUEsQ0FGQSxVQUVBLENBR0YsK0JBTUUsa0dBQUEsQ0FEQSxXQUFBLENBRkEsTUFBQSxDQUZBLGlCQUFBLENBQ0EsS0FBQSxDQUVBLFVBRUEsQ0FTRiw2QkFHRSxTQUFBLENBRkEsaUJBQUEsQ0FDQSxRQUFBLENBRUEsU0FBQSxDQUdGLDRCQU1FLGtCQUFBLENBSkEsV0FBQSxDQU9BLHdCQUFBLENBSkEsWUFBQSxDQUtBLHFDQUFBLENBRkEsaUJBQUEsQ0FEQSxVQUFBLENBSkEsU0FBQSxDQUZBLGlCQUFBLENBR0EsU0FNQSxDQUdGLDRCQUNFLHdCQUFBLENBQ0EsZUFBQSxDQUlGLGtDQUNFLGNBQUEsQ0FHRixvQ0FFRSxhQUFBLENBREEsZUFBQSxDQUVBLG1CQUFBLENBR0YsK0JBQ0Usa0JBQUEsQ0FHRixrQ0FHRSxVQUFBLENBRUEscUNBQUEsQ0FKQSxrQkFBQSxDQUNBLGVBQUEsQ0FJQSxlQUFBLENBRkEsb0JBRUEsQ0FHRiw2QkFHRSxhQUFBLENBRUEscUNBQUEsQ0FKQSxjQUFBLENBS0EsZUFBQSxDQUpBLGVBQUEsQ0FFQSxpQkFFQSxDQUlGLGdDQUlFLGNBQUEsQ0FDQSxnQkFBQSxDQUNBLGVBQUEsQ0FDQSxpQkFBQSxDQUxBLGFBQUEsQ0FDQSxtQkFBQSxDQUZBLGlCQU1BLENBR0YsNkJBTUUsVUFBQSxDQUdBLHlCQUFBLENBTEEsY0FBQSxDQUNBLGVBQUEsQ0FGQSxNQUFBLENBS0EsYUFBQSxDQURBLFdBQUEsQ0FOQSxpQkFBQSxDQUNBLFFBT0EsQ0FHRiw2QkFHRSxVQUFBLENBS0Esc0NBQUEsQ0FQQSxnQkFBQSxDQVFBLGlCQUFBLENBRkEsZUFBQSxDQUxBLGVBQUEsQ0FFQSxlQUFBLENBQ0EsaUJBQUEsQ0FDQSxTQUdBLENBR0YsK0JBRUUsVUFBQSxDQUlBLHFDQUFBLENBTEEsY0FBQSxDQUVBLGlCQUFBLENBQ0EsZUFBQSxDQUNBLFFBQ0EsQ0FJRixxQ0FHRSw0QkFBQSxDQUZBLGVBQUEsQ0FDQSxnQkFDQSxDQUdGLG9DQUVFLGtCQUFBLENBR0EsY0FBQSxDQUNBLHdCQUFBLENBQ0EsaUJBQUEsQ0FDQSxhQUFBLENBR0EsY0FBQSxDQVZBLG1CQUFBLENBWUEsc0NBQUEsQ0FKQSxjQUFBLENBQ0EsZUFBQSxDQVBBLFNBQUEsQ0FDQSxzQkFBQSxDQVFBLHVCQUNBLENBRUEsMENBQ0Usa0JBQUEsQ0FDQSxVQUFBLENBQ0EsMEJBQUEsQ0FHRiwwQ0FDRSxxQ0FBQSxDQUNBLGtCQUFBLENBR0YsMkNBQ0UsMEJBQUEsQ0FHRix3Q0FDRSw2QkFBQSxDQUdGLDhDQUNFLDBCQUFBLENBS0osNEJBRUUsYUFBQSxDQURBLGVBQUEsQ0FFQSxpQkFBQSxDQUNBLGlCQUFBLENBRUEsK0JBRUUsVUFBQSxDQUVBLHNDQUFBLENBSEEsY0FBQSxDQUVBLGVBQ0EsQ0FHRiw4QkFFRSxVQUFBLENBR0EscUNBQUEsQ0FKQSxrQkFBQSxDQUdBLGVBQUEsQ0FEQSxlQUVBLENBSUosOEJBRUUsa0JBQUEsQ0FDQSxXQUFBLENBQ0EsaUJBQUEsQ0FDQSxVQUFBLENBR0EsY0FBQSxDQUVBLHNDQUFBLENBSkEsY0FBQSxDQUNBLGVBQUEsQ0FOQSxzQkFBQSxDQVFBLHVCQUNBLENBRUEsb0NBQ0Usa0JBQUEsQ0FFQSx5Q0FBQSxDQURBLDBCQUNBLENBR0Ysb0NBQ0UscUNBQUEsQ0FDQSxrQkFBQSxDQUdGLHFDQUNFLHVCQUFBLENBS0osMEJBQ0UsNkJBQ0UsY0FBQSxDQUdGLG9DQUNFLFlBQUEsQ0FPRiw2REFDRSxjQUFBLENBR0Ysb0NBQ0UsbUJBQUEsQ0FBQSxDQUlKLHlCQUNFLDZCQUNFLGdCQUFBLENBR0Ysb0NBQ0UsWUFBQSxDQUdGLDZCQUVFLFdBQUEsQ0FEQSxVQUNBLENBR0YsNEJBQ0UsYUFBQSxDQUdBLGNBQUEsQ0FEQSxpQkFBQSxDQURBLFdBRUEsQ0FHRiw2QkFDRSxjQUFBLENBR0YsZ0NBRUUsYUFBQSxDQURBLFlBQ0EsQ0FHRiw2QkFDRSxjQUFBLENBQ0EsTUFBQSxDQUdGLDZCQUNFLGlCQUFBLENBR0Ysb0NBQ0UsbUJBQUEsQ0FHRixxQ0FDRSxxQkFBQSxDQUdGLDhCQUVFLG9CQUFBLENBREEsY0FDQSxDQUFBLENBSUoseUJBQ0UsNkJBQ0UsY0FBQSxDQUdGLG9DQUVFLGlCQUFBLENBREEsWUFDQSxDQUdGLDZCQUVFLFNBQUEsQ0FEQSxRQUNBLENBR0YsNEJBQ0UsV0FBQSxDQUNBLFNBQUEsQ0FHRixnQ0FDRSxjQUFBLENBR0YsNkJBQ0Usa0JBQUEsQ0FHRixvQ0FFRSxzQkFBQSxDQURBLFVBQ0EsQ0FBQSxDQUtKLHVDQUNFLGtFQUVFLGVBQUEsQ0FHRiw4RUFFRSxjQUFBLENBQUEsQ0FLSiwrQkFDRSwrQkFDRSx5QkFBQSxDQUdGLGdDQUNFLHFCQUFBLENBQUEiLCJmaWxlIjoiQW5ub3VuY2VtZW50RGV0YWlsLm1vZHVsZS5jc3MifQ== */", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  announcementDetailContainer_d789b0f1: "announcementDetailContainer_d789b0f1_a910cbc0",
  loading_d789b0f1: "loading_d789b0f1_a910cbc0",
  spinner_d789b0f1: "spinner_d789b0f1_a910cbc0",
  spin_d789b0f1: "spin_d789b0f1_a910cbc0",
  breadcrumbWrapper_d789b0f1: "breadcrumbWrapper_d789b0f1_a910cbc0",
  pageHeader_d789b0f1: "pageHeader_d789b0f1_a910cbc0",
  pageTitle_d789b0f1: "pageTitle_d789b0f1_a910cbc0",
  heroSection_d789b0f1: "heroSection_d789b0f1_a910cbc0",
  heroImageWrapper_d789b0f1: "heroImageWrapper_d789b0f1_a910cbc0",
  heroImage_d789b0f1: "heroImage_d789b0f1_a910cbc0",
  heroOverlay_d789b0f1: "heroOverlay_d789b0f1_a910cbc0",
  heroBadge_d789b0f1: "heroBadge_d789b0f1_a910cbc0",
  heroMeta_d789b0f1: "heroMeta_d789b0f1_a910cbc0",
  heroDate_d789b0f1: "heroDate_d789b0f1_a910cbc0",
  contentWrapper_d789b0f1: "contentWrapper_d789b0f1_a910cbc0",
  contentContainer_d789b0f1: "contentContainer_d789b0f1_a910cbc0",
  textSection_d789b0f1: "textSection_d789b0f1_a910cbc0",
  sectionHeading_d789b0f1: "sectionHeading_d789b0f1_a910cbc0",
  paragraph_d789b0f1: "paragraph_d789b0f1_a910cbc0",
  quoteSection_d789b0f1: "quoteSection_d789b0f1_a910cbc0",
  quoteIcon_d789b0f1: "quoteIcon_d789b0f1_a910cbc0",
  quoteText_d789b0f1: "quoteText_d789b0f1_a910cbc0",
  quoteAuthor_d789b0f1: "quoteAuthor_d789b0f1_a910cbc0",
  navigationSection_d789b0f1: "navigationSection_d789b0f1_a910cbc0",
  backToListButton_d789b0f1: "backToListButton_d789b0f1_a910cbc0",
  notFound_d789b0f1: "notFound_d789b0f1_a910cbc0",
  backButton_d789b0f1: "backButton_d789b0f1_a910cbc0"
});


/***/ }),

/***/ 27147:
/*!*************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/components/Badge.module.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".badge_6dde0b79_abbe2070{border-radius:0;display:inline-block;font-family:Druk Text Trial,sans-serif;font-size:.75rem;font-weight:700;letter-spacing:.5px;line-height:1;padding:.5rem 1rem;text-align:center;text-transform:uppercase;transition:all .2s ease;vertical-align:baseline;white-space:nowrap}.primary_6dde0b79_abbe2070{background-color:#ff6b35;color:#fff}.secondary_6dde0b79_abbe2070{background-color:#6c757d;color:#fff}.success_6dde0b79_abbe2070{background-color:#28a745;color:#fff}.warning_6dde0b79_abbe2070{background-color:#ffc107;color:#212529}.danger_6dde0b79_abbe2070{background-color:#dc3545;color:#fff}.small_6dde0b79_abbe2070{font-size:.625rem;padding:.25rem .625rem}.medium_6dde0b79_abbe2070{font-size:.75rem;padding:.375rem .875rem}.large_6dde0b79_abbe2070{font-size:.875rem;padding:.5rem 1rem}.badge_6dde0b79_abbe2070:focus{outline:2px solid currentColor;outline-offset:2px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvU3VqYXkvUmVhY3RTaGFyZXBvaW50L3NyYy93ZWJwYXJ0cy9hbm5vdW5jZW1lbnREZXRhaWxQYWdlL2NvbXBvbmVudHMvQmFkZ2UubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBU0UsZUFBQSxDQVJBLG9CQUFBLENBWUEsc0NBQUEsQ0FWQSxnQkFBQSxDQUNBLGVBQUEsQ0FPQSxtQkFBQSxDQU5BLGFBQUEsQ0FIQSxrQkFBQSxDQUlBLGlCQUFBLENBSUEsd0JBQUEsQ0FFQSx1QkFBQSxDQUpBLHVCQUFBLENBREEsa0JBTUEsQ0FJRiwyQkFDRSx3QkFBQSxDQUNBLFVBQUEsQ0FHRiw2QkFDRSx3QkFBQSxDQUNBLFVBQUEsQ0FHRiwyQkFDRSx3QkFBQSxDQUNBLFVBQUEsQ0FHRiwyQkFDRSx3QkFBQSxDQUNBLGFBQUEsQ0FHRiwwQkFDRSx3QkFBQSxDQUNBLFVBQUEsQ0FJRix5QkFFRSxpQkFBQSxDQURBLHNCQUNBLENBR0YsMEJBRUUsZ0JBQUEsQ0FEQSx1QkFDQSxDQUdGLHlCQUVFLGlCQUFBLENBREEsa0JBQ0EsQ0FJRiwrQkFDRSw4QkFBQSxDQUNBLGtCQUFBIiwiZmlsZSI6IkJhZGdlLm1vZHVsZS5jc3MifQ== */", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  badge_6dde0b79: "badge_6dde0b79_abbe2070",
  primary_6dde0b79: "primary_6dde0b79_abbe2070",
  secondary_6dde0b79: "secondary_6dde0b79_abbe2070",
  success_6dde0b79: "success_6dde0b79_abbe2070",
  warning_6dde0b79: "warning_6dde0b79_abbe2070",
  danger_6dde0b79: "danger_6dde0b79_abbe2070",
  small_6dde0b79: "small_6dde0b79_abbe2070",
  medium_6dde0b79: "medium_6dde0b79_abbe2070",
  large_6dde0b79: "large_6dde0b79_abbe2070"
});


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
/* harmony import */ var _pnp_graph_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/graph/users */ 13071);








var _sp;
var _graph;
function initPnp(context) {
    _sp = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.spfi)().using((0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.SPFx)(context));
}
function initGraph(context) {
    _graph = (0,_pnp_graph__WEBPACK_IMPORTED_MODULE_1__.graphfi)().using((0,_pnp_graph__WEBPACK_IMPORTED_MODULE_1__.SPFx)(context));
}
var sp = new Proxy({}, {
    get: function (_target, prop) {
        if (!_sp)
            throw new Error("PnP SP not initialized — call initPnp(context) in onInit");
        return _sp[prop];
    },
});
var graph = new Proxy({}, {
    get: function (_target, prop) {
        if (!_graph)
            throw new Error("PnP Graph not initialized — call initGraph(context) in onInit");
        return _graph[prop];
    },
});


/***/ }),

/***/ 79940:
/*!******************************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/components/AnnouncementDetail.module.scss.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
__webpack_require__(/*! ./AnnouncementDetail.module.css */ 92456);
var styles = {
    announcementDetailContainer: 'announcementDetailContainer_d789b0f1',
    loading: 'loading_d789b0f1',
    spinner: 'spinner_d789b0f1',
    spin: 'spin_d789b0f1',
    breadcrumbWrapper: 'breadcrumbWrapper_d789b0f1',
    pageHeader: 'pageHeader_d789b0f1',
    pageTitle: 'pageTitle_d789b0f1',
    heroSection: 'heroSection_d789b0f1',
    heroImageWrapper: 'heroImageWrapper_d789b0f1',
    heroImage: 'heroImage_d789b0f1',
    heroOverlay: 'heroOverlay_d789b0f1',
    heroBadge: 'heroBadge_d789b0f1',
    heroMeta: 'heroMeta_d789b0f1',
    heroDate: 'heroDate_d789b0f1',
    contentWrapper: 'contentWrapper_d789b0f1',
    contentContainer: 'contentContainer_d789b0f1',
    textSection: 'textSection_d789b0f1',
    sectionHeading: 'sectionHeading_d789b0f1',
    paragraph: 'paragraph_d789b0f1',
    quoteSection: 'quoteSection_d789b0f1',
    quoteIcon: 'quoteIcon_d789b0f1',
    quoteText: 'quoteText_d789b0f1',
    quoteAuthor: 'quoteAuthor_d789b0f1',
    navigationSection: 'navigationSection_d789b0f1',
    backToListButton: 'backToListButton_d789b0f1',
    notFound: 'notFound_d789b0f1',
    backButton: 'backButton_d789b0f1'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ 89935:
/*!********************************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/components/AnnouncementDetailWithSharePoint.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnouncementDetailWithSharePoint: () => (/* binding */ AnnouncementDetailWithSharePoint)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 74708);
/* harmony import */ var _utils_announcementHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/announcementHelpers */ 62213);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge */ 86579);
/* harmony import */ var _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnouncementDetail.module.scss */ 79940);
/* harmony import */ var _services_pnpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/pnpClient */ 26852);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
};






var AnnouncementDetailWithSharePoint = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? "/announcements" : _b, _c = _a.useSharePoint, useSharePoint = _c === void 0 ? true : _c;
    var slug = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)().slug;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    var _d = react__WEBPACK_IMPORTED_MODULE_0__.useState(null), announcement = _d[0], setAnnouncement = _d[1];
    var _e = react__WEBPACK_IMPORTED_MODULE_0__.useState(true), loading = _e[0], setLoading = _e[1];
    var _f = react__WEBPACK_IMPORTED_MODULE_0__.useState(null), error = _f[0], setError = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var loadAnnouncement = function () { return __awaiter(void 0, void 0, void 0, function () {
            var idMatch, id, spItem, items, err_1, err_2, titleFromSlug, items, err_3, transformed, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 15, 16, 17]);
                        setLoading(true);
                        setError(null);
                        if (!useSharePoint) return [3 /*break*/, 13];
                        idMatch = slug.match(/-(\d+)$/);
                        id = idMatch ? parseInt(idMatch[1], 10) : null;
                        spItem = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _services_pnpClient__WEBPACK_IMPORTED_MODULE_3__.sp.web.lists
                                .getByTitle("Announcements")
                                .items.select("ID", "Title", "Description", "Detail", "Category", "Tag", "Date", "Time", "Slug", "Content", "Image", "Modified", "Created")
                                .expand("AttachmentFiles")
                                .filter("Slug eq '".concat(slug, "'"))
                                .top(1)()];
                    case 2:
                        items = _a.sent();
                        if (items && items.length > 0) {
                            spItem = items[0];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.warn("Slug field might not exist, trying by ID or title match");
                        return [3 /*break*/, 4];
                    case 4:
                        if (!(!spItem && id)) return [3 /*break*/, 8];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, _services_pnpClient__WEBPACK_IMPORTED_MODULE_3__.sp.web.lists
                                .getByTitle("Announcements")
                                .items.getById(id)
                                .select("ID", "Title", "Description", "Detail", "Category", "Tag", "Date", "Time", "Slug", "Content", "Image", "Modified", "Created")
                                .expand("AttachmentFiles")()];
                    case 6:
                        spItem = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_2 = _a.sent();
                        console.warn("Item not found by ID");
                        return [3 /*break*/, 8];
                    case 8:
                        if (!!spItem) return [3 /*break*/, 12];
                        titleFromSlug = slug
                            .replace(/-(\d+)$/, "")
                            .replace(/-/g, " ");
                        _a.label = 9;
                    case 9:
                        _a.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, _services_pnpClient__WEBPACK_IMPORTED_MODULE_3__.sp.web.lists
                                .getByTitle("Announcements")
                                .items.select("ID", "Title", "Description", "Detail", "Category", "Tag", "Date", "Time", "Slug", "Content", "Image", "Modified", "Created")
                                .expand("AttachmentFiles")
                                .filter("substringof('".concat(titleFromSlug, "', Title)"))
                                .top(1)()];
                    case 10:
                        items = _a.sent();
                        if (items && items.length > 0) {
                            spItem = items[0];
                        }
                        return [3 /*break*/, 12];
                    case 11:
                        err_3 = _a.sent();
                        console.warn("Item not found by title match");
                        return [3 /*break*/, 12];
                    case 12:
                        if (spItem) {
                            transformed = (0,_utils_announcementHelpers__WEBPACK_IMPORTED_MODULE_5__.transformSharePointToAnnouncement)(spItem);
                            setAnnouncement(transformed);
                        }
                        else {
                            setError("Announcement not found");
                        }
                        return [3 /*break*/, 14];
                    case 13:
                        // If not using SharePoint, show error
                        setError("SharePoint integration is required");
                        _a.label = 14;
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        err_4 = _a.sent();
                        console.error("Error loading announcement:", err_4);
                        setError("Failed to load announcement");
                        return [3 /*break*/, 17];
                    case 16:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 17: return [2 /*return*/];
                }
            });
        }); };
        loadAnnouncement();
        window.scrollTo(0, 0);
    }, [slug, useSharePoint]);
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].announcementDetailContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loading },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].spinner }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading announcement..."))));
    }
    if (error || !announcement) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].announcementDetailContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].notFound },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Announcement Not Found"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "The announcement you're looking for doesn't exist or has been removed."),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { onClick: function () { return navigate(basePath); }, className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].backButton }, "Back"))));
    }
    var formatDate = function (dateString) {
        var date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].announcementDetailContainer },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].pageHeader },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].pageTitle },
                announcement.category,
                " / ",
                announcement.title)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].heroSection },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].heroImageWrapper },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: announcement.heroImage, alt: announcement.title, className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].heroImage }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].heroOverlay }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].heroBadge },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_1__.Badge, { text: announcement.tag, variant: 'primary', size: 'medium' })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].heroMeta },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("time", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].heroDate, dateTime: announcement.date }, announcement.time || formatDate(announcement.date))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].contentWrapper },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].contentContainer },
                announcement.content.sections.map(function (section, index) {
                    if (section.type === "text") {
                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: index, className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].textSection, dangerouslySetInnerHTML: { __html: section.content } }));
                    }
                    if (section.type === "quote") {
                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("blockquote", { key: index, className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].quoteSection },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].quoteIcon, "aria-hidden": 'true' }, "\""),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].quoteText }, section.content),
                            section.author && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].quoteAuthor },
                                "\u2014 ",
                                section.author))));
                    }
                    return null;
                }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].navigationSection },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { onClick: function () { return navigate(basePath); }, className: _AnnouncementDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].backToListButton, "aria-label": 'Back to announcements list' },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-hidden": 'true' },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: 'M12.5 15L7.5 10L12.5 5', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' })),
                        "Back"))))));
};


/***/ }),

/***/ 4076:
/*!******************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/components/AnnouncementRouter.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnouncementRouter: () => (/* binding */ AnnouncementRouter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ 20759);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 74708);
/* harmony import */ var _AnnouncementDetailWithSharePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnouncementDetailWithSharePoint */ 89935);



var AnnouncementRouter = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? '/announcements' : _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "/announcements/:slug", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnnouncementDetailWithSharePoint__WEBPACK_IMPORTED_MODULE_1__.AnnouncementDetailWithSharePoint, { basePath: basePath, useSharePoint: true }) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "/announcements", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, { to: "/", replace: true }) }))));
};


/***/ }),

/***/ 86579:
/*!*****************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/components/Badge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.module.scss */ 58927);


var Badge = function (_a) {
    var text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].badge, " ").concat(_Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"][variant], " ").concat(_Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"][size]), role: "status", "aria-label": text }, text));
};


/***/ }),

/***/ 58927:
/*!*****************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/components/Badge.module.scss.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
__webpack_require__(/*! ./Badge.module.css */ 27147);
var styles = {
    badge: 'badge_6dde0b79',
    primary: 'primary_6dde0b79',
    secondary: 'secondary_6dde0b79',
    success: 'success_6dde0b79',
    warning: 'warning_6dde0b79',
    danger: 'danger_6dde0b79',
    small: 'small_6dde0b79',
    medium: 'medium_6dde0b79',
    large: 'large_6dde0b79'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ 62213:
/*!**************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/utils/announcementHelpers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTimeAgo: () => (/* binding */ calculateTimeAgo),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   generateSlug: () => (/* binding */ generateSlug),
/* harmony export */   getAnnouncementDetailUrl: () => (/* binding */ getAnnouncementDetailUrl),
/* harmony export */   getAnnouncementDetailUrlById: () => (/* binding */ getAnnouncementDetailUrlById),
/* harmony export */   transformSharePointToAnnouncement: () => (/* binding */ transformSharePointToAnnouncement)
/* harmony export */ });
/**
 * Generates a URL-friendly slug from a title
 * @param title - The announcement title
 * @returns A slugified version of the title
 */
var generateSlug = function (title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .substring(0, 100); // Limit length
};
/**
 * Transforms SharePoint announcement data to IAnnouncement format
 * @param spItem - SharePoint list item
 * @returns IAnnouncement object
 */
var transformSharePointToAnnouncement = function (spItem) {
    // Generate slug from title or use ID
    var slug = spItem.Slug || generateSlug(spItem.Title) || "announcement-".concat(spItem.ID);
    // Get image URL
    var heroImage = '';
    if (spItem.AttachmentFiles && spItem.AttachmentFiles.length > 0) {
        heroImage = spItem.AttachmentFiles[0].ServerRelativeUrl;
    }
    else if (spItem.Image) {
        try {
            var imageData = JSON.parse(spItem.Image);
            heroImage = imageData.serverRelativeUrl;
        }
        catch (_a) {
            // Fallback if parsing fails
            heroImage = '';
        }
    }
    // Parse content sections - prefer Detail field over Description
    var contentSections = [];
    var detailContent = spItem.Detail || spItem.Description;
    if (spItem.Content) {
        try {
            var parsedContent = JSON.parse(spItem.Content);
            contentSections = parsedContent.sections || [];
        }
        catch (_b) {
            // If Content field can't be parsed, use Detail or Description
            if (detailContent) {
                contentSections = [
                    {
                        type: 'text',
                        content: detailContent
                    }
                ];
            }
        }
    }
    else if (detailContent) {
        contentSections = [
            {
                type: 'text',
                content: detailContent
            }
        ];
    }
    // Calculate time ago
    var timeAgo = calculateTimeAgo(spItem.Modified || spItem.Created);
    return {
        id: spItem.ID,
        slug: slug,
        title: spItem.Title,
        description: spItem.Description || '',
        category: spItem.Category || 'General',
        tag: spItem.Tag || 'ANNOUNCEMENT',
        date: spItem.Date || spItem.Modified || spItem.Created,
        time: spItem.Time || timeAgo,
        heroImage: heroImage || '',
        content: {
            sections: contentSections
        }
    };
};
/**
 * Calculates human-readable time ago from a date string
 * @param dateString - ISO date string
 * @returns Human-readable time ago (e.g., "2 hours ago")
 */
var calculateTimeAgo = function (dateString) {
    var date = new Date(dateString);
    var now = new Date();
    var seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    var intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };
    if (seconds < 60) {
        return 'just now';
    }
    for (var _i = 0, _a = Object.entries(intervals); _i < _a.length; _i++) {
        var _b = _a[_i], unit = _b[0], secondsInUnit = _b[1];
        var interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return "".concat(interval, " ").concat(unit).concat(interval > 1 ? 's' : '', " ago");
        }
    }
    return 'just now';
};
/**
 * Formats a date string to a readable format
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
var formatDate = function (dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
/**
 * Gets the announcement detail page URL
 * @param slug - The announcement slug
 * @param basePath - The base path for announcements
 * @returns The full URL for the announcement detail page
 */
var getAnnouncementDetailUrl = function (slug, basePath) {
    if (basePath === void 0) { basePath = '/announcements'; }
    return "".concat(basePath, "/").concat(slug);
};
/**
 * Gets the announcement detail page URL using ID (fallback)
 * @param id - The announcement ID
 * @param title - The announcement title (optional, for generating slug)
 * @param basePath - The base path for announcements
 * @returns The full URL for the announcement detail page
 */
var getAnnouncementDetailUrlById = function (id, title, basePath) {
    if (basePath === void 0) { basePath = '/announcements'; }
    var slug = title ? generateSlug(title) : "announcement-".concat(id);
    return "".concat(basePath, "/").concat(slug);
};


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

/***/ 73231:
/*!*******************************************************!*\
  !*** ./node_modules/@remix-run/router/dist/router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* binding */ AbortedDeferredError),
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   IDLE_BLOCKER: () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   IDLE_FETCHER: () => (/* binding */ IDLE_FETCHER),
/* harmony export */   IDLE_NAVIGATION: () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   UNSAFE_DEFERRED_SYMBOL: () => (/* binding */ UNSAFE_DEFERRED_SYMBOL),
/* harmony export */   UNSAFE_DeferredData: () => (/* binding */ DeferredData),
/* harmony export */   UNSAFE_ErrorResponseImpl: () => (/* binding */ ErrorResponseImpl),
/* harmony export */   UNSAFE_convertRouteMatchToUiMatch: () => (/* binding */ convertRouteMatchToUiMatch),
/* harmony export */   UNSAFE_convertRoutesToDataRoutes: () => (/* binding */ convertRoutesToDataRoutes),
/* harmony export */   UNSAFE_decodePath: () => (/* binding */ decodePath),
/* harmony export */   UNSAFE_getResolveToMatches: () => (/* binding */ getResolveToMatches),
/* harmony export */   UNSAFE_invariant: () => (/* binding */ invariant),
/* harmony export */   UNSAFE_warning: () => (/* binding */ warning),
/* harmony export */   createBrowserHistory: () => (/* binding */ createBrowserHistory),
/* harmony export */   createHashHistory: () => (/* binding */ createHashHistory),
/* harmony export */   createMemoryHistory: () => (/* binding */ createMemoryHistory),
/* harmony export */   createPath: () => (/* binding */ createPath),
/* harmony export */   createRouter: () => (/* binding */ createRouter),
/* harmony export */   createStaticHandler: () => (/* binding */ createStaticHandler),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   defer: () => (/* binding */ defer),
/* harmony export */   generatePath: () => (/* binding */ generatePath),
/* harmony export */   getStaticContextFromError: () => (/* binding */ getStaticContextFromError),
/* harmony export */   getToPathname: () => (/* binding */ getToPathname),
/* harmony export */   isDataWithResponseInit: () => (/* binding */ isDataWithResponseInit),
/* harmony export */   isDeferredData: () => (/* binding */ isDeferredData),
/* harmony export */   isRouteErrorResponse: () => (/* binding */ isRouteErrorResponse),
/* harmony export */   joinPaths: () => (/* binding */ joinPaths),
/* harmony export */   json: () => (/* binding */ json),
/* harmony export */   matchPath: () => (/* binding */ matchPath),
/* harmony export */   matchRoutes: () => (/* binding */ matchRoutes),
/* harmony export */   normalizePathname: () => (/* binding */ normalizePathname),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   redirectDocument: () => (/* binding */ redirectDocument),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   resolveTo: () => (/* binding */ resolveTo),
/* harmony export */   stripBasename: () => (/* binding */ stripBasename)
/* harmony export */ });
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation
  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    // Hash URL should always have a leading / just like window.location.pathname
    // does, so if an app ends up at a route like /#something then we add a
    // leading slash so all of our path-matching behaves the same as if it would
    // in a browser router.  This is particularly important when there exists a
    // root splat route (<Route path="*">) since that matches internally against
    // "/*" and we'd expect /#something to 404 in a hash router app.
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    // Treating this as a full URL will strip any trailing spaces so we need to
    // pre-encode them since they might be part of a matching splat param from
    // an ancestor route
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: undefined
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/v6/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded, allowPartial);
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname, allowPartial) {
  if (allowPartial === void 0) {
    allowPartial = false;
  }
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: false
      }, remainingPathname);
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/v6/utils/generate-path
 */
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }
  // ensure `/` is added at the beginning if the path is absolute
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = p => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    // only apply the splat if it's the last segment
    if (isLastSegment && segment === "*") {
      const star = "*";
      // Apply the splat
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
      return stringify(param);
    }
    // Remove any optional markers from optional static segments
    return segment.replace(/\?$/g, "");
  })
  // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/v6/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = undefined;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map(v => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
const ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const isAbsoluteUrl = url => ABSOLUTE_URL_REGEX$1.test(url);
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/v6/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname;
  if (toPathname) {
    if (isAbsoluteUrl(toPathname)) {
      pathname = toPathname;
    } else {
      if (toPathname.includes("//")) {
        let oldPathname = toPathname;
        toPathname = toPathname.replace(/\/\/+/g, "/");
        warning(false, "Pathnames cannot have embedded double slashes - normalizing " + (oldPathname + " -> " + toPathname));
      }
      if (toPathname.startsWith("/")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    }
  } else {
    pathname = fromPathname;
  }
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
  // match so we include splat values for "." links.  See:
  // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map(match => match.pathnameBase);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    // With relative="route" (the default), each leading .. segment means
    // "go up one route" instead of "go up one URL segment".  This is a key
    // difference from how <a href> works and a major reason we call this a
    // "to" value instead of a "href".
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 *
 * @deprecated The `json` method is deprecated in favor of returning raw objects.
 * This method will be removed in v7.
 */
const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class DataWithResponseInit {
  constructor(data, init) {
    this.type = "DataWithResponseInit";
    this.data = data;
    this.init = init || null;
  }
}
/**
 * Create "responses" that contain `status`/`headers` without forcing
 * serialization into an actual `Response` - used by Remix single fetch
 */
function data(data, init) {
  return new DataWithResponseInit(data, typeof init === "number" ? {
    status: init
  } : init);
}
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    // Set up an AbortController + Promise we can race against to exit early
    // cancellation
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject
    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, undefined, data), error => this.onSettle(promise, key, error));
    // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values
    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }
    // If the promise was resolved/rejected with undefined, we'll throw an error as you
    // should always resolve with a value or null
    if (error === undefined && data === undefined) {
      let undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === undefined) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);
          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref3) => {
      let [key, value] = _ref3;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
/**
 * @deprecated The `defer` method is deprecated in favor of returning raw
 * objects. This method will be removed in v7.
 */
const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
/**
 * A redirect response that will perform a `history.replaceState` instead of a
 * `history.pushState` for client-side navigation redirects.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const replace = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Replace", "true");
  return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = route => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Routes keyed by ID
  let manifest = {};
  // Routes in tree format for matching
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
  let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
  // Config driven behavior flags
  let future = _extends({
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: false,
    v7_partialHydration: false,
    v7_prependBasename: false,
    v7_relativeSplatPath: false,
    v7_skipActionErrorRevalidation: false
  }, init.future);
  // Cleanup function for history
  let unlistenHistory = null;
  // Externally-provided functions to call on all state changes
  let subscribers = new Set();
  // Externally-provided object to hold scroll restoration locations during routing
  let savedScrollPositions = null;
  // Externally-provided function to get scroll restoration keys
  let getScrollRestorationKey = null;
  // Externally-provided function to get current scroll position
  let getScrollPosition = null;
  // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialMatchesIsFOW = false;
  let initialErrors = null;
  if (initialMatches == null && !patchRoutesOnNavigationImpl) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  // In SPA apps, if the user provided a patchRoutesOnNavigation implementation and
  // our initial match is a splat route, clear them out so we run through lazy
  // discovery on hydration in case there's a more accurate lazy route match.
  // In SSR apps (with `hydrationData`), we expect that the server will send
  // up the proper matched routes so we don't want to run lazy discovery on
  // initial hydration and want to hydrate into the splat route.
  if (initialMatches && !init.hydrationData) {
    let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
    if (fogOfWar.active) {
      initialMatches = null;
    }
  }
  let initialized;
  if (!initialMatches) {
    initialized = false;
    initialMatches = [];
    // If partial hydration and fog of war is enabled, we will be running
    // `patchRoutesOnNavigation` during hydration so include any partial matches as
    // the initial matches so we can properly render `HydrateFallback`'s
    if (future.v7_partialHydration) {
      let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
      if (fogOfWar.active && fogOfWar.matches) {
        initialMatchesIsFOW = true;
        initialMatches = fogOfWar.matches;
      }
    }
  } else if (initialMatches.some(m => m.route.lazy)) {
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    initialized = false;
  } else if (!initialMatches.some(m => m.route.loader)) {
    // If we've got no loaders to run, then we're good to go
    initialized = true;
  } else if (future.v7_partialHydration) {
    // If partial hydration is enabled, we're initialized so long as we were
    // provided with hydrationData for every route with a loader, and no loaders
    // were marked for explicit hydration
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    // If errors exist, don't consider routes below the boundary
    if (errors) {
      let idx = initialMatches.findIndex(m => errors[m.route.id] !== undefined);
      initialized = initialMatches.slice(0, idx + 1).every(m => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    } else {
      initialized = initialMatches.every(m => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    }
  } else {
    // Without partial hydration - we're initialized if we were provided any
    // hydrationData - which is expected to be complete
    initialized = init.hydrationData != null;
  }
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  };
  // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)
  let pendingAction = Action.Pop;
  // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?
  let pendingPreventScrollReset = false;
  // AbortController for the active navigation
  let pendingNavigationController;
  // Should the current navigation enable document.startViewTransition?
  let pendingViewTransitionEnabled = false;
  // Store applied view transitions so we can apply them on POP
  let appliedViewTransitions = new Map();
  // Cleanup function for persisting applied transitions to sessionStorage
  let removePageHideEventListener = null;
  // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted
  let isUninterruptedRevalidation = false;
  // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidator()
  //  - X-Remix-Revalidate (from redirect)
  let isRevalidationRequired = false;
  // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission
  let cancelledDeferredRoutes = [];
  // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation
  let cancelledFetcherLoads = new Set();
  // AbortControllers for any in-flight fetchers
  let fetchControllers = new Map();
  // Track loads based on the order in which they started
  let incrementingLoadId = 0;
  // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation
  let pendingNavigationLoadId = -1;
  // Fetchers that triggered data reloads as a result of their actions
  let fetchReloadIds = new Map();
  // Fetchers that triggered redirect navigations
  let fetchRedirectIds = new Set();
  // Most recent href/match for fetcher.load calls for fetchers
  let fetchLoadMatches = new Map();
  // Ref-count mounted fetchers so we know when it's ok to clean them up
  let activeFetchers = new Map();
  // Fetchers that have requested a delete when using v7_fetcherPersist,
  // they'll be officially removed after they return to idle
  let deletedFetchers = new Set();
  // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.
  let activeDeferreds = new Map();
  // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change
  let blockerFunctions = new Map();
  // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state
  let unblockBlockerHistoryUpdate = undefined;
  // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();
  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (unblockBlockerHistoryUpdate) {
        unblockBlockerHistoryUpdate();
        unblockBlockerHistoryUpdate = undefined;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        let nextHistoryUpdatePromise = new Promise(resolve => {
          unblockBlockerHistoryUpdate = resolve;
        });
        init.history.go(delta * -1);
        // Put the blocker into a blocked state
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            });
            // Re-do the same POP navigation we just blocked, after the url
            // restoration is also complete.  See:
            // https://github.com/remix-run/react-router/issues/11613
            nextHistoryUpdatePromise.then(() => init.history.go(delta));
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser) {
      // FIXME: This feels gross.  How can we cleanup the lines between
      // scrollRestoration/appliedTransitions persistance?
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location, {
        initialHydration: true
      });
    }
    return router;
  }
  // Clean up a router and it's side effects
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  // Subscribe to state updates for the router
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  // Update our state and notify the calling context of the change
  function updateState(newState, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state = _extends({}, state, newState);
    // Prep fetcher cleanup so we can tell the UI which fetcher data entries
    // can be removed
    let completedFetchers = [];
    let deletedFetchersKeys = [];
    if (future.v7_fetcherPersist) {
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (deletedFetchers.has(key)) {
            // Unmounted from the UI and can be totally removed
            deletedFetchersKeys.push(key);
          } else {
            // Returned to idle but still mounted in the UI, so semi-remains for
            // revalidations and such
            completedFetchers.push(key);
          }
        }
      });
    }
    // Remove any lingering deleted fetchers that have already been removed
    // from state.fetchers
    deletedFetchers.forEach(key => {
      if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
        deletedFetchersKeys.push(key);
      }
    });
    // Iterate over a local copy so that if flushSync is used and we end up
    // removing and adding a new subscriber due to the useCallback dependencies,
    // we don't get ourselves into a loop calling the new subscriber immediately
    [...subscribers].forEach(subscriber => subscriber(state, {
      deletedFetchers: deletedFetchersKeys,
      viewTransitionOpts: opts.viewTransitionOpts,
      flushSync: opts.flushSync === true
    }));
    // Remove idle fetchers from state since we only care about in-flight fetchers.
    if (future.v7_fetcherPersist) {
      completedFetchers.forEach(key => state.fetchers.delete(key));
      deletedFetchersKeys.forEach(key => deleteFetcher(key));
    } else {
      // We already called deleteFetcher() on these, can remove them from this
      // Set now that we've handed the keys off to the data layer
      deletedFetchersKeys.forEach(key => deletedFetchers.delete(key));
    }
  }
  // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState
  function completeNavigation(location, newState, _temp) {
    var _location$state, _location$state2;
    let {
      flushSync
    } = _temp === void 0 ? {} : _temp;
    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    }
    // Always preserve any existing loaderData from re-used routes
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    // On a successful navigation we can assume we got through all blockers
    // so we can start fresh
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    // Commit any in-flight routes at the end of the HMR revalidation "navigation"
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }
    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    // On POP, enable transitions if they were enabled on the original navigation
    if (pendingAction === Action.Pop) {
      // Forward takes precedence so they behave like the original navigation
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        // If we don't have a previous forward nav, assume we're popping back to
        // the new location and enable if that location previously enabled
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      // Store the applied transition on PUSH/REPLACE
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), {
      viewTransitionOpts,
      flushSync: flushSync === true
    });
    // Reset stateful navigation vars
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
  }
  // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let flushSync = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          });
          // Send the same navigation through
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync
    });
  }
  // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders
    if (state.navigation.state === "submitting") {
      return;
    }
    // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation,
      // Proxy through any rending view transition
      enableViewTransition: pendingViewTransitionEnabled === true
    });
  }
  // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation
  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = opts != null && opts.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ?
    // `matchRoutes()` has already been called if we're in here via `router.initialize()`
    state.matches : matchRoutes(routesToUse, location, basename);
    let flushSync = (opts && opts.flushSync) === true;
    // Short circuit if it's only a hash change and not a revalidation or
    // mutation submission.
    //
    // Ignore on initial page loads because since the initial hydration will always
    // be "same hash".  For example, on /page#hash and submit a <Form method="post">
    // which will default to a navigation to /page
    if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      }, {
        flushSync
      });
      return;
    }
    let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    // Short circuit with a 404 on the root error boundary if we match nothing
    if (!matches) {
      let {
        error,
        notFoundMatches,
        route
      } = handleNavigational404(location.pathname);
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      }, {
        flushSync
      });
      return;
    }
    // Create a controller/Request for this navigation
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionResult;
    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingActionResult = [findNearestBoundary(matches).route.id, {
        type: ResultType.error,
        error: opts.pendingError
      }];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionResult = await handleAction(request, location, opts.submission, matches, fogOfWar.active, {
        replace: opts.replace,
        flushSync
      });
      if (actionResult.shortCircuited) {
        return;
      }
      // If we received a 404 from handleAction, it's because we couldn't lazily
      // discover the destination route so we don't want to call loaders
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync = false;
      // No need to do fog of war matching again on loader execution
      fogOfWar.active = false;
      // Create a GET request for the loaders
      request = createClientSideRequest(init.history, request.url, request.signal);
    }
    // Call loaders
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
    if (shortCircuited) {
      return;
    }
    // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches: updatedMatches || matches
    }, getActionDataForCommit(pendingActionResult), {
      loaderData,
      errors
    }));
  }
  // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors
  async function handleAction(request, location, submission, matches, isFogOfWar, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    // Put us in a submitting state
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    }, {
      flushSync: opts.flushSync === true
    });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return {
          shortCircuited: true
        };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [boundaryId, {
            type: ResultType.error,
            error: discoverResult.error
          }]
        };
      } else if (!discoverResult.matches) {
        let {
          notFoundMatches,
          error,
          route
        } = handleNavigational404(location.pathname);
        return {
          matches: notFoundMatches,
          pendingActionResult: [route.id, {
            type: ResultType.error,
            error
          }]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    // Call our action and get the result
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy("action", state, request, [actionMatch], matches, null);
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        let location = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename, init.history);
        replace = location === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      // By default, all submissions to the current location are REPLACE
      // navigations, but if the action threw an error that'll be rendered in
      // an errorElement, we fall back to PUSH so that the user can use the
      // back button to get back to the pre-submission form location to try
      // again
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        matches,
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.
  async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)
    // If we have partialHydration enabled, then don't update the state for the
    // initial data load since it's not a "navigation"
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration);
    // When fog of war is enabled, we enter our `loading` state earlier so we
    // can discover new routes during the `loading` state.  We skip this if
    // we've already run actions since we would have done our matching already.
    // If the children() function threw then, we want to proceed with the
    // partial matches it discovered.
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState(_extends({
          navigation: loadingNavigation
        }, actionData !== undefined ? {
          actionData
        } : {}), {
          flushSync
        });
      }
      let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return {
          shortCircuited: true
        };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let {
          error,
          notFoundMatches,
          route
        } = handleNavigational404(location.pathname);
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
    // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op
    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    // Short circuit if we have no loaders to run
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null
      }, getActionDataForCommit(pendingActionResult), updatedFetchers ? {
        fetchers: new Map(state.fetchers)
      } : {}), {
        flushSync
      });
      return {
        shortCircuited: true
      };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        // Only update navigation/actionNData if we didn't already do it above
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== undefined) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, {
        flushSync
      });
    }
    revalidatingFetchers.forEach(rf => {
      abortFetcher(rf.key);
      if (rf.controller) {
        // Fetchers use an independent AbortController so that aborting a fetcher
        // (via deleteFetcher) does not abort the triggering navigation that
        // triggered the revalidation
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    // Proxy navigation abort through to revalidation fetchers
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(f => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key));
    // If any loaders returned a redirect Response, start a new REPLACE navigation
    let redirect = findRedirect(loaderResults);
    if (redirect) {
      await startRedirectNavigation(request, redirect.result, true, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    redirect = findRedirect(fetcherResults);
    if (redirect) {
      // If this redirect came from a fetcher make sure we mark it in
      // fetchRedirectIds so it doesn't get revalidated on the next set of
      // loader executions
      fetchRedirectIds.add(redirect.key);
      await startRedirectNavigation(request, redirect.result, true, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Wire up subscribers to update loaderData as promises settle
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    // Preserve SSR errors during partial hydration
    if (future.v7_partialHydration && initialHydration && state.errors) {
      errors = _extends({}, state.errors, errors);
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      matches,
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      // This is cast to `any` currently because `RouteData`uses any and it
      // would be a breaking change to use any.
      // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach(rf => {
      let fetcher = state.fetchers.get(rf.key);
      let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
      state.fetchers.set(rf.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  // Trigger a fetcher load/submit for the given fetcher key
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }
    abortFetcher(key);
    let flushSync = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }), {
        flushSync
      });
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error, {
        flushSync
      });
      return;
    }
    let match = getTargetMatch(matches, path);
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
      return;
    }
    // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
  }
  // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation
  async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    function detectAndHandle405Error(m) {
      if (!m.route.action && !m.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId: routeId
        });
        setFetcherError(key, routeId, error, {
          flushSync
        });
        return true;
      }
      return false;
    }
    if (!isFogOfWar && detectAndHandle405Error(match)) {
      return;
    }
    // Put this fetcher into it's submitting state
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, {
          flushSync
        });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, {
          pathname: path
        }), {
          flushSync
        });
        return;
      } else {
        requestMatches = discoverResult.matches;
        match = getTargetMatch(requestMatches, path);
        if (detectAndHandle405Error(match)) {
          return;
        }
      }
    }
    // Call the action for the fetcher
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy("action", state, fetchRequest, [match], requestMatches, key);
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
    // or redirects processed for unmounted fetchers so we just revert them to
    // idle
    if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      }
      // Let SuccessResult's fall through for revalidation
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          // A new navigation was kicked off after our action started, so that
          // should take precedence over this redirect navigation.  We already
          // set isRevalidationRequired so all loaders for the new route should
          // fire unless opted out via shouldRevalidate
          updateFetcherState(key, getDoneFetcher(undefined));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      // Process any non-redirect errors thrown
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [match.route.id, actionResult]);
    // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data
    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(rf => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(loaderResults);
    if (redirect) {
      return startRedirectNavigation(revalidationRequest, redirect.result, false, {
        preventScrollReset
      });
    }
    redirect = findRedirect(fetcherResults);
    if (redirect) {
      // If this redirect came from a fetcher make sure we mark it in
      // fetchRedirectIds so it doesn't get revalidated on the next set of
      // loader executions
      fetchRedirectIds.add(redirect.key);
      return startRedirectNavigation(revalidationRequest, redirect.result, false, {
        preventScrollReset
      });
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Since we let revalidations complete even if the submitting fetcher was
    // deleted, only put it back to idle if it hasn't been deleted
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
  async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, {
          flushSync
        });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, {
          pathname: path
        }), {
          flushSync
        });
        return;
      } else {
        matches = discoverResult.matches;
        match = getTargetMatch(matches, path);
      }
    }
    // Call the loader for this fetcher route match
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy("loader", state, fetchRequest, [match], matches, key);
    let result = results[match.route.id];
    // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens
    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    }
    // We can delete this so long as we weren't aborted by our our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    // We don't want errors bubbling up or redirects followed for unmounted
    // fetchers, so short circuit here if it was removed from the UI
    if (deletedFetchers.has(key)) {
      updateFetcherState(key, getDoneFetcher(undefined));
      return;
    }
    // If the loader threw a redirect Response, start a new REPLACE navigation
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our loader started, so that
        // should take precedence over this redirect navigation
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    // Put the fetcher back into an idle state
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
  async function startRedirectNavigation(request, redirect, isNavigation, _temp2) {
    let {
      submission,
      fetcherSubmission,
      preventScrollReset,
      replace
    } = _temp2 === void 0 ? {} : _temp2;
    if (redirect.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(location, new URL(request.url), basename, init.history);
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect.response.headers.has("X-Remix-Reload-Document")) {
        // Hard reload if the response contained X-Remix-Reload-Document
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload =
        // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin ||
        // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true || redirect.response.headers.has("X-Remix-Replace") ? Action.Replace : Action.Push;
    // Use the incoming submission if provided, fallback on the active one in
    // state.navigation
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: location
        }),
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
      });
    } else {
      // If we have a navigation submission, we will preserve it through the
      // redirect navigation
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
      });
    }
  }
  // Utility wrapper for calling dataStrategy client-side without having to
  // pass around the manifest, mapRouteProperties, etc.
  async function callDataStrategy(type, state, request, matchesToLoad, matches, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties);
    } catch (e) {
      // If the outer dataStrategy method throws, just return the error for all
      // matches - and it'll naturally bubble to the root
      matchesToLoad.forEach(m => {
        dataResults[m.route.id] = {
          type: ResultType.error,
          error: e
        };
      });
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResultResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: ResultType.redirect,
          response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, future.v7_relativeSplatPath)
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(state, matches, matchesToLoad, fetchersToLoad, request) {
    let currentMatches = state.matches;
    // Kick off loaders and fetchers in parallel
    let loaderResultsPromise = callDataStrategy("loader", state, request, matchesToLoad, matches, null);
    let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async f => {
      if (f.matches && f.match && f.controller) {
        let results = await callDataStrategy("loader", state, createClientSideRequest(init.history, f.path, f.controller.signal), [f.match], f.matches, f.key);
        let result = results[f.match.route.id];
        // Fetcher results are keyed by fetcher key from here on out, not routeId
        return {
          [f.key]: result
        };
      } else {
        return Promise.resolve({
          [f.key]: {
            type: ResultType.error,
            error: getInternalRouterError(404, {
              pathname: f.path
            })
          }
        });
      }
    }));
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce((acc, r) => Object.assign(acc, r), {});
    await Promise.all([resolveNavigationDeferredResults(matches, loaderResults, request.signal, currentMatches, state.loaderData), resolveFetcherDeferredResults(matches, fetcherResults, fetchersToLoad)]);
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true;
    // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    // Abort in-flight fetcher loads
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function setFetcherError(key, routeId, error, opts) {
    if (opts === void 0) {
      opts = {};
    }
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function getFetcher(key) {
    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
    // If this fetcher was previously marked for deletion, unmark it since we
    // have a new instance
    if (deletedFetchers.has(key)) {
      deletedFetchers.delete(key);
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    // Don't abort the controller if this is a deletion of a fetcher.submit()
    // in it's loading phase since - we don't want to abort the corresponding
    // revalidation and want them to complete and land
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    // If we opted into the flag we can clear this now since we're calling
    // deleteFetcher() at the end of updateState() and we've already handed the
    // deleted fetcher keys off to the data layer.
    // If not, we're eagerly calling deleteFetcher() and we need to keep this
    // Set populated until the next updateState call, and we'll clear
    // `deletedFetchers` then
    if (future.v7_fetcherPersist) {
      deletedFetchers.delete(key);
    }
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function deleteFetcherAndUpdateState(key) {
    let count = (activeFetchers.get(key) || 0) - 1;
    if (count <= 0) {
      activeFetchers.delete(key);
      deletedFetchers.add(key);
      if (!future.v7_fetcherPersist) {
        deleteFetcher(key);
      }
    } else {
      activeFetchers.set(key, count);
    }
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort();
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  // Utility function to update blockers, ensuring valid state transitions
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0) {
      return;
    }
    // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    }
    // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, {
      pathname
    });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let {
      matches,
      route
    } = getShortCircuitMatches(routesToUse);
    // Cancel all pending deferred on 404s since we don't keep any routes
    cancelActiveDeferreds();
    return {
      notFoundMatches: matches,
      route,
      error
    };
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map(m => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (patchRoutesOnNavigationImpl) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
        return {
          active: true,
          matches: fogMatches || []
        };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          // If we matched a dynamic param or a splat, it might only be because
          // we haven't yet discovered other routes that would match with a
          // higher score.  Call patchRoutesOnNavigation just to be sure
          let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
          return {
            active: true,
            matches: partialMatches
          };
        }
      }
    }
    return {
      active: false,
      matches: null
    };
  }
  async function discoverRoutes(matches, pathname, signal, fetcherKey) {
    if (!patchRoutesOnNavigationImpl) {
      return {
        type: "success",
        matches
      };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await patchRoutesOnNavigationImpl({
          signal,
          path: pathname,
          matches: partialMatches,
          fetcherKey,
          patch: (routeId, children) => {
            if (signal.aborted) return;
            patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties);
          }
        });
      } catch (e) {
        return {
          type: "error",
          error: e,
          partialMatches
        };
      } finally {
        // If we are not in the middle of an HMR revalidation and we changed the
        // routes, provide a new identity so when we `updateState` at the end of
        // this navigation/fetch `router.routes` will be a new identity and
        // trigger a re-run of memoized `router.routes` dependencies.
        // HMR will already update the identity and reflow when it lands
        // `inFlightDataRoutes` in `completeNavigation`
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return {
          type: "aborted"
        };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return {
          type: "success",
          matches: newMatches
        };
      }
      let newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
      // Avoid loops if the second pass results in the same partial matches
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m, i) => m.route.id === newPartialMatches[i].route.id)) {
        return {
          type: "success",
          matches: null
        };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
  }
  function patchRoutes(routeId, children) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties);
    // If we are not in the middle of an HMR revalidation and we changed the
    // routes, provide a new identity and trigger a reflow via `updateState`
    // to re-run memoized `router.routes` dependencies.
    // HMR will already update the identity and reflow when it lands
    // `inFlightDataRoutes` in `completeNavigation`
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: deleteFetcherAndUpdateState,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Config driven behavior flags
  let future = _extends({
    v7_relativeSplatPath: false,
    v7_throwAbortReason: false
  }, opts ? opts.future : null);
  let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */
  async function query(request, _temp3) {
    let {
      requestContext,
      skipLoaderErrorBubbling,
      dataStrategy
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null);
    if (isResponse(result)) {
      return result;
    }
    // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location
    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */
  async function queryRoute(request, _temp4) {
    let {
      routeId,
      requestContext,
      dataStrategy
    } = _temp4 === void 0 ? {} : _temp4;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match);
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : undefined;
    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    }
    // Pick off the right state value to return
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return undefined;
  }
  async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
        return result;
      }
      let result = await loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction for a
      // `queryRoute` call, we throw the `DataStrategyResult` to bail out early
      // and then return or throw the raw Response here accordingly
      if (isDataStrategyResult(e) && isResponse(e.result)) {
        if (e.type === ResultType.error) {
          throw e.result;
        }
        return e.result;
      }
      // Redirects are always returned since they don't propagate to catch
      // boundaries
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      let results = await callDataStrategy("action", request, [actionMatch], matches, isRouteRequest, requestContext, dataStrategy);
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest, future);
      }
    }
    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.response.status,
        headers: {
          Location: result.response.headers.get("Location")
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    // Create a GET request for the loaders
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, [boundaryMatch.route.id, result]);
      // action status codes take precedence over loader status codes
      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    let context = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null);
    return _extends({}, context, {
      actionData: {
        [actionMatch.route.id]: result.data
      }
    }, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionHeaders: result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {}
    });
  }
  async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
    let isRouteRequest = routeMatch != null;
    // Short circuit if we have no loaders to run (queryRoute())
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy);
    // Short circuit if we have no loaders to run (query())
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy);
    if (request.signal.aborted) {
      throwStaticHandlerAbortedError(request, isRouteRequest, future);
    }
    // Process and commit output from loaders
    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
    // Add a null for any non-loader matches for proper revalidation on the client
    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  // Utility wrapper for calling dataStrategy server-side without having to
  // pass around the manifest, mapRouteProperties, etc.
  async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
    let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, type, null, request, matchesToLoad, matches, null, manifest, mapRouteProperties, requestContext);
    let dataResults = {};
    await Promise.all(matches.map(async match => {
      if (!(match.route.id in results)) {
        return;
      }
      let result = results[match.route.id];
      if (isRedirectDataStrategyResultResult(result)) {
        let response = result.result;
        // Throw redirects and let the server handle them with an HTTP redirect
        throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename, future.v7_relativeSplatPath);
      }
      if (isResponse(result.result) && isRouteRequest) {
        // For SSR single-route requests, we want to hand Responses back
        // directly without unwrapping
        throw result;
      }
      dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
    }));
    return dataResults;
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: isRouteErrorResponse(error) ? error.status : 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
  if (future.v7_throwAbortReason && request.signal.reason !== undefined) {
    throw request.signal.reason;
  }
  let method = isRouteRequest ? "queryRoute" : "query";
  throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    // Grab matches up to the calling route so our route-relative logic is
    // relative to the correct source route
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  // Resolve the relative path
  let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  // When `to` is not specified we inherit search/hash from the current
  // location, unlike when to="." and we just inherit the path.
  // See https://github.com/remix-run/remix/issues/927
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  // Account for `?index` params when routing to the current location
  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      // Add one when we're targeting an index route
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      // Remove existing ones when we're not
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter(v => v).forEach(v => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  // If we're operating within a basename, prepend it to the pathname.  If
  // this is a root navigation, then just use the raw basename which allows
  // the basename to have full control over the presence of a trailing slash
  // on root actions
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  // Return location verbatim on non-submission navigations
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  // Create a Submission on non-GET navigations
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== undefined) {
    if (opts.formEncType === "text/plain") {
      // text only support POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ?
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
      Array.from(opts.body.entries()).reduce((acc, _ref3) => {
        let [name, value] = _ref3;
        return "" + acc + name + "=" + value + "\n";
      }, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: undefined,
          json: undefined,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      // json only supports POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json,
            text: undefined
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: undefined,
    text: undefined
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  // Flatten submission onto URLSearchParams for GET submissions
  let parsedPath = parsePath(path);
  // On GET navigation submissions we can drop the ?index param from the
  // resulting location since all loaders will run.  But fetcher GET submissions
  // only run a single loader so we need to preserve any incoming ?index params
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
// Filter out all routes at/below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary) {
  if (includeBoundary === void 0) {
    includeBoundary = false;
  }
  let index = matches.findIndex(m => m.route.id === boundaryId);
  if (index >= 0) {
    return matches.slice(0, includeBoundary ? index + 1 : index);
  }
  return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  // Pick navigation matches that are net-new or qualify for revalidation
  let boundaryMatches = matches;
  if (initialHydration && state.errors) {
    // On initial hydration, only consider matches up to _and including_ the boundary.
    // This is inclusive to handle cases where a server loader ran successfully,
    // a child server loader bubbled up to this route, but this route has
    // `clientLoader.hydrate` so we want to still run the `clientLoader` so that
    // we have a complete version of `loaderData`
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, Object.keys(state.errors)[0], true);
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    // If an action threw an error, we call loaders up to, but not including the
    // boundary
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]);
  }
  // Don't revalidate loaders by default after action 4xx/5xx responses
  // when the flag is enabled.  They can still opt-into revalidation via
  // `shouldRevalidate` via `actionResult`
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
  let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let {
      route
    } = match;
    if (route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (initialHydration) {
      return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    }
    // Always call the loader on new route instances and pending defer cancellations
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    }
    // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false :
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search ||
      // Search params affect all loaders
      currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  });
  // Pick fetcher.loads that need to be revalidated
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate:
    //  - on initial hydration (shouldn't be any fetchers then anyway)
    //  - if fetcher won't be present in the subsequent render
    //    - no longer matches the URL (v7_fetcherPersist=false)
    //    - was unmounted but persisted due to v7_fetcherPersist=true
    if (initialHydration || !matches.some(m => m.route.id === f.routeId) || deletedFetchers.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
    // currently only a use-case for Remix HMR where the route tree can change
    // at runtime and remove a route previously loaded via a fetcher
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    // Revalidating fetchers are decoupled from the route matches since they
    // load from a static href.  They revalidate based on explicit revalidation
    // (submission, useRevalidator, or X-Remix-Revalidate)
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      // Never trigger a revalidation of an actively redirecting fetcher
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.has(key)) {
      // Always mark for revalidation if the fetcher was cancelled
      cancelledFetcherLoads.delete(key);
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
      // If the fetcher hasn't ever completed loading yet, then this isn't a
      // revalidation, it would just be a brand new load if an explicit
      // revalidation is required
      shouldRevalidate = isRevalidationRequired;
    } else {
      // Otherwise fall back on any user-defined shouldRevalidate, defaulting
      // to explicit revalidations only
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  // We dunno if we have a loader - gotta find out!
  if (route.lazy) {
    return true;
  }
  // No loader, nothing to initialize
  if (!route.loader) {
    return false;
  }
  let hasData = loaderData != null && loaderData[route.id] !== undefined;
  let hasError = errors != null && errors[route.id] !== undefined;
  // Don't run if we error'd during SSR
  if (!hasData && hasError) {
    return false;
  }
  // Explicitly opting-in to running on hydration
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  // Otherwise, run if we're not yet initialized with anything
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew =
  // [a] -> [a, b]
  !currentMatch ||
  // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id;
  // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred
  let isMissingData = currentLoaderData[match.route.id] === undefined;
  // Always load if this is a net-new route or we don't yet have data
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname ||
    // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties) {
  var _childrenToPatch;
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(route, "No route found to patch children into: routeId = " + routeId);
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  // Don't patch in routes we already know about so that `patch` is idempotent
  // to simplify user-land code. This is useful because we re-call the
  // `patchRoutesOnNavigation` function for matched routes with params.
  let uniqueChildren = children.filter(newRoute => !childrenToPatch.some(existingRoute => isSameRoute(newRoute, existingRoute)));
  let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties, [routeId || "_", "patch", String(((_childrenToPatch = childrenToPatch) == null ? void 0 : _childrenToPatch.length) || "0")], manifest);
  childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
  // Most optimal check is by id
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  // Second is by pathing differences
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  // Pathless layout routes are trickier since we need to check children.
  // If they have no children then they're the same as far as we can tell
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  // Otherwise, we look to see if every child in the new route is already
  // represented in the existing route's children
  return newRoute.children.every((aChild, i) => {
    var _existingRoute$childr;
    return (_existingRoute$childr = existingRoute.children) == null ? void 0 : _existingRoute$childr.some(bChild => isSameRoute(aChild, bChild));
  });
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined &&
    // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to mapRouteProperties
  Object.assign(routeToUpdate, routeUpdates);
  // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: undefined
  }));
}
// Default implementation of `dataStrategy` which fetches all loaders in parallel
async function defaultDataStrategy(_ref4) {
  let {
    matches
  } = _ref4;
  let matchesToLoad = matches.filter(m => m.shouldLoad);
  let results = await Promise.all(matchesToLoad.map(m => m.resolve()));
  return results.reduce((acc, result, i) => Object.assign(acc, {
    [matchesToLoad[i].route.id]: result
  }), {});
}
async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties, requestContext) {
  let loadRouteDefinitionsPromises = matches.map(m => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties, manifest) : undefined);
  let dsMatches = matches.map((match, i) => {
    let loadRoutePromise = loadRouteDefinitionsPromises[i];
    let shouldLoad = matchesToLoad.some(m => m.route.id === match.route.id);
    // `resolve` encapsulates route.lazy(), executing the loader/action,
    // and mapping return values/thrown errors to a `DataStrategyResult`.  Users
    // can pass a callback to take fine-grained control over the execution
    // of the loader/action
    let resolve = async handlerOverride => {
      if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
        shouldLoad = true;
      }
      return shouldLoad ? callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, requestContext) : Promise.resolve({
        type: ResultType.data,
        result: undefined
      });
    };
    return _extends({}, match, {
      shouldLoad,
      resolve
    });
  });
  // Send all matches here to allow for a middleware-type implementation.
  // handler will be a no-op for unneeded routes and we filter those results
  // back out below.
  let results = await dataStrategyImpl({
    matches: dsMatches,
    request,
    params: matches[0].params,
    fetcherKey,
    context: requestContext
  });
  // Wait for all routes to load here but 'swallow the error since we want
  // it to bubble up from the `await loadRoutePromise` in `callLoaderOrAction` -
  // called from `match.resolve()`
  try {
    await Promise.all(loadRouteDefinitionsPromises);
  } catch (e) {
    // No-op
  }
  return results;
}
// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    // This will never resolve so safe to type it as Promise<DataStrategyResult> to
    // satisfy the function return value
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = ctx => {
      if (typeof handler !== "function") {
        return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ("\"" + type + "\" [routeId: " + match.route.id + "]")));
      }
      return handler({
        request,
        params: match.params,
        context: staticContext
      }, ...(ctx !== undefined ? [ctx] : []));
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride(ctx => actualHandler(ctx)) : actualHandler());
        return {
          type: "data",
          result: val
        };
      } catch (e) {
        return {
          type: "error",
          result: e
        };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    // If we have a route.lazy promise, await that first
    if (loadRoutePromise) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let handlerError;
        let [value] = await Promise.all([
        // If the handler throws, don't let it immediately bubble out,
        // since we need to let the lazy() execution finish so we know if this
        // route has a boundary that can handle the error
        runHandler(handler).catch(e => {
          handlerError = e;
        }), loadRoutePromise]);
        if (handlerError !== undefined) {
          throw handlerError;
        }
        result = value;
      } else {
        // Load lazy route module, then run any returned handler
        await loadRoutePromise;
        handler = match.route[type];
        if (handler) {
          // Handler still runs even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            result: undefined
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    // We should already be catching and converting normal handler executions to
    // DataStrategyResults and returning them, so anything that throws here is an
    // unexpected error we still need to wrap
    return {
      type: ResultType.error,
      result: e
    };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  let {
    result,
    type
  } = dataStrategyResult;
  if (isResponse(result)) {
    let data;
    try {
      let contentType = result.headers.get("Content-Type");
      // Check between word boundaries instead of startsWith() due to the last
      // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data = null;
        } else {
          data = await result.json();
        }
      } else {
        data = await result.text();
      }
    } catch (e) {
      return {
        type: ResultType.error,
        error: e
      };
    }
    if (type === ResultType.error) {
      return {
        type: ResultType.error,
        error: new ErrorResponseImpl(result.status, result.statusText, data),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === ResultType.error) {
    if (isDataWithResponseInit(result)) {
      var _result$init3, _result$init4;
      if (result.data instanceof Error) {
        var _result$init, _result$init2;
        return {
          type: ResultType.error,
          error: result.data,
          statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
          headers: (_result$init2 = result.init) != null && _result$init2.headers ? new Headers(result.init.headers) : undefined
        };
      }
      // Convert thrown data() to ErrorResponse instances
      return {
        type: ResultType.error,
        error: new ErrorResponseImpl(((_result$init3 = result.init) == null ? void 0 : _result$init3.status) || 500, undefined, result.data),
        statusCode: isRouteErrorResponse(result) ? result.status : undefined,
        headers: (_result$init4 = result.init) != null && _result$init4.headers ? new Headers(result.init.headers) : undefined
      };
    }
    return {
      type: ResultType.error,
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : undefined
    };
  }
  if (isDeferredData(result)) {
    var _result$init5, _result$init6;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init5 = result.init) == null ? void 0 : _result$init5.status,
      headers: ((_result$init6 = result.init) == null ? void 0 : _result$init6.headers) && new Headers(result.init.headers)
    };
  }
  if (isDataWithResponseInit(result)) {
    var _result$init7, _result$init8;
    return {
      type: ResultType.data,
      data: result.data,
      statusCode: (_result$init7 = result.init) == null ? void 0 : _result$init7.status,
      headers: (_result$init8 = result.init) != null && _result$init8.headers ? new Headers(result.init.headers) : undefined
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
// Support relative routing in internal redirects
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
  let location = response.headers.get("Location");
  invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1);
    location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename, historyInstance) {
  // Match Chrome's behavior:
  // https://github.com/chromium/chromium/blob/216dbeb61db0c667e62082e5f5400a32d6983df3/content/public/common/url_utils.cc#L82
  let invalidProtocols = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:",
  // eslint-disable-next-line no-script-url
  "javascript:"];
  if (ABSOLUTE_URL_REGEX.test(location)) {
    // Strip off the protocol+origin for same-origin + same-basename absolute redirects
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    if (invalidProtocols.includes(url.protocol)) {
      throw new Error("Invalid redirect location");
    }
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  try {
    let url = historyInstance.createURL(location);
    if (invalidProtocols.includes(url.protocol)) {
      throw new Error("Invalid redirect location");
    }
  } catch (e) {}
  return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
  // Process loader results into state.loaderData/state.errors
  matches.forEach(match => {
    if (!(match.route.id in results)) {
      return;
    }
    let id = match.route.id;
    let result = results[id];
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      let error = result.error;
      // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed
      if (pendingError !== undefined) {
        error = pendingError;
        pendingError = undefined;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        // Look upwards from the matched route for the closest ancestor error
        // boundary, defaulting to the root match.  Prefer higher error values
        // if lower errors bubble to the same boundary
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      // Clear our any prior loaderData for the throwing route
      loaderData[id] = undefined;
      // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
        // Error status codes always override success status codes, but if all
        // loaders are successful we take the deepest status code.
        if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      } else {
        loaderData[id] = result.data;
        // Error status codes always override success status codes, but if all
        // loaders are successful we take the deepest status code.
        if (result.statusCode && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      }
    }
  });
  // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route
  if (pendingError !== undefined && pendingActionResult) {
    errors = {
      [pendingActionResult[0]]: pendingError
    };
    loaderData[pendingActionResult[0]] = undefined;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
  );
  // Process results from our revalidating fetchers
  revalidatingFetchers.forEach(rf => {
    let {
      key,
      match,
      controller
    } = rf;
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    // Process fetcher non-redirect errors
    if (controller && controller.signal.aborted) {
      // Nothing to do for aborted fetchers
      return;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.length === 1 ? routes[0] : routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp5) {
  let {
    pathname,
    routeId,
    method,
    type,
    message
  } = _temp5 === void 0 ? {} : _temp5;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i = entries.length - 1; i >= 0; i--) {
    let [key, result] = entries[i];
    if (isRedirectResult(result)) {
      return {
        key,
        result
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    // /page -> /page#hash
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    // /page#hash -> /page#hash
    return true;
  } else if (b.hash !== "") {
    // /page#hash -> /page#other
    return true;
  }
  // If the hash is removed the browser will re-perform a request to the server
  // /page#hash -> /page
  return false;
}
function isDataStrategyResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
}
function isRedirectDataStrategyResultResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveNavigationDeferredResults(matches, results, signal, currentMatches, currentLoaderData) {
  let entries = Object.entries(results);
  for (let index = 0; index < entries.length; index++) {
    let [routeId, result] = entries[index];
    let match = matches.find(m => (m == null ? void 0 : m.route.id) === routeId);
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
    if (isDeferredResult(result) && isRevalidatingLoader) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, false).then(result => {
        if (result) {
          results[routeId] = result;
        }
      });
    }
  }
}
async function resolveFetcherDeferredResults(matches, results, revalidatingFetchers) {
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      routeId,
      controller
    } = revalidatingFetchers[index];
    let result = results[key];
    let match = matches.find(m => (m == null ? void 0 : m.route.id) === routeId);
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    if (isDeferredResult(result)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      invariant(controller, "Expected an AbortController for revalidating fetcher deferred result");
      await resolveDeferredData(result, controller.signal, true).then(result => {
        if (result) {
          results[key] = result;
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  }
  // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json: undefined,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: undefined,
      text: undefined
    };
  } else if (json !== undefined) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json,
      text: undefined
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : undefined
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
    // no-op, use default empty object
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}
//#endregion




/***/ }),

/***/ 20759:
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.AbortedDeferredError),
/* harmony export */   Await: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Await),
/* harmony export */   BrowserRouter: () => (/* binding */ BrowserRouter),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   HashRouter: () => (/* binding */ HashRouter),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   MemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.MemoryRouter),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   Navigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Action),
/* harmony export */   Outlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Outlet),
/* harmony export */   Route: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Route),
/* harmony export */   Router: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Routes),
/* harmony export */   ScrollRestoration: () => (/* binding */ ScrollRestoration),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext),
/* harmony export */   UNSAFE_ErrorResponseImpl: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl),
/* harmony export */   UNSAFE_FetchersContext: () => (/* binding */ FetchersContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext),
/* harmony export */   UNSAFE_RouteContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext),
/* harmony export */   UNSAFE_ViewTransitionContext: () => (/* binding */ ViewTransitionContext),
/* harmony export */   UNSAFE_useRouteId: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId),
/* harmony export */   UNSAFE_useScrollRestoration: () => (/* binding */ useScrollRestoration),
/* harmony export */   createBrowserRouter: () => (/* binding */ createBrowserRouter),
/* harmony export */   createHashRouter: () => (/* binding */ createHashRouter),
/* harmony export */   createMemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createMemoryRouter),
/* harmony export */   createPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createPath),
/* harmony export */   createRoutesFromChildren: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromElements),
/* harmony export */   createSearchParams: () => (/* binding */ createSearchParams),
/* harmony export */   defer: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.defer),
/* harmony export */   generatePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.generatePath),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.isRouteErrorResponse),
/* harmony export */   json: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.json),
/* harmony export */   matchPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirectDocument),
/* harmony export */   renderMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.renderMatches),
/* harmony export */   replace: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.replace),
/* harmony export */   resolvePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.resolvePath),
/* harmony export */   unstable_HistoryRouter: () => (/* binding */ HistoryRouter),
/* harmony export */   unstable_usePrompt: () => (/* binding */ usePrompt),
/* harmony export */   useActionData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useActionData),
/* harmony export */   useAsyncError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncError),
/* harmony export */   useAsyncValue: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncValue),
/* harmony export */   useBeforeUnload: () => (/* binding */ useBeforeUnload),
/* harmony export */   useBlocker: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker),
/* harmony export */   useFetcher: () => (/* binding */ useFetcher),
/* harmony export */   useFetchers: () => (/* binding */ useFetchers),
/* harmony export */   useFormAction: () => (/* binding */ useFormAction),
/* harmony export */   useHref: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useHref),
/* harmony export */   useInRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useInRouterContext),
/* harmony export */   useLinkClickHandler: () => (/* binding */ useLinkClickHandler),
/* harmony export */   useLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLoaderData),
/* harmony export */   useLocation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation),
/* harmony export */   useMatch: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatch),
/* harmony export */   useMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches),
/* harmony export */   useNavigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate),
/* harmony export */   useNavigation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation),
/* harmony export */   useNavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigationType),
/* harmony export */   useOutlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutlet),
/* harmony export */   useOutletContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutletContext),
/* harmony export */   useParams: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useParams),
/* harmony export */   useResolvedPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath),
/* harmony export */   useRevalidator: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRevalidator),
/* harmony export */   useRouteError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRoutes),
/* harmony export */   useSearchParams: () => (/* binding */ useSearchParams),
/* harmony export */   useSubmit: () => (/* binding */ useSubmit),
/* harmony export */   useViewTransitionState: () => (/* binding */ useViewTransitionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 48398);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ 74708);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @remix-run/router */ 73231);
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */







function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"),
      // @ts-expect-error if FormData supports the submitter parameter, this will throw
      0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
     true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    // <button>/<input type="submit"> may override attributes of <form>
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    // Build a FormData object populated from a form and submitter
    formData = new FormData(form, target);
    // If this browser doesn't support the `FormData(el, submitter)` format,
    // then tack on the submitter value at the end.  This is a lightweight
    // solution that is not 100% spec compliant.  For complete support in older
    // browsers, consider using the `formdata-submitter-polyfill` package
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  // Send body for <Form encType="text/plain" so we encode it into text
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
  _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
  // no-op
}
function createBrowserRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            // @ts-expect-error
            let error = new ErrorConstructor(val.message);
            // Wipe away the client-side stack trace.  Nothing to fill it in with
            // because we don't serialize SSR stack traces for security reasons
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
            // no-op - fall through and create a normal Error
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        // Wipe away the client-side stack trace.  Nothing to fill it in with
        // because we don't serialize SSR stack traces for security reasons
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
const ViewTransitionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  isTransitioning: false
});
if (true) {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(new Map());
if (true) {
  FetchersContext.displayName = "Fetchers";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
const FLUSH_SYNC = "flushSync";
const flushSyncImpl = react_dom__WEBPACK_IMPORTED_MODULE_1__[FLUSH_SYNC];
const USE_ID = "useId";
const useIdImpl = react__WEBPACK_IMPORTED_MODULE_0__[USE_ID];
function startTransitionSafe(cb) {
  if (startTransitionImpl) {
    startTransitionImpl(cb);
  } else {
    cb();
  }
}
function flushSyncSafe(cb) {
  if (flushSyncImpl) {
    flushSyncImpl(cb);
  } else {
    cb();
  }
}
class Deferred {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = value => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = reason => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let [pendingState, setPendingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [vtContext, setVtContext] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [transition, setTransition] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [interruption, setInterruption] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map());
  let {
    v7_startTransition
  } = future || {};
  let optInStartTransition = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(cb => {
    if (v7_startTransition) {
      startTransitionSafe(cb);
    } else {
      cb();
    }
  }, [v7_startTransition]);
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState, _ref2) => {
    let {
      deletedFetchers,
      flushSync: flushSync,
      viewTransitionOpts: viewTransitionOpts
    } = _ref2;
    newState.fetchers.forEach((fetcher, key) => {
      if (fetcher.data !== undefined) {
        fetcherData.current.set(key, fetcher.data);
      }
    });
    deletedFetchers.forEach(key => fetcherData.current.delete(key));
    let isViewTransitionUnavailable = router.window == null || router.window.document == null || typeof router.window.document.startViewTransition !== "function";
    // If this isn't a view transition or it's not available in this browser,
    // just update and be done with it
    if (!viewTransitionOpts || isViewTransitionUnavailable) {
      if (flushSync) {
        flushSyncSafe(() => setStateImpl(newState));
      } else {
        optInStartTransition(() => setStateImpl(newState));
      }
      return;
    }
    // flushSync + startViewTransition
    if (flushSync) {
      // Flush through the context to mark DOM elements as transition=ing
      flushSyncSafe(() => {
        // Cancel any pending transitions
        if (transition) {
          renderDfd && renderDfd.resolve();
          transition.skipTransition();
        }
        setVtContext({
          isTransitioning: true,
          flushSync: true,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      });
      // Update the DOM
      let t = router.window.document.startViewTransition(() => {
        flushSyncSafe(() => setStateImpl(newState));
      });
      // Clean up after the animation completes
      t.finished.finally(() => {
        flushSyncSafe(() => {
          setRenderDfd(undefined);
          setTransition(undefined);
          setPendingState(undefined);
          setVtContext({
            isTransitioning: false
          });
        });
      });
      flushSyncSafe(() => setTransition(t));
      return;
    }
    // startTransition + startViewTransition
    if (transition) {
      // Interrupting an in-progress transition, cancel and let everything flush
      // out, and then kick off a new transition from the interruption state
      renderDfd && renderDfd.resolve();
      transition.skipTransition();
      setInterruption({
        state: newState,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    } else {
      // Completed navigation update with opted-in view transitions, let 'er rip
      setPendingState(newState);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    }
  }, [router.window, transition, renderDfd, fetcherData, optInStartTransition]);
  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  // When we start a view transition, create a Deferred we can use for the
  // eventual "completed" render
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext]);
  // Once the deferred is created, kick off startViewTransition() to update the
  // DOM and then wait on the Deferred to resolve (indicating the DOM update has
  // happened)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition = router.window.document.startViewTransition(async () => {
        optInStartTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition.finished.finally(() => {
        setRenderDfd(undefined);
        setTransition(undefined);
        setPendingState(undefined);
        setVtContext({
          isTransitioning: false
        });
      });
      setTransition(transition);
    }
  }, [optInStartTransition, pendingState, renderDfd, router.window]);
  // When the new location finally renders and is committed to the DOM, this
  // effect will run to resolve the transition
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  // If we get interrupted with a new navigation during a transition, we skip
  // the active transition, let it cleanup, then kick it off again here
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(undefined);
    }
  }, [vtContext.isTransitioning, interruption]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
     true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);
  let routerFuture = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    v7_relativeSplatPath: router.future.v7_relativeSplatPath
  }), [router.future.v7_relativeSplatPath]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future, router.future), [future, router.future]);
  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, {
    value: fetcherData.current
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, {
    value: vtContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator,
    future: routerFuture
  }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MemoizedDataRoutes, {
    routes: router.routes,
    future: router.future,
    state: state
  }) : fallbackElement))))), null);
}
// Memoize to avoid re-renders when updating `ViewTransitionContext`
const MemoizedDataRoutes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(DataRoutes);
function DataRoutes(_ref3) {
  let {
    routes,
    future,
    state
  } = _ref3;
  return (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRoutesImpl)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window
  } = _ref4;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window
  } = _ref5;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref6) {
  let {
    basename,
    children,
    future,
    history
  } = _ref6;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_logV6DeprecationWarnings)(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition
    } = _ref7,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
         true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : 0;
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
if (true) {
  Link.displayName = "Link";
}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children
    } = _ref8,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
  let {
    navigator,
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let isTransitioning = routerState != null &&
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(nextLocationPathname, basename) || nextLocationPathname;
  }
  // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
  // we're looking for a slash _after_ what's in `to`.  For example:
  //
  // <NavLink to="/users"> and <NavLink to="/users/">
  // both want to look for a / at index 6 to match URL `/users/matt`
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to,
    viewTransition: viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (true) {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref9, forwardedRef) => {
  let {
      fetcherKey,
      navigate,
      reloadDocument,
      replace,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition
    } = _ref9,
    props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      viewTransition
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (true) {
  Form.displayName = "Form";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */
function ScrollRestoration(_ref10) {
  let {
    getKey,
    storageKey
  } = _ref10;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if (true) {
  ScrollRestoration.displayName = "ScrollRestoration";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
  DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetcher"] = "useFetcher";
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext);
  !ctx ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
  !state ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */
function useSearchParams(defaultInit) {
   true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params.") : 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() =>
  // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let currentRouteId = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId)();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        flushSync: options.flushSync
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        flushSync: options.flushSync,
        viewTransition: options.viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
  !routeContext ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : 0 : void 0;
  let [match] = routeContext.matches.slice(-1);
  // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath
  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(action ? action : ".", {
    relative
  }));
  // If no action was specified, browsers will persist current search params
  // when determining the path, so match that behavior
  // https://github.com/remix-run/remix/issues/927
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  if (action == null) {
    // Safe to write to this directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    path.search = location.search;
    // When grabbing search params from the URL, remove any included ?index param
    // since it might not apply to our contextual route.  We add it back based
    // on match.route.index below
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some(v => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter(v => v).forEach(v => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.joinPaths)([basename, path.pathname]);
  }
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */
function useFetcher(_temp3) {
  var _route$matches;
  let {
    key
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let state = useDataRouterState(DataRouterStateHook.UseFetcher);
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FetchersContext);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !fetcherData ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a FetchersContext") : 0 : void 0;
  !route ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : 0 : void 0;
  !(routeId != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  // Fetcher key handling
  // OK to call conditionally to feature detect `useId`
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let defaultKey = useIdImpl ? useIdImpl() : "";
  let [fetcherKey, setFetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(key || defaultKey);
  if (key && key !== fetcherKey) {
    setFetcherKey(key);
  } else if (!fetcherKey) {
    // We will only fall through here when `useId` is not available
    setFetcherKey(getUniqueFetcherId());
  }
  // Registration/cleanup
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    router.getFetcher(fetcherKey);
    return () => {
      // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
      // will not delete immediately but instead queue up a delete after the
      // fetcher returns to an `idle` state
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  // Fetcher additions
  let load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((href, opts) => {
    !routeId ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : 0 : void 0;
    router.fetch(fetcherKey, routeId, href, opts);
  }, [fetcherKey, routeId, router]);
  let submitImpl = useSubmit();
  let submit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((target, opts) => {
    submitImpl(target, _extends({}, opts, {
      navigate: false,
      fetcherKey
    }));
  }, [fetcherKey, submitImpl]);
  let FetcherForm = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, _extends({}, props, {
        navigate: false,
        fetcherKey: fetcherKey,
        ref: ref
      }));
    });
    if (true) {
      FetcherForm.displayName = "fetcher.Form";
    }
    return FetcherForm;
  }, [fetcherKey]);
  // Exposed FetcherWithComponents
  let fetcher = state.fetchers.get(fetcherKey) || react_router__WEBPACK_IMPORTED_MODULE_2__.IDLE_FETCHER;
  let data = fetcherData.get(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form: FetcherForm,
    submit,
    load
  }, fetcher, {
    data
  }), [FetcherForm, submit, load, fetcher, data]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */
function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return Array.from(state.fetchers.entries()).map(_ref11 => {
    let [key, fetcher] = _ref11;
    return _extends({}, fetcher, {
      key
    });
  });
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */
function useScrollRestoration(_temp4) {
  let {
    getKey,
    storageKey
  } = _temp4 === void 0 ? {} : _temp4;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation)();
  // Trigger manual scroll restoration while we're active
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  // Save positions on pagehide
  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    try {
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    } catch (error) {
       true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").") : 0;
    }
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  // Read in any saved scroll locations
  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
        // no-op, use default empty object
      }
    }, [storageKey]);
    // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches) => getKey( // Strip the basename to match useLocation()
      _extends({}, location, {
        pathname: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(location.pathname, basename) || location.pathname
      }), matches) : getKey;
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKeyWithoutBasename);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      }
      // been here before, scroll to it
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      // try to scroll to the hash
      if (location.hash) {
        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      // Don't reset if this navigation opted out
      if (preventScrollReset === true) {
        return;
      }
      // otherwise go to the top on new locations
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */
function usePrompt(_ref12) {
  let {
    when,
    message
  } = _ref12;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        // This timeout is needed to avoid a weird "race" on POP navigations
        // between the `window.history` revert navigation and the result of
        // `window.confirm`
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);
  !(vtContext != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : 0 : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  // Transition is active if we're going to or coming from the indicated
  // destination.  This ensures that other PUSH navigations that reverse
  // an indicated transition apply.  I.e., on the list view you have:
  //
  //   <NavLink to="/details/1" viewTransition>
  //
  // If you click the breadcrumb back to the list view:
  //
  //   <NavLink to="/list" viewTransition>
  //
  // We should apply the transition because it's indicated as active going
  // from /list -> /details/1 and therefore should be active on the reverse
  // (even though this isn't strictly a POP reverse)
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, nextPath) != null || (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, currentPath) != null;
}
//#endregion




/***/ }),

/***/ 74708:
/*!*************************************************!*\
  !*** ./node_modules/react-router/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   Await: () => (/* binding */ Await),
/* harmony export */   MemoryRouter: () => (/* binding */ MemoryRouter),
/* harmony export */   Navigate: () => (/* binding */ Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   Outlet: () => (/* binding */ Outlet),
/* harmony export */   Route: () => (/* binding */ Route),
/* harmony export */   Router: () => (/* binding */ Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* binding */ Routes),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* binding */ DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* binding */ DataRouterStateContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* binding */ LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* binding */ NavigationContext),
/* harmony export */   UNSAFE_RouteContext: () => (/* binding */ RouteContext),
/* harmony export */   UNSAFE_logV6DeprecationWarnings: () => (/* binding */ logV6DeprecationWarnings),
/* harmony export */   UNSAFE_mapRouteProperties: () => (/* binding */ mapRouteProperties),
/* harmony export */   UNSAFE_useRouteId: () => (/* binding */ useRouteId),
/* harmony export */   UNSAFE_useRoutesImpl: () => (/* binding */ useRoutesImpl),
/* harmony export */   createMemoryRouter: () => (/* binding */ createMemoryRouter),
/* harmony export */   createPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   createRoutesFromChildren: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   defer: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   generatePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   json: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   matchPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument),
/* harmony export */   renderMatches: () => (/* binding */ renderMatches),
/* harmony export */   replace: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.replace),
/* harmony export */   resolvePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   useActionData: () => (/* binding */ useActionData),
/* harmony export */   useAsyncError: () => (/* binding */ useAsyncError),
/* harmony export */   useAsyncValue: () => (/* binding */ useAsyncValue),
/* harmony export */   useBlocker: () => (/* binding */ useBlocker),
/* harmony export */   useHref: () => (/* binding */ useHref),
/* harmony export */   useInRouterContext: () => (/* binding */ useInRouterContext),
/* harmony export */   useLoaderData: () => (/* binding */ useLoaderData),
/* harmony export */   useLocation: () => (/* binding */ useLocation),
/* harmony export */   useMatch: () => (/* binding */ useMatch),
/* harmony export */   useMatches: () => (/* binding */ useMatches),
/* harmony export */   useNavigate: () => (/* binding */ useNavigate),
/* harmony export */   useNavigation: () => (/* binding */ useNavigation),
/* harmony export */   useNavigationType: () => (/* binding */ useNavigationType),
/* harmony export */   useOutlet: () => (/* binding */ useOutlet),
/* harmony export */   useOutletContext: () => (/* binding */ useOutletContext),
/* harmony export */   useParams: () => (/* binding */ useParams),
/* harmony export */   useResolvedPath: () => (/* binding */ useResolvedPath),
/* harmony export */   useRevalidator: () => (/* binding */ useRevalidator),
/* harmony export */   useRouteError: () => (/* binding */ useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* binding */ useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remix-run/router */ 73231);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  AwaitContext.displayName = "Await";
}

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (true) {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/v6/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-in-router-context
 */
function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/v6/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigation-type
 */
function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}

/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-match
 */
function useMatch(pattern) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pattern, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_decodePath)(pathname)), [pathname, pattern]);
}

/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/v6/hooks/use-outlet-context
 */
function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}

/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/v6/hooks/use-outlet
 */
function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}

/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/v6/hooks/use-params
 */
function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/v6/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/v6/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    // Determine the remaining pathname by removing the # of URL segments the
    // parentPathnameBase has, instead of removing based on character count.
    // This is because we can't guarantee that incoming/outgoing encodings/
    // decodings will match exactly.
    // We decode paths before matching on a per-segment basis with
    // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
    // match what `window.location.pathname` would reflect.  Those don't 100%
    // align when it comes to encoded URI characters such as % and &.
    //
    // So we may end up with:
    //   pathname:           "/descendant/a%25b/match"
    //   parentPathnameBase: "/descendant/a%b"
    //
    // And the direct substring removal approach won't work :/
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  if (true) {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState, future);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if (true) {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "errorElement"), " prop on your route."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error !== undefined ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      // Don't bail if we're initializing with partial hydration and we have
      // router matches.  That means we're actively running `patchRoutesOnNavigation`
      // so we should render down the partial matches to the appropriate
      // `HydrateFallback`.  We only do this if `parentMatches` is empty so it
      // only impacts the root matches for `RouterProvider` and no descendant
      // `<Routes>`
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
    !(errorIndex >= 0) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : 0 : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  // If we're in a partial hydration mode, detect if we need to render down to
  // a given HydrateFallback while we load the rest of the hydration data
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      // Track the deepest fallback up until the first route without data
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
        if (match.route.lazy || needsToRunLoader) {
          // We found the first route that's not ready to render (waiting on
          // lazy, or has a loader that hasn't run yet).  Flag that we need to
          // render a fallback and render up until the appropriate fallback
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    // Only data routers handle errors/fallbacks
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : undefined;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  !ctx ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  !state ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the ID for the nearest contextual route
 */
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}

/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */
function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}

/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  }), [dataRouterContext.router.revalidate, state.revalidation]);
}

/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => matches.map(m => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [matches, loaderData]);
}

/**
 * Returns the loader data for the nearest ancestor Route loader
 */
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }
  return state.loaderData[routeId];
}

/**
 * Returns the loaderData for the given routeId
 */
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}

/**
 * Returns the action data for the nearest ancestor Route action
 */
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  return state.actionData ? state.actionData[routeId] : undefined;
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error !== undefined) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */
function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}

/**
 * Returns the error from the nearest ancestor `<Await />` value
 */
function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;

/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */
function useBlocker(shouldBlock) {
  let {
    router,
    basename
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(arg => {
    if (typeof shouldBlock !== "function") {
      return !!shouldBlock;
    }
    if (basename === "/") {
      return shouldBlock(arg);
    }

    // If they provided us a function and we've got an active basename, strip
    // it from the locations we expose to the user to match the behavior of
    // useLocation
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = arg;
    return shouldBlock({
      currentLocation: _extends({}, currentLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
      }),
      nextLocation: _extends({}, nextLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
      }),
      historyAction
    });
  }, [basename, shouldBlock]);

  // This effect is in charge of blocker key assignment and deletion (which is
  // tightly coupled to the key)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);

  // This effect handles assigning the blockerFunction.  This is to handle
  // unstable blocker function identities, and happens only after the prior
  // effect so we don't get an orphaned blockerFunction in the router with a
  // key of "".  Until then we just have the IDLE_BLOCKER.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);

  // Prefer the blocker from `state` not `router.state` since DataRouterContext
  // is memoized so this ensures we update on blocker state updates
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_BLOCKER;
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned$1 = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned$1[key]) {
    alreadyWarned$1[key] = true;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, message) : 0;
  }
}

const alreadyWarned = {};
function warnOnce(key, message) {
  if ( true && !alreadyWarned[message]) {
    alreadyWarned[message] = true;
    console.warn(message);
  }
}
const logDeprecation = (flag, msg, link) => warnOnce(flag, "\u26A0\uFE0F React Router Future Flag Warning: " + msg + ". " + ("You can use the `" + flag + "` future flag to opt-in early. ") + ("For more information, see " + link + "."));
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === undefined) {
    logDeprecation("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition");
  }
  if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === undefined && (!routerFuture || routerFuture.v7_relativeSplatPath === undefined)) {
    logDeprecation("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
  }
  if (routerFuture) {
    if (routerFuture.v7_fetcherPersist === undefined) {
      logDeprecation("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist");
    }
    if (routerFuture.v7_normalizeFormMethod === undefined) {
      logDeprecation("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod");
    }
    if (routerFuture.v7_partialHydration === undefined) {
      logDeprecation("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration");
    }
    if (routerFuture.v7_skipActionErrorRevalidation === undefined) {
      logDeprecation("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation");
    }
  }
}

/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    if (v7_startTransition && startTransitionImpl) {
      startTransitionImpl(() => setStateImpl(newState));
    } else {
      setStateImpl(newState);
    }
  }, [setStateImpl, v7_startTransition]);

  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => logV6DeprecationWarnings(future, router.future), [router, future]);

  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator,
    future: {
      v7_relativeSplatPath: router.future.v7_relativeSplatPath
    }
  }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
    routes: router.routes,
    future: router.future,
    state: state
  }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
  let {
    routes,
    future,
    state
  } = _ref2;
  return useRoutesImpl(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/v6/router-components/memory-router
 */
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex,
    future
  } = _ref3;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => logV6DeprecationWarnings(future), [future]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/v6/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    future,
    static: isStatic
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/v6/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/v6/components/route
 */
function Route(_props) {
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0 ;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/v6/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop,
    navigator,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: _extends({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/v6/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
  return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(() => {});
class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }
  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = "_error" in promise ? AwaitRenderStatus.error : "_data" in promise ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    }

    // Throw to the suspense boundary
    throw promise;
  }
}

/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */
function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/v6/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
    !(!element.props.index || !element.props.children) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : 0 : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * Renders the result of `matchRoutes()` into a React element.
 */
function renderMatches(matches) {
  return _renderMatches(matches);
}

function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (true) {
      if (route.element) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
      Component: undefined
    });
  }
  if (route.HydrateFallback) {
    if (true) {
      if (route.hydrateFallbackElement) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - " + "`HydrateFallback` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.HydrateFallback),
      HydrateFallback: undefined
    });
  }
  if (route.ErrorBoundary) {
    if (true) {
      if (route.errorElement) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation
  }).initialize();
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

/***/ 27390:
/*!*******************************************************!*\
  !*** external "AnnouncementDetailPageWebPartStrings" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__27390__;

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

/***/ 14262:
/*!******************************************************************!*\
  !*** ./node_modules/@pnp/graph/node_modules/tslib/tslib.es6.mjs ***!
  \******************************************************************/
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


/***/ }),

/***/ 99054:
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/node_modules/tslib/tslib.es6.mjs ***!
  \**********************************************************************/
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


/***/ }),

/***/ 13759:
/*!***************************************************************!*\
  !*** ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.mjs ***!
  \***************************************************************/
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
            init.headers = { ...init.headers, SdkVersion: "PnPCoreJS/4.19.0" };
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 14262);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 14262);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 99054);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 13759);
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
            let clientTag = "PnPCoreJS:4.19.0:";
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 13759);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 13759);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 13759);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 13759);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 13759);
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
/*!******************************************************************************!*\
  !*** ./lib/webparts/announcementDetailPage/AnnouncementDetailPageWebPart.js ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var AnnouncementDetailPageWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! AnnouncementDetailPageWebPartStrings */ 27390);
/* harmony import */ var AnnouncementDetailPageWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(AnnouncementDetailPageWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_AnnouncementRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AnnouncementRouter */ 4076);
/* harmony import */ var _services_pnpClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/pnpClient */ 26852);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var AnnouncementDetailPageWebPart = /** @class */ (function (_super) {
    __extends(AnnouncementDetailPageWebPart, _super);
    function AnnouncementDetailPageWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnouncementDetailPageWebPart.prototype.onInit = function () {
        // @pnp/sp inital setup
        (0,_services_pnpClient__WEBPACK_IMPORTED_MODULE_7__.initPnp)(this.context);
        return _super.prototype.onInit.call(this);
    };
    AnnouncementDetailPageWebPart.prototype.render = function () {
        // Use the new router component by default
        var element = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AnnouncementRouter__WEBPACK_IMPORTED_MODULE_6__.AnnouncementRouter, { basePath: '/announcements' });
        react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, this.domElement);
    };
    AnnouncementDetailPageWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(AnnouncementDetailPageWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__.Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    AnnouncementDetailPageWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: AnnouncementDetailPageWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: AnnouncementDetailPageWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.BasicGroupName,
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)('description', {
                                    label: AnnouncementDetailPageWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return AnnouncementDetailPageWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__.BaseClientSideWebPart));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnouncementDetailPageWebPart);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=announcement-detail-page-web-part.js.map