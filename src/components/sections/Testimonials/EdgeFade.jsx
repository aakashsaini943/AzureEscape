const EdgeFade = ({ position }) => {
  return (
    <div
      className={`
        pointer-events-none
        absolute top-0 h-full w-32 z-10
        ${
          position === "left"
            ? "left-0 bg-linear-to-r from-white/60 via-white/70 to-transparent"
            : "right-0 bg-gradient-to-l from-white/60 via-white/70 to-transparent"
        }
      `}
    />
  );
};

export default EdgeFade;
