const filters = ["All", "Asia", "Europe", "Middle East"];

const DestinationFilters = ({ region, setRegion }) => {
  return (
    <div className="flex justify-center">
      <div className="
        inline-flex rounded-full
        bg-white/5 backdrop-blur
        border border-white/10
        p-1
      ">
        {filters.map((f) => {
          const active = region === f;

          return (
            <button
              key={f}
              onClick={() => setRegion(f)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  active
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-400 hover:text-white"
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

export default DestinationFilters;
