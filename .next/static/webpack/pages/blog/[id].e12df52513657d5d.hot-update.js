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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utils/loader */ \"./components/utils/loader.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity/sanity-utils */ \"./sanity/sanity-utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostPage = (param)=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(param, router.query.id, data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            try {\n                const postData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__.getPost)(router.query.id);\n                console.log(postData);\n                setData(postData);\n            } catch (err) {\n                console.error(err);\n            } finally{\n                setLoading(false);\n            }\n        };\n        router.query.id && fetchData();\n    }, [\n        router.query.id\n    ]);\n    var _data_thumbnail;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-10 max-w-7xl m-auto\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 37,\n            columnNumber: 33\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-6 text-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: [\n                                \" \",\n                                data.topic,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                            lineNumber: 41,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            className: \"my-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"By: \",\n                                        data.author\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                    lineNumber: 44,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \" \",\n                                        data.date,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                            lineNumber: 43,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" \",\n                                data.content,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                            lineNumber: 47,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 40,\n                    columnNumber: 25\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    src: (_data_thumbnail = data === null || data === void 0 ? void 0 : data.thumbnail) !== null && _data_thumbnail !== void 0 ? _data_thumbnail : \"\",\n                    width: 1000,\n                    height: 1000,\n                    className: \"max-h-48 rounded-xl  my-10 mx-auto\",\n                    style: {\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                    lineNumber: 50,\n                    columnNumber: 25\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 39,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PostPage, \"KlMdQtZOuXDT5TBlXlI36x4WIO0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ087QUFDQztBQUNyQjtBQUUvQixNQUFNTSxXQUFXLENBQUNDOztJQUVkLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTVUsU0FBU1osc0RBQVNBO0lBRXhCYSxRQUFRQyxHQUFHLENBQUNQLE9BQU9LLE9BQU9HLEtBQUssQ0FBQ0MsRUFBRSxFQUFFTjtJQUdwQ1QsZ0RBQVNBLENBQUM7UUFDTixNQUFNZ0IsWUFBWTtZQUNkUixXQUFXO1lBQ1gsSUFBSTtnQkFDQSxNQUFNUyxXQUFXLE1BQU1kLDZEQUFPQSxDQUFDUSxPQUFPRyxLQUFLLENBQUNDLEVBQUU7Z0JBQzlDSCxRQUFRQyxHQUFHLENBQUNJO2dCQUVaUCxRQUFRTztZQUNaLEVBQUUsT0FBT0MsS0FBSztnQkFDVk4sUUFBUU8sS0FBSyxDQUFDRDtZQUNsQixTQUFVO2dCQUNOVixXQUFXO1lBQ2Y7UUFDSjtRQUVBRyxPQUFPRyxLQUFLLENBQUNDLEVBQUUsSUFBSUM7SUFDdkIsR0FBRztRQUFDTCxPQUFPRyxLQUFLLENBQUNDLEVBQUU7S0FBQztRQWtCWU47SUFoQmhDLHFCQUNJLDhEQUFDVztRQUFJQyxXQUFVO2tCQUVIZCwwQkFBWSw4REFBQ0wsZ0VBQU1BOzs7O3NDQUVuQiw4REFBQ29COzs4QkFDRyw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBR0YsV0FBVTs7Z0NBQXFCO2dDQUFFWixLQUFLZSxLQUFLO2dDQUFDOzs7Ozs7O3NDQUVoRCw4REFBQ0M7NEJBQU1KLFdBQVU7OzhDQUNiLDhEQUFDRDs7d0NBQUk7d0NBQUtYLEtBQUtpQixNQUFNOzs7Ozs7OzhDQUNyQiw4REFBQ047O3dDQUFJO3dDQUFFWCxLQUFLa0IsSUFBSTt3Q0FBQzs7Ozs7Ozs7Ozs7OztzQ0FFckIsOERBQUNDOztnQ0FBRTtnQ0FBRW5CLEtBQUtvQixPQUFPO2dDQUFDOzs7Ozs7Ozs7Ozs7OzhCQUd0Qiw4REFBQ3pCLG1EQUFLQTtvQkFBQzBCLEtBQUtyQixDQUFBQSxrQkFBQUEsaUJBQUFBLDJCQUFBQSxLQUFNc0IsU0FBUyxjQUFmdEIsNkJBQUFBLGtCQUFtQjtvQkFBSXVCLE9BQU87b0JBQU1DLFFBQVE7b0JBQU1aLFdBQVU7b0JBQXFDYSxPQUFPO3dCQUFFQyxXQUFXO29CQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1oSztHQWpETTlCOztRQUlhTixrREFBU0E7OztLQUp0Qk07QUFtRE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9baWRdLmpzPzVjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9sb2FkZXJcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gXCIuLi8uLi9zYW5pdHkvc2FuaXR5LXV0aWxzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgUG9zdFBhZ2UgPSAocGFyYW0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocGFyYW0sIHJvdXRlci5xdWVyeS5pZCwgZGF0YSlcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+ICB7IFxyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0KHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3REYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgIHNldERhdGEocG9zdERhdGEpXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKSAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnF1ZXJ5LmlkICYmIGZldGNoRGF0YSgpIFxyXG4gICAgfSwgW3JvdXRlci5xdWVyeS5pZF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgcC0xMCBtYXgtdy03eGwgbS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IDxMb2FkZXIgLz4gOiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj4ge2RhdGEudG9waWN9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5CeToge2RhdGEuYXV0aG9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IHtkYXRhLmRhdGV9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2RhdGEuY29udGVudH0gPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGE/LnRodW1ibmFpbCA/PyBcIlwifSB3aWR0aD17MTAwMH0gaGVpZ2h0PXsxMDAwfSBjbGFzc05hbWU9XCJtYXgtaC00OCByb3VuZGVkLXhsICBteS0xMCBteC1hdXRvXCIgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCJ9fS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2VcclxuXHJcbiAgIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9hZGVyIiwiZ2V0UG9zdCIsIkltYWdlIiwiUG9zdFBhZ2UiLCJwYXJhbSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImlkIiwiZmV0Y2hEYXRhIiwicG9zdERhdGEiLCJlcnIiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMiIsInRvcGljIiwic21hbGwiLCJhdXRob3IiLCJkYXRlIiwicCIsImNvbnRlbnQiLCJzcmMiLCJ0aHVtYm5haWwiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});