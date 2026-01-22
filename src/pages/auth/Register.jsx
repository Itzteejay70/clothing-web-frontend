import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/home.css";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState("");

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      register(form);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Registration failed.");
    }
  }

  return (
    <div className="container" style={{ padding: "28px 0", maxWidth: 520 }}>
      <div className="shopHeaderRow">
        <Link to="/login" className="backLink" aria-label="Back">
          ‹
        </Link>
        <h2 className="shopTitle">Register</h2>
        <div className="shopHeaderDivider" />
      </div>

      {error ? <p style={{ color: "#b00020", fontWeight: 800 }}>{error}</p> : null}

      <form onSubmit={onSubmit} className="checkoutForm" style={{ marginTop: 12 }}>
        <div className="field">
          <label>Full Name</label>
          <input name="fullName" value={form.fullName} onChange={onChange} />
        </div>

        <div className="field">
          <label>Email</label>
          <input name="email" value={form.email} onChange={onChange} />
        </div>

        <div className="field">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={onChange} />
        </div>

        <button className="shopBtn" type="submit">
          Create Account
        </button>

        <p style={{ marginTop: 12 }}>
          Already have an account? <Link to="/login" className="linkBtn">Login</Link>
        </p>
      </form>
    </div>
  );
}
