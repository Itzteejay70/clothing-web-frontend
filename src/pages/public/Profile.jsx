import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Back"
            >
              <span className="text-2xl text-gray-700">‹</span>
            </Link>
            <div>
              <h1 className="text-2xl font-black text-gray-900">Profile</h1>
              <p className="text-xs text-gray-600 mt-0.5">
                Manage your account
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="space-y-6">
            <div className="pb-6 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-500 mb-2">Full Name</p>
              <p className="text-lg font-bold text-gray-900">
                {user?.fullName || "N/A"}
              </p>
            </div>

            <div className="pb-6 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-500 mb-2">Email</p>
              <p className="text-lg font-bold text-gray-900">
                {user?.email || "N/A"}
              </p>
            </div>

            <button
              onClick={logout}
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
