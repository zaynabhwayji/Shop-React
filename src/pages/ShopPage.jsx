import ProductCard from '../components/ProductCard';

function ShopPage({ filtered, search, setSearch, setActiveCategory }) {
    return (
        <>
            <div className="filters">
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="■ Search..." />
                <div className="categories">
                    <button onClick={() => setActiveCategory('all')}>All</button>
                    <button onClick={() => setActiveCategory('Clothes')}>Clothes</button>
                    <button onClick={() => setActiveCategory('Electronics')}>Electronics</button>
                    <button onClick={() => setActiveCategory('Books')}>Books</button>
                </div>
            </div>
            <div className="product-grid">
                {filtered.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}/>
                ))}
            </div>
        </>
    );
}
export default ShopPage;