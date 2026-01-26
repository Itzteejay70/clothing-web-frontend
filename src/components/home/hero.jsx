import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaTruck, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  // 10 Professional streetwear images
  const backgrounds = [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2905&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558769132-cb1aea3c0685?q=80&w=2874&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2942&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2940&auto=format&fit=crop",
  ];

  // Auto-rotate backgrounds every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const trustBadges = [
    { icon: <FaCheckCircle className="w-5 h-5" />, title: "Verified Brands" },
    { icon: <FaShieldAlt className="w-5 h-5" />, title: "Secure Payments" },
    { icon: <FaTruck className="w-5 h-5" />, title: "Fast Delivery" },
  ];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${bg}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/45" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-8 animate-slide-up">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            WHERE NAIJA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              STREETWEAR
            </span>{" "}
            LIVES.
          </h1>

          <p className="text-lg sm:text-xl font-bold text-white/90 tracking-wider uppercase">
            Shop the latest drops
          </p>

          <div className="pt-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Start Shopping
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          <div
            className="pt-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                    {badge.icon}
                  </div>
                  <span className="text-white font-bold text-sm">
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBg(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentBg ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
