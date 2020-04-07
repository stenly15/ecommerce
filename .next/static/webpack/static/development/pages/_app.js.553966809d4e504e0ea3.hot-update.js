webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/app.js":
false,

/***/ "./node_modules/next/dist/pages/_app.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducers_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/cart */ "./store/reducers/cart.js");
/* harmony import */ var _store_reducers_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducers/products */ "./store/reducers/products.js");
/* harmony import */ var _store_reducers_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducers/wishlist */ "./store/reducers/wishlist.js");

var _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import App from 'next/app';






var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  cart: _store_reducers_cart__WEBPACK_IMPORTED_MODULE_4__["default"],
  products: _store_reducers_products__WEBPACK_IMPORTED_MODULE_5__["default"],
  wishlist: _store_reducers_wishlist__WEBPACK_IMPORTED_MODULE_6__["default"]
});
var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["configureStore"])({
  reducer: rootReducer
});
function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })));
}

/***/ })

})
//# sourceMappingURL=_app.js.553966809d4e504e0ea3.hot-update.js.map