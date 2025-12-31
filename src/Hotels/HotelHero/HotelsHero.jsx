import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";

const HotelsHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background image (use public folder path) */}
      <img
        src="/images/hotels-hero.jpg"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b0?auto=format&fit=crop&w=2400&q=80";
        }}
        alt="Luxury resort hotel"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <HeroOverlay />

      {/* Content zone */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-44 md:pt-32 md:pb-52">
          <HeroContent />
        </div>

        {/* Floating search zone */}
        <div className="relative z-20 -mt-24 md:-mt-28 px-4 pb-12">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
};

export default HotelsHero;
