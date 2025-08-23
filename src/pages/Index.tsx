import { HeroSection } from "@/components/HeroSection";
import { ImpactStats } from "@/components/ImpactStats";
import { HowToHelp } from "@/components/HowToHelp";
import { StoriesSection } from "@/components/StoriesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactStats />
      <HowToHelp />
      <StoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
