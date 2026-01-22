import Hero from "../../components/home/hero";
import Trending from "../../components/home/trending";
import FeaturedBrands from "../../components/home/featuredBrands";
import NewArrivals from "../../components/home/newArrivals";
import Categories from "../../components/home/categories";


export default function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <FeaturedBrands />
      <NewArrivals />
      <Categories />
    </div>
  );
}
