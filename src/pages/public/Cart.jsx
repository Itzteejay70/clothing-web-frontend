import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/home.css";

export default function Cart() {
  const { items, subtotal, increment, decrement, removeFromCart } = useCart();

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/shop" className="backLink" aria-label="Back to Shop">
          ‹
        </Link>
        <h2 className="shopTitle">Cart</h2>
        <div className="shopHeaderDivider" />
      </div>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cartList">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="cartItem">
                <img src={product.image} alt={product.name} />
                <div className="cartInfo">
                  <h4>{product.name}</h4>
                  <p>₦{product.price.toLocaleString()}</p>

                  <div className="qtyRow">
                    <button onClick={() => decrement(product.id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => increment(product.id)}>+</button>
                  </div>

                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cartSummary">
            <div className="summaryRow">
              <span>Subtotal</span>
              <strong>₦{subtotal.toLocaleString()}</strong>
            </div>

            <Link to="/checkout" className="ctaBtn">
              Proceed to Checkout ›
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
