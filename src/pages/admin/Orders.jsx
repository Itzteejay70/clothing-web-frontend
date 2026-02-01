import { useEffect, useState } from "react";
import {
  HiEye,
  HiShoppingCart,
  HiClock,
  HiCheckCircle,
  HiTruck,
  HiX,
  HiExclamation,
  HiSearch,
  HiFilter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCalendar,
  HiCurrencyDollar,
  HiShoppingBag,
  HiUser,
  HiChevronDown,
  HiRefresh,
  HiDocumentText,
} from "react-icons/hi";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");

  useEffect(() => {
    setLoading(true);
    // Enhanced mock data with more orders and details
    setTimeout(() => {
      setOrders([
        {
          id: "#ORD-001",
          customer: "John Doe",
          email: "john@example.com",
          phone: "+234 801 234 5678",
          total: 145000,
          status: "pending",
          date: "2024-01-20",
          time: "14:30",
          items: [
            {
              name: "Nike Air Max 270",
              quantity: 2,
              price: 45000,
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80",
            },
            {
              name: "Adidas Hoodie",
              quantity: 1,
              price: 55000,
              image:
                "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80",
            },
          ],
          shippingAddress: "123 Main Street, Victoria Island, Lagos, Nigeria",
          paymentMethod: "Card Payment",
          trackingNumber: "TRK-001-2024",
        },
        {
          id: "#ORD-002",
          customer: "Jane Smith",
          email: "jane@example.com",
          phone: "+234 802 345 6789",
          total: 89000,
          status: "processing",
          date: "2024-01-19",
          time: "11:15",
          items: [
            {
              name: "Puma RS-X Sneakers",
              quantity: 1,
              price: 38000,
              image:
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=80",
            },
            {
              name: "Plain White Tee",
              quantity: 2,
              price: 25500,
              image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80",
            },
          ],
          shippingAddress: "456 Park Avenue, Wuse 2, Abuja, Nigeria",
          paymentMethod: "Transfer",
          trackingNumber: "TRK-002-2024",
        },
        {
          id: "#ORD-003",
          customer: "Mike Johnson",
          email: "mike@example.com",
          phone: "+234 803 456 7890",
          total: 234000,
          status: "shipped",
          date: "2024-01-18",
          time: "09:45",
          items: [
            {
              name: "Leather Jacket Premium",
              quantity: 1,
              price: 89000,
              image:
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80",
            },
            {
              name: "New Balance 574",
              quantity: 2,
              price: 42000,
              image:
                "https://images.unsplash.com/photo-1539185441755-769473a23570?w=200&q=80",
            },
            {
              name: "Champion Hoodie",
              quantity: 2,
              price: 30500,
              image:
                "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80",
            },
          ],
          shippingAddress: "789 Beach Road, Port Harcourt, Nigeria",
          paymentMethod: "Cash on Delivery",
          trackingNumber: "TRK-003-2024",
        },
        {
          id: "#ORD-004",
          customer: "Sarah Williams",
          email: "sarah@example.com",
          phone: "+234 804 567 8901",
          total: 56000,
          status: "delivered",
          date: "2024-01-17",
          time: "16:20",
          items: [
            {
              name: "Denim Jacket",
              quantity: 1,
              price: 56000,
              image:
                "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=200&q=80",
            },
          ],
          shippingAddress: "321 Hill View, Ibadan, Nigeria",
          paymentMethod: "Card Payment",
          trackingNumber: "TRK-004-2024",
        },
        {
          id: "#ORD-005",
          customer: "David Brown",
          email: "david@example.com",
          phone: "+234 805 678 9012",
          total: 125000,
          status: "processing",
          date: "2024-01-16",
          time: "13:00",
          items: [
            {
              name: "Ultraboost 21",
              quantity: 1,
              price: 52000,
              image:
                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80",
            },
            {
              name: "Oversized Hoodie",
              quantity: 1,
              price: 73000,
              image:
                "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=200&q=80",
            },
          ],
          shippingAddress: "567 Admiralty Way, Lekki, Lagos, Nigeria",
          paymentMethod: "Transfer",
          trackingNumber: "TRK-005-2024",
        },
        {
          id: "#ORD-006",
          customer: "Grace Okoro",
          email: "grace@example.com",
          phone: "+234 806 789 0123",
          total: 178000,
          status: "pending",
          date: "2024-01-15",
          time: "10:30",
          items: [
            {
              name: "Premium Sneakers",
              quantity: 2,
              price: 89000,
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80",
            },
          ],
          shippingAddress: "890 Allen Avenue, Ikeja, Lagos, Nigeria",
          paymentMethod: "Card Payment",
          trackingNumber: "TRK-006-2024",
        },
        {
          id: "#ORD-007",
          customer: "Emmanuel Obi",
          email: "emmanuel@example.com",
          phone: "+234 807 890 1234",
          total: 67000,
          status: "shipped",
          date: "2024-01-14",
          time: "15:45",
          items: [
            {
              name: "Graphic Tee Collection",
              quantity: 3,
              price: 22333,
              image:
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&q=80",
            },
          ],
          shippingAddress: "234 Herbert Macaulay, Yaba, Lagos, Nigeria",
          paymentMethod: "Transfer",
          trackingNumber: "TRK-007-2024",
        },
        {
          id: "#ORD-008",
          customer: "Chinedu Eze",
          email: "chinedu@example.com",
          phone: "+234 808 901 2345",
          total: 195000,
          status: "delivered",
          date: "2024-01-13",
          time: "12:00",
          items: [
            {
              name: "Designer Jacket",
              quantity: 1,
              price: 125000,
              image:
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80",
            },
            {
              name: "Premium Sneakers",
              quantity: 1,
              price: 70000,
              image:
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=80",
            },
          ],
          shippingAddress: "678 Opebi Road, Ikeja, Lagos, Nigeria",
          paymentMethod: "Card Payment",
          trackingNumber: "TRK-008-2024",
        },
        {
          id: "#ORD-009",
          customer: "Blessing Adeyemi",
          email: "blessing@example.com",
          phone: "+234 809 012 3456",
          total: 42000,
          status: "cancelled",
          date: "2024-01-12",
          time: "08:15",
          items: [
            {
              name: "Basic Tee Set",
              quantity: 2,
              price: 21000,
              image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80",
            },
          ],
          shippingAddress: "456 Awolowo Road, Ikoyi, Lagos, Nigeria",
          paymentMethod: "Cash on Delivery",
          trackingNumber: "TRK-009-2024",
        },
        {
          id: "#ORD-010",
          customer: "Tunde Bakare",
          email: "tunde@example.com",
          phone: "+234 810 123 4567",
          total: 312000,
          status: "processing",
          date: "2024-01-11",
          time: "17:30",
          items: [
            {
              name: "Luxury Sneakers",
              quantity: 2,
              price: 95000,
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80",
            },
            {
              name: "Designer Hoodie",
              quantity: 1,
              price: 122000,
              image:
                "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=200&q=80",
            },
          ],
          shippingAddress: "123 Banana Island, Ikoyi, Lagos, Nigeria",
          paymentMethod: "Transfer",
          trackingNumber: "TRK-010-2024",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-orange-50 text-orange-700 border-orange-200",
      processing: "bg-blue-50 text-blue-700 border-blue-200",
      shipped: "bg-purple-50 text-purple-700 border-purple-200",
      delivered: "bg-green-50 text-green-700 border-green-200",
      cancelled: "bg-red-50 text-red-700 border-red-200",
    };
    return colors[status] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <HiClock className="w-4 h-4" />;
      case "processing":
        return <HiRefresh className="w-4 h-4" />;
      case "shipped":
        return <HiTruck className="w-4 h-4" />;
      case "delivered":
        return <HiCheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <HiX className="w-4 h-4" />;
      default:
        return <HiExclamation className="w-4 h-4" />;
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filter === "all" || order.status === filter;
    const matchesDate = dateFilter === "all" || order.date === dateFilter;

    return matchesSearch && matchesStatus && matchesDate;
  });

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(
      orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)),
    );
  };

  const statusCounts = {
    all: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const averageOrderValue =
    orders.length > 0 ? totalRevenue / orders.length : 0;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
            <HiShoppingCart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Orders Management
            </h1>
            <p className="text-gray-600 font-medium">
              Track and manage all customer orders
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
              <HiShoppingCart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Total Orders</p>
              <p className="text-2xl font-black text-gray-900">
                {orders.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <HiCurrencyDollar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Total Revenue</p>
              <p className="text-2xl font-black text-gray-900">
                ₦{(totalRevenue / 1000000).toFixed(1)}M
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
              <HiClock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Pending</p>
              <p className="text-2xl font-black text-gray-900">
                {statusCounts.pending}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
              <HiDocumentText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">
                Avg. Order Value
              </p>
              <p className="text-2xl font-black text-gray-900">
                ₦{(averageOrderValue / 1000).toFixed(0)}k
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Search */}
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by order ID, customer, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none font-medium"
            />
          </div>

          {/* Export Button */}
          <div className="flex gap-2">
            <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 shadow-sm">
              <HiDownload className="w-4 h-4" />
              Export Orders
            </button>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { key: "all", label: "All Orders", icon: HiShoppingBag },
            { key: "pending", label: "Pending", icon: HiClock },
            { key: "processing", label: "Processing", icon: HiRefresh },
            { key: "shipped", label: "Shipped", icon: HiTruck },
            { key: "delivered", label: "Delivered", icon: HiCheckCircle },
            { key: "cancelled", label: "Cancelled", icon: HiX },
          ].map((status) => {
            const Icon = status.icon;
            return (
              <button
                key={status.key}
                onClick={() => setFilter(status.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                  filter === status.key
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {status.label}
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-black ${
                    filter === status.key ? "bg-white/20" : "bg-gray-200"
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
            <span className="text-green-600">{filteredOrders.length}</span> of{" "}
            {orders.length} orders
          </p>
        </div>
      </div>

      {/* Orders List */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading orders...</p>
          </div>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-900 text-xl font-black mb-2">
            No orders found
          </p>
          <p className="text-gray-500 font-medium">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredOrders.map((order, index) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Order Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-gray-900 text-lg">
                          {order.id}
                        </h3>
                        <span
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}
                        >
                          {getStatusIcon(order.status)}
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <HiCalendar className="w-4 h-4" />
                          <span className="font-medium">
                            {order.date} at {order.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <HiShoppingBag className="w-4 h-4" />
                          <span className="font-medium">
                            {order.items.length} items
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                      <p className="text-xs text-gray-500 font-bold mb-1">
                        Customer
                      </p>
                      <p className="text-sm font-black text-gray-900 truncate">
                        {order.customer}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {order.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 font-bold mb-1">
                        Phone
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {order.phone}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 font-bold mb-1">
                        Payment Method
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {order.paymentMethod}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 font-bold mb-1">
                        Order Total
                      </p>
                      <p className="text-xl font-black text-green-600">
                        ₦{order.total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md"
                  >
                    <HiEye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  {selectedOrder.id}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Order placed on {selectedOrder.date} at {selectedOrder.time}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                <HiX className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Status Banner */}
              <div
                className={`flex items-center gap-3 p-4 rounded-xl mb-6 border ${getStatusColor(selectedOrder.status)}`}
              >
                {getStatusIcon(selectedOrder.status)}
                <div className="flex-1">
                  <p className="font-black text-sm">
                    Current Status: {selectedOrder.status.toUpperCase()}
                  </p>
                  <p className="text-xs mt-0.5">
                    Tracking: {selectedOrder.trackingNumber}
                  </p>
                </div>
              </div>

              {/* Customer & Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <HiUser className="w-5 h-5 text-blue-600" />
                    <p className="text-xs font-bold text-blue-700">
                      CUSTOMER INFORMATION
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Name</p>
                      <p className="text-sm font-black text-gray-900">
                        {selectedOrder.customer}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedOrder.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedOrder.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                  <div className="flex items-center gap-2 mb-4">
                    <HiLocationMarker className="w-5 h-5 text-purple-600" />
                    <p className="text-xs font-bold text-purple-700">
                      SHIPPING ADDRESS
                    </p>
                  </div>
                  <p className="text-sm font-bold text-gray-900 leading-relaxed">
                    {selectedOrder.shippingAddress}
                  </p>

                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <p className="text-xs text-gray-500 mb-0.5">
                      Payment Method
                    </p>
                    <p className="text-sm font-black text-gray-900">
                      {selectedOrder.paymentMethod}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <p className="text-xs font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <HiShoppingBag className="w-4 h-4" />
                  ORDER ITEMS ({selectedOrder.items.length})
                </p>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-white rounded-lg p-3 border border-gray-200"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-gray-900 text-sm truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-black text-green-600">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-700">
                      Order Total
                    </p>
                    <p className="text-2xl font-black text-green-600">
                      ₦{selectedOrder.total.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Update Status */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
                <p className="text-xs font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <HiRefresh className="w-4 h-4" />
                  UPDATE ORDER STATUS
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
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                        selectedOrder.status === status
                          ? "bg-green-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {getStatusIcon(status)}
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white font-black rounded-xl transition-all duration-300 shadow-md"
              >
                Close Order Details
              </button>
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
