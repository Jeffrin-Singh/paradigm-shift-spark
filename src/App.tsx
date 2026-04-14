import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PermanentRecruitmentPage from "./pages/services/PermanentRecruitmentPage";
import TemporaryStaffingPage from "./pages/services/TemporaryStaffingPage";
import CandidateAssessmentsPage from "./pages/services/CandidateAssessmentsPage";
import EmployeeInsightsPage from "./pages/services/EmployeeInsightsPage";
import LearningSolutionsPage from "./pages/services/LearningSolutionsPage";
import CareerTransitionPage from "./pages/services/CareerTransitionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/permanent-recruitment" element={<PermanentRecruitmentPage />} />
          <Route path="/services/temporary-staffing" element={<TemporaryStaffingPage />} />
          <Route path="/services/candidate-assessments" element={<CandidateAssessmentsPage />} />
          <Route path="/services/employee-insights" element={<EmployeeInsightsPage />} />
          <Route path="/services/learning-solutions" element={<LearningSolutionsPage />} />
          <Route path="/services/career-transition" element={<CareerTransitionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
