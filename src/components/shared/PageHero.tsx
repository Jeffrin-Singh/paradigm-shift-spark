import ScrollReveal from "./ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

const PageHero = ({ title, subtitle, description, image }: PageHeroProps) => (
  <section className="hero-gradient relative overflow-hidden py-20 md:py-28">
    {image && (
      <>
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
      </>
    )}
    <div className="container mx-auto px-4 text-center relative z-10">
      <ScrollReveal>
        {subtitle && <p className="text-primary-foreground/70 text-sm uppercase tracking-widest font-medium mb-4">{subtitle}</p>}
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">{title}</h1>
        {description && <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>}
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
