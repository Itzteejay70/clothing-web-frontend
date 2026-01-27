import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    const clean = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean);

    if (!isValid) {
      setError("Please enter a valid email address.");
      return;
    }

    // ✅ Later: call your backend reset endpoint here
    // For now, we just show success state
    setSent(true);
  }

  return (
    <div className="container authContainer" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/login" className="backLink" aria-label="Back">
          ‹
        </Link>
        <h2 className="shopTitle">Forgot Password</h2>
        <div className="shopHeaderDivider" />
      </div>

      {error ? <div className="authError">{error}</div> : null}

      <form onSubmit={onSubmit} className="authCard">
        {sent ? (
          <div style={{ display: "grid", gap: 10 }}>
            <p style={{ margin: 0, color: "#444", fontWeight: 700 }}>
              If an account exists for this email, a reset link has been sent.
            </p>
            <p style={{ margin: 0, color: "#666" }}>
              Check your inbox (and spam folder) and follow the instructions.
            </p>

            <div className="authLinksRow" style={{ justifyContent: "flex-start" }}>
              <Link to="/login" className="authLink">
                Back to Login
              </Link>
              <Link to="/register" className="authLink">
                Create account
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p style={{ marginTop: 0, color: "#666" }}>
              Enter your email and we’ll send you a reset link.
            </p>

            <div className="field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <button className="shopBtn" type="submit">
              Send Reset Link
            </button>

            <div className="authLinksRow" style={{ justifyContent: "flex-start" }}>
              <span style={{ fontWeight: 700, color: "#444" }}>
                Remember your password?
              </span>
              <Link to="/login" className="authLink">
                Login
              </Link>
            </div>
          </>
        )}
      </form>
    </div>
  );
}