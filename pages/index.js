import Layout from '../components/layout';
import Header from '../components/header';
import Search from '../components/search';
import Products from '../components/products';

const Index = () => {
    return (
        <Layout>
            <h1>Next Market</h1>
            <Header />
            {/* <Search /> */}
            <Products />
        </Layout>
    )
};

export default Index;

