import { useEffect, useState } from "react";
import { HiEye, HiTrash } from "react-icons/hi";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // TODO: Fetch users from your API
    setLoading(true);
    // Mock data for now
    setTimeout(() => {
      setUsers([
        {
          id: 1,
          fullName: "John Doe",
          email: "john@example.com",
          role: "customer",
          joinedDate: "2024-01-15",
          totalOrders: 5,
          totalSpent: 250000,
          status: "active",
        },
        {
          id: 2,
          fullName: "Jane Smith",
          email: "jane@example.com",
          role: "vendor",
          joinedDate: "2024-01-10",
          totalOrders: 0,
          totalSpent: 0,
          status: "active",
        },
        {
          id: 3,
          fullName: "Mike Johnson",
          email: "mike@example.com",
          role: "customer",
          joinedDate: "2024-01-08",
          totalOrders: 12,
          totalSpent: 580000,
          status: "active",
        },
        {
          id: 4,
          fullName: "Sarah Williams",
          email: "sarah@example.com",
          role: "admin",
          joinedDate: "2024-01-01",
          totalOrders: 0,
          totalSpent: 0,
          status: "active",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const deleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // TODO: Call API to delete user
      setUsers(users.filter((u) => u.id !== userId));
    }
  };

  const getRoleBadgeColor = (role) => {
    const colors = {
      admin: "bg-purple-50 text-purple-700",
      vendor: "bg-blue-50 text-blue-700",
      customer: "bg-green-50 text-green-700",
    };
    return colors[role] || "bg-gray-50 text-gray-700";
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900">Users</h1>
        <p className="text-gray-600 mt-1">Manage all registered users</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 font-medium"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading users...</p>
          </div>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-lg font-medium">No users found</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Joined Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Orders
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Total Spent
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{user.fullName}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-600">{user.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${getRoleBadgeColor(
                          user.role,
                        )}`}
                      >
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">
                        {user.joinedDate}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">
                        {user.totalOrders}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-black text-green-700">
                        ₦{user.totalSpent.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-all duration-300"
                        >
                          <HiEye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="flex items-center gap-1 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-lg transition-all duration-300"
                        >
                          <HiTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* User Details Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">
                User Details
              </h2>
              <button
                onClick={() => setSelectedUser(null)}
                className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Full Name
                </p>
                <p className="text-xl font-black text-gray-900">
                  {selectedUser.fullName}
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">Email</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedUser.email}
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">Role</p>
                <span
                  className={`inline-block px-4 py-2 rounded-xl text-sm font-bold ${getRoleBadgeColor(
                    selectedUser.role,
                  )}`}
                >
                  {selectedUser.role.charAt(0).toUpperCase() +
                    selectedUser.role.slice(1)}
                </span>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Joined Date
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedUser.joinedDate}
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Total Orders
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedUser.totalOrders} orders
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Total Spent
                </p>
                <p className="text-2xl font-black text-green-700">
                  ₦{selectedUser.totalSpent.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-500 mb-2">Status</p>
                <span className="inline-block px-4 py-2 rounded-xl text-sm font-bold bg-green-50 text-green-700">
                  {selectedUser.status.charAt(0).toUpperCase() +
                    selectedUser.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setSelectedUser(null)}
                className="flex-1 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  deleteUser(selectedUser.id);
                  setSelectedUser(null);
                }}
                className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300"
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
