const FeatureCard = ({ feature }) => {
  return (
    <div
      className={`p-8 rounded-3xl bg-linear-to-br ${feature.color} text-white shadow-2xl hover:scale-105 transition duration-500`}
    >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
      <p className="opacity-90">{feature.desc}</p>
    </div>
  );
};

export default FeatureCard;
