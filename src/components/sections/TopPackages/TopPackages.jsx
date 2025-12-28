import { useState } from "react";
import PackageCard from "./PackageCard";
import PackageFilter from "./PackageFilter";
import PackageSearch from "./PackageSearch";
import { packages } from "./packageData";

const TopPackages = () => {
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPackages = packages.filter((p) => {
    const matchesType =
      type === "All" || p.type === type;

    const matchesQuery = p.title
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesType && matchesQuery;
  });

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            Top Travel{" "}
            <span className="text-sky-400">Packages</span>
          </h2>

          <p className="mt-5 text-gray-300 text-lg">
            Handcrafted travel packages designed for every kind of traveler.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-6">
          <PackageSearch query={query} setQuery={setQuery} />
          <PackageFilter type={type} setType={setType} />
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPackages;
