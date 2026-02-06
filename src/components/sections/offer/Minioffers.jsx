import "./Minioffers.style.css";

export default function Minioffers() {
  return (
    <section className="fb-section">
      <div className="fb-header">
        <h2 className="fb-title">Featured Launches</h2>
        <p className="fb-subtitle">
          Upcoming premium devices you don’t want to miss
        </p>
      </div>

      <div className="fb-row">
        {/* CARD 1 */}
        <div className="fb-card green">
          <div className="fb-overlay" />

          <div className="fb-content">
            <div className="fb-left">
              <div className="fb-brand-row">
                <img src="/assets/samsung.png" alt="Samsung" className="fb-logo" />
                <span className="fb-tag">Flipkart Exclusive</span>
              </div>

              <h3>
                Galaxy <br />
                <strong>F70 Series</strong>
              </h3>

              <p>Revealing on <strong>2 Feb 2026</strong></p>

              <button className="fb-btn">Notify Me</button>
            </div>

            <div className="fb-right">
              <div className="fb-circle">F</div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="fb-card blue">
          <div className="fb-overlay" />

          <div className="fb-content">
            <div className="fb-left">
              <div className="fb-brand-row">
                <img src="/assets/apple.png" alt="Apple" className="fb-logo" />
                <span className="fb-tag blue">New Launch</span>
              </div>

              <h3>
                iPhone <br />
                <strong>17 Pro</strong>
              </h3>

              <p>Launching on <strong>10 Mar 2026</strong></p>

              <button className="fb-btn outline">Notify Me</button>
            </div>

            <div className="fb-right">
              <div className="fb-circle blue">A</div>
            </div>
          </div>
        </div>

        {/* CARD 3 – NEW */}
        <div className="fb-card purple">
          <div className="fb-overlay" />

          <div className="fb-content">
            <div className="fb-left">
              <div className="fb-brand-row">
                <img src="/assets/google.png" alt="Google" className="fb-logo" />
                <span className="fb-tag purple">AI Powered</span>
              </div>

              <h3>
                Pixel <br />
                <strong>9 Ultra</strong>
              </h3>

              <p>Arriving <strong>April 2026</strong></p>

              <button className="fb-btn dark">Explore</button>
            </div>

            <div className="fb-right">
              <div className="fb-circle purple">G</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
