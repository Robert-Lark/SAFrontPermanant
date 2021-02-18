webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/*! exports provided: CartStateProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartStateProvider\", function() { return CartStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/lib/cartState.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar LocalStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\nvar LocalStateProvider = LocalStateContext.Provider;\n\nfunction CartStateProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  //this is the custom provider where data (state) is stored as well as functionality (updaters)\n  // it can be accessed using the consumer\n  var _useState = useState(false),\n      _useState2 = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      cartOpen = _useState2[0],\n      setCartOpen = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LocalStateProvider, {\n    value: {\n      cartOpen: cartOpen,\n      setCartOpen: setCartOpen\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, this);\n} //this is the custom hook for accessing the cart's local state\n\n\n_s(CartStateProvider, \"xe1WncxGrJWPKk54fyWehQszVXg=\");\n\n_c = CartStateProvider;\n\nfunction useCart() {\n  _s2();\n\n  // we use a consumer here to access the local state\n  var all = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n_s2(useCart, \"k0r6hllA0ZVFTbsvyQUS1AVLOSY=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"CartStateProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhcnRTdGF0ZS5qcz83YTQ0Il0sIm5hbWVzIjpbIkxvY2FsU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxvY2FsU3RhdGVQcm92aWRlciIsIlByb3ZpZGVyIiwiQ2FydFN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInVzZUNhcnQiLCJhbGwiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixHQUFHRixpQkFBaUIsQ0FBQ0csUUFBN0M7O0FBRUEsU0FBU0MsaUJBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7O0FBQ3JDO0FBQ0E7QUFGcUMsa0JBSUxDLFFBQVEsQ0FBQyxLQUFELENBSkg7QUFBQTtBQUFBLE1BSTlCQyxRQUo4QjtBQUFBLE1BSXBCQyxXQUpvQjs7QUFNckMsc0JBQU8scUVBQUMsa0JBQUQ7QUFBb0IsU0FBSyxFQUFFO0FBQUNELGNBQVEsRUFBUkEsUUFBRDtBQUFXQyxpQkFBVyxFQUFYQTtBQUFYLEtBQTNCO0FBQUEsY0FBcURIO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FHRDs7O0dBVlNELGlCOztLQUFBQSxpQjs7QUFZVCxTQUFTSyxPQUFULEdBQW1CO0FBQUE7O0FBQ2Y7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUNYLGlCQUFELENBQXRCO0FBQ0EsU0FBT1UsR0FBUDtBQUNIOztJQUpRRCxPOztBQUtUIiwiZmlsZSI6Ii4vbGliL2NhcnRTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI7XG5cbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgLy90aGlzIGlzIHRoZSBjdXN0b20gcHJvdmlkZXIgd2hlcmUgZGF0YSAoc3RhdGUpIGlzIHN0b3JlZCBhcyB3ZWxsIGFzIGZ1bmN0aW9uYWxpdHkgKHVwZGF0ZXJzKVxuICAvLyBpdCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgdGhlIGNvbnN1bWVyXG5cbiAgY29uc3QgW2NhcnRPcGVuLCBzZXRDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIDxMb2NhbFN0YXRlUHJvdmlkZXIgdmFsdWU9e3tjYXJ0T3Blbiwgc2V0Q2FydE9wZW59fT57Y2hpbGRyZW59PC9Mb2NhbFN0YXRlUHJvdmlkZXI+O1xufVxuXG5cbi8vdGhpcyBpcyB0aGUgY3VzdG9tIGhvb2sgZm9yIGFjY2Vzc2luZyB0aGUgY2FydCdzIGxvY2FsIHN0YXRlXG5cbmZ1bmN0aW9uIHVzZUNhcnQoKSB7XG4gICAgLy8gd2UgdXNlIGEgY29uc3VtZXIgaGVyZSB0byBhY2Nlc3MgdGhlIGxvY2FsIHN0YXRlXG4gICAgY29uc3QgYWxsID0gdXNlQ29udGV4dChMb2NhbFN0YXRlQ29udGV4dCk7XG4gICAgcmV0dXJuIGFsbFxufVxuZXhwb3J0IHtDYXJ0U3RhdGVQcm92aWRlciwgdXNlQ2FydH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ })

})