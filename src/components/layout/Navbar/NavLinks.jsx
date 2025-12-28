import { NavLink } from "react-router-dom";
import { MAIN_LINKS } from "./navData";
import NavExplore from "./NavExplore";

const NavLinks = () => {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      <NavExplore />

      {MAIN_LINKS.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-sky-400 font-medium"
              : "text-gray-300 hover:text-white transition"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
