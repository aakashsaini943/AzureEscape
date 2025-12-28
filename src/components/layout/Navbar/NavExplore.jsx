import { Link } from "react-router-dom";
import { EXPLORE_LINKS } from "./navData";
import { useState } from "react";

const NavExplore = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-gray-300 hover:text-white transition">
        Explore
      </button>

      {open && (
        <div
          className="
            absolute top-full left-0 mt-4
            w-[420px]
            bg-black/80 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            p-6
            shadow-2xl
          "
        >
          <div className="grid grid-cols-2 gap-4">
            {EXPLORE_LINKS.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="
                  p-4 rounded-xl
                  bg-white/5 hover:bg-white/10
                  transition
                "
              >
                <div className="text-white font-medium">
                  {item.title}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {item.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavExplore;
