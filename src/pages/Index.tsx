import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ServiceCard from "@/components/shared/ServiceCard";
import { Users, Clock, ClipboardCheck, BarChart3, GraduationCap, ArrowRightLeft, Globe, Lightbulb, Shield, TrendingUp, Star, Handshake, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import aboutImage from "@/assets/about.jpg";
import peopleBand from "@/assets/people-band.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import featureHandshake from "@/assets/feature-handshake.jpg";


const services = [
  { title: "Permanent Recruitment", description: "Finding the right person for the right job at the shortest possible time.", icon: Users, path: "/services/permanent-recruitment" },
  { title: "Temporary Staffing", description: "We help you with your staffing requirements so you can focus on your core business.", icon: Clock, path: "/services/temporary-staffing" },
  { title: "Candidate Assessments", description: "Streamline and optimize employee recruitment with behavioural and skills assessments.", icon: ClipboardCheck, path: "/services/candidate-assessments" },
  { title: "Employee Insights", description: "Read the pulse of your organisation with enterprise surveys and analytics.", icon: BarChart3, path: "/services/employee-insights" },
  { title: "Learning Solutions", description: "Best-in-class training processes to reduce costs and deliver quantifiable results.", icon: GraduationCap, path: "/services/learning-solutions" },
  { title: "Career Transition Services", description: "Flexible coaching and learning programs to help departing workforce find new roles faster.", icon: ArrowRightLeft, path: "/services/career-transition" },
];

const strengths = [
  { icon: Globe, title: "Multi-National Reach", desc: "Global presence with offices across four continents." },
  { icon: Lightbulb, title: "Innovative Solutions", desc: "Cutting-edge approaches to workforce challenges." },
  { icon: Shield, title: "Reliable Delivery", desc: "Consistent, dependable service every time." },
  { icon: TrendingUp, title: "Cost-Effective", desc: "Maximum value without compromising quality." },
  { icon: Star, title: "Quality-Driven", desc: "Excellence embedded in everything we do." },
  { icon: Handshake, title: "Industry Expertise", desc: "Deep knowledge across sectors and markets." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-gradient relative overflow-hidden">
      <img
        src={heroImage}
        alt="Diverse multinational business professionals collaborating in a modern corporate office"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(205,78%,40%,0.3)_0%,transparent_60%)]" />
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.2em] font-medium mb-4">Human Capital Solutions</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-[1.1] mb-6">
              Enabling<br />Careers
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              A multi-national firm offering human capital solutions for every stage in the employee lifecycle.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* About preview */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">About Paradigm Shift</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Solutions for Every Stage of the Employee Lifecycle</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Paradigm Shift is a multi-national firm offering human capital solutions for every stage in the employee lifecycle.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A potent combination of multi-national reach, industry knowledge, innovative solutions and a skilled team gives us the edge to deliver value for clients through reliable, cost-effective and consistently high-quality services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our suite of services range from a comprehensive array of outsourcing and consulting services as well as world-class staffing on a temporary, temporary-to-hire, and direct-hire basis.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-2xl blur-2xl" />
              <img
                src={aboutImage}
                alt="Executive leadership team in strategic consulting meeting with global skyline view"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width={1600}
                height={1200}
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 card-elevated border border-border/50 hidden sm:block max-w-[220px]">
                <Globe className="w-6 h-6 text-primary mb-2" />
                <p className="font-heading font-semibold text-sm text-foreground">4 Global Offices</p>
                <p className="text-muted-foreground text-xs mt-1">Sydney · Singapore · Dubai · Mumbai</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-gradient py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Services</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.path} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>

    {/* People band — full bleed editorial image with stats overlay */}
    <section className="relative overflow-hidden">
      <img
        src={peopleBand}
        alt="Diverse business professionals walking through a modern office lobby"
        loading="lazy"
        width={1920}
        height={1080}
        className="w-full h-[420px] md:h-[520px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-xl text-primary-foreground">
              <p className="text-primary-foreground/70 text-sm uppercase tracking-[0.2em] font-medium mb-4">People Are Our Business</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8">Connecting talent with opportunity, across the world.</h2>
              <div className="grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="text-3xl md:text-4xl font-heading font-bold">4</div>
                  <div className="text-primary-foreground/70 text-xs uppercase tracking-wider mt-1">Continents</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-heading font-bold">6</div>
                  <div className="text-primary-foreground/70 text-xs uppercase tracking-wider mt-1">Services</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-heading font-bold">1</div>
                  <div className="text-primary-foreground/70 text-xs uppercase tracking-wider mt-1">Trusted Partner</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* People-led — meet our specialists */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">Specialist Consultants</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Backed by people who know your industry inside out.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our consultants combine deep sector expertise with extensive personal networks to deliver outcomes that matter — for businesses and for careers.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { img: portrait1, label: "Recruitment", desc: "Permanent & executive search" },
            { img: portrait2, label: "Staffing", desc: "Flexible workforce solutions" },
            { img: portrait3, label: "Assessments", desc: "Behavioural & skills" },
            { img: featureHandshake, label: "Transition", desc: "Coaching & outplacement" },
          ].map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] card-elevated">
                <img
                  src={p.img}
                  alt={p.label}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                  <h3 className="font-heading font-semibold text-lg">{p.label}</h3>
                  <p className="text-primary-foreground/80 text-sm">{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">Why Paradigm Shift</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">The Paradigm Shift Advantage</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex gap-4 bg-card rounded-xl p-6 border border-border/50 card-elevated">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Transform Your Workforce?</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
            Whether you need staffing, assessments, engagement insights, learning, or transition support — we're here to help.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
