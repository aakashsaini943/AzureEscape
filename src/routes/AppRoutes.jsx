import { Routes, Route } from "react-router-dom";

// ✅ IMPORT PAGES (MANDATORY)
import Home from "../pages/Home";
// import Flights from "../pages/Flights";
// import Hotels from "../pages/Hotels";
// import Homestays from "../pages/Homestays";
// import Holidays from "../pages/Holidays";
// import Trains from "../pages/Trains";
// import Buses from "../pages/Buses";
// import Cabs from "../pages/Cabs";
// import Visa from "../pages/Visa";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
{/* 
      Main tabs */}
      {/* <Route path="/flights" element={<Flights />} /> 
    <Route path="/hotels" element={<Hotels />} /> 
    <Route path="/homestays" element={<Homestays />} /> 
     <Route path="/holidays" element={<Holidays />} /> 
     <Route path="/trains" element={<Trains />} /> 
     <Route path="/buses" element={<Buses />} />
      <Route path="/cabs" element={<Cabs />} />
      <Route path="/visa" element={<Visa />} />  */}

    
    </Routes>
  );
};

export default AppRoutes;

