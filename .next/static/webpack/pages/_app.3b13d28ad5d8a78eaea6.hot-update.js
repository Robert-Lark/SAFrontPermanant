webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ \"./components/styles/CartStyles.js\");\n/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Supreme */ \"./components/styles/Supreme.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/calcTotalPrice */ \"./lib/calcTotalPrice.js\");\n\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/components/Cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li.withConfig({\n  displayName: \"Cart__CartItemStyles\",\n  componentId: \"sc-19s6z00-0\"\n})([\"padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}\"]);\n_c = CartItemStyles;\n\nfunction CartItem(_ref) {\n  var cartItem = _ref.cartItem;\n  var product = cartItem.product;\n  if (!product) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartItemStyles, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      width: \"100\",\n      src: product.photo.image.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(product.price * cartItem.quantity), \"-\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n          children: [cartItem.quantity, \" \\xD7 \", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(product.price), \"each\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = CartItem;\nfunction Cart() {\n  _s();\n\n  var _this = this;\n\n  var me = Object(_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"])();\n  if (!me) return null;\n  console.log(me);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    open: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Supreme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [me.name, \"'s cart\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: me.cart.map(function (cartItem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartItem, {\n          cartItem: cartItem\n        }, cartItem.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(me.cart))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Cart, \"Z98rfMCuMoVDW8LRyFv7Prn3FZ8=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"]];\n});\n\n_c3 = Cart;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CartItemStyles\");\n$RefreshReg$(_c2, \"CartItem\");\n$RefreshReg$(_c3, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzP2ZmYzEiXSwibmFtZXMiOlsiQ2FydEl0ZW1TdHlsZXMiLCJzdHlsZWQiLCJsaSIsIkNhcnRJdGVtIiwiY2FydEl0ZW0iLCJwcm9kdWN0IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJxdWFudGl0eSIsIkNhcnQiLCJtZSIsInVzZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIm1hcCIsImlkIiwiY2FsY1RvdGFsUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSx1SkFBcEI7S0FBTUYsYzs7QUFjTixTQUFTRyxRQUFULE9BQThCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQUEsTUFDckJDLE9BRHFCLEdBQ1ZELFFBRFUsQ0FDckJDLE9BRHFCO0FBRTVCLE1BQUksQ0FBQ0EsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLHNCQUNFLHFFQUFDLGNBQUQ7QUFBQSw0QkFDRTtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjNCO0FBR0UsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFDR0MsZ0VBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFSLEdBQWdCUCxRQUFRLENBQUNRLFFBQTFCLENBRGQsb0JBRUU7QUFBQSxxQkFDR1IsUUFBUSxDQUFDUSxRQURaLFlBQytCRixnRUFBVyxDQUFDTCxPQUFPLENBQUNNLEtBQVQsQ0FEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztNQXRCUVIsUTtBQXdCTSxTQUFTVSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLEVBQUUsR0FBR0MscURBQU8sRUFBbEI7QUFDQSxNQUFJLENBQUNELEVBQUwsRUFBUyxPQUFPLElBQVA7QUFDVEUsU0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDQSxzQkFDRSxxRUFBQywwREFBRDtBQUFZLFFBQUksTUFBaEI7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQUEsbUJBQVVBLEVBQUUsQ0FBQ0wsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLGdCQUNHSyxFQUFFLENBQUNJLElBQUgsQ0FBUUMsR0FBUixDQUFZLFVBQUNmLFFBQUQ7QUFBQSw0QkFDWCxxRUFBQyxRQUFEO0FBQTRCLGtCQUFRLEVBQUVBO0FBQXRDLFdBQWVBLFFBQVEsQ0FBQ2dCLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBU0U7QUFBQSw2QkFDRTtBQUFBLGtCQUFJVixnRUFBVyxDQUFDVyxtRUFBYyxDQUFDUCxFQUFFLENBQUNJLElBQUosQ0FBZjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0FuQnVCTCxJO1VBQ1hFLDZDOzs7TUFEV0YsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ2FydFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvQ2FydFN0eWxlc1wiO1xuaW1wb3J0IFN1cHJlbWUgZnJvbSBcIi4vc3R5bGVzL1N1cHJlbWVcIjtcbmltcG9ydCB7dXNlVXNlcn0gZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuLi9saWIvZm9ybWF0TW9uZXlcIjtcbmltcG9ydCBjYWxjVG90YWxQcmljZSBmcm9tIFwiLi4vbGliL2NhbGNUb3RhbFByaWNlXCI7XG5cbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG4gIGgzLFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIENhcnRJdGVtKHtjYXJ0SXRlbX0pIHtcbiAgY29uc3Qge3Byb2R1Y3R9ID0gY2FydEl0ZW07XG4gIGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPENhcnRJdGVtU3R5bGVzPlxuICAgICAgPGltZ1xuICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgIHNyYz17cHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBjYXJ0SXRlbS5xdWFudGl0eSl9LVxuICAgICAgICAgIDxlbT5cbiAgICAgICAgICAgIHtjYXJ0SXRlbS5xdWFudGl0eX0gJnRpbWVzOyB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9XG4gICAgICAgICAgICBlYWNoXG4gICAgICAgICAgPC9lbT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJ0SXRlbVN0eWxlcz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XG4gIGlmICghbWUpIHJldHVybiBudWxsO1xuICBjb25zb2xlLmxvZyhtZSk7XG4gIHJldHVybiAoXG4gICAgPENhcnRTdHlsZXMgb3Blbj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxTdXByZW1lPnttZS5uYW1lfSdzIGNhcnQ8L1N1cHJlbWU+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDx1bD5cbiAgICAgICAge21lLmNhcnQubWFwKChjYXJ0SXRlbSkgPT4gKFxuICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2NhcnRJdGVtLmlkfSBjYXJ0SXRlbT17Y2FydEl0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxwPntmb3JtYXRNb25leShjYWxjVG90YWxQcmljZShtZS5jYXJ0KSl9PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9DYXJ0U3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart.js\n");

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return calcTotalPrice; });\nfunction calcTotalPrice(cart) {\n  return cart.reduce(function (tally, cartItem) {\n    //this accounts for items that sell out while still in a users cart\n    if (!cartItem.product) return tally;\n    return tally + cartItem.quantity * cartItemproduct.price;\n  }, 0);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbGNUb3RhbFByaWNlLmpzP2IxNzAiXSwibmFtZXMiOlsiY2FsY1RvdGFsUHJpY2UiLCJjYXJ0IiwicmVkdWNlIiwidGFsbHkiLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJxdWFudGl0eSIsImNhcnRJdGVtcHJvZHVjdCIsInByaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWUsU0FBU0EsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDM0MsU0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDO0FBQ0EsUUFBSSxDQUFDQSxRQUFRLENBQUNDLE9BQWQsRUFBdUIsT0FBT0YsS0FBUDtBQUN2QixXQUFPQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0UsUUFBVCxHQUFvQkMsZUFBZSxDQUFDQyxLQUFuRDtBQUNELEdBSk0sRUFJSixDQUpJLENBQVA7QUFLRCIsImZpbGUiOiIuL2xpYi9jYWxjVG90YWxQcmljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNUb3RhbFByaWNlKGNhcnQpIHtcbiAgcmV0dXJuIGNhcnQucmVkdWNlKCh0YWxseSwgY2FydEl0ZW0pID0+IHtcbiAgICAvL3RoaXMgYWNjb3VudHMgZm9yIGl0ZW1zIHRoYXQgc2VsbCBvdXQgd2hpbGUgc3RpbGwgaW4gYSB1c2VycyBjYXJ0XG4gICAgaWYgKCFjYXJ0SXRlbS5wcm9kdWN0KSByZXR1cm4gdGFsbHk7XG4gICAgcmV0dXJuIHRhbGx5ICsgY2FydEl0ZW0ucXVhbnRpdHkgKiBjYXJ0SXRlbXByb2R1Y3QucHJpY2U7XG4gIH0sIDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/calcTotalPrice.js\n");

/***/ })

})