import "./DealCards.css";

const deals = [
  {
    title: "Flights",
    subtitle: "Up to 25% Off",
      image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    ribbon: "SALE LIVE",
    cta: "Explore fares",
  },
  {
    title: "Hotels",
    subtitle: "Up to 65% Off",
    image: "/images/hotel.png",
    cta: "View stays",
  },
  {
    title: "Buses",
    subtitle: "Flat ₹250 Off",
    image: "/images/bus.png",
    cta: "Check routes",
  },
];

export default function DealCards() {
  return (
    <section className="premium-deals">
      {deals.map((deal, i) => (
        <div className="premium-card" key={i}>
          {deal.ribbon && <div className="premium-ribbon">{deal.ribbon}</div>}

          <div className="premium-content">
            <h3>{deal.title}</h3>
            <p>{deal.subtitle}</p>
            <button>{deal.cta}</button>
          </div>

          <div className="image-wrap">
            <img src={deal.image} alt={deal.title} />
          </div>

          <div className="card-glow" />
        </div>
      ))}
    </section>
  );
}
