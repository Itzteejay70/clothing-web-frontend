import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function Checkout() {
  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/cart" className="backLink" aria-label="Back to Cart">
          ‹
        </Link>

        <h2 className="shopTitle">Checkout</h2>

        <div className="shopHeaderDivider" />
      </div>

      <p style={{ marginTop: 18 }}>
        Checkout page (placeholder). Payment and delivery details will be added
        here.
      </p>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link className="headerLinkBtn" to="/shop">
          Continue Shopping
        </Link>

        <button className="shopBtn" style={{ maxWidth: 260 }}>
          Pay Now (Coming Soon)
        </button>
      </div>
    </div>
  );
}
