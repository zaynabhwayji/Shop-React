function ProductCard({ product , onAddToCart}) {
    return (
        <div className="product-card">
            <span className="emoji" >{product.emoji}</span>
            <h3>{product.name}</h3>
            <p className="product-price">
                <span>${product.price}</span>
                <span className="category">{product.category}</span>
                <button className="add-btn"  onClick={() => onAddToCart(product)}>+Cart</button>
                </p>
        </div>
    );
}
export default ProductCard;