import { createAction } from '@reduxjs/toolkit';

export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = createAction(ADD_TO_CART);