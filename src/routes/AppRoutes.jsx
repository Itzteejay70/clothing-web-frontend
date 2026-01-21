import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Brands from "../pages/public/Brands";
import Shop from "../pages/public/Shop";
import NewArrivals from "../pages/public/NewArrivals";
import Trending from "../pages/public/Trending";
import ProductDetails from "../pages/public/ProductDetails";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />

    </Routes>
  );
}
