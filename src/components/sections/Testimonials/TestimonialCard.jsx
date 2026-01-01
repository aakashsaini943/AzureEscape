const TestimonialCard = ({ review, name, location }) => {
  return (
    <div
      style={{
        minWidth: "320px",
        maxWidth: "320px",
        flexShrink: 0,
      }}
      className="
        bg-white/80
        backdrop-blur-xl
        border border-gray-200
        rounded-3xl
        p-6
        shadow-md
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Review */}
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
        “{review}”
      </p>

      {/* Divider */}
      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Author */}
      <div className="mt-4">
        <div className="font-semibold text-gray-800">
          {name}
        </div>
        <div className="text-sm text-gray-500">
          {location}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
