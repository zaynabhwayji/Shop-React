import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
function CartPage() {
    const { cart, addToCart, removeFromCart, clearCart, checkout, totalItems, totalPrice } = useCart();
    return (
        <div className="cart-page">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map(item => (
                    <CartItem
                        key={item.id}
                        product={item}
                    />
                ))
            )}
            <span className="cart-total">
                Total: ${totalPrice.toFixed(2)}
            </span>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
}

export default CartPage;