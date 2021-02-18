webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/*! exports provided: CartStateProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartStateProvider\", function() { return CartStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/lib/cartState.js\",\n    _s = $RefreshSig$();\n\n\n\nvar LocalStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\nvar LocalStateProvider = LocalStateContext.Provider;\n\nfunction CartStateProvider(_ref) {\n  var children = _ref.children;\n\n  //this is the custom provider where data (state) is stored as well as functionality (updaters)\n  // it can be accessed using the consumer\n  var _false = false,\n      _false2 = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_false, 1),\n      cartOpen = _false2[0];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LocalStateProvider, {\n    value: {\n      cartOpen: cartOpen\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, this);\n} //this is the custom hook for accessing the cart's local state\n\n\n_c = CartStateProvider;\n\nfunction useCart() {\n  _s();\n\n  // we use a consumer here to access the local state\n  var all = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n_s(useCart, \"k0r6hllA0ZVFTbsvyQUS1AVLOSY=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"CartStateProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhcnRTdGF0ZS5qcz83YTQ0Il0sIm5hbWVzIjpbIkxvY2FsU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxvY2FsU3RhdGVQcm92aWRlciIsIlByb3ZpZGVyIiwiQ2FydFN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnRPcGVuIiwidXNlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsRUFBdkM7QUFDQSxJQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDOztBQUVBLFNBQVNDLGlCQUFULE9BQXVDO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUNyQztBQUNBO0FBRnFDLGVBSWxCLEtBSmtCO0FBQUE7QUFBQSxNQUk5QkMsUUFKOEI7O0FBTXJDLHNCQUFPLHFFQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRTtBQUFDQSxjQUFRLEVBQVJBO0FBQUQsS0FBM0I7QUFBQSxjQUF3Q0Q7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUdEOzs7S0FWU0QsaUI7O0FBWVQsU0FBU0csT0FBVCxHQUFtQjtBQUFBOztBQUNmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDVCxpQkFBRCxDQUF0QjtBQUNBLFNBQU9RLEdBQVA7QUFDSDs7R0FKUUQsTzs7QUFLVCIsImZpbGUiOiIuL2xpYi9jYXJ0U3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMb2NhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IExvY2FsU3RhdGVQcm92aWRlciA9IExvY2FsU3RhdGVDb250ZXh0LlByb3ZpZGVyO1xuXG5mdW5jdGlvbiBDYXJ0U3RhdGVQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gIC8vdGhpcyBpcyB0aGUgY3VzdG9tIHByb3ZpZGVyIHdoZXJlIGRhdGEgKHN0YXRlKSBpcyBzdG9yZWQgYXMgd2VsbCBhcyBmdW5jdGlvbmFsaXR5ICh1cGRhdGVycylcbiAgLy8gaXQgY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHRoZSBjb25zdW1lclxuXG4gIGNvbnN0IFtjYXJ0T3Blbl0gPSBmYWxzZTtcblxuICByZXR1cm4gPExvY2FsU3RhdGVQcm92aWRlciB2YWx1ZT17e2NhcnRPcGVufX0+e2NoaWxkcmVufTwvTG9jYWxTdGF0ZVByb3ZpZGVyPjtcbn1cblxuXG4vL3RoaXMgaXMgdGhlIGN1c3RvbSBob29rIGZvciBhY2Nlc3NpbmcgdGhlIGNhcnQncyBsb2NhbCBzdGF0ZVxuXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xuICAgIC8vIHdlIHVzZSBhIGNvbnN1bWVyIGhlcmUgdG8gYWNjZXNzIHRoZSBsb2NhbCBzdGF0ZVxuICAgIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xuICAgIHJldHVybiBhbGxcbn1cbmV4cG9ydCB7Q2FydFN0YXRlUHJvdmlkZXIsIHVzZUNhcnR9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ })

})