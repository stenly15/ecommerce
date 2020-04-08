webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/products.js":
/*!********************************!*\
  !*** ./components/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _product_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-item */ "./components/product-item.js");
/* harmony import */ var _store_actions_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/products */ "./store/actions/products.js");
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/components/products.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Products = function Products() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products.availableProducts;
  });
  var searchProducts = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products.searchProducts;
  });
  var filteredProduct = products.filter(function (product) {
    return product.productName.toLowerCase().includes(searchProducts.toLowerCase());
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      flex: 1,
      margin: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "search",
    placeholder: "Cari aja dulu...",
    onChange: function onChange(e) {
      dispatch(_store_actions_products__WEBPACK_IMPORTED_MODULE_3__["searchProducts"](e.target.value));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " Filter by Category: "), __jsx("select", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("option", {
    value: "all",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "All"), __jsx("option", {
    value: "Games",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Games"), __jsx("option", {
    value: "Toys",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Toys"), __jsx("option", {
    value: "Accecories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Accecories"))), filteredProduct.map(function (item) {
    return __jsx(_product_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.productId,
      id: item.productId,
      image: item.productImage,
      name: item.productName,
      price: item.productPrice,
      description: item.productDescription,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 45
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=index.js.56bff741316a83d8facf.hot-update.js.map