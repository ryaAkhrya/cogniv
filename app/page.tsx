import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGlassCards from "@/components/FeatureGlassCards";
import PricingToggle from "@/components/PricingToggle";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeatureGlassCards />
        <PricingToggle />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
