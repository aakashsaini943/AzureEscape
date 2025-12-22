import { useState } from "react";
import { packages } from "./packageData";
import PackageCard from "./PackageCard";
import PackageFilter from "./PackageFilter";
import PackageSearch from "./PackageSearch";

const TopPackages = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const filteredPackages = packages.filter((pkg) => {
    const matchesQuery = pkg.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesType = type === "All" || pkg.type === type;

    return matchesQuery && matchesType;
  });

  return (
    <section className="py-20 items-center flex flex-col bg-linear-to-b from-base-200 to-base-100">
      
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-8 px-10">
        🎒 Explore Top Packages
      </h2>

      {/* TOP CONTROLS (LIKE DESTINATION SECTION) */}
      <div className="px-10 mb-10 space-y-5 ">
        <PackageSearch setQuery={setQuery} />
        <PackageFilter type={type} setType={setType} />
      </div>

      {/* PACKAGES GRID */}
      <div className="px-10 grid md:grid-cols-2 xl:grid-cols-4 gap-10">
        {filteredPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

    </section>
  );
};

export default TopPackages;
