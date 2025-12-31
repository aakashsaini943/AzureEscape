import {
  FaPlane,
  FaHotel,
  FaHome,
  FaUmbrellaBeach,
  FaTrain,
  FaBus,
  FaTaxi,
  FaPassport,
} from "react-icons/fa";

export const HERO_TABS = [
  { id: "flights", label: "Flights", icon: FaPlane },
  { id: "hotels", label: "Hotels", icon: FaHotel },
  { id: "homestays", label: "Homestays", icon: FaHome },
  { id: "holidays", label: "Holidays", icon: FaUmbrellaBeach },
  { id: "trains", label: "Trains", icon: FaTrain },
  { id: "buses", label: "Buses", icon: FaBus },
  { id: "cabs", label: "Cabs", icon: FaTaxi },
  { id: "visa", label: "Visa", icon: FaPassport, badge: "NEW" },
];
