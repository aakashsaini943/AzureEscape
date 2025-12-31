import "./SavingsCompareCard.css";

export default function SavingsCompareCard() {
  return (
    <section className="sv-section">
      <div className="sv-container">
        {/* Header */}
        <div className="sv-header">
          <h2>
            Save More with <span>AzureEscape</span>
          </h2>
          <p>
            Compare prices instantly and see why travelers book with us.
          </p>
        </div>

        {/* Cards */}
        <div className="sv-cards">
          {/* AzureEscape */}
          <div className="sv-card primary">
            <span className="sv-badge">BEST DEAL</span>

            <h3>AzureEscape</h3>

            <ul>
              <li>
                <span>Base Fare</span>
                <strong>₹10,000</strong>
              </li>
              <li>
                <span>Instant Discount</span>
                <strong>-₹900</strong>
              </li>
              <li>
                <span>Coins Applied</span>
                <strong>-₹300</strong>
              </li>
              <li>
                <span>Cashback</span>
                <strong>-₹440</strong>
              </li>
            </ul>

            <div className="sv-divider" />

            <div className="sv-final">
              <span>Final Price</span>
              <strong>₹8,360</strong>
            </div>

            <div className="sv-saved">
              You saved <strong>₹1,640</strong>
            </div>
          </div>

          {/* Others */}
        
          <div className="sv-card alert-card">
            <h3>Other Travel Sites</h3>

            <ul>
              <li>
                <span>Base Fare</span>
                <strong>₹10,000</strong>
              </li>
              <li>
                <span>Discount</span>
                <strong>-₹400</strong>
              </li>
              <li>
                <span>Coins</span>
                <strong>—</strong>
              </li>
              <li>
                <span>Cashback</span>
                <strong>—</strong>
              </li>
            </ul>

            <div className="sv-divider" />

            <div className="sv-final">
              <span>Final Price</span>
              <strong>₹9,600</strong>
            </div>

            <div className="sv-saved muted">
              You saved ₹400
            </div>
          </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="sv-trust">
          Best price guaranteed or <strong>5× refund</strong>*
        </div>
    
    </section>
  );
}


