const EdgeFade = ({ position }) => {
  return (

    <div
      className={`
        pointer-events-none
        absolute top-0 h-full w-20 z-10
        ${
          position === "left"
            ? "left-0 bg-linear-to-r from-slate-950 to-transparent"
            : "right-0 bg-linear-to-l from-slate-950 to-transparent"
        }
      `}
    />
  );
};

export default EdgeFade;
