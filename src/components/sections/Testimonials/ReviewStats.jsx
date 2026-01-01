const stats = [
  { label: "Average Rating", value: "4.8 / 5" },
  { label: "Verified Reviews", value: "2k+" },
  { label: "Happy Travelers", value: "10k+" },
];

const ReviewStats = () => {
  return (
    <div className="mt-20">
      <div
        className="
          max-w-5xl mx-auto
          grid gap-8 sm:grid-cols-3
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
            className="text-center"
          >
            <div
              className="
                text-3xl md:text-4xl font-extrabold
                bg-gradient-to-r from-sky-400 to-indigo-500
                bg-clip-text text-transparent
              "
            >
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

export default ReviewStats;
