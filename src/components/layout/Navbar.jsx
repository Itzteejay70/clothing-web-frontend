import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { HiShoppingCart, HiUser, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const hideCartOn = ["/", "/login", "/register", "/profile"];
  const showCart = !hideCartOn.includes(location.pathname);

  const { items } = useCart();
  const { user } = useAuth();

  const cartCount = useMemo(
    () => items.reduce((sum, x) => sum + (x.qty || 0), 0),
    [items],
  );

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
      <Link to="/" aria-label="Home" className="inline-flex items-center">
  <img
    src="/Bg.PNG"
    className="h-40 w-auto object-contain hover:opacity-90 transition"
  />
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              Brands
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/new-arrivals"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              New Arrivals
            </NavLink>
            <NavLink
              to="/trending"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              Trending
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              to={user ? "/profile" : "/login"}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all duration-300"
              aria-label={user ? "Profile" : "Login"}
            >
              <HiUser className="w-5 h-5 text-gray-700" />
            </Link>

            {showCart && (
              <Link
                to="/cart"
                className="relative w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all duration-300"
                aria-label="Cart"
              >
                <HiShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1.5 flex items-center justify-center bg-green-600 text-white text-xs font-black rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all duration-300"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <HiMenu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 w-80 h-full bg-white border-l border-gray-200 shadow-2xl transform transition-transform duration-300 ease-out md:hidden z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-lg font-black text-gray-900">Menu</span>
          <button
            className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <HiX className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-4 font-bold border-b border-gray-50 transition-all duration-300 ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `px-4 py-4 font-bold border-b border-gray-50 transition-all duration-300 ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Brands
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `px-4 py-4 font-bold border-b border-gray-50 transition-all duration-300 ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/new-arrivals"
            className={({ isActive }) =>
              `px-4 py-4 font-bold border-b border-gray-50 transition-all duration-300 ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            New Arrivals
          </NavLink>
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              `px-4 py-4 font-bold border-b border-gray-50 transition-all duration-300 ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Trending
          </NavLink>
        </nav>
      </aside>
    </header>
  );
}