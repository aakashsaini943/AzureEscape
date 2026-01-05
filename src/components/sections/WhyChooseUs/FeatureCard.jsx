const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl
        p-6
        text-center
        shadow-2xl
      
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h4 className="text-lg font-semibold text-black">{title}</h4>

      <p className="mt-3 text-black text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
