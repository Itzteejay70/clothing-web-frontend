import { useEffect, useState } from "react";
import {
  HiCheck,
  HiX,
  HiEye,
  HiSearch,
  HiFilter,
  HiChevronDown,
  HiUserGroup,
  HiClock,
  HiCheckCircle,
  HiOfficeBuilding,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiDocumentText,
  HiCalendar,
  HiShieldCheck,
  HiBadgeCheck,
  HiExclamation,
} from "react-icons/hi";

export default function ApproveVendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("pending");

  useEffect(() => {
    setLoading(true);
    // Enhanced mock data with more vendors
    setTimeout(() => {
      setVendors([
        {
          id: 1,
          businessName: "Sneaker Palace",
          ownerName: "John Doe",
          email: "john@sneakerpalace.com",
          phone: "+234 801 234 5678",
          address: "123 Fashion Street, Victoria Island, Lagos",
          city: "Lagos",
          state: "Lagos State",
          registrationDate: "2024-01-20",
          status: "pending",
          documents: ["Business License", "Tax ID", "CAC Certificate"],
          businessType: "Footwear Retail",
          yearEstablished: "2020",
          website: "www.sneakerpalace.com",
          description:
            "Premium sneaker retailer specializing in authentic Nike, Adidas, and Puma products.",
          expectedMonthlyRevenue: "₦5,000,000",
          numberOfEmployees: "8-15",
          storefront:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
        },
        {
          id: 2,
          businessName: "Kicks Store",
          ownerName: "Jane Smith",
          email: "jane@kicksstore.com",
          phone: "+234 802 345 6789",
          address: "456 Market Road, Wuse 2, Abuja",
          city: "Abuja",
          state: "FCT",
          registrationDate: "2024-01-19",
          status: "pending",
          documents: [
            "Business License",
            "Tax ID",
            "CAC Certificate",
            "Bank Statement",
          ],
          businessType: "Sports Equipment",
          yearEstablished: "2019",
          website: "www.kicksstore.ng",
          description:
            "Leading sports footwear and equipment supplier with focus on quality and authenticity.",
          expectedMonthlyRevenue: "₦7,500,000",
          numberOfEmployees: "15-25",
          storefront:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80",
        },
        {
          id: 3,
          businessName: "Fashion Hub NG",
          ownerName: "Michael Okonkwo",
          email: "michael@fashionhub.ng",
          phone: "+234 803 456 7890",
          address: "789 Allen Avenue, Ikeja, Lagos",
          city: "Lagos",
          state: "Lagos State",
          registrationDate: "2024-01-18",
          status: "pending",
          documents: ["Business License", "Tax ID", "CAC Certificate"],
          businessType: "Fashion Retail",
          yearEstablished: "2021",
          website: "www.fashionhub.ng",
          description:
            "Contemporary fashion store offering premium jackets, hoodies, and streetwear.",
          expectedMonthlyRevenue: "₦6,200,000",
          numberOfEmployees: "5-10",
          storefront:
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&q=80",
        },
        {
          id: 4,
          businessName: "Street Wear Co",
          ownerName: "Sarah Johnson",
          email: "sarah@streetwear.co",
          phone: "+234 804 567 8901",
          address: "321 Admiralty Way, Lekki Phase 1, Lagos",
          city: "Lagos",
          state: "Lagos State",
          registrationDate: "2024-01-17",
          status: "pending",
          documents: ["Business License", "Tax ID"],
          businessType: "Streetwear Fashion",
          yearEstablished: "2022",
          website: "www.streetwearco.ng",
          description:
            "Urban streetwear brand featuring exclusive hoodies, tees, and accessories.",
          expectedMonthlyRevenue: "₦4,500,000",
          numberOfEmployees: "3-8",
          storefront:
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&q=80",
        },
        {
          id: 5,
          businessName: "Premium Styles",
          ownerName: "David Adeyemi",
          email: "david@premiumstyles.com",
          phone: "+234 805 678 9012",
          address: "567 Herbert Macaulay Way, Yaba, Lagos",
          city: "Lagos",
          state: "Lagos State",
          registrationDate: "2024-01-16",
          status: "pending",
          documents: [
            "Business License",
            "Tax ID",
            "CAC Certificate",
            "Insurance",
          ],
          businessType: "Luxury Fashion",
          yearEstablished: "2018",
          website: "www.premiumstyles.com",
          description:
            "High-end fashion boutique specializing in designer clothing and accessories.",
          expectedMonthlyRevenue: "₦12,000,000",
          numberOfEmployees: "25-50",
          storefront:
            "https://images.unsplash.com/photo-1555529902-5261145633bf?w=500&q=80",
        },
        {
          id: 6,
          businessName: "Urban Kicks",
          ownerName: "Chinedu Eze",
          email: "chinedu@urbankicks.ng",
          phone: "+234 806 789 0123",
          address: "890 Opebi Road, Ikeja, Lagos",
          city: "Lagos",
          state: "Lagos State",
          registrationDate: "2024-01-15",
          status: "pending",
          documents: ["Business License", "Tax ID", "CAC Certificate"],
          businessType: "Footwear Retail",
          yearEstablished: "2023",
          website: "www.urbankicks.ng",
          description:
            "Modern sneaker store focusing on limited editions and collaborations.",
          expectedMonthlyRevenue: "₦3,800,000",
          numberOfEmployees: "5-10",
          storefront:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&q=80",
        },
        {
          id: 7,
          businessName: "Elite Apparel",
          ownerName: "Grace Okoro",
          email: "grace@eliteapparel.com",
          phone: "+234 807 890 1234",
          address: "234 Awolowo Road, Ikoyi, Lagos",
          city: "Lagos",
          state: "Lagos State",
          registrationDate: "2024-01-14",
          status: "pending",
          documents: [
            "Business License",
            "Tax ID",
            "CAC Certificate",
            "Trade License",
          ],
          businessType: "Fashion Retail",
          yearEstablished: "2017",
          website: "www.eliteapparel.com",
          description:
            "Curated collection of premium clothing for the modern professional.",
          expectedMonthlyRevenue: "₦8,900,000",
          numberOfEmployees: "15-25",
          storefront:
            "https://images.unsplash.com/photo-1558769132-cb1aea3c5b93?w=500&q=80",
        },
        {
          id: 8,
          businessName: "Active Life Sports",
          ownerName: "Emmanuel Obi",
          email: "emmanuel@activelife.ng",
          phone: "+234 808 901 2345",
          address: "678 Ademola Adetokunbo Crescent, Wuse 2, Abuja",
          city: "Abuja",
          state: "FCT",
          registrationDate: "2024-01-13",
          status: "pending",
          documents: ["Business License", "Tax ID"],
          businessType: "Sports & Fitness",
          yearEstablished: "2021",
          website: "www.activelifeng.com",
          description:
            "Complete sports and fitness apparel including sneakers, activewear, and gear.",
          expectedMonthlyRevenue: "₦5,600,000",
          numberOfEmployees: "10-15",
          storefront:
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&q=80",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleApprove = (vendorId) => {
    console.log("Approving vendor:", vendorId);
    setVendors(vendors.filter((v) => v.id !== vendorId));
  };

  const handleReject = (vendorId) => {
    console.log("Rejecting vendor:", vendorId);
    setVendors(vendors.filter((v) => v.id !== vendorId));
  };

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || vendor.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getRandomColor = (id) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-pink-500 to-pink-600",
      "from-green-500 to-green-600",
      "from-orange-500 to-orange-600",
      "from-red-500 to-red-600",
      "from-indigo-500 to-indigo-600",
      "from-teal-500 to-teal-600",
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
            <HiUserGroup className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Approve Vendors
            </h1>
            <p className="text-gray-600 font-medium">
              Review and manage vendor registration requests
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
              <HiClock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Pending Review</p>
              <p className="text-2xl font-black text-gray-900">
                {vendors.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
              <HiCheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Approved Today</p>
              <p className="text-2xl font-black text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <HiOfficeBuilding className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">
                Total Applications
              </p>
              <p className="text-2xl font-black text-gray-900">
                {vendors.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search vendors, owners, email, city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none font-medium"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <HiFilter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none font-bold text-gray-700 bg-white appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm font-bold text-gray-600">
            Showing{" "}
            <span className="text-purple-600">{filteredVendors.length}</span> of{" "}
            {vendors.length} vendors
          </p>
        </div>
      </div>

      {/* Vendors List */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading vendors...</p>
          </div>
        </div>
      ) : filteredVendors.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiUserGroup className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-900 text-xl font-black mb-2">
            No vendors found
          </p>
          <p className="text-gray-500 font-medium">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredVendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 group animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Vendor Header with Storefront */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={vendor.storefront}
                  alt={vendor.businessName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getRandomColor(vendor.id)} flex items-center justify-center text-white font-black text-lg shadow-lg border-2 border-white`}
                    >
                      {getInitials(vendor.businessName)}
                    </div>
                    <div>
                      <h3 className="font-black text-white text-lg mb-0.5 drop-shadow-lg">
                        {vendor.businessName}
                      </h3>
                      <p className="text-xs text-white/90 font-medium drop-shadow">
                        {vendor.businessType}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 bg-orange-500 text-white text-xs font-black rounded-full shadow-lg flex items-center gap-1.5">
                    <HiClock className="w-3.5 h-3.5" />
                    Pending
                  </span>
                </div>
              </div>

              {/* Vendor Details */}
              <div className="p-5">
                {/* Owner Info */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold text-sm">
                    {getInitials(vendor.ownerName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-bold">
                      Business Owner
                    </p>
                    <p className="text-sm font-black text-gray-900 truncate">
                      {vendor.ownerName}
                    </p>
                  </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <HiMail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-bold">Email</p>
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {vendor.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <HiPhone className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-bold">Phone</p>
                      <p className="text-sm font-bold text-gray-900">
                        {vendor.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-bold">
                        Location
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {vendor.city}, {vendor.state}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-green-700 font-bold mb-0.5">
                      Est. Revenue
                    </p>
                    <p className="text-sm font-black text-green-700">
                      {vendor.expectedMonthlyRevenue}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                    <p className="text-xs text-blue-700 font-bold mb-0.5">
                      Employees
                    </p>
                    <p className="text-sm font-black text-blue-700">
                      {vendor.numberOfEmployees}
                    </p>
                  </div>
                </div>

                {/* Documents */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-500 mb-2 flex items-center gap-1.5">
                    <HiDocumentText className="w-3.5 h-3.5" />
                    Documents Submitted ({vendor.documents.length})
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {vendor.documents.slice(0, 3).map((doc, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-200"
                      >
                        {doc}
                      </span>
                    ))}
                    {vendor.documents.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg">
                        +{vendor.documents.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Registration Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <HiCalendar className="w-3.5 h-3.5" />
                  <span>
                    Applied on{" "}
                    {new Date(vendor.registrationDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedVendor(vendor)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-all duration-300 text-sm"
                  >
                    <HiEye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => handleApprove(vendor.id)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    <HiCheck className="w-4 h-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(vendor.id)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    <HiX className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Vendor Details Modal */}
      {selectedVendor && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedVendor(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Storefront */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={selectedVendor.storefront}
                alt={selectedVendor.businessName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getRandomColor(selectedVendor.id)} flex items-center justify-center text-white font-black text-xl shadow-lg border-2 border-white`}
                  >
                    {getInitials(selectedVendor.businessName)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white drop-shadow-lg mb-1">
                      {selectedVendor.businessName}
                    </h2>
                    <p className="text-sm text-white/90 font-medium drop-shadow">
                      {selectedVendor.businessType} • Est.{" "}
                      {selectedVendor.yearEstablished}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVendor(null)}
                  className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 flex items-center justify-center transition-all duration-300"
                >
                  <HiX className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Description */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 mb-6 border border-blue-200">
                <p className="text-xs font-bold text-blue-700 mb-2 flex items-center gap-1.5">
                  <HiOfficeBuilding className="w-4 h-4" />
                  BUSINESS DESCRIPTION
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedVendor.description}
                </p>
              </div>

              {/* Owner & Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-xs font-bold text-gray-500 mb-4">
                    BUSINESS OWNER
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold">
                      {getInitials(selectedVendor.ownerName)}
                    </div>
                    <div>
                      <p className="text-lg font-black text-gray-900">
                        {selectedVendor.ownerName}
                      </p>
                      <p className="text-sm text-gray-600">Owner & Founder</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-xs font-bold text-gray-500 mb-4">
                    BUSINESS METRICS
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Expected Monthly Revenue
                      </p>
                      <p className="text-lg font-black text-green-600">
                        {selectedVendor.expectedMonthlyRevenue}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Number of Employees
                      </p>
                      <p className="text-lg font-black text-gray-900">
                        {selectedVendor.numberOfEmployees}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <HiMail className="w-5 h-5 text-blue-600" />
                    <p className="text-xs font-bold text-blue-700">EMAIL</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900 break-all">
                    {selectedVendor.email}
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <HiPhone className="w-5 h-5 text-green-600" />
                    <p className="text-xs font-bold text-green-700">PHONE</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    {selectedVendor.phone}
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <HiShieldCheck className="w-5 h-5 text-purple-600" />
                    <p className="text-xs font-bold text-purple-700">WEBSITE</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {selectedVendor.website}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-purple-50 rounded-xl p-5 mb-6 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <HiLocationMarker className="w-5 h-5 text-purple-600" />
                  <p className="text-xs font-bold text-purple-700">
                    BUSINESS ADDRESS
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  {selectedVendor.address}
                </p>
              </div>

              {/* Documents */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <HiDocumentText className="w-5 h-5 text-gray-600" />
                  <p className="text-xs font-bold text-gray-700">
                    DOCUMENTS SUBMITTED ({selectedVendor.documents.length})
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedVendor.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <HiBadgeCheck className="w-4 h-4 text-green-600" />
                        <p className="text-xs font-black text-gray-900">
                          {doc}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">Verified</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Info */}
              <div className="bg-orange-50 rounded-xl p-4 mb-6 border border-orange-200 flex items-center gap-3">
                <HiCalendar className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="text-xs font-bold text-orange-700">
                    APPLICATION DATE
                  </p>
                  <p className="text-sm font-black text-gray-900">
                    {new Date(
                      selectedVendor.registrationDate,
                    ).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    handleApprove(selectedVendor.id);
                    setSelectedVendor(null);
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  <HiCheckCircle className="w-6 h-6" />
                  Approve Vendor
                </button>
                <button
                  onClick={() => {
                    handleReject(selectedVendor.id);
                    setSelectedVendor(null);
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  <HiX className="w-6 h-6" />
                  Reject Vendor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
      `}</style>
    </div>
  );
}
