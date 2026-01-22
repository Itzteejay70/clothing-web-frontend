import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/home.css";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="container" style={{ padding: "28px 0", maxWidth: 720 }}>
      <div className="shopHeaderRow">
        <Link to="/" className="backLink" aria-label="Back">
          ‹
        </Link>
        <h2 className="shopTitle">Profile</h2>
        <div className="shopHeaderDivider" />
      </div>

      <div className="checkoutForm" style={{ marginTop: 18 }}>
        <p><strong>Name:</strong> {user?.fullName}</p>
        <p><strong>Email:</strong> {user?.email}</p>

        <button className="clearBtn" onClick={logout} style={{ marginTop: 12 }}>
          Logout
        </button>
      </div>
    </div>
  );
}
