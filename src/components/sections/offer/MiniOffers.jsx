// MiniOffers.jsx
import "./miniOffers.css";

const offers = [
  {
    img: "/axis.png",
    title: "Up to 11% Off",
    desc: "on credit card EMI trxns."
  },
  {
    img: "/supercoin.png",
    title: "Additional Discounts",
    desc: "with SuperCoins"
  },
  {
    img: "/flipkart-axis.png",
    title: "Flat 12% Off",
    desc: "with Flipkart Axis Bank credit card"
  },
  {
    img: "/rewards.png",
    title: "5X Rewards",
    desc: "on select bookings"
  }
];

export default function MiniOffers() {
  return (
    <section className="mini-offer-section">
      <h3 className="mini-offer-title">Greatest sale deals</h3>

      <div className="mini-offer-wrapper">
        <div className="mini-offer-track">
          {[...offers, ...offers].map((offer, i) => (
            <div className="mini-offer-card" key={i}>
              <img src={offer.img} alt="" />
              <h4>{offer.title}</h4>
              <p>{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
