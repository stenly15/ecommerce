webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/reducers/cart.js":
/*!********************************!*\
  !*** ./store/reducers/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import { ADD_TO_CART } from "../actions/cart";
// const ADD_TO_CART = createAction('ADD_TO_CART')
// const initialState = {
//     items: 0
// };
var ADD_TO_CART = 'ADD_TO_CART';
var increment = createAction(ADD_TO_CART);

var cartReducer = function cartReducer(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
}; // const cartReducer = createReducer(initialState, {
//     [ADD_TO_CART]: (state, action) => {
//         return {
//             ...state,
//             items: items + 1
//         };
//     }
// })


/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ })

})
//# sourceMappingURL=index.js.68190847707537734316.hot-update.js.map