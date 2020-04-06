import { useSelector } from 'react-redux';
import ProductItem from '../components/productitem';

const Products = () => {
    const products = useSelector(state => state.products.availableProducts);
    const cart = useSelector(state => state.cart.items);
    console.log(cart);
    return (
        <div>
            {
                products.map(item => <ProductItem
                    key={item.productId}
                    id={item.productId}
                    image={item.productImage}
                    name={item.productName}
                    price={item.productPrice}
                    description={item.productDescription}
                />)
            }
        </div>

    )
}

export default Products;