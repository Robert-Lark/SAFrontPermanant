webpackHotUpdate_N_E("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrdersPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ \"./components/styles/OrderItemStyles.js\");\n\n\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/pages/orders.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\\n  grid-gap: 4rem;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query USER_ORDERS_QUERY {\\n    allOrders {\\n      id\\n      charge\\n      total\\n      user {\\n        id\\n      }\\n      items {\\n        id\\n        name\\n        description\\n        price\\n        quantity\\n        photo {\\n          image {\\n            publicUrlTransformed\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar USER_ORDERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nvar OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul(_templateObject2());\n_c = OrderUl;\n\nfunction countItemsInAnOrder(order) {\n  return order.items.reduce(function (tally, item) {\n    return tally + item.quantity;\n  }, 0);\n}\n\nfunction OrdersPage() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(USER_ORDERS_QUERY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 21\n  }, this);\n  var allOrders = data.allOrders;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [\"Your Orders (\", allOrders.length, \")\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: [\"You have \", allOrders.length, \" orders!\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(OrderUl, {\n      children: allOrders.map(function (order) {\n        return (\n          /*#__PURE__*/\n          // {key={item.id}}\n          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n              href: \"/order/\".concat(order.id),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"order-meta\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [countItemsInAnOrder(order), \" Items\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 63,\n                    columnNumber: 19\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [order.items.length, \" Product\", order.items.length === 1 ? '' : 's']\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 64,\n                    columnNumber: 19\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(order.total)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 19\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"images\",\n                  children: order.items.map(function (item) {\n                    var _item$photo, _item$photo$image;\n\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,\n                      alt: item.name\n                    }, \"image-\".concat(item.id), false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 21\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 15\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 11\n          }, _this)\n        );\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(OrdersPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c2 = OrdersPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"OrderUl\");\n$RefreshReg$(_c2, \"OrdersPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzPzU3ZWIiXSwibmFtZXMiOlsiVVNFUl9PUkRFUlNfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwic3R5bGVkIiwidWwiLCJjb3VudEl0ZW1zSW5Bbk9yZGVyIiwib3JkZXIiLCJpdGVtcyIsInJlZHVjZSIsInRhbGx5IiwiaXRlbSIsInF1YW50aXR5IiwiT3JkZXJzUGFnZSIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFsbE9yZGVycyIsImxlbmd0aCIsIm1hcCIsImlkIiwiZm9ybWF0TW9uZXkiLCJ0b3RhbCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0Msa0RBQUgsbUJBQXZCO0FBeUJBLElBQU1DLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFBYjtLQUFNRixPOztBQU1OLFNBQVNHLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxTQUFPQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxLQUFELEVBQVFDLElBQVI7QUFBQSxXQUFpQkQsS0FBSyxHQUFHQyxJQUFJLENBQUNDLFFBQTlCO0FBQUEsR0FBbkIsRUFBMkQsQ0FBM0QsQ0FBUDtBQUNEOztBQUVjLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRkMsK0RBQVEsQ0FBQ2IsaUJBQUQsQ0FETjtBQUFBLE1BQzNCYyxJQUQyQixhQUMzQkEsSUFEMkI7QUFBQSxNQUNyQkMsS0FEcUIsYUFDckJBLEtBRHFCO0FBQUEsTUFDZEMsT0FEYyxhQUNkQSxPQURjOztBQUVuQyxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTyxxRUFBQyxnRUFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSHdCLE1BSTNCRSxTQUoyQixHQUliSCxJQUphLENBSTNCRyxTQUoyQjtBQUtuQyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxvQ0FBcUJBLFNBQVMsQ0FBQ0MsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSw4QkFBY0QsU0FBUyxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLHFFQUFDLE9BQUQ7QUFBQSxnQkFDR0QsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ2IsS0FBRDtBQUFBO0FBQUE7QUFDYjtBQUNBLCtFQUFDLDBFQUFEO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxtQkFBWUEsS0FBSyxDQUFDYyxFQUFsQixDQUFWO0FBQUEscUNBQ0U7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsWUFBZjtBQUFBLDBDQUNFO0FBQUEsK0JBQUlmLG1CQUFtQixDQUFDQyxLQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUEsK0JBQ0dBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVyxNQURmLGNBRUdaLEtBQUssQ0FBQ0MsS0FBTixDQUFZVyxNQUFaLEtBQXVCLENBQXZCLEdBQTJCLEVBQTNCLEdBQWdDLEdBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixlQU1FO0FBQUEsOEJBQUlHLGdFQUFXLENBQUNmLEtBQUssQ0FBQ2dCLEtBQVA7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVNFO0FBQUssMkJBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0doQixLQUFLLENBQUNDLEtBQU4sQ0FBWVksR0FBWixDQUFnQixVQUFDVCxJQUFEO0FBQUE7O0FBQUEsd0NBQ2Y7QUFFRSx5QkFBRyxpQkFBRUEsSUFBSSxDQUFDYSxLQUFQLHFFQUFFLFlBQVlDLEtBQWQsc0RBQUUsa0JBQW1CQyxvQkFGMUI7QUFHRSx5QkFBRyxFQUFFZixJQUFJLENBQUNnQjtBQUhaLHVDQUNnQmhCLElBQUksQ0FBQ1UsRUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEZTtBQUFBLG1CQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBekN1QlIsVTtVQUNXQyx1RDs7O01BRFhELFUiLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XG5pbXBvcnQgT3JkZXJJdGVtU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzL09yZGVySXRlbVN0eWxlcyc7XG5cbmNvbnN0IFVTRVJfT1JERVJTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBVU0VSX09SREVSU19RVUVSWSB7XG4gICAgYWxsT3JkZXJzIHtcbiAgICAgIGlkXG4gICAgICBjaGFyZ2VcbiAgICAgIHRvdGFsXG4gICAgICB1c2VyIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBxdWFudGl0eVxuICAgICAgICBwaG90byB7XG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE9yZGVyVWwgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICBncmlkLWdhcDogNHJlbTtcbmA7XG5cbmZ1bmN0aW9uIGNvdW50SXRlbXNJbkFuT3JkZXIob3JkZXIpIHtcbiAgcmV0dXJuIG9yZGVyLml0ZW1zLnJlZHVjZSgodGFsbHksIGl0ZW0pID0+IHRhbGx5ICsgaXRlbS5xdWFudGl0eSwgMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyc1BhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFVTRVJfT1JERVJTX1FVRVJZKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xuICBjb25zdCB7IGFsbE9yZGVycyB9ID0gZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Zb3VyIE9yZGVycyAoe2FsbE9yZGVycy5sZW5ndGh9KTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDI+WW91IGhhdmUge2FsbE9yZGVycy5sZW5ndGh9IG9yZGVycyE8L2gyPlxuICAgICAgPE9yZGVyVWw+XG4gICAgICAgIHthbGxPcmRlcnMubWFwKChvcmRlcikgPT4gKFxuICAgICAgICAgIC8vIHtrZXk9e2l0ZW0uaWR9fVxuICAgICAgICAgIDxPcmRlckl0ZW1TdHlsZXM+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgPHA+e2NvdW50SXRlbXNJbkFuT3JkZXIob3JkZXIpfSBJdGVtczwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BpbWFnZS0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9PcmRlckl0ZW1TdHlsZXM+XG4gICAgICAgICkpfVxuICAgICAgPC9PcmRlclVsPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ })

})