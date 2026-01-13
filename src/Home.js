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
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Ideas Become Websites</title>
        <meta
          name="description"
          content="Web development is the process of creating and maintaining websites or web applications, involving tasks such as web design, coding, and server management to ensure optimal functionality and user experience."
        />
        <meta
          name="keywords"
          content="web development,Website design,HTML, programming, coding, front-end, back-end, responsive design"
        />
      </Helmet>
      <HeroSection />
      <MovingYearText />
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
      {/* <PortfolioSection /> */}
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
