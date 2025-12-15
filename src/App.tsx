
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Analyzer from "./pages/Analyzer";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Icon from "./components/ui/icon";

const queryClient = new QueryClient();

function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Icon name="BarChart3" size={28} className="text-primary" />
            <span>MarketInsight</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Главная
            </Link>
            <Link 
              to="/analyzer" 
              className={`text-sm font-medium transition-colors ${
                isActive('/analyzer') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Анализатор
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Блог
            </Link>
            <Link 
              to="/contacts" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contacts') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/analyzer" element={<Analyzer />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;