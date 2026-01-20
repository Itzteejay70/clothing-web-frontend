import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { getAllProducts, getProductsByCategory } from "../../services/productService.js";
import "../../styles/home.css";

const categoryLabels = {
  tshirts: "T-Shirts",
  hoodies: "Hoodies",
  jackets: "Jackets",
  pants: "Pants",
  sneakers: "Sneakers",
  caps: "Caps",
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchFn = category ? getProductsByCategory : getAllProducts;

    fetchFn(category)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [category]);

  function clearFilter() {
    searchParams.delete("category");
    setSearchParams(searchParams);
  }

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="sectionHeaderRow">
        <h2 className="sectionTitle" style={{ margin: 0 }}>
          Shop{category ? ` — ${categoryLabels[category] || category}` : ""}
        </h2>

        <div className="sectionDivider" />

        {category ? (
          <button className="linkBtn" onClick={clearFilter}>
            Clear Filter
          </button>
        ) : (
          <Link className="linkBtn" to="/">
            Back Home
          </Link>
        )}
      </div>

      {loading ? (
        <p style={{ padding: "12px 0" }}>Loading products...</p>
      ) : products.length === 0 ? (
        <p style={{ padding: "12px 0" }}>
          No products found{category ? ` for "${category}"` : ""}.
        </p>
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
