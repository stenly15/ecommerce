import App from 'next/app';
import React from "react";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import cartReducer from '../store/reducers/cart';
import productReducer from '../store/reducers/products';
import wishListReducer from '../store/reducers/wishlist';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    wishlist: wishListReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store} >
            <Component {...pageProps} />
        </Provider>
    )
}