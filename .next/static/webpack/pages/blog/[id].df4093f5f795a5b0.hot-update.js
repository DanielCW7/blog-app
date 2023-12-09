"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[id]",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utils/loader */ \"./components/utils/loader.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity/sanity-utils */ \"./sanity/sanity-utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PostPage = (param)=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log(param, router.query.id, data)\n    const components = {\n        block: {\n            h3: (param)=>{\n                let { children } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"font-semibold text-xl mt-10 mb-2\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 33\n                }, undefined);\n            },\n            strong: (param)=>{\n                let { children } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    className: \"text-bold\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 37\n                }, undefined);\n            },\n            p: (param)=>{\n                let { children } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-900\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 32\n                }, undefined);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            try {\n                const postData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__.getPost)(router.query.id);\n                console.log(postData.content);\n                setData(postData);\n            } catch (err) {\n                console.error(err);\n            } finally{\n                setLoading(false);\n            }\n        };\n        router.query.id && fetchData();\n    }, [\n        router.query.id\n    ]);\n    var _data_thumbnail;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-10 m-auto\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 48,\n            columnNumber: 33\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"max-w-3xl m-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6 text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: (_data_thumbnail = data === null || data === void 0 ? void 0 : data.thumbnail) !== null && _data_thumbnail !== void 0 ? _data_thumbnail : \"\",\n                        width: 1000,\n                        height: 1000,\n                        className: \"max-w-full lg:max-w-3xl rounded-xl mb-6 mx-auto\",\n                        style: {\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 52,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold\",\n                        children: [\n                            \" \",\n                            data.topic,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 53,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"By: \",\n                                    data.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 56,\n                                columnNumber: 33\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: [\n                                    \" \",\n                                    data.date,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 57,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 55,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {\n                        value: data.content,\n                        components: components\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 59,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 51,\n                columnNumber: 25\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 50,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PostPage, \"KlMdQtZOuXDT5TBlXlI36x4WIO0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNPO0FBQ0M7QUFDckI7QUFDb0I7QUFFbkQsTUFBTU8sV0FBVyxDQUFDQzs7SUFFZCxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1XLFNBQVNiLHNEQUFTQTtJQUV4Qiw0Q0FBNEM7SUFFNUMsTUFBTWMsYUFBYTtRQUNmQyxPQUFPO1lBQ0hDLElBQUk7b0JBQUMsRUFBQ0MsUUFBUSxFQUFDO3FDQUFLLDhEQUFDRDtvQkFBR0UsV0FBVTs4QkFBb0NEOzs7Ozs7O1lBQ3RFRSxRQUFRO29CQUFDLEVBQUNGLFFBQVEsRUFBQztxQ0FBSyw4REFBQ0U7b0JBQU9ELFdBQVU7OEJBQWFEOzs7Ozs7O1lBQ3ZERyxHQUFHO29CQUFDLEVBQUNILFFBQVEsRUFBQztxQ0FBSyw4REFBQ0c7b0JBQUVGLFdBQVU7OEJBQWdCRDs7Ozs7OztRQUNwRDtJQUlKO0lBRUFoQixnREFBU0EsQ0FBQztRQUNOLE1BQU1vQixZQUFZO1lBQ2RYLFdBQVc7WUFDWCxJQUFJO2dCQUNBLE1BQU1ZLFdBQVcsTUFBTWxCLDZEQUFPQSxDQUFDUyxPQUFPVSxLQUFLLENBQUNDLEVBQUU7Z0JBQzlDQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNLLE9BQU87Z0JBRTVCZixRQUFRVTtZQUNaLEVBQUUsT0FBT00sS0FBSztnQkFDVkgsUUFBUUksS0FBSyxDQUFDRDtZQUNsQixTQUFVO2dCQUNObEIsV0FBVztZQUNmO1FBQ0o7UUFFQUcsT0FBT1UsS0FBSyxDQUFDQyxFQUFFLElBQUlIO0lBQ3ZCLEdBQUc7UUFBQ1IsT0FBT1UsS0FBSyxDQUFDQyxFQUFFO0tBQUM7UUFTZ0JiO0lBUHBDLHFCQUNJLDhEQUFDbUI7UUFBSVosV0FBVTtrQkFFSFQsMEJBQVksOERBQUNOLGdFQUFNQTs7OztzQ0FFbkIsOERBQUM0QjtZQUFRYixXQUFVO3NCQUNmLDRFQUFDWTtnQkFBSVosV0FBVTs7a0NBQ1gsOERBQUNiLG1EQUFLQTt3QkFBQzJCLEtBQUtyQixDQUFBQSxrQkFBQUEsaUJBQUFBLDJCQUFBQSxLQUFNc0IsU0FBUyxjQUFmdEIsNkJBQUFBLGtCQUFtQjt3QkFBSXVCLE9BQU87d0JBQU1DLFFBQVE7d0JBQU1qQixXQUFVO3dCQUFrRGtCLE9BQU87NEJBQUVDLFdBQVc7d0JBQU87Ozs7OztrQ0FDckosOERBQUNDO3dCQUFHcEIsV0FBVTs7NEJBQXFCOzRCQUFFUCxLQUFLNEIsS0FBSzs0QkFBQzs7Ozs7OztrQ0FFaEQsOERBQUNUO3dCQUFJWixXQUFVOzswQ0FDWCw4REFBQ0U7O29DQUFFO29DQUFLVCxLQUFLNkIsTUFBTTs7Ozs7OzswQ0FDbkIsOERBQUNDOztvQ0FBTTtvQ0FBRTlCLEtBQUsrQixJQUFJO29DQUFDOzs7Ozs7Ozs7Ozs7O2tDQUV2Qiw4REFBQ3BDLDZEQUFZQTt3QkFBQ3FDLE9BQU9oQyxLQUFLZ0IsT0FBTzt3QkFBRWIsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0U7R0ExRE1QOztRQUlhUCxrREFBU0E7OztLQUp0Qk87QUE0RE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9baWRdLmpzPzVjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9sb2FkZXJcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gXCIuLi8uLi9zYW5pdHkvc2FuaXR5LXV0aWxzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xyXG5cclxuY29uc3QgUG9zdFBhZ2UgPSAocGFyYW0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cocGFyYW0sIHJvdXRlci5xdWVyeS5pZCwgZGF0YSlcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGJsb2NrOiB7XHJcbiAgICAgICAgICAgIGgzOiAoe2NoaWxkcmVufSkgPT4gPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14bCBtdC0xMCBtYi0yXCI+e2NoaWxkcmVufTwvaDM+LFxyXG4gICAgICAgICAgICBzdHJvbmc6ICh7Y2hpbGRyZW59KSA9PiA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtYm9sZFwiPntjaGlsZHJlbn08L3N0cm9uZz4sXHJcbiAgICAgICAgICAgIHA6ICh7Y2hpbGRyZW59KSA9PiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC05MDBcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gdHlwZXM6IHtcclxuICAgICAgICAvLyAgICAgY29kZTogXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiAgeyBcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdChyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0RGF0YS5jb250ZW50KVxyXG5cclxuICAgICAgICAgICAgICAgIHNldERhdGEocG9zdERhdGEpXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKSAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnF1ZXJ5LmlkICYmIGZldGNoRGF0YSgpIFxyXG4gICAgfSwgW3JvdXRlci5xdWVyeS5pZF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgcC0xMCBtLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gPExvYWRlciAvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1heC13LTN4bCBtLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGE/LnRodW1ibmFpbCA/PyBcIlwifSB3aWR0aD17MTAwMH0gaGVpZ2h0PXsxMDAwfSBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIGxnOm1heC13LTN4bCByb3VuZGVkLXhsIG1iLTYgbXgtYXV0b1wiIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwifX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPiB7ZGF0YS50b3BpY30gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qnk6IHtkYXRhLmF1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7ZGF0YS5kYXRlfSA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17ZGF0YS5jb250ZW50fSBjb21wb25lbnRzPXtjb21wb25lbnRzfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlXHJcblxyXG4gICJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsImdldFBvc3QiLCJJbWFnZSIsIlBvcnRhYmxlVGV4dCIsIlBvc3RQYWdlIiwicGFyYW0iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJyb3V0ZXIiLCJjb21wb25lbnRzIiwiYmxvY2siLCJoMyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwicCIsImZldGNoRGF0YSIsInBvc3REYXRhIiwicXVlcnkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwiZXJyIiwiZXJyb3IiLCJkaXYiLCJzZWN0aW9uIiwic3JjIiwidGh1bWJuYWlsIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9iamVjdEZpdCIsImgyIiwidG9waWMiLCJhdXRob3IiLCJzbWFsbCIsImRhdGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});