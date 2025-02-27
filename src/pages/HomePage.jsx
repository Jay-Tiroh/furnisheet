import React from "react";
import Hero from "../components/Hero.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import StopSpending from "../components/StopSpending.jsx";
import Packages from "../components/Packages.jsx";
import BestSelling from "../components/BestSelling.jsx";
import EnjoyRent from "../components/EnjoyRent.jsx";
import NowAvailable from "../components/NowAvailable.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
const HomePage = () => {
  return (
    <div className="space-y-20 overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <StopSpending />
      <Packages />
      <BestSelling />
      <EnjoyRent />
      <NowAvailable />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;
