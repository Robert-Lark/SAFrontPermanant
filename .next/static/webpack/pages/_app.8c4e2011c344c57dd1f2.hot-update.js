webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ \"./components/styles/CartStyles.js\");\n/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Supreme */ \"./components/styles/Supreme.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/components/Cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li.withConfig({\n  displayName: \"Cart__CartItemStyles\",\n  componentId: \"sc-19s6z00-0\"\n})([\"padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}\"]);\n_c = CartItemStyles;\n\nfunction CartItem(_ref) {\n  var cartItem = _ref.cartItem;\n  var product = cartItem.product;\n  if (!product) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartItemStyles, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      width: \"100\",\n      src: product.photo.image.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = CartItem;\nfunction Cart() {\n  _s();\n\n  var _this = this;\n\n  var me = Object(_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"])();\n  if (!me) return null;\n  console.log(me);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    open: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Supreme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [me.name, \"'s cart\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: me.cart.map(function (cartItem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartItem, {\n          cartItem: cartItem\n        }, cartItem.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Cart, \"Z98rfMCuMoVDW8LRyFv7Prn3FZ8=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"]];\n});\n\n_c3 = Cart;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CartItemStyles\");\n$RefreshReg$(_c2, \"CartItem\");\n$RefreshReg$(_c3, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzP2ZmYzEiXSwibmFtZXMiOlsiQ2FydEl0ZW1TdHlsZXMiLCJzdHlsZWQiLCJsaSIsIkNhcnRJdGVtIiwiY2FydEl0ZW0iLCJwcm9kdWN0IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsIkNhcnQiLCJtZSIsInVzZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUpBQXBCO0tBQU1GLGM7O0FBY04sU0FBU0csUUFBVCxPQUE4QjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUFBLE1BQ3JCQyxPQURxQixHQUNWRCxRQURVLENBQ3JCQyxPQURxQjtBQUU1QixNQUFJLENBQUNBLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFDZCxzQkFDRSxxRUFBQyxjQUFEO0FBQUEsMkJBQ0U7QUFDRSxXQUFLLEVBQUMsS0FEUjtBQUVFLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxLQUFSLENBQWNDLEtBQWQsQ0FBb0JDLG9CQUYzQjtBQUdFLFNBQUcsRUFBRUgsT0FBTyxDQUFDSTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7TUFiUU4sUTtBQWVNLFNBQVNPLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsRUFBRSxHQUFHQyxxREFBTyxFQUFsQjtBQUNBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTLE9BQU8sSUFBUDtBQUNURSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsRUFBWjtBQUNBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVksUUFBSSxNQUFoQjtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UscUVBQUMsdURBQUQ7QUFBQSxtQkFBVUEsRUFBRSxDQUFDRixJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsZ0JBQ0dFLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRQyxHQUFSLENBQVksVUFBQ1osUUFBRDtBQUFBLDRCQUNYLHFFQUFDLFFBQUQ7QUFBNEIsa0JBQVEsRUFBRUE7QUFBdEMsV0FBZUEsUUFBUSxDQUFDYSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQWhCdUJQLEk7VUFDWEUsNkM7OztNQURXRixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDYXJ0U3R5bGVzIGZyb20gXCIuL3N0eWxlcy9DYXJ0U3R5bGVzXCI7XG5pbXBvcnQgU3VwcmVtZSBmcm9tIFwiLi9zdHlsZXMvU3VwcmVtZVwiO1xuaW1wb3J0IHt1c2VVc2VyfSBmcm9tIFwiLi9Vc2VyXCI7XG5cbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG4gIGgzLFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIENhcnRJdGVtKHtjYXJ0SXRlbX0pIHtcbiAgY29uc3Qge3Byb2R1Y3R9ID0gY2FydEl0ZW07XG4gIGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPENhcnRJdGVtU3R5bGVzPlxuICAgICAgPGltZ1xuICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgIHNyYz17cHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAvPlxuICAgIFxuICAgIDwvQ2FydEl0ZW1TdHlsZXM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xuICBpZiAoIW1lKSByZXR1cm4gbnVsbDtcbiAgY29uc29sZS5sb2cobWUpO1xuICByZXR1cm4gKFxuICAgIDxDYXJ0U3R5bGVzIG9wZW4+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8U3VwcmVtZT57bWUubmFtZX0ncyBjYXJ0PC9TdXByZW1lPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8dWw+XG4gICAgICAgIHttZS5jYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IChcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9DYXJ0U3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart.js\n");

/***/ })

})