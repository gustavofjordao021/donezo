"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/main/page",{

/***/ "(app-pages-browser)/./src/app/main/page.js":
/*!******************************!*\
  !*** ./src/app/main/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.jsx\");\n/* harmony import */ var _barrel_optimize_names_BiLogOut_react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BiLogOut!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_supabase_supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/supabase/supabaseClient */ \"(app-pages-browser)/./src/utils/supabase/supabaseClient.js\");\n/* harmony import */ var _components_ui_resizable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/resizable */ \"(app-pages-browser)/./src/components/ui/resizable.jsx\");\n/* harmony import */ var _utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/supabase/services/authService */ \"(app-pages-browser)/./src/utils/supabase/services/authService.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const checkUserSession = async ()=>{\n        const supabase = (0,_utils_supabase_supabaseClient__WEBPACK_IMPORTED_MODULE_4__.createSupabaseClient)();\n        const { data: { session }, error } = await supabase.auth.getSession();\n        if (error) {\n            console.error(\"Error retrieving session:\", error.message);\n            throw error;\n        }\n        console.log(\"Session from Supabase:\", session);\n        if (session) {\n            const authenticatedSupabase = (0,_utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_6__.initSupabase)(session.access_token);\n            const user = await (0,_utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_6__.getUser)(authenticatedSupabase);\n            if (!user) {\n                console.error(\"User not found\");\n                throw new Error(\"User not found\");\n            }\n            return authenticatedSupabase;\n        }\n        console.log(\"No active session\");\n        return null;\n    };\n    const handleSignOut = async ()=>{\n        try {\n            const supabase = await checkUserSession();\n            if (supabase) {\n                try {\n                    await (0,_utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_6__.signOut)(supabase);\n                    console.log(\"Sign-out successful\");\n                } catch (error) {\n                    console.error(\"Error during sign-out:\", error.message);\n                    throw error; // Rethrow the error to be caught by the outer catch block\n                }\n            } else {\n                console.error(\"Supabase client is null\");\n                throw new Error(\"Supabase client is null\"); // Throw an error to be caught by the outer catch block\n            }\n            router.push(\"/login\").catch((error)=>{\n                console.error(\"Error navigating to /login:\", error);\n            });\n        } catch (error) {\n            console.error(\"Error in handleSignOut:\", error.message);\n        // Handle the error appropriately, e.g., display an error message to the user\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const initializeSupabase = async ()=>{\n            const supabase = await checkUserSession();\n            if (supabase) {\n                const unsubscribe = (0,_utils_supabase_services_authService__WEBPACK_IMPORTED_MODULE_6__.onAuthStateChange)(supabase, (event, session)=>{\n                    switch(event){\n                        case \"SIGNED_IN\":\n                            break;\n                        case \"SIGNED_OUT\":\n                            handleSignOut();\n                            break;\n                        default:\n                            break;\n                    }\n                });\n                return ()=>{\n                    unsubscribe();\n                };\n            }\n        };\n        initializeSupabase();\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full w-full flex flex-row\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between space-y-2 h-full w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_resizable__WEBPACK_IMPORTED_MODULE_5__.ResizablePanelGroup, {\n                direction: \"horizontal\",\n                className: \"min-h-[200px] rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_resizable__WEBPACK_IMPORTED_MODULE_5__.ResizablePanel, {\n                        defaultSize: 15,\n                        maxSize: 15,\n                        minSize: 5,\n                        className: \"bg-slate-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex h-full items-center justify-center p-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold\",\n                                children: \"Header\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                                lineNumber: 118,\n                                columnNumber: 8\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                            lineNumber: 117,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                        lineNumber: 111,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_resizable__WEBPACK_IMPORTED_MODULE_5__.ResizableHandle, {\n                        withHandle: true\n                    }, void 0, false, {\n                        fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                        lineNumber: 121,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_resizable__WEBPACK_IMPORTED_MODULE_5__.ResizablePanel, {\n                        defaultSize: 85,\n                        minSize: 60,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-2xl font-bold tracking-tight\",\n                                            children: \"Welcome back!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-muted-foreground\",\n                                            children: \"Here's a list of your tasks for this month!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                                            lineNumber: 128,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    variant: \"destructive\",\n                                    onClick: handleSignOut,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiLogOut_react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiLogOut, {\n                                            className: \"mr-2 h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                                            lineNumber: 133,\n                                            columnNumber: 9\n                                        }, this),\n                                        \"Logout\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 8\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                            lineNumber: 123,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                        lineNumber: 122,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n                lineNumber: 107,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n            lineNumber: 106,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gustavojordao/Downloads/_dev/donezo/src/app/main/page.js\",\n        lineNumber: 105,\n        columnNumber: 3\n    }, this);\n}\n_s(Page, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNOO0FBQ0U7QUFDVjtBQUN5QztBQUt4QztBQU1nQjtBQUVwQyxTQUFTWTs7SUFDdkIsTUFBTUMsU0FBU1gsMERBQVNBO0lBRXhCLE1BQU1ZLG1CQUFtQjtRQUN4QixNQUFNQyxXQUFXWCxvRkFBb0JBO1FBQ3JDLE1BQU0sRUFDTFksTUFBTSxFQUFFQyxPQUFPLEVBQUUsRUFDakJDLEtBQUssRUFDTCxHQUFHLE1BQU1ILFNBQVNJLElBQUksQ0FBQ0MsVUFBVTtRQUVsQyxJQUFJRixPQUFPO1lBQ1ZHLFFBQVFILEtBQUssQ0FBQyw2QkFBNkJBLE1BQU1JLE9BQU87WUFDeEQsTUFBTUo7UUFDUDtRQUVBRyxRQUFRRSxHQUFHLENBQUMsMEJBQTBCTjtRQUV0QyxJQUFJQSxTQUFTO1lBQ1osTUFBTU8sd0JBQXdCZCxrRkFBWUEsQ0FBQ08sUUFBUVEsWUFBWTtZQUMvRCxNQUFNQyxPQUFPLE1BQU1sQiw2RUFBT0EsQ0FBQ2dCO1lBRTNCLElBQUksQ0FBQ0UsTUFBTTtnQkFDVkwsUUFBUUgsS0FBSyxDQUFDO2dCQUNkLE1BQU0sSUFBSVMsTUFBTTtZQUNqQjtZQUVBLE9BQU9IO1FBQ1I7UUFFQUgsUUFBUUUsR0FBRyxDQUFDO1FBQ1osT0FBTztJQUNSO0lBRUEsTUFBTUssZ0JBQWdCO1FBQ3JCLElBQUk7WUFDSCxNQUFNYixXQUFXLE1BQU1EO1lBQ3ZCLElBQUlDLFVBQVU7Z0JBQ2IsSUFBSTtvQkFDSCxNQUFNTiw2RUFBT0EsQ0FBQ007b0JBQ2RNLFFBQVFFLEdBQUcsQ0FBQztnQkFDYixFQUFFLE9BQU9MLE9BQU87b0JBQ2ZHLFFBQVFILEtBQUssQ0FBQywwQkFBMEJBLE1BQU1JLE9BQU87b0JBQ3JELE1BQU1KLE9BQU8sMERBQTBEO2dCQUN4RTtZQUNELE9BQU87Z0JBQ05HLFFBQVFILEtBQUssQ0FBQztnQkFDZCxNQUFNLElBQUlTLE1BQU0sNEJBQTRCLHVEQUF1RDtZQUNwRztZQUVBZCxPQUFPZ0IsSUFBSSxDQUFDLFVBQVVDLEtBQUssQ0FBQyxDQUFDWjtnQkFDNUJHLFFBQVFILEtBQUssQ0FBQywrQkFBK0JBO1lBQzlDO1FBQ0QsRUFBRSxPQUFPQSxPQUFPO1lBQ2ZHLFFBQVFILEtBQUssQ0FBQywyQkFBMkJBLE1BQU1JLE9BQU87UUFDdEQsNkVBQTZFO1FBQzlFO0lBQ0Q7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTTRCLHFCQUFxQjtZQUMxQixNQUFNaEIsV0FBVyxNQUFNRDtZQUV2QixJQUFJQyxVQUFVO2dCQUNiLE1BQU1pQixjQUFjckIsdUZBQWlCQSxDQUFDSSxVQUFVLENBQUNrQixPQUFPaEI7b0JBQ3ZELE9BQVFnQjt3QkFDUCxLQUFLOzRCQUNKO3dCQUNELEtBQUs7NEJBQ0pMOzRCQUNBO3dCQUNEOzRCQUNDO29CQUNGO2dCQUNEO2dCQUVBLE9BQU87b0JBQ05JO2dCQUNEO1lBQ0Q7UUFDRDtRQUVBRDtJQUNELEdBQUc7UUFBQ2xCO0tBQU87SUFFWCxxQkFDQyw4REFBQ3FCO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2QsNEVBQUM1Qix5RUFBbUJBO2dCQUNuQjZCLFdBQVU7Z0JBQ1ZELFdBQVU7O2tDQUVWLDhEQUFDN0Isb0VBQWNBO3dCQUNkK0IsYUFBYTt3QkFDYkMsU0FBUzt3QkFDVEMsU0FBUzt3QkFDVEosV0FBVTtrQ0FFViw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2QsNEVBQUNLO2dDQUFLTCxXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbEMsOERBQUM5QixxRUFBZUE7d0JBQUNvQyxVQUFVOzs7Ozs7a0NBQzNCLDhEQUFDbkMsb0VBQWNBO3dCQUFDK0IsYUFBYTt3QkFBSUUsU0FBUztrQ0FDekMsNEVBQUNMOzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ0Q7O3NEQUNBLDhEQUFDUTs0Q0FBR1AsV0FBVTtzREFBb0M7Ozs7OztzREFHbEQsOERBQUNROzRDQUFFUixXQUFVO3NEQUF3Qjs7Ozs7Ozs7Ozs7OzhDQUl0Qyw4REFBQ25DLHlEQUFNQTtvQ0FBQzRDLFNBQVE7b0NBQWNDLFNBQVNqQjs7c0RBQ3RDLDhEQUFDM0Isb0ZBQVFBOzRDQUFDa0MsV0FBVTs7Ozs7O3dDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3QztHQTFId0J2Qjs7UUFDUlYsc0RBQVNBOzs7S0FERFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYWluL3BhZ2UuanM/ZTA1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IEJpTG9nT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3N1cGFiYXNlL3N1cGFiYXNlQ2xpZW50XCI7XG5pbXBvcnQge1xuXHRSZXNpemFibGVIYW5kbGUsXG5cdFJlc2l6YWJsZVBhbmVsLFxuXHRSZXNpemFibGVQYW5lbEdyb3VwLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Jlc2l6YWJsZVwiO1xuaW1wb3J0IHtcblx0Z2V0VXNlcixcblx0c2lnbk91dCxcblx0aW5pdFN1cGFiYXNlLFxuXHRvbkF1dGhTdGF0ZUNoYW5nZSxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL3N1cGFiYXNlL3NlcnZpY2VzL2F1dGhTZXJ2aWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IGNoZWNrVXNlclNlc3Npb24gPSBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVTdXBhYmFzZUNsaWVudCgpO1xuXHRcdGNvbnN0IHtcblx0XHRcdGRhdGE6IHsgc2Vzc2lvbiB9LFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xuXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgcmV0cmlldmluZyBzZXNzaW9uOlwiLCBlcnJvci5tZXNzYWdlKTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKFwiU2Vzc2lvbiBmcm9tIFN1cGFiYXNlOlwiLCBzZXNzaW9uKTtcblxuXHRcdGlmIChzZXNzaW9uKSB7XG5cdFx0XHRjb25zdCBhdXRoZW50aWNhdGVkU3VwYWJhc2UgPSBpbml0U3VwYWJhc2Uoc2Vzc2lvbi5hY2Nlc3NfdG9rZW4pO1xuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoYXV0aGVudGljYXRlZFN1cGFiYXNlKTtcblxuXHRcdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhdXRoZW50aWNhdGVkU3VwYWJhc2U7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coXCJObyBhY3RpdmUgc2Vzc2lvblwiKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNoZWNrVXNlclNlc3Npb24oKTtcblx0XHRcdGlmIChzdXBhYmFzZSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IHNpZ25PdXQoc3VwYWJhc2UpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU2lnbi1vdXQgc3VjY2Vzc2Z1bFwiKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHNpZ24tb3V0OlwiLCBlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjsgLy8gUmV0aHJvdyB0aGUgZXJyb3IgdG8gYmUgY2F1Z2h0IGJ5IHRoZSBvdXRlciBjYXRjaCBibG9ja1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiU3VwYWJhc2UgY2xpZW50IGlzIG51bGxcIik7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlN1cGFiYXNlIGNsaWVudCBpcyBudWxsXCIpOyAvLyBUaHJvdyBhbiBlcnJvciB0byBiZSBjYXVnaHQgYnkgdGhlIG91dGVyIGNhdGNoIGJsb2NrXG5cdFx0XHR9XG5cblx0XHRcdHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpLmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgbmF2aWdhdGluZyB0byAvbG9naW46XCIsIGVycm9yKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gaGFuZGxlU2lnbk91dDpcIiwgZXJyb3IubWVzc2FnZSk7XG5cdFx0XHQvLyBIYW5kbGUgdGhlIGVycm9yIGFwcHJvcHJpYXRlbHksIGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxuXHRcdH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGluaXRpYWxpemVTdXBhYmFzZSA9IGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY2hlY2tVc2VyU2Vzc2lvbigpO1xuXG5cdFx0XHRpZiAoc3VwYWJhc2UpIHtcblx0XHRcdFx0Y29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZShzdXBhYmFzZSwgKGV2ZW50LCBzZXNzaW9uKSA9PiB7XG5cdFx0XHRcdFx0c3dpdGNoIChldmVudCkge1xuXHRcdFx0XHRcdFx0Y2FzZSBcIlNJR05FRF9JTlwiOlxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgXCJTSUdORURfT1VUXCI6XG5cdFx0XHRcdFx0XHRcdGhhbmRsZVNpZ25PdXQoKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0dW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aW5pdGlhbGl6ZVN1cGFiYXNlKCk7XG5cdH0sIFtyb3V0ZXJdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGZsZXgtcm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTIgaC1mdWxsIHctZnVsbFwiPlxuXHRcdFx0XHQ8UmVzaXphYmxlUGFuZWxHcm91cFxuXHRcdFx0XHRcdGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1pbi1oLVsyMDBweF0gcm91bmRlZC1sZ1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8UmVzaXphYmxlUGFuZWxcblx0XHRcdFx0XHRcdGRlZmF1bHRTaXplPXsxNX1cblx0XHRcdFx0XHRcdG1heFNpemU9ezE1fVxuXHRcdFx0XHRcdFx0bWluU2l6ZT17NX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLXNsYXRlLTIwMFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC02XCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5IZWFkZXI8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L1Jlc2l6YWJsZVBhbmVsPlxuXHRcdFx0XHRcdDxSZXNpemFibGVIYW5kbGUgd2l0aEhhbmRsZSAvPlxuXHRcdFx0XHRcdDxSZXNpemFibGVQYW5lbCBkZWZhdWx0U2l6ZT17ODV9IG1pblNpemU9ezYwfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFdlbGNvbWUgYmFjayFcblx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0SGVyZSZhcG9zO3MgYSBsaXN0IG9mIHlvdXIgdGFza3MgZm9yIHRoaXMgbW9udGghXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5cblx0XHRcdFx0XHRcdFx0XHQ8QmlMb2dPdXQgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRMb2dvdXRcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L1Jlc2l6YWJsZVBhbmVsPlxuXHRcdFx0XHQ8L1Jlc2l6YWJsZVBhbmVsR3JvdXA+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCaUxvZ091dCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNyZWF0ZVN1cGFiYXNlQ2xpZW50IiwiUmVzaXphYmxlSGFuZGxlIiwiUmVzaXphYmxlUGFuZWwiLCJSZXNpemFibGVQYW5lbEdyb3VwIiwiZ2V0VXNlciIsInNpZ25PdXQiLCJpbml0U3VwYWJhc2UiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIlBhZ2UiLCJyb3V0ZXIiLCJjaGVja1VzZXJTZXNzaW9uIiwic3VwYWJhc2UiLCJkYXRhIiwic2Vzc2lvbiIsImVycm9yIiwiYXV0aCIsImdldFNlc3Npb24iLCJjb25zb2xlIiwibWVzc2FnZSIsImxvZyIsImF1dGhlbnRpY2F0ZWRTdXBhYmFzZSIsImFjY2Vzc190b2tlbiIsInVzZXIiLCJFcnJvciIsImhhbmRsZVNpZ25PdXQiLCJwdXNoIiwiY2F0Y2giLCJpbml0aWFsaXplU3VwYWJhc2UiLCJ1bnN1YnNjcmliZSIsImV2ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwiZGVmYXVsdFNpemUiLCJtYXhTaXplIiwibWluU2l6ZSIsInNwYW4iLCJ3aXRoSGFuZGxlIiwiaDIiLCJwIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/main/page.js\n"));

/***/ })

});