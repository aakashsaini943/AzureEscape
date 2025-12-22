const DestinationSearch = ({ setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search destinations..."
      className="input input-bordered w-full"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default DestinationSearch;
