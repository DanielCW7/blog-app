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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utils/loader */ \"./components/utils/loader.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity/sanity-utils */ \"./sanity/sanity-utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostPage = (param)=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(param, router.query.id, data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            try {\n                const postData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__.getPost)(router.query.id);\n                console.log(postData);\n                setData(postData);\n            } catch (err) {\n                console.error(err);\n            } finally{\n                setLoading(false);\n            }\n        };\n        router.query.id && fetchData();\n    }, [\n        router.query.id\n    ]);\n    var _data_thumbnail;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-10 max-w-7xl m-auto\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 37,\n            columnNumber: 33\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6 text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: (_data_thumbnail = data === null || data === void 0 ? void 0 : data.thumbnail) !== null && _data_thumbnail !== void 0 ? _data_thumbnail : \"\",\n                        width: 1000,\n                        height: 1000,\n                        className: \"max-w-full md:max-w-32 rounded-xl  mb-6 mx-auto\",\n                        style: {\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 41,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-thin\",\n                        children: [\n                            \" \",\n                            data.topic,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 42,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"By: \",\n                                    data.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 45,\n                                columnNumber: 33\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: [\n                                    \" \",\n                                    data.date,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 44,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            data.content,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 40,\n                columnNumber: 25\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 39,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PostPage, \"KlMdQtZOuXDT5TBlXlI36x4WIO0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ087QUFDQztBQUNyQjtBQUUvQixNQUFNTSxXQUFXLENBQUNDOztJQUVkLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTVUsU0FBU1osc0RBQVNBO0lBRXhCYSxRQUFRQyxHQUFHLENBQUNQLE9BQU9LLE9BQU9HLEtBQUssQ0FBQ0MsRUFBRSxFQUFFTjtJQUdwQ1QsZ0RBQVNBLENBQUM7UUFDTixNQUFNZ0IsWUFBWTtZQUNkUixXQUFXO1lBQ1gsSUFBSTtnQkFDQSxNQUFNUyxXQUFXLE1BQU1kLDZEQUFPQSxDQUFDUSxPQUFPRyxLQUFLLENBQUNDLEVBQUU7Z0JBQzlDSCxRQUFRQyxHQUFHLENBQUNJO2dCQUVaUCxRQUFRTztZQUNaLEVBQUUsT0FBT0MsS0FBSztnQkFDVk4sUUFBUU8sS0FBSyxDQUFDRDtZQUNsQixTQUFVO2dCQUNOVixXQUFXO1lBQ2Y7UUFDSjtRQUVBRyxPQUFPRyxLQUFLLENBQUNDLEVBQUUsSUFBSUM7SUFDdkIsR0FBRztRQUFDTCxPQUFPRyxLQUFLLENBQUNDLEVBQUU7S0FBQztRQVNnQk47SUFQcEMscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7a0JBRUhkLDBCQUFZLDhEQUFDTCxnRUFBTUE7Ozs7c0NBRW5CLDhEQUFDb0I7c0JBQ0csNEVBQUNGO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2pCLG1EQUFLQTt3QkFBQ21CLEtBQUtkLENBQUFBLGtCQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1lLFNBQVMsY0FBZmYsNkJBQUFBLGtCQUFtQjt3QkFBSWdCLE9BQU87d0JBQU1DLFFBQVE7d0JBQU1MLFdBQVU7d0JBQWtETSxPQUFPOzRCQUFFQyxXQUFXO3dCQUFPOzs7Ozs7a0NBQ3JKLDhEQUFDQzt3QkFBR1IsV0FBVTs7NEJBQXFCOzRCQUFFWixLQUFLcUIsS0FBSzs0QkFBQzs7Ozs7OztrQ0FFaEQsOERBQUNWO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7O29DQUFJO29DQUFLWCxLQUFLc0IsTUFBTTs7Ozs7OzswQ0FDckIsOERBQUNDOztvQ0FBTTtvQ0FBRXZCLEtBQUt3QixJQUFJO29DQUFDOzs7Ozs7Ozs7Ozs7O2tDQUV2Qiw4REFBQ0M7OzRCQUFFOzRCQUFFekIsS0FBSzBCLE9BQU87NEJBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlDO0dBL0NNOUI7O1FBSWFOLGtEQUFTQTs7O0tBSnRCTTtBQWlETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tpZF0uanM/NWM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL2xvYWRlclwiO1xyXG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSBcIi4uLy4uL3Nhbml0eS9zYW5pdHktdXRpbHNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBQb3N0UGFnZSA9IChwYXJhbSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbSwgcm91dGVyLnF1ZXJ5LmlkLCBkYXRhKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gIHsgXHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3Qocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwb3N0RGF0YSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucXVlcnkuaWQgJiYgZmV0Y2hEYXRhKCkgXHJcbiAgICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBwLTEwIG1heC13LTd4bCBtLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gPExvYWRlciAvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZGF0YT8udGh1bWJuYWlsID8/IFwiXCJ9IHdpZHRoPXsxMDAwfSBoZWlnaHQ9ezEwMDB9IGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgbWQ6bWF4LXctMzIgcm91bmRlZC14bCAgbWItNiBteC1hdXRvXCIgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC10aGluXCI+IHtkYXRhLnRvcGljfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkJ5OiB7ZGF0YS5hdXRob3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7ZGF0YS5kYXRlfSA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtkYXRhLmNvbnRlbnR9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZVxyXG5cclxuICAiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2FkZXIiLCJnZXRQb3N0IiwiSW1hZ2UiLCJQb3N0UGFnZSIsInBhcmFtIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJmZXRjaERhdGEiLCJwb3N0RGF0YSIsImVyciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInNyYyIsInRodW1ibmFpbCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJoMiIsInRvcGljIiwiYXV0aG9yIiwic21hbGwiLCJkYXRlIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});