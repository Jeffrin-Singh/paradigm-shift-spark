import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { CheckCircle, ArrowRight, Briefcase, Building2 } from "lucide-react";
import heroImage from "@/assets/service-temporary.jpg";
import independentImage from "@/assets/feature-handshake.jpg";
import ptyLtdImage from "@/assets/service-permanent.jpg";

const options = [
  {
    id: "independent-contracting",
    name: "Independent Contracting",
    description: "Work as a PAYG contractor while we take care of payroll, tax, super and compliance.",
    icon: Briefcase,
  },
  {
    id: "pty-ltd-company",
    name: "Pty Ltd Company",
    description: "Contract through your own incorporated entity and invoice us directly for your services.",
    icon: Building2,
  },
];

const whatWeTakeCareOf = [
  "Payroll processing and weekly payments",
  "PAYG tax withholding and remittance",
  "Superannuation contributions",
  "Timesheet management and approvals",
  "Workers' compensation and insurances",
  "Compliance reporting and record keeping",
];

const benefits = [
  { title: "Cost Savings", desc: "We take care of the administration for you." },
  { title: "Simplicity", desc: "Submit your timesheet and we handle the rest." },
  { title: "Time Saving", desc: "We manage tax, superannuation, reporting and administration." },
  { title: "Legislative Compliance", desc: "We stay up to date with regulations and obligations on your behalf." },
];

const ptyLtdRequirements = [
  "Hold a valid ABN and be registered for GST",
  "Maintain Professional Indemnity and Public Liability insurance",
  "Manage your own superannuation arrangements",
  "Lodge your own BAS and meet all tax obligations",
  "Invoice Paradigm Shift on agreed payment terms",
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
};

const ContractingPage = () => (
  <Layout>
    <PageHero
      title="Contracting Options"
      subtitle="Contractors"
      description="Choose from two engagement options designed to suit how you want to work with us."
      image={heroImage}
    />

    {/* Option selector */}
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Two engagement options
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you'd prefer us to handle the administration or you'd like to operate through your own
              Pty Ltd company, we have an engagement model to match. Select an option below to learn more.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <ScrollReveal key={opt.id} delay={i * 120}>
                <button
                  type="button"
                  onClick={() => scrollToSection(opt.id)}
                  className="group w-full text-left bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Jump to ${opt.name} section`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">{opt.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{opt.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Independent Contracting */}
    <section id="independent-contracting" className="py-20 md:py-28 bg-muted/30 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                Option One
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Independent Contracting
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With Independent Contracting, you're engaged as a PAYG contractor through Paradigm Shift.
                You focus on delivering great work for the client while we manage every aspect of the
                administration that comes with contracting.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                It's the simplest way to contract — no need to set up your own company, no invoicing, and no
                chasing payments. You're paid on a regular cycle with tax and super taken care of automatically.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-4">What Do We Take Care Of?</h3>
              <ul className="space-y-3 mb-10">
                {whatWeTakeCareOf.map(item => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Benefits of this Method</h3>
              <ul className="space-y-4 mb-8">
                {benefits.map(b => (
                  <li key={b.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">{b.title}</span>
                      <span className="text-muted-foreground"> – {b.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg">
                <Link to="/contact">Talk to Us About Contracting</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/15 to-accent/10 rounded-2xl blur-2xl" />
              <img
                src={independentImage}
                alt="Independent contractor working with a Paradigm Shift consultant"
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

    {/* Pty Ltd Company */}
    <section id="pty-ltd-company" className="py-20 md:py-28 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal delay={150}>
            <div className="relative lg:sticky lg:top-28 order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/15 to-accent/10 rounded-2xl blur-2xl" />
              <img
                src={ptyLtdImage}
                alt="Pty Ltd contractor in a professional meeting"
                loading="lazy"
                width={1024}
                height={1280}
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                Option Two
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Pty Ltd Company
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Already operating through your own incorporated entity? Contract with Paradigm Shift through
                your Pty Ltd company and invoice us directly for the services you deliver to our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This option suits established contractors who prefer the autonomy of running their own business,
                manage their own tax and super arrangements, and hold their own insurances.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-4">What You'll Need</h3>
              <ul className="space-y-3 mb-10">
                {ptyLtdRequirements.map(item => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-heading font-bold text-foreground mb-2">Autonomy</h4>
                  <p className="text-sm text-muted-foreground">Run your contracting career as a business with full control over your operations.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-heading font-bold text-foreground mb-2">Flexibility</h4>
                  <p className="text-sm text-muted-foreground">Structure your tax, super and expenses in a way that works for your business.</p>
                </div>
              </div>

              <Button asChild size="lg">
                <Link to="/contact">Discuss a Pty Ltd Engagement</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Not sure which option suits you?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team will walk you through both engagement options and help you choose the one that best
              fits your situation. Get in touch and we'll take it from there.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default ContractingPage;
