import "./MiniOffers.css";

export default function Minioffers() {
  return (
    <section className="fb-section">
      <h2 className="fb-title">Featured Brands</h2>

      <div className="fb-row">
        {/* CARD 1 */}
        <div className="fb-card">
          <div className="fb-overlay" />

          <div className="fb-content">
            <div className="fb-left">
              <div className="fb-brand-row">
                <img src="/assets/samsung.png" alt="Samsung" className="fb-logo" />
                <span className="fb-tag">Flipkart Unique</span>
              </div>

              <h3>
                The New <br />
                <strong>Galaxy F70 Series</strong>
              </h3>

              <p>Revealing on <strong>2nd Feb 2026</strong></p>

              <button className="fb-btn">Notify Me</button>
            </div>

            <div className="fb-right">
              <div className="fb-circle">F</div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="fb-card alt">
          <div className="fb-overlay" />

          <div className="fb-content">
            <div className="fb-left">
              <div className="fb-brand-row">
                <img src="/assets/apple.png" alt="Apple" className="fb-logo" />
                <span className="fb-tag blue">New Launch</span>
              </div>

              <h3>
                Introducing <br />
                <strong>iPhone 17 Pro</strong>
              </h3>

              <p>Launching <strong>10th Mar 2026</strong></p>

              <button className="fb-btn">Notify Me</button>
            </div>

            <div className="fb-right">
              <div className="fb-circle blue">A</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
