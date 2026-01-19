import Hero from "../../components/home/hero";
import TrustBadges from "../../components/home/trustBadges";
import Trending from "../../components/home/trending";
import FeaturedBrands from "../../components/home/featuredBrands";
import NewArrivals from "../../components/home/newArrivals";
import Categories from "../../components/home/categories";


export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <Trending />
      <FeaturedBrands />
      <NewArrivals />
      <Categories />
    </div>
  );
}
