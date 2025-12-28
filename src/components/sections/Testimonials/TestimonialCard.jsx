const TestimonialCard = ({ review, name, location }) => {
  return (
<div
  style={{
    minWidth: "320px",
    maxWidth: "320px",
    flexShrink: 0,
  }}
  className="
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-2xl
    p-6
  "
>

      <p className="text-gray-300 leading-relaxed">
        “{review}”
      </p>

      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="font-semibold text-white">
          {name}
        </div>
        <div className="text-sm text-gray-400">
          {location}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
