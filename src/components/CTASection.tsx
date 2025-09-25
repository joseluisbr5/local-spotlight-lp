import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para ter uma landing page incrível para o seu estabelecimento?
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Vamos conversar e começar a transformar seu negócio hoje mesmo! Entre em contato e descubra como podemos impulsionar seus resultados.
          </p>

          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center pt-6 lg:pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-hero text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 font-semibold min-h-[48px] w-full sm:w-auto"
            >
              Solicite Sua Landing Page
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="tel:+5586994278721" className="flex items-center justify-center sm:justify-start text-white hover:text-white/80 transition-colors min-h-[44px] px-4 rounded-lg hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-base sm:text-lg">(86) 99427-8721</span>
              </a>
              <a href="mailto:joseluis.123.br@gmail.com" className="flex items-center justify-center sm:justify-start text-white hover:text-white/80 transition-colors min-h-[44px] px-4 rounded-lg hover:bg-white/10">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-base sm:text-lg break-all sm:break-normal">joseluis.123.br@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              💡 Consulta inicial gratuita • 🚀 Resultados garantidos • 📱 Design responsivo incluso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;