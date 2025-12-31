const HeroOverlay = () => {
  return (
    <>
      {/* Main readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />

      {/* Bottom vignette to “seat” the floating card */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95 to-transparent" />

      {/* Soft highlight to avoid flat look */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    </>
  );
};

export default HeroOverlay;
