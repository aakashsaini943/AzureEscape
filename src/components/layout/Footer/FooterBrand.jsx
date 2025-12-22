const FooterBrand = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-extrabold text-white">
        🌍 TravelX
      </h2>

      <p className="opacity-80 max-w-md">
        Premium travel experiences designed for modern explorers.
        Trusted by thousands worldwide.
      </p>

      <div className="flex gap-4">
        {["🐦", "📸", "💼", "▶️"].map((icon, i) => (
          <span
            key={i}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition"
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterBrand;
