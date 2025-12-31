import "./FlightPromoBanner.css";

const partners = [
  "airindia.png",
  "spicejet.png",
  "akasa.png",
  "fly91.png",
  "indigo.png",
  "airindiaexpress.png",
];

export default function FlightPromoBanner() {
  return (
    <section className="fp-banner">
      {/* Main banner */}
      <div className="fp-content">
        <div className="fp-text">
          <h2>FLIGHTS</h2>
          <p>Flat 15% Off</p>

          <span className="fp-pill">Sale ends 31st Dec</span>
        </div>

        <img
          src="/images/plane.png"
          alt="Flight"
          className="fp-plane"
        />
      </div>

      {/* Partner strip */}
      <div className="fp-partners">
        <div className="fp-track">
          {[...partners, ...partners].map((logo, i) => (
            <img
              key={i}
              src={`/partners/${logo}`}
              alt="partner"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
