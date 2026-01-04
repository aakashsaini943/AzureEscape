import { useState } from "react";
import { FARE_TYPES } from "./FareData";

const FareSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState("regular");

  const handleChange = (id) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <section className="fare-section">
      <h4 className="fare-heading">Special Fare Eligibility</h4>

      <div className="fare-grid">
        {FARE_TYPES.map((fare) => {
          const Icon = fare.icon;
          const isActive = selected === fare.id;

          return (
            <button
              key={fare.id}
              type="button"
              onClick={() => handleChange(fare.id)}
              className={`fare-card ${isActive ? "active" : ""}`}
            >
              <div className="fare-icon">
                <Icon />
              </div>

              <div className="fare-info">
                <p className="fare-title">{fare.title}</p>
                <span className="fare-subtitle">{fare.subtitle}</span>
              </div>

              <span className="fare-indicator" />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FareSelector;
