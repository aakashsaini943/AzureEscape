import {
  FaPlane,
  FaHotel,
  FaHome,
  FaHouseUser,
  FaUmbrellaBeach,
  FaTrain,
  FaBus,
  FaTaxi,
  FaPassport,
} from "react-icons/fa";

export const NAV_TABS = [
  { id: "home", label: "Home", icon: FaHome, path: "/" },
  { id: "flights", label: "Flights", icon: FaPlane, path: "/flights" },
  { id: "hotels", label: "Hotels", icon: FaHotel, path: "/hotels" },
  { id: "homestays", label: "Homestays", icon: FaHouseUser, path: "/homestays" },
  { id: "holidays", label: "Holidays", icon: FaUmbrellaBeach, path: "/holidays" },
  { id: "trains", label: "Trains", icon: FaTrain, path: "/trains" },
  { id: "buses", label: "Buses", icon: FaBus, path: "/buses" },
  { id: "cabs", label: "Cabs", icon: FaTaxi, path: "/cabs" },
  { id: "visa", label: "Visa", icon: FaPassport, path: "/visa", badge: "NEW" },
];
