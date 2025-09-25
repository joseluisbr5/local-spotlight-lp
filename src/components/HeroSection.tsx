import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-landing-page.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Transforme Seu{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Estabelecimento Local
                </span>{" "}
                com Uma Landing Page Profissional
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Crie uma presença online que converte visitantes em clientes fiéis com uma landing page personalizada, otimizada para atrair e engajar sua comunidade local.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-hero text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 min-h-[48px]">
                Solicite Sua Landing Page
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 min-h-[48px]"
                onClick={() => document.getElementById('cases-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Casos de Sucesso
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="Landing page profissional em laptop" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;