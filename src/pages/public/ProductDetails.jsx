import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../services/productService.js";
import { useCart } from "../../context/CartContext";

import "../../styles/home.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fallback = "https://via.placeholder.com/800x900?text=Product+Image";

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      {/* Header */}
      <div className="shopHeaderRow">
        <Link to="/shop" className="backLink" aria-label="Back to Shop">
          ‹
        </Link>
        <h2 className="shopTitle">Product Details</h2>
        <div className="shopHeaderDivider" />
      </div>

      {loading ? (
        <p>Loading product...</p>
      ) : !product ? (
        <p>Product not found.</p>
      ) : (
        <div className="productDetailsGrid">
          <div className="productDetailsImage">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => (e.currentTarget.src = fallback)}
            />
          </div>

          <div className="productDetailsInfo">
            <h1 className="productDetailsTitle">{product.name}</h1>
            <p className="productDetailsPrice">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="productDetailsDesc">
              {product.description || "Product description will appear here."}
            </p>

            <button className="shopBtn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
