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
/* harmony import */ var _store_reducers_wishlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/reducers/wishlist */ "./store/reducers/wishlist.js");
var _this = undefined,
    _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  cart: _store_reducers_cart__WEBPACK_IMPORTED_MODULE_7__["default"],
  products: _store_reducers_products__WEBPACK_IMPORTED_MODULE_8__["default"]
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
  }), __jsx(_components_products__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store/actions/wishlist.js":
/*!***********************************!*\
  !*** ./store/actions/wishlist.js ***!
  \***********************************/
/*! exports provided: ADD_TO_WISHLIST, addToWishList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_WISHLIST", function() { return ADD_TO_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishList", function() { return addToWishList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
var addToWishList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_WISHLIST);

/***/ }),

/***/ "./store/reducers/wishlist.js":
/*!************************************!*\
  !*** ./store/reducers/wishlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/wishlist */ "./store/actions/wishlist.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  items: {}
};
var wishlistReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _actions_wishlist__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_WISHLIST"], function (state, action) {
  var addedProduct = action.payload;
  var productId = addedProduct.productId;
  var productPrice = addedProduct.productPrice;
  var productName = addedProduct.productName;
  var wishListItem = {
    productId: productId,
    productName: productName,
    productPrice: productPrice
  };
  return _objectSpread({}, state, {
    items: _objectSpread({}, state.items, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, productId, wishListItem))
  });
}));
/* harmony default export */ __webpack_exports__["default"] = (wishlistReducer);

/***/ })

})
//# sourceMappingURL=index.js.489b633fe5d0a0577aad.hot-update.js.map