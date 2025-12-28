import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Soft gradient shade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="text-white">
            <span className="
              inline-block mb-6 px-4 py-2
              bg-white/10 backdrop-blur
              border border-white/20
              rounded-full text-sm
            ">
              ✈️ Premium Travel Experiences
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              Travel Beyond{" "}
              <span className="text-sky-400">Limits</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
              Discover hand-picked destinations, thoughtfully designed journeys,
              and seamless travel planning — all powered by a modern,
              cloud-first experience.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/destinations"
                className="btn btn-primary btn-lg px-10 shadow-lg shadow-sky-500/30"
              >
                Explore Trips
              </Link>

              <button className="btn btn-outline btn-lg text-white px-10">
                Watch Video
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-300">
              <div>🌍 500+ Destinations</div>
              <div>⭐ 10k+ Happy Travelers</div>
              <div>🔒 Secure Payments</div>
            </div>
          </div>

          {/* RIGHT: Glass Info Card */}
          <div className="hidden lg:block">
            <div
              className="
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-3xl
                p-8
                shadow-2xl
              "
            >
              <h3 className="text-2xl font-semibold text-white">
                Why AzureEscape?
              </h3>

              <ul className="mt-6 space-y-4 text-gray-200">
                <li>✔ Curated premium travel packages</li>
                <li>✔ Transparent pricing, no surprises</li>
                <li>✔ 24/7 travel assistance</li>
                <li>✔ Cloud-powered booking experience</li>
              </ul>

              <div className="mt-8 bg-white/5 rounded-2xl p-4 text-sm text-gray-300">
                “A seamless and premium travel platform built for modern
                explorers.”
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
