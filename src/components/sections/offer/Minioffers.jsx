import React from "react";
import "./Minioffers.style.css";

const themes = [
  {
    title: "Adventure",
    image: "/images/clay-banks-XFEJPXUqbYc-unsplash.jpg",
  },
  {
    title: "Luxury",
    image: "/images/kedarnath.jpg",
  },
  {
    title: "Beaches",
    image: "/images/alexey-turenkov-bWJiSZjIgTM-unsplash.jpg",
  },
  {
    title: "Culture",
    image: "/images/chelsea-gates-0653_wY0nRc-unsplash.jpg",
  },
  {
    title: "Road Trips",
    image: "/images/ilnur-kalimullin-CB0Qrf8ib4I-unsplash.jpg",
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