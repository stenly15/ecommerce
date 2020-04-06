import { useSelector } from 'react-redux';
import ProductItem from './productItem';

const Products = () => {
    const products = useSelector(state => state.products.availableProducts);

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