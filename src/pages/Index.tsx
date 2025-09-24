import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import CasesSection from "@/components/CasesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <CasesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;