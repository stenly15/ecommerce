module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_reducers_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/cart */ "./store/reducers/cart.js");
/* harmony import */ var _store_reducers_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/products */ "./store/reducers/products.js");
/* harmony import */ var _store_reducers_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducers/wishlist */ "./store/reducers/wishlist.js");
var _jsxFileName = "/Users/mayrra/Workspace/hctive/ecommerce/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import App from 'next/app';






const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  cart: _store_reducers_cart__WEBPACK_IMPORTED_MODULE_3__["default"],
  products: _store_reducers_products__WEBPACK_IMPORTED_MODULE_4__["default"],
  wishlist: _store_reducers_wishlist__WEBPACK_IMPORTED_MODULE_5__["default"]
});
const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["configureStore"])({
  reducer: rootReducer
});
function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })));
}

/***/ }),

/***/ "./store/actions/cart.js":
/*!*******************************!*\
  !*** ./store/actions/cart.js ***!
  \*******************************/
/*! exports provided: ADD_TO_CART, REMOVE_FROM_CART, addToCart, removeFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART", function() { return REMOVE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const addToCart = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_CART);
const removeFromCart = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REMOVE_FROM_CART);

/***/ }),

/***/ "./store/actions/products.js":
/*!***********************************!*\
  !*** ./store/actions/products.js ***!
  \***********************************/
/*! exports provided: GET_ALL_PRODUCTS, getAllProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_PRODUCTS", function() { return GET_ALL_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return getAllProducts; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const getAllProducts = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_ALL_PRODUCTS);

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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const addToWishList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_WISHLIST);

/***/ }),

/***/ "./store/reducers/cart.js":
/*!********************************!*\
  !*** ./store/reducers/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  items: {},
  totalAmount: 0
};
const cartReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, {
  [_actions_cart__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"]]: (state, action) => {
    const {
      productId,
      productName,
      productPrice,
      productDescription,
      productImage,
      productCategory
    } = action.payload;
    let updatedOrNewCartItem;

    if (state.items[productId]) {
      updatedOrNewCartItem = {
        productId,
        productName,
        productPrice,
        productDescription,
        productImage,
        productCategory,
        quantity: state.items[productId].quantity + 1,
        sum: state.items[productId].sum + productPrice
      };
    } else {
      updatedOrNewCartItem = {
        productId,
        productName,
        productPrice,
        productDescription,
        productImage,
        productCategory,
        quantity: 1,
        sum: productPrice
      };
    }

    return _objectSpread({}, state, {
      items: _objectSpread({}, state.items, {
        [productId]: updatedOrNewCartItem
      }),
      totalAmount: state.totalAmount + productPrice
    });
  },
  [_actions_cart__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FROM_CART"]]: (state, action) => {
    const {
      productId,
      productName,
      productPrice,
      productDescription,
      productImage,
      productCategory,
      quantity
    } = state.items[action.payload];
    let updatedCartItems;

    if (quantity > 1) {
      //need to reduce, not erase it
      updatedCartItems = {
        productId,
        productName,
        productPrice,
        productDescription,
        productImage,
        productCategory,
        quantity: state.items[productId].quantity - 1,
        sum: state.items[productId].sum - productPrice
      };
      updatedCartItems = _objectSpread({}, state.items, {
        [action.payload]: updatedCartItems
      });
    } else {
      updatedCartItems = _objectSpread({}, state.items);
      delete updatedCartItems[action.payload];
    }

    return _objectSpread({}, state, {
      items: updatedCartItems,
      totalAmount: state.totalAmount - productPrice
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./store/reducers/products.js":
/*!************************************!*\
  !*** ./store/reducers/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/products */ "./store/actions/products.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
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
  }]
};
const productReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, {
  [_actions_products__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_PRODUCTS"]]: state => {
    return _objectSpread({}, state);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./store/reducers/wishlist.js":
/*!************************************!*\
  !*** ./store/reducers/wishlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/wishlist */ "./store/actions/wishlist.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  items: {}
};
const wishlistReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, {
  [_actions_wishlist__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_WISHLIST"]]: (state, action) => {
    const {
      productId,
      productName,
      productPrice,
      productDescription,
      productImage,
      productCategory
    } = action.payload;
    let wishListItem = {
      productId,
      productName,
      productPrice,
      productDescription,
      productImage,
      productCategory
    };
    return _objectSpread({}, state, {
      items: _objectSpread({}, state.items, {
        [productId]: wishListItem
      })
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (wishlistReducer);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map