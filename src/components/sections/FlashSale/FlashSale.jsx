import "./FlashSale.css";

const DEALS = [
  { title: "Flights", value: "Up to 16% off", accent: "blue" },
  { title: "Hotels", value: "Up to 65% off", accent: "purple" },
  { title: "Buses", value: "₹250 off", accent: "green" },
];

const FlashDeals = () => {
  return (
    <section className="fd-section">
      <div className="fd-container">
        {/* LEFT CONTENT */}
        <div className="fd-content">
          <span className="fd-pill">Limited Time Offers</span>

          <h2 className="fd-title">
            Exclusive <span>Flash Deals</span>
          </h2>

          <p className="fd-description">
            Hand-picked travel deals curated for smart travelers.
            Book faster, save more, and travel better with AzureEscape.
          </p>

          <div className="fd-time">
            Live Daily · 2–3 PM · 8–9 PM · 10 PM–12 AM
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="fd-cards">
          {DEALS.map((deal, index) => (
            <div key={index} className={`fd-card ${deal.accent}`}>
              <div className="fd-card-header">
                <span className="fd-card-title">{deal.title}</span>
              </div>

              <div className="fd-card-value">{deal.value}</div>

              <button className="fd-card-btn">
                View Deals →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
