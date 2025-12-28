const AppDownloadCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="
        max-w-6xl mx-auto
        grid md:grid-cols-2 gap-12 items-center
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-12
      ">
        <div>
          <h3 className="text-4xl font-bold">
            Travel smarter with our app
          </h3>

          <p className="mt-6 text-gray-300 text-lg">
            Plan trips, manage bookings, and discover destinations
            — anytime, anywhere.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="btn btn-primary">
              App Store
            </button>
            <button className="btn btn-outline text-white">
              Play Store
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-full h-72 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400">
            App Preview
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
