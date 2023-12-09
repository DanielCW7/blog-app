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

/***/ "./components/posts.js":
/*!*****************************!*\
  !*** ./components/posts.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/helpers */ \"./components/utils/helpers.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./components/post.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sanity/sanity-utils */ \"./sanity/sanity-utils.ts\");\n/* harmony import */ var _utils_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/skeleton */ \"./components/utils/skeleton.js\");\n// all posts\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Posts = ()=>{\n    _s();\n    const [isPosts, setposts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const populate = async ()=>{\n        setLoading(true);\n        await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2000);\n        try {\n            const items = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__.getPosts)();\n            const list = items.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: post\n                }, post, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 22,\n                    columnNumber: 44\n                }, undefined));\n            setposts(list);\n        } catch (err) {\n            console.error(err);\n        // return error UI\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        populate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 grid gap-10 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true) : isPosts\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Posts, \"HhunzWK9eflWyWIy5mvPVDgbLs8=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLFlBQVk7OztBQUNnQztBQUNUO0FBQ1Q7QUFDd0I7QUFDVjtBQUV4QyxNQUFNTSxRQUFROztJQUdWLE1BQU0sQ0FBQ0MsU0FBU0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFdBQVdDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFHekMsTUFBTVUsV0FBVztRQUNiRCxXQUFXO1FBQ1gsTUFBTVIsMERBQUtBLENBQUM7UUFFWixJQUFJO1lBQ0EsTUFBTVUsUUFBUSxNQUFNUiw4REFBUUE7WUFDNUIsTUFBTVMsT0FBT0QsTUFBTUUsR0FBRyxDQUFDQyxDQUFBQSxxQkFBUSw4REFBQ1osNkNBQUlBO29CQUFDYSxNQUFNRDttQkFBV0E7Ozs7O1lBQ3REUCxTQUFTSztRQUNiLEVBQUUsT0FBT0ksS0FBSztZQUNWQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2Qsa0JBQWtCO1FBQ3RCLFNBQVU7WUFDTlAsV0FBVztRQUNmO0lBQ0o7SUFFQVYsZ0RBQVNBLENBQUM7UUFDTlc7SUFDSixHQUFHLEVBQUU7SUFJTCxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDVFosMEJBQ0Y7OzhCQUNJLDhEQUFDSix1REFBUUE7Ozs7OzhCQUNULDhEQUFDQSx1REFBUUE7Ozs7OzhCQUNULDhEQUFDQSx1REFBUUE7Ozs7OzhCQUNULDhEQUFDQSx1REFBUUE7Ozs7OzhCQUNULDhEQUFDQSx1REFBUUE7Ozs7OzhCQUNULDhEQUFDQSx1REFBUUE7Ozs7OzsyQkFDUEU7Ozs7OztBQUdsQjtHQTFDTUQ7S0FBQUE7QUE2Q04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy5qcz9iZTc2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBhbGwgcG9zdHNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZGVsYXkgZnJvbSBcIi4vdXRpbHMvaGVscGVyc1wiXHJcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwiLi4vc2FuaXR5L3Nhbml0eS11dGlsc1wiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIi4vdXRpbHMvc2tlbGV0b25cIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbaXNQb3N0cywgc2V0cG9zdHNdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcblxyXG4gICAgY29uc3QgcG9wdWxhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGF3YWl0IGRlbGF5KDIwMDApXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZ2V0UG9zdHMoKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGl0ZW1zLm1hcChwb3N0ID0+IDxQb3N0IGRhdGE9e3Bvc3R9IGtleT17cG9zdH0gLz4pXHJcbiAgICAgICAgICAgIHNldHBvc3RzKGxpc3QpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAvLyByZXR1cm4gZXJyb3IgVUlcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVsYXRlKClcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIGdyaWQgZ2FwLTEwIGF1dG8tcm93cy1tYXggZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgeyBpc0xvYWRpbmcgPyBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gLz5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gLz5cclxuICAgICAgICAgICAgPC8+IDogaXNQb3N0cyB9ICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHMiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkZWxheSIsIlBvc3QiLCJnZXRQb3N0cyIsIlNrZWxldG9uIiwiUG9zdHMiLCJpc1Bvc3RzIiwic2V0cG9zdHMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwicG9wdWxhdGUiLCJpdGVtcyIsImxpc3QiLCJtYXAiLCJwb3N0IiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts.js\n"));

/***/ })

});