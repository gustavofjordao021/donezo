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
exports.id = "app/api/tasks/read/route";
exports.ids = ["app/api/tasks/read/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fread%2Froute&page=%2Fapi%2Ftasks%2Fread%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fread%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fread%2Froute&page=%2Fapi%2Ftasks%2Fread%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fread%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_gustavojordao_Downloads_dev_donezo_src_app_api_tasks_read_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tasks/read/route.js */ \"(rsc)/./src/app/api/tasks/read/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/read/route\",\n        pathname: \"/api/tasks/read\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/read/route\"\n    },\n    resolvedPagePath: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/api/tasks/read/route.js\",\n    nextConfigOutput,\n    userland: _Users_gustavojordao_Downloads_dev_donezo_src_app_api_tasks_read_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/tasks/read/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRnJlYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRhc2tzJTJGcmVhZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRhc2tzJTJGcmVhZCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmd1c3Rhdm9qb3JkYW8lMkZEb3dubG9hZHMlMkZfZGV2JTJGZG9uZXpvJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmd1c3Rhdm9qb3JkYW8lMkZEb3dubG9hZHMlMkZfZGV2JTJGZG9uZXpvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvPzJlNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2d1c3Rhdm9qb3JkYW8vRG93bmxvYWRzL19kZXYvZG9uZXpvL3NyYy9hcHAvYXBpL3Rhc2tzL3JlYWQvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Rhc2tzL3JlYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90YXNrcy9yZWFkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90YXNrcy9yZWFkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2d1c3Rhdm9qb3JkYW8vRG93bmxvYWRzL19kZXYvZG9uZXpvL3NyYy9hcHAvYXBpL3Rhc2tzL3JlYWQvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdGFza3MvcmVhZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fread%2Froute&page=%2Fapi%2Ftasks%2Fread%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fread%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/tasks/read/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/tasks/read/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/supabase/services/authService */ \"(rsc)/./src/utils/supabase/services/authService.js\");\n/* harmony import */ var _utils_supabase_services_taskService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/supabase/services/taskService */ \"(rsc)/./src/utils/supabase/services/taskService.js\");\n\n\nasync function GET(request) {\n    // Get the authentication token from the request headers\n    const token = request.headers.get(\"Authorization\")?.replace(\"Bearer \", \"\");\n    // Initialize the Supabase client with the token\n    const supabase = (0,_utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_0__.initSupabase)(token);\n    // Get the authenticated user\n    const user = await (0,_utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_0__.getUser)();\n    if (!user) {\n        return new Response(JSON.stringify({\n            error: \"Unauthorized\"\n        }), {\n            status: 401,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n    // Retrieve the tasks using the taskService and pass the authenticated Supabase client\n    const { data: tasks, error } = await (0,_utils_supabase_services_taskService__WEBPACK_IMPORTED_MODULE_1__.getTasks)(supabase, user.id);\n    if (error) {\n        console.error(\"Error retrieving tasks:\", error);\n        return new Response(JSON.stringify({\n            error: \"Failed to retrieve tasks\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n    return new Response(JSON.stringify({\n        tasks\n    }), {\n        status: 200,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9yZWFkL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUd5RDtBQUNrQjtBQUVwRSxlQUFlRyxJQUFJQyxPQUFPO0lBQ2hDLHdEQUF3RDtJQUN4RCxNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0JDLFFBQVEsV0FBVztJQUV2RSxnREFBZ0Q7SUFDaEQsTUFBTUMsV0FBV1Isa0ZBQVlBLENBQUNJO0lBRTlCLDZCQUE2QjtJQUM3QixNQUFNSyxPQUFPLE1BQU1WLDZFQUFPQTtJQUUxQixJQUFJLENBQUNVLE1BQU07UUFDVixPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQWUsSUFBSTtZQUM5REMsUUFBUTtZQUNSVCxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUMvQztJQUNEO0lBRUEsc0ZBQXNGO0lBQ3RGLE1BQU0sRUFBRVUsTUFBTUMsS0FBSyxFQUFFSCxLQUFLLEVBQUUsR0FBRyxNQUFNWiw4RUFBUUEsQ0FBQ08sVUFBVUMsS0FBS1EsRUFBRTtJQUUvRCxJQUFJSixPQUFPO1FBQ1ZLLFFBQVFMLEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU8sSUFBSUgsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBMkIsSUFBSTtZQUMxRUMsUUFBUTtZQUNSVCxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUMvQztJQUNEO0lBRUEsT0FBTyxJQUFJSyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7UUFBRUk7SUFBTSxJQUFJO1FBQzlDRixRQUFRO1FBQ1JULFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7SUFDL0M7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLy4vc3JjL2FwcC9hcGkvdGFza3MvcmVhZC9yb3V0ZS5qcz81OTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGdldFVzZXIsXG5cdGluaXRTdXBhYmFzZSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL3N1cGFiYXNlL3NlcnZpY2VzL2F1dGhTZXJ2aWNlXCI7XG5pbXBvcnQgeyBnZXRUYXNrcyB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9zdXBhYmFzZS9zZXJ2aWNlcy90YXNrU2VydmljZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcblx0Ly8gR2V0IHRoZSBhdXRoZW50aWNhdGlvbiB0b2tlbiBmcm9tIHRoZSByZXF1ZXN0IGhlYWRlcnNcblx0Y29uc3QgdG9rZW4gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQXV0aG9yaXphdGlvblwiKT8ucmVwbGFjZShcIkJlYXJlciBcIiwgXCJcIik7XG5cblx0Ly8gSW5pdGlhbGl6ZSB0aGUgU3VwYWJhc2UgY2xpZW50IHdpdGggdGhlIHRva2VuXG5cdGNvbnN0IHN1cGFiYXNlID0gaW5pdFN1cGFiYXNlKHRva2VuKTtcblxuXHQvLyBHZXQgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcigpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9KSwge1xuXHRcdFx0c3RhdHVzOiA0MDEsXG5cdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBSZXRyaWV2ZSB0aGUgdGFza3MgdXNpbmcgdGhlIHRhc2tTZXJ2aWNlIGFuZCBwYXNzIHRoZSBhdXRoZW50aWNhdGVkIFN1cGFiYXNlIGNsaWVudFxuXHRjb25zdCB7IGRhdGE6IHRhc2tzLCBlcnJvciB9ID0gYXdhaXQgZ2V0VGFza3Moc3VwYWJhc2UsIHVzZXIuaWQpO1xuXG5cdGlmIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXRyaWV2aW5nIHRhc2tzOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkZhaWxlZCB0byByZXRyaWV2ZSB0YXNrc1wiIH0pLCB7XG5cdFx0XHRzdGF0dXM6IDUwMCxcblx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyB0YXNrcyB9KSwge1xuXHRcdHN0YXR1czogMjAwLFxuXHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0fSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0VXNlciIsImluaXRTdXBhYmFzZSIsImdldFRhc2tzIiwiR0VUIiwicmVxdWVzdCIsInRva2VuIiwiaGVhZGVycyIsImdldCIsInJlcGxhY2UiLCJzdXBhYmFzZSIsInVzZXIiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0YXR1cyIsImRhdGEiLCJ0YXNrcyIsImlkIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/read/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/supabase/services/authService.js":
/*!****************************************************!*\
  !*** ./src/utils/supabase/services/authService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   initSupabase: () => (/* binding */ initSupabase),\n/* harmony export */   onAuthStateChange: () => (/* binding */ onAuthStateChange),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supabaseClient */ \"(rsc)/./src/utils/supabase/supabaseClient.js\");\n\nconst initSupabase = (token)=>{\n    const supabase = (0,_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.createSupabaseClient)(token);\n    return supabase;\n};\nconst getUser = async (supabase)=>{\n    if (!supabase) {\n        throw new Error(\"Supabase client not initialized\");\n    }\n    const { data: { user }, error } = await supabase.auth.getUser();\n    if (error) {\n        console.error(\"Error fetching user:\", error.message);\n        return null;\n    }\n    return user;\n};\nconst onAuthStateChange = (supabase, callback)=>{\n    if (!supabase) {\n        throw new Error(\"Supabase client not provided\");\n    }\n    const unsubscribe = supabase.auth.onAuthStateChange((event, session)=>{\n        callback(event, session);\n    });\n    return unsubscribe;\n};\nconst signOut = async (supabase)=>{\n    if (!supabase) {\n        throw new Error(\"client not initialized\");\n    }\n    const { error } = await supabase.auth.signOut();\n    if (error) {\n        console.error(\"Error signing out:\", error.message);\n        throw error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc2VydmljZXMvYXV0aFNlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUQ7QUFFbEQsTUFBTUMsZUFBZSxDQUFDQztJQUM1QixNQUFNQyxXQUFXSCxxRUFBb0JBLENBQUNFO0lBQ3RDLE9BQU9DO0FBQ1IsRUFBRTtBQUVLLE1BQU1DLFVBQVUsT0FBT0Q7SUFDN0IsSUFBSSxDQUFDQSxVQUFVO1FBQ2QsTUFBTSxJQUFJRSxNQUFNO0lBQ2pCO0lBRUEsTUFBTSxFQUNMQyxNQUFNLEVBQUVDLElBQUksRUFBRSxFQUNkQyxLQUFLLEVBQ0wsR0FBRyxNQUFNTCxTQUFTTSxJQUFJLENBQUNMLE9BQU87SUFFL0IsSUFBSUksT0FBTztRQUNWRSxRQUFRRixLQUFLLENBQUMsd0JBQXdCQSxNQUFNRyxPQUFPO1FBQ25ELE9BQU87SUFDUjtJQUVBLE9BQU9KO0FBQ1IsRUFBRTtBQUVLLE1BQU1LLG9CQUFvQixDQUFDVCxVQUFVVTtJQUMzQyxJQUFJLENBQUNWLFVBQVU7UUFDZCxNQUFNLElBQUlFLE1BQU07SUFDakI7SUFFQSxNQUFNUyxjQUFjWCxTQUFTTSxJQUFJLENBQUNHLGlCQUFpQixDQUFDLENBQUNHLE9BQU9DO1FBQzNESCxTQUFTRSxPQUFPQztJQUNqQjtJQUVBLE9BQU9GO0FBQ1IsRUFBRTtBQUVLLE1BQU1HLFVBQVUsT0FBT2Q7SUFDN0IsSUFBSSxDQUFDQSxVQUFVO1FBQ2QsTUFBTSxJQUFJRSxNQUFNO0lBQ2pCO0lBRUEsTUFBTSxFQUFFRyxLQUFLLEVBQUUsR0FBRyxNQUFNTCxTQUFTTSxJQUFJLENBQUNRLE9BQU87SUFFN0MsSUFBSVQsT0FBTztRQUNWRSxRQUFRRixLQUFLLENBQUMsc0JBQXNCQSxNQUFNRyxPQUFPO1FBQ2pELE1BQU1IO0lBQ1A7QUFDRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc2VydmljZXMvYXV0aFNlcnZpY2UuanM/M2Q5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdXBhYmFzZUNsaWVudCB9IGZyb20gXCIuLi9zdXBhYmFzZUNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgaW5pdFN1cGFiYXNlID0gKHRva2VuKSA9PiB7XG5cdGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU3VwYWJhc2VDbGllbnQodG9rZW4pO1xuXHRyZXR1cm4gc3VwYWJhc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jIChzdXBhYmFzZSkgPT4ge1xuXHRpZiAoIXN1cGFiYXNlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiU3VwYWJhc2UgY2xpZW50IG5vdCBpbml0aWFsaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHtcblx0XHRkYXRhOiB7IHVzZXIgfSxcblx0XHRlcnJvcixcblx0fSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuXG5cdGlmIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvci5tZXNzYWdlKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB1c2VyO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uQXV0aFN0YXRlQ2hhbmdlID0gKHN1cGFiYXNlLCBjYWxsYmFjaykgPT4ge1xuXHRpZiAoIXN1cGFiYXNlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiU3VwYWJhc2UgY2xpZW50IG5vdCBwcm92aWRlZFwiKTtcblx0fVxuXG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZSgoZXZlbnQsIHNlc3Npb24pID0+IHtcblx0XHRjYWxsYmFjayhldmVudCwgc2Vzc2lvbik7XG5cdH0pO1xuXG5cdHJldHVybiB1bnN1YnNjcmliZTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gYXN5bmMgKHN1cGFiYXNlKSA9PiB7XG5cdGlmICghc3VwYWJhc2UpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnQgbm90IGluaXRpYWxpemVkXCIpO1xuXHR9XG5cblx0Y29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XG5cblx0aWYgKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNpZ25pbmcgb3V0OlwiLCBlcnJvci5tZXNzYWdlKTtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdXBhYmFzZUNsaWVudCIsImluaXRTdXBhYmFzZSIsInRva2VuIiwic3VwYWJhc2UiLCJnZXRVc2VyIiwiRXJyb3IiLCJkYXRhIiwidXNlciIsImVycm9yIiwiYXV0aCIsImNvbnNvbGUiLCJtZXNzYWdlIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJjYWxsYmFjayIsInVuc3Vic2NyaWJlIiwiZXZlbnQiLCJzZXNzaW9uIiwic2lnbk91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/supabase/services/authService.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/supabase/services/taskService.js":
/*!****************************************************!*\
  !*** ./src/utils/supabase/services/taskService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   getTasks: () => (/* binding */ getTasks),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\nasync function createTask(supabase, userId, taskData) {\n    const { data, error } = await supabase.from(\"tasks\").insert({\n        ...taskData,\n        user_id: userId\n    });\n    return {\n        data,\n        error\n    };\n}\nasync function getTasks(supabase, userId) {\n    const { data, error } = await supabase.from(\"tasks\").select(\"*\").eq(\"user_id\", userId);\n    return {\n        data,\n        error\n    };\n}\nasync function updateTask(supabase, userId, taskId, taskData) {\n    const { data, error } = await supabase.from(\"tasks\").update(taskData).eq(\"id\", taskId).eq(\"user_id\", userId);\n    return {\n        data,\n        error\n    };\n}\nasync function deleteTask(supabase, userId, taskId) {\n    const { error } = await supabase.from(\"tasks\").delete().eq(\"id\", taskId).eq(\"user_id\", userId);\n    return {\n        error\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc2VydmljZXMvdGFza1NlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLGVBQWVBLFdBQVdDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxRQUFRO0lBQzFELE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNSixTQUFTSyxJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDO1FBQzNELEdBQUdKLFFBQVE7UUFDWEssU0FBU047SUFDVjtJQUNBLE9BQU87UUFBRUU7UUFBTUM7SUFBTTtBQUN0QjtBQUVPLGVBQWVJLFNBQVNSLFFBQVEsRUFBRUMsTUFBTTtJQUM5QyxNQUFNLEVBQUVFLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUosU0FDNUJLLElBQUksQ0FBQyxTQUNMSSxNQUFNLENBQUMsS0FDUEMsRUFBRSxDQUFDLFdBQVdUO0lBQ2hCLE9BQU87UUFBRUU7UUFBTUM7SUFBTTtBQUN0QjtBQUVPLGVBQWVPLFdBQVdYLFFBQVEsRUFBRUMsTUFBTSxFQUFFVyxNQUFNLEVBQUVWLFFBQVE7SUFDbEUsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1KLFNBQzVCSyxJQUFJLENBQUMsU0FDTFEsTUFBTSxDQUFDWCxVQUNQUSxFQUFFLENBQUMsTUFBTUUsUUFDVEYsRUFBRSxDQUFDLFdBQVdUO0lBQ2hCLE9BQU87UUFBRUU7UUFBTUM7SUFBTTtBQUN0QjtBQUVPLGVBQWVVLFdBQVdkLFFBQVEsRUFBRUMsTUFBTSxFQUFFVyxNQUFNO0lBQ3hELE1BQU0sRUFBRVIsS0FBSyxFQUFFLEdBQUcsTUFBTUosU0FDdEJLLElBQUksQ0FBQyxTQUNMVSxNQUFNLEdBQ05MLEVBQUUsQ0FBQyxNQUFNRSxRQUNURixFQUFFLENBQUMsV0FBV1Q7SUFDaEIsT0FBTztRQUFFRztJQUFNO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc2VydmljZXMvdGFza1NlcnZpY2UuanM/ZDA1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGFzayhzdXBhYmFzZSwgdXNlcklkLCB0YXNrRGF0YSkge1xuXHRjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwidGFza3NcIikuaW5zZXJ0KHtcblx0XHQuLi50YXNrRGF0YSxcblx0XHR1c2VyX2lkOiB1c2VySWQsXG5cdH0pO1xuXHRyZXR1cm4geyBkYXRhLCBlcnJvciB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFza3Moc3VwYWJhc2UsIHVzZXJJZCkge1xuXHRjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuXHRcdC5mcm9tKFwidGFza3NcIilcblx0XHQuc2VsZWN0KFwiKlwiKVxuXHRcdC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcblx0cmV0dXJuIHsgZGF0YSwgZXJyb3IgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRhc2soc3VwYWJhc2UsIHVzZXJJZCwgdGFza0lkLCB0YXNrRGF0YSkge1xuXHRjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuXHRcdC5mcm9tKFwidGFza3NcIilcblx0XHQudXBkYXRlKHRhc2tEYXRhKVxuXHRcdC5lcShcImlkXCIsIHRhc2tJZClcblx0XHQuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XG5cdHJldHVybiB7IGRhdGEsIGVycm9yIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYXNrKHN1cGFiYXNlLCB1c2VySWQsIHRhc2tJZCkge1xuXHRjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuXHRcdC5mcm9tKFwidGFza3NcIilcblx0XHQuZGVsZXRlKClcblx0XHQuZXEoXCJpZFwiLCB0YXNrSWQpXG5cdFx0LmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xuXHRyZXR1cm4geyBlcnJvciB9O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVRhc2siLCJzdXBhYmFzZSIsInVzZXJJZCIsInRhc2tEYXRhIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsImluc2VydCIsInVzZXJfaWQiLCJnZXRUYXNrcyIsInNlbGVjdCIsImVxIiwidXBkYXRlVGFzayIsInRhc2tJZCIsInVwZGF0ZSIsImRlbGV0ZVRhc2siLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/supabase/services/taskService.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/supabase/supabaseClient.js":
/*!**********************************************!*\
  !*** ./src/utils/supabase/supabaseClient.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSupabaseClient: () => (/* binding */ createSupabaseClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://vrqgmmctnngzkiqiqtrv.supabase.co\";\nconst supabaseKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWdtbWN0bm5nemtpcWlxdHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxOTk3MjYsImV4cCI6MjAyMTc3NTcyNn0.jVZfpb43ofKiLenOHbfG2SRksnZnXNazU-imwukH9YY\";\nconst createSupabaseClient = (accessToken)=>{\n    const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey, {\n        global: {\n            headers: {\n                Authorization: `Bearer ${accessToken}`\n            }\n        }\n    });\n    return supabase;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc3VwYWJhc2VDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGNBQWNILGtOQUFvQztBQUVqRCxNQUFNSyx1QkFBdUIsQ0FBQ0M7SUFDcEMsTUFBTUMsV0FBV1QsbUVBQVlBLENBQUNDLGFBQWFJLGFBQWE7UUFDdkRLLFFBQVE7WUFDUEMsU0FBUztnQkFDUkMsZUFBZSxDQUFDLE9BQU8sRUFBRUosWUFBWSxDQUFDO1lBQ3ZDO1FBQ0Q7SUFDRDtJQUVBLE9BQU9DO0FBQ1IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLy4vc3JjL3V0aWxzL3N1cGFiYXNlL3N1cGFiYXNlQ2xpZW50LmpzP2ExYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcbmNvbnN0IHN1cGFiYXNlS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfS0VZO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3VwYWJhc2VDbGllbnQgPSAoYWNjZXNzVG9rZW4pID0+IHtcblx0Y29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlS2V5LCB7XG5cdFx0Z2xvYmFsOiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gc3VwYWJhc2U7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlS2V5IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfS0VZIiwiY3JlYXRlU3VwYWJhc2VDbGllbnQiLCJhY2Nlc3NUb2tlbiIsInN1cGFiYXNlIiwiZ2xvYmFsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/supabase/supabaseClient.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2Fread%2Froute&page=%2Fapi%2Ftasks%2Fread%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Fread%2Froute.js&appDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgustavojordao%2FDownloads%2F_dev%2Fdonezo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();