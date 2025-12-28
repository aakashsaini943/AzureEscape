import { Link } from "react-router-dom";
import { MAIN_LINKS, EXPLORE_LINKS } from "./navData";

const MobileNav = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        ✕
      </button>

      <div className="h-full flex flex-col justify-center items-center gap-8 text-white">
        <div className="text-xl font-semibold">Explore</div>

        {EXPLORE_LINKS.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            onClick={onClose}
            className="text-lg text-gray-300"
          >
            {item.title}
          </Link>
        ))}

        <div className="w-64 h-px bg-white/10 my-4" />

        {MAIN_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className="text-xl"
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-8 flex flex-col gap-4 w-64">
          <Link to="/packages" className="btn btn-primary btn-lg">
            Plan Your Trip
          </Link>
          <Link to="/login" className="btn btn-outline text-white btn-lg">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
