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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/helpers */ \"./components/utils/helpers.js\");\n/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loader */ \"./components/utils/loader.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ \"./components/post.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sanity/sanity-utils */ \"./sanity/sanity-utils.ts\");\n/* harmony import */ var _utils_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/skeleton */ \"./components/utils/skeleton.js\");\n// all posts\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Posts = ()=>{\n    _s();\n    const [isPosts, setposts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const populate = async ()=>{\n        setLoading(true);\n        await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2000);\n        try {\n            const items = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__.getPosts)();\n            const list = items.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    data: post\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n                    lineNumber: 23,\n                    columnNumber: 44\n                }, undefined));\n            setposts(list);\n        } catch (err) {\n            console.error(err);\n        // return error UI\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        populate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 grid gap-10 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_skeleton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n            lineNumber: 41,\n            columnNumber: 27\n        }, undefined) : isPosts\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\components\\\\posts.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Posts, \"HhunzWK9eflWyWIy5mvPVDgbLs8=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxZQUFZOzs7QUFDZ0M7QUFDVDtBQUNBO0FBQ1Q7QUFDd0I7QUFDVjtBQUV4QyxNQUFNTyxRQUFROztJQUdWLE1BQU0sQ0FBQ0MsU0FBU0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNTLFdBQVdDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFHekMsTUFBTVcsV0FBVztRQUNiRCxXQUFXO1FBQ1gsTUFBTVQsMERBQUtBLENBQUM7UUFFWixJQUFJO1lBQ0EsTUFBTVcsUUFBUSxNQUFNUiw4REFBUUE7WUFDNUIsTUFBTVMsT0FBT0QsTUFBTUUsR0FBRyxDQUFDQyxDQUFBQSxxQkFBUSw4REFBQ1osNkNBQUlBO29CQUFDYSxNQUFNRDs7Ozs7O1lBQzNDUCxTQUFTSztRQUNiLEVBQUUsT0FBT0ksS0FBSztZQUNWQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2Qsa0JBQWtCO1FBQ3RCLFNBQVU7WUFDTlAsV0FBVztRQUNmO0lBQ0o7SUFFQVgsZ0RBQVNBLENBQUM7UUFDTlk7SUFDSixHQUFHLEVBQUU7SUFJTCxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDVFosMEJBQVksOERBQUNKLHVEQUFRQTs7Ozt3QkFBTUU7Ozs7OztBQUd6QztHQWxDTUQ7S0FBQUE7QUFxQ04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy5qcz9iZTc2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBhbGwgcG9zdHNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZGVsYXkgZnJvbSBcIi4vdXRpbHMvaGVscGVyc1wiXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vdXRpbHMvbG9hZGVyXCJcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gXCIuLi9zYW5pdHkvc2FuaXR5LXV0aWxzXCI7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwiLi91dGlscy9za2VsZXRvblwiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtpc1Bvc3RzLCBzZXRwb3N0c10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuXHJcbiAgICBjb25zdCBwb3B1bGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMClcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBnZXRQb3N0cygpO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gaXRlbXMubWFwKHBvc3QgPT4gPFBvc3QgZGF0YT17cG9zdH0gLz4pXHJcbiAgICAgICAgICAgIHNldHBvc3RzKGxpc3QpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAvLyByZXR1cm4gZXJyb3IgVUlcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVsYXRlKClcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIGdyaWQgZ2FwLTEwIGF1dG8tcm93cy1tYXggZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgeyBpc0xvYWRpbmcgPyA8U2tlbGV0b24gLz4gOiBpc1Bvc3RzIH0gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRlbGF5IiwiTG9hZGVyIiwiUG9zdCIsImdldFBvc3RzIiwiU2tlbGV0b24iLCJQb3N0cyIsImlzUG9zdHMiLCJzZXRwb3N0cyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJwb3B1bGF0ZSIsIml0ZW1zIiwibGlzdCIsIm1hcCIsInBvc3QiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/posts.js\n"));

/***/ })

});