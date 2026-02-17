import { useEffect, useState } from "react";
import {
  FaTaxi,
  FaMapMarkerAlt,
  FaClock,
  FaUserFriends,
  FaSearch,
  FaExternalLinkAlt,
} from "react-icons/fa";

const features = [
  {
    icon: FaClock,
    title: "On-Time Pickup",
    desc: "Reliable drivers ensure punctual pickups every time.",
  },
  {
    icon: FaUserFriends,
    title: "Multiple Cab Options",
    desc: "Choose from Mini, Sedan, SUV, or Luxury rides.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Live Tracking",
    desc: "Track your cab in real-time with accurate ETA.",
  },
];

const thirdPartyCabs = [
  {
    name: "Uber",
    desc: "Book affordable rides with live tracking & fare estimates.",
    url: "https://www.uber.com/in/en/",
  },
  {
    name: "Ola",
    desc: "India’s popular cab service with multiple ride categories.",
    url: "https://www.olacabs.com",
  },
  {
    name: "Rapido",
    desc: "Bike taxis & quick city rides at budget-friendly prices.",
    url: "https://www.rapido.bike",
  },
];

const Cabs = () => {
  const [show, setShow] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 py-20 px-4">
      
      {/* Ambient background */}
      <div className="absolute -top-40 right-1/2 translate-x-1/2 h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-4 py-1 text-xs font-semibold text-emerald-900 shadow">
            <FaTaxi /> CAB BOOKINGS
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Book Cabs,
            <span className="block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Anytime, Anywhere
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Comfortable, safe, and affordable cab rides for airport transfers,
            city travel, and outstation trips.
          </p>
        </div>

        {/* SEARCH CARD */}
        <div
          className={`mt-14 mx-auto max-w-4xl rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200 shadow-xl p-6 sm:p-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              placeholder="Pickup Location"
              className="w-full rounded-xl border text-black border-emerald-200 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
            />
            <input
              placeholder="Drop Location"
              className="w-full rounded-xl border text-black border-emerald-200 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="datetime-local"
              className="w-full rounded-xl border text-black border-emerald-200 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <FaSearch /> Search Cabs
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
                className={`group relative rounded-3xl bg-white p-6 border border-emerald-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-200/30 to-teal-200/30 opacity-0 blur-xl transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 text-white shadow">
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
              Available via Third-Party Cab Services
            </h2>

            <p className="text-center text-gray-600 mt-2">
              Compare fares & book through our trusted ride partners.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {thirdPartyCabs.map((cab, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center text-lg shadow-md">
                    <FaTaxi />
                  </div>

                  <h3 className="mt-4 text-lg text-black font-bold">{cab.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {cab.desc}
                  </p>

                  <a
                    href={cab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Book Ride <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              You will be redirected to external booking platforms.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cabs;
