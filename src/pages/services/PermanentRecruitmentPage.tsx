import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { CheckCircle } from "lucide-react";

const expertise = [
  "Administrative & Support Services",
  "Finance & Accounting",
  "Human Resources",
  "Information Technology",
  "Project Management",
];

const PermanentRecruitmentPage = () => (
  <Layout>
    <PageHero title="Permanent Recruitment" subtitle="Our Services" description="Finding the right person for the right job at the shortest possible time!" />
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our Permanent Recruitment division helps businesses of all size to fill their vacancies with the best talent to help drive business growth. When you work with Paradigm Shift, you can be rest assured that we have your best interests at heart - our specialist recruitment consultants know your industry inside out, understand your needs, and are true experts in the field they recruit for.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Each of our consultants has an extensive individual network in their field and is constantly in touch with the professionals you're looking for. They will work with you to make sure they find the best potential candidates that are the best fit for your organization - not just from a job fit, but also how they fit with the culture of your organization.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">Areas of Expertise</h3>
          <ul className="space-y-3 mb-8">
            {expertise.map(e => (
              <li key={e} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" /> {e}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <Button asChild size="lg"><Link to="/contact">Discuss Your Recruitment Needs</Link></Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default PermanentRecruitmentPage;
