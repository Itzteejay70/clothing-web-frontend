import Hero from "../../components/home/hero";
import Trending from "../../components/home/trending";
import FeaturedBrands from "../../components/home/featuredBrands";
import NewArrivals from "../../components/home/newArrivals";
import Categories from "../../components/home/categories";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Trending />
      <FeaturedBrands />
      <NewArrivals />
      <Categories />
      <Footer />
    </div>
  );
}
