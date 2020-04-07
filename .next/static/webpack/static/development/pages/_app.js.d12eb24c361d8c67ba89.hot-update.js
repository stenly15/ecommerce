webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/cart.js":
/*!********************************!*\
  !*** ./store/reducers/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


var _createReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  items: {},
  totalAmount: 0
};
var cartReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, (_createReducer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions_cart__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART"], function (state, action) {
  var _action$payload = action.payload,
      productId = _action$payload.productId,
      productName = _action$payload.productName,
      productPrice = _action$payload.productPrice,
      productDescription = _action$payload.productDescription,
      productImage = _action$payload.productImage,
      productCategory = _action$payload.productCategory;
  var updatedOrNewCartItem;

  if (state.items[productId]) {
    updatedOrNewCartItem = {
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      productImage: productImage,
      productCategory: productCategory,
      quantity: state.items[productId].quantity + 1,
      sum: state.items[productId].sum + productPrice
    };
  } else {
    updatedOrNewCartItem = {
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      productImage: productImage,
      productCategory: productCategory,
      quantity: 1,
      sum: productPrice
    };
  }

  return _objectSpread({}, state, {
    items: _objectSpread({}, state.items, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, productId, updatedOrNewCartItem)),
    totalAmount: state.totalAmount + productPrice
  });
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions_cart__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_CART"], function (state, action) {
  var _state$items$action$p = state.items[action.payload],
      productId = _state$items$action$p.productId,
      productName = _state$items$action$p.productName,
      productPrice = _state$items$action$p.productPrice,
      productDescription = _state$items$action$p.productDescription,
      productImage = _state$items$action$p.productImage,
      productCategory = _state$items$action$p.productCategory,
      quantity = _state$items$action$p.quantity;
  var updatedCartItems;

  if (quantity > 1) {
    //need to reduce, not erase it
    updatedCartItems = {
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      productImage: productImage,
      productCategory: productCategory,
      quantity: state.items[productId].quantity - 1,
      sum: state.items[productId].sum - productPrice
    };
    updatedCartItems = _objectSpread({}, state.items, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload, updatedCartItems));
  } else {
    updatedCartItems = _objectSpread({}, state.items);
    delete updatedCartItems[action.payload];
  }

  return _objectSpread({}, state, {
    items: updatedCartItems,
    totalAmount: state.totalAmount - productPrice
  });
}), _createReducer));
/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ })

})
//# sourceMappingURL=_app.js.d12eb24c361d8c67ba89.hot-update.js.map