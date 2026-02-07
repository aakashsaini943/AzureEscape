import React, { useRef } from "react"
import "./Minioffers.style.css";


const themes = [
  {
    title: "GROUP TOURS",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    tags: ["Europe", "Australia", "Sri Lanka"],
  },
  {
    title: "LUXE HOLIDAYS",
    image: "/images/clay-banks-XFEJPXUqbYc-unsplash.jpg",
    tags: ["Beach", "Cultural", "Island", "Hill"],
  },
  {
    title: "SENIOR GROUP TOUR",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    tags: ["Europe", "Maldives", "Dubai", "Pilgrimage", "Egypt"],
  },
];

export default function ExploreByTheme() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f0e2cc] py-20">
      <div className="max-w-7xl mx-auto px-6 flex  flex-col lg:flex-row gap-10">
        
        {/* LEFT PANEL */}
<div className="relative lg:w-[34%] rounded-3xl p-10 overflow-hidden flex flex-col justify-between 
                bg-gradient-to-br from-[#b4926c] via-[#fff1e4] to-[#ffefe0]
                shadow-sm hover:shadow-md transition">

  {/* Decorative pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_60%)]" />

  {/* CONTENT */}
  <div className="relative z-10">
    <span className="inline-block text-xs tracking-widest text-orange-600 uppercase font-semibold">
      Explore
    </span>

    <h2 className="text-4xl md:text-5xl font-extrabold text-[#7a3a1d] mt-3 leading-tight">
      Holidays
    </h2>

    <p className="uppercase text-sm tracking-wide text-gray-600 mt-1">
      by Theme
    </p>

    <p className="mt-6 text-black leading-relaxed max-w-sm opacity[-10]">
      Discover thoughtfully curated holiday experiences designed for comfort,
      adventure, and unforgettable moments.
    </p>

    {/* CTA */}
    <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white 
                       bg-[#7a3a1d] px-6 py-3 rounded-full hover:bg-[#64301a] transition">
      Explore Themes.
      <span className="text-lg">→</span>
    </button>
  </div>

  {/* IMAGE */}
 <div
  className="absolute inset-0 bg-center bg-cover rounded-3xl opacity-30 bg-blend-hard-light"

/>

</div>

        {/* RIGHT PANEL */}
        <div className="relative lg:w-[66%]">
          
          {/* ARROWS */}
          <div className="absolute -top-6 right-0 flex gap-2 z-10">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg transition flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg transition flex items-center justify-center"
            >
              ›
            </button>
          </div>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar"
          >
            {themes.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover rounded-t-2xl"
                  />
                )}

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-sm tracking-wide">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-md border border-blue-500 text-blue-600 bg-blue-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                    VIEW MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
