import { useState } from "react";
import { FARE_TYPES } from "./FareData";

const FareSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState("regular");

  const handleChange = (id) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <section className="w-full py-6 px-3 sm:px-0">
      {/* Heading */}
      <div className="mb-4 px-1">
        <h4 className="text-base md:text-lg font-semibold text-gray-900">
          Special Fare Eligibility
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">
          Swipe on mobile to view more fares
        </p>
      </div>

      {/* Scroll / Grid Container */}
      <div
        className="
          flex gap-3 overflow-x-auto
          snap-x snap-mandatory
          px-2 pb-3
          sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:snap-none
          lg:grid-cols-5
        "
      >
        {FARE_TYPES.map((fare) => {
          const Icon = fare.icon;
          const isActive = selected === fare.id;

          return (
            <button
              key={fare.id}
              type="button"
              onClick={() => handleChange(fare.id)}
              className={`
                snap-start shrink-0
                w-36 sm:w-auto
                group relative
                flex flex-col items-center text-center
                px-3 py-3
                rounded-xl
                border transition-all duration-300
                ${
                  isActive
                    ? "border-sky-500 bg-sky-50 ring-1 ring-sky-200"
                    : "border-gray-200 bg-white hover:border-sky-300 hover:shadow-sm"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  mb-2 flex items-center justify-center
                  w-10 h-10 rounded-full
                  transition-colors duration-300
                  ${
                    isActive
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-sky-100 group-hover:text-sky-600"
                  }
                `}
              >
                <Icon className="text-base" />
              </div>

              {/* Text */}
              <p className="text-xs font-medium text-gray-900 leading-tight">
                {fare.title}
              </p>
              <span className="text-[11px] text-gray-500 mt-0.5">
                {fare.subtitle}
              </span>

              {/* Active Indicator */}
              {isActive && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-sky-500" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FareSelector;
