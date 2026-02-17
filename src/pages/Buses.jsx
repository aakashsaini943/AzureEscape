import { useState } from "react";
import {
  FaBus,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChair,
  FaSearch,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Buses() {
  const [showResults, setShowResults] = useState(false);

  const thirdPartyBuses = [
    {
      name: "RedBus",
      desc: "India’s largest online bus ticket booking platform.",
      url: "https://www.redbus.in",
    },
    {
      name: "AbhiBus",
      desc: "Compare fares & book bus tickets with live tracking.",
      url: "https://www.abhibus.com",
    },
    {
      name: "MakeMyTrip Buses",
      desc: "Book bus tickets with exclusive travel deals.",
      url: "https://www.makemytrip.com/bus-tickets/",
    },
  ];

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-orange-100">
              BUS BOOKINGS PLATFORM
            </p>

            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
              Comfortable Bus Travel <br />
              <span className="text-yellow-100">
                Across India
              </span>
            </h1>

            <p className="mt-6 text-lg text-orange-100 leading-relaxed">
              Find buses, compare ticket prices, choose seats, and book your
              journey instantly with verified operators.
            </p>
          </div>
        </div>

        <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[50px]" />
      </section>

      {/* ================= SEARCH CARD ================= */}
      <section className="relative z-10 -mt-10 sm:-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-orange-100 p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              
              <InputField icon={<FaMapMarkerAlt />} placeholder="From City" />
              <InputField icon={<FaMapMarkerAlt />} placeholder="To City" />
              <InputField icon={<FaCalendarAlt />} type="date" />

              <button
                onClick={handleSearch}
                className="h-[52px] rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <FaSearch />
                Search Buses
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
        <h2 className="text-3xl font-extrabold text-center mb-14">
          Why Book Buses With Us
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaChair />}
            title="Comfortable Seating"
            desc="Choose from sleeper, semi-sleeper, or seater buses with verified amenities."
          />
          <FeatureCard
            icon={<FaCalendarAlt />}
            title="Flexible Travel Dates"
            desc="View availability and pricing across multiple dates with ease."
          />
          <FeatureCard
            icon={<FaBus />}
            title="Trusted Operators"
            desc="Travel confidently with India’s top-rated and verified bus partners."
          />
        </div>
      </section>

      {/* ================= THIRD-PARTY RESULTS ================= */}
      {showResults && (
        <section className="max-w-7xl mx-auto px-4 pb-20 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
            Available via Third-Party Bus Services
          </h2>

          <p className="text-center text-gray-600 mt-2">
            Compare schedules, fares, and seat availability with our partners.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {thirdPartyBuses.map((bus, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-lg shadow-md">
                  <FaBus />
                </div>

                <h3 className="mt-4 text-lg font-bold">{bus.name}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {bus.desc}
                </p>

                <a
                  href={bus.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-orange-600 hover:text-orange-700"
                >
                  View & Book <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            You will be redirected to external booking platforms.
          </p>
        </section>
      )}

      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <Stat number="10M+" label="Happy Travelers" />
          <Stat number="500+" label="Cities Covered" />
          <Stat number="2K+" label="Bus Operators" />
          <Stat number="4.7★" label="User Rating" />
        </div>
      </section>
    </div>
  );
}

/* ================= INPUT FIELD ================= */

function InputField({ icon, placeholder, type = "text" }) {
  return (
    <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 h-[52px] bg-white hover:border-orange-300 transition">
      <span className="text-orange-500 text-sm">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full text-sm outline-none"
      />
    </div>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-lg shadow-md">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ================= STAT ================= */

function Stat({ number, label }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition">
      <p className="text-2xl sm:text-3xl font-extrabold text-orange-500">
        {number}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-gray-600">{label}</p>
    </div>
  );
}
