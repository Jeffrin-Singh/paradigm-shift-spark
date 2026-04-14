import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, path, delay = 0 }: ServiceCardProps) => (
  <ScrollReveal delay={delay}>
    <Link to={path} className="group block bg-card rounded-xl p-6 card-elevated border border-border/50 h-full">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  </ScrollReveal>
);

export default ServiceCard;
