import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const fallback = "https://via.placeholder.com/600x800?text=Product+Image";

  return (
    <Link
      to={`/product/${product.id}`}
      className="productCardLink"
      style={{ textDecoration: "none" }}
    >
      <div className="productCard">
        <div className="productImage">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = fallback;
            }}
          />
        </div>

        <div className="productInfo">
          <h4>{product.name}</h4>
          <p className="price">₦{product.price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}
