import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HERO_TABS } from "./heroTabsData";

const HeroTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState("flights");
  const indicatorRef = useRef(null);
  const tabRefs = useRef({});

  // Sync active tab with URL
  useEffect(() => {
    const current = HERO_TABS.find(
      (tab) => tab.path === location.pathname
    );
    if (current) setActive(current.id);
    
  }, [location.pathname]);

  // Move indicator
  useEffect(() => {
    const node = tabRefs.current[active];
    if (!node || !indicatorRef.current) return;

    indicatorRef.current.style.width = `${node.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${node.offsetLeft}px)`;
  }, [active]);

  return (
    <div className="mmt-tabs-wrapper">
      <div className="mmt-tabs">
        <span ref={indicatorRef} className="mmt-tab-indicator" />

        {HERO_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[tab.id] = el)}
              onClick={() => {
                setActive(tab.id);
                navigate(tab.path);
              }}
              className={`mmt-tab ${isActive ? "active" : ""}`}
            >
              <Icon className="tab-icon" />
              <span className="tab-label">{tab.label}</span>
              {tab.badge && (
                <span className="tab-badge">{tab.badge}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTabs;
