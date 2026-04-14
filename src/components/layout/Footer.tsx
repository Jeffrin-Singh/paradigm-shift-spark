import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const services = [
  { name: "Permanent Recruitment", path: "/services/permanent-recruitment" },
  { name: "Temporary Staffing", path: "/services/temporary-staffing" },
  { name: "Candidate Assessments", path: "/services/candidate-assessments" },
  { name: "Employee Insights", path: "/services/employee-insights" },
  { name: "Learning Solutions", path: "/services/learning-solutions" },
  { name: "Career Transition Services", path: "/services/career-transition" },
];

const offices = [
  { city: "Sydney", address: "Level 15 Eclipse Tower, 60 Station Street, Parramatta NSW 2150" },
  { city: "Singapore", address: "Level 39 Marina Bay Financial Centre Tower 2, 10 Marina Boulevard Singapore, 018983" },
  { city: "Dubai", address: "Level 41, Emirates Towers, Sheikh Zayed Road, Dubai" },
  { city: "Mumbai", address: "Level 8, Vibgyor Towers C62, G Block, Bandra Kurla Complex, Mumbai, 400 098" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold mb-2">Paradigm Shift</h3>
          <p className="text-primary-foreground/60 text-sm mb-4">Enabling Careers</p>
          <p className="text-primary-foreground/50 text-sm italic">People Are Our Business</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Services</Link></li>
            <li><Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">Services</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.path}><Link to={s.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">Global Offices</h4>
          <ul className="space-y-3">
            {offices.map(o => (
              <li key={o.city} className="flex gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent" />
                <span><strong className="text-primary-foreground/80">{o.city}</strong> — {o.address}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Paradigm Shift. All rights reserved.</p>
        <p className="text-xs text-primary-foreground/40">People Are Our Business</p>
      </div>
    </div>
  </footer>
);

export default Footer;
