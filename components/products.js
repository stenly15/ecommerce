import { useSelector, useDispatch, usee } from 'react-redux';
import ProductItem from './product-item';

import * as productActions from '../store/actions/products';


const Products = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.availableProducts);
    const searchProducts = useSelector(state => state.products.searchProducts);
    const productCategory = useSelector(state => state.products.productCategory);

    const filteredProduct = products.filter(product => product.productName.toLowerCase().includes(searchProducts.toLowerCase()));

    return (
        <div>
            <div style={{ flex: 1, margin: 20 }}>
                <input
                    type='search'
                    placeholder="Cari aja dulu..."
                    onChange={e => {
                        dispatch(productActions.searchProducts(e.target.value))
                    }}
                />
                <> Filter by Category: </>
                <select onChange={() => { }}>
                    <option value="All">All</option>
                    <option value="Games">Games</option>
                    <option value="Toys">Toys</option>
                    <option value="Accecories">Accecories</option>
                </select>
            </div>
            {
                filteredProduct.map(item => <ProductItem
                    key={item.productId}
                    id={item.productId}
                    image={item.productImage}
                    name={item.productName}
                    price={item.productPrice}
                    description={item.productDescription}
                    category={item.productCategory}
                />)
            }
        </div>

    )
}

export default Products;