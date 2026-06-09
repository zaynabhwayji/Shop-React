import { Link } from 'react-router-dom';
function NavBar({ cartCount, onCartClick }) {
    return (
        <nav className="navbar">
            <div className="logo">■ ShopReact</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="nav-links">
            </div>
            <Link to="/cart"  onClick={() => onCartClick(true)}>
                <button className="cart-btn">
                    ■ Cart ({cartCount})
                </button>
            </Link>
        </nav>
    );
}
export default NavBar;

