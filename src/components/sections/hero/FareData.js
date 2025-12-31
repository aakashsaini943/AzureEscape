import {
  FaUser,
  FaGraduationCap,
  FaUserShield,
  FaMedkit,
  FaFlag
} from "react-icons/fa";

export const FARE_TYPES = [
  {
    id: "regular",
    title: "Regular Fare",
    subtitle: "Standard ticket pricing",
    icon: FaUser,
  },
  {
    id: "student",
    title: "Student Fare",
    subtitle: "Valid student ID required",
    icon: FaGraduationCap,
  },
  {
    id: "senior",
    title: "Senior Citizen",
    subtitle: "Age 60 years & above",
    icon: FaUserShield,
  },
  {
    id: "defence",
    title: "Armed Forces",
    subtitle: "Defense personnel only",
    icon: FaFlag,
  },
  {
    id: "medical",
    title: "Doctor / Nurse",
    subtitle: "Medical professionals",
    icon: FaMedkit,
  },
];
