import RatingStars from "./RatingStars";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-500">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm opacity-70">{testimonial.location}</p>
          <RatingStars rating={testimonial.rating} />
        </div>
      </div>

      <p className="italic opacity-90">
        “{testimonial.review}”
      </p>
    </div>
  );
};

export default TestimonialCard;
