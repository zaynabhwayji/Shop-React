import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <section className="hero">
            <h1>Welcome to ShopReact : Build with React  + Router + Context</h1>
            <Link to="/shop">
                <button>Go to Shop</button>
            </Link>
        </section>
    );
}

export default HomePage;