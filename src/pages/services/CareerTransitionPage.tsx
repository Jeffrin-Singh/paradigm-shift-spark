import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { HelpCircle } from "lucide-react";

const questions = [
  "Are you a Dynamic Business?",
  "Is your pace of change increasing your risk of workforce change?",
];

const CareerTransitionPage = () => (
  <Layout>
    <PageHero title="Career Transition Services" subtitle="Our Services" description="Flexible coaching and learning programs for workforce transitions." />
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {questions.map((q, i) => (
              <div key={i} className="bg-primary/5 rounded-xl p-6 border border-primary/10 text-center">
                <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium">{q}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our suite of flexible coaching and learning programs provides guidance and support to your departing workforce find new jobs faster. Through in-person, virtual, blended learning or group programs, we help individuals focus on their next move and develop the skills to achieve their career goals.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Button asChild size="lg"><Link to="/contact">Learn About Transition Services</Link></Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default CareerTransitionPage;
