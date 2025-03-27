
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Thank you for your interest! We'll notify you when we launch.");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto glass-effect rounded-lg p-0.5 overflow-hidden">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row gap-2 p-1"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border-0 shadow-none focus-visible:ring-0 bg-transparent"
          disabled={loading || submitted}
        />
        <Button 
          type="submit" 
          disabled={loading || submitted}
          className="transition-all duration-300 hover:shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Submitting
            </>
          ) : submitted ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" /> 
              Subscribed
            </>
          ) : (
            "Notify Me"
          )}
        </Button>
      </form>
    </div>
  );
}
