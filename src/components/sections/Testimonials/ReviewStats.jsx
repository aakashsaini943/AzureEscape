const stats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "20K+", label: "Verified Reviews" },
  { value: "98%", label: "Customer Satisfaction" },
];

const ReviewStats = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 text-center py-14">
      {stats.map((s, i) => (
        <div key={i}>
          <h3 className="text-4xl font-extrabold text-primary">
            {s.value}
          </h3>
          <p className="opacity-70">{s.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewStats;
