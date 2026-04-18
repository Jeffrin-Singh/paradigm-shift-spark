import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ServiceContent from "@/components/shared/ServiceContent";
import { HelpCircle } from "lucide-react";
import serviceImage from "@/assets/service-assessments.jpg";
import portrait from "@/assets/portrait-3.jpg";

const questions = [
  "Are you overwhelmed by the number of applications?",
  "Are the candidates as good as they claim?",
  "Do they have the specific abilities needed to perform the role?",
];

const CandidateAssessmentsPage = () => (
  <Layout>
    <PageHero title="Candidate Assessments" subtitle="Our Services" description="Streamline and optimize employee recruitment and onboarding." image={serviceImage} />
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {questions.map((q, i) => (
              <div key={i} className="bg-primary/5 rounded-xl p-5 border border-primary/10 text-center">
                <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium text-sm">{q}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
    <ServiceContent image={portrait} imageAlt="Talent assessment specialist in modern office">
      <p className="text-muted-foreground leading-relaxed mb-4">
        Our Assessment division helps businesses of all size with an affordable and dependable solution to streamline and optimize employee recruitment and onboarding. Our tools help you assess and hire high-quality talent through a suite of behavioural and skills assessments.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Our Behavioral Assessments help elevate the quality of hires, by predicting performance and potential with an understanding of traits, skills and fit, as well as insight into developing and retaining top performers.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Our Skills Assessments suite is tailored for numerous roles across industries. These are developed with an objective to deliver a faster, more effective method for managing large talent pools to help determine the skill fitment for a specific job role.
      </p>
      <Button asChild size="lg"><Link to="/contact">Learn More About Assessments</Link></Button>
    </ServiceContent>
  </Layout>
);

export default CandidateAssessmentsPage;
