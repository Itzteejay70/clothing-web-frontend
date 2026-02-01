import { useEffect, useState } from "react";
import {
  HiCheck,
  HiX,
  HiEye,
  HiSearch,
  HiFilter,
  HiChevronDown,
  HiShoppingBag,
  HiClock,
  HiCheckCircle,
  HiExclamation,
} from "react-icons/hi";

export default function ApproveProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("pending");

  useEffect(() => {
    setLoading(true);
    // Mock data with real images
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Nike Air Max 270",
          brand: "Nike",
          price: 45000,
          category: "sneakers",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
          vendor: "Sneaker Palace",
          vendorEmail: "sneakerpalace@example.com",
          submittedAt: "2024-01-20",
          status: "pending",
          description:
            "The Nike Air Max 270 features a breathable mesh upper with vibrant colors and exceptional cushioning.",
          stock: 45,
          sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
        },
        {
          id: 2,
          name: "Adidas Ultraboost 21",
          brand: "Adidas",
          price: 52000,
          category: "sneakers",
          image:
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
          vendor: "Kicks Store",
          vendorEmail: "kicksstore@example.com",
          submittedAt: "2024-01-19",
          status: "pending",
          description:
            "Experience energy return with every step in the Adidas Ultraboost 21.",
          stock: 32,
          sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        },
        {
          id: 3,
          name: "Premium Leather Jacket",
          brand: "Zara",
          price: 89000,
          category: "jackets",
          image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
          vendor: "Fashion Hub",
          vendorEmail: "fashionhub@example.com",
          submittedAt: "2024-01-18",
          status: "pending",
          description:
            "Genuine leather jacket with modern slim fit design and premium quality.",
          stock: 15,
          sizes: ["S", "M", "L", "XL"],
        },
        {
          id: 4,
          name: "Classic Hoodie",
          brand: "Champion",
          price: 25000,
          category: "hoodies",
          image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
          vendor: "Street Wear Co",
          vendorEmail: "streetwear@example.com",
          submittedAt: "2024-01-17",
          status: "pending",
          description:
            "Comfortable cotton blend hoodie perfect for casual wear.",
          stock: 67,
          sizes: ["S", "M", "L", "XL", "XXL"],
        },
        {
          id: 5,
          name: "Plain White Tee",
          brand: "H&M",
          price: 8000,
          category: "plainTee",
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
          vendor: "Basic Essentials",
          vendorEmail: "basics@example.com",
          submittedAt: "2024-01-16",
          status: "pending",
          description:
            "Essential plain white t-shirt made from premium cotton.",
          stock: 120,
          sizes: ["S", "M", "L", "XL"],
        },
        {
          id: 6,
          name: "Puma RS-X",
          brand: "Puma",
          price: 38000,
          category: "sneakers",
          image:
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
          vendor: "Sneaker Palace",
          vendorEmail: "sneakerpalace@example.com",
          submittedAt: "2024-01-15",
          status: "pending",
          description:
            "Bold and colorful running-inspired sneaker with retro vibes.",
          stock: 28,
          sizes: ["UK 7", "UK 8", "UK 9"],
        },
        {
          id: 7,
          name: "Denim Jacket",
          brand: "Levi's",
          price: 65000,
          category: "jackets",
          image:
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80",
          vendor: "Fashion Hub",
          vendorEmail: "fashionhub@example.com",
          submittedAt: "2024-01-14",
          status: "pending",
          description: "Classic denim jacket with modern fit and vintage wash.",
          stock: 40,
          sizes: ["S", "M", "L", "XL"],
        },
        {
          id: 8,
          name: "Oversized Hoodie",
          brand: "Off-White",
          price: 75000,
          category: "hoodies",
          image:
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80",
          vendor: "Premium Streetwear",
          vendorEmail: "premium@example.com",
          submittedAt: "2024-01-13",
          status: "pending",
          description: "Trendy oversized hoodie with signature branding.",
          stock: 22,
          sizes: ["M", "L", "XL"],
        },
        {
          id: 9,
          name: "Graphic Tee",
          brand: "Supreme",
          price: 35000,
          category: "plainTee",
          image:
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80",
          vendor: "Street Wear Co",
          vendorEmail: "streetwear@example.com",
          submittedAt: "2024-01-12",
          status: "pending",
          description: "Limited edition graphic tee with bold print design.",
          stock: 55,
          sizes: ["S", "M", "L", "XL"],
        },
        {
          id: 10,
          name: "New Balance 574",
          brand: "New Balance",
          price: 42000,
          category: "sneakers",
          image:
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
          vendor: "Kicks Store",
          vendorEmail: "kicksstore@example.com",
          submittedAt: "2024-01-11",
          status: "pending",
          description: "Classic retro runner with suede and mesh construction.",
          stock: 38,
          sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleApprove = (productId) => {
    console.log("Approving product:", productId);
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleReject = (productId) => {
    console.log("Rejecting product:", productId);
    setProducts(products.filter((p) => p.id !== productId));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category === filterCategory;
    const matchesStatus =
      filterStatus === "all" || product.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "sneakers", label: "Sneakers" },
    { value: "hoodies", label: "Hoodies" },
    { value: "jackets", label: "Jackets" },
    { value: "plainTee", label: "T-Shirts" },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "sneakers":
        return "👟";
      case "hoodies":
        return "🧥";
      case "jackets":
        return "🧥";
      case "plainTee":
        return "👕";
      default:
        return "📦";
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
            <HiShoppingBag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Approve Products
            </h1>
            <p className="text-gray-600 font-medium">
              Review and manage product submissions from vendors
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
              <HiClock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Pending Review</p>
              <p className="text-2xl font-black text-gray-900">
                {products.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
              <HiCheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Approved Today</p>
              <p className="text-2xl font-black text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
              <HiExclamation className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Total Value</p>
              <p className="text-2xl font-black text-gray-900">
                ₦
                {(products.reduce((sum, p) => sum + p.price, 0) / 1000).toFixed(
                  0,
                )}
                k
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, brands, vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none font-medium"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <HiFilter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none font-bold text-gray-700 bg-white appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none font-bold text-gray-700 bg-white appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm font-bold text-gray-600">
            Showing{" "}
            <span className="text-green-600">{filteredProducts.length}</span> of{" "}
            {products.length} products
          </p>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading products...</p>
          </div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiShoppingBag className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-900 text-xl font-black mb-2">
            No products found
          </p>
          <p className="text-gray-500 font-medium">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 group animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-black rounded-full shadow-md">
                    {getCategoryIcon(product.category)} {product.category}
                  </span>
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-black rounded-full shadow-md flex items-center gap-1">
                    <HiClock className="w-3 h-3" />
                    Pending
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <p className="text-xs font-bold text-gray-600">
                    Stock:{" "}
                    <span className="text-green-600 font-black">
                      {product.stock}
                    </span>
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-black text-gray-900 text-lg mb-1 truncate group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    by{" "}
                    <span className="font-bold text-gray-900">
                      {product.brand}
                    </span>
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 font-bold mb-0.5">
                      Vendor
                    </p>
                    <p className="text-sm font-black text-gray-900">
                      {product.vendor}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold mb-0.5">
                      Price
                    </p>
                    <p className="text-xl font-black text-green-600">
                      ₦{(product.price / 1000).toFixed(0)}k
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-bold mb-1">
                    Available Sizes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((size, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-md"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-medium">
                    Submitted:{" "}
                    {new Date(product.submittedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-all duration-300 text-sm"
                  >
                    <HiEye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => handleApprove(product.id)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    <HiCheck className="w-4 h-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(product.id)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    <HiX className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Product Details
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Review complete product information
                </p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                <HiX className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Product Image */}
              <div className="relative h-80 rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-orange-500 text-white text-sm font-black rounded-full shadow-lg flex items-center gap-2">
                    <HiClock className="w-4 h-4" />
                    Pending Review
                  </span>
                </div>
              </div>

              {/* Product Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 mb-2">
                    PRODUCT NAME
                  </p>
                  <p className="text-lg font-black text-gray-900">
                    {selectedProduct.name}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 mb-2">BRAND</p>
                  <p className="text-lg font-black text-gray-900">
                    {selectedProduct.brand}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <p className="text-xs font-bold text-green-700 mb-2">PRICE</p>
                  <p className="text-2xl font-black text-green-700">
                    ₦{selectedProduct.price.toLocaleString()}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 mb-2">
                    CATEGORY
                  </p>
                  <p className="text-lg font-black text-gray-900 capitalize">
                    {selectedProduct.category}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 mb-2">VENDOR</p>
                  <p className="text-lg font-black text-gray-900">
                    {selectedProduct.vendor}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedProduct.vendorEmail}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 mb-2">
                    STOCK AVAILABLE
                  </p>
                  <p className="text-lg font-black text-gray-900">
                    {selectedProduct.stock} units
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-blue-50 rounded-xl p-5 mb-6 border border-blue-200">
                <p className="text-xs font-bold text-blue-700 mb-2">
                  DESCRIPTION
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Available Sizes */}
              <div className="mb-6">
                <p className="text-xs font-bold text-gray-500 mb-3">
                  AVAILABLE SIZES
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Submission Details */}
              <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
                <p className="text-xs font-bold text-purple-700 mb-2">
                  SUBMISSION DETAILS
                </p>
                <p className="text-sm text-gray-700">
                  Submitted on{" "}
                  {new Date(selectedProduct.submittedAt).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    handleApprove(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  <HiCheckCircle className="w-6 h-6" />
                  Approve Product
                </button>
                <button
                  onClick={() => {
                    handleReject(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  <HiX className="w-6 h-6" />
                  Reject Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
