const filters = ["All", "Luxury", "Adventure", "Romantic"];

const PackageFilter = ({ type, setType }) => {
  return (
    <div className="w-full mb-8">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Top Packages
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Explore curated travel experiences
      </p>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setType(item)}
            className={`
              px-6 py-2.5 rounded-full text-sm font-medium
              transition-all duration-300
              border
              ${
                type === item
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-primary/10 hover:text-primary"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PackageFilter;
