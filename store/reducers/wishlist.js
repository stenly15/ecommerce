import { ADD_TO_WISHLIST } from "../actions/wishlist";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    items: {}
};

const wishlistReducer = createReducer(initialState, {
    [ADD_TO_WISHLIST]: (state, action) => {
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
        }

        return {
            ...state,
            items: { ...state.items, [productId]: wishListItem },
        };
    }
})

export default wishlistReducer;