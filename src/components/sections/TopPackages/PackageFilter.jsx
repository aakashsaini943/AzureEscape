const PackageFilter = ({ setType }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Filter By</h3>

      {["All", "Luxury", "Adventure", "Romantic"].map((type) => (
        <button
          key={type}
          className="btn btn-outline w-full"
          onClick={() => setType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PackageFilter;
