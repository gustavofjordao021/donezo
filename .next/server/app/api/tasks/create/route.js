"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/tasks/create/route";
exports.ids = ["app/api/tasks/create/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fcreate%2Froute&page=%2Fapi%2Ftasks%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fcreate%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fcreate%2Froute&page=%2Fapi%2Ftasks%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fcreate%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_gustavojordao_Downloads_dev_donezo_src_app_api_tasks_create_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tasks/create/route.js */ \"(rsc)/./src/app/api/tasks/create/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/create/route\",\n        pathname: \"/api/tasks/create\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/create/route\"\n    },\n    resolvedPagePath: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/api/tasks/create/route.js\",\n    nextConfigOutput,\n    userland: _Users_gustavojordao_Downloads_dev_donezo_src_app_api_tasks_create_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/tasks/create/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRmNyZWF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGFza3MlMkZjcmVhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0YXNrcyUyRmNyZWF0ZSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmd1c3Rhdm9qb3JkYW8lMkZEb3dubG9hZHMlMkZfZGV2JTJGZG9uZXpvJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmd1c3Rhdm9qb3JkYW8lMkZEb3dubG9hZHMlMkZfZGV2JTJGZG9uZXpvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvP2E4N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2d1c3Rhdm9qb3JkYW8vRG93bmxvYWRzL19kZXYvZG9uZXpvL3NyYy9hcHAvYXBpL3Rhc2tzL2NyZWF0ZS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGFza3MvY3JlYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdGFza3MvY3JlYXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90YXNrcy9jcmVhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZ3VzdGF2b2pvcmRhby9Eb3dubG9hZHMvX2Rldi9kb25lem8vc3JjL2FwcC9hcGkvdGFza3MvY3JlYXRlL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Rhc2tzL2NyZWF0ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fcreate%2Froute&page=%2Fapi%2Ftasks%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fcreate%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/tasks/create/route.js":
/*!*******************************************!*\
  !*** ./src/app/api/tasks/create/route.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/supabase/services/authService */ \"(rsc)/./src/utils/supabase/services/authService.js\");\n/* harmony import */ var _utils_supabase_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/supabase/supabaseClient */ \"(rsc)/./src/utils/supabase/supabaseClient.js\");\n\n\nasync function POST(request) {\n    const { title, description, due_date, priority } = await request.json();\n    const { data, error } = await _utils_supabase_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.from(\"tasks\").insert({\n        title,\n        description,\n        due_date,\n        priority\n    });\n    if (error) {\n        console.error(\"Error creating task:\", error);\n        return new Response(JSON.stringify({\n            error: \"Failed to create task\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n    if (data && data.length > 0) {\n        return new Response(JSON.stringify({\n            task: data[0]\n        }), {\n            status: 201,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } else {\n        return new Response(JSON.stringify({\n            message: \"Task created successfully\"\n        }), {\n            status: 201,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9jcmVhdGUvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBFO0FBQ0w7QUFFOUQsZUFBZUUsS0FBS0MsT0FBTztJQUNqQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1KLFFBQVFLLElBQUk7SUFFckUsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ULG9FQUFRQSxDQUFDVSxJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDO1FBQzNEUjtRQUNBQztRQUNBQztRQUNBQztJQUNEO0lBRUEsSUFBSUcsT0FBTztRQUNWRyxRQUFRSCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPLElBQUlJLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFTixPQUFPO1FBQXdCLElBQUk7WUFDdkVPLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDL0M7SUFDRDtJQUVBLElBQUlULFFBQVFBLEtBQUtVLE1BQU0sR0FBRyxHQUFHO1FBQzVCLE9BQU8sSUFBSUwsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVJLE1BQU1YLElBQUksQ0FBQyxFQUFFO1FBQUMsSUFBSTtZQUN0RFEsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUMvQztJQUNELE9BQU87UUFDTixPQUFPLElBQUlKLFNBQ1ZDLEtBQUtDLFNBQVMsQ0FBQztZQUFFSyxTQUFTO1FBQTRCLElBQ3REO1lBQ0NKLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDL0M7SUFFRjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvLi9zcmMvYXBwL2FwaS90YXNrcy9jcmVhdGUvcm91dGUuanM/ZjAyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL3N1cGFiYXNlL3NlcnZpY2VzL2F1dGhTZXJ2aWNlXCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9zdXBhYmFzZS9zdXBhYmFzZUNsaWVudFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHkgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ0YXNrc1wiKS5pbnNlcnQoe1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZV9kYXRlLFxuXHRcdHByaW9yaXR5LFxuXHR9KTtcblxuXHRpZiAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgdGFzazpcIiwgZXJyb3IpO1xuXHRcdHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRhc2tcIiB9KSwge1xuXHRcdFx0c3RhdHVzOiA1MDAsXG5cdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgdGFzazogZGF0YVswXSB9KSwge1xuXHRcdFx0c3RhdHVzOiAyMDEsXG5cdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShcblx0XHRcdEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJUYXNrIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSksXG5cdFx0XHR7XG5cdFx0XHRcdHN0YXR1czogMjAxLFxuXHRcdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuIl0sIm5hbWVzIjpbImdldFVzZXIiLCJzdXBhYmFzZSIsIlBPU1QiLCJyZXF1ZXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZV9kYXRlIiwicHJpb3JpdHkiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsImluc2VydCIsImNvbnNvbGUiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJoZWFkZXJzIiwibGVuZ3RoIiwidGFzayIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/create/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/supabase/services/authService.js":
/*!****************************************************!*\
  !*** ./src/utils/supabase/services/authService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   onAuthStateChange: () => (/* binding */ onAuthStateChange),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supabaseClient */ \"(rsc)/./src/utils/supabase/supabaseClient.js\");\n// authService.js\n\nconst getUser = async (req)=>{\n    const { data, error } = await _supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.auth.getUser(req);\n    if (error) {\n        console.error(\"Error fetching user:\", error.message);\n        return null;\n    }\n    return data.user;\n};\nconst onAuthStateChange = (callback)=>{\n    const { data } = _supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.auth.onAuthStateChange(callback);\n    return data?.subscription.unsubscribe;\n};\nconst signOut = async ()=>{\n    const { error } = await _supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.auth.signOut();\n    if (error) {\n        console.error(\"Error signing out:\", error.message);\n        throw error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc2VydmljZXMvYXV0aFNlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGlCQUFpQjtBQUU0QjtBQUV0QyxNQUFNQyxVQUFVLE9BQU9DO0lBQzdCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNSixxREFBUUEsQ0FBQ0ssSUFBSSxDQUFDSixPQUFPLENBQUNDO0lBRXBELElBQUlFLE9BQU87UUFDVkUsUUFBUUYsS0FBSyxDQUFDLHdCQUF3QkEsTUFBTUcsT0FBTztRQUNuRCxPQUFPO0lBQ1I7SUFFQSxPQUFPSixLQUFLSyxJQUFJO0FBQ2pCLEVBQUU7QUFFSyxNQUFNQyxvQkFBb0IsQ0FBQ0M7SUFDakMsTUFBTSxFQUFFUCxJQUFJLEVBQUUsR0FBR0gscURBQVFBLENBQUNLLElBQUksQ0FBQ0ksaUJBQWlCLENBQUNDO0lBRWpELE9BQU9QLE1BQU1RLGFBQWFDO0FBQzNCLEVBQUU7QUFFSyxNQUFNQyxVQUFVO0lBQ3RCLE1BQU0sRUFBRVQsS0FBSyxFQUFFLEdBQUcsTUFBTUoscURBQVFBLENBQUNLLElBQUksQ0FBQ1EsT0FBTztJQUU3QyxJQUFJVCxPQUFPO1FBQ1ZFLFFBQVFGLEtBQUssQ0FBQyxzQkFBc0JBLE1BQU1HLE9BQU87UUFDakQsTUFBTUg7SUFDUDtBQUNELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWFwcC8uL3NyYy91dGlscy9zdXBhYmFzZS9zZXJ2aWNlcy9hdXRoU2VydmljZS5qcz8zZDlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhTZXJ2aWNlLmpzXG5cbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL3N1cGFiYXNlQ2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gYXN5bmMgKHJlcSkgPT4ge1xuXHRjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIocmVxKTtcblxuXHRpZiAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IubWVzc2FnZSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZGF0YS51c2VyO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uQXV0aFN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrKSA9PiB7XG5cdGNvbnN0IHsgZGF0YSB9ID0gc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZShjYWxsYmFjayk7XG5cblx0cmV0dXJuIGRhdGE/LnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKTtcblxuXHRpZiAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc2lnbmluZyBvdXQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiZ2V0VXNlciIsInJlcSIsImRhdGEiLCJlcnJvciIsImF1dGgiLCJjb25zb2xlIiwibWVzc2FnZSIsInVzZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsImNhbGxiYWNrIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJzaWduT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/supabase/services/authService.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/supabase/supabaseClient.js":
/*!**********************************************!*\
  !*** ./src/utils/supabase/supabaseClient.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://vrqgmmctnngzkiqiqtrv.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWdtbWN0bm5nemtpcWlxdHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxOTk3MjYsImV4cCI6MjAyMTc3NTcyNn0.jVZfpb43ofKiLenOHbfG2SRksnZnXNazU-imwukH9YY\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc3VwYWJhc2VDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUQ7QUFFOUMsTUFBTUMsV0FBV0QsbUVBQVlBLENBQ25DRSwwQ0FBb0MsRUFDcENBLGtOQUFvQyxFQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLy4vc3JjL3V0aWxzL3N1cGFiYXNlL3N1cGFiYXNlQ2xpZW50LmpzP2ExYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXG5cdHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCxcblx0cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfS0VZXG4pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/supabase/supabaseClient.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fcreate%2Froute&page=%2Fapi%2Ftasks%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fcreate%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();