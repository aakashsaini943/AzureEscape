const HeroStats = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
      <Stat value="50K+" label="Verified Hotels" />
      <Stat value="120+" label="Countries" />
      <Stat value="4.8★" label="Guest Rating" />
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
    <p className="text-2xl md:text-3xl font-bold">{value}</p>
    <p className="mt-1 text-xs md:text-sm text-white/75">{label}</p>
  </div>
);

export default HeroStats;
