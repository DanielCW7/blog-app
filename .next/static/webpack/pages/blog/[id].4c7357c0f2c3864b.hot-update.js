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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utils/loader */ \"./components/utils/loader.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity/sanity-utils */ \"./sanity/sanity-utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PostPage = (param)=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(param, data === null || data === void 0 ? void 0 : data.avatar);\n    const components = {\n        block: {\n            h3: (param)=>{\n                let { children } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"font-semibold text-xl mt-10 mb-2\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 33\n                }, undefined);\n            },\n            strong: (param)=>{\n                let { children } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    className: \"text-bold\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 37\n                }, undefined);\n            },\n            p: (param)=>{\n                let { children } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-900\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 32\n                }, undefined);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            try {\n                const postData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__.getPost)(router.query.id);\n                console.log(postData);\n                setData(postData);\n            } catch (err) {\n                console.error(err);\n            } finally{\n                setLoading(false);\n            }\n        };\n        router.query.id && fetchData();\n    }, [\n        router.query.id\n    ]);\n    var _data_thumbnail;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-10 m-auto\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 45,\n            columnNumber: 33\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"max-w-3xl m-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6 text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: (_data_thumbnail = data === null || data === void 0 ? void 0 : data.thumbnail) !== null && _data_thumbnail !== void 0 ? _data_thumbnail : \"\",\n                        width: 1000,\n                        height: 1000,\n                        className: \"max-w-full lg:max-w-3xl rounded-xl mb-6 mx-auto\",\n                        style: {\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold mb-10\",\n                        children: [\n                            \" \",\n                            data.topic,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 50,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {\n                        value: data.content,\n                        components: components\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 51,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-6 flex flex-row\",\n                        children: [\n                            data.avatar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-28 w-28 overflow-hidden rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    src: data.avatar,\n                                    width: 200,\n                                    height: 200,\n                                    className: \"authorPic\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 41\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 57,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col justify-center m-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg\",\n                                        children: [\n                                            \"By: \",\n                                            data.author\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                        lineNumber: 62,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        children: [\n                                            \" \",\n                                            data.date,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 61,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 53,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 48,\n                columnNumber: 25\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 47,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PostPage, \"KlMdQtZOuXDT5TBlXlI36x4WIO0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNPO0FBQ0M7QUFDckI7QUFDb0I7QUFFbkQsTUFBTU8sV0FBVyxDQUFDQzs7SUFFZCxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1XLFNBQVNiLHNEQUFTQTtJQUV4QmMsUUFBUUMsR0FBRyxDQUFDUCxPQUFPRyxpQkFBQUEsMkJBQUFBLEtBQU1LLE1BQU07SUFFL0IsTUFBTUMsYUFBYTtRQUNmQyxPQUFPO1lBQ0hDLElBQUk7b0JBQUMsRUFBQ0MsUUFBUSxFQUFDO3FDQUFLLDhEQUFDRDtvQkFBR0UsV0FBVTs4QkFBb0NEOzs7Ozs7O1lBQ3RFRSxRQUFRO29CQUFDLEVBQUNGLFFBQVEsRUFBQztxQ0FBSyw4REFBQ0U7b0JBQU9ELFdBQVU7OEJBQWFEOzs7Ozs7O1lBQ3ZERyxHQUFHO29CQUFDLEVBQUNILFFBQVEsRUFBQztxQ0FBSyw4REFBQ0c7b0JBQUVGLFdBQVU7OEJBQWdCRDs7Ozs7OztRQUNwRDtJQUNKO0lBRUFuQixnREFBU0EsQ0FBQztRQUNOLE1BQU11QixZQUFZO1lBQ2RkLFdBQVc7WUFDWCxJQUFJO2dCQUNBLE1BQU1lLFdBQVcsTUFBTXJCLDZEQUFPQSxDQUFDUyxPQUFPYSxLQUFLLENBQUNDLEVBQUU7Z0JBQzlDYixRQUFRQyxHQUFHLENBQUNVO2dCQUVaYixRQUFRYTtZQUNaLEVBQUUsT0FBT0csS0FBSztnQkFDVmQsUUFBUWUsS0FBSyxDQUFDRDtZQUNsQixTQUFVO2dCQUNObEIsV0FBVztZQUNmO1FBQ0o7UUFFQUcsT0FBT2EsS0FBSyxDQUFDQyxFQUFFLElBQUlIO0lBQ3ZCLEdBQUc7UUFBQ1gsT0FBT2EsS0FBSyxDQUFDQyxFQUFFO0tBQUM7UUFTZ0JoQjtJQVBwQyxxQkFDSSw4REFBQ21CO1FBQUlULFdBQVU7a0JBRUhaLDBCQUFZLDhEQUFDTixnRUFBTUE7Ozs7c0NBRW5CLDhEQUFDNEI7WUFBUVYsV0FBVTtzQkFDZiw0RUFBQ1M7Z0JBQUlULFdBQVU7O2tDQUNYLDhEQUFDaEIsbURBQUtBO3dCQUFDMkIsS0FBS3JCLENBQUFBLGtCQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1zQixTQUFTLGNBQWZ0Qiw2QkFBQUEsa0JBQW1CO3dCQUFJdUIsT0FBTzt3QkFBTUMsUUFBUTt3QkFBTWQsV0FBVTt3QkFBa0RlLE9BQU87NEJBQUVDLFdBQVc7d0JBQU87Ozs7OztrQ0FDckosOERBQUNDO3dCQUFHakIsV0FBVTs7NEJBQTJCOzRCQUFFVixLQUFLNEIsS0FBSzs0QkFBQzs7Ozs7OztrQ0FDdEQsOERBQUNqQyw2REFBWUE7d0JBQUNrQyxPQUFPN0IsS0FBSzhCLE9BQU87d0JBQUV4QixZQUFZQTs7Ozs7O2tDQUUvQyw4REFBQ2E7d0JBQUlULFdBQVU7OzRCQUdQVixLQUFLSyxNQUFNLGtCQUNYLDhEQUFDYztnQ0FBSVQsV0FBVTswQ0FDWCw0RUFBQ2hCLG1EQUFLQTtvQ0FBQzJCLEtBQUtyQixLQUFLSyxNQUFNO29DQUFFa0IsT0FBTztvQ0FBS0MsUUFBUTtvQ0FBS2QsV0FBVTs7Ozs7Ozs7Ozs7MENBR3BFLDhEQUFDUztnQ0FBSVQsV0FBVTs7a0RBQ1gsOERBQUNFO3dDQUFFRixXQUFVOzs0Q0FBVTs0Q0FBS1YsS0FBSytCLE1BQU07Ozs7Ozs7a0RBQ3ZDLDhEQUFDQzs7NENBQU07NENBQUVoQyxLQUFLaUMsSUFBSTs0Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkQ7R0FoRU1yQzs7UUFJYVAsa0RBQVNBOzs7S0FKdEJPO0FBa0VOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW2lkXS5qcz81YzllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvbG9hZGVyXCI7XHJcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tIFwiLi4vLi4vc2FuaXR5L3Nhbml0eS11dGlsc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcclxuXHJcbmNvbnN0IFBvc3RQYWdlID0gKHBhcmFtKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtLCBkYXRhPy5hdmF0YXIpXHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICBoMzogKHtjaGlsZHJlbn0pID0+IDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgbXQtMTAgbWItMlwiPntjaGlsZHJlbn08L2gzPixcclxuICAgICAgICAgICAgc3Ryb25nOiAoe2NoaWxkcmVufSkgPT4gPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj57Y2hpbGRyZW59PC9zdHJvbmc+LFxyXG4gICAgICAgICAgICBwOiAoe2NoaWxkcmVufSkgPT4gPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtOTAwXCI+e2NoaWxkcmVufTwvcD5cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiAgeyBcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdChyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0RGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHBvc3REYXRhKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSkgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5xdWVyeS5pZCAmJiBmZXRjaERhdGEoKSBcclxuICAgIH0sIFtyb3V0ZXIucXVlcnkuaWRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHAtMTAgbS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IDxMb2FkZXIgLz4gOiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhPy50aHVtYm5haWwgPz8gXCJcIn0gd2lkdGg9ezEwMDB9IGhlaWdodD17MTAwMH0gY2xhc3NOYW1lPVwibWF4LXctZnVsbCBsZzptYXgtdy0zeGwgcm91bmRlZC14bCBtYi02IG14LWF1dG9cIiBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItMTBcIj4ge2RhdGEudG9waWN9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtkYXRhLmNvbnRlbnR9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02IGZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbmVlZCBhIHN0b2NrIHByb2ZpbGUgaW1hZ2UganVzdCBpbiBjYXNlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXZhdGFyICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjggdy0yOCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhLmF2YXRhcn0gd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IGNsYXNzTmFtZT1cImF1dGhvclBpY1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkJ5OiB7ZGF0YS5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+IHtkYXRhLmRhdGV9IDwvc21hbGw+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlXHJcblxyXG4gICJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsImdldFBvc3QiLCJJbWFnZSIsIlBvcnRhYmxlVGV4dCIsIlBvc3RQYWdlIiwicGFyYW0iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiYXZhdGFyIiwiY29tcG9uZW50cyIsImJsb2NrIiwiaDMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsInAiLCJmZXRjaERhdGEiLCJwb3N0RGF0YSIsInF1ZXJ5IiwiaWQiLCJlcnIiLCJlcnJvciIsImRpdiIsInNlY3Rpb24iLCJzcmMiLCJ0aHVtYm5haWwiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib2JqZWN0Rml0IiwiaDIiLCJ0b3BpYyIsInZhbHVlIiwiY29udGVudCIsImF1dGhvciIsInNtYWxsIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});