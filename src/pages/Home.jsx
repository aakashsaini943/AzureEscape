import React from "react";
import Hero from "../components/sections/hero/Hero";
import PopularDestinations from "../components/sections/PopularDestinations/PopularDestinations";
import TopPackages from "../components/sections/TopPackages/TopPackages";
import WhyChooseUs from "../components/sections/WhyChooseUs/WhyChooseUs";
// import Testimonials from "../components/sections/Testimonials/Testimonials";
import CTA from "../components/sections/CTA/CTA";
import SavingsCompareCard from "../components/sections/SavingCard/SavingsCompareCard";
import FlashSale from "../components/sections/FlashSale/FlashSale";
import FlightPromoBanner from "../components/sections/FlihtDelasBanner/FlightPromoBanner";
import MiniOffers from "../components/sections/offer/MiniOffers";


const Home = () => {
  return (
    <>
      <Hero />
      <FlashSale />
      <MiniOffers/>
      <SavingsCompareCard />
      <FlightPromoBanner />
   
      <PopularDestinations />
      <TopPackages />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
};

export default Home;
