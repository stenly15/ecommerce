import { createAction } from '@reduxjs/toolkit';

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

export const addToWishList = createAction(ADD_TO_WISHLIST);