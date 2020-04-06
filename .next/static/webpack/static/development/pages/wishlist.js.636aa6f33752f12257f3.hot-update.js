webpackHotUpdate("static/development/pages/wishlist.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  var cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cart.items;
  });
  var wishlist = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.wishlist.items;
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: linkStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: linkStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Cart(", Object.keys(cart).length, ")")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/wishlist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: linkStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Wishlist(", Object.keys(wishlist).length)));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=wishlist.js.636aa6f33752f12257f3.hot-update.js.map