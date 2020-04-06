webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/products.js":
/*!********************************!*\
  !*** ./components/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_productitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/productitem */ "./components/productitem.js");



var Products = function Products(_ref) {
  var id = _ref.id,
      image = _ref.image,
      name = _ref.name,
      price = _ref.price,
      description = _ref.description;
  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.products.availableProducts;
  });
  console.log(products); // return (
  //     {
  //         products.map(item => <ProductItem
  //             key={item.productId}
  //             image={item.productImage}
  //             name={item.productName}
  //             price={item.productPrice}
  //             description={item.productDescription}
  //         />)
  //     }
  // )
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=index.js.aea245c25f560284936d.hot-update.js.map