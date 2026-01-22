import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/home.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="nav">
      <div className="container navInner">
        {/* Left: Logo */}
        <Link to="/" className="navLogo" onClick={closeMenu}>
          block<span>234</span>
        </Link>

        {/* Desktop links */}
        <nav className="navLinks">
          <NavLink to="/" className="navLink">Home</NavLink>
          <NavLink to="/brands" className="navLink">Brands</NavLink>
          <NavLink to="/shop" className="navLink">Shop</NavLink>
          <NavLink to="/new-arrivals" className="navLink">New Arrivals</NavLink>
          <NavLink to="/trending" className="navLink">Trending</NavLink>
        </nav>

        {/* Right: Icons + Hamburger */}
        <div className="navActions">
          <Link to="/cart" className="navIconBtn" aria-label="Cart">
            🛒
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="navMenuBtn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navMobile ${open ? "open" : ""}`}>
        <NavLink to="/" className="navMobileLink" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/brands" className="navMobileLink" onClick={closeMenu}>Brands</NavLink>
        <NavLink to="/shop" className="navMobileLink" onClick={closeMenu}>Shop</NavLink>
        <NavLink to="/new-arrivals" className="navMobileLink" onClick={closeMenu}>New Arrivals</NavLink>
        <NavLink to="/trending" className="navMobileLink" onClick={closeMenu}>Trending</NavLink>
      </div>
    </header>
  );
}
