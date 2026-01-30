import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaUserCircle,
  FaGlobe,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaChevronDown
} from "react-icons/fa";
import "./Navbar.style.css";

const SecondaryNavbar = () => {
  const navigate = useNavigate();              // ✅ FIXED
  const [open, setOpen] = useState(null);
  const ref = useRef(null);

  // Close dropdown when clicking outside
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
    <nav className="sec-navbar" ref={ref}>
      <div className="sec-container">

        {/* LEFT */}
        <div className="sec-left">
          <span className="sec-brand">AzureEscape</span>
        </div>

        {/* RIGHT */}
        <div className="sec-right">

          <IconItem icon={FaHeart} label="Wishlist" />

          <IconItem icon={FaQuestionCircle} label="Help" />

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
              type="button"
              className="sec-primary-btn"
              onClick={() => {
                setOpen(null);
                navigate("/login");            // ✅ WORKING
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
      </div>
    </nav>
  );
};

export default SecondaryNavbar;

/* ---------- Small Components ---------- */

const IconItem = ({ icon: Icon, label }) => (
  <button type="button" className="sec-icon-btn">
    {Icon && <Icon />}
    <span>{label}</span>
  </button>
);

const Dropdown = ({ icon: Icon, label, children, open, onToggle, primary }) => (
  <div className="sec-dropdown-wrap">
    <button
      type="button"
      className={`sec-icon-btn ${primary ? "primary" : ""}`}
      onClick={onToggle}
    >
      {Icon && <Icon />}
      <span>{label}</span>
      <FaChevronDown />
    </button>

    {open && <div className="sec-dropdown">{children}</div>}
  </div>
);

const DropdownItem = ({ text, onClick }) => (
  <p
    className="sec-dropdown-item"
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    {text}
  </p>
);
