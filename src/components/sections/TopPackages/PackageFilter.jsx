const filters = ["All", "Couple", "Family", "Adventure", "Luxury"];

const PackageFilter = ({ type, setType }) => {
  return (
    <div className="flex justify-center">
      <div
        className="
          inline-flex rounded-full
          bg-white/5 backdrop-blur
          border border-white/10
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

export default PackageFilter;
