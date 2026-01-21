import { Link, NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: "#111",
  fontWeight: isActive ? "600" : "400",
  borderBottom: isActive ? "2px solid #111" : "none",
  paddingBottom: "4px",
});

export default function Navbar() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", color: "#111" }}>
          <div style={{ fontWeight: 800, fontSize: "20px" }}>
            block<span style={{ fontWeight: 900 }}>234</span>
          </div>
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <NavLink to="/" style={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/brands" style={navLinkStyle}>
            Brands
          </NavLink>
          <NavLink to="/shop" style={navLinkStyle}>
            Shop
          </NavLink>
          <NavLink to="/new-arrivals" style={navLinkStyle}>
            New Arrivals
          </NavLink>
          <NavLink to="/trending" style={navLinkStyle}>
            Trending
          </NavLink>
        </nav>

        {/* Right icons (simple placeholders for now) */}
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <button style={iconBtn}>🔍</button>
          <button style={iconBtn}>👤</button>
          <button style={iconBtn}>🛒</button>
        </div>
      </div>
    </header>
  );
}

const iconBtn = {
  background: "transparent",
  border: "1px solid #eee",
  padding: "8px 10px",
  borderRadius: "10px",
  cursor: "pointer",
};
