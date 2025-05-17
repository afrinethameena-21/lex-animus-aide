
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { TranslationProvider } from "./components/LanguageSelector";
import LegalConsultation from "./pages/LegalConsultation";
import DocumentReview from "./pages/DocumentReview";
import LegalRepresentation from "./pages/LegalRepresentation";
import RightsEducation from "./pages/RightsEducation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TranslationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/legal-consultation" element={<LegalConsultation />} />
            <Route path="/document-review" element={<DocumentReview />} />
            <Route path="/legal-representation" element={<LegalRepresentation />} />
            <Route path="/rights-education" element={<RightsEducation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TranslationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
