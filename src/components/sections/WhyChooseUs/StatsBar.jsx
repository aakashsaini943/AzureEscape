const stats = [
  { label: "Happy Travelers", value: "10k+" },
  { label: "Destinations", value: "500+" },
  { label: "Years Experience", value: "5+" },
  { label: "Support", value: "24/7" },
];

const StatsBar = () => {
  return (
    <div className="mt-20">
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-2 md:grid-cols-4 gap-6
        "
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              bg-white/10 backdrop-blur
              border border-white/20
              rounded-xl
              py-6
              text-center
            "
          >
            <div className="text-2xl font-bold text-sky-400">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
