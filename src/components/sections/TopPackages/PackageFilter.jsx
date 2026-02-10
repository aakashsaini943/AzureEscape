const filters = ["All", "Couple", "Family", "Adventure", "Luxury"];

const PackageFilter = ({ type, setType }) => {
  return (
    <div className="w-full px-4 sm:px-0">
      <div className="overflow-x-auto hide-scrollbar">
        <div
          className="
            mx-auto
            w-max
            flex items-center gap-2
            rounded-full
            bg-gradient-to-r from-[#0ea5e9]/80 via-[#0284c7]/80 to-[#0369a1]/80
            backdrop-blur-xl
            border border-white/20
            p-1.5
            shadow-[0_18px_45px_rgba(2,132,199,0.35)]
          "
        >
          {filters.map((f) => {
            const active = type === f;

            return (
              <button
                key={f}
                onClick={() => setType(f)}
                className={`
                  relative
                  min-w-[78px] sm:min-w-fit
                  px-4 sm:px-5
                  py-2.5
                  rounded-full
                  text-sm sm:text-[15px]
                  font-semibold
                  tracking-wide
                  transition-all duration-300 ease-out
                  focus:outline-none
                  ${
                    active
                      ? `
                        bg-gradient-to-r from-[#22d3ee] to-[#34d399]
                        text-[#022c22]
                        shadow-md shadow-cyan-500/30
                      `
                      : `
                        text-white/90
                        hover:bg-white/20
                        hover:text-white
                      `
                  }
                `}
              >
                {f}

                {/* Active glow line */}
                {active && (
                  <span
                    className="
                      absolute inset-x-3 -bottom-1
                      h-[2px]
                      bg-emerald-300
                      rounded-full
                    "
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PackageFilter;
