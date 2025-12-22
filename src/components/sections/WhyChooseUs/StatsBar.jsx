const stats = [
  { value: "50K+", label: "Happy Travelers" },
  { value: "120+", label: "Destinations" },
  { value: "10+", label: "Years Experience" },
  { value: "4.9★", label: "Customer Rating" },
];

const StatsBar = () => {
  return (
    <div className="grid md:grid-cols-4 gap-8 text-center py-12">
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

export default StatsBar;
