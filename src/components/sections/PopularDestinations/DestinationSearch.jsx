const destinations = [
  {
    title: "Maldives",
    subtitle: "Overwater Villas",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    title: "Paris",
    subtitle: "Timeless Romance",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "Santorini",
    subtitle: "Aegean Serenity",
    image: "https://images.unsplash.com/photo-1505731132164-cca5fcbad5b3",
  },
];

const LuxuryDestinationShowcase = () => {
  return (
    <section className="bg-[#2c2c2e] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="block mb-5 text-xs tracking-[0.35em] uppercase text-amber-300/80">
            Curated Journeys
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
            Destinations designed for
            <span className="block font-semibold mt-2">quiet luxury</span>
          </h2>
        </div>

        {/* Showcase */}
        <div className="space-y-28">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Block */}
              <div className="relative h-[520px] rounded-[32px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Soft cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Text Block */}
              <div className="max-w-md">
                <h3 className="text-3xl font-light text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm tracking-widest uppercase text-amber-300/80">
                  {item.subtitle}
                </p>

                <p className="mt-6 text-gray-300 leading-relaxed">
                  Experience a destination where every detail is curated —
                  from the landscapes to the moments that stay with you.
                </p>

                <button
                  className="
                    mt-8
                    text-sm
                    tracking-wide
                    text-amber-300
                    border-b border-amber-300/40
                    hover:border-amber-300
                    transition
                  "
                >
                  View journey →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LuxuryDestinationShowcase;
