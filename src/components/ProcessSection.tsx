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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Como <span className="text-primary">Funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e eficiente para criar sua landing page perfeita
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group relative hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-card"
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-soft">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mt-8 group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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