import Layout from '../components/layout';
import Header from '../components/header';
import Search from '../components/search';
import Products from '../components/products';


const Index = () => {
    const products = [
        {
            productName: 'Star Wars Home Arcade Game',
            productPrice: 'Rp. 6749865',
            productDescription: 'This gergeous, three-quarter-sized arcade cabinet comes loaded ' +
                'with some classic Star Wars gaming titles, including A New Hope, ' +
                'The Empire Strikes Back, and Return of the Jedi.',
            productImage: 'img1.png'
        },
        {
            productName: 'Poe\'s Boosted X-Wing Fighter',
            productPrice: 'Rp. 6749865',
            productDescription: 'For battling womp rats and tie fighters, and because you can\'t spell \"Poe Dameron\" without \"drone.\"',
            productImage: 'img2.png'
        },
        {
            productName: 'Star Wars\' Phone Cases',
            productPrice: 'Rp. 6749865',
            productDescription: 'If you want to show your love for the movie every day.',
            productImage: 'img3.png'
        },
    ]


    return (
        <Layout>
            <h1>Next Market</h1>
            <Header />
            <Search />

            {products.map(item => <Products
                image={item.productImage}
                name={item.productName}
                price={item.productPrice}
                description={item.productDescription}
            />)}
        </Layout>
    )
};


export default Index;