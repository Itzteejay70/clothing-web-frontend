import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth(); // if you don't have loading, remove it
  const location = useLocation();

  // If your AuthContext doesn't provide loading, delete this block.
  if (loading) return null; // or a spinner component

  // Not logged in → go login
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Role check (adjust to match your user data)
  const role =
    user?.role ||
    user?.user?.role ||
    user?.accountType ||
    user?.type ||
    "";

  const isAdmin = String(role).toLowerCase() === "admin";

  // Logged in but not admin → kick out (choose where)
  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
