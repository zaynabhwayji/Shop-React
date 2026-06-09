import { createContext, useContext, useState, useEffect } from 'react';
// 1. Create the context
const CartContext = createContext();

// 2. Create the Provider component (wraps your whole app)
export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const cartCount = cart.reduce(
        (total, item) => total + item.qty,
        0
    );

    useEffect(() => {
        document.title = `Cart (${cartCount})`;
    }, [cartCount]);

    function addToCart(product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    }

    function removeFromCart(id) {
        setCart(cart.filter(item => item.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    function checkout() {
        setCart([]);
        alert("Checkout done!");
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    // 3. Expose everything components need
    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, clearCart, checkout, totalItems, totalPrice, cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

// 4. Custom hook for easy access
export function useCart() {
    return useContext(CartContext);
}