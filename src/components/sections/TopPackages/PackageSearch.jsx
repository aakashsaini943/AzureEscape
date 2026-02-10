const PackageSearch = ({ query, setQuery }) => {
  return (
    <div className="w-full px-4 sm:px-0">
      <div className="relative max-w-md sm:max-w-lg md:max-w-xl mx-auto group">
        
        {/* Search Icon */}
        <span
          className="
            pointer-events-none
            absolute left-4 top-1/2 -translate-y-1/2
            text-sky-500 text-base
            transition-all duration-300
            group-focus-within:scale-110
          "
        >
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
            pl-11 pr-5
            rounded-2xl
            bg-white
            border border-sky-200
            text-slate-800
            placeholder-slate-400
            text-sm sm:text-base

            shadow-md shadow-sky-100/60
            transition-all duration-300 ease-out
            focus:outline-none
            focus:border-sky-400
            focus:ring-2 focus:ring-sky-300/40
            focus:shadow-sky-200/60
            focus:-translate-y-[1px]
          "
        />

        {/* focus underline */}
        <span
          className="
            pointer-events-none
            absolute inset-x-4 bottom-1
            h-[2px]
            bg-gradient-to-r from-sky-400 to-cyan-400
            rounded-full
            opacity-0
            scale-x-0
            transition-all duration-300
            group-focus-within:opacity-100
            group-focus-within:scale-x-100
          "
        />
      </div>
    </div>
  );
};

export default PackageSearch;
