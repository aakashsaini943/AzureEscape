import { useNavigate } from "react-router-dom";
import { NAV_LINKS } from "./nav.config";

const NavPrimary = () => {
  const navigate = useNavigate();

  return (
    <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-200">
      {NAV_LINKS.map((item) => (
        <span
          key={item.label}
          onClick={() => navigate(item.path)}
          className="relative cursor-pointer hover:text-white transition"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 hue-border transition-all hover:w-full" />
        </span>
      ))}
    </nav>
  );
};

export default NavPrimary;
