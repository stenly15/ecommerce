
const Products = ({ image, name, price, description }) => {
    return (
        <div>
            <img src={image} />
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>{description}</p>
            <button>Add To Wishlist</button>
            <button>View</button>
            <button>Add To Cart</button>
        </div>
    )
}

export default Products;