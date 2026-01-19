import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product/productCard.jsx";
import { getTrendingProducts } from "../../services/productService.js";
import "../../styles/home.css";

export default function Trending() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTrendingProducts().then(setProducts);
  }, []);

  return (
    <section className="trending">
      <div className="container">
        <div className="sectionHeader">
          <h2>Trending Now</h2>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ marginTop: "18px", display: "flex", justifyContent: "left" }}>
          <Link className="tBtn" to="/trending">
            Shop Now <span style={{ marginLeft: 8 }}>›</span>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
