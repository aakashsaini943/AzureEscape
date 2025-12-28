import { useState } from "react";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          sticky top-0 z-40
          bg-black/50 backdrop-blur-xl
          border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavBrand />
          <NavLinks />
          <NavActions />

          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
