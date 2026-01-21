import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { getNewArrivals } from "../../services/productService.js";
import "../../styles/home.css";

export default function NewArrivalsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getNewArrivals()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/" className="backLink" aria-label="Back to Home">
          ‹
        </Link>
        <h2 className="shopTitle">New Arrivals</h2>
        <div className="shopHeaderDivider" />
      </div>

      {loading ? (
        <p>Loading new arrivals...</p>
      ) : products.length === 0 ? (
        <p>No new arrivals found.</p>
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
