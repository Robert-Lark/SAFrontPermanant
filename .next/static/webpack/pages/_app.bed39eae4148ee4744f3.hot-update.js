webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\\n    # if ever you want to rename what comes back (by default it will be called data)\\n    # you can prepend a title to the returned data like I did below\\n    searchTerms: allProducts(\\n      where: {\\n        OR: [\\n          {name_contains_i: $searchTerm}\\n          {description_contains_i: $searchTerm}\\n        ]\\n      }\\n    ) {\\n      id\\n      name\\n      photo {\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SEARCH_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());\nfunction Search() {\n  _s();\n\n  var _this = this;\n\n  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useLazyQuery\"])(SEARCH_PRODUCTS_QUERY, {\n    // this by-passes the cache (as we don't want to store any of these results)\n    // it just goes directly to the network.\n    fetchPolicy: \"no-cache\"\n  }),\n      _useLazyQuery2 = Object(_Users_robertlark_SonicArchitecture_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLazyQuery, 2),\n      findItems = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      loading = _useLazyQuery2$.loading,\n      data = _useLazyQuery2$.data,\n      error = _useLazyQuery2$.error;\n\n  var items = (data === null || data === void 0 ? void 0 : data.searchTerms) || []; //   this function ensures that a network request isnt fired for every keystroke but rather once every 350ms\n  // the 350ms resets with each keystroke\n\n  var findItemsAfterPause = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(findItems, 350); // resetId counter prevents errors on the console that talk about mismatched aria id tags from\n  // from downshift\n\n  Object(downshift__WEBPACK_IMPORTED_MODULE_4__[\"resetIdCounter\"])(); // comboBox is a package that handles accessability when it comes to search bars\n  // Below we are destructuring the particular pieces of combobox we want to use\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_4__[\"useCombobox\"])({\n    items: [],\n    // then we declare the methods we want to use onInputValueChange dictates wht to do when the\n    // search bar is typed into.\n    onInputValueChange: function onInputValueChange() {\n      //   this function ensures that a network request isnt fired for every keystroke but rather once every 350ms\n      findItemsAfterPause({\n        variables: {\n          searchTerm: inputValue\n        }\n      });\n    },\n    onSelectedItemChange: function onSelectedItemChange() {\n      console.log(\"selected item changed\");\n    }\n  }),\n      inputValue = _useCombobox.inputValue,\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps,\n      getItemProps = _useCombobox.getItemProps;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps({\n        type: \"search\",\n        placeholder: \"Search for a title\",\n        id: \"search\",\n        className: loading ? \"loading\" : \"\"\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"DropDown\"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {\n      children: items.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"DropDownItem\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: item.photo.image.publicUrlTransformed,\n            alt: item.name,\n            width: \"50px\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), item.name]\n        }, item.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this);\n      })\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"H4W9RyCSXzEDa4+nr/Nfx0uANm4=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useLazyQuery\"], downshift__WEBPACK_IMPORTED_MODULE_4__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJpdGVtcyIsInNlYXJjaFRlcm1zIiwiZmluZEl0ZW1zQWZ0ZXJQYXVzZSIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJnZXRJdGVtUHJvcHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLGtEQUFILG1CQUEzQjtBQXVCZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsc0JBQ2FDLG1FQUFZLENBQ3RESCxxQkFEc0QsRUFFdEQ7QUFDRTtBQUNBO0FBQ0FJLGVBQVcsRUFBRTtBQUhmLEdBRnNELENBRHpCO0FBQUE7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQTtBQUFBLE1BQ1pDLE9BRFksbUJBQ1pBLE9BRFk7QUFBQSxNQUNIQyxJQURHLG1CQUNIQSxJQURHO0FBQUEsTUFDR0MsS0FESCxtQkFDR0EsS0FESDs7QUFTL0IsTUFBTUMsS0FBSyxHQUFHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxXQUFOLEtBQXFCLEVBQW5DLENBVCtCLENBVS9CO0FBQ0E7O0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUdDLHNEQUFRLENBQUNQLFNBQUQsRUFBWSxHQUFaLENBQXBDLENBWitCLENBYS9CO0FBQ0E7O0FBQ0FRLGtFQUFjLEdBZmlCLENBaUIvQjtBQUNBOztBQWxCK0IscUJBeUIzQkMsNkRBQVcsQ0FBQztBQUNkTCxTQUFLLEVBQUUsRUFETztBQUVkO0FBQ0E7QUFDQU0sc0JBSmMsZ0NBSU87QUFDbkI7QUFDQUoseUJBQW1CLENBQUM7QUFDbEJLLGlCQUFTLEVBQUU7QUFDVEMsb0JBQVUsRUFBRUM7QUFESDtBQURPLE9BQUQsQ0FBbkI7QUFLRCxLQVhhO0FBWWRDLHdCQVpjLGtDQVlTO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEO0FBZGEsR0FBRCxDQXpCZ0I7QUFBQSxNQW9CN0JILFVBcEI2QixnQkFvQjdCQSxVQXBCNkI7QUFBQSxNQXFCN0JJLFlBckI2QixnQkFxQjdCQSxZQXJCNkI7QUFBQSxNQXNCN0JDLGFBdEI2QixnQkFzQjdCQSxhQXRCNkI7QUFBQSxNQXVCN0JDLGdCQXZCNkIsZ0JBdUI3QkEsZ0JBdkI2QjtBQUFBLE1Bd0I3QkMsWUF4QjZCLGdCQXdCN0JBLFlBeEI2Qjs7QUF5Qy9CLHNCQUNFLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0UsNEdBQVNELGdCQUFnQixFQUF6QjtBQUFBLDZCQUNFLGdHQUNNRCxhQUFhLENBQUM7QUFDaEJHLFlBQUksRUFBRSxRQURVO0FBRWhCQyxtQkFBVyxFQUFFLG9CQUZHO0FBR2hCQyxVQUFFLEVBQUUsUUFIWTtBQUloQkMsaUJBQVMsRUFBRXZCLE9BQU8sR0FBRyxTQUFILEdBQWU7QUFKakIsT0FBRCxDQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUUscUVBQUMseURBQUQsa0NBQWNnQixZQUFZLEVBQTFCO0FBQUEsZ0JBQ0diLEtBQUssQ0FBQ3FCLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1QscUVBQUMsNkRBQUQ7QUFBQSxrQ0FDRTtBQUNFLGVBQUcsRUFBRUEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLG9CQUR4QjtBQUVFLGVBQUcsRUFBRUgsSUFBSSxDQUFDSSxJQUZaO0FBR0UsaUJBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFNR0osSUFBSSxDQUFDSSxJQU5SO0FBQUEsV0FBbUJKLElBQUksQ0FBQ0gsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBcEV1QjFCLE07VUFDc0JDLDJELEVBd0J4Q1cscUQ7OztLQXpCa0JaLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94fSBmcm9tIFwiZG93bnNoaWZ0XCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xuaW1wb3J0IHtEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXN9IGZyb20gXCIuL3N0eWxlcy9Ecm9wRG93blwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7dXNlTGF6eVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgU0VBUkNIX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcbiAgICAjIGlmIGV2ZXIgeW91IHdhbnQgdG8gcmVuYW1lIHdoYXQgY29tZXMgYmFjayAoYnkgZGVmYXVsdCBpdCB3aWxsIGJlIGNhbGxlZCBkYXRhKVxuICAgICMgeW91IGNhbiBwcmVwZW5kIGEgdGl0bGUgdG8gdGhlIHJldHVybmVkIGRhdGEgbGlrZSBJIGRpZCBiZWxvd1xuICAgIHNlYXJjaFRlcm1zOiBhbGxQcm9kdWN0cyhcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIE9SOiBbXG4gICAgICAgICAge25hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm19XG4gICAgICAgICAge2Rlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgcGhvdG8ge1xuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCBbZmluZEl0ZW1zLCB7bG9hZGluZywgZGF0YSwgZXJyb3J9XSA9IHVzZUxhenlRdWVyeShcbiAgICBTRUFSQ0hfUFJPRFVDVFNfUVVFUlksXG4gICAge1xuICAgICAgLy8gdGhpcyBieS1wYXNzZXMgdGhlIGNhY2hlIChhcyB3ZSBkb24ndCB3YW50IHRvIHN0b3JlIGFueSBvZiB0aGVzZSByZXN1bHRzKVxuICAgICAgLy8gaXQganVzdCBnb2VzIGRpcmVjdGx5IHRvIHRoZSBuZXR3b3JrLlxuICAgICAgZmV0Y2hQb2xpY3k6IFwibm8tY2FjaGVcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XG4gIC8vICAgdGhpcyBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgYSBuZXR3b3JrIHJlcXVlc3QgaXNudCBmaXJlZCBmb3IgZXZlcnkga2V5c3Ryb2tlIGJ1dCByYXRoZXIgb25jZSBldmVyeSAzNTBtc1xuICAvLyB0aGUgMzUwbXMgcmVzZXRzIHdpdGggZWFjaCBrZXlzdHJva2VcbiAgY29uc3QgZmluZEl0ZW1zQWZ0ZXJQYXVzZSA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcbiAgLy8gcmVzZXRJZCBjb3VudGVyIHByZXZlbnRzIGVycm9ycyBvbiB0aGUgY29uc29sZSB0aGF0IHRhbGsgYWJvdXQgbWlzbWF0Y2hlZCBhcmlhIGlkIHRhZ3MgZnJvbVxuICAvLyBmcm9tIGRvd25zaGlmdFxuICByZXNldElkQ291bnRlcigpO1xuXG4gIC8vIGNvbWJvQm94IGlzIGEgcGFja2FnZSB0aGF0IGhhbmRsZXMgYWNjZXNzYWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlYXJjaCBiYXJzXG4gIC8vIEJlbG93IHdlIGFyZSBkZXN0cnVjdHVyaW5nIHRoZSBwYXJ0aWN1bGFyIHBpZWNlcyBvZiBjb21ib2JveCB3ZSB3YW50IHRvIHVzZVxuICBjb25zdCB7XG4gICAgaW5wdXRWYWx1ZSxcbiAgICBnZXRNZW51UHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wcyxcbiAgICBnZXRDb21ib2JveFByb3BzLFxuICAgIGdldEl0ZW1Qcm9wc1xuICB9ID0gdXNlQ29tYm9ib3goe1xuICAgIGl0ZW1zOiBbXSxcbiAgICAvLyB0aGVuIHdlIGRlY2xhcmUgdGhlIG1ldGhvZHMgd2Ugd2FudCB0byB1c2Ugb25JbnB1dFZhbHVlQ2hhbmdlIGRpY3RhdGVzIHdodCB0byBkbyB3aGVuIHRoZVxuICAgIC8vIHNlYXJjaCBiYXIgaXMgdHlwZWQgaW50by5cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XG4gICAgICAvLyAgIHRoaXMgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IGEgbmV0d29yayByZXF1ZXN0IGlzbnQgZmlyZWQgZm9yIGV2ZXJ5IGtleXN0cm9rZSBidXQgcmF0aGVyIG9uY2UgZXZlcnkgMzUwbXNcbiAgICAgIGZpbmRJdGVtc0FmdGVyUGF1c2Uoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgaXRlbSBjaGFuZ2VkXCIpO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hTdHlsZXM+XG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XG4gICAgICAgICAgICB0eXBlOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGZvciBhIHRpdGxlXCIsXG4gICAgICAgICAgICBpZDogXCJzZWFyY2hcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbG9hZGluZyA/IFwibG9hZGluZ1wiIDogXCJcIixcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIGhlcmUgaXMgd2hlcmUgdGhlIHJldHVybmVkIGRhdGEgZnJvbSB0aGUgc2VhcmNoIHF1ZXJ5IGlzIHJlbmRlcmVkICovfVxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8RHJvcERvd25JdGVtIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0Ryb3BEb3duPlxuICAgIDwvU2VhcmNoU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})