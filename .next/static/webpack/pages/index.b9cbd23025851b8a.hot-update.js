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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n// individual post format\n\n\n\nconst Post = (data)=>{\n    const { author, brief, thumbnail, date, topic, slug, alt } = data.data;\n    console.log(data.data.thumbnail);\n    return(// link around the entire card\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/blog/\".concat(slug),\n        className: \"rounded-xl overflow-hidden shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: thumbnail,\n                width: 1000,\n                height: 1000,\n                className: \"h-48 max-h-48\",\n                style: {\n                    objectFit: \"cover\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6 text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xl font-bold\",\n                        children: [\n                            \" \",\n                            topic,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            brief,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        className: \"flex flex-row justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"By: \",\n                                    author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                                lineNumber: 20,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    date,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                                lineNumber: 21,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\post.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined));\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHlCQUF5Qjs7QUFDRztBQUNFO0FBRTlCLE1BQU1FLE9BQU8sQ0FBQ0M7SUFFVixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHUCxLQUFLQSxJQUFJO0lBQ3RFUSxRQUFRQyxHQUFHLENBQUNULEtBQUtBLElBQUksQ0FBQ0csU0FBUztJQUUvQixPQUNJLDhCQUE4QjtrQkFDOUIsOERBQUNOLGtEQUFJQTtRQUFDYSxNQUFNLFNBQWMsT0FBTEo7UUFBUUssV0FBVTs7MEJBQ25DLDhEQUFDYixtREFBS0E7Z0JBQUNjLEtBQUtUO2dCQUFXVSxPQUFPO2dCQUFNQyxRQUFRO2dCQUFNSCxXQUFVO2dCQUFnQkksT0FBTztvQkFBRUMsV0FBVztnQkFBTzs7Ozs7OzBCQUN2Ryw4REFBQ0M7Z0JBQUlOLFdBQVU7O2tDQUNYLDhEQUFDTzt3QkFBS1AsV0FBVTs7NEJBQW9COzRCQUFFTjs0QkFBTTs7Ozs7OztrQ0FDNUMsOERBQUNjOzs0QkFBRTs0QkFBRWpCOzRCQUFNOzs7Ozs7O2tDQUVYLDhEQUFDa0I7d0JBQU1ULFdBQVU7OzBDQUNiLDhEQUFDTzs7b0NBQUs7b0NBQUtqQjs7Ozs7OzswQ0FDWCw4REFBQ2lCOztvQ0FBSztvQ0FBRWQ7b0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakM7S0F2Qk1MO0FBeUJOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdC5qcz8yN2Q4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBpbmRpdmlkdWFsIHBvc3QgZm9ybWF0XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5cclxuY29uc3QgUG9zdCA9IChkYXRhKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBhdXRob3IsIGJyaWVmLCB0aHVtYm5haWwsIGRhdGUsIHRvcGljLCBzbHVnLCBhbHQgfSA9IGRhdGEuZGF0YVxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhLnRodW1ibmFpbClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIGxpbmsgYXJvdW5kIHRoZSBlbnRpcmUgY2FyZFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3NsdWd9YH0gY2xhc3NOYW1lPVwicm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RodW1ibmFpbH0gd2lkdGg9ezEwMDB9IGhlaWdodD17MTAwMH0gY2xhc3NOYW1lPVwiaC00OCBtYXgtaC00OFwiIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwifX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPiB7dG9waWN9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwPiB7YnJpZWZ9IDwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qnk6IHthdXRob3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7ZGF0ZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBsaW5rIHZpYSBhcnJvdyB0byB0aGUgYWN0dWFsIHBvc3QgaXRzZWxmICovfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJQb3N0IiwiZGF0YSIsImF1dGhvciIsImJyaWVmIiwidGh1bWJuYWlsIiwiZGF0ZSIsInRvcGljIiwic2x1ZyIsImFsdCIsImNvbnNvbGUiLCJsb2ciLCJocmVmIiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9iamVjdEZpdCIsImRpdiIsInNwYW4iLCJwIiwic21hbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/post.js\n"));

/***/ })

});