import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "New Arrivals", path: "/new-arrivals" },
      { name: "Trending", path: "/trending" },
      { name: "Brands", path: "/brands" },
      { name: "Sale", path: "/sale" },
    ],
    help: [
      { name: "Contact Us", path: "/contact" },
      { name: "Shipping Info", path: "/shipping" },
      { name: "Returns", path: "/returns" },
      { name: "Size Guide", path: "/size-guide" },
      { name: "FAQs", path: "/faq" },
    ],
    about: [
      { name: "About Us", path: "/about" },
      { name: "Our Story", path: "/story" },
      { name: "Careers", path: "/careers" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaTiktok />, url: "https://tiktok.com", label: "TikTok" },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                NAIJA STREETWEAR
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your premier destination for the hottest streetwear brands and
              styles. Fresh drops, authentic gear, fast delivery.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-lg">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-black text-lg mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and early access
              to new drops.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold uppercase text-sm transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Naija Streetwear. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">We accept:</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                VISA
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                MC
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                PayPal
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
