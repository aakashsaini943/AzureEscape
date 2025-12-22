import { useNavigate } from "react-router-dom";

const NavActions = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex items-center gap-5">
      <button
        onClick={() => navigate("/login")}
        className="text-sm text-gray-200 hover:text-white transition"
      >
        Login
      </button>

      <button
        onClick={() => navigate("/book")}
        className="px-6 py-2 rounded-full text-sm font-semibold text-white hue-cta shadow-lg hover:scale-105 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default NavActions;
