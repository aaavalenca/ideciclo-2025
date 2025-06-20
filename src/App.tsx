import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Refine from "./pages/Refine";
import Avaliacao from "./pages/Avaliacao";
import SegmentForm from "./pages/SegmentForm";
import ViewEvaluation from "./pages/ViewEvaluation";
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
          <Route path="/avaliar" element={<Refine />} />
          <Route path="/avaliacao" element={<Avaliacao />} />
          <Route
            path="/avaliar/formulario/:segmentId"
            element={<SegmentForm />}
          />
          <Route path="/view-evaluation/:formId" element={<ViewEvaluation />} />
          <Route
            path="/edit-evaluation/:segmentId/:formId"
            element={<SegmentForm />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
