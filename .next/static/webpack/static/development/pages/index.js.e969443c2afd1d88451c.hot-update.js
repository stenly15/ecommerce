webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product */ "./models/product.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  items: {}
};
var cartReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createReducer"])(initialState, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _actions_cart__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART"], function (state, action) {
  var addedProduct = action.payload;
  var productId = addedProduct.productId;
  var productPrice = addedProduct.productPrice;
  var productName = addedProduct.productName;
  console.log(addedProduct);
  var updatedOrNewCartItem;

  if (state.items[addedProduct.productId]) {// updatedOrNewCartItem = new CartItem(
    //     prodId,
    //     prodName,
    //     prodPrice,
    //     state.items[addedProduct.prodId].quantity + 1,
    // );
  } else {
    updatedOrNewCartItem = {
      productId: productId,
      productPrice: productPrice,
      productName: productName,
      quantity: 1
    }; // updatedOrNewCartItem = new CartItem(prodId, prodName, prodPrice, 1);
  }

  return _objectSpread({}, state, {
    items: _objectSpread({}, state.items, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, productId, updatedOrNewCartItem))
  });
}));
/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ })

})
//# sourceMappingURL=index.js.e969443c2afd1d88451c.hot-update.js.map