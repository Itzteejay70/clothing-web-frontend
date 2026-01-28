import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBrands } from "../../services/brandService.js";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getAllBrands()
      .then((res) => setBrands(res?.data || res))
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
                <h1 className="text-2xl font-black text-gray-900">Brands</h1>
                <p className="text-xs text-gray-600 mt-0.5">
                  Discover your favorite sneaker brands
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
                <p className="text-gray-600 font-medium">Loading brands...</p>
              </div>
            </div>
          ) : brands.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No brands available</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {brands.map((b, index) => (
                <Link
                  key={b.id}
                  to={`/brands/${b.id}`}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-green-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="aspect-square flex items-center justify-center">
                    <img
                      src={b.logo}
                      alt={b.name || b.id}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) =>
                        (e.currentTarget.src = "/images/fallback.png")
                      }
                    />
                  </div>
                  {b.name && (
                    <p className="text-center mt-4 font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors duration-300">
                      {b.name}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
