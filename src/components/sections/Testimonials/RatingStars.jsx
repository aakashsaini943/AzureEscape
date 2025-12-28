const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1 text-sky-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "opacity-100" : "opacity-30"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
