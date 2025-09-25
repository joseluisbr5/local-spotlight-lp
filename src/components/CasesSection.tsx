import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import restaurantCase from "@/assets/restaurant-case.jpg";
import retailCase from "@/assets/retail-case.jpg";
import coffeeCase from "@/assets/coffee-case.jpg";

const cases = [
  {
    image: restaurantCase,
    title: "Restaurante Villa Toscana",
    description: "Landing page otimizada para um restaurante italiano local, focando em reservas online e delivery.",
    result: "Aumento de 45% nas reservas online",
    category: "Restaurante",
    link: "https://exemplo-restaurante.com" // Substituir pelo link real
  },
  {
    image: retailCase,
    title: "Boutique Moderna",
    description: "Página de vendas para loja de roupas femininas, destacando coleções e facilitando contato.",
    result: "Crescimento de 60% no tráfego local",
    category: "Varejo",
    link: "https://exemplo-boutique.com" // Substituir pelo link real
  },
  {
    image: coffeeCase,
    title: "Café Central",
    description: "Website para cafeteria artesanal, promovendo eventos e cardápio especial.",
    result: "Aumento de 35% em novos clientes",
    category: "Cafeteria",
    link: "https://exemplo-cafe.com" // Substituir pelo link real
  }
];

const CasesSection = () => {
  return (
    <section id="cases-section" className="py-16 lg:py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Casos de Sucesso
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns dos meus projetos anteriores. Eu criei landing pages para restaurantes, lojas de varejo e outros estabelecimentos locais, gerando resultados reais!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {caseItem.category}
                </Badge>
              </div>
              
              <CardContent className="p-5 lg:p-6 space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                  {caseItem.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {caseItem.description}
                </p>
                <div className="pt-3 lg:pt-4 border-t border-border/50 space-y-3">
                  <p className="text-accent font-semibold text-base lg:text-lg">
                    📈 {caseItem.result}
                  </p>
                  <a 
                    href={caseItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-primary hover:text-primary/80 font-medium transition-colors text-sm lg:text-base min-h-[44px] flex items-center"
                  >
                    Ver projeto →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;