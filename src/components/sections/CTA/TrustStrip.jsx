import {
  ShieldCheck,
  Globe,
  Users,
  Headset,
} from "lucide-react";

const TRUST_ITEMS = [
  {
    id: 1,
    label: "10k+ Happy Travelers",
    sub: "Trusted by real customers",
    icon: Users,
  },
  {
    id: 2,
    label: "500+ Global Destinations",
    sub: "Across 40+ countries",
    icon: Globe,
  },
  {
    id: 3,
    label: "Secure Payments",
    sub: "SSL & encrypted checkout",
    icon: ShieldCheck,
  },
  {
    id: 4,
    label: "24/7 Support",
    sub: "Dedicated travel experts",
    icon: Headset,
  },
];

const TrustStrip = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-sky-300/30 via-indigo-300/30 to-pink-300/30 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Travel with Confidence
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Millions of travelers trust AzureEscape for secure, seamless, and
            unforgettable journeys.
          </p>
        </div>

        {/* Trust cards */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {TRUST_ITEMS.map(({ id, label, sub, icon: Icon }) => (
            <div
              key={id}
              className="
                group
                relative
                rounded-3xl
                bg-white/80 backdrop-blur-xl
                border border-gray-200
                px-8 py-10
                text-center
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]
              "
            >
              {/* Icon */}
              <div
                className="
                  mx-auto mb-6
                  w-16 h-16
                  rounded-2xl
                  bg-gradient-to-br from-sky-500 to-indigo-500
                  flex items-center justify-center
                  text-white
                  shadow-lg
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <Icon className="w-7 h-7" />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900">
                {label}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {sub}
              </p>

              {/* Accent line */}
              <div
                className="
                  mt-6 mx-auto
                  h-[3px] w-12
                  rounded-full
                  bg-gradient-to-r from-sky-500 to-indigo-500
                  opacity-40
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
