webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search */ "./components/search.js");
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/products */ "./components/products.js");
/* harmony import */ var _store_reducers_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/reducers/cart */ "./store/reducers/cart.js");
/* harmony import */ var _store_reducers_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/reducers/products */ "./store/reducers/products.js");
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  cart: _store_reducers_cart__WEBPACK_IMPORTED_MODULE_7__["default"],
  product: _store_reducers_products__WEBPACK_IMPORTED_MODULE_8__["default"]
});
var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["configureStore"])({
  reducer: rootReducer
});

var Index = function Index() {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Next Market"), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), products.map(function (item) {
    return __jsx(_components_products__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.productId,
      image: item.productImage,
      name: item.productName,
      price: item.productPrice,
      description: item.productDescription,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 39
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.01e8fc31840d63635992.hot-update.js.map