import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { getAllProducts } from "../../services/productService.js";
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

  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured"); // featured | price-asc | price-desc | name-asc

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then(setAll)
      .finally(() => setLoading(false));
  }, []);

  function clearFilter() {
    searchParams.delete("category");
    setSearchParams(searchParams);
  }

  const products = useMemo(() => {
    let list = [...all];

    // filter by category
    if (category) list = list.filter((p) => p.category === category);

    // search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    // sort
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [all, category, query, sort]);

  return (
    <div className="container" style={{ padding: "28px 0" }}>
     <div className="shopHeaderRow">
  <Link to="/" className="backLink" aria-label="Back to Home">
    ←
  </Link>

  <h2 className="shopTitle">
    Shop{category ? ` — ${categoryLabels[category] || category}` : ""}
  </h2>

  <div className="shopHeaderDivider" />
</div>


      {/* Controls */}
      <div className="shopControls">
        <input
          className="shopSearch"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select className="shopSelect" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A - Z</option>
        </select>
      </div>

      {loading ? (
        <p style={{ padding: "12px 0" }}>Loading products...</p>
      ) : products.length === 0 ? (
        <p style={{ padding: "12px 0" }}>No products found.</p>
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
