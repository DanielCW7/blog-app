"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...admin]",{

/***/ "./sanity/blog-schema.ts":
/*!*******************************!*\
  !*** ./sanity/blog-schema.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst blog = {\n    name: \"blog\",\n    title: \"Blog\",\n    type: \"document\",\n    fields: [\n        {\n            name: \"topic\",\n            type: \"string\",\n            title: \"Topic\"\n        },\n        {\n            name: \"author\",\n            type: \"string\",\n            title: \"Author\"\n        },\n        {\n            name: \"date\",\n            type: \"date\",\n            title: \"Date\"\n        },\n        {\n            name: \"brief\",\n            type: \"text\",\n            title: \"Brief\"\n        },\n        {\n            name: \"content\",\n            type: \"array\",\n            title: \"Content\",\n            of: [\n                {\n                    type: \"block\"\n                }\n            ]\n        },\n        {\n            name: \"thumbnail\",\n            type: \"image\",\n            title: \"Thumbnail\",\n            fields: [\n                {\n                    name: \"alt\",\n                    type: \"string\",\n                    title: \"Alt\"\n                }\n            ]\n        },\n        {\n            name: \"slug\",\n            type: \"slug\",\n            title: \"Slug\",\n            options: {\n                source: \"name\"\n            }\n        }\n    ]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYW5pdHkvYmxvZy1zY2hlbWEudHMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE9BQU87SUFDVEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsUUFBUTtRQUNKO1lBQ0lILE1BQU07WUFDTkUsTUFBTTtZQUNORCxPQUFPO1FBQ1g7UUFDQTtZQUNJRCxNQUFNO1lBQ05FLE1BQU07WUFDTkQsT0FBTztRQUNYO1FBQ0E7WUFDSUQsTUFBTTtZQUNORSxNQUFNO1lBQ05ELE9BQU87UUFDWDtRQUNBO1lBQ0lELE1BQU07WUFDTkUsTUFBTTtZQUNORCxPQUFPO1FBQ1g7UUFDQTtZQUNJRCxNQUFNO1lBQ05FLE1BQU07WUFDTkQsT0FBTztZQUNQRyxJQUFJO2dCQUFDO29CQUFFRixNQUFNO2dCQUFPO2FBQUU7UUFDMUI7UUFDQTtZQUNJRixNQUFNO1lBQ05FLE1BQU07WUFDTkQsT0FBTztZQUNQRSxRQUFRO2dCQUNKO29CQUNJSCxNQUFNO29CQUNORSxNQUFNO29CQUNORCxPQUFPO2dCQUNYO2FBQ0g7UUFDTDtRQUNBO1lBQ0lELE1BQU07WUFDTkUsTUFBTTtZQUNORCxPQUFPO1lBQ1BJLFNBQVM7Z0JBQUVDLFFBQVE7WUFBTztRQUM5QjtLQUNIO0FBQ0w7QUFFQSwrREFBZVAsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYW5pdHkvYmxvZy1zY2hlbWEudHM/OGZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBibG9nID0ge1xyXG4gICAgbmFtZTogJ2Jsb2cnLFxyXG4gICAgdGl0bGU6ICdCbG9nJyxcclxuICAgIHR5cGU6ICdkb2N1bWVudCcsXHJcbiAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0b3BpYycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RvcGljJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYXV0aG9yJyxcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQXV0aG9yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZGF0ZScsXHJcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdEYXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYnJpZWYnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnJpZWYnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdjb250ZW50JyxcclxuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb250ZW50JyxcclxuICAgICAgICAgICAgb2Y6IFt7IHR5cGU6IFwiYmxvY2tcIn1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0aHVtYm5haWwnLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RodW1ibmFpbCcsXHJcbiAgICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhbHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWx0JywgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzbHVnJyxcclxuICAgICAgICAgICAgdHlwZTogJ3NsdWcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NsdWcnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7IHNvdXJjZTogJ25hbWUnIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2ciXSwibmFtZXMiOlsiYmxvZyIsIm5hbWUiLCJ0aXRsZSIsInR5cGUiLCJmaWVsZHMiLCJvZiIsIm9wdGlvbnMiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sanity/blog-schema.ts\n"));

/***/ })

});