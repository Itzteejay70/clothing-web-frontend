import { useState } from "react";
import { HiSave } from "react-icons/hi";

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: "block234",
    siteEmail: "admin@block234.com",
    currency: "NGN",
    shippingFee: 2500,
    taxRate: 7.5,
    maintenanceMode: false,
    allowRegistration: true,
    allowVendorRegistration: true,
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSave = () => {
    setSaving(true);
    // TODO: Call API to save settings
    setTimeout(() => {
      setSaving(false);
      alert("Settings saved successfully!");
    }, 1000);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your site configuration</p>
      </div>

      <div className="max-w-3xl">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-black text-gray-900 mb-6">
            General Settings
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleChange("siteName", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Site Email
              </label>
              <input
                type="email"
                value={settings.siteEmail}
                onChange={(e) => handleChange("siteEmail", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Currency
              </label>
              <select
                value={settings.currency}
                onChange={(e) => handleChange("currency", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 font-bold cursor-pointer"
              >
                <option value="NGN">NGN (₦)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-black text-gray-900 mb-6">
            Pricing Settings
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Default Shipping Fee (₦)
              </label>
              <input
                type="number"
                value={settings.shippingFee}
                onChange={(e) =>
                  handleChange("shippingFee", Number(e.target.value))
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Tax Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={settings.taxRate}
                onChange={(e) =>
                  handleChange("taxRate", Number(e.target.value))
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 font-medium"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-black text-gray-900 mb-6">
            Site Features
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-bold text-gray-900">Maintenance Mode</p>
                <p className="text-sm text-gray-600">
                  Disable site access for maintenance
                </p>
              </div>
              <button
                onClick={() =>
                  handleChange("maintenanceMode", !settings.maintenanceMode)
                }
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  settings.maintenanceMode ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                    settings.maintenanceMode ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-bold text-gray-900">
                  Allow User Registration
                </p>
                <p className="text-sm text-gray-600">
                  Let new customers register accounts
                </p>
              </div>
              <button
                onClick={() =>
                  handleChange("allowRegistration", !settings.allowRegistration)
                }
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  settings.allowRegistration ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                    settings.allowRegistration
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-bold text-gray-900">
                  Allow Vendor Registration
                </p>
                <p className="text-sm text-gray-600">
                  Let new vendors register to sell
                </p>
              </div>
              <button
                onClick={() =>
                  handleChange(
                    "allowVendorRegistration",
                    !settings.allowVendorRegistration,
                  )
                }
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  settings.allowVendorRegistration
                    ? "bg-green-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                    settings.allowVendorRegistration
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
        >
          <HiSave className="w-5 h-5" />
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </div>
  );
}
