import { features } from "./featuresData";
import FeatureCard from "./FeatureCard";
import StatsBar from "./StatsBar";
import AssuranceBanner from "./AssuranceBanner";

const WhyChooseUs = () => {
  return (

    <section className="py-24 bg-linear-to-b from-base-100 to-base-200">
      <h2 className="text-5xl font-extrabold text-center mb-6">
        ⭐ Why Choose Us
      </h2>
      <p className="text-center max-w-2xl mx-auto opacity-80 mb-16">
        We don’t just plan trips — we create unforgettable travel experiences
        backed by trust, expertise, and world-class service.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {features.map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </div>

      {/* Stats */}
      <StatsBar />

      {/* Assurance */}
      <div className="px-10">
        <AssuranceBanner />
      </div>
    </section>
   
  );
};

export default WhyChooseUs;
