import { createAction } from '@reduxjs/toolkit';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export const getAllProducts = createAction(GET_ALL_PRODUCTS);