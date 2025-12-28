import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <Link to="/" className="flex flex-col leading-tight">
      <span className="text-2xl font-bold text-white">
        Azure<span className="text-sky-400">Escape</span>
      </span>
      <span className="text-xs text-gray-400">
        Discover • Plan • Explore
      </span>
    </Link>
  );
};

export default NavBrand;
