import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const forClients = [
  { name: "Permanent Recruitment", path: "/for-clients/permanent-recruitment" },
  { name: "Temporary Staffing", path: "/for-clients/temporary-staffing" },
  { name: "Candidate Assessments", path: "/for-clients/candidate-assessments" },
  { name: "Employee Insights", path: "/for-clients/employee-insights" },
  { name: "Learning Solutions", path: "/for-clients/learning-solutions" },
  { name: "Career Transition", path: "/for-clients/career-transition" },
  { name: "Payroll Services", path: "/for-clients/payroll-services" },
];

const contractors = [
  { name: "Contracting Options", path: "/contractors/contracting" },
  // TODO: Replace path below with the actual third-party Contractors Hub URL
  { name: "Contractors Hub", path: "https://www.theaccessgroup.com/en-au/payroll/services/outsourcing/?gclsrc=aw.ds&&source=GoogleSearchNetwork&device=m&campaign=17805198892&adgroup=139895795955&keyword=australian%20payroll%20provider&matchtype=p&placement=&adposition=&location=9071737&gad_source=1&gad_campaignid=17805198892&gclid=Cj0KCQjw_vnQBhCxARIsADcZyxJyjem6aFsLNXLciDiySnCZoUc9MzZuRSdW0wWj7qT1y2jKrSsH0wMaAjyrEALw_wcB#compare", external: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [forClientsOpen, setForClientsOpen] = useState(false);
  const [contractorsOpen, setContractorsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-28 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Paradigm Shift logo" className="h-16 md:h-20 w-auto" />
          <span className="hidden sm:block text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">Enabling Careers</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"}`}>Home</Link>
          <Link to="/about" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/about") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"}`}>About Us</Link>

          <div className="relative group">
            <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith("/for-clients") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"}`}>
              Clients <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card rounded-lg border border-border shadow-xl p-2 min-w-[240px]">
                <Link to="/for-clients" className="block px-3 py-2 text-sm font-semibold text-foreground rounded-md hover:bg-muted transition-colors">Clients</Link>
                <div className="h-px bg-border my-1" />
                {forClients.map(s => (
                  <Link key={s.path} to={s.path} className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-muted hover:text-foreground transition-colors">{s.name}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith("/contractors") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"}`}>
              Contractors <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card rounded-lg border border-border shadow-xl p-2 min-w-[240px]">
                {contractors.map(s => (
                  s.external ? (
                    <a key={s.path} href={s.path} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-muted hover:text-foreground transition-colors">{s.name}</a>
                  ) : (
                    <Link key={s.path} to={s.path} className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-muted hover:text-foreground transition-colors">{s.name}</Link>
                  )
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/contact") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"}`}>Contact Us</Link>
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">About Us</Link>
            <button onClick={() => setForClientsOpen(!forClientsOpen)} className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
              Clients <ChevronDown className={`w-4 h-4 transition-transform ${forClientsOpen ? "rotate-180" : ""}`} />
            </button>
            {forClientsOpen && (
              <div className="pl-4 space-y-1">
                <Link to="/for-clients" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-semibold rounded-md hover:bg-muted">Clients</Link>
                {forClients.map(s => (
                  <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-muted">{s.name}</Link>
                ))}
              </div>
            )}
            <button onClick={() => setContractorsOpen(!contractorsOpen)} className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
              Contractors <ChevronDown className={`w-4 h-4 transition-transform ${contractorsOpen ? "rotate-180" : ""}`} />
            </button>
            {contractorsOpen && (
              <div className="pl-4 space-y-1">
                {contractors.map(s => (
                  s.external ? (
                    <a key={s.path} href={s.path} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-muted">{s.name}</a>
                  ) : (
                    <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-muted">{s.name}</Link>
                  )
                ))}
              </div>
            )}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">Contact Us</Link>
            <div className="pt-2">
              <Button asChild className="w-full" size="sm">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
