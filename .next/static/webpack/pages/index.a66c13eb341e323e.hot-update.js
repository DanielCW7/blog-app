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

/***/ "./sanity/sanity-utils.ts":
/*!********************************!*\
  !*** ./sanity/sanity-utils.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPost: function() { return /* binding */ getPost; },\n/* harmony export */   getPosts: function() { return /* binding */ getPosts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"./node_modules/next-sanity/dist/index.js\");\n// data grabbing functions\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '*[_type == \"blog\"]{\\n            _id,\\n            _createdAt,\\n            topic,\\n            author,\\n            date,\\n            brief,\\n            description,\\n            alt,\\n            \"thumbnail\": thumbnail.asset->url,\\n            \"slug\": slug.current\\n        }'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '*[_type == \"blog\" && slug.current == $slug][0]{\\n            _id,\\n            _createdAt,\\n            topic,\\n            author,\\n            date,\\n            brief,\\n            description,\\n            \"thumbnail\": thumbnail.asset->url,\\n            \"slug\": slug.current\\n        }'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nasync function getPosts() {\n    const client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n        projectId: \"roviyn05\",\n        dataset: \"production\",\n        apiVersion: \"2023-11-24\"\n    });\n    //  GROQ comes from sanity\n    return client.fetch((0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq)(_templateObject()));\n}\nasync function getPost(slug) {\n    const client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n        projectId: \"roviyn05\",\n        dataset: \"production\",\n        apiVersion: \"2023-11-24\"\n    });\n    // where to use the GROQ query (sanity.io docs)\n    return client.fetch((0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq)(_templateObject1()), {\n        slug: slug\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYW5pdHkvc2FuaXR5LXV0aWxzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXVCO0FBRTFDLGVBQWVFO0lBQ2xCLE1BQU1DLFNBQVNILHlEQUFZQSxDQUFDO1FBQ3hCSSxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsWUFBWTtJQUNoQjtJQUVBLDBCQUEwQjtJQUMxQixPQUFPSCxPQUFPSSxLQUFLLENBQ2ZOLGlEQUFJQTtBQWFaO0FBRU8sZUFBZU8sUUFBUUMsSUFBWTtJQUN0QyxNQUFNTixTQUFTSCx5REFBWUEsQ0FBQztRQUN4QkksV0FBVztRQUNYQyxTQUFTO1FBQ1RDLFlBQVk7SUFDaEI7SUFHQSwrQ0FBK0M7SUFDL0MsT0FBT0gsT0FBT0ksS0FBSyxDQUNmTixpREFBSUEsc0JBV0o7UUFBRVEsTUFBTUE7SUFBSTtBQUdwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYW5pdHkvc2FuaXR5LXV0aWxzLnRzP2IwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGF0YSBncmFiYmluZyBmdW5jdGlvbnNcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgZ3JvcSB9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICAgICAgICBwcm9qZWN0SWQ6IFwicm92aXluMDVcIixcclxuICAgICAgICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcclxuICAgICAgICBhcGlWZXJzaW9uOiBcIjIwMjMtMTEtMjRcIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICBHUk9RIGNvbWVzIGZyb20gc2FuaXR5XHJcbiAgICByZXR1cm4gY2xpZW50LmZldGNoKFxyXG4gICAgICAgIGdyb3FgKltfdHlwZSA9PSBcImJsb2dcIl17XHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgX2NyZWF0ZWRBdCxcclxuICAgICAgICAgICAgdG9waWMsXHJcbiAgICAgICAgICAgIGF1dGhvcixcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgYnJpZWYsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBhbHQsXHJcbiAgICAgICAgICAgIFwidGh1bWJuYWlsXCI6IHRodW1ibmFpbC5hc3NldC0+dXJsLFxyXG4gICAgICAgICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50XHJcbiAgICAgICAgfWBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgICAgIHByb2plY3RJZDogXCJyb3ZpeW4wNVwiLFxyXG4gICAgICAgIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAyMy0xMS0yNFwiLFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIHdoZXJlIHRvIHVzZSB0aGUgR1JPUSBxdWVyeSAoc2FuaXR5LmlvIGRvY3MpXHJcbiAgICByZXR1cm4gY2xpZW50LmZldGNoKFxyXG4gICAgICAgIGdyb3FgKltfdHlwZSA9PSBcImJsb2dcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgIF9jcmVhdGVkQXQsXHJcbiAgICAgICAgICAgIHRvcGljLFxyXG4gICAgICAgICAgICBhdXRob3IsXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIGJyaWVmLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgXCJ0aHVtYm5haWxcIjogdGh1bWJuYWlsLmFzc2V0LT51cmwsXHJcbiAgICAgICAgICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnRcclxuICAgICAgICB9YCxcclxuICAgICAgICB7IHNsdWc6IHNsdWd9XHJcbiAgICAgICAgXHJcbiAgICApICAgIFxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImdyb3EiLCJnZXRQb3N0cyIsImNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwiZmV0Y2giLCJnZXRQb3N0Iiwic2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sanity/sanity-utils.ts\n"));

/***/ })

});