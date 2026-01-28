import { useEffect, useState } from "react";
import { HiCheck, HiX, HiEye } from "react-icons/hi";

export default function ApproveProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // TODO: Fetch pending products from your API
    setLoading(true);
    // Mock data for now
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Nike Air Max 270",
          brand: "Nike",
          price: 45000,
          category: "sneakers",
          image: "/images/nike.jpeg",
          vendor: "Sneaker Palace",
          submittedAt: "2024-01-20",
          status: "pending",
        },
        {
          id: 2,
          name: "Adidas Ultraboost",
          brand: "Adidas",
          price: 52000,
          category: "sneakers",
          image: "/images/nike.jpeg",
          vendor: "Kicks Store",
          submittedAt: "2024-01-19",
          status: "pending",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleApprove = (productId) => {
    // TODO: Call API to approve product
    console.log("Approving product:", productId);
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleReject = (productId) => {
    // TODO: Call API to reject product
    console.log("Rejecting product:", productId);
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900">Approve Products</h1>
        <p className="text-gray-600 mt-1">
          Review and approve products submitted by vendors
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading products...</p>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-lg font-medium">
            No pending products to review
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-xl border border-gray-200"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-gray-900 text-lg mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Brand: <span className="font-bold">{product.brand}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Vendor: <span className="font-bold">{product.vendor}</span>
                  </p>
                  <p className="text-green-700 font-black text-xl mt-2">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">
                    Submitted: {product.submittedAt}
                  </span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold rounded-full">
                    Pending Review
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-all duration-300"
                  >
                    <HiEye className="w-4 h-4" />
                    View Details
                  </button>
                  <button
                    onClick={() => handleApprove(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300"
                  >
                    <HiCheck className="w-4 h-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300"
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">
                Product Details
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                <HiX className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-xl border border-gray-200 mb-6"
            />

            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-gray-500 mb-1">
                  Product Name
                </p>
                <p className="text-lg font-black text-gray-900">
                  {selectedProduct.name}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 mb-1">Brand</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedProduct.brand}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 mb-1">Price</p>
                <p className="text-2xl font-black text-green-700">
                  ₦{selectedProduct.price.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 mb-1">Category</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedProduct.category}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 mb-1">Vendor</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedProduct.vendor}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 mb-1">
                  Submitted Date
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedProduct.submittedAt}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  handleApprove(selectedProduct.id);
                  setSelectedProduct(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300"
              >
                <HiCheck className="w-5 h-5" />
                Approve Product
              </button>
              <button
                onClick={() => {
                  handleReject(selectedProduct.id);
                  setSelectedProduct(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300"
              >
                <HiX className="w-5 h-5" />
                Reject Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
