const PackageSearch = ({ query, setQuery }) => {
  return (
    <div className="w-full px-4 sm:px-0">
      <div className="relative max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        {/* Search Icon */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-sm">
          🔍
        </span>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search travel packages"
          className="
            w-full
            h-12 sm:h-14
            pl-11 pr-4
            rounded-xl
            bg-white/15
            backdrop-blur-md
            border border-white/20
            text-white
            placeholder-white/60
            text-sm sm:text-base
            focus:outline-none
            focus:ring-2 focus:ring-sky-400/60
            focus:border-sky-400
            transition
          "
        />
      </div>
    </div>
  );
};

export default PackageSearch;
