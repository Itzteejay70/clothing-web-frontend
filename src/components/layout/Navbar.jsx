import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/home.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const { items } = useCart();

  // total quantity (not just number of unique products)
  const cartCount = useMemo(
    () => items.reduce((sum, x) => sum + (x.qty || 0), 0),
    [items]
  );

  // close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="nav">
      <div className="container navInner">
        {/* Logo */}
        <Link to="/" className="navLogo" aria-label="Home">
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

        {/* Right actions */}
        <div className="navActions">
          <Link to="/profile" className="navIconBtn" aria-label="Profile">
           👤
          </Link>
          <Link to="/cart" className="navIconBtn" aria-label="Cart">
            🛒
            {cartCount > 0 && <span className="cartBadge">{cartCount}</span>}
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className="navMenuBtn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`navBackdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide drawer */}
      <aside className={`navDrawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="navDrawerHeader">
          <span className="navDrawerTitle">Menu</span>
          <button className="navCloseBtn" onClick={() => setOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="navDrawerLinks">
          <NavLink to="/" className="navDrawerLink">Home</NavLink>
          <NavLink to="/brands" className="navDrawerLink">Brands</NavLink>
          <NavLink to="/shop" className="navDrawerLink">Shop</NavLink>
          <NavLink to="/new-arrivals" className="navDrawerLink">New Arrivals</NavLink>
          <NavLink to="/trending" className="navDrawerLink">Trending</NavLink>
          <Link to="/profile" className="navIconBtn" aria-label="Profile">
           👤
          </Link>

        </nav>
      </aside>
    </header>
  );
}
