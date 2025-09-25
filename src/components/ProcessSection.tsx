import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Palette, 
  Smartphone, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consulta Inicial",
    description: "Vamos conversar sobre os objetivos do seu negócio e entender suas necessidades específicas."
  },
  {
    icon: Palette,
    number: "02", 
    title: "Design Personalizado",
    description: "Criamos uma landing page com a cara do seu estabelecimento, focada em sua área local."
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Otimização",
    description: "Garantimos que sua página esteja otimizada para dispositivos móveis e para mecanismos de busca."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lançamento & Suporte",
    description: "Publicamos a página e damos suporte para garantir que tudo esteja funcionando perfeitamente."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Como <span className="text-primary">Funciona?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e eficiente para criar sua landing page perfeita
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group relative hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-card"
            >
              <CardContent className="p-6 lg:p-8 text-center space-y-6">
                {/* Step number */}
                <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-base lg:text-lg shadow-soft">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mt-6 lg:mt-8 group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;