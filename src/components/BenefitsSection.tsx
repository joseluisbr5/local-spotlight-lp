import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  TrendingUp, 
  Smartphone, 
  Target, 
  Eye 
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Atraia mais clientes do seu bairro",
    description: "Estratégias localizadas para conectar com sua comunidade"
  },
  {
    icon: TrendingUp,
    title: "Aumente sua visibilidade no Google com SEO local",
    description: "Otimização completa para aparecer nos primeiros resultados"
  },
  {
    icon: Eye,
    title: "Ofereça uma experiência de usuário única e envolvente",
    description: "Design intuitivo que mantém os visitantes interessados"
  },
  {
    icon: Target,
    title: "Converta visitantes em ações: reservas, pedidos, contatos",
    description: "Elementos estratégicos que direcionam para conversão"
  },
  {
    icon: Smartphone,
    title: "Design responsivo para mobile: seus clientes acessam de qualquer lugar",
    description: "Experiência perfeita em todos os dispositivos"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Benefícios das Landing Pages para{" "}
            <span className="text-primary">Estabelecimentos Locais</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como uma landing page profissional pode revolucionar seu negócio local
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-card"
            >
              <CardContent className="p-6 lg:p-8 text-center space-y-4">
                <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;