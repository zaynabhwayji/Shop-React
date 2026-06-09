import NavBar from './components/NavBar';
import './App.css';
import './index.css';
import products from './data/products';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';

function App() {
  // Load from localStorage on first render
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage every time cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // <-- runs whenever 'cart' changes
  // ...rest of component

  const [search, setSearch] = useState(''); // search text
  const [activeCategory, setActiveCategory] = useState('all');
  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  useEffect(() => {
    document.title = `Cart (${cartCount})`;
  }, [cartCount]);

  // Add to cart function
  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      // already in cart — increase qty
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  // Filter products
  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function checkOut() {
    setCart([]);
    alert("Checkout done!");
  }
  return (
    <div>
      <div>
        <NavBar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage filtered={filtered} addToCart={addToCart} search={search} setSearch={setSearch} setActiveCategory={setActiveCategory} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} ClearCart={clearCart} CheckOut={checkOut} />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;