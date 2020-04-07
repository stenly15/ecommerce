import { GET_ALL_PRODUCTS } from "../actions/products";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    availableProducts: [
        {
            productId: '1',
            productName: 'Star Wars Home Arcade Game',
            productPrice: 25000000,
            productDescription: 'This gergeous, three-quarter-sized arcade cabinet comes loaded ' +
                'with some classic Star Wars gaming titles, including A New Hope, ' +
                'The Empire Strikes Back, and Return of the Jedi.',
            productImage: 'img1.png',
            productCategory: 'Games'
        },
        {
            productId: '2',
            productName: 'Poe\'s Boosted X-Wing Fighter',
            productPrice: 15000000,
            productDescription: 'For battling womp rats and tie fighters, and because you can\'t spell \"Poe Dameron\" without \"drone.\"',
            productImage: 'img2.png',
            productCategory: 'Toys'
        },
        {
            productId: '3',
            productName: 'Star Wars\' Phone Cases',
            productPrice: 2500000,
            productDescription: 'If you want to show your love for the movie every day.',
            productImage: 'img3.png',
            productCategory: 'Accecories'
        }
    ]
};

const productReducer = createReducer(initialState, {
    [GET_ALL_PRODUCTS]: state => {
        return {
            ...state
        };
    }
})

export default productReducer;