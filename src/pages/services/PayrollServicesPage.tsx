import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ServiceContent from "@/components/shared/ServiceContent";
import { CheckCircle } from "lucide-react";
import serviceImage from "@/assets/service-permanent.jpg";

const payrollIncludes = [
  "Payroll processing and management — including onboarding, rostering, timesheets, leave, award interpretation, and termination payments",
  "Payment processing and bank file generation",
  "Single Touch Payroll (STP) reporting",
  "Payday Super processing",
  "End-of-financial-year reconciliation and rollover",
  "Payroll and compliance reporting",
  "Comprehensive reporting — real-time workforce insights on demand",
];

const PayrollServicesPage = () => (
  <Layout>
    <PageHero
      title="Payroll Services"
      subtitle="Clients"
      description="Accurate, compliant, and timely outsourced payroll services across Australia and New Zealand."
      image={serviceImage}
    />
    <ServiceContent image={serviceImage} imageAlt="Payroll specialists reviewing reports">
      <p className="text-muted-foreground leading-relaxed mb-4">
        Access Payroll Services provides accurate, compliant, and timely outsourced payroll services across Australia and New Zealand. Our flexible solutions support organisations of any size, across any industry, and with any complexity without the burden of managing payroll in-house.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Backed by decades of experience, our qualified payroll professionals process payrolls for up to 25,000 employees across multiple jurisdictions. By partnering with us, you reduce compliance risk, remove administrative overhead, and free your team to focus on core business priorities.
      </p>

      <h3 className="text-xl font-heading font-bold text-foreground mb-4">Flexible outsourced payroll</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Our flexible outsourced payroll service supports all or part of your payroll process, scaling as your business grows or changes. You continue to manage your HR, time and attendance through your own systems, while our team handles the payroll processing and management on your behalf.
      </p>

      <p className="font-semibold text-foreground mb-4">Flexible outsourced payroll can include:</p>
      <ul className="space-y-3 mb-8">
        {payrollIncludes.map(item => (
          <li key={item} className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground"
      >
        <Link to="/contact">Talk to a specialist</Link>
      </Button>
    </ServiceContent>
  </Layout>
);

export default PayrollServicesPage;
