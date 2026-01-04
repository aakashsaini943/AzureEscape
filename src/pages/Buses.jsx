import { useEffect, useState } from "react";
import {
  FaBus,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChair,
  FaSearch,
} from "react-icons/fa";

const features = [
  {
    icon: FaChair,
    title: "Comfortable Seating",
    desc: "Choose from sleeper, semi-sleeper, or seater buses.",
  },
  {
    icon: FaCalendarAlt,
    title: "Flexible Travel Dates",
    desc: "Check availability across multiple days with ease.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Wide Route Coverage",
    desc: "Travel across cities with reliable bus operators.",
  },
];

const Buses = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50 py-20 px-4">
      {/* Ambient background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* HERO */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 px-4 py-1 text-xs font-semibold text-orange-900 shadow">
            <FaBus /> BUS BOOKINGS
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Book Buses,
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Travel Comfortably
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Compare prices, check amenities, and book bus tickets for your
            intercity travel with ease.
          </p>
        </div>

        {/* SEARCH CARD */}
        <div
          className={`mt-14 mx-auto max-w-4xl rounded-3xl bg-white/80 backdrop-blur-xl border border-orange-200 shadow-xl p-6 sm:p-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              placeholder="From City"
              className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none"
            />
            <input
              placeholder="To City"
              className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none"
            />
            <input
              type="date"
              className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl">
              <FaSearch /> Search Buses
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
                className={`group relative rounded-3xl bg-white p-6 border border-orange-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  show
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-200/30 to-amber-200/30 opacity-0 blur-xl transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-400 text-white shadow">
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
      </div>
    </section>
  );
};

export default Buses;
