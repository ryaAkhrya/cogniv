import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGlassCards from "@/components/FeatureGlassCards";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeatureGlassCards />
      </main>
      <Footer />
    </>
  );
}
