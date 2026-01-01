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
      className="
        group relative
        rounded-[28px]
        overflow-hidden
        bg-gradient-to-br from-rose-50 via-white to-sky-50
        shadow-[0_25px_70px_rgba(0,0,0,0.12)]
        transition-all duration-500
        hover:-translate-y-3
      "
    >
      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-300/30 to-sky-300/30 blur-2xl" />

      {/* Featured Ribbon */}
      {featured && (
        <div className="absolute top-5 right-5 z-10">
          <span className="px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
            ★ Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative p-5">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="
              w-full h-48 object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* Floating Duration */}
        <span className="absolute bottom-8 left-8 px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-700 shadow">
          {duration}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Divider */}
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-indigo-500">
              {price}
            </p>
          </div>

          <button
            className="
              px-6 py-3
              rounded-full
              text-sm font-semibold
              text-white
              bg-gradient-to-r from-indigo-500 to-sky-500
              transition-all duration-300
              hover:from-pink-500 hover:to-orange-400
              hover:shadow-[0_10px_30px_rgba(236,72,153,0.5)]
              active:scale-95
            "
          >
            Book Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
