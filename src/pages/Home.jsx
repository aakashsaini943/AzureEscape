import React from "react";
import Hero from "../components/sections/hero/Hero";
import PopularDestinations from "../components/sections/PopularDestinations/PopularDestinations";
import TopPackages from "../components/sections/TopPackages/TopPackages";
import WhyChooseUs from "../components/sections/WhyChooseUs/WhyChooseUs";
import CTA from "../components/sections/CTA/CTA";
import SavingsCompareCard from "../components/sections/SavingCard/SavingsCompareCard";
import FlashSale from "../components/sections/FlashSale/FlashSale";
import FlightPromoBanner from "../components/sections/FlihtDelasBanner/FlightPromoBanner";
import Minioffers from "../components/sections/offer/Minioffers";


const Home = () => {
  return (
    <>
      <Hero />
      <FlashSale />
      <Minioffers/>
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
