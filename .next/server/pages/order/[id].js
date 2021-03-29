module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/order/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/components/ErrorMessage.js\";\n\n\n\nconst ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"ErrorMessage__ErrorStyles\",\n  componentId: \"sc-11u5fgj-0\"\n})([\"padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}\"]);\n\nconst DisplayError = ({\n  error\n}) => {\n  if (!error || !error.message) return null;\n\n  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {\n    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ErrorStyles, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        \"data-test\": \"graphql-error\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Shoot!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined), error.message.replace('GraphQL error: ', '')]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined)\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ErrorStyles, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      \"data-test\": \"graphql-error\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Shoot!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), error.message.replace('GraphQL error: ', '')]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, undefined);\n};\n\nDisplayError.defaultProps = {\n  error: {}\n};\nDisplayError.propTypes = {\n  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayError);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcz81NTQwIl0sIm5hbWVzIjpbIkVycm9yU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiRGlzcGxheUVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwibmV0d29ya0Vycm9yIiwicmVzdWx0IiwiZXJyb3JzIiwibGVuZ3RoIiwibWFwIiwiaSIsInJlcGxhY2UiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNLQUFqQjs7QUFlQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNsQyxNQUFJLENBQUNBLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNDLE9BQXJCLEVBQThCLE9BQU8sSUFBUDs7QUFDOUIsTUFBSUQsS0FBSyxDQUFDRSxZQUFOLElBQXNCRixLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLE1BQXpDLElBQW1ESCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUExQixDQUFpQ0MsTUFBeEYsRUFBZ0c7QUFDOUYsV0FBT0wsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBMUIsQ0FBaUNFLEdBQWpDLENBQXFDLENBQUNOLEtBQUQsRUFBUU8sQ0FBUixrQkFDMUMscUVBQUMsV0FBRDtBQUFBLDZCQUNFO0FBQUcscUJBQVUsZUFBYjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdQLEtBQUssQ0FBQ0MsT0FBTixDQUFjTyxPQUFkLENBQXNCLGlCQUF0QixFQUF5QyxFQUF6QyxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQWtCRCxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLENBQVA7QUFRRDs7QUFDRCxzQkFDRSxxRUFBQyxXQUFEO0FBQUEsMkJBQ0U7QUFBRyxtQkFBVSxlQUFiO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR1AsS0FBSyxDQUFDQyxPQUFOLENBQWNPLE9BQWQsQ0FBc0IsaUJBQXRCLEVBQXlDLEVBQXpDLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FwQkQ7O0FBc0JBVCxZQUFZLENBQUNVLFlBQWIsR0FBNEI7QUFDMUJULE9BQUssRUFBRTtBQURtQixDQUE1QjtBQUlBRCxZQUFZLENBQUNXLFNBQWIsR0FBeUI7QUFDdkJWLE9BQUssRUFBRVcsaURBQVMsQ0FBQ0M7QUFETSxDQUF6QjtBQUllYiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFcnJvclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9KSA9PiB7XG4gIGlmICghZXJyb3IgfHwgIWVycm9yLm1lc3NhZ2UpIHJldHVybiBudWxsO1xuICBpZiAoZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRXJyb3JTdHlsZXM+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JTdHlsZXM+XG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgIDwvcD5cbiAgICA8L0Vycm9yU3R5bGVzPlxuICApO1xufTtcblxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IHt9LFxufTtcblxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ErrorMessage.js\n");

/***/ }),

/***/ "./components/styles/OrderStyles.js":
/*!******************************************!*\
  !*** ./components/styles/OrderStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"OrderStyles\",\n  componentId: \"sc-4oqalm-0\"\n})([\"max-width:1000px;margin:0 auto;border:1px solid var(--offWhite);box-shadow:var(--bs);padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid var(--offWhite);span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid var(--offWhite);display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlclN0eWxlcy5qcz9jMDdjIl0sIm5hbWVzIjpbIk9yZGVyU3R5bGVzIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0ZkFBakI7QUFtQ2VGLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgT3JkZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHJlZDtcbiAgJiA+IHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2ZmV2hpdGUpO1xuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm9yZGVyLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IE9yZGVyU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/styles/OrderStyles.js\n");

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formatMoney; });\nfunction formatMoney(amount = 0) {\n  const options = {\n    style: \"currency\",\n    currency: \"USD\",\n    minimumFractionDigits: 2\n  }; // check if it is clean dollar ammount with no cents\n  //if the left-over ammount is zero remove the digits after the decimal point\n\n  if (amount % 100 === 0) {\n    options.minimumFractionDigits = 0;\n  }\n\n  const formatter = Intl.NumberFormat(\"en-Us\", options);\n  return formatter.format(amount / 100);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZm9ybWF0TW9uZXkuanM/ZGIyZiJdLCJuYW1lcyI6WyJmb3JtYXRNb25leSIsImFtb3VudCIsIm9wdGlvbnMiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQU0sR0FBRyxDQUE5QixFQUFpQztBQUM5QyxRQUFNQyxPQUFPLEdBQUc7QUFDZEMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQixDQUQ4QyxDQU85QztBQUNBOztBQUNBLE1BQUlKLE1BQU0sR0FBRyxHQUFULEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCQyxXQUFPLENBQUNHLHFCQUFSLEdBQWdDLENBQWhDO0FBQ0Q7O0FBQ0QsUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJOLE9BQTNCLENBQWxCO0FBQ0EsU0FBT0ksU0FBUyxDQUFDRyxNQUFWLENBQWlCUixNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2Zvcm1hdE1vbmV5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICB9O1xuXG4gIC8vIGNoZWNrIGlmIGl0IGlzIGNsZWFuIGRvbGxhciBhbW1vdW50IHdpdGggbm8gY2VudHNcbiAgLy9pZiB0aGUgbGVmdC1vdmVyIGFtbW91bnQgaXMgemVybyByZW1vdmUgdGhlIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludFxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XG4gICAgb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSAwO1xuICB9XG4gIGNvbnN0IGZvcm1hdHRlciA9IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVXNcIiwgb3B0aW9ucyk7XG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/formatMoney.js\n");

/***/ }),

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return singleOrderPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styles/OrderStyles */ \"./components/styles/OrderStyles.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/formatMoney */ \"./lib/formatMoney.js\");\n\nvar _jsxFileName = \"/Users/robertlark/SonicArchitecture/frontend/pages/order/[id].js\";\n// this will catch the specific route of the order [id] is a\n// placeholder for the order id\n\n\n\n\n\n\n\nconst SINGLE_ORDER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`\n  query SINGLE_ORDER_QUERY($id: ID!) {\n    order: Order(where: {id: $id}) {\n      id\n      charge\n      total\n      user {\n        id\n      }\n      items {\n        id\n        name\n        description\n        price\n        quantity\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n`;\nfunction singleOrderPage({\n  query\n}) {\n  const {\n    data,\n    error,\n    loading\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(SINGLE_ORDER_QUERY, {\n    variables: {\n      id: query.id\n    }\n  });\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 21\n  }, this);\n  const {\n    order\n  } = data;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Sonic Architecture\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Order Id:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: order.id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Order Total:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(order.total)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Item Count:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: order.items.length\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"items\",\n      children: order.items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"order-item\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: item.photo.image.publicUrlTransformed,\n          alt: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"item-details\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Qty: \", item.quantity]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Each: \", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(item.price)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Sub Total: \", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(item.price * item.quantity)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: item.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, this)]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vcmRlci8uanM/YmJhOCJdLCJuYW1lcyI6WyJTSU5HTEVfT1JERVJfUVVFUlkiLCJncWwiLCJzaW5nbGVPcmRlclBhZ2UiLCJxdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwib3JkZXIiLCJmb3JtYXRNb25leSIsInRvdGFsIiwiaXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwidGl0bGUiLCJuYW1lIiwicXVhbnRpdHkiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJBO0FBeUJlLFNBQVNDLGVBQVQsQ0FBeUI7QUFBQ0M7QUFBRCxDQUF6QixFQUFrQztBQUMvQyxRQUFNO0FBQUNDLFFBQUQ7QUFBT0MsU0FBUDtBQUFjQztBQUFkLE1BQXlCQywrREFBUSxDQUFDUCxrQkFBRCxFQUFxQjtBQUMxRFEsYUFBUyxFQUFFO0FBQUNDLFFBQUUsRUFBRU4sS0FBSyxDQUFDTTtBQUFYO0FBRCtDLEdBQXJCLENBQXZDO0FBR0EsTUFBSUgsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU8scUVBQUMsZ0VBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLFFBQU07QUFBQ0s7QUFBRCxNQUFVTixJQUFoQjtBQUNBLHNCQUNFLHFFQUFDLHNFQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQU9NLEtBQUssQ0FBQ0Q7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFRRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFPRSxnRUFBVyxDQUFDRCxLQUFLLENBQUNFLEtBQVA7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBWUU7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBT0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWdCRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsZ0JBQ0dKLEtBQUssQ0FBQ0csS0FBTixDQUFZRSxHQUFaLENBQWlCQyxJQUFELGlCQUNmO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxvQkFBM0I7QUFBaUQsYUFBRyxFQUFFSCxJQUFJLENBQUNJO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFQTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNJO0FBQUEsc0JBQUtKLElBQUksQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxnQ0FBU0wsSUFBSSxDQUFDTSxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsaUNBQVVYLGdFQUFXLENBQUNLLElBQUksQ0FBQ08sS0FBTixDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFBLHNDQUFlWixnRUFBVyxDQUFDSyxJQUFJLENBQUNPLEtBQUwsR0FBYVAsSUFBSSxDQUFDTSxRQUFuQixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFBLHNCQUFJTixJQUFJLENBQUNRO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQSxTQUFpQ1IsSUFBSSxDQUFDUCxFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEIiwiZmlsZSI6Ii4vcGFnZXMvb3JkZXIvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgd2lsbCBjYXRjaCB0aGUgc3BlY2lmaWMgcm91dGUgb2YgdGhlIG9yZGVyIFtpZF0gaXMgYVxuLy8gcGxhY2Vob2xkZXIgZm9yIHRoZSBvcmRlciBpZFxuXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCBPcmRlclN0eWxlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdHlsZXMvT3JkZXJTdHlsZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tIFwiLi4vLi4vbGliL2Zvcm1hdE1vbmV5XCI7XG5jb25zdCBTSU5HTEVfT1JERVJfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNJTkdMRV9PUkRFUl9RVUVSWSgkaWQ6IElEISkge1xuICAgIG9yZGVyOiBPcmRlcih3aGVyZToge2lkOiAkaWR9KSB7XG4gICAgICBpZFxuICAgICAgY2hhcmdlXG4gICAgICB0b3RhbFxuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBpdGVtcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgcGhvdG8ge1xuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW5nbGVPcmRlclBhZ2Uoe3F1ZXJ5fSkge1xuICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmd9ID0gdXNlUXVlcnkoU0lOR0xFX09SREVSX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7aWQ6IHF1ZXJ5LmlkfSxcbiAgfSk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPjtcbiAgY29uc3Qge29yZGVyfSA9IGRhdGE7XG4gIHJldHVybiAoXG4gICAgPE9yZGVyU3R5bGVzPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Tb25pYyBBcmNoaXRlY3R1cmU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuPk9yZGVyIElkOjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e29yZGVyLmlkfTwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Bhbj5PcmRlciBUb3RhbDo8L3NwYW4+XG4gICAgICAgIDxzcGFuPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuPkl0ZW0gQ291bnQ6PC9zcGFuPlxuICAgICAgICA8c3Bhbj57b3JkZXIuaXRlbXMubGVuZ3RofTwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cbiAgICAgICAge29yZGVyLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItaXRlbVwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH0gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxoMj57aXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxwPlF0eToge2l0ZW0ucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICA8cD5FYWNoOiB7Zm9ybWF0TW9uZXkoaXRlbS5wcmljZSl9PC9wPlxuICAgICAgICAgICAgICA8cD5TdWIgVG90YWw6IHtmb3JtYXRNb25leShpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSl9PC9wPlxuICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9PcmRlclN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/order/[id].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0XCI/ZWQ4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });