import { useEffect, useState } from "react";
import {
  HiEye,
  HiTrash,
  HiUsers,
  HiSearch,
  HiFilter,
  HiChevronDown,
  HiShoppingCart,
  HiCurrencyDollar,
  HiCalendar,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiShieldCheck,
  HiBadgeCheck,
  HiUserCircle,
  HiStar,
  HiTrendingUp,
  HiClock,
  HiCheckCircle,
  HiXCircle,
  HiX,
  HiExclamationCircle,
} from "react-icons/hi";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteConfirmUser, setDeleteConfirmUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    setLoading(true);
    // Enhanced mock data with more users
    setTimeout(() => {
      setUsers([
        {
          id: 1,
          fullName: "John Doe",
          email: "john@example.com",
          phone: "+234 801 234 5678",
          role: "customer",
          joinedDate: "2024-01-15",
          lastActive: "2 hours ago",
          totalOrders: 24,
          totalSpent: 1250000,
          status: "active",
          address: "123 Main Street, Victoria Island, Lagos",
          loyaltyPoints: 1250,
          favoriteCategory: "Sneakers",
        },
        {
          id: 2,
          fullName: "Jane Smith",
          email: "jane@example.com",
          phone: "+234 802 345 6789",
          role: "vendor",
          joinedDate: "2024-01-10",
          lastActive: "1 day ago",
          totalOrders: 0,
          totalSpent: 0,
          status: "active",
          address: "456 Park Avenue, Wuse 2, Abuja",
          businessName: "Kicks Store",
          totalProducts: 45,
        },
        {
          id: 3,
          fullName: "Mike Johnson",
          email: "mike@example.com",
          phone: "+234 803 456 7890",
          role: "customer",
          joinedDate: "2024-01-08",
          lastActive: "30 mins ago",
          totalOrders: 18,
          totalSpent: 980000,
          status: "active",
          address: "789 Beach Road, Port Harcourt, Rivers State",
          loyaltyPoints: 980,
          favoriteCategory: "Hoodies",
        },
        {
          id: 4,
          fullName: "Sarah Williams",
          email: "sarah@example.com",
          phone: "+234 804 567 8901",
          role: "admin",
          joinedDate: "2024-01-01",
          lastActive: "Online now",
          totalOrders: 0,
          totalSpent: 0,
          status: "active",
          address: "321 Hill View, Ibadan, Oyo State",
        },
        {
          id: 5,
          fullName: "David Brown",
          email: "david@example.com",
          phone: "+234 805 678 9012",
          role: "customer",
          joinedDate: "2024-01-12",
          lastActive: "5 hours ago",
          totalOrders: 15,
          totalSpent: 750000,
          status: "active",
          address: "567 Admiralty Way, Lekki, Lagos",
          loyaltyPoints: 750,
          favoriteCategory: "Jackets",
        },
        {
          id: 6,
          fullName: "Grace Okoro",
          email: "grace@example.com",
          phone: "+234 806 789 0123",
          role: "vendor",
          joinedDate: "2024-01-14",
          lastActive: "3 days ago",
          totalOrders: 0,
          totalSpent: 0,
          status: "active",
          address: "890 Allen Avenue, Ikeja, Lagos",
          businessName: "Fashion Hub NG",
          totalProducts: 32,
        },
        {
          id: 7,
          fullName: "Emmanuel Obi",
          email: "emmanuel@example.com",
          phone: "+234 807 890 1234",
          role: "customer",
          joinedDate: "2023-12-20",
          lastActive: "1 week ago",
          totalOrders: 8,
          totalSpent: 420000,
          status: "inactive",
          address: "234 Herbert Macaulay, Yaba, Lagos",
          loyaltyPoints: 420,
          favoriteCategory: "T-Shirts",
        },
        {
          id: 8,
          fullName: "Chinedu Eze",
          email: "chinedu@example.com",
          phone: "+234 808 901 2345",
          role: "customer",
          joinedDate: "2024-01-05",
          lastActive: "10 mins ago",
          totalOrders: 32,
          totalSpent: 1680000,
          status: "active",
          address: "678 Opebi Road, Ikeja, Lagos",
          loyaltyPoints: 1680,
          favoriteCategory: "Sneakers",
        },
        {
          id: 9,
          fullName: "Blessing Adeyemi",
          email: "blessing@example.com",
          phone: "+234 809 012 3456",
          role: "vendor",
          joinedDate: "2024-01-18",
          lastActive: "2 days ago",
          totalOrders: 0,
          totalSpent: 0,
          status: "active",
          address: "456 Awolowo Road, Ikoyi, Lagos",
          businessName: "Street Wear Co",
          totalProducts: 28,
        },
        {
          id: 10,
          fullName: "Tunde Bakare",
          email: "tunde@example.com",
          phone: "+234 810 123 4567",
          role: "customer",
          joinedDate: "2023-11-15",
          lastActive: "45 mins ago",
          totalOrders: 42,
          totalSpent: 2340000,
          status: "active",
          address: "123 Banana Island, Ikoyi, Lagos",
          loyaltyPoints: 2340,
          favoriteCategory: "Sneakers",
        },
        {
          id: 11,
          fullName: "Amaka Nwosu",
          email: "amaka@example.com",
          phone: "+234 811 234 5678",
          role: "customer",
          joinedDate: "2024-01-20",
          lastActive: "Just now",
          totalOrders: 5,
          totalSpent: 285000,
          status: "active",
          address: "345 Fola Osibo, Lekki Phase 1, Lagos",
          loyaltyPoints: 285,
          favoriteCategory: "Hoodies",
        },
        {
          id: 12,
          fullName: "Olusegun Peters",
          email: "olusegun@example.com",
          phone: "+234 812 345 6789",
          role: "customer",
          joinedDate: "2023-12-01",
          lastActive: "2 weeks ago",
          totalOrders: 3,
          totalSpent: 156000,
          status: "inactive",
          address: "789 Bourdillon Road, Ikoyi, Lagos",
          loyaltyPoints: 156,
          favoriteCategory: "Jackets",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const deleteUser = (userId) => {
    setUsers(users.filter((u) => u.id !== userId));
    setDeleteConfirmUser(null);
    setSelectedUser(null);
  };

  const getRoleBadgeColor = (role) => {
    const colors = {
      admin: "bg-purple-50 text-purple-700 border-purple-200",
      vendor: "bg-blue-50 text-blue-700 border-blue-200",
      customer: "bg-green-50 text-green-700 border-green-200",
    };
    return colors[role] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  const getStatusBadge = (status) => {
    return status === "active"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-gray-50 text-gray-500 border-gray-200";
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = (role) => {
    const colors = {
      admin: "from-purple-500 to-purple-600",
      vendor: "from-blue-500 to-blue-600",
      customer: "from-green-500 to-green-600",
    };
    return colors[role] || "from-gray-500 to-gray-600";
  };

  const roleCounts = {
    all: users.length,
    customer: users.filter((u) => u.role === "customer").length,
    vendor: users.filter((u) => u.role === "vendor").length,
    admin: users.filter((u) => u.role === "admin").length,
  };

  const statusCounts = {
    all: users.length,
    active: users.filter((u) => u.status === "active").length,
    inactive: users.filter((u) => u.status === "inactive").length,
  };

  const totalCustomers = users.filter((u) => u.role === "customer").length;
  const totalVendors = users.filter((u) => u.role === "vendor").length;
  const activeUsers = users.filter((u) => u.status === "active").length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
            <HiUsers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Users Management
            </h1>
            <p className="text-gray-600 font-medium">
              Manage all registered users and their activities
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
              <HiUsers className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Total Users</p>
              <p className="text-2xl font-black text-gray-900">
                {users.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <HiShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Customers</p>
              <p className="text-2xl font-black text-gray-900">
                {totalCustomers}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
              <HiShieldCheck className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Vendors</p>
              <p className="text-2xl font-black text-gray-900">
                {totalVendors}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
              <HiCheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Active Users</p>
              <p className="text-2xl font-black text-gray-900">{activeUsers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Search */}
          <div className="relative md:col-span-2">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none font-medium"
            />
          </div>

          {/* Role Filter */}
          <div className="relative">
            <HiFilter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none font-bold text-gray-700 bg-white appearance-none cursor-pointer"
            >
              <option value="all">All Roles ({roleCounts.all})</option>
              <option value="customer">
                Customers ({roleCounts.customer})
              </option>
              <option value="vendor">Vendors ({roleCounts.vendor})</option>
              <option value="admin">Admins ({roleCounts.admin})</option>
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { key: "all", label: "All Users", icon: HiUsers },
            { key: "active", label: "Active", icon: HiCheckCircle },
            { key: "inactive", label: "Inactive", icon: HiXCircle },
          ].map((status) => {
            const Icon = status.icon;
            return (
              <button
                key={status.key}
                onClick={() => setStatusFilter(status.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                  statusFilter === status.key
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {status.label}
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-black ${
                    statusFilter === status.key ? "bg-white/20" : "bg-gray-200"
                  }`}
                >
                  {statusCounts[status.key]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm font-bold text-gray-600">
            Showing{" "}
            <span className="text-green-600">{filteredUsers.length}</span> of{" "}
            {users.length} users
          </p>
        </div>
      </div>

      {/* Users Grid */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading users...</p>
          </div>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiUsers className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-900 text-xl font-black mb-2">
            No users found
          </p>
          <p className="text-gray-500 font-medium">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user, index) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 group animate-fadeInUp"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {/* User Header */}
              <div className="relative h-32 bg-gradient-to-br from-green-500 to-green-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <span
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${getRoleBadgeColor(user.role)}`}
                  >
                    {user.role === "admin" && (
                      <HiShieldCheck className="w-3 h-3" />
                    )}
                    {user.role === "vendor" && (
                      <HiBadgeCheck className="w-3 h-3" />
                    )}
                    {user.role === "customer" && (
                      <HiUserCircle className="w-3 h-3" />
                    )}
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </div>
              </div>

              {/* Avatar */}
              <div className="relative px-5 -mt-12 mb-3">
                <div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${getAvatarColor(user.role)} flex items-center justify-center text-white font-black text-2xl shadow-lg border-4 border-white`}
                >
                  {getInitials(user.fullName)}
                </div>
              </div>

              {/* User Info */}
              <div className="px-5 pb-5">
                <div className="mb-4">
                  <h3 className="font-black text-gray-900 text-lg mb-1 truncate group-hover:text-green-600 transition-colors">
                    {user.fullName}
                  </h3>
                  <p className="text-sm text-gray-600 truncate mb-1">
                    {user.email}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(user.status)}`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${user.status === "active" ? "bg-green-500" : "bg-gray-400"}`}
                      ></div>
                      {user.status.charAt(0).toUpperCase() +
                        user.status.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500">
                      {user.lastActive}
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                {user.role === "customer" && (
                  <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <p className="text-xs text-green-700 font-bold mb-0.5">
                        Orders
                      </p>
                      <p className="text-lg font-black text-green-700">
                        {user.totalOrders}
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <p className="text-xs text-blue-700 font-bold mb-0.5">
                        Spent
                      </p>
                      <p className="text-sm font-black text-blue-700">
                        ₦{(user.totalSpent / 1000).toFixed(0)}k
                      </p>
                    </div>
                  </div>
                )}

                {user.role === "vendor" && (
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                      <p className="text-xs text-purple-700 font-bold mb-1">
                        Business
                      </p>
                      <p className="text-sm font-black text-purple-700 truncate">
                        {user.businessName}
                      </p>
                      <p className="text-xs text-purple-600 mt-1">
                        {user.totalProducts} products
                      </p>
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs">
                    <HiCalendar className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-gray-600">
                      Joined {user.joinedDate}
                    </span>
                  </div>
                  {user.role === "customer" && user.favoriteCategory && (
                    <div className="flex items-center gap-2 text-xs">
                      <HiStar className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-gray-600">
                        Loves {user.favoriteCategory}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md text-sm"
                  >
                    <HiEye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => setDeleteConfirmUser(user)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md text-sm"
                  >
                    <HiTrash className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmUser && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setDeleteConfirmUser(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Warning Icon */}
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <HiExclamationCircle className="w-10 h-10 text-red-600" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-black text-gray-900 text-center mb-2">
                Delete User?
              </h2>

              {/* Message */}
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to delete{" "}
                <span className="font-black text-gray-900">
                  {deleteConfirmUser.fullName}
                </span>
                ? This action cannot be undone and all user data will be
                permanently removed.
              </p>

              {/* User Info Card */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getAvatarColor(deleteConfirmUser.role)} flex items-center justify-center text-white font-black text-sm`}
                  >
                    {getInitials(deleteConfirmUser.fullName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-gray-900 truncate">
                      {deleteConfirmUser.fullName}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {deleteConfirmUser.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDeleteConfirmUser(null)}
                  className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteUser(deleteConfirmUser.id)}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Details Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-40 bg-gradient-to-br from-green-500 to-green-600">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-20 h-20 rounded-xl bg-gradient-to-br ${getAvatarColor(selectedUser.role)} flex items-center justify-center text-white font-black text-2xl shadow-lg border-4 border-white`}
                  >
                    {getInitials(selectedUser.fullName)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white drop-shadow-lg mb-1">
                      {selectedUser.fullName}
                    </h2>
                    <p className="text-sm text-white/90 font-medium drop-shadow">
                      {selectedUser.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 flex items-center justify-center transition-all duration-300"
                >
                  <HiX className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Status & Role Badges */}
              <div className="flex gap-3 mb-6">
                <span
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border ${getRoleBadgeColor(selectedUser.role)}`}
                >
                  {selectedUser.role === "admin" && (
                    <HiShieldCheck className="w-4 h-4" />
                  )}
                  {selectedUser.role === "vendor" && (
                    <HiBadgeCheck className="w-4 h-4" />
                  )}
                  {selectedUser.role === "customer" && (
                    <HiUserCircle className="w-4 h-4" />
                  )}
                  {selectedUser.role.charAt(0).toUpperCase() +
                    selectedUser.role.slice(1)}
                </span>
                <span
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border ${getStatusBadge(selectedUser.status)}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${selectedUser.status === "active" ? "bg-green-500" : "bg-gray-400"}`}
                  ></div>
                  {selectedUser.status.charAt(0).toUpperCase() +
                    selectedUser.status.slice(1)}
                </span>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <HiMail className="w-5 h-5 text-blue-600" />
                    <p className="text-xs font-bold text-blue-700">EMAIL</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900 break-all">
                    {selectedUser.email}
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <HiPhone className="w-5 h-5 text-green-600" />
                    <p className="text-xs font-bold text-green-700">PHONE</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    {selectedUser.phone}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <HiLocationMarker className="w-5 h-5 text-purple-600" />
                  <p className="text-xs font-bold text-purple-700">ADDRESS</p>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  {selectedUser.address}
                </p>
              </div>

              {/* Customer Stats */}
              {selectedUser.role === "customer" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <HiShoppingCart className="w-5 h-5 text-green-600" />
                      <p className="text-xs font-bold text-green-700">
                        TOTAL ORDERS
                      </p>
                    </div>
                    <p className="text-2xl font-black text-green-700">
                      {selectedUser.totalOrders}
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <HiCurrencyDollar className="w-5 h-5 text-blue-600" />
                      <p className="text-xs font-bold text-blue-700">
                        TOTAL SPENT
                      </p>
                    </div>
                    <p className="text-2xl font-black text-blue-700">
                      ₦{selectedUser.totalSpent.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <HiStar className="w-5 h-5 text-orange-600" />
                      <p className="text-xs font-bold text-orange-700">
                        LOYALTY POINTS
                      </p>
                    </div>
                    <p className="text-2xl font-black text-orange-700">
                      {selectedUser.loyaltyPoints}
                    </p>
                  </div>
                </div>
              )}

              {/* Vendor Stats */}
              {selectedUser.role === "vendor" && (
                <div className="bg-purple-50 rounded-xl p-5 mb-6 border border-purple-200">
                  <p className="text-xs font-bold text-purple-700 mb-3">
                    VENDOR INFORMATION
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Business Name
                      </p>
                      <p className="text-lg font-black text-gray-900">
                        {selectedUser.businessName}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Total Products
                      </p>
                      <p className="text-lg font-black text-gray-900">
                        {selectedUser.totalProducts} products
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Info */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <p className="text-xs font-bold text-gray-700 mb-4">
                  ACCOUNT INFORMATION
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Joined Date</p>
                    <p className="text-sm font-bold text-gray-900">
                      {selectedUser.joinedDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Last Active</p>
                    <p className="text-sm font-bold text-gray-900">
                      {selectedUser.lastActive}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white font-black rounded-xl transition-all duration-300 shadow-md"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedUser(null);
                    setDeleteConfirmUser(selectedUser);
                  }}
                  className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-all duration-300 shadow-md"
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
