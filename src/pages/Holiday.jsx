import { useEffect, useState } from "react";
import {
  FaUmbrellaBeach,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaSearch,
} from "react-icons/fa";

const packages = [
  {
    title: "Maldives Escape",
    location: "Maldives",
    duration: "5D / 4N",
    rating: 4.8,
    price: "₹89,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
  },
  {
    title: "Swiss Alps Getaway",
    location: "Switzerland",
    duration: "7D / 6N",
    rating: 4.9,
    price: "₹1,49,999",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  },
  {
    title: "Bali Bliss",
    location: "Indonesia",
    duration: "6D / 5N",
    rating: 4.7,
    price: "₹74,999",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
  },
];

const features = [
  {
    icon: FaClock,
    title: "Curated Itineraries",
    desc: "Perfectly planned days with flexibility built in.",
  },
  {
    icon: FaStar,
    title: "Top Rated Experiences",
    desc: "Handpicked stays and activities loved by travelers.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Global Destinations",
    desc: "Explore beaches, mountains, cities, and more.",
  },
];

const Holidays = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 py-20 px-4">
      {/* Ambient background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* HERO */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-4 py-1 text-xs font-semibold text-emerald-900 shadow">
            <FaUmbrellaBeach /> HOLIDAY PACKAGES
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Dream Holidays,
            <span className="block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Crafted for You
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Discover thoughtfully designed holiday packages with the perfect
            balance of comfort, adventure, and unforgettable memories.
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
              placeholder="Destination"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
            />
            <select className="w-full rounded-xl border border-emerald-200 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none">
              <option>Any Duration</option>
              <option>3–5 Days</option>
              <option>6–8 Days</option>
              <option>9+ Days</option>
            </select>
            <select className="w-full rounded-xl border border-emerald-200 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none">
              <option>Any Budget</option>
              <option>Under ₹50k</option>
              <option>₹50k–₹1L</option>
              <option>₹1L+</option>
            </select>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl">
              <FaSearch /> Explore
            </button>
          </div>
        </div>

        {/* PACKAGES GRID */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-emerald-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">
                    {pkg.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-amber-500 font-semibold">
                    <FaStar /> {pkg.rating}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  {pkg.location} · {pkg.duration}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-emerald-600">
                    {pkg.price}
                  </span>
                  <button className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-3xl bg-white p-6 border border-emerald-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  show
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
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
      </div>
    </section>
  );
};

export default Holidays;
