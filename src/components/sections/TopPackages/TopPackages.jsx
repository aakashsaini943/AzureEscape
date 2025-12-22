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

    const matchesType =
      type === "All" || pkg.type === type;

    return matchesQuery && matchesType;
  });

  return (

    <section className="py-20 bg-linear-to-b from-base-200 to-base-100">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        🎒 Explore Top Packages
      </h2>

      <div className="grid lg:grid-cols-4 gap-10 px-10">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <PackageSearch setQuery={setQuery} />
          <PackageFilter setType={setType} />
        </div>

        {/* Packages */}
        <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default TopPackages;
