import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/productService.js";
import {
  FaTshirt,
  FaShoePrints,
  FaHatCowboy,
  FaUserTie,
  FaGem,
  FaBriefcase,
  FaRunning,
  FaUmbrella,
} from "react-icons/fa";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  // Icon mapping for categories
  const categoryIcons = {
    Tops: <FaTshirt className="w-5 h-5" />,
    Bottoms: <FaUserTie className="w-5 h-5" />,
    Footwear: <FaShoePrints className="w-5 h-5" />,
    Sneakers: <FaShoePrints className="w-5 h-5" />,
    Shoes: <FaShoePrints className="w-5 h-5" />,
    Accessories: <FaGem className="w-5 h-5" />,
    Headwear: <FaHatCowboy className="w-5 h-5" />,
    Bags: <FaBriefcase className="w-5 h-5" />,
    Sportswear: <FaRunning className="w-5 h-5" />,
    Outerwear: <FaUmbrella className="w-5 h-5" />,
  };

  // Get icon for category, default to FaTshirt if not found
  const getCategoryIcon = (categoryName) => {
    return categoryIcons[categoryName] || <FaTshirt className="w-5 h-5" />;
  };

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 whitespace-nowrap">
            Shop by Category
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.category}`}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Category";
                  }}
                />
              </div>

              {/* Label */}
              <div className="flex items-center gap-2 p-4 bg-white border-t border-gray-50">
                <span className="text-green-600 group-hover:text-green-700 transition-colors">
                  {getCategoryIcon(category.name)}
                </span>
                <span className="font-black text-sm text-gray-900 group-hover:text-green-700 transition-colors">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
