import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { getNewArrivals } from "../../services/productService.js";

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
              <div>
                <h1 className="text-2xl font-black text-gray-900">
                  New Arrivals
                </h1>
                <p className="text-xs text-gray-600 mt-0.5">
                  Check out the latest products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-medium">
                  Loading new arrivals...
                </p>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg font-medium">
                No new arrivals found.
              </p>
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
