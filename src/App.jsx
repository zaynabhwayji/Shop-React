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
import { useCart } from './context/CartContext';

function App() {

  const [search, setSearch] = useState(''); // search text
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter products
  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <div>
        <NavBar onCartClick={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage filtered={filtered} search={search} setSearch={setSearch} setActiveCategory={setActiveCategory} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;