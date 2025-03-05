import Banner from "./components/Banner";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import SoftuBanner from "./components/ui/SoftuBanner";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Features />
      <SoftuBanner />
      <Testimonials />
      <Pricing />
    </>
  );
}

export default App;
