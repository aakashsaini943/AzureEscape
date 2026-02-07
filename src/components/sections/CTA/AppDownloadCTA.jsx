const AppDownloadCTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
      <div
        className="
          max-w-6xl mx-auto
          grid md:grid-cols-2 gap-14 items-center
          rounded-[32px]
          bg-white
          border border-gray-200
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          p-12 md:p-16
        "
      >
        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Mobile Experience
          </span>

          <h3 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Travel smarter with the{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              AzureEscape App
            </span>
          </h3>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Plan trips, manage bookings, track itineraries, and discover
            handpicked destinations — all in one seamless app.
          </p>

          {/* Store Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="
                px-6 py-3
                rounded-xl
                bg-gray-900
                text-white
                font-semibold
                text-sm
                transition-all duration-300
                hover:bg-gray-800
                hover:shadow-lg
              "
            >
              Download on App Store
            </button>

            <button
              className="
                px-6 py-3
                rounded-xl
                border border-gray-300
                text-gray-800
                font-semibold
                text-sm
                transition-all duration-300
                hover:bg-gray-100
              "
            >
              Get it on Play Store
            </button>
          </div>

          {/* Trust hint */}
          <p className="mt-6 text-sm text-gray-500">
            ⭐ Rated 4.8 • Used by 10,000+ travelers
          </p>
        </div>

        {/* Right Preview */}
        <div className="hidden md:flex justify-center">
          <div
            className="
              w-[260px] h-[520px]
              rounded-[36px]
              bg-gradient-to-b from-slate-100 to-white
              border border-gray-200
              shadow-lg
              flex items-center justify-center
              text-gray-400 text-sm
            "
          >
            <img className="w-full h-full rounded-3xl object-contain bg-black" src="/public/images/erik-eastman-4HG5hlhmZg8-unsplash.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
