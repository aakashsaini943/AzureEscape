const PackageCard = ({
  title,
  duration,
  price,
  description,
  image,
  featured,
}) => {
  return (
    <div
      className={`
        group relative
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl
        overflow-hidden
        shadow-xl
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
        ${featured ? "ring-2 ring-sky-400/50" : ""}
      `}
    >
      {/* Featured badge */}
      {featured && (
        <span className="
          absolute top-4 left-4 z-10
          bg-sky-500 text-white
          text-xs font-semibold
          px-3 py-1 rounded-full
        ">
          Featured
        </span>
      )}

      {/* Image */}
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
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
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="mt-2 text-sm text-gray-300">
          {duration}
        </div>

        <p className="mt-3 text-sm text-gray-300">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sky-400 font-bold text-lg">
            {price}
          </span>

          <button className="btn btn-sm btn-primary">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
