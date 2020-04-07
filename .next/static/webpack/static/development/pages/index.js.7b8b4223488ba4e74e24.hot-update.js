webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button-link.js":
/*!***********************************!*\
  !*** ./components/button-link.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/components/button-link.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ButtonLink = function ButtonLink(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.path, "/[id]"),
    as: "/".concat(props.path, "/").concat(props.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonLink);

/***/ }),

/***/ "./components/product-item.js":
/*!************************************!*\
  !*** ./components/product-item.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _store_actions_wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/wishlist */ "./store/actions/wishlist.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/button-link */ "./components/button-link.js");
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/components/product-item.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ProductItem = function ProductItem(_ref) {
  var id = _ref.id,
      image = _ref.image,
      name = _ref.name,
      price = _ref.price,
      description = _ref.description;
  var product = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.products.availableProducts;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, name), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, price), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, description), __jsx("button", {
    onClick: function onClick() {
      dispatch(_store_actions_wishlist__WEBPACK_IMPORTED_MODULE_4__["addToWishList"](product[id - 1]));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Add To Wishlist"), __jsx(_components_button_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "View",
    id: id,
    path: "product-detail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: function onClick() {
      dispatch(_store_actions_cart__WEBPACK_IMPORTED_MODULE_3__["addToCart"](product[id - 1]));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Add To Cart"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ })

})
//# sourceMappingURL=index.js.7b8b4223488ba4e74e24.hot-update.js.map