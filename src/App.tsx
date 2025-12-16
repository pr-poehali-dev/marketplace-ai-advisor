
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Icon name="BarChart3" size={28} className="text-foreground" />
            <span>MIRRO</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Главная
            </Link>
            <Link 
              to="/analyzer" 
              className={`text-sm font-medium transition-colors ${
                isActive('/analyzer') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Анализатор
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Блог
            </Link>
            <Link 
              to="/contacts" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contacts') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
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

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
      onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      {children}
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-16">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/analyzer" element={<Analyzer />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;