import "./FlightPromoBanner.css";

export default function FlightPromoBanner() {
  return (
    <section className="flight-hero">
      <div className="flight-hero-inner">
        {/* TEXT SIDE */}
        <div className="flight-info">
          <span className="flight-badge">New Year Travel Deals</span>

          <h1 className="flight-heading">
            Fly More.
            <br />
            Pay Less.
          </h1>

          <p className="flight-subtext">
            Exclusive flight offers across domestic & international routes.
            Limited-time savings on top airlines.
          </p>

          <button className="flight-cta">
            Explore Flight Deals
          </button>
        </div>

        {/* IMAGE SIDE */}
        <div className="flight-image">
          <img
            src="/images/air-india.jpg"
            alt="Flight travel"
          />
        </div>
      </div>
    </section>
  );
}
