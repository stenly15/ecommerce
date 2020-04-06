import { ADD_TO_CART } from "../actions/cart";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    items: {}
};

const cartReducer = createReducer(initialState, {
    [ADD_TO_CART]: (state, action) => {
        const addedProduct = action.payload;
        const productId = addedProduct.productId;
        const productPrice = addedProduct.productPrice;
        const productName = addedProduct.productName;

        let updatedOrNewCartItem;

        if (state.items[productId]) {
            updatedOrNewCartItem = {
                productId,
                productName,
                productPrice,
                quantity: state.items[productId].quantity + 1
            }
        } else {
            updatedOrNewCartItem = {
                productId,
                productName,
                productPrice,
                quantity: 1
            }
        }

        return {
            ...state,
            items: { ...state.items, [productId]: updatedOrNewCartItem },
        };
    }
})

export default cartReducer;