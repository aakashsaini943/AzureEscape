const DestinationSearchBanner = ({ query, setQuery, region, setRegion }) => {
  return (
    <section
      className="
        relative
        min-h-[70vh]
        flex items-center
        px-4 sm:px-6
        overflow-hidden
      "
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Travel Banner"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto w-full text-center text-white">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Discover Your Next
          <span className="text-sky-400"> Adventure</span>
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
          Search destinations, compare experiences, and plan unforgettable trips worldwide
        </p>

        {/* Search Bar */}
        <div
          className="
            mt-10
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl
            p-3
            shadow-2xl
          "
        >
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Destination Input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations like Bali, Goa, Paris"
              className="
                flex-1
                px-5 py-3
                rounded-xl
                bg-black/40
                text-white
                placeholder-gray-400
                outline-none
                focus:ring-2 focus:ring-sky-400
              "
            />

            {/* Region Filter */}
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="
                px-5 py-3
                rounded-xl
                bg-black/40
                text-white
                outline-none
                focus:ring-2 focus:ring-sky-400
              "
            >
              <option value="All">All Regions</option>
              <option value="India">India</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Middle East">Middle East</option>
            </select>

            {/* Search Button */}
            <button
              className="
                px-8 py-3
                rounded-xl
                bg-sky-400
                text-white
                font-medium
                transition-all duration-300
                hover:bg-sky-500
              "
            >
              Search
            </button>
          </div>
        </div>

        {/* Supporting Resources */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          {["Popular Trips", "Best Time to Visit", "Budget Friendly", "Top Rated"].map(
            (item) => (
              <span
                key={item}
                className="
                  px-4 py-1.5
                  rounded-full
                  bg-white/10
                  border border-white/20
                  text-gray-200
                "
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DestinationSearchBanner;
