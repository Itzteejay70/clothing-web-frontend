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
    <div className="container authContainer" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/login" className="backLink" aria-label="Back">
          ‹
        </Link>
        <h2 className="shopTitle">Register</h2>
        <div className="shopHeaderDivider" />
      </div>

      {error ? <div className="authError">{error}</div> : null}

      <form onSubmit={onSubmit} className="authCard">
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
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
          />
        </div>

        <button className="shopBtn" type="submit">
          Create Account
        </button>

        <div className="authLinksRow" style={{ justifyContent: "flex-start" }}>
          <span style={{ fontWeight: 700, color: "#444" }}>
            Already have an account?
          </span>
          <Link to="/login" className="authLink">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
