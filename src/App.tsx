import Header from "./components/Header/Header";
import { HeaderTextColorProvider } from "./components/Header/HeaderContext";
import FaqSection from "./sections/FaqSection";
import FeaturesSection from "./sections/FeaturesSection";
import Footer from "./sections/Footer";
import MainSection from "./sections/MainSection";
import Solutions from "./sections/Solutions";

export default function App() {
  return (
    <>
      <HeaderTextColorProvider>
        <Header />
        <MainSection />
        <FeaturesSection />
        <Solutions />
        <FaqSection />
        <Footer />
      </HeaderTextColorProvider>
    </>
  );
}
