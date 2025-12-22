const DestinationCard = ({ destination }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer">
      <img
        src={destination.image}
        alt={destination.name}
        className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-3xl font-extrabold">
          {destination.name}
        </h3>
        <p className="text-sm opacity-80">
          {destination.country} • {destination.trips}+ trips
        </p>
      </div>

      <span className="absolute top-4 right-4 badge badge-secondary">
        {destination.type}
      </span>
    </div>
  );
};

export default DestinationCard;
