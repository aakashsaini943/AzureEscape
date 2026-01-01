import { useState } from "react";
import DestinationCard from "./DestinationCard";
import DestinationFilters from "./DestinationFilters";
import DestinationSearch from "./DestinationSearch";
import { destinations } from "./destinationsData";

const PopularDestinations = () => {
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");

  const filteredDestinations = destinations.filter((d) => {
    const matchesRegion =
      region === "All" || d.region === region;

    const matchesQuery = d.name
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesRegion && matchesQuery;
  });

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-sky-50 via-white to-rose-50 overflow-hidden">
      {/* Soft Background Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Handpicked Journeys
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800">
            Popular{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Explore the world’s most loved places, thoughtfully curated
            to inspire your next unforgettable journey.
          </p>
        </div>

        {/* Controls Panel */}
        <div
          className="
            mt-16
            rounded-3xl
            bg-white/70
            backdrop-blur-xl
            border border-gray-200
            shadow-lg
            p-6
            flex flex-col gap-6
          "
        >
          <DestinationSearch query={query} setQuery={setQuery} />
          <DestinationFilters region={region} setRegion={setRegion} />
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {filteredDestinations.map((d) => (
            <DestinationCard key={d.id} {...d} />
          ))}
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="mt-20 text-center text-gray-500">
            No destinations found. Try adjusting your search or filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularDestinations;
