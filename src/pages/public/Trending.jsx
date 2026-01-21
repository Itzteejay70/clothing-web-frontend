import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { getTrendingProducts } from "../../services/productService.js";
import "../../styles/home.css";

export default function TrendingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTrendingProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/" className="backLink" aria-label="Back to Home">
          ‹
        </Link>
        <h2 className="shopTitle">Trending</h2>
        <div className="shopHeaderDivider" />
      </div>

      {loading ? (
        <p>Loading trending products...</p>
      ) : products.length === 0 ? (
        <p>No trending products found.</p>
      ) : (
        <div className="productGrid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
