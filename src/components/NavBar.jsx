import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
function NavBar({ onCartClick }) {
    const { totalItems } = useCart();
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="logo" onClick={() => setOpen(!open)}>■ ShopReact</div>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Link to="/cart" onClick={() => onCartClick(true)}>
                <button className="cart-btn">
                    ■ Cart ({totalItems})
                </button>
            </Link>
        </nav>
    );
}
export default NavBar;

