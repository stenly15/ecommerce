import { ADD_TO_WISHLIST } from "../actions/wishlist";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    items: {}
};

const wishlistReducer = createReducer(initialState, {
    [ADD_TO_WISHLIST]: (state, action) => {
        const addedProduct = action.payload;
        const productId = addedProduct.productId;
        const productPrice = addedProduct.productPrice;
        const productName = addedProduct.productName;

        let wishListItem = {
            productId,
            productName,
            productPrice
        }

        return {
            ...state,
            items: { ...state.items, [productId]: wishListItem },
        };
    }
})

export default wishlistReducer;