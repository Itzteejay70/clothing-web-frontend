import { useEffect, useState } from "react";
import { HiCheck, HiX, HiEye } from "react-icons/hi";

export default function ApproveVendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVendor, setSelectedVendor] = useState(null);

  useEffect(() => {
    // TODO: Fetch pending vendors from your API
    setLoading(true);
    // Mock data for now
    setTimeout(() => {
      setVendors([
        {
          id: 1,
          businessName: "Sneaker Palace",
          ownerName: "John Doe",
          email: "john@sneakerpalace.com",
          phone: "+234 801 234 5678",
          address: "123 Fashion Street, Lagos",
          registrationDate: "2024-01-20",
          status: "pending",
          documents: ["Business License", "Tax ID"],
        },
        {
          id: 2,
          businessName: "Kicks Store",
          ownerName: "Jane Smith",
          email: "jane@kicksstore.com",
          phone: "+234 802 345 6789",
          address: "456 Market Road, Abuja",
          registrationDate: "2024-01-19",
          status: "pending",
          documents: ["Business License", "Tax ID", "CAC Certificate"],
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleApprove = (vendorId) => {
    // TODO: Call API to approve vendor
    console.log("Approving vendor:", vendorId);
    setVendors(vendors.filter((v) => v.id !== vendorId));
  };

  const handleReject = (vendorId) => {
    // TODO: Call API to reject vendor
    console.log("Rejecting vendor:", vendorId);
    setVendors(vendors.filter((v) => v.id !== vendorId));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900">Approve Vendors</h1>
        <p className="text-gray-600 mt-1">
          Review and approve vendor registration requests
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading vendors...</p>
          </div>
        </div>
      ) : vendors.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-lg font-medium">
            No pending vendors to review
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-black text-gray-900 text-xl mb-2">
                    {vendor.businessName}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-gray-500">Owner</p>
                      <p className="font-bold text-gray-900">
                        {vendor.ownerName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-bold text-gray-900">{vendor.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-bold text-gray-900">{vendor.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Registration Date</p>
                      <p className="font-bold text-gray-900">
                        {vendor.registrationDate}
                      </p>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold rounded-full">
                  Pending Review
                </span>
              </div>

              <div className="mb-4 pb-4 border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500 mb-2">Address</p>
                <p className="font-bold text-gray-900">{vendor.address}</p>
              </div>

              <div className="mb-4 pb-4 border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500 mb-2">
                  Documents Submitted
                </p>
                <div className="flex flex-wrap gap-2">
                  {vendor.documents.map((doc, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedVendor(vendor)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-all duration-300"
                >
                  <HiEye className="w-4 h-4" />
                  View Full Details
                </button>
                <button
                  onClick={() => handleApprove(vendor.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300"
                >
                  <HiCheck className="w-4 h-4" />
                  Approve
                </button>
                <button
                  onClick={() => handleReject(vendor.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300"
                >
                  <HiX className="w-4 h-4" />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Vendor Details Modal */}
      {selectedVendor && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVendor(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">
                Vendor Details
              </h2>
              <button
                onClick={() => setSelectedVendor(null)}
                className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                <HiX className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Business Name
                </p>
                <p className="text-xl font-black text-gray-900">
                  {selectedVendor.businessName}
                </p>
              </div>
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Owner Name
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedVendor.ownerName}
                </p>
              </div>
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">Email</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedVendor.email}
                </p>
              </div>
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">Phone</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedVendor.phone}
                </p>
              </div>
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">Address</p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedVendor.address}
                </p>
              </div>
              <div className="pb-6 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Registration Date
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {selectedVendor.registrationDate}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 mb-2">
                  Documents Submitted
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedVendor.documents.map((doc, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-full"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  handleApprove(selectedVendor.id);
                  setSelectedVendor(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300"
              >
                <HiCheck className="w-5 h-5" />
                Approve Vendor
              </button>
              <button
                onClick={() => {
                  handleReject(selectedVendor.id);
                  setSelectedVendor(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300"
              >
                <HiX className="w-5 h-5" />
                Reject Vendor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
