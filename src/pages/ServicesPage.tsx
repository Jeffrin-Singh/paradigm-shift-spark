import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ServiceCard from "@/components/shared/ServiceCard";
import { Users, Clock, ClipboardCheck, BarChart3, GraduationCap, ArrowRightLeft } from "lucide-react";

const services = [
  { title: "Permanent Recruitment", description: "Finding the right person for the right job at the shortest possible time. Our specialist consultants know your industry inside out.", icon: Users, path: "/services/permanent-recruitment" },
  { title: "Temporary Staffing", description: "We help you with your staffing requirements so that you can focus on your core business. A combination of people, process & technology.", icon: Clock, path: "/services/temporary-staffing" },
  { title: "Candidate Assessments", description: "Streamline and optimize employee recruitment and onboarding with behavioural and skills assessments.", icon: ClipboardCheck, path: "/services/candidate-assessments" },
  { title: "Employee Insights", description: "Read the pulse of your organisation with enterprise surveys and powerful analytics capabilities.", icon: BarChart3, path: "/services/employee-insights" },
  { title: "Learning Solutions", description: "Best-in-class training processes that enable customers to reduce costs, sharpen focus, and obtain quantifiable results.", icon: GraduationCap, path: "/services/learning-solutions" },
  { title: "Career Transition Services", description: "Flexible coaching and learning programs that provide guidance and support to your departing workforce to find new jobs faster.", icon: ArrowRightLeft, path: "/services/career-transition" },
];

const ServicesPage = () => (
  <Layout>
    <PageHero
      title="Our Services"
      subtitle="Human Capital Solutions"
      description="Human capital solutions across the employee lifecycle — from recruitment and selection to engagement, development, and transition."
    />
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.path} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
