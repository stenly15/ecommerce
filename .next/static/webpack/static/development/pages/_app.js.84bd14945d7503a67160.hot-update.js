webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/products.js":
/*!************************************!*\
  !*** ./store/reducers/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/products */ "./store/actions/products.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


var _createReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  availableProducts: [{
    productId: '1',
    productName: 'Star Wars Home Arcade Game',
    productPrice: 25000000,
    productDescription: 'This gergeous, three-quarter-sized arcade cabinet comes loaded ' + 'with some classic Star Wars gaming titles, including A New Hope, ' + 'The Empire Strikes Back, and Return of the Jedi.',
    productImage: 'img1.png',
    productCategory: 'Games'
  }, {
    productId: '2',
    productName: 'Poe\'s Boosted X-Wing Fighter',
    productPrice: 15000000,
    productDescription: 'For battling womp rats and tie fighters, and because you can\'t spell \"Poe Dameron\" without \"drone.\"',
    productImage: 'img2.png',
    productCategory: 'Toys'
  }, {
    productId: '3',
    productName: 'Star Wars\' Phone Cases',
    productPrice: 2500000,
    productDescription: 'If you want to show your love for the movie every day.',
    productImage: 'img3.png',
    productCategory: 'Accecories'
  }],
  searchProducts: '',
  productCategory: '',
  filteredProduct: []
};
var productReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, (_createReducer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions_products__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_PRODUCTS"], function (state) {
  return _objectSpread({}, state);
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions_products__WEBPACK_IMPORTED_MODULE_1__["SEARCH_PRODUCTS"], function (state, action) {
  var filteredProduct;
  var filteredProductByCategotry = state.availableProducts.filter(function (product) {
    return product.productCategory.includes(action.payload);
  });

  if (state.productCategory === '') {
    filteredProduct = state.availableProducts.filter(function (product) {
      return product.productName.toLowerCase().includes(action.payload.toLowerCase());
    });
  } else {
    filteredProduct = state.filteredProductByCategotry.filter(function (product) {
      return product.productName.toLowerCase().includes(action.payload.toLowerCase());
    });
  }

  return _objectSpread({}, state, {
    searchProducts: action.payload,
    filteredProduct: filteredProduct
  });
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _actions_products__WEBPACK_IMPORTED_MODULE_1__["FILTER_BY_CATEGORY"], function (state, action) {
  var filteredProduct = state.availableProducts.filter(function (product) {
    return product.productCategory.includes(action.payload);
  });
  return _objectSpread({}, state, {
    productCategory: action.payload,
    filteredProduct: filteredProduct
  });
}), _createReducer));
/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ })

})
//# sourceMappingURL=_app.js.84bd14945d7503a67160.hot-update.js.map