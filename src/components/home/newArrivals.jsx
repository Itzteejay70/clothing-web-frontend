import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard.jsx";
import { getNewArrivals } from "../../services/productService.js";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);

  // Demo products with real images
  const demoProducts = [
    {
      id: 11,
      name: "Tech Fleece Hoodie",
      price: 52000,
      image:
        "https://images.unsplash.com/photo-1620799140188-3b2a7f5a0e22?w=600",
    },
    {
      id: 12,
      name: "Utility Vest",
      price: 38000,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
    },
    {
      id: 13,
      name: "Designer Tee",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
    },
    {
      id: 14,
      name: "Puffer Jacket",
      price: 72000,
      image:
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600",
    },
    {
      id: 15,
      name: "High-Top Sneakers",
      price: 62000,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
    },
    {
      id: 16,
      name: "Sweat Shorts",
      price: 22000,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
    },
    {
      id: 17,
      name: "Coach Jacket",
      price: 45000,
      image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600",
    },
    {
      id: 18,
      name: "Bucket Hat",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600",
    },
    {
      id: 19,
      name: "Track Jacket",
      price: 48000,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600",
    },
    {
      id: 20,
      name: "Slim Fit Jeans",
      price: 35000,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    },
  ];

  useEffect(() => {
    getNewArrivals().then((data) => {
      setProducts(data.length > 0 ? data : demoProducts);
    });
  }, []);

  const allProducts = [...products, ...products];

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 whitespace-nowrap">
            New Arrivals
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Auto-Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-horizontal hover:pause-animation">
              {allProducts.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px]"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/new-arrivals"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-black text-xs uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            Shop New Drops
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
