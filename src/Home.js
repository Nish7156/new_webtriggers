import React from "react";
import HeroSection from "./components/Pages/Home/HeroSection";
import AboutSection from "./components/Pages/Home/AboutSection";
import Projects from "./components/Pages/Home/Projects";
import ServicesSection from "./components/Pages/Home/ServicesSection";
import SplitSection from "./components/Pages/Home/SplitSection";
import PortfolioSection from "./components/Pages/Home/PortfolioSection";
import MarqueeText from "./components/Pages/Home/MarqueeText";
import Newsletter from "./components/Pages/Home/Newsletter";
import ContactUs from "./components/Pages/Home/ContactUs";
import MovingText from "./components/Pages/Home/MovingText";
import Feat from "./components/Pages/Home/Feat";
import MovingYearText from "./components/Pages/Home/MovingYearText";

function Home() {
  return (
    <>
      <HeroSection />
      <MovingYearText/>
      <AboutSection />
      <hr class="mt-0 mb-0 white" />
      <Projects />
      <MovingText />
      <hr class="mt-0 mb-0 white" />
      <ServicesSection />
      <hr class="mt-0 mb-0 white" />
      <Feat />
      <Newsletter />

      <SplitSection />
      <PortfolioSection />
      <hr class="mt-0 mb-0 white" />
      <MarqueeText />
      <hr class="mt-0 mb-0 white" />

      {/* <Testimonials /> */}
      {/* <hr class="mt-0 mb-0 white" />
      <NewsSection /> */}
      <ContactUs />
    </>
  );
}

export default Home;
