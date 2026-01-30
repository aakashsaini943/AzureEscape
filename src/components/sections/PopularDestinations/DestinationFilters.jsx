import { useEffect, useState } from "react";

const filters = ["All", "Asia", "Europe", "Middle East"];

const DestinationFilters = ({ region, setRegion }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 220);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed left-1/2 -translate-x-1/2 z-40
        transition-all duration-500 ease-out
        ${
          visible
            ? "bottom-4 opacity-100 translate-y-0"
            : "bottom-0 opacity-0 translate-y-3 pointer-events-none"
        }
      `}
    >
      <div
        className="
          flex gap-5 sm:gap-7
          px-5 sm:px-7 py-2.5
          rounded-full
          bg-black/70 backdrop-blur-xl
          border border-white/10
          shadow-[0_14px_40px_rgba(0,0,0,0.6)]
        "
      >
        {filters.map((f) => {
          const active = region === f;

          return (
            <button
              key={f}
              onClick={() => setRegion(f)}
              className={`
                relative whitespace-nowrap
                text-[10px] sm:text-[11px]
                uppercase tracking-[0.25em]
                transition-colors duration-300
                ${
                  active
                    ? "text-amber-300"
                    : "text-gray-400 hover:text-white"
                }
                active:translate-y-px
              `}
            >
              {f}

              {/* Active underline */}
              <span
                className={`
                  absolute left-1/2 -bottom-1.5
                  -translate-x-1/2
                  h-px w-6
                  bg-amber-300
                  transition-opacity duration-300
                  ${active ? "opacity-100" : "opacity-0"}
                `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DestinationFilters;
 