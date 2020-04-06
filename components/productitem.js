import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from "../store/actions/cart";
import * as wishListActions from '../store/actions/wishlist';

const ProductItem = ({ id, image, name, price, description }) => {

    const product = useSelector(state => state.products.availableProducts);

    const dispatch = useDispatch();

    return (
        <div>
            {/* <img src={image} /> */}
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>{description}</p>
            <button onClick={() => { dispatch(wishListActions.addToWishList(product[id - 1])) }}>Add To Wishlist</button>
            <button>View</button>
            <button onClick={() => { dispatch(cartActions.addToCart(product[id - 1])) }}>Add To Cart</button>
        </div>
    )
}

export default ProductItem;