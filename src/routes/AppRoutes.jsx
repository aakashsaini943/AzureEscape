import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations"
import Packages from "../pages/Packages";
import Hotels from "../pages/Hotels"
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/Wishlist" element={<Wishlist />} />

      <Route path="/login" element={<Login />} />


    
    </Routes>
  );
};

export default AppRoutes;
