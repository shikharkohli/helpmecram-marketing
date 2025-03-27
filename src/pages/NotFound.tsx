
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen hero-gradient flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md glass-effect rounded-xl p-8 border border-border animate-fade-in">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
          <Brain className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-display font-bold mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! This page seems to have slipped from our memory palace.</p>
        <Button asChild>
          <a href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
