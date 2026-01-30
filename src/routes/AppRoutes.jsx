import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Flights from "../pages/Flights";
import Homestays from "../pages/Homestays";
import Holiday from "../pages/Holiday";
import Trains from "../pages/Trains";
import Buses from "../pages/Buses";
import Cabs from "../pages/Cabs";
import Visa from "../pages/Visa";
import Login from "../pages/Login";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/flights" element={<Flights />} />

      {/* Optional placeholders */}
      <Route path="/homestays" element={< Homestays />} />
      <Route path="/holidays" element={<Holiday />} />
      <Route path="/trains" element={<Trains />} />
      <Route path="/buses" element={<Buses />} />
      <Route path="/cabs" element={<Cabs />} />
      <Route path="/visa" element={<Visa/>} />
    </Routes>
  );
};

export default AppRoutes;
