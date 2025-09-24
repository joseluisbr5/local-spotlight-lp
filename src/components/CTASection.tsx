import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para ter uma landing page incrível para o seu estabelecimento?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Vamos conversar e começar a transformar seu negócio hoje mesmo! Entre em contato e descubra como podemos impulsionar seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-hero text-lg px-8 py-6 font-semibold"
            >
              Solicite Sua Landing Page
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+5511999999999" className="flex items-center text-white hover:text-white/80 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-lg">(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@exemplo.com" className="flex items-center text-white hover:text-white/80 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-lg">contato@exemplo.com</span>
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