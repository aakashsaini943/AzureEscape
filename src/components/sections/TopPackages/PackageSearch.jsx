const PackageSearch = ({ setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search destinations, packages..."
      className="input input-bordered w-full"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default PackageSearch;
