import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Globe, Users, Lightbulb, Target, Shield, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about.jpg";

const values = [
  { icon: Globe, title: "Multi-National Reach", desc: "Our global presence enables us to serve clients across continents, bringing diverse perspectives and local market expertise to every engagement." },
  { icon: Users, title: "Skilled Team", desc: "Our team of seasoned professionals brings deep industry knowledge and a passion for connecting talent with opportunity." },
  { icon: Lightbulb, title: "Innovative Solutions", desc: "We leverage cutting-edge technology and methodologies to deliver modern, effective human capital solutions." },
  { icon: Target, title: "Industry Knowledge", desc: "Deep expertise across sectors allows us to understand the unique challenges and requirements of every client." },
  { icon: Shield, title: "Reliable Delivery", desc: "Consistency and dependability are at the heart of everything we do — our clients can count on us every time." },
  { icon: TrendingUp, title: "Cost-Effective For Clients", desc: "We maximise value while maintaining the highest standards of quality and service excellence." },
];

const AboutPage = () => (
  <Layout>
    <PageHero title="About Paradigm Shift" subtitle="Who We Are" description="A multi-national firm offering human capital solutions for every stage in the employee lifecycle." image={aboutImage} />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Paradigm Shift is a multi-national firm offering human capital solutions for every stage in the employee lifecycle. A potent combination of multi-national reach, industry knowledge, innovative solutions and a skilled team gives us the edge to deliver value for clients through reliable, cost-effective and consistently high-quality services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our suite of services range from a comprehensive array of outsourcing and consulting services as well as world-class staffing on a temporary, temporary-to-hire, and direct-hire basis.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-gradient py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What Sets Us Apart</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-card rounded-xl p-6 border border-border/50 card-elevated h-full">
                <v.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              We partner with organisations to understand their unique needs, culture, and goals. Our consultative approach ensures that every solution we deliver is tailored, effective, and aligned with your business strategy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Global Reach</h2>
            <p className="text-muted-foreground leading-relaxed">
              With offices in Sydney, Singapore, Dubai, and Mumbai, we bring a truly global perspective to human capital solutions. Our multi-national footprint allows us to serve clients wherever they operate and connect talent across borders.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="hero-gradient py-16">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <p className="text-primary-foreground/70 text-lg italic mb-4">People Are Our Business</p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
