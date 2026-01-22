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
    <div className="container authContainer" style={{ padding: "28px 0" }}>
      <div className="shopHeaderRow">
        <Link to="/" className="backLink" aria-label="Back">
          ‹
        </Link>
        <h2 className="shopTitle">Login</h2>
        <div className="shopHeaderDivider" />
      </div>

      {error ? <div className="authError">{error}</div> : null}

      <form onSubmit={onSubmit} className="authCard">
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
          Sign In
        </button>

        <div className="authLinksRow">
          <Link to="/register" className="authLink">
            Create account
          </Link>
          <Link to="/forgot-password" className="authLink">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
}
