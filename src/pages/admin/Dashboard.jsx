import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiShoppingBag,
  HiUsers,
  HiShoppingCart,
  HiCurrencyDollar,
  HiTrendingUp,
  HiArrowRight,
  HiClock,
  HiCheckCircle,
  HiXCircle,
} from "react-icons/hi";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    pendingProducts: 0,
    pendingVendors: 0,
  });

  // Dynamic sales data that shows last 7 months including current
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
    const currentMonth = new Date().getMonth(); // 0-11
    const data = [];

    // Get last 7 months including current month
    for (let i = 6; i >= 0; i--) {
      const monthIndex = (currentMonth - i + 12) % 12;
      data.push({
        month: months[monthIndex],
        sales: Math.floor(Math.random() * 50000) + 120000, // Random sales between 120k-170k
      });
    }

    return data;
  };

  const [salesData] = useState(generateSalesData());

  const [topProducts] = useState([
    { name: "Nike Air Max 270", sales: 145, revenue: 6525000 },
    { name: "Adidas Ultraboost", sales: 132, revenue: 6864000 },
    { name: "Puma RS-X", sales: 98, revenue: 3920000 },
    { name: "New Balance 574", sales: 87, revenue: 3915000 },
    { name: "Reebok Club C", sales: 76, revenue: 2660000 },
  ]);

  const [recentOrders] = useState([
    {
      id: "#ORD-001",
      customer: "John Doe",
      amount: 45000,
      status: "completed",
      time: "2 mins ago",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      amount: 89000,
      status: "pending",
      time: "15 mins ago",
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      amount: 234000,
      status: "processing",
      time: "1 hour ago",
    },
    {
      id: "#ORD-004",
      customer: "Sarah Williams",
      amount: 56000,
      status: "completed",
      time: "2 hours ago",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalProducts: 150,
        totalOrders: 89,
        totalUsers: 234,
        totalRevenue: 2450000,
        pendingProducts: 12,
        pendingVendors: 5,
      });
    }, 300);
  }, []);

  const maxSales = Math.max(...salesData.map((d) => d.sales));

  const statCards = [
    {
      label: "Total Products",
      value: stats.totalProducts,
      icon: HiShoppingBag,
      link: "/admin/products",
      growth: "+12.5%",
    },
    {
      label: "Total Orders",
      value: stats.totalOrders,
      icon: HiShoppingCart,
      link: "/admin/orders",
      growth: "+8.3%",
    },
    {
      label: "Total Users",
      value: stats.totalUsers,
      icon: HiUsers,
      link: "/admin/users",
      growth: "+15.2%",
    },
    {
      label: "Total Revenue",
      value: `₦${stats.totalRevenue.toLocaleString()}`,
      icon: HiCurrencyDollar,
      growth: "+18.7%",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-50 text-green-700";
      case "pending":
        return "bg-orange-50 text-orange-700";
      case "processing":
        return "bg-blue-50 text-blue-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <HiCheckCircle className="w-4 h-4" />;
      case "pending":
        return <HiClock className="w-4 h-4" />;
      case "processing":
        return <HiTrendingUp className="w-4 h-4" />;
      default:
        return <HiXCircle className="w-4 h-4" />;
    }
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
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .stat-card:hover::before {
          opacity: 1;
        }
      `}</style>

      <div className="p-6 lg:p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            const content = (
              <div
                className="stat-card bg-white rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-full group cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold bg-green-50 text-green-700">
                    <HiTrendingUp className="w-3 h-3" />
                    {stat.growth}
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-500 mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-black text-gray-900 mb-2">
                  {stat.value}
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

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Analytics Chart - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-black text-gray-900">
                  Sales Analytics
                </h2>
                <p className="text-sm text-gray-600">
                  Last 7 months performance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-3 py-1 bg-green-50 rounded-lg">
                  <HiTrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-bold text-green-700">
                    +24.5%
                  </span>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-4 px-2">
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
                      style={{ height: "240px" }}
                    >
                      <div
                        className="bar-grow absolute bottom-0 w-full bg-gradient-to-t from-green-600 via-green-500 to-green-400 rounded-t-xl flex items-start justify-center pt-3 shadow-lg"
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
                      className={`text-sm font-bold ${isCurrentMonth ? "text-green-600" : "text-gray-600"}`}
                    >
                      {data.month}
                      {isCurrentMonth && (
                        <span className="ml-1 text-xs">📍</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pending Approvals */}
          <div
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900">Pending</h2>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {stats.pendingProducts === 0 && stats.pendingVendors === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <HiCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <p className="font-black text-gray-900 mb-2">
                  All caught up! 🎉
                </p>
                <p className="text-sm text-gray-600">
                  No pending approvals at the moment
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {stats.pendingProducts > 0 && (
                  <Link
                    to="/admin/approve-products"
                    className="group flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-md transition-all duration-300 border border-green-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-black text-gray-900 text-sm">
                          Products
                        </p>
                        <HiArrowRight className="w-3 h-3 text-green-600 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                      <p className="text-xs text-gray-600">
                        {stats.pendingProducts} awaiting approval
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-black text-sm shadow-lg transform group-hover:scale-110 transition-transform">
                      {stats.pendingProducts}
                    </div>
                  </Link>
                )}

                {stats.pendingVendors > 0 && (
                  <Link
                    to="/admin/approve-vendors"
                    className="group flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-md transition-all duration-300 border border-green-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-black text-gray-900 text-sm">
                          Vendors
                        </p>
                        <HiArrowRight className="w-3 h-3 text-green-600 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                      <p className="text-xs text-gray-600">
                        {stats.pendingVendors} awaiting approval
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-black text-sm shadow-lg transform group-hover:scale-110 transition-transform">
                      {stats.pendingVendors}
                    </div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="text-xl font-black text-gray-900 mb-6">
              Top Products
            </h2>
            {topProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <HiShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-black text-gray-900 mb-2">No products yet</p>
                <p className="text-sm text-gray-600 mb-4">
                  Start adding products to see top performers
                </p>
                <Link
                  to="/admin/products"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  Add Products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 border border-gray-100 hover:border-green-200 group"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-all duration-300">
                        <span className="text-sm font-black text-green-700 group-hover:text-white">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-gray-900 text-sm truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {product.sales} sales
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-black text-green-600">
                      ₦{(product.revenue / 1000).toFixed(0)}k
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Orders */}
          <div
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900">
                Recent Orders
              </h2>
              <Link
                to="/admin/orders"
                className="text-sm font-bold text-green-600 hover:text-green-700 transition-colors"
              >
                View all
              </Link>
            </div>
            {recentOrders.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <HiShoppingCart className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-black text-gray-900 mb-2">No orders yet</p>
                <p className="text-sm text-gray-600">
                  Orders will appear here once customers start purchasing
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 border border-gray-100 hover:border-green-200 cursor-pointer group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-black text-gray-900 text-sm">
                          {order.id}
                        </p>
                        <span
                          className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold ${getStatusColor(
                            order.status,
                          )}`}
                        >
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{order.customer}</p>
                      <p className="text-xs text-gray-400">{order.time}</p>
                    </div>
                    <p className="text-sm font-black text-green-600 ml-2">
                      ₦{order.amount.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
