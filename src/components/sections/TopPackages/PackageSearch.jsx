const PackageSearch = ({ query, setQuery }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search packages..."
        className="
          input input-bordered w-full
          bg-black/30
          border-white/20
          text-white
          placeholder-gray-400
          focus:border-sky-400
        "
      />
    </div>
  );
};

export default PackageSearch;
