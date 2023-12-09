"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/skeleton */ \"./components/utils/skeleton.js\");\n// individual post format\n\n\n\n\n\nconst Post = (data)=>{\n    const { author, brief, thumbnail, date, topic, slug, _id, alt } = data.data;\n    return(// link around the entire card\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n            lineNumber: 14,\n            columnNumber: 29\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/blog/\".concat(slug),\n            className: \"rounded-xl overflow-hidden shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: thumbnail,\n                    width: 1000,\n                    height: 1000,\n                    className: \"h-48 max-h-48\",\n                    style: {\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 text-black flex flex-col justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xl font-bold\",\n                                    children: [\n                                        \" \",\n                                        topic,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \" \",\n                                        brief,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                className: \"flex flex-row justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"By: \",\n                                            author\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \" \",\n                                            date,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, _id, true, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined));\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHlCQUF5Qjs7QUFDRztBQUNFO0FBQ0U7QUFDTztBQUV2QyxNQUFNSSxPQUFPLENBQUNDO0lBRVYsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxHQUFHUixLQUFLQSxJQUFJO0lBRTNFLE9BQ0ksOEJBQThCO2tCQUM5Qiw4REFBQ0gsMkNBQVFBO1FBQUNZLHdCQUFVLDhEQUFDWCx1REFBUUE7Ozs7O2tCQUN6Qiw0RUFBQ0gsa0RBQUlBO1lBQVdlLE1BQU0sU0FBYyxPQUFMSjtZQUFRSyxXQUFVOzs4QkFDN0MsOERBQUNmLG1EQUFLQTtvQkFBQ2dCLEtBQUtUO29CQUFXVSxPQUFPO29CQUFNQyxRQUFRO29CQUFNSCxXQUFVO29CQUFnQkksT0FBTzt3QkFBRUMsV0FBVztvQkFBTzs7Ozs7OzhCQUN2Ryw4REFBQ0M7b0JBQUlOLFdBQVU7O3NDQUNYLDhEQUFDTTs7OENBQ0csOERBQUNDO29DQUFLUCxXQUFVOzt3Q0FBb0I7d0NBQUVOO3dDQUFNOzs7Ozs7OzhDQUM1Qyw4REFBQ2M7O3dDQUFFO3dDQUFFakI7d0NBQU07Ozs7Ozs7Ozs7Ozs7c0NBSWYsOERBQUNlOzRCQUFJTixXQUFVO3NDQUNYLDRFQUFDUztnQ0FBTVQsV0FBVTs7a0RBQ2IsOERBQUNPOzs0Q0FBSzs0Q0FBS2pCOzs7Ozs7O2tEQUNYLDhEQUFDaUI7OzRDQUFLOzRDQUFFZDs0Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQVpsQkc7Ozs7Ozs7Ozs7QUFxQnZCO0tBNUJNUjtBQThCTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3QuanM/MjdkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gaW5kaXZpZHVhbCBwb3N0IGZvcm1hdFxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIi4vdXRpbHMvc2tlbGV0b25cIlxyXG5cclxuY29uc3QgUG9zdCA9IChkYXRhKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBhdXRob3IsIGJyaWVmLCB0aHVtYm5haWwsIGRhdGUsIHRvcGljLCBzbHVnLCBfaWQsIGFsdCB9ID0gZGF0YS5kYXRhXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBsaW5rIGFyb3VuZCB0aGUgZW50aXJlIGNhcmRcclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxTa2VsZXRvbiAvPn0gPlxyXG4gICAgICAgICAgICA8TGluayBrZXk9e19pZH0gaHJlZj17YC9ibG9nLyR7c2x1Z31gfSBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RodW1ibmFpbH0gd2lkdGg9ezEwMDB9IGhlaWdodD17MTAwMH0gY2xhc3NOYW1lPVwiaC00OCBtYXgtaC00OFwiIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwifX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgdGV4dC1ibGFjayBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+IHt0b3BpY30gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2JyaWVmfSA8L3A+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CeToge2F1dGhvcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge2RhdGV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJTdXNwZW5zZSIsIlNrZWxldG9uIiwiUG9zdCIsImRhdGEiLCJhdXRob3IiLCJicmllZiIsInRodW1ibmFpbCIsImRhdGUiLCJ0b3BpYyIsInNsdWciLCJfaWQiLCJhbHQiLCJmYWxsYmFjayIsImhyZWYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib2JqZWN0Rml0IiwiZGl2Iiwic3BhbiIsInAiLCJzbWFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/post.js\n"));

/***/ })

});