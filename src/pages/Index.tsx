import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SpecificationsSection } from "@/components/SpecificationsSection";
import { PerfectCupSection } from "@/components/PerfectCupSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-dark">
      <HeroSection />
      <FeaturesSection />
      <SpecificationsSection />
      <PerfectCupSection />
    </div>
  );
};

export default Index;