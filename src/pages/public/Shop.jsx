import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { getAllProducts } from "../../services/productService.js";

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
  const [sort, setSort] = useState("featured");

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

    if (category) list = list.filter((p) => p.category === category);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [all, category, query, sort]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Back to Home"
              >
                <span className="text-2xl text-gray-700">‹</span>
              </Link>
              <div className="flex-1">
                <h1 className="text-2xl font-black text-gray-900">
                  Shop
                  {category && (
                    <span className="text-green-700">
                      {" "}
                      — {categoryLabels[category] || category}
                    </span>
                  )}
                </h1>
                <p className="text-xs text-gray-600 mt-0.5">
                  {products.length}{" "}
                  {products.length === 1 ? "product" : "products"} available
                </p>
              </div>
              {category && (
                <button
                  onClick={clearFilter}
                  className="px-4 py-2 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 text-sm font-medium"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <select
                className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 text-sm font-bold text-gray-700 cursor-pointer"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A - Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-medium">Loading products...</p>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg font-medium">
                No products found.
              </p>
              {(query || category) && (
                <button
                  onClick={() => {
                    setQuery("");
                    clearFilter();
                  }}
                  className="mt-4 px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((p, index) => (
                <div
                  key={p.id}
                  className="animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
