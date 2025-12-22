const PackageSearch = ({ setQuery }) => {
  return (
    <div className="w-full mb-6 ">
      
      {/* Search Input */}
      <div className="relative w-full ">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search packages or destinations"
          className="
            w-120 pl-12 pr-4 py-3
            rounded-xl
            bg-white
            border border-gray-300
            text-gray-700 text-sm
            placeholder:text-gray-400
            focus:outline-none
            focus:ring-2 focus:ring-primary
            transition-all duration-300
          "
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

    </div>
  );
};

export default PackageSearch;
