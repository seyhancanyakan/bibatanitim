import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UsageSection from "@/components/sections/UsageSection";
import TechnologySection from "@/components/sections/TechnologySection";
import FAQSection from "@/components/sections/FAQSection";
import TryBibaSection from "@/components/sections/TryBibaSection";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <TryBibaSection />
      <UsageSection />
      <TechnologySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
