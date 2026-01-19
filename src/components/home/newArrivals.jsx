import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product/productCard.jsx";
import { getNewArrivals } from "../../services/productService.js";
import "../../styles/home.css";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getNewArrivals().then(setProducts);
  }, []);

  return (
    <section className="newArrivals">
      <div className="container">
        <div className="sectionHeader">
            <h2>New Arrivals</h2>
        <div className="sectionDivider"></div>
        </div>
        <div className="productGrid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div style={{ marginTop: "18px", display: "flex", justifyContent: "center" }}>
          <Link className="ctaBtn" to="/new-arrivals">
            Shop New Drops <span style={{ marginLeft: 8 }}>›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
