import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/home.css";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    notes: "",
  });

  const [placing, setPlacing] = useState(false);

  const shippingFee = useMemo(() => {
    // simple flat fee MVP
    return items.length > 0 ? 2000 : 0;
  }, [items.length]);

  const total = useMemo(() => subtotal + shippingFee, [subtotal, shippingFee]);

  function updateField(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.fullName.trim()) return "Full name is required.";
    if (!form.phone.trim()) return "Phone number is required.";
    if (!form.address.trim()) return "Delivery address is required.";
    if (!form.city.trim()) return "City is required.";
    if (!form.state.trim()) return "State is required.";
    return null;
  }

  async function handlePlaceOrder(e) {
    e.preventDefault();
    if (items.length === 0) return;

    const err = validate();
    if (err) {
      alert(err);
      return;
    }

    setPlacing(true);

    // MVP: simulate processing
    setTimeout(() => {
      clearCart();
      setPlacing(false);
      navigate("/order-success");
    }, 800);
  }

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: "28px 0" }}>
        <div className="shopHeaderRow">
          <Link to="/cart" className="backLink" aria-label="Back to Cart">
            ‹
          </Link>
          <h2 className="shopTitle">Checkout</h2>
          <div className="shopHeaderDivider" />
        </div>

        <p style={{ marginTop: 18 }}>Your cart is empty. Add items before checkout.</p>
        <Link className="ctaBtn" to="/shop">
          Go to Shop ›
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/cart" className="backLink" aria-label="Back to Cart">
          ‹
        </Link>
        <h2 className="shopTitle">Checkout</h2>
        <div className="shopHeaderDivider" />
      </div>

      <div className="checkoutGrid">
        {/* Form */}
        <form className="checkoutForm" onSubmit={handlePlaceOrder}>
          <h3 className="checkoutSectionTitle">Delivery Details</h3>

          <div className="formGrid">
            <div className="field">
              <label>Full Name</label>
              <input name="fullName" value={form.fullName} onChange={updateField} />
            </div>

            <div className="field">
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={updateField} />
            </div>

            <div className="field">
              <label>Email (optional)</label>
              <input name="email" value={form.email} onChange={updateField} />
            </div>

            <div className="field">
              <label>State</label>
              <input name="state" value={form.state} onChange={updateField} />
            </div>
          </div>

          <div className="field">
            <label>Delivery Address</label>
            <input name="address" value={form.address} onChange={updateField} />
          </div>

          <div className="field">
            <label>City</label>
            <input name="city" value={form.city} onChange={updateField} />
          </div>

          <div className="field">
            <label>Notes (optional)</label>
            <textarea name="notes" value={form.notes} onChange={updateField} rows={3} />
          </div>

          <button className="shopBtn" type="submit" disabled={placing}>
            {placing ? "Placing Order..." : "Place Order"}
          </button>

          <p className="checkoutHint">
            Payment integration will be connected later (Paystack/Flutterwave). For now this confirms the order.
          </p>
        </form>

        {/* Summary */}
        <div className="checkoutSummary">
          <h3 className="checkoutSectionTitle">Order Summary</h3>

          <div className="summaryList">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="summaryItem">
                <div className="summaryLeft">
                  <strong>{product.name}</strong>
                  <span className="muted">Qty: {qty}</span>
                </div>
                <strong>₦{(product.price * qty).toLocaleString()}</strong>
              </div>
            ))}
          </div>

          <div className="summaryTotals">
            <div className="summaryRow">
              <span>Subtotal</span>
              <strong>₦{subtotal.toLocaleString()}</strong>
            </div>
            <div className="summaryRow">
              <span>Delivery</span>
              <strong>₦{shippingFee.toLocaleString()}</strong>
            </div>
            <div className="summaryRow totalRow">
              <span>Total</span>
              <strong>₦{total.toLocaleString()}</strong>
            </div>
          </div>

          <Link to="/shop" className="headerLinkBtn">
            Add more items
          </Link>
        </div>
      </div>
    </div>
  );
}
