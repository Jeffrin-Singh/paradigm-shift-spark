import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ForClientsPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PermanentRecruitmentPage from "./pages/services/PermanentRecruitmentPage";
import TemporaryStaffingPage from "./pages/services/TemporaryStaffingPage";
import CandidateAssessmentsPage from "./pages/services/CandidateAssessmentsPage";
import EmployeeInsightsPage from "./pages/services/EmployeeInsightsPage";
import LearningSolutionsPage from "./pages/services/LearningSolutionsPage";
import CareerTransitionPage from "./pages/services/CareerTransitionPage";
import ContractingPage from "./pages/services/ContractingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ServicesSlugRedirect = () => {
  const { slug } = useParams();
  if (slug === "contracting") {
    return <Navigate to="/contractors/contracting" replace />;
  }
  return <Navigate to={`/for-clients/${slug ?? ""}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/for-clients" element={<ForClientsPage />} />
          <Route path="/for-clients/permanent-recruitment" element={<PermanentRecruitmentPage />} />
          <Route path="/for-clients/temporary-staffing" element={<TemporaryStaffingPage />} />
          <Route path="/for-clients/candidate-assessments" element={<CandidateAssessmentsPage />} />
          <Route path="/for-clients/employee-insights" element={<EmployeeInsightsPage />} />
          <Route path="/for-clients/learning-solutions" element={<LearningSolutionsPage />} />
          <Route path="/for-clients/career-transition" element={<CareerTransitionPage />} />
          <Route path="/contractors/contracting" element={<ContractingPage />} />
          {/* Backward-compatible redirects from old /services URLs */}
          <Route path="/services" element={<Navigate to="/for-clients" replace />} />
          <Route path="/services/:slug" element={<ServicesSlugRedirect />} />
          <Route path="/for-clients/contracting" element={<Navigate to="/contractors/contracting" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
