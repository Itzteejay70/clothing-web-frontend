import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Brands from "../pages/public/Brands";
import Shop from "../pages/public/Shop";
import NewArrivals from "../pages/public/NewArrivals";
import Trending from "../pages/public/Trending";
import ProductDetails from "../pages/public/ProductDetails";
import Cart from "../pages/public/Cart";
import Checkout from "../pages/public/Checkout";
import OrderSuccess from "../pages/public/OrderSuccess";
import Profile from "../pages/public/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ProtectedRoute from "../components/common/ProtectedRoute";




export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      {/* next page */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>}/>
    </Routes>
  );
}
