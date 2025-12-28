const NewsletterCTA = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-sky-500/20 rounded-full blur-3xl" />
      </div>

      <div
        className="
          relative z-10 max-w-4xl mx-auto
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-3xl
          px-10 py-16
          text-center
          shadow-2xl
        "
      >
        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          Get travel inspiration in your inbox
        </h3>

        <p className="mt-5 text-gray-300 max-w-xl mx-auto text-lg">
          Hand-picked destinations, exclusive deals, and travel tips —
          delivered once a week.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="
              input input-bordered
              bg-black/30
              border-white/20
              text-white
              placeholder-gray-400
              w-full sm:w-80
              focus:outline-none focus:border-sky-400
            "
          />

          <button
            className="
              btn btn-primary px-10
              shadow-lg shadow-sky-500/30
            "
          >
            Subscribe
          </button>
        </div>

        {/* Trust hint */}
        <p className="mt-6 text-xs text-gray-400">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
