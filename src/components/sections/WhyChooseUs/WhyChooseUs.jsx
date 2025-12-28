import FeatureCard from "./FeatureCard";
import AssuranceBanner from "./AssuranceBanner";
import StatsBar from "./StatsBar";
import { features } from "./featuresData";

const WhyChooseUs = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-sky-400">AzureEscape</span>
          </h2>

          <p className="mt-5 text-gray-300 text-lg">
            We combine technology, trust, and travel expertise to
            deliver exceptional experiences.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
        <StatsBar />
      </div>
    </section>
  );
};

export default WhyChooseUs;
