import FeatureCard from "./FeatureCard";
import AssuranceBanner from "./AssuranceBanner";
import StatsBar from "./StatsBar";
import { features } from "./featuresData";

const WhyChooseUs = () => {
  return (
    <section className="
      relative py-32 px-6
      bg-gradient-to-b from-white via-slate-50 to-white
      overflow-hidden
    ">
      {/* Ambient Background Touch */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Why Travelers Trust Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              AzureEscape
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We blend smart technology, genuine care, and deep travel
            expertise to create journeys you can trust and enjoy.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

        {/* Assurance */}
        <AssuranceBanner />

        {/* Stats */}
        <div className="mt-20">
          <StatsBar />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
