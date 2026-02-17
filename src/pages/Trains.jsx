import { useEffect, useState } from "react";
import {
  FaTrain,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChair,
  FaSearch,
  FaExternalLinkAlt,
} from "react-icons/fa";

const features = [
  {
    icon: FaMapMarkerAlt,
    title: "Smart Route Search",
    desc: "Find the fastest and most affordable train routes instantly.",
  },
  {
    icon: FaCalendarAlt,
    title: "Flexible Dates",
    desc: "Check availability across multiple dates with ease.",
  },
  {
    icon: FaChair,
    title: "Seat Preferences",
    desc: "Choose your preferred class and seating options.",
  },
];

const thirdPartyTrains = [
  {
    name: "IRCTC",
    desc: "Official Indian Railways ticket booking platform.",
    url: "https://www.irctc.co.in",
  },
  {
    name: "ConfirmTkt",
    desc: "Predict seat availability & book train tickets easily.",
    url: "https://www.confirmtkt.com",
  },
  {
    name: "MakeMyTrip Trains",
    desc: "Book train tickets with deals & travel bundles.",
    url: "https://www.makemytrip.com/railways/",
  },
];

const Trains = () => {
  const [show, setShow] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 px-4">
      
      {/* Ambient background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* HERO */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 px-4 py-1 text-xs font-semibold text-slate-900 shadow">
            <FaTrain /> RAIL BOOKINGS
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Book Trains,
            <span className="block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Without the Hassle
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Search routes, check availability, and book train tickets in seconds
            with a smooth, reliable experience.
          </p>
        </div>

        {/* SEARCH CARD */}
        <div
          className={`mt-14 mx-auto max-w-4xl rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl p-6 sm:p-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              placeholder="From Station"
              className="w-full rounded-xl border text-black border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
            />
            <input
              placeholder="To Station"
              className="w-full rounded-xl border text-black border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
            />
            <input
              type="date"
              className="w-full rounded-xl border text-black border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <FaSearch /> Search Trains
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-3xl bg-white p-6 border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-200/30 to-indigo-200/30 opacity-0 blur-xl transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-400 text-white shadow">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* THIRD-PARTY RESULTS */}
        {showResults && (
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900">
              Available via Third-Party Train Services
            </h2>

            <p className="text-center text-gray-600 mt-2">
              Compare fares & check seat availability with trusted platforms.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {thirdPartyTrains.map((train, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white flex items-center justify-center text-lg shadow-md">
                    <FaTrain />
                  </div>

                  <h3 className="mt-4 text-lg text-black font-bold">{train.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {train.desc}
                  </p>

                  <a
                    href={train.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700"
                  >
                    Book Tickets <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              You will be redirected to external booking websites.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trains;
