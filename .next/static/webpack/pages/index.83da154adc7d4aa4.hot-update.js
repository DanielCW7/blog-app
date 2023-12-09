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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPost: function() { return /* binding */ getPost; },\n/* harmony export */   getPosts: function() { return /* binding */ getPosts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"./node_modules/next-sanity/dist/index.js\");\n// data grabbing functions\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '*[_type == \"blog\"]{\\n            _id,\\n            _createdAt,\\n            topic,\\n            author,\\n            date,\\n            brief,\\n            content,\\n            alt,\\n            \"thumbnail\": thumbnail.asset->url,\\n            \"slug\": slug.current\\n        }'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '*[_type == \"blog\" && slug.current == $slug][0]{\\n            _id,\\n            _createdAt,\\n            topic,\\n            author,\\n            date,\\n            content,\\n            \"avatar\": avatar.asset->url,\\n            \"thumbnail\": thumbnail.asset->url,\\n            \"slug\": slug.current\\n        }'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nasync function getPosts() {\n    const client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n        projectId: \"roviyn05\",\n        dataset: \"production\",\n        apiVersion: \"2023-11-24\"\n    });\n    //  GROQ comes from sanity\n    return client.fetch((0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq)(_templateObject()));\n}\nasync function getPost(slug) {\n    const client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n        projectId: \"roviyn05\",\n        dataset: \"production\",\n        apiVersion: \"2023-11-24\"\n    });\n    return client.fetch((0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq)(_templateObject1()), {\n        slug\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYW5pdHkvc2FuaXR5LXV0aWxzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VCO0FBRzFDLGVBQWVFO0lBQ2xCLE1BQU1DLFNBQVNILHlEQUFZQSxDQUFDO1FBQ3hCSSxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsWUFBWTtJQUNoQjtJQUVBLDBCQUEwQjtJQUMxQixPQUFPSCxPQUFPSSxLQUFLLENBQ2ZOLGlEQUFJQTtBQWFaO0FBRU8sZUFBZU8sUUFBUUMsSUFBWTtJQUN0QyxNQUFNTixTQUFTSCx5REFBWUEsQ0FBQztRQUN4QkksV0FBVztRQUNYQyxTQUFTO1FBQ1RDLFlBQVk7SUFDaEI7SUFHQSxPQUFPSCxPQUFPSSxLQUFLLENBQ2ZOLGlEQUFJQSxzQkFXSjtRQUFFUTtJQUFLO0FBR2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FuaXR5L3Nhbml0eS11dGlscy50cz9iMGU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRhdGEgZ3JhYmJpbmcgZnVuY3Rpb25zXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgZ3JvcSB9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgICAgICAgcHJvamVjdElkOiBcInJvdml5bjA1XCIsXHJcbiAgICAgICAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXHJcbiAgICAgICAgYXBpVmVyc2lvbjogXCIyMDIzLTExLTI0XCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAgR1JPUSBjb21lcyBmcm9tIHNhbml0eVxyXG4gICAgcmV0dXJuIGNsaWVudC5mZXRjaChcclxuICAgICAgICBncm9xYCpbX3R5cGUgPT0gXCJibG9nXCJde1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgIF9jcmVhdGVkQXQsXHJcbiAgICAgICAgICAgIHRvcGljLFxyXG4gICAgICAgICAgICBhdXRob3IsXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIGJyaWVmLFxyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICBhbHQsXHJcbiAgICAgICAgICAgIFwidGh1bWJuYWlsXCI6IHRodW1ibmFpbC5hc3NldC0+dXJsLFxyXG4gICAgICAgICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50XHJcbiAgICAgICAgfWBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgICAgIHByb2plY3RJZDogXCJyb3ZpeW4wNVwiLFxyXG4gICAgICAgIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAyMy0xMS0yNFwiLFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiBjbGllbnQuZmV0Y2goXHJcbiAgICAgICAgZ3JvcWAqW190eXBlID09IFwiYmxvZ1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgX2NyZWF0ZWRBdCxcclxuICAgICAgICAgICAgdG9waWMsXHJcbiAgICAgICAgICAgIGF1dGhvcixcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgXCJhdmF0YXJcIjogYXZhdGFyLmFzc2V0LT51cmwsXHJcbiAgICAgICAgICAgIFwidGh1bWJuYWlsXCI6IHRodW1ibmFpbC5hc3NldC0+dXJsLFxyXG4gICAgICAgICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50XHJcbiAgICAgICAgfWAsXHJcbiAgICAgICAgeyBzbHVnIH1cclxuICAgICAgICBcclxuICAgICkgIFxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImdyb3EiLCJnZXRQb3N0cyIsImNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwiZmV0Y2giLCJnZXRQb3N0Iiwic2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sanity/sanity-utils.ts\n"));

/***/ })

});