const stats = [
  { label: "Average Rating", value: "4.8/5" },
  { label: "Verified Reviews", value: "2k+" },
  { label: "Happy Travelers", value: "10k+" },
];

const ReviewStats = () => {
  return (
    <div className="mt-16">
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              bg-white/5 backdrop-blur
              border border-white/10
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

export default ReviewStats;
