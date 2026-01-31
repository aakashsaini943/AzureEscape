import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_TABS } from "./NavTabs";
import "./Navbar.style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import SecondaryNavbar from "./SecondaryNavbar"; // 👈 ADD THIS

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSheet, setOpenSheet] = useState(false);

  const activePath = location.pathname;

  return (
    <>
      {/* ================= PRIMARY NAVBAR ================= */}
      <header className="mmt-navbar">

        {/* ===== DESKTOP NAVBAR ===== */}
        <div className="desktop-nav">
          <div className="mmt-tabs-wrapper">
            <div className="mmt-tabs">
              {NAV_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activePath === tab.path;

                return (
                  <button
                    key={tab.id}
                    className={`mmt-tab ${isActive ? "active" : ""}`}
                    onClick={() => navigate(tab.path)}
                  >
                    <Icon className="tab-icon" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== MOBILE NAVBAR ===== */}
        <div className="mobile-nav">
          <span className="mobile-logo">AzureEscape</span>

          <button
            className="mobile-more-btn"
            onClick={() => setOpenSheet(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      {/* ================= SECONDARY NAVBAR ================= */}
      <SecondaryNavbar />

      {/* ================= MOBILE BOTTOM SHEET ================= */}
      {openSheet && (
        <div
          className="sheet-backdrop"
          onClick={() => setOpenSheet(false)}
        />
      )}

      <div className={`bottom-sheet ${openSheet ? "open" : ""}`}>
        <div className="sheet-handle" />

        {NAV_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activePath === tab.path;

          return (
            <button
              key={tab.id}
              className={isActive ? "active" : ""}
              onClick={() => {
                navigate(tab.path);
                setOpenSheet(false);
              }}
            >
              <Icon />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
