import { useEffect, useState } from "react";
import {
  FaPlane,
  FaExchangeAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaSearch,
  FaExternalLinkAlt,
} from "react-icons/fa";

const features = [
  {
    icon: FaExchangeAlt,
    title: "Flexible Routes",
    desc: "Search one-way, round-trip, or multi-city flights easily.",
  },
  {
    icon: FaCalendarAlt,
    title: "Smart Date Selection",
    desc: "View the best fares across flexible travel dates.",
  },
  {
    icon: FaUserFriends,
    title: "Cabin & Travellers",
    desc: "Choose economy, premium, or business class options.",
  },
];

const thirdPartyFlights = [
  {
    name: "Skyscanner",
    desc: "Compare flight fares across airlines & booking sites.",
    url: "https://www.skyscanner.co.in",
  },
  {
    name: "MakeMyTrip",
    desc: "Book domestic & international flights with deals.",
    url: "https://www.makemytrip.com/flights/",
  },
  {
    name: "Cleartrip",
    desc: "Simple & fast flight booking experience.",
    url: "https://www.cleartrip.com/flights",
  },
];

const Flights = () => {
  const [show, setShow] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-sky-50 py-20 px-4">
      
      {/* Ambient background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-indigo-400 px-4 py-1 text-xs font-semibold text-sky-900 shadow">
            <FaPlane /> FLIGHT BOOKINGS
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Fly Smarter,
            <span className="block bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Travel Further
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Compare fares, choose the best airlines, and book flights with
            confidence at the best prices.
          </p>
        </div>

        {/* SEARCH CARD */}
        <div
          className={`mt-14 mx-auto max-w-5xl rounded-3xl bg-white/80 backdrop-blur-xl border border-sky-200 shadow-xl p-6 sm:p-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-end">
            
            <div>
              <label className="text-xs font-semibold text-gray-500">From</label>
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Departure City"
                className="mt-1 w-full rounded-xl border border-sky-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="text-xs font-semibold text-gray-500">To</label>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Destination City"
                className="mt-1 w-full rounded-xl border border-sky-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
              />

              <button
                onClick={swap}
                className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full bg-white border border-sky-200 p-2 text-sky-600 shadow hover:bg-sky-50"
              >
                <FaExchangeAlt />
              </button>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500">
                Departure
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-xl border border-sky-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500">
                Travellers & Class
              </label>
              <select className="mt-1 w-full rounded-xl border border-sky-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none">
                <option>1 Traveller · Economy</option>
                <option>2 Travellers · Economy</option>
                <option>1 Traveller · Business</option>
                <option>2 Travellers · Business</option>
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="inline-flex h-[46px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <FaSearch /> Search Flights
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
                className={`group relative rounded-3xl bg-white p-6 border border-sky-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
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
              Available via Third-Party Flight Services
            </h2>

            <p className="text-center text-gray-600 mt-2">
              Compare fares & book flights with trusted platforms.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {thirdPartyFlights.map((flight, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-sky-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white flex items-center justify-center text-lg shadow-md">
                    <FaPlane />
                  </div>

                  <h3 className="mt-4 text-lg text-black font-bold">{flight.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {flight.desc}
                  </p>

                  <a
                    href={flight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700"
                  >
                    Search Flights <FaExternalLinkAlt className="text-[10px]" />
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

export default Flights;
