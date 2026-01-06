import {
  FaClock,
  FaRoute,
  FaHandshake,
  FaSmile,
} from "react-icons/fa";

const highlights = [
  {
    title: "On-Time",
    subtitle: "Reliable confirmations & updates",
    icon: FaClock,
  },
  {
    title: "Curated",
    subtitle: "Thoughtfully planned routes & stays",
    icon: FaRoute,
  },
  {
    title: "Transparent",
    subtitle: "Clear pricing, honest policies",
    icon: FaHandshake,
  },
  {
    title: "Human Support",
    subtitle: "Real help, whenever needed",
    icon: FaSmile,
  },
];

const StatsBar = () => {
  return (
    <div className="mt-20">
      <div
        className="
          max-w-6xl mx-auto
          rounded-2xl
          bg-white/90
          backdrop-blur
          border border-gray-100
          shadow-[0_12px_40px_rgba(0,0,0,0.06)]
          px-8 py-8
        "
      >
        <div className="grid gap-6 md:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex items-center gap-4
                  text-gray-800
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    bg-indigo-50
                    text-indigo-600
                  "
                >
                  <Icon size={18} />
                </div>

                {/* Text */}
                <div>
                  <div className="text-sm font-semibold">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
