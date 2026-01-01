import { testimonials } from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";
import EdgeFade from "./EdgeFade";
import AutoScrollRow from "./AutoScrollRow";


const Testimonials = () => {
  return (
    <section
      className="
        relative py-32 px-6
        bg-gradient-to-b from-white via-slate-50 to-white
        overflow-hidden
      "
    >
      {/* Ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Traveler Stories
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800">
            What Travelers Say About{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              AzureEscape
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Genuine experiences shared by travelers who explored the world
            with confidence and comfort.
          </p>
        </div>

        {/* Edge fade */}
        <EdgeFade position="left" />
        <EdgeFade position="right" />

        {/* Auto-scroll testimonials */}
        <AutoScrollRow speed={0.25}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
            
          ))}
        
        </AutoScrollRow>
          
        {/* Trust line */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow-sm">
            <span className="text-sky-500 text-sm">★★★★★</span>
            <span className="text-sm text-gray-600 font-medium">
              Rated 4.8/5 by 10,000+ verified travelers
            </span>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
