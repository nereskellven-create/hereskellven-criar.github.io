import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsBar from "@/components/HighlightsBar";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div id="inicio" className="min-h-screen">
    <Navbar />
    <main className="pt-16 lg:pt-20">
      <HeroSection />
      <HighlightsBar />
      <AboutSection />
      <AreasSection />
      <DifferentialsSection />
      <CTASection />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
