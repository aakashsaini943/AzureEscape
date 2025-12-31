import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <div className="text-white">
      {/* Trust chips */}
      <div className="flex flex-wrap gap-2">
        <Chip>Verified stays</Chip>
        <Chip>Instant confirmation</Chip>
        <Chip>24/7 support</Chip>
        <Chip>Best price picks</Chip>
      </div>

      <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
        Find Your Perfect Stay
      </h1>

      <p className="mt-4 max-w-2xl text-base md:text-xl text-white/80">
        Search hotels, resorts, and premium stays worldwide — with trusted
        ratings and flexible booking options.
      </p>

      <HeroStats />

      {/* Popular destination quick chips */}
      <div className="mt-10">
        <p className="text-sm text-white/70">Popular right now</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Pill>Goa</Pill>
          <Pill>Dubai</Pill>
          <Pill>Manali</Pill>
          <Pill>Bangkok</Pill>
          <Pill>Paris</Pill>
        </div>
      </div>
    </div>
  );
};

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/85 backdrop-blur">
    {children}
  </span>
);

const Pill = ({ children }) => (
  <button className="rounded-full bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition">
    {children}
  </button>
);

export default HeroContent;
