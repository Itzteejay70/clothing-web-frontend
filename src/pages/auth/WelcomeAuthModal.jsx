import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/home.css";

const HAS_ACCOUNT_KEY = "cm_has_account_v1";
const SHOWN_THIS_TAB_KEY = "cm_welcome_modal_shown_tab_v1";

export default function WelcomeAuthModal({ delayMs = 2000 }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("new"); // new | returning

  useEffect(() => {
    // Don’t show if already logged in
    if (user) return;

    // ✅ Show only once per tab load (not again when navigating back home)
    const shownThisTab = sessionStorage.getItem(SHOWN_THIS_TAB_KEY) === "true";
    if (shownThisTab) return;

    const t = setTimeout(() => {
      const hasAccount = localStorage.getItem(HAS_ACCOUNT_KEY) === "true";
      setVariant(hasAccount ? "returning" : "new");
      setOpen(true);

      // mark as shown for this tab session
      sessionStorage.setItem(SHOWN_THIS_TAB_KEY, "true");
    }, delayMs);

    return () => clearTimeout(t);
  }, [user, delayMs]);

  if (!open || user) return null;

  return (
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome modal"
      onClick={() => setOpen(false)}
    >
      <div className="authCard modalCard" onClick={(e) => e.stopPropagation()}>
        <div className="shopHeaderRow" style={{ marginBottom: 10 }}>
          <h2 className="shopTitle" style={{ margin: 0 }}>
            {variant === "returning" ? "Welcome back 👋" : "Join us ✨"}
          </h2>
          <div style={{ flex: 1 }} />
          <button
            className="modalCloseBtn"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <p style={{ marginTop: 0, color: "#666" }}>
          {variant === "returning"
            ? "Log in to continue shopping and view your cart faster."
            : "Create an account to save items, track orders and checkout faster."}
        </p>

        <div className="authLinksRow" style={{ justifyContent: "flex-start" }}>
          {variant === "returning" ? (
            <>
              <Link to="/login" className="authLink" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link
                to="/forgot-password"
                className="authLink"
                onClick={() => setOpen(false)}
              >
                Forgot password?
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" className="authLink" onClick={() => setOpen(false)}>
                Create account
              </Link>
              <Link to="/login" className="authLink" onClick={() => setOpen(false)}>
                Already have an account?
              </Link>
            </>
          )}
        </div>

        <button
          className="shopBtn"
          type="button"
          onClick={() => setOpen(false)}
          style={{ marginTop: 12 }}
        >
          Continue browsing
        </button>
      </div>
    </div>
  );
}