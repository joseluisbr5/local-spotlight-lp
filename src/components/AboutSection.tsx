const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Quem Eu Sou
          </h2>
          
          <div className="bg-card rounded-2xl p-12 shadow-card border border-border/50">
            <p className="text-xl leading-relaxed text-foreground">
              Eu sou <strong className="text-primary font-semibold">José Luis</strong>, estudante de Engenharia de Software na UNIFSA, focado em ajudar negócios locais a se destacarem online. Se você é proprietário de um restaurante, loja ou outro estabelecimento, sei como é importante criar uma experiência digital que atraia clientes da sua área.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground mt-6">
              <strong className="text-accent">Junte-se aos meus clientes satisfeitos</strong> e veja seu negócio prosperar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;