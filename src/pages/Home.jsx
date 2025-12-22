import React from "react";
import Hero from "../components/sections/Hero";
import PopularDestinations from "../components/sections/PopularDestinations/PopularDestinations";
import TopPackages from "../components/sections/TopPackages/TopPackages";
import WhyChooseUs from "../components/sections/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import CTA from "../components/sections/CTA/CTA";


 const Home = () => {
  return (
    <>
    <Hero />
    <PopularDestinations/>
    <TopPackages/>
    <WhyChooseUs/>
    <Testimonials/>
    <CTA/>
    </>
  );
};

export default Home;
