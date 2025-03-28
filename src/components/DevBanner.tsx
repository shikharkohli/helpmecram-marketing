
import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function DevBanner() {
  const [isVisible, setIsVisible] = useState(true);
  
  // Auto-dismiss the banner after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto p-4 glass-effect rounded-lg border border-primary/20 shadow-lg animate-slide-up">
      <div className="flex items-start gap-3">
        <div className="bg-primary/20 p-2 rounded-full">
          <AlertCircle className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Currently in Development</h3>
          <p className="text-sm text-muted-foreground mt-1">
            HelpMeCram is under active development. Sign up to be notified when we launch!
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-muted-foreground h-7 px-2"
          onClick={() => setIsVisible(false)}
        >
          Dismiss
        </Button>
      </div>
    </div>
  );
}
