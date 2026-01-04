const PackageCard = ({
  title,
  duration,
  price,
  description,
  image,
  featured,
}) => {
  return (
    <article
      className="
        group
        relative
        flex flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        border border-gray-200
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Featured Tag */}
        {featured && (
          <span
            className="
              absolute top-4 left-4
              rounded-full
              bg-white/90 backdrop-blur
              px-3 py-1
              text-xs font-semibold
              text-indigo-600
              shadow-sm
            "
          >
            Featured
          </span>
        )}

        {/* Duration */}
        <span
          className="
            absolute bottom-4 right-4
            rounded-full
            bg-black/60
            px-3 py-1
            text-xs font-medium
            text-white
          "
        >
          {duration}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="mt-auto pt-5 flex items-center justify-between">
          {/* Price */}
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-xl font-bold text-gray-900">
              {price}
            </p>
          </div>

          {/* CTA */}
          <button
            className="
              rounded-full
              px-5 py-2.5
              text-sm font-semibold
              text-white
              bg-gradient-to-r from-indigo-500 to-sky-500
              transition-all duration-300
              hover:opacity-90
              active:scale-95
            "
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default PackageCard;
