import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/cart">
            <a style={linkStyle}>Cart</a>
        </Link>
        <Link href="/wishlist">
            <a style={linkStyle}>Wishlist</a>
        </Link>
    </div>
);

export default Header;