import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Permanent Recruitment", path: "/services/permanent-recruitment" },
  { name: "Temporary Staffing", path: "/services/temporary-staffing" },
  { name: "Candidate Assessments", path: "/services/candidate-assessments" },
  { name: "Employee Insights", path: "/services/employee-insights" },
  { name: "Learning Solutions", path: "/services/learning-solutions" },
  { name: "Career Transition Services", path: "/services/career-transition" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3">
      <div
        className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-[hsl(0,0%,100%,0.08)] bg-[hsl(220,25%,6%,0.85)] backdrop-blur-xl shadow-[0_2px_24px_-4px_hsl(0,0%,0%,0.4)]"
            : "border-[hsl(0,0%,100%,0.06)] bg-[hsl(220,25%,6%,0.7)] backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-[hsl(0,0%,100%)] flex items-center justify-center">
              <span className="text-[hsl(220,25%,8%)] font-bold text-sm leading-none">P</span>
            </div>
            <span className="font-heading font-bold text-[15px] text-[hsl(0,0%,100%)] tracking-tight">
              Paradigm Shift
            </span>
          </Link>

          {/* Center nav links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.path} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                      isActive(link.path)
                        ? "text-[hsl(0,0%,100%)]"
                        : "text-[hsl(0,0%,100%,0.55)] hover:text-[hsl(0,0%,100%,0.9)]"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-[hsl(220,25%,10%,0.95)] backdrop-blur-xl rounded-xl border border-[hsl(0,0%,100%,0.08)] p-1.5 min-w-[220px] shadow-[0_8px_32px_-4px_hsl(0,0%,0%,0.5)]">
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-[13px] font-semibold text-[hsl(0,0%,100%,0.9)] rounded-lg hover:bg-[hsl(0,0%,100%,0.06)] transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="h-px bg-[hsl(0,0%,100%,0.06)] my-1" />
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="block px-3 py-2 text-[13px] text-[hsl(0,0%,100%,0.5)] rounded-lg hover:bg-[hsl(0,0%,100%,0.06)] hover:text-[hsl(0,0%,100%,0.9)] transition-colors"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-[hsl(0,0%,100%)]"
                      : "text-[hsl(0,0%,100%,0.55)] hover:text-[hsl(0,0%,100%,0.9)]"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Right buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="px-4 py-1.5 text-[13px] font-medium text-[hsl(0,0%,100%,0.7)] rounded-lg border border-[hsl(0,0%,100%,0.12)] hover:border-[hsl(0,0%,100%,0.25)] hover:text-[hsl(0,0%,100%)] transition-all duration-200"
            >
              Request a demo
            </Link>
            <Link
              to="/contact"
              className="px-4 py-1.5 text-[13px] font-semibold text-[hsl(220,25%,8%)] bg-[hsl(0,0%,100%)] rounded-lg hover:bg-[hsl(0,0%,100%,0.9)] transition-all duration-200"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[hsl(0,0%,100%,0.7)] hover:text-[hsl(0,0%,100%)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[hsl(0,0%,100%,0.06)] px-4 py-4 space-y-1 animate-fade-in">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[hsl(0,0%,100%,0.7)] rounded-lg hover:bg-[hsl(0,0%,100%,0.06)] transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-3 space-y-0.5 mt-1">
                      <Link
                        to="/services"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm font-semibold text-[hsl(0,0%,100%,0.7)] rounded-lg hover:bg-[hsl(0,0%,100%,0.06)]"
                      >
                        All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-[hsl(0,0%,100%,0.5)] rounded-lg hover:bg-[hsl(0,0%,100%,0.06)] hover:text-[hsl(0,0%,100%,0.8)]"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-[hsl(0,0%,100%,0.7)] rounded-lg hover:bg-[hsl(0,0%,100%,0.06)] transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-center text-[hsl(0,0%,100%,0.7)] rounded-lg border border-[hsl(0,0%,100%,0.12)] hover:border-[hsl(0,0%,100%,0.25)] transition-all"
              >
                Request a demo
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-center text-[hsl(220,25%,8%)] bg-[hsl(0,0%,100%)] rounded-lg hover:bg-[hsl(0,0%,100%,0.9)] transition-all"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
