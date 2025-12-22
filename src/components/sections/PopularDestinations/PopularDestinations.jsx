import { useState } from "react";
import { destinations } from "./destinationsData";
import DestinationCard from "./DestinationCard";
import DestinationSearch from "./DestinationSearch";
import DestinationFilters from "./DestinationFilters";

const PopularDestinations = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");

  const filteredDestinations = destinations.filter((d) => {
    const matchesQuery = d.name
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesRegion =
      region === "All" || d.region === region;

    return matchesQuery && matchesRegion;
  });

  return (
    

    <section className="py-28 bg-linear-to-b from-base-100 to-base-200">
      <h2 className="text-5xl font-extrabold text-center mb-6">
        🌍 Popular Destinations
      </h2>

      <p className="text-center max-w-2xl mx-auto opacity-80 mb-14">
        Explore handpicked destinations loved by thousands of travelers worldwide.
      </p>

      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 mb-12 space-y-6">
        <DestinationSearch setQuery={setQuery} />
        <DestinationFilters setRegion={setRegion} />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {filteredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </section>
 
  );
};

export default PopularDestinations;
