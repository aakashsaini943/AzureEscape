import { Link } from "react-router-dom";

const PrimaryCTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/25 rounded-full blur-3xl" />
      </div>

      <div className="
        relative z-10 max-w-5xl mx-auto
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl
        px-8 py-16
        text-center
        shadow-2xl
      ">
        <h2 className="text-4xl font-bold">
          Your next journey starts{" "}
          <span className="text-sky-400">here</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Explore curated destinations, exclusive travel packages,
          and seamless booking experiences.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/destinations" className="btn btn-primary px-10">
            Explore Destinations
          </Link>

          <Link to="/login" className="btn btn-outline text-white px-10">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrimaryCTA;
