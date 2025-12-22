const filters = ["All", "Asia", "Europe", "Middle East"];

const DestinationFilters = ({ setRegion }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((f) => (
        <button
          key={f}
          className="btn btn-outline"
          onClick={() => setRegion(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default DestinationFilters;
