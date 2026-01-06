const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        group relative h-full
        bg-white
        border border-gray-100
        rounded-3xl
        p-8
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:shadow-[0_22px_50px_rgba(0,0,0,0.14)]
      "
    >
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-sky-400 to-indigo-500" />

      {/* Soft ambient glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-sky-100/40 to-indigo-100/40" />

      {/* Icon badge */}
      <div className="relative z-10 flex items-center justify-center mx-auto mb-6">
        <div
          className="
            flex items-center justify-center
            w-16 h-16
            rounded-2xl
            bg-gradient-to-br from-sky-50 to-indigo-50
            text-indigo-600
            ring-1 ring-indigo-100
            transition-transform duration-500
            group-hover:scale-110
          "
        >
          <Icon size={34} />
        </div>
      </div>

      {/* Title */}
      <h4 className="relative z-10 text-lg font-semibold text-gray-900 text-center">
        {title}
      </h4>

      {/* Divider */}
      <div className="relative z-10 mx-auto mt-3 mb-4 h-px w-10 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-40" />

      {/* Description */}
      <p className="relative z-10 text-sm text-gray-600 leading-relaxed text-center">
        {description}
      </p>

      {/* Micro CTA */}
      <div className="relative z-10 mt-6 flex justify-center">
        <span
          className="
            inline-flex items-center gap-1
            text-xs font-semibold
            text-indigo-600
            opacity-80
            transition-opacity
            group-hover:opacity-100
          "
        >
          Learn more
          <svg
            className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
