import "./FlashSale.css";

export default function FlashSaleBanner() {
  return (
    <section className="sale-banner">
      <div className="sale-bg" />

      <div className="sale-container">
        <div className="sale-text">
          <span className="sale-chip">Flash Sale</span>

          <h2 className="sale-title">
            Unmissable Flight Deals
          </h2>

          <p className="sale-desc">
            Limited-time discounts on domestic and international flights.
            Book now before prices go up.
          </p>

          <button className="sale-btn">
            View Offers
          </button>
        </div>
      </div>
    </section>
  );
}
