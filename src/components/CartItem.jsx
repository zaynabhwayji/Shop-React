import { useCart } from '../context/CartContext';
function CartItem({ product}) {
    const {addToCart, removeFromCart} = useCart();
    return (
        <div className="cart-item">
            <div className="product-card">
                <span className="emoji" >{product.emoji}</span>
                <h3>{product.name}</h3>
                <p className="product-price">
                    <span>${product.price}</span>
                    <button className="add-btn" onClick={() => addToCart(product)}>+</button>
                    <span>{product.qty}</span>
                    <button className="add-btn" onClick={() => removeFromCart(product.id)}>-</button>
                </p>
                <p className="product-total">Total: ${product.price * product.qty}</p>
            </div>
        </div>
    );
}
export default CartItem;