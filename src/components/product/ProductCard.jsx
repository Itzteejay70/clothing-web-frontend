export default function ProductCard({ product }) {
  const fallback =
    "https://via.placeholder.com/600x800?text=Product+Image";

  return (
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
  );
}
