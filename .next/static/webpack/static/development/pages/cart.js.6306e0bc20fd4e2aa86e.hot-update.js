webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/cart */ "./store/actions/cart.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-currency-format */ "./node_modules/react-currency-format/lib/currency-format.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/pages/cart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CartItem = function CartItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      price = _ref.price,
      quantity = _ref.quantity,
      sum = _ref.sum;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var product = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products.availableProducts;
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, name), __jsx("p", {
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
  }, "Quantity: ", quantity), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "SubTotal: ", __jsx(react_currency_format__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: sum,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'Rp. ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 26
    }
  })), __jsx("button", {
    onClick: function onClick() {
      dispatch(_store_actions_cart__WEBPACK_IMPORTED_MODULE_4__["addToCart"](product[id - 1]));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Add To Cart"), __jsx("button", {
    onClick: function onClick() {
      dispatch(_store_actions_cart__WEBPACK_IMPORTED_MODULE_4__["removeFromCart"](id));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Delete This Item"));
};

var Cart = function Cart() {
  var cartItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var transformedCartItems = [];

    for (var key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productName: state.cart.items[key].productName,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }

    return transformedCartItems;
  });
  var totalAmount = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.cart.totalAmount;
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), totalAmount === 0 ? __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  }, "Your Cart is Empty") : cartItems.map(function (item) {
    return __jsx(CartItem, {
      key: item.productId,
      id: item.productId,
      name: item.productName,
      price: item.productPrice,
      quantity: item.quantity,
      sum: item.sum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    });
  }), totalAmount !== 0 && __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Grand Total: ", __jsx(react_currency_format__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: totalAmount,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'Rp. ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 34
    }
  }), " "));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=cart.js.6306e0bc20fd4e2aa86e.hot-update.js.map