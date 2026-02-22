import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaUserCircle,
  FaGlobe,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const SecondaryNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <nav
      className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP BAR */}
        <div className="h-14 flex items-center justify-between">
          <span
            className="text-lg font-bold text-sky-600 cursor-pointer
             animate-[float_3s_ease-in-out_infinite]"
            onClick={() => navigate("/")}
          >
            AzureEscape
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <IconItem
              icon={FaHeart}
              label="Wishlist"
              onClick={() => navigate("/wishlist")}
            />
            <IconItem
              icon={FaQuestionCircle}
              label="Help"
              onClick={() => navigate("/Help")}
            />

            <Dropdown
              label="INR"
              icon={FaMoneyBillWave}
              open={open === "currency"}
              onToggle={() => toggle("currency")}
            >
              <DropdownItem text="INR – Indian Rupee" />
              <DropdownItem text="USD – US Dollar" />
              <DropdownItem text="EUR – Euro" />
            </Dropdown>

            <Dropdown
              label="English"
              icon={FaGlobe}
              open={open === "lang"}
              onToggle={() => toggle("lang")}
            >
              <DropdownItem text="English" />
              <DropdownItem text="Hindi" />
              <DropdownItem text="French" />
            </Dropdown>

            <Dropdown
              label="Login / Sign Up"
              icon={FaUserCircle}
              open={open === "login"}
              onToggle={() => toggle("login")}
              primary
            >
              <button
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                onClick={() => {
                  setOpen(null);
                  navigate("/login");
                }}
              >
                Login
              </button>

              <DropdownItem
                text="Create new account"
                onClick={() => {
                  setOpen(null);
                  navigate("/signup");
                }}
              />
            </Dropdown>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-lg"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE PANEL */}
        {mobileMenu && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileItem
              icon={FaHeart}
              label="Wishlist"
              onClick={() => navigate("/wishlist")}
            />
            <MobileItem
              icon={FaQuestionCircle}
              label="Help"
              onClick={() => navigate("/Help")}
            />

            <Dropdown
              label="Currency"
              icon={FaMoneyBillWave}
              open={open === "currency"}
              onToggle={() => toggle("currency")}
              mobile
            >
              <DropdownItem text="INR – Indian Rupee" />
              <DropdownItem text="USD – US Dollar" />
              <DropdownItem text="EUR – Euro" />
            </Dropdown>

            <Dropdown
              label="Language"
              icon={FaGlobe}
              open={open === "lang"}
              onToggle={() => toggle("lang")}
              mobile
            >
              <DropdownItem text="English" />
              <DropdownItem text="Hindi" />
              <DropdownItem text="French" />
            </Dropdown>

            <button
              className="w-full bg-sky-500 text-white py-2.5 rounded-lg text-sm font-medium"
              onClick={() => navigate("/login")}
            >
              Login / Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SecondaryNavbar;

/* ---------- Components ---------- */

const IconItem = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
  >
    <Icon className="text-gray-600" />
    <span>{label}</span>
  </button>
);

const MobileItem = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 text-sm"
  >
    <Icon className="text-gray-600" />
    <span>{label}</span>
  </button>
);

const Dropdown = ({
  icon: Icon,
  label,
  children,
  open,
  onToggle,
  primary,
  mobile,
}) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                  hover:bg-gray-100 w-full ${primary ? "bg-sky-500 text-white hover:bg-sky-600" : ""}`}
    >
      <Icon />
      <span className="flex-1 text-left">{label}</span>
      <FaChevronDown
        className={`text-xs transition ${open ? "rotate-180" : ""}`}
      />
    </button>

    {open && (
      <div
        className={`mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden ${mobile ? "" : "absolute right-0 w-56"}`}
      >
        {children}
      </div>
    )}
  </div>
);

const DropdownItem = ({ text, onClick }) => (
  <p
    onClick={onClick}
    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
  >
    {text}
  </p>
);
