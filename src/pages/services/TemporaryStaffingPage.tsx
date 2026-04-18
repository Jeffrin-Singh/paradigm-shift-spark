import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ServiceContent from "@/components/shared/ServiceContent";
import { CheckCircle } from "lucide-react";
import serviceImage from "@/assets/service-temporary.jpg";

const areas = [
  "Administrative & Support Services",
  "Finance & Accounting",
  "Human Resources",
  "Information Technology",
  "Project Management",
];

const TemporaryStaffingPage = () => (
  <Layout>
    <PageHero title="Temporary Staffing" subtitle="Our Services" description="We help you with your staffing requirements so that you can focus on your core business!" image={serviceImage} />
    <ServiceContent image={serviceImage} imageAlt="Workforce solutions consultant in modern office" imageSide="left">
      <p className="text-muted-foreground leading-relaxed mb-4">
        A combination of people, process & technology focus enables us to enhance business productivity by enabling our clients to outsource their staffing requirements and allowing them to focus on operating and growing their core business.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        We work across industry verticals providing temporary workforce across the following areas:
      </p>
      <ul className="space-y-3 mb-8">
        {areas.map(a => (
          <li key={a} className="flex items-center gap-3 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-primary shrink-0" /> {a}
          </li>
        ))}
      </ul>
      <Button asChild size="lg"><Link to="/contact">Discuss Your Staffing Needs</Link></Button>
    </ServiceContent>
  </Layout>
);

export default TemporaryStaffingPage;
