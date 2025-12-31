import "./FlashSale.css";

const OFFERS = [
  { label: "FLIGHTS", value: "16%", suffix: "Off" },
  { label: "HOTELS", value: "65%", suffix: "Off" },
  { label: "BUSES", value: "₹250", suffix: "Off" },
];
function FlashSale() {
  return (
    <section className="fs-hero">
      <div className="fs-glow" />
      <div className="fs-particles" />

      <div className="fs-container">
        {/* LEFT CONTENT */}
        <div className="fs-left">
          <span className="fs-badge">LIMITED TIME</span>

          <h1 className="fs-heading">
            FLASH <span>SALE</span>
          </h1>

          <p className="fs-subtitle">
            Grab exclusive travel deals during our power-packed flash sale.
          </p>

          <div className="fs-time">
            2–3 PM &nbsp;|&nbsp; 8–9 PM &nbsp;|&nbsp; 10 PM–12 AM
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="fs-cards">
          {OFFERS.map((item, i) => (
            <div className="fs-card" key={i}>
              <div className="fs-card-top">
                <small>Up to</small>
                <h2>{item.value}</h2>
                <small>{item.suffix}</small>
              </div>
              <div className="fs-card-bottom">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlashSale