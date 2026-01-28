import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState("all"); // all, pending, processing, shipped, delivered, cancelled

  useEffect(() => {
    // TODO: Fetch orders from your API
    setLoading(true);
    // Mock data for now
    setTimeout(() => {
      setOrders([
        {
          id: "#ORD-001",
          customer: "John Doe",
          email: "john@example.com",
          total: 145000,
          status: "pending",
          date: "2024-01-20",
          items: 3,
          shippingAddress: "123 Main Street, Lagos, Nigeria",
        },
        {
          id: "#ORD-002",
          customer: "Jane Smith",
          email: "jane@example.com",
          total: 89000,
          status: "processing",
          date: "2024-01-19",
          items: 2,
          shippingAddress: "456 Park Avenue, Abuja, Nigeria",
        },
        {
          id: "#ORD-003",
          customer: "Mike Johnson",
          email: "mike@example.com",
          total: 234000,
          status: "shipped",
          date: "2024-01-18",
          items: 5,
          shippingAddress: "789 Beach Road, Port Harcourt, Nigeria",
        },
        {
          id: "#ORD-004",
          customer: "Sarah Williams",
          email: "sarah@example.com",
          total: 56000,
          status: "delivered",
          date: "2024-01-17",
          items: 1,
          shippingAddress: "321 Hill View, Ibadan, Nigeria",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-orange-50 text-orange-700",
      processing: "bg-blue-50 text-blue-700",
      shipped: "bg-purple-50 text-purple-700",
      delivered: "bg-green-50 text-green-700",
      cancelled: "bg-red-50 text-red-700",
    };
    return colors[status] || "bg-gray-50 text-gray-700";
  };

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  const updateOrderStatus = (orderId, newStatus) => {
    // TODO: Call API to update order status
    setOrders(
      orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)),
    );
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900">Orders</h1>
        <p className="text-gray-600 mt-1">Manage and track all orders</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          "all",
          "pending",
          "processing",
          "shipped",
          "delivered",
          "cancelled",
        ].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap ${
              filter === status
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            {status === "all" && ` (${orders.length})`}
            {status !== "all" &&
              ` (${orders.filter((o) => o.status === status).length})`}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading orders...</p>
          </div>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-lg font-medium">No orders found</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Items
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Total
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-black text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{order.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">
                        {order.customer}
                      </p>
                      <p className="text-sm text-gray-600">{order.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{order.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">
                        {order.items} items
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-black text-green-700">
                        ₦{order.total.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
                          order.status,
                        )}`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-all duration-300"
                      >
                        <HiEye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Order Details
                </h2>
                <p className="text-gray-600">{selectedOrder.id}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">Customer</p>
                <p className="text-lg font-black text-gray-900">
                  {selectedOrder.customer}
                </p>
                <p className="text-gray-600">{selectedOrder.email}</p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Order Date
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedOrder.date}
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Shipping Address
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedOrder.shippingAddress}
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">Items</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedOrder.items} items
                </p>
              </div>

              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Total Amount
                </p>
                <p className="text-2xl font-black text-green-700">
                  ₦{selectedOrder.total.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-500 mb-3">
                  Update Status
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "pending",
                    "processing",
                    "shipped",
                    "delivered",
                    "cancelled",
                  ].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        updateOrderStatus(selectedOrder.id, status);
                        setSelectedOrder({ ...selectedOrder, status });
                      }}
                      className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                        selectedOrder.status === status
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full mt-6 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
