import { BsCalendar2Date } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";


const DestinationCard = ({
  name,
  description,
  image,
  duration = "3–5 Days",
  rating = "4.8",
}) => {
  return (
    <article
      className="
        group relative
        w-full
        rounded-3xl
        overflow-hidden
        bg-white
        border border-gray-100
        shadow-[0_12px_40px_rgba(0,0,0,0.12)]
        transition-all duration-400
        hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
      "
    >
      {/* Image */}
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Rating */}
        <span
          className="
            absolute top-3 right-3
            px-3 py-1
            rounded-full
            text-xs font-semibold
            text-white
            bg-black/50 backdrop-blur
          "
        >
          ⭐ {rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          {name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
          <span className="flex gap-1.5 items-center"><BsCalendar2Date /> {duration}</span>
          <span className="flex gap-1.5 items-center"><GrMapLocation /> Popular destination</span>
        </div>

        {/* Divider */}
        <div className="mt-4 h-px bg-gray-200" />

        {/* CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-indigo-600">
            Curated for you
          </span>

          <button
            className="
              px-5 py-2.5
              rounded-full
              text-sm font-medium
              text-white
              bg-indigo-600
              transition-all duration-300
              hover:bg-indigo-700
              active:scale-95
            "
          >
            View 
          </button>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
