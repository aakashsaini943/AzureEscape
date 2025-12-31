const HeroSearch = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        {/* Top micro-bar (optional but makes it feel “enterprise”) */}
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <SparkIcon />
            <span className="font-semibold">Smart Search</span>
            <span className="text-slate-500 hidden md:inline">
              — best stays based on your filters
            </span>
          </div>
          <span className="text-xs text-slate-500 hidden md:inline">
            No hidden charges
          </span>
        </div>

        {/* Main segmented form */}
        <form className="p-4 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-0 md:rounded-2xl md:border md:border-slate-200 md:bg-white">
            {/* Destination */}
            <Field className="md:col-span-4 md:rounded-l-2xl md:border-r md:border-slate-200">
              <Label>Destination</Label>
              <div className="flex items-center gap-2">
                <PinIcon />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className={inputBase}
                />
              </div>
            </Field>

            {/* Check-in */}
            <Field className="md:col-span-2 md:border-r md:border-slate-200">
              <Label>Check-in</Label>
              <div className="flex items-center gap-2">
                <CalendarIcon />
                <input type="date" className={inputBase} />
              </div>
            </Field>

            {/* Check-out */}
            <Field className="md:col-span-2 md:border-r md:border-slate-200">
              <Label>Check-out</Label>
              <div className="flex items-center gap-2">
                <CalendarIcon />
                <input type="date" className={inputBase} />
              </div>
            </Field>

            {/* Guests */}
            <Field className="md:col-span-2 md:border-r md:border-slate-200">
              <Label>Guests</Label>
              <div className="flex items-center gap-2">
                <UsersIcon />
                <input
                  type="text"
                  placeholder="2 adults"
                  className={inputBase}
                />
              </div>
            </Field>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="h-[56px] md:h-full w-full rounded-2xl md:rounded-r-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold tracking-wide shadow-[0_18px_45px_rgba(37,99,235,0.45)] transition"
                aria-label="Search hotels"
              >
                Search
              </button>
            </div>
          </div>

          {/* Filters row */}
          <div className="mt-4 flex flex-wrap gap-2">
            <SmallToggle>Free cancellation</SmallToggle>
            <SmallToggle>Breakfast included</SmallToggle>
            <SmallToggle>4★ & above</SmallToggle>
            <SmallToggle>Pay at property</SmallToggle>
          </div>
        </form>
      </div>
    </div>
  );
};

const Field = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white md:bg-transparent border border-slate-200 md:border-0 p-4 ${className}`}>
    {children}
  </div>
);

const Label = ({ children }) => (
  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
    {children}
  </label>
);

const SmallToggle = ({ children }) => (
  <button
    type="button"
    className="rounded-full border border-slate-200 bg-white/70 hover:bg-white px-4 py-2 text-sm text-slate-700 transition"
  >
    {children}
  </button>
);

const inputBase =
  "w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-sm md:text-base";

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-500">
    <path d="M12 22s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-500">
    <path d="M7 3v3M17 3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M4 9h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-500">
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M22 21v-2a4 4 0 0 0-3-3.87"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M16 3.13a4 4 0 0 1 0 7.75"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const SparkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-600">
    <path
      d="M12 2l1.5 6L20 10l-6.5 2L12 22l-1.5-10L4 10l6.5-2L12 2Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeroSearch;
