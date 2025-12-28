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
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            Popular{" "}
            <span className="text-sky-400">Destinations</span>
          </h2>

          <p className="mt-5 text-gray-300 text-lg">
            Explore some of the world’s most loved travel destinations,
            curated for unforgettable experiences.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-6">
          <DestinationSearch query={query} setQuery={setQuery} />
          <DestinationFilters region={region} setRegion={setRegion} />
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredDestinations.map((d) => (
            <DestinationCard key={d.id} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
