import React, { useRef } from "react";
import "./ExploreByTheme.css";

const themes = [
  { title: "Adventure", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Luxury", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
  { title: "Beaches", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { title: "Culture", image: "https://images.unsplash.com/photo-1524492449090-1eae3b7fcb0c" },
  { title: "Road Trips", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
];

export default function ExploreByTheme() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="theme-section">

      {/* FEATURED */}
      <div className="featured-theme">
        <div className="featured-overlay">
          <span>FEATURED EXPERIENCE</span>
          <h2>Explore The World by Theme</h2>
          <p>
            Discover curated journeys crafted for adventure, relaxation,
            culture, and unforgettable memories.
          </p>
          <button>Start Exploring →</button>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="theme-controls">
        <button onClick={() => scroll("left")}>‹</button>
        <button onClick={() => scroll("right")}>›</button>
      </div>

      {/* STRIPS */}
      <div ref={scrollRef} className="theme-strips hide-scrollbar">
        {themes.map((theme, i) => (
          <div
            key={i}
            className="theme-strip"
            style={{ backgroundImage: `url(${theme.image})` }}
          >
            <div className="strip-overlay">
              <h3>{theme.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}