import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function OrderSuccess() {
  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/" className="backLink" aria-label="Back to Home">
          ‹
        </Link>
        <h2 className="shopTitle">Order Confirmed</h2>
        <div className="shopHeaderDivider" />
      </div>

      <p style={{ marginTop: 18 }}>
        Your order has been placed successfully. We’ll contact you with delivery updates.
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link className="ctaBtn" to="/shop">
          Continue Shopping ›
        </Link>
      </div>
    </div>
  );
}
