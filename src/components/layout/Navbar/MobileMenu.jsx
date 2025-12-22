const MobileMenu = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 text-white shadow-xl">
      <ul className="flex flex-col p-6 gap-4">
        {[
          "Destinations",
          "Packages",
          "Experiences",
          "Blog",
          "Login",
        ].map((item) => (
          <li
            key={item}
            className="border-b border-white/10 pb-3"
            onClick={() => setOpen(false)}
          >
            {item}
          </li>
        ))}

        <button className="btn btn-primary mt-4">
          Book Now
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;
