import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Users, Clock, ClipboardCheck, BarChart3, GraduationCap, ArrowRightLeft, ArrowRight, type LucideIcon } from "lucide-react";
import imgPermanent from "@/assets/service-permanent.jpg";
import imgTemporary from "@/assets/service-temporary.jpg";
import imgAssessments from "@/assets/service-assessments.jpg";
import imgInsights from "@/assets/service-insights.jpg";
import imgLearning from "@/assets/service-learning.jpg";
import imgTransition from "@/assets/service-transition.jpg";

interface Offering {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  image: string;
}

const offerings: Offering[] = [
  { title: "Permanent Recruitment", description: "Finding the right person for the right job at the shortest possible time. Our specialist consultants know your industry inside out.", icon: Users, path: "/for-clients/permanent-recruitment", image: imgPermanent },
  { title: "Temporary Staffing", description: "We help you with your staffing requirements so that you can focus on your core business. A combination of people, process & technology.", icon: Clock, path: "/for-clients/temporary-staffing", image: imgTemporary },
  { title: "Candidate Assessments", description: "Streamline and optimize employee recruitment and onboarding with behavioural and skills assessments.", icon: ClipboardCheck, path: "/for-clients/candidate-assessments", image: imgAssessments },
  { title: "Employee Insights", description: "Read the pulse of your organisation with enterprise surveys and powerful analytics capabilities.", icon: BarChart3, path: "/for-clients/employee-insights", image: imgInsights },
  { title: "Learning Solutions", description: "Best-in-class training processes that enable customers to reduce costs, sharpen focus, and obtain quantifiable results.", icon: GraduationCap, path: "/for-clients/learning-solutions", image: imgLearning },
  { title: "Career Transition", description: "Flexible coaching and learning programs that provide guidance and support to your departing workforce to find new jobs faster.", icon: ArrowRightLeft, path: "/for-clients/career-transition", image: imgTransition },
];

const ForClientsPage = () => (
  <Layout>
    <PageHero
      title="Clients"
      subtitle="Human Capital Solutions"
      description="Human capital solutions across the employee lifecycle — from recruitment and selection to engagement, development, and transition."
    />
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((s, i) => (
            <ScrollReveal key={s.path} delay={i * 100}>
              <Link to={s.path} className="group block bg-card rounded-xl overflow-hidden card-elevated border border-border/50 h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-lg bg-card/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ForClientsPage;
