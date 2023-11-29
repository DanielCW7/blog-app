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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utils/loader */ \"./components/utils/loader.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity/sanity-utils */ \"./sanity/sanity-utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostPage = (param)=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(param, router.query.id, data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            try {\n                const postData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_4__.getPost)(router.query.id);\n                console.log(postData);\n                setData(postData);\n            } catch (err) {\n                console.error(err);\n            } finally{\n                setLoading(false);\n            }\n        };\n        router.query.id && fetchData();\n    }, [\n        router.query.id\n    ]);\n    var _data_thumbnail;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-10 max-w-7xl m-auto\",\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 37,\n            columnNumber: 33\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"max-w-3xl m-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6 text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: (_data_thumbnail = data === null || data === void 0 ? void 0 : data.thumbnail) !== null && _data_thumbnail !== void 0 ? _data_thumbnail : \"\",\n                        width: 1000,\n                        height: 1000,\n                        className: \"max-w-full lg:max-w-3xl rounded-xl mb-6 mx-auto\",\n                        style: {\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 41,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-thin\",\n                        children: [\n                            \" \",\n                            data.topic,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 42,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"By: \",\n                                    data.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 45,\n                                columnNumber: 33\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: [\n                                    \" \",\n                                    data.date,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 44,\n                        columnNumber: 29\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            data.content,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n                lineNumber: 40,\n                columnNumber: 25\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n            lineNumber: 39,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devda\\\\OneDrive\\\\Desktop\\\\Projects\\\\blog-app\\\\pages\\\\blog\\\\[id].js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PostPage, \"KlMdQtZOuXDT5TBlXlI36x4WIO0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PostPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ087QUFDQztBQUNyQjtBQUUvQixNQUFNTSxXQUFXLENBQUNDOztJQUVkLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTVUsU0FBU1osc0RBQVNBO0lBRXhCYSxRQUFRQyxHQUFHLENBQUNQLE9BQU9LLE9BQU9HLEtBQUssQ0FBQ0MsRUFBRSxFQUFFTjtJQUdwQ1QsZ0RBQVNBLENBQUM7UUFDTixNQUFNZ0IsWUFBWTtZQUNkUixXQUFXO1lBQ1gsSUFBSTtnQkFDQSxNQUFNUyxXQUFXLE1BQU1kLDZEQUFPQSxDQUFDUSxPQUFPRyxLQUFLLENBQUNDLEVBQUU7Z0JBQzlDSCxRQUFRQyxHQUFHLENBQUNJO2dCQUVaUCxRQUFRTztZQUNaLEVBQUUsT0FBT0MsS0FBSztnQkFDVk4sUUFBUU8sS0FBSyxDQUFDRDtZQUNsQixTQUFVO2dCQUNOVixXQUFXO1lBQ2Y7UUFDSjtRQUVBRyxPQUFPRyxLQUFLLENBQUNDLEVBQUUsSUFBSUM7SUFDdkIsR0FBRztRQUFDTCxPQUFPRyxLQUFLLENBQUNDLEVBQUU7S0FBQztRQVNnQk47SUFQcEMscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7a0JBRUhkLDBCQUFZLDhEQUFDTCxnRUFBTUE7Ozs7c0NBRW5CLDhEQUFDb0I7WUFBUUQsV0FBVTtzQkFDZiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDakIsbURBQUtBO3dCQUFDbUIsS0FBS2QsQ0FBQUEsa0JBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWUsU0FBUyxjQUFmZiw2QkFBQUEsa0JBQW1CO3dCQUFJZ0IsT0FBTzt3QkFBTUMsUUFBUTt3QkFBTUwsV0FBVTt3QkFBa0RNLE9BQU87NEJBQUVDLFdBQVc7d0JBQU87Ozs7OztrQ0FDckosOERBQUNDO3dCQUFHUixXQUFVOzs0QkFBcUI7NEJBQUVaLEtBQUtxQixLQUFLOzRCQUFDOzs7Ozs7O2tDQUVoRCw4REFBQ1Y7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDs7b0NBQUk7b0NBQUtYLEtBQUtzQixNQUFNOzs7Ozs7OzBDQUNyQiw4REFBQ0M7O29DQUFNO29DQUFFdkIsS0FBS3dCLElBQUk7b0NBQUM7Ozs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDQzs7NEJBQUU7NEJBQUV6QixLQUFLMEIsT0FBTzs0QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUM7R0EvQ005Qjs7UUFJYU4sa0RBQVNBOzs7S0FKdEJNO0FBaUROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW2lkXS5qcz81YzllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvbG9hZGVyXCI7XHJcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tIFwiLi4vLi4vc2FuaXR5L3Nhbml0eS11dGlsc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IFBvc3RQYWdlID0gKHBhcmFtKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtLCByb3V0ZXIucXVlcnkuaWQsIGRhdGEpXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiAgeyBcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdChyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0RGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHBvc3REYXRhKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSkgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5xdWVyeS5pZCAmJiBmZXRjaERhdGEoKSBcclxuICAgIH0sIFtyb3V0ZXIucXVlcnkuaWRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHAtMTAgbWF4LXctN3hsIG0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgPyA8TG9hZGVyIC8+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWF4LXctM3hsIG0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZGF0YT8udGh1bWJuYWlsID8/IFwiXCJ9IHdpZHRoPXsxMDAwfSBoZWlnaHQ9ezEwMDB9IGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgbGc6bWF4LXctM3hsIHJvdW5kZWQteGwgbWItNiBteC1hdXRvXCIgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC10aGluXCI+IHtkYXRhLnRvcGljfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkJ5OiB7ZGF0YS5hdXRob3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7ZGF0YS5kYXRlfSA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtkYXRhLmNvbnRlbnR9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZVxyXG5cclxuICAiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2FkZXIiLCJnZXRQb3N0IiwiSW1hZ2UiLCJQb3N0UGFnZSIsInBhcmFtIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJmZXRjaERhdGEiLCJwb3N0RGF0YSIsImVyciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInNyYyIsInRodW1ibmFpbCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJoMiIsInRvcGljIiwiYXV0aG9yIiwic21hbGwiLCJkYXRlIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n"));

/***/ })

});