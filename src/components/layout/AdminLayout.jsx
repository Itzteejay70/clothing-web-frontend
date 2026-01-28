import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import {
  HiHome,
  HiShoppingBag,
  HiUsers,
  HiShoppingCart,
  HiCog,
  HiCheckCircle,
  HiLogout,
  HiMenu,
  HiX,
  HiChartBar,
  HiTag,
  HiCreditCard,
  HiUserGroup,
  HiTrendingUp,
  HiBell,
  HiSearch,
} from "react-icons/hi";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: HiHome },
    {
      path: "/admin/approve-products",
      label: "Approve Products",
      icon: HiCheckCircle,
    },
    {
      path: "/admin/approve-vendors",
      label: "Approve Vendors",
      icon: HiUserGroup,
    },
    { path: "/admin/orders", label: "Orders", icon: HiShoppingCart },
    { path: "/admin/users", label: "Users", icon: HiUsers },
    { path: "/admin/analytics", label: "Analytics", icon: HiChartBar },
    { path: "/admin/products", label: "All Products", icon: HiShoppingBag },
    { path: "/admin/categories", label: "Categories", icon: HiTag },
    { path: "/admin/payments", label: "Payments", icon: HiCreditCard },
    { path: "/admin/reports", label: "Reports", icon: HiTrendingUp },
    { path: "/admin/settings", label: "Settings", icon: HiCog },
  ];

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out forwards;
        }
      `}</style>

      <div className="flex h-screen bg-gray-50">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col shadow-sm">
          {/* Logo Section - Same height as navbar */}
          <div className="h-[73px] px-4 border-b border-gray-200 flex items-center bg-gradient-to-r from-green-600 to-green-700">
            <Link to="/admin/dashboard" className="block">
              <h1 className="text-xl font-black text-white">
                block<span className="text-green-200">234</span>
              </h1>
              <p className="text-xs font-bold text-green-100 mt-0.5">
                Admin Panel
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold transition-all duration-300 animate-slideInLeft text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Section with Logout */}
          <div className="p-3 border-t border-gray-200">
            {user ? (
              <>
                <div className="px-3 py-2 mb-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-bold text-gray-500">
                    Logged in as
                  </p>
                  <p className="text-sm font-black text-gray-900 truncate">
                    {user?.fullName || "Admin"}
                  </p>
                </div>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-2 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg font-bold transition-all duration-300 text-sm"
                >
                  <HiLogout className="w-5 h-5" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <div className="px-3 py-2 mb-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-bold text-gray-500">Status</p>
                  <p className="text-sm font-black text-gray-900">
                    Testing Mode
                  </p>
                </div>
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all duration-300 text-sm"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-40 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        <aside
          className={`fixed top-0 left-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out lg:hidden z-50 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-[73px] px-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-between">
            <Link to="/admin/dashboard" onClick={() => setSidebarOpen(false)}>
              <h1 className="text-xl font-black text-white">
                block<span className="text-green-200">234</span>
              </h1>
              <p className="text-xs font-bold text-green-100 mt-0.5">
                Admin Panel
              </p>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300"
            >
              <HiX className="w-5 h-5 text-white" />
            </button>
          </div>

          <nav className="flex-1 p-3 space-y-1 overflow-y-auto h-[calc(100vh-160px)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold transition-all duration-300 text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-3 border-t border-gray-200">
            {user ? (
              <button
                onClick={logout}
                className="w-full flex items-center gap-2 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg font-bold transition-all duration-300 text-sm"
              >
                <HiLogout className="w-5 h-5" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all duration-300 text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation Bar */}
          <header className="h-[73px] bg-white border-b border-gray-200 shadow-sm">
            <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
                >
                  <HiMenu className="w-5 h-5 text-gray-700" />
                </button>

                {/* Search Bar */}
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 w-96">
                  <HiSearch className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, orders, users..."
                    className="flex-1 bg-transparent outline-none text-sm font-medium text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Notifications */}
                <button className="relative w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-300">
                  <HiBell className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* View Store */}
                <Link
                  to="/"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 font-bold text-sm text-gray-700"
                >
                  View Store
                </Link>

                {/* User Menu */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-200 bg-white">
                  <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">
                      {user?.fullName?.charAt(0) || "A"}
                    </span>
                  </div>
                  <div className="hidden xl:block">
                    <p className="text-sm font-black text-gray-900">
                      {user?.fullName || "Admin User"}
                    </p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                </div>

                {/* Logout Button */}
                {user && (
                  <button
                    onClick={logout}
                    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-sm transition-all duration-300"
                  >
                    <HiLogout className="w-4 h-4" />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-gray-50">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
