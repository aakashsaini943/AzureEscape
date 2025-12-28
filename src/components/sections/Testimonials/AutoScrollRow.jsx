import { useEffect, useRef } from "react";

export default function AutoScrollRow({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.scrollLeft += 1;

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
    }, 20); // slow smooth scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="scrollbar-hide"
      style={{
        display: "flex",
        gap: "24px",
        overflowX: "auto",
        paddingBottom: "12px",
        // background: "rgba(0,255,0,0.05)", // DEBUG COLOR
      }}
    >
      {children}
    </div>
  );
}
