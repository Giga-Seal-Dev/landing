import Header from "./components/Header/Header";
import AboutUs from "./sections/AboutUs";
import FaqSection from "./sections/FaqSection";
import FeaturesSection from "./sections/FeaturesSection";
import Footer from "./sections/Footer";
import MainSection from "./sections/MainSection";
import Solutions from "./sections/Solutions";

export default function App() {
  return (
    <>
      <Header />
      <MainSection />
      <AboutUs />
      <Solutions />
      <FeaturesSection />
      <FaqSection />
      <Footer />
    </>
  );
}
