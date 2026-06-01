import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Permanent Recruitment", path: "/services/permanent-recruitment" },
  { name: "Temporary Staffing", path: "/services/temporary-staffing" },
  { name: "Candidate Assessments", path: "/services/candidate-assessments" },
  { name: "Employee Insights", path: "/services/employee-insights" },
  { name: "Learning Solutions", path: "/services/learning-solutions" },
  { name: "Career Transition Services", path: "/services/career-transition" },
];

const offices = [
  { city: "Sydney", address: "49th Floor, 8 Parramatta Square, Sydney, New South Wales, 2150, Australia" },
  { city: "Melbourne", address: "460 Lonsdale Street, Level 13 & Level 14, Melbourne, Victoria 3000, Australia" },
  { city: "Brisbane", address: "80 Ann Street, Brisbane, Queensland, 4000, Australia" },
  { city: "Perth", address: "Level 27, St Martins Centre, 44 St Georges Terrace, Perth, Western Australia, 6000, Australia" },
  { city: "New Zealand", address: "50 Albert St, Auckland CBD, Auckland, 1010" },
  { city: "Singapore", address: "410 North, Bridge North, Singapore, 188726, Singapore" },
  { city: "Hong Kong", address: "16F & 17F, Nathan Road, Kowloon, Hong Kong" },
  { city: "UAE", address: "Standard Chartered Tower, Level 5, Emaar Square Downtown Burj Khalifa, Dubai, United Arab Emirates" },
  { city: "India", address: "Level 15 Concorde Towers UB City, #24 Vittal Mallya Road, Ashok Nagar, Bengaluru, Karnataka, 560001, India" },
];

const Footer = () => (
  <footer className="bg-[hsl(224,30%,8%)] text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(273,58%,40%,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,hsl(199,76%,53%,0.18),transparent_60%)]" />
    <div className="container mx-auto px-4 py-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Paradigm Shift logo" className="h-24 w-auto mb-4 brightness-0 invert opacity-90" />
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
    <div className="border-t border-primary-foreground/10 relative">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Paradigm Shift. All rights reserved.</p>
        <p className="text-xs text-primary-foreground/40">People Are Our Business</p>
      </div>
    </div>
  </footer>
);

export default Footer;
