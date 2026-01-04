const filters = ["All", "Couple", "Family", "Adventure", "Luxury"];

const PackageFilter = ({ type, setType }) => {
  return (
    <div className="w-full overflow-x-auto px-4 sm:px-0">
      <div
        className="
          mx-auto
          flex w-max items-center gap-1
          rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          p-1
        "
      >
        {filters.map((f) => {
          const active = type === f;

          return (
            <button
              key={f}
              onClick={() => setType(f)}
              className={`
                whitespace-nowrap
                px-4 sm:px-5
                py-2 sm:py-2.5
                rounded-full
                text-sm sm:text-base
                font-medium
                transition-all duration-300
                ${
                  active
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {f}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PackageFilter;
