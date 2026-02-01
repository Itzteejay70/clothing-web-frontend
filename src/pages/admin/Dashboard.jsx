import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiShoppingBag,
  HiUsers,
  HiShoppingCart,
  HiCurrencyDollar,
  HiTrendingUp,
  HiTrendingDown,
  HiArrowRight,
  HiClock,
  HiCheckCircle,
  HiXCircle,
  HiExclamationCircle,
  HiEye,
  HiUserGroup,
  HiStar,
  HiRefresh,
  HiChartBar,
  HiLocationMarker,
  HiCreditCard,
  HiTag,
} from "react-icons/hi";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    totalVendors: 0,
    activeUsers: 0,
    pendingProducts: 0,
    pendingVendors: 0,
    todayOrders: 0,
    todayRevenue: 0,
    conversionRate: 0,
    averageOrderValue: 0,
  });

  const [timeRange, setTimeRange] = useState("7days");

  // Dynamic sales data
  const generateSalesData = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentMonth = new Date().getMonth();
    const data = [];

    for (let i = 6; i >= 0; i--) {
      const monthIndex = (currentMonth - i + 12) % 12;
      data.push({
        month: months[monthIndex],
        sales: Math.floor(Math.random() * 50000) + 120000,
      });
    }

    return data;
  };

  const [salesData] = useState(generateSalesData());

  const [topProducts] = useState([
    {
      name: "Nike Air Max 270",
      sales: 145,
      revenue: 6525000,
      stock: 45,
      category: "Sneakers",
    },
    {
      name: "Adidas Ultraboost",
      sales: 132,
      revenue: 6864000,
      stock: 32,
      category: "Sneakers",
    },
    {
      name: "Puma RS-X",
      sales: 98,
      revenue: 3920000,
      stock: 67,
      category: "Sneakers",
    },
    {
      name: "New Balance 574",
      sales: 87,
      revenue: 3915000,
      stock: 23,
      category: "Sneakers",
    },
    {
      name: "Reebok Club C",
      sales: 76,
      revenue: 2660000,
      stock: 89,
      category: "Sneakers",
    },
  ]);

  const [recentOrders] = useState([
    {
      id: "#ORD-001",
      customer: "John Doe",
      amount: 45000,
      status: "completed",
      time: "2 mins ago",
      items: 3,
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      amount: 89000,
      status: "pending",
      time: "15 mins ago",
      items: 5,
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      amount: 234000,
      status: "processing",
      time: "1 hour ago",
      items: 8,
    },
    {
      id: "#ORD-004",
      customer: "Sarah Williams",
      amount: 56000,
      status: "completed",
      time: "2 hours ago",
      items: 2,
    },
    {
      id: "#ORD-005",
      customer: "David Brown",
      amount: 125000,
      status: "processing",
      time: "3 hours ago",
      items: 6,
    },
  ]);

  const [topCustomers] = useState([
    { name: "John Doe", orders: 24, spent: 1250000, location: "Lagos" },
    { name: "Jane Smith", orders: 18, spent: 980000, location: "Abuja" },
    {
      name: "Mike Johnson",
      orders: 15,
      spent: 750000,
      location: "Port Harcourt",
    },
    { name: "Sarah Williams", orders: 12, spent: 620000, location: "Ibadan" },
  ]);

  const [categoryPerformance] = useState([
    { name: "Sneakers", sales: 45, revenue: 12500000, percentage: 45 },
    { name: "Hoodies", sales: 32, revenue: 8900000, percentage: 32 },
    { name: "Jackets", sales: 18, revenue: 6200000, percentage: 18 },
    { name: "Plain Tees", sales: 12, revenue: 3400000, percentage: 12 },
  ]);

  const [recentActivity] = useState([
    {
      type: "order",
      message: "New order #ORD-001 from John Doe",
      time: "2 mins ago",
      icon: HiShoppingCart,
      color: "green",
    },
    {
      type: "product",
      message: "Nike Air Max added by vendor",
      time: "15 mins ago",
      icon: HiShoppingBag,
      color: "blue",
    },
    {
      type: "user",
      message: "New user registration: Jane Smith",
      time: "1 hour ago",
      icon: HiUsers,
      color: "purple",
    },
    {
      type: "vendor",
      message: "Vendor approval request from Kicks Store",
      time: "2 hours ago",
      icon: HiUserGroup,
      color: "orange",
    },
    {
      type: "payment",
      message: "Payment received: ₦150,000",
      time: "3 hours ago",
      icon: HiCreditCard,
      color: "green",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalProducts: 150,
        totalOrders: 289,
        totalUsers: 1234,
        totalRevenue: 24500000,
        totalVendors: 45,
        activeUsers: 89,
        pendingProducts: 12,
        pendingVendors: 5,
        todayOrders: 23,
        todayRevenue: 1250000,
        conversionRate: 3.2,
        averageOrderValue: 85000,
      });
    }, 300);
  }, []);

  const maxSales = Math.max(...salesData.map((d) => d.sales));

  const statCards = [
    {
      label: "Total Revenue",
      value: `₦${(stats.totalRevenue / 1000000).toFixed(1)}M`,
      icon: HiCurrencyDollar,
      link: "/admin/payments",
      growth: "+18.7%",
      isPositive: true,
      subtitle: `₦${(stats.todayRevenue / 1000).toFixed(0)}k today`,
    },
    {
      label: "Total Orders",
      value: stats.totalOrders,
      icon: HiShoppingCart,
      link: "/admin/orders",
      growth: "+8.3%",
      isPositive: true,
      subtitle: `${stats.todayOrders} orders today`,
    },
    {
      label: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      icon: HiUsers,
      link: "/admin/users",
      growth: "+15.2%",
      isPositive: true,
      subtitle: `${stats.activeUsers} active now`,
    },
    {
      label: "Total Products",
      value: stats.totalProducts,
      icon: HiShoppingBag,
      link: "/admin/products",
      growth: "+12.5%",
      isPositive: true,
      subtitle: `${stats.pendingProducts} pending`,
    },
  ];

  const quickStats = [
    {
      label: "Avg. Order Value",
      value: `₦${(stats.averageOrderValue / 1000).toFixed(0)}k`,
      icon: HiChartBar,
      color: "blue",
    },
    {
      label: "Conversion Rate",
      value: `${stats.conversionRate}%`,
      icon: HiTrendingUp,
      color: "green",
    },
    {
      label: "Active Vendors",
      value: stats.totalVendors,
      icon: HiUserGroup,
      color: "purple",
    },
    {
      label: "Pending Items",
      value: stats.pendingProducts + stats.pendingVendors,
      icon: HiClock,
      color: "orange",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "pending":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "processing":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <HiCheckCircle className="w-3.5 h-3.5" />;
      case "pending":
        return <HiClock className="w-3.5 h-3.5" />;
      case "processing":
        return <HiRefresh className="w-3.5 h-3.5 animate-spin" />;
      default:
        return <HiXCircle className="w-3.5 h-3.5" />;
    }
  };

  const getActivityColor = (color) => {
    const colors = {
      green: "bg-green-50 text-green-600",
      blue: "bg-blue-50 text-blue-600",
      purple: "bg-purple-50 text-purple-600",
      orange: "bg-orange-50 text-orange-600",
    };
    return colors[color] || "bg-gray-50 text-gray-600";
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        @keyframes growUp {
          from {
            height: 0%;
          }
          to {
            height: var(--target-height);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .bar-grow {
          animation: growUp 1s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(22, 163, 74, 0.05) 0%, rgba(22, 163, 74, 0) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .stat-card:hover::before {
          opacity: 1;
        }
      `}</style>

      <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 font-medium">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            const content = (
              <div
                className="stat-card bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-all duration-500 h-full group cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-bold ${
                      stat.isPositive
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {stat.isPositive ? (
                      <HiTrendingUp className="w-3.5 h-3.5" />
                    ) : (
                      <HiTrendingDown className="w-3.5 h-3.5" />
                    )}
                    {stat.growth}
                  </div>
                </div>

                <p className="text-sm font-bold text-gray-500 mb-0.5">
                  {stat.label}
                </p>

                <p className="text-2xl font-black text-gray-900 mb-1">
                  {stat.value}
                </p>

                <p className="text-xs text-gray-500 font-medium mb-2">
                  {stat.subtitle}
                </p>

                {stat.link && (
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-400 group-hover:text-green-600 transition-colors">
                    <span>View details</span>
                    <HiArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            );

            return stat.link ? (
              <Link key={index} to={stat.link}>
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-3.5 shadow-sm hover:shadow-md transition-all duration-300 animate-scaleIn"
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg ${getActivityColor(
                      stat.color,
                    )} flex items-center justify-center`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 font-bold mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-lg font-black text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Sales Analytics Chart - 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-1">
                  Sales Analytics
                </h2>
                <p className="text-sm text-gray-600">
                  Revenue performance over last 7 months
                </p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                >
                  <option value="7days">Last 7 Days</option>
                  <option value="30days">Last 30 Days</option>
                  <option value="6months">Last 6 Months</option>
                </select>
                <div className="flex items-center gap-1 px-3 py-2 bg-green-50 rounded-lg border border-green-200">
                  <HiTrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-bold text-green-700">
                    +24.5%
                  </span>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="h-72 flex items-end justify-between gap-3 px-2">
              {salesData.map((data, index) => {
                const heightPercentage = (data.sales / maxSales) * 100;
                const isCurrentMonth = index === salesData.length - 1;
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-3"
                  >
                    <div
                      className="w-full bg-gray-100 rounded-t-xl overflow-hidden relative"
                      style={{ height: "260px" }}
                    >
                      <div
                        className="bar-grow absolute bottom-0 w-full bg-gradient-to-t from-green-600 via-green-500 to-green-400 rounded-t-xl flex items-start justify-center pt-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        style={{
                          "--target-height": `${heightPercentage}%`,
                          animationDelay: `${index * 150}ms`,
                        }}
                      >
                        <span className="text-xs font-black text-white drop-shadow-lg">
                          ₦{(data.sales / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-bold ${
                        isCurrentMonth ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      {data.month}
                      {isCurrentMonth && (
                        <HiLocationMarker className="inline w-3 h-3 ml-1 text-green-600" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pending Approvals & Activity */}
          <div className="space-y-6">
            {/* Pending Approvals */}
            <div
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-black text-gray-900">
                  Pending Approvals
                </h2>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>

              {stats.pendingProducts === 0 && stats.pendingVendors === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-3">
                    <HiCheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="font-black text-gray-900 mb-1 text-sm">
                    All Caught Up!
                  </p>
                  <p className="text-xs text-gray-600">No pending approvals</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {stats.pendingProducts > 0 && (
                    <Link
                      to="/admin/approve-products"
                      className="group flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg hover:shadow-md transition-all duration-300 border border-orange-200"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-black text-gray-900 text-sm">
                            Products
                          </p>
                          <HiArrowRight className="w-3 h-3 text-orange-600 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-xs text-gray-600">
                          {stats.pendingProducts} awaiting review
                        </p>
                      </div>
                      <div className="w-9 h-9 bg-orange-600 text-white rounded-lg flex items-center justify-center font-black text-sm shadow-md transform group-hover:scale-110 transition-transform">
                        {stats.pendingProducts}
                      </div>
                    </Link>
                  )}

                  {stats.pendingVendors > 0 && (
                    <Link
                      to="/admin/approve-vendors"
                      className="group flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:shadow-md transition-all duration-300 border border-blue-200"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-black text-gray-900 text-sm">
                            Vendors
                          </p>
                          <HiArrowRight className="w-3 h-3 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-xs text-gray-600">
                          {stats.pendingVendors} awaiting review
                        </p>
                      </div>
                      <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-sm shadow-md transform group-hover:scale-110 transition-transform">
                        {stats.pendingVendors}
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Category Performance */}
            <div
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "150ms" }}
            >
              <h2 className="text-lg font-black text-gray-900 mb-4">
                Category Performance
              </h2>
              <div className="space-y-3">
                {categoryPerformance.map((category, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <HiTag className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-bold text-gray-900">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs font-black text-green-600">
                        ₦{(category.revenue / 1000000).toFixed(1)}M
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${category.percentage}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {category.sales}% of total sales
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-gray-900">
                Recent Orders
              </h2>
              <Link
                to="/admin/orders"
                className="text-xs font-bold text-green-600 hover:text-green-700 transition-colors flex items-center gap-1"
              >
                View All
                <HiArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentOrders.slice(0, 5).map((order, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 border border-gray-100 hover:border-green-200 cursor-pointer group animate-slideIn"
                  style={{ animationDelay: `${250 + index * 50}ms` }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-black text-gray-900 text-sm">
                        {order.id}
                      </p>
                      <span
                        className={`flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-bold ${getStatusColor(
                          order.status,
                        )}`}
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-0.5">
                      {order.customer}
                    </p>
                    <p className="text-xs text-gray-400">
                      {order.items} items • {order.time}
                    </p>
                  </div>
                  <p className="text-sm font-black text-green-600 ml-2">
                    ₦{(order.amount / 1000).toFixed(0)}k
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "250ms" }}
          >
            <h2 className="text-lg font-black text-gray-900 mb-5">
              Top Products
            </h2>
            <div className="space-y-3">
              {topProducts.slice(0, 5).map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 border border-gray-100 hover:border-green-200 group animate-slideIn"
                  style={{ animationDelay: `${300 + index * 50}ms` }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-all duration-300 flex-shrink-0">
                      <span className="text-sm font-black text-green-700 group-hover:text-white">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-gray-900 text-sm truncate">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{product.sales} sold</span>
                        <span>•</span>
                        <span
                          className={
                            product.stock < 30
                              ? "text-orange-600 font-bold"
                              : ""
                          }
                        >
                          {product.stock} left
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-black text-green-600 ml-2">
                    ₦{(product.revenue / 1000).toFixed(0)}k
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Customers */}
          <div
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-gray-900">
                Top Customers
              </h2>
              <HiStar className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="space-y-3">
              {topCustomers.map((customer, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-all duration-300 border border-gray-100 hover:border-purple-200 cursor-pointer group animate-slideIn"
                  style={{ animationDelay: `${350 + index * 50}ms` }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md flex-shrink-0">
                      {customer.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-gray-900 text-sm truncate">
                        {customer.name}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <HiLocationMarker className="w-3 h-3" />
                        <span>{customer.location}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {customer.orders} orders
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-black text-purple-600 ml-2">
                    ₦{(customer.spent / 1000).toFixed(0)}k
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div
          className="mt-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
          style={{ animationDelay: "350ms" }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-gray-900">
              Recent Activity
            </h2>
            <Link
              to="/admin/activity"
              className="text-xs font-bold text-green-600 hover:text-green-700 transition-colors flex items-center gap-1"
            >
              View All
              <HiArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-100 animate-slideIn"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  <div
                    className={`w-9 h-9 rounded-lg ${getActivityColor(activity.color)} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 mb-1 line-clamp-2">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
