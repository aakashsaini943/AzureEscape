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
<section className="
  relative py-32 px-6
  bg-gradient-to-b from-white via-slate-50 to-white
  overflow-hidden
">

      {/* Ambient Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide text-rose-500 uppercase">
            Curated Experiences
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800">
            Top Travel{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Thoughtfully designed journeys with perfect balance of comfort,
            adventure, and unforgettable memories.
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
          <PackageSearch query={query} setQuery={setQuery} />
          <PackageFilter type={type} setType={setType} />
        </div>

        {/* Packages Grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="mt-24 text-center text-gray-500">
            No packages match your search. Try adjusting filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default TopPackages;
