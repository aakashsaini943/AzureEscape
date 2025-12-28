const DestinationCard = ({ name, description, image }) => {
  return (
    <div
      className="
        group
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl
        overflow-hidden
        shadow-xl
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-gray-300">
          {description}
        </p>

        <button className="btn btn-sm btn-primary mt-4">
          View Trips
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
