import "./hero.styles.css";
import HeroTabs from "./HeroTabs";
import FlightSearch from "./FlightSearch";
import FareOptions from "./FareOptions";

const Hero = () => {
  return (
    <section className="mmt-hero">
      <div className="mmt-hero-overlay" />

      <div className="mmt-hero-content">
        <HeroTabs />
        <FlightSearch />
        <FareOptions />
      </div>
    </section>
  );
};

export default Hero;
