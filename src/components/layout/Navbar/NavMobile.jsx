import { useNavigate } from "react-router-dom";
import { NAV_LINKS } from "./nav.config";

const NavMobile = ({ open, setOpen }) => {
  const navigate = useNavigate();
  if (!open) return null;

  return (
    <div className="lg:hidden backdrop-blur-xl bg-black/80 border-t hue-border">
      <div className="flex flex-col gap-5 p-6 text-gray-200 text-sm">
        {NAV_LINKS.map((item) => (
          <span
            key={item.label}
            onClick={() => {
              navigate(item.path);
              setOpen(false);
            }}
            className="hover:text-white"
          >
            {item.label}
          </span>
        ))}

        <hr className="border-white/10" />

        <button onClick={() => navigate("/login")}>Login</button>
        <button
          onClick={() => navigate("/book")}
          className="rounded-full px-5 py-2 text-white hue-cta"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default NavMobile;
