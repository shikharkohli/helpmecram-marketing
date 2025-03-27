
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { addToWaitlist } from "@/lib/waitlistService";
import { getCurrentUser } from "@/lib/supabase";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  // Fetch user email if logged in
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const user = await getCurrentUser();
        if (user?.email) {
          setEmail(user.email);
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    };
    
    fetchUserEmail();
  }, []);
  
  const onCaptchaChange = (token: string | null) => {
    setCaptchaVerified(!!token);
  };
  
  const resetCaptcha = () => {
    setCaptchaVerified(false);
    recaptchaRef.current?.reset();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (!captchaVerified) {
      toast.error("Please verify that you are not a robot");
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await addToWaitlist(email);
      
      if (result.success) {
        setSubmitted(true);
        toast.success("Thank you for your interest! We'll notify you when we launch.");
        // Reset form
        setEmail("");
        resetCaptcha();
      } else {
        toast.error(result.error || "Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Waitlist submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto glass-effect rounded-lg p-0.5 overflow-hidden">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 p-3"
      >
        <div className="flex flex-col sm:flex-row gap-2">
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
            disabled={loading || submitted || !captchaVerified}
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
        </div>
        
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // Default is Google's test key
            onChange={onCaptchaChange}
            theme="dark"
            size="normal"
          />
        </div>
      </form>
    </div>
  );
}
