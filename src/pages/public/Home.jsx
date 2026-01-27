import Hero from "../../components/home/hero";
import Trending from "../../components/home/trending";
import FeaturedBrands from "../../components/home/featuredBrands";
import NewArrivals from "../../components/home/newArrivals";
import Categories from "../../components/home/categories";
import Footer from "../../components/layout/Footer";
import WelcomeAuthModal from "../pages/../auth/WelcomeAuthModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
<WelcomeAuthModal delayMs={3000} />
{/* your existing home page */}
      <Hero />
      <Trending />
      <FeaturedBrands />
      <NewArrivals />
      <Categories />
      <Footer />
    </div>
  );
}
