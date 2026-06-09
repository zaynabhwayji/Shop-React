import CartItem from '../components/CartItem';

function CartPage({ cart, onAddToCart, onRemoveFromCart, ClearCart, CheckOut }) {
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
                        onAddToCart={onAddToCart}
                        onRemoveFromCart={onRemoveFromCart}
                    />
                ))
            )}
            <span className="cart-total">
                Total: ${cart.reduce((total, item) => total + item.price * item.qty, 0)}
            </span>
            <button onClick={ClearCart}>Clear Cart</button>
            <button onClick={CheckOut}>Checkout</button>
        </div>
    );
}

export default CartPage;