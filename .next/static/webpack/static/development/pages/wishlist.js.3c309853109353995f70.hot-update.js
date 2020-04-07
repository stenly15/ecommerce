webpackHotUpdate("static/development/pages/wishlist.js",{

/***/ "./pages/wishlist.js":
/*!***************************!*\
  !*** ./pages/wishlist.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _store_actions_wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/wishlist */ "./store/actions/wishlist.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-currency-format */ "./node_modules/react-currency-format/lib/currency-format.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/pages/wishlist.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var WishListItem = function WishListItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, name), __jsx("img", {
    src: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Price : ", __jsx(react_currency_format__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: price,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'Rp. ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 24
    }
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, description), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Category: ", category), __jsx("button", {
    onClick: function onClick() {
      dispatch(_store_actions_wishlist__WEBPACK_IMPORTED_MODULE_4__["removeFromWishList"](id));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Remove"));
};

var WishList = function WishList() {
  var wishListItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var transformedWishListItems = [];

    for (var key in state.wishlist.items) {
      transformedWishListItems.push({
        productId: key,
        productName: state.wishlist.items[key].productName,
        productPrice: state.wishlist.items[key].productPrice,
        productDescription: state.wishlist.items[key].productDescription,
        productCategory: state.wishlist.items[key].productCategory,
        productImage: state.wishlist.items[key].productImage
      });
    }

    return transformedWishListItems;
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), wishListItems.length === 0 ? __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 23
    }
  }, "Your Wish List is Empty") : wishListItems.map(function (item) {
    return __jsx(WishListItem, {
      key: item.productId,
      id: item.productId,
      name: item.productName,
      price: item.productPrice,
      description: item.productDescription,
      category: item.productCategory,
      image: item.productImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WishList);

/***/ })

})
//# sourceMappingURL=wishlist.js.3c309853109353995f70.hot-update.js.map