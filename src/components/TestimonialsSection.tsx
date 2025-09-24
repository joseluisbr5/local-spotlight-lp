import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    business: "Restaurante Dom Giuseppe",
    content: "Graças à landing page criada pelo especialista, nosso restaurante viu um aumento significativo nas reservas online! A página é linda e funciona perfeitamente.",
    rating: 5,
    initials: "MS"
  },
  {
    name: "João Santos", 
    business: "Loja Bella Moda",
    content: "A página trouxe mais visibilidade para nossa loja e facilitou o contato com novos clientes. Recomendamos para qualquer estabelecimento local!",
    rating: 5,
    initials: "JS"
  },
  {
    name: "Ana Costa",
    business: "Café Aroma",
    content: "Profissional excelente! Nossa cafeteria ganhou uma presença digital incrível. Os clientes elogiam muito o site e fazem mais pedidos online.",
    rating: 5,
    initials: "AC"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Depoimentos de <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre os resultados alcançados
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card"
            >
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;