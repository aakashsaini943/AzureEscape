import { useState } from "react";
import NavBrand from "./NavBrand";
import NavPrimary from "./NavPrimary";
import NavActions from "./NavActions";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 hue-system">
      <div className="backdrop-blur-xl bg-black/50 border-b hue-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavBrand />
          <NavPrimary />
          <NavActions />

          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      <NavMobile open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
