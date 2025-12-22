
const DestinationSearch = ({ setQuery }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      
      {/* Search Icon (SVG) */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search destinations, cities or places"
        className="
          w-full
          pl-12 pr-4 py-3
          rounded-xl
          bg-white
          border border-gray-200
          text-gray-700
          placeholder-gray-400
          shadow-sm
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition-all duration-300
        "
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default DestinationSearch;
