const TrustStrip = () => {
  const items = [
    "🔒 Secure Payments",
    "💯 Transparent Pricing",
    "⭐ 4.9 Rated by Travelers",
    "📞 24/7 Human Support",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
};

export default TrustStrip;
