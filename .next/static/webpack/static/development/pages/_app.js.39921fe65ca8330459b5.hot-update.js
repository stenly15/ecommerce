webpackHotUpdate("static/development/pages/_app.js",{

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


var _createReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  items: {}
};
var wishlistReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, (_createReducer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions_wishlist__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_WISHLIST"], function (state, action) {
  var _action$payload = action.payload,
      productId = _action$payload.productId,
      productName = _action$payload.productName,
      productPrice = _action$payload.productPrice,
      productDescription = _action$payload.productDescription,
      productImage = _action$payload.productImage,
      productCategory = _action$payload.productCategory;
  var wishListItem = {
    productId: productId,
    productName: productName,
    productPrice: productPrice,
    productDescription: productDescription,
    productImage: productImage,
    productCategory: productCategory
  };
  return _objectSpread({}, state, {
    items: _objectSpread({}, state.items, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, productId, wishListItem))
  });
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions_wishlist__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_WISHLIST"], function (state, action) {
  var updatedCartItems = _objectSpread({}, state.items);

  delete updatedCartItems[action.payload];
  return _objectSpread({}, state);
}), _createReducer));
/* harmony default export */ __webpack_exports__["default"] = (wishlistReducer);

/***/ })

})
//# sourceMappingURL=_app.js.39921fe65ca8330459b5.hot-update.js.map