import { testimonials } from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";
import EdgeFade from "./EdgeFade";
import AutoScrollRow from "./AutoScrollRow";

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold">
            What Travelers Say About{" "}
            <span className="text-sky-400">AzureEscape</span>
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Real experiences from travelers around the world.
          </p>
        </div>

        {/* Edge blur */}
        <EdgeFade position="left" />
        <EdgeFade position="right" />

        {/* Auto-scroll row */}
        <AutoScrollRow speed={0.25}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </AutoScrollRow>

        {/* Trust line */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          ⭐ Rated 4.8/5 by 10,000+ travelers
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
