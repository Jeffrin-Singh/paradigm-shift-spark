import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import serviceImage from "@/assets/service-learning.jpg";

const LearningSolutionsPage = () => (
  <Layout>
    <PageHero title="Learning Solutions" subtitle="Our Services" description="Best-in-class training processes to reduce costs and deliver quantifiable results." image={serviceImage} />
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We offer a suite of best-in-class training processes that enable customers to reduce costs, sharpen their business focus and obtain quantifiable results. We offer training solutions to small and medium enterprises and large enterprises across our footprint.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our training services deliver more relevant training to organisations, bring proven best practices into business processes and redirect surplus training capital into core business solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We provide Training Solutions on high-end Technologies, Soft-skills, Channel Enablement Services and Managed Training Services (MTS) that include Learning Content, Learning Delivery, Learning Technology and Learning Administration Solutions.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <Button asChild size="lg"><Link to="/contact">Discuss Learning Solutions</Link></Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default LearningSolutionsPage;
