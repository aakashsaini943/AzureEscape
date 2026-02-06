import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";

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
          <span className="sec-brand" onClick={() => navigate("/")}>
  AzureEscape
</span>

        </div>

        {/* RIGHT */}
        {/* RIGHT */}
<div className="sec-right">

  {/* LOGIN – ALWAYS VISIBLE */}
  <Dropdown
    label="Login"
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

  {/* THREE DOT MENU */}
  <div className="sec-dropdown-wrap mobile-only">
    <button
      type="button"
      className="sec-icon-btn"
      onClick={() => toggle("more")}
      aria-label="More options"
    >
      <FaEllipsisV />
    </button>

    {open === "more" && (
      <div className="sec-dropdown">

        <IconItem icon={FaHeart} label="Wishlist" />
        <IconItem icon={FaQuestionCircle} label="Help" />

        <DropdownItem text="INR – Indian Rupee" />
        <DropdownItem text="USD – US Dollar" />

        <DropdownItem text="English" />
        <DropdownItem text="Hindi" />

      </div>
    )}
  </div>

  {/* DESKTOP ITEMS (UNCHANGED) */}
  <div className="desktop-only">
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
    </Dropdown>

    <Dropdown
      label="English"
      icon={FaGlobe}
      open={open === "lang"}
      onToggle={() => toggle("lang")}
    >
      <DropdownItem text="English" />
      <DropdownItem text="Hindi" />
    </Dropdown>
  </div>

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
