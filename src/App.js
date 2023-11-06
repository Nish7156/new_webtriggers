import "./App.css";
import HeroSection from "./components/Pages/Home/HeroSection";
import AboutSection from "./components/Pages/Home/AboutSection";
import Projects from "./components/Pages/Home/Projects";
import ServicesSection from "./components/Pages/Home/ServicesSection";
import SplitSection from "./components/Pages/Home/SplitSection";
import PortfolioSection from "./components/Pages/Home/PortfolioSection";
import MarqueeText from "./components/Pages/Home/MarqueeText";
import Testimonials from "./components/Pages/Home/Testimonials";
import NewsSection from "./components/Pages/Home/NewsSection";
import Newsletter from "./components/Pages/Home/Newsletter";
import ContactUs from "./components/Pages/Home/ContactUs";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <hr class="mt-0 mb-0 white" />
      <Projects />
      <hr class="mt-0 mb-0 white" />
      <ServicesSection />
      <SplitSection />
      <PortfolioSection />
      <hr class="mt-0 mb-0 white" />
      <MarqueeText />
      <hr class="mt-0 mb-0 white" />
      {/* <Testimonials /> */}
      {/* <hr class="mt-0 mb-0 white" />
      <NewsSection /> */}
      <Newsletter />
      <ContactUs />
    </>
  );
}

export default App;
