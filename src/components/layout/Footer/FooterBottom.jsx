const FooterBottom = () => {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
        <p>
          © {new Date().getFullYear()} TravelX. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["Privacy Policy", "Terms", "Cookies"].map((item) => (
            <span
              key={item}
              className="hover:text-white cursor-pointer transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
