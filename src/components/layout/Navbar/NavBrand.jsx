import { useNavigate } from "react-router-dom";

const NavBrand = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="text-2xl font-extrabold tracking-wide cursor-pointer"
    >
      <span className="text-white">Travel</span>
      <span className="hue-text">X</span>
    </div>
  );
};

export default NavBrand;
