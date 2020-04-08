import { createAction } from '@reduxjs/toolkit';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export const getAllProducts = createAction(GET_ALL_PRODUCTS);
export const searchProducts = createAction(SEARCH_PRODUCTS);