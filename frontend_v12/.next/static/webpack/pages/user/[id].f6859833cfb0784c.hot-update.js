"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/api/dataManagement.ts":
/*!*************************************!*\
  !*** ./pages/api/dataManagement.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllApiPlants\": function() { return /* binding */ getAllApiPlants; },\n/* harmony export */   \"getAllUserPlants\": function() { return /* binding */ getAllUserPlants; },\n/* harmony export */   \"getUser\": function() { return /* binding */ getUser; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar PLANTS_API_URL = \"http://localhost:8080/api/plants\";\nvar USER_PLANTS_URL = \"http://localhost:8080/api/userplants\";\nvar USER_URL = \"http://localhost:8080/api/user\";\nvar getAllApiPlants = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n        var response;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    response = axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(PLANTS_API_URL);\n                    return [\n                        4,\n                        response\n                    ];\n                case 1:\n                    return [\n                        2,\n                        _state.sent().data\n                    ];\n            }\n        });\n    });\n    return function getAllApiPlants() {\n        return _ref.apply(this, arguments);\n    };\n}();\n// export const getAllUserPlants = async () => {\n//   const response = axios.get(USER_PLANTS_URL);\n//   return (await response).data;\n// };\nfunction getAllUserPlants() {\n    return _getAllUserPlants.apply(this, arguments);\n}\nfunction _getAllUserPlants() {\n    _getAllUserPlants = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n        var apiResponse, data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(USER_PLANTS_URL, {\n                            cache: \"no-store\"\n                        })\n                    ];\n                case 1:\n                    apiResponse = _state.sent();\n                    return [\n                        4,\n                        apiResponse.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    console.log(data);\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return _getAllUserPlants.apply(this, arguments);\n}\nfunction getUser(userId) {\n    return _getUser.apply(this, arguments);\n}\nfunction _getUser() {\n    _getUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(userId) {\n        var apiResponse, data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"http://localhost:8080/api/users/\".concat(userId), {\n                            cache: \"no-store\"\n                        })\n                    ];\n                case 1:\n                    apiResponse = _state.sent();\n                    return [\n                        4,\n                        apiResponse.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return _getUser.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGF0YU1hbmFnZW1lbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBRzFCLElBQU1DLGNBQWMsR0FBRyxrQ0FBa0M7QUFDekQsSUFBTUMsZUFBZSxHQUFHLHNDQUFzQztBQUM5RCxJQUFNQyxRQUFRLEdBQUcsZ0NBQWdDO0FBRTFDLElBQU1DLGVBQWU7ZUFBRywrRkFBWTtZQUNuQ0MsUUFBUTs7OztvQkFBUkEsUUFBUSxHQUFHTCxpREFBUyxDQUFDQyxjQUFjLENBQUMsQ0FBQztvQkFDbkM7O3dCQUFNSSxRQUFRO3NCQUFBOztvQkFBdEI7O3dCQUFRLGFBQWMsQ0FBRUUsSUFBSTtzQkFBQzs7O0lBQy9CLENBQUM7b0JBSFlILGVBQWU7OztHQUczQixDQUFDO0FBRUYsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCxrQ0FBa0M7QUFDbEMsS0FBSztBQUVFLFNBQWVJLGdCQUFnQjtXQUFoQkEsaUJBQWdCO0NBT3JDO1NBUHFCQSxpQkFBZ0I7SUFBaEJBLGlCQUFnQixHQUEvQiwrRkFBa0M7WUFDakNDLFdBQVcsRUFHWEYsSUFBSTs7OztvQkFIVTs7d0JBQU1HLEtBQUssQ0FBQ1IsZUFBZSxFQUFFOzRCQUMvQ1MsS0FBSyxFQUFFLFVBQVU7eUJBQ2xCLENBQUM7c0JBQUE7O29CQUZJRixXQUFXLEdBQUcsYUFFbEI7b0JBQ1c7O3dCQUFNQSxXQUFXLENBQUNHLElBQUksRUFBRTtzQkFBQTs7b0JBQS9CTCxJQUFJLEdBQUcsYUFBd0I7b0JBQ3JDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDLENBQUM7b0JBQ2xCOzt3QkFBT0EsSUFBSTtzQkFBQzs7O0lBQ2QsQ0FBQztXQVBxQkMsaUJBQWdCOztBQVMvQixTQUFlTyxPQUFPLENBQUNDLE1BQWM7V0FBdEJELFFBQU87Q0FNNUI7U0FOcUJBLFFBQU87SUFBUEEsUUFBTyxHQUF0Qiw2RkFBdUJDLE1BQWMsRUFBRTtZQUN0Q1AsV0FBVyxFQUdYRixJQUFJOzs7O29CQUhVOzt3QkFBTUcsS0FBSyxDQUFDLGtDQUFpQyxDQUFTLE9BQVBNLE1BQU0sQ0FBRSxFQUFFOzRCQUMzRUwsS0FBSyxFQUFFLFVBQVU7eUJBQ2xCLENBQUM7c0JBQUE7O29CQUZJRixXQUFXLEdBQUcsYUFFbEI7b0JBQ1c7O3dCQUFNQSxXQUFXLENBQUNHLElBQUksRUFBRTtzQkFBQTs7b0JBQS9CTCxJQUFJLEdBQUcsYUFBd0I7b0JBQ3JDOzt3QkFBT0EsSUFBSTtzQkFBQzs7O0lBQ2QsQ0FBQztXQU5xQlEsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvZGF0YU1hbmFnZW1lbnQudHM/NWU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IFBMQU5UU19BUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3BsYW50c1wiO1xuY29uc3QgVVNFUl9QTEFOVFNfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3VzZXJwbGFudHNcIjtcbmNvbnN0IFVTRVJfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3VzZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEFwaVBsYW50cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBheGlvcy5nZXQoUExBTlRTX0FQSV9VUkwpO1xuICByZXR1cm4gKGF3YWl0IHJlc3BvbnNlKS5kYXRhO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJQbGFudHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3MuZ2V0KFVTRVJfUExBTlRTX1VSTCk7XG4vLyAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UpLmRhdGE7XG4vLyB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlclBsYW50cygpIHtcbiAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVU0VSX1BMQU5UU19VUkwsIHtcbiAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcih1c2VySWQ6IHN0cmluZykge1xuICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3VzZXJzLyR7dXNlcklkfWAsIHtcbiAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJQTEFOVFNfQVBJX1VSTCIsIlVTRVJfUExBTlRTX1VSTCIsIlVTRVJfVVJMIiwiZ2V0QWxsQXBpUGxhbnRzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZ2V0QWxsVXNlclBsYW50cyIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJjYWNoZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlciIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/dataManagement.ts\n"));

/***/ })

});