const NewsletterCTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-sky-200/40 rounded-full blur-3xl" />
      </div>

      <div
        className="
          relative z-10 max-w-4xl mx-auto
          bg-white
          border border-gray-200
          rounded-[32px]
          px-10 py-16
          text-center
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        "
      >
        <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          Weekly Travel Digest
        </span>

        <h3 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Get travel inspiration in your inbox
        </h3>

        <p className="mt-5 text-gray-600 max-w-xl mx-auto text-lg">
          Hand-picked destinations, exclusive deals, and smart travel tips —
          delivered once a week.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="
              w-full sm:w-80
              rounded-xl
              border border-gray-300
              px-4 py-3
              text-gray-800
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-sky-400
            "
          />

          <button
            className="
              px-10 py-3
              rounded-xl
              bg-gradient-to-r from-sky-500 to-indigo-500
              text-white font-semibold
              transition-all duration-300
              hover:shadow-lg
              hover:shadow-sky-500/40
              active:scale-95
            "
          >
            Subscribe
          </button>
        </div>

        {/* Trust hint */}
        <p className="mt-6 text-xs text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
