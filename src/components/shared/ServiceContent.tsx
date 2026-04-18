import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface ServiceContentProps {
  image: string;
  imageAlt: string;
  children: ReactNode;
  imageSide?: "left" | "right";
}

const ServiceContent = ({ image, imageAlt, children, imageSide = "right" }: ServiceContentProps) => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${imageSide === "left" ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <ScrollReveal>
          <div>{children}</div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="relative lg:sticky lg:top-28">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/15 to-accent/10 rounded-2xl blur-2xl" />
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1024}
              height={1280}
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ServiceContent;
