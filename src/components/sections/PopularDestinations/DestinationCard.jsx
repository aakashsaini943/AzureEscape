const DestinationCard = ({ name, description, image }) => {
  return (
    <div
      className="
        relative group
        rounded-[28px]
        overflow-hidden
        bg-gradient-to-br from-rose-50 via-sky-50 to-indigo-50
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        transition-all duration-500
        hover:-translate-y-2
      "
    >
      {/* Decorative Blob */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-16 w-40 h-40 bg-sky-300/40 rounded-full blur-3xl" />

      {/* Image (Rounded Floating Style) */}
      <div className="relative p-5">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="
              w-full h-44 object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {/* Location Title */}
        <h3 className="text-xl font-bold text-gray-800">
          {name}
        </h3>

        {/* Subtitle */}
        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-indigo-500">
            Handpicked ✨
          </span>

          <button
            className="
              px-5 py-2
              rounded-full
              text-sm font-semibold
              text-white
              bg-gradient-to-r from-indigo-500 to-sky-500
              transition-all duration-300
              hover:from-pink-500 hover:to-orange-400
              hover:shadow-lg
              active:scale-95
            "
          >
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
