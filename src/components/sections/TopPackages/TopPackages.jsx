import { useState } from "react";
import PackageCard from "./PackageCard";
import PackageFilter from "./PackageFilter";
import PackageSearch from "./PackageSearch";
import { packages } from "./packageData";

const TopPackages = () => {
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPackages = packages.filter((p) => {
    const matchesType = type === "All" || p.type === type;
    const matchesQuery = p.title
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesType && matchesQuery;
  });

  return (
    <section
      className="
        relative
        py-20 sm:py-24 lg:py-32
        px-4 sm:px-6
        bg-gradient-to-b from-red-100 via-slate-50 to-white
        overflow-hidden
      "
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-sky-150/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[420px] h-[420px] bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-rose-500 uppercase">
            Curated Experiences
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Top Travel{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Thoughtfully designed journeys balancing comfort, adventure,
            and unforgettable experiences.
          </p>
        </div>

        {/* Controls */}
    <div
  className="
    mt-14 sm:mt-16
    rounded-2xl sm:rounded-3xl
    bg-white/80
    backdrop-blur-2xl
    border border-gray-200/60
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    p-4 sm:p-6
    flex flex-col gap-5 sm:gap-6
  "
>
  <PackageSearch query={query} setQuery={setQuery} />
  <div className="h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
  <PackageFilter type={type} setType={setType} />
</div>


        {/* Grid */}
        <div
          className="
            mt-16 sm:mt-18 lg:mt-22
            grid gap-6 sm:gap-8 lg:gap-10
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          "
        >
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm sm:text-base">
              No packages match your search.
            </p>
            <p className="mt-1 text-gray-400 text-xs sm:text-sm">
              Try adjusting filters or search terms.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopPackages;
