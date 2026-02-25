import React from "react";
import "./Minioffers.style.css";

const themes = [
  {
    title: "Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Luxury",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    title: "Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Culture",
    image: "https://images.unsplash.com/photo-1524492449090-1eae3b7fcb0c",
  },
  {
    title: "Road Trips",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

export default function ExploreByTheme() {
  return (
    <section className="mosaic-section">

      <div className="mosaic-header">
        <span>CHOOSE YOUR EXPERIENCE</span>
        <h2>Explore by Theme</h2>
        <p>Handcrafted journeys for every travel style.</p>
      </div>

      <div className="mosaic-grid">
        {themes.map((theme, i) => (
          <div key={i} className={`mosaic-item item-${i}`}>
            <div
              className="mosaic-bg"
              style={{ backgroundImage: `url(${theme.image})` }}
            />
            <div className="mosaic-overlay">
              <h3>{theme.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}