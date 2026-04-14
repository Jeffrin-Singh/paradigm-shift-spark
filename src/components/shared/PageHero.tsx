import ScrollReveal from "./ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHero = ({ title, subtitle, description }: PageHeroProps) => (
  <section className="hero-gradient py-20 md:py-28">
    <div className="container mx-auto px-4 text-center">
      <ScrollReveal>
        {subtitle && <p className="text-primary-foreground/70 text-sm uppercase tracking-widest font-medium mb-4">{subtitle}</p>}
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">{title}</h1>
        {description && <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>}
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
