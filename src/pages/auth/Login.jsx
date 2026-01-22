import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/home.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      login(form);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  }

  return (
    <div className="container" style={{ padding: "28px 0", maxWidth: 520 }}>
      <div className="shopHeaderRow">
        <Link to="/" className="backLink" aria-label="Back">
          ‹
        </Link>
        <h2 className="shopTitle">Login</h2>
        <div className="shopHeaderDivider" />
      </div>

      {error ? <p style={{ color: "#b00020", fontWeight: 800 }}>{error}</p> : null}

      <form onSubmit={onSubmit} className="checkoutForm" style={{ marginTop: 12 }}>
        <div className="field">
          <label>Email</label>
          <input name="email" value={form.email} onChange={onChange} />
        </div>

        <div className="field">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={onChange} />
        </div>

        <button className="shopBtn" type="submit">
          Sign In
        </button>

        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between" }}>
          <Link to="/register" className="linkBtn">Create account</Link>
          <Link to="/forgot-password" className="linkBtn">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
}
