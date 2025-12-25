const PrimaryCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-fuchsia-600 via-pink-600 to-rose-600 text-white shadow-2xl p-12">
      <div className="absolute inset-0 opacity-20 background: radial-gradient(circle at top, white, transparent 60%);" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">
          Your Next Adventure Starts Here 🌍
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Handpicked destinations, best prices, and zero stress planning.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn btn-secondary btn-lg shadow-xl">
            Book a Trip ✈️
          </button>
          <button className="btn btn-outline btn-lg text-white">
            Explore Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCTA;
