webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\nquery SEARCH_PRODUCTS_QUERY($searchTerm:String!) {\\n    # if ever you want to rename what comes back (by default it will be called data)\\n    # you can prepend a title to the returned data like I did below\\n    searchTerms: allProducts(\\n        where: {\\n            OR: [\\n                { name_contains_i: $searchTerm},\\n                { description_contains_i: $searchTerm},\\n                ]\\n        }\\n    ) {\\n        id\\n        classNamephoto {\\n            image {\\n                publicUrlTransformed\\n            }\\n        }\\n    }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar SEARCH_PRODUCTS_QUERY = gql(_templateObject());\nfunction Search() {\n  _s();\n\n  var _useLazyQuery = useLazyQuery(SEARCH_PRODUCTS_QUERY, {\n    // this by-passes the cache (as we don't want to store any of these results)\n    // it just goes directly to the network. \n    fetchPolicy: 'no-cache'\n  }),\n      _useLazyQuery2 = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLazyQuery, 2),\n      findItems = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      loading = _useLazyQuery2$.loading,\n      data = _useLazyQuery2$.data,\n      error = _useLazyQuery2$.error; // resetId counter prevents errors on the console that talk about mismatched aria id tags from \n  // from downshift\n\n\n  Object(downshift__WEBPACK_IMPORTED_MODULE_4__[\"resetIdCounter\"])();\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_4__[\"useCombobox\"])({\n    items: [],\n    onInputValueChange: function onInputValueChange() {\n      console.log(\"input changed\");\n    },\n    onSelectedItemChange: function onSelectedItemChange() {\n      console.log(\"selected item changed\");\n    }\n  }),\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps({\n        type: \"search\",\n        placeholder: \"Search for a title\",\n        id: \"search\",\n        className: \"loading\"\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDown\"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDownItem\"], {\n        children: \" Hey \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDownItem\"], {\n        children: \" Hello \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__[\"DropDownItem\"], {\n        children: \" Hi \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"FwzBLofYpicDnyXMkd+2TsNfDKc=\", true, function () {\n  return [downshift__WEBPACK_IMPORTED_MODULE_4__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94IiwiaXRlbXMiLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLHFCQUFxQixHQUFHQyxHQUFILG1CQUEzQjtBQXVCZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsc0JBQ2VDLFlBQVksQ0FBQ0gscUJBQUQsRUFBd0I7QUFDNUU7QUFDQTtBQUNBSSxlQUFXLEVBQUU7QUFIK0QsR0FBeEIsQ0FEM0I7QUFBQTtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBO0FBQUEsTUFDVkMsT0FEVSxtQkFDVkEsT0FEVTtBQUFBLE1BQ0RDLElBREMsbUJBQ0RBLElBREM7QUFBQSxNQUNLQyxLQURMLG1CQUNLQSxLQURMLEVBTzdCO0FBQ0E7OztBQUNGQyxrRUFBYzs7QUFUaUIscUJBVXlCQyw2REFBVyxDQUFDO0FBQ2xFQyxTQUFLLEVBQUUsRUFEMkQ7QUFFbEVDLHNCQUZrRSxnQ0FFN0M7QUFDbkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxLQUppRTtBQUtsRUMsd0JBTGtFLGtDQUszQztBQUNyQkYsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDRDtBQVBpRSxHQUFELENBVnBDO0FBQUEsTUFVeEJFLFlBVndCLGdCQVV4QkEsWUFWd0I7QUFBQSxNQVVWQyxhQVZVLGdCQVVWQSxhQVZVO0FBQUEsTUFVS0MsZ0JBVkwsZ0JBVUtBLGdCQVZMOztBQW1CL0Isc0JBQ0UscUVBQUMsNkRBQUQ7QUFBQSw0QkFDRSw0R0FBU0EsZ0JBQWdCLEVBQXpCO0FBQUEsNkJBQ0UsZ0dBQ01ELGFBQWEsQ0FBQztBQUNoQkUsWUFBSSxFQUFFLFFBRFU7QUFFaEJDLG1CQUFXLEVBQUUsb0JBRkc7QUFHaEJDLFVBQUUsRUFBRSxRQUhZO0FBSWhCQyxpQkFBUyxFQUFFO0FBSkssT0FBRCxDQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0UscUVBQUMseURBQUQsa0NBQWNOLFlBQVksRUFBMUI7QUFBQSw4QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBdEN1QmQsTTtVQVVrQ1EscUQ7OztLQVZsQ1IsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3h9IGZyb20gXCJkb3duc2hpZnRcIjtcbmltcG9ydCB7RHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzfSBmcm9tIFwiLi9zdHlsZXMvRHJvcERvd25cIjtcblxuXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXG5xdWVyeSBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkoJHNlYXJjaFRlcm06U3RyaW5nISkge1xuICAgICMgaWYgZXZlciB5b3Ugd2FudCB0byByZW5hbWUgd2hhdCBjb21lcyBiYWNrIChieSBkZWZhdWx0IGl0IHdpbGwgYmUgY2FsbGVkIGRhdGEpXG4gICAgIyB5b3UgY2FuIHByZXBlbmQgYSB0aXRsZSB0byB0aGUgcmV0dXJuZWQgZGF0YSBsaWtlIEkgZGlkIGJlbG93XG4gICAgc2VhcmNoVGVybXM6IGFsbFByb2R1Y3RzKFxuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgT1I6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm19LFxuICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb25fY29udGFpbnNfaTogJHNlYXJjaFRlcm19LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICkge1xuICAgICAgICBpZFxuICAgICAgICBjbGFzc05hbWVwaG90byB7XG4gICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gICAgY29uc3QgW2ZpbmRJdGVtcywge2xvYWRpbmcsIGRhdGEsIGVycm9yfV0gPSB1c2VMYXp5UXVlcnkoU0VBUkNIX1BST0RVQ1RTX1FVRVJZLCB7XG4gICAgICAgIC8vIHRoaXMgYnktcGFzc2VzIHRoZSBjYWNoZSAoYXMgd2UgZG9uJ3Qgd2FudCB0byBzdG9yZSBhbnkgb2YgdGhlc2UgcmVzdWx0cylcbiAgICAgICAgLy8gaXQganVzdCBnb2VzIGRpcmVjdGx5IHRvIHRoZSBuZXR3b3JrLiBcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgfSlcbiAgICBcbiAgICAvLyByZXNldElkIGNvdW50ZXIgcHJldmVudHMgZXJyb3JzIG9uIHRoZSBjb25zb2xlIHRoYXQgdGFsayBhYm91dCBtaXNtYXRjaGVkIGFyaWEgaWQgdGFncyBmcm9tIFxuICAgIC8vIGZyb20gZG93bnNoaWZ0XG4gIHJlc2V0SWRDb3VudGVyKCk7XG4gIGNvbnN0IHtnZXRNZW51UHJvcHMsIGdldElucHV0UHJvcHMsIGdldENvbWJvYm94UHJvcHN9ID0gdXNlQ29tYm9ib3goe1xuICAgIGl0ZW1zOiBbXSxcbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImlucHV0IGNoYW5nZWRcIik7XG4gICAgfSxcbiAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgaXRlbSBjaGFuZ2VkXCIpO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hTdHlsZXM+XG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XG4gICAgICAgICAgICB0eXBlOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGZvciBhIHRpdGxlXCIsXG4gICAgICAgICAgICBpZDogXCJzZWFyY2hcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxuICAgICAgICA8RHJvcERvd25JdGVtPiBIZXkgPC9Ecm9wRG93bkl0ZW0+XG4gICAgICAgIDxEcm9wRG93bkl0ZW0+IEhlbGxvIDwvRHJvcERvd25JdGVtPlxuICAgICAgICA8RHJvcERvd25JdGVtPiBIaSA8L0Ryb3BEb3duSXRlbT5cbiAgICAgIDwvRHJvcERvd24+XG4gICAgPC9TZWFyY2hTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})