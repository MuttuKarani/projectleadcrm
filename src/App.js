import NavBar from "./components/NavBar";
import HeroModule from "./components/HeroModule";
import ComparisonSection from "./components/ComparisonSection";
import Howitworks from "./components/Howitworks";
import Testimonials from "./components/Testimonials";
import SalesSolutions from "./components/SalesSolutions";
import SupportedCRM from "./components/SupportedCRM";
import JoinBanner from "./components/JoinBanner";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import OneclickAccess from "./components/OneclickAccess";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroModule />
      <OneclickAccess />
      <ComparisonSection />
      <Howitworks />
      <Testimonials />
      <SalesSolutions />
      <SupportedCRM />
      <JoinBanner />
      <Footer />
      {/* <StickyCTA /> */}
    </>
  );
};

export default App;
