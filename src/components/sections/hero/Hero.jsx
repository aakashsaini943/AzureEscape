import "./hero.styles.css";

const cards = [
  {
    title: "MIMISA ROCKS",
    country: "AUSTRALIA",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "SUNSET BEACH",
    country: "MALDIVES",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "BLUE LAGOON",
    country: "ICELAND",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "ALPINE VALLEY",
    country: "SWITZERLAND",
    img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  },
  {
    title: "MISTY CLIFFS",
    country: "NORWAY",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

export default function Hero() {
  return (
    <section className="split-hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <span className="hero-tag">Explore the world</span>

        <h1 className="hero-title">
          Travel beyond <br /> borders
        </h1>

        <p className="hero-desc">
          Discover breathtaking destinations and curated journeys crafted
          for unforgettable experiences.
        </p>

        <button className="hero-btn">Start Exploring</button>
      </div>

      {/* RIGHT CARDS */}
      <div className="hero-right">
        <div className="card-wrapper">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`card card-${i}`}
              style={{ backgroundImage: `url(${c.img})` }}
            >
              <div className="card-text">
                <h2>{c.title}</h2>
                <span>{c.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
