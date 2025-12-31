import { useState, useRef, useEffect } from "react";
import { HERO_TABS } from "./heroTabsData";

const HeroTabs = () => {
  const [active, setActive] = useState("flights");
  const indicatorRef = useRef(null);
  const tabRefs = useRef({});

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
              onClick={() => setActive(tab.id)}
              className={`mmt-tab ${isActive ? "active" : ""}`}
            >
              <Icon className="tab-icon" />
              <span className="tab-label">{tab.label}</span>
              {tab.badge && <span className="tab-badge">{tab.badge}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTabs;
