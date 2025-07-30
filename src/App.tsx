import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Dashboard from "./pages/Dashboard";
import SkillsMapping from "./pages/SkillsMapping";
import WorkforcePlanning from "./pages/WorkforcePlanning";
import LearningJourneys from "./pages/LearningJourneys";
import CareerCoach from "./pages/CareerCoach";
import SentimentMonitoring from "./pages/SentimentMonitoring";
import LeadershipEnablement from "./pages/LeadershipEnablement";
import RetentionModeling from "./pages/RetentionModeling";
import OperatingModel from "./pages/OperatingModel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 md:ml-64 p-6 pt-20 md:pt-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/skills-mapping" element={<SkillsMapping />} />
              <Route path="/workforce-planning" element={<WorkforcePlanning />} />
              <Route path="/learning-journeys" element={<LearningJourneys />} />
              <Route path="/career-coach" element={<CareerCoach />} />
              <Route path="/sentiment-monitoring" element={<SentimentMonitoring />} />
              <Route path="/leadership-enablement" element={<LeadershipEnablement />} />
              <Route path="/retention-modeling" element={<RetentionModeling />} />
              <Route path="/operating-model" element={<OperatingModel />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
