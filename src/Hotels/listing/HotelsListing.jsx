import { HotelCard } from "./cards";

const HotelsListing = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid gap-6 md:grid-cols-3">
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </section>
  );
};

export default HotelsListing;
