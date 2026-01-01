const stats = [
  { label: "Happy Travelers", value: "10k+" },
  { label: "Destinations", value: "500+" },
  { label: "Years Experience", value: "5+" },
  { label: "24/7 Support", value: "Always On" },
];

const StatsBar = () => {
  return (
    <div className="mt-24">
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-2 md:grid-cols-4 gap-8
          rounded-3xl
          bg-gradient-to-r from-white/80 via-white/70 to-white/80
          backdrop-blur-xl
          border border-gray-200
          shadow-md
          px-6 py-10
        "
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              text-center
              transition-transform duration-300
              hover:-translate-y-1
            "
          >
            <div className="
              text-3xl md:text-4xl
              font-extrabold
              bg-gradient-to-r from-sky-500 to-indigo-500
              bg-clip-text text-transparent
            ">
              {stat.value}
            </div>

            <div className="mt-2 text-sm md:text-base text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
