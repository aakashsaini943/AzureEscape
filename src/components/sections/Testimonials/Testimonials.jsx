import { testimonials } from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";
import ReviewStats from "./ReviewStats";

const Testimonials = () => {
  return (
    

    <section className="py-24 bg-linear-to-b from-base-200 to-base-100">
      <h2 className="text-5xl font-extrabold text-center mb-6">
        💬 What Our Travelers Say
      </h2>

      <p className="text-center max-w-2xl mx-auto opacity-80 mb-16">
        Real stories from real travelers who explored the world with us.
      </p>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>

      {/* Trust Stats */}
      <ReviewStats />
    </section>
   
  );
};

export default Testimonials;
