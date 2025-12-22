const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
      }}
    >
      <div className="absolute " />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center max-w-2xl text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            Travel Beyond Limits ✈️
          </h1>
          <p className="text-lg opacity-90 mb-6">
            Colorful journeys, unforgettable memories, curated experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary btn-lg">Explore Trips</button>
            <button className="btn btn-outline btn-lg text-white">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
