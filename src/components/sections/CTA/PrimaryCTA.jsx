import { Link } from "react-router-dom";

const PrimaryCTA = () => {
  return (
    <section className="relative py-36 px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Ambient premium glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-gradient-to-r from-sky-200/50 via-indigo-200/50 to-pink-200/50 blur-3xl rounded-full" />
      </div>

      <div
        className="
          relative max-w-5xl mx-auto
          rounded-[44px]
          bg-white
          border border-gray-200
          shadow-[0_40px_120px_rgba(0,0,0,0.10)]
          px-10 md:px-16 py-20
          text-center
        "
      >
        {/* Micro label */}
        <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          Start Your Journey
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Your next journey{" "}
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            starts here
          </span>
        </h2>

        <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Discover curated destinations, hand-crafted travel packages,
          and seamless booking experiences designed around you.
        </p>

        {/* Primary actions */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
          <Link
            to="/destinations"
            className="
              inline-flex items-center justify-center
              px-12 py-4
              rounded-2xl
              bg-gradient-to-r from-sky-500 to-indigo-500
              text-white font-semibold text-base
              transition-all duration-300
              hover:shadow-[0_20px_50px_rgba(56,189,248,0.45)]
              active:scale-95
            "
          >
            Explore Destinations
          </Link>

          <Link
            to="/login"
            className="
              inline-flex items-center justify-center
              px-12 py-4
              rounded-2xl
              border border-gray-300
              text-gray-900 font-semibold text-base
              transition-all duration-300
              hover:bg-gray-100
              active:scale-95
            "
          >
            Get Started
          </Link>
        </div>

        {/* Trust reinforcement */}
        <p className="mt-10 text-sm text-gray-500">
          Trusted by 10,000+ travelers worldwide
        </p>
      </div>
    </section>
  );
};

export default PrimaryCTA;
