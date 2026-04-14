import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { HelpCircle } from "lucide-react";

const questions = [
  "Do you run a people business?",
  "Do you know what drives your people?",
];

const EmployeeInsightsPage = () => (
  <Layout>
    <PageHero title="Employee Insights" subtitle="Our Services" description="Read the pulse of your organisation with an enterprise survey." />
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
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our surveys help our clients create a high-performance culture through improved return on talent investments and deliver measurable business results.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our suite of surveys, along with analytics capabilities to help you strategically listen to employee feedback, analyze what you are hearing and act on those insights to improve employee engagement and business performance.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            You can gain insights, mitigate risks, address hot spots, identify areas of opportunity and contribute to the overall success of your business.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Button asChild size="lg"><Link to="/contact">Explore Employee Insights</Link></Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default EmployeeInsightsPage;
