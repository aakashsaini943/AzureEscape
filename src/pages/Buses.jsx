import {
  FaBus,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChair,
  FaSearch,
} from "react-icons/fa";

export default function Buses() {
  return (
    <div className="bg-white text-gray-900">
      {/* ================= HERO BANNER ================= */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-32">
          <p className="text-sm font-semibold tracking-wider">
            BUS BOOKINGS PLATFORM
          </p>

          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold max-w-3xl">
            Comfortable Bus Travel Across India
          </h1>

          <p className="mt-6 text-lg max-w-2xl text-orange-100">
            Find buses, compare prices, choose seats and book tickets instantly
            with trusted operators.
          </p>
        </div>

        {/* Decorative curve */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[60px]" />
      </section>

      {/* ================= SEARCH STRIP ================= */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <input
                  placeholder="From City"
                  className="w-full outline-none text-sm"
                />
              </div>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <input
                  placeholder="To City"
                  className="w-full outline-none text-sm"
                />
              </div>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
                <FaCalendarAlt className="text-orange-500" />
                <input
                  type="date"
                  className="w-full outline-none text-sm"
                />
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:opacity-90">
                <FaSearch /> Search Buses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-4 py-28">
        <h2 className="text-3xl font-extrabold mb-16">
          Why Book Buses With Us
        </h2>

        <div className="space-y-10 max-w-3xl">
          <Feature
            icon={<FaChair />}
            title="Comfortable Seating"
            desc="Choose from sleeper, semi-sleeper, or seater buses with verified amenities."
          />
          <Feature
            icon={<FaCalendarAlt />}
            title="Flexible Travel Dates"
            desc="View availability and pricing across multiple dates easily."
          />
          <Feature
            icon={<FaMapMarkerAlt />}
            title="Wide Route Coverage"
            desc="Travel confidently across hundreds of cities with trusted operators."
          />
        </div>
      </section>

      {/* ================= FOOT STATS ================= */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <Stat number="10M+" label="Happy Travelers" />
          <Stat number="500+" label="Cities Covered" />
          <Stat number="2K+" label="Bus Operators" />
          <Stat number="4.7★" label="User Rating" />
        </div>
      </section>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-6 border-l-4 border-orange-500 pl-6">
      <div className="text-orange-500 text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <p className="text-3xl font-extrabold text-orange-500">{number}</p>
      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </div>
  );
}
