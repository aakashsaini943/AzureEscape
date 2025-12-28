const TrustStrip = () => {
  return (
    <section className="py-16 px-6">
      <div className="
        max-w-6xl mx-auto
        flex flex-wrap justify-center gap-10
        text-gray-400
      ">
        {[
          "10k+ Happy Travelers",
          "500+ Destinations",
          "Secure Payments",
          "24/7 Support",
        ].map((item) => (
          <div
            key={item}
            className="
              px-6 py-4
              bg-white/5 backdrop-blur
              border border-white/10
              rounded-xl
              text-sm font-medium
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
