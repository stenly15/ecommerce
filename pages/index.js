import React from "react";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import Layout from '../components/layout';
import Header from '../components/header';
import Search from '../components/search';
import Products from '../components/products';

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

const Index = () => {
    return (
        <Provider store={store}>
            <Layout>
                <h1>Next Market</h1>
                <Header />
                <Search />
                <Products />
            </Layout>
        </Provider>

    )
};

export default Index;