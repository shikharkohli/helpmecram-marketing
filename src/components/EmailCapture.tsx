
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { addToWaitlist } from "@/lib/waitlistService";

export function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [emailError, setEmailError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const onCaptchaChange = (token: string | null) => {
    setCaptchaVerified(!!token);
    if (token) {
      submitToWaitlist();
    }
  };
  
  const resetCaptcha = () => {
    setCaptchaVerified(false);
    recaptchaRef.current?.reset();
    setShowCaptcha(false);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous validation errors
    setEmailError("");
    
    // Validate email
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    // If all validation passes, show the CAPTCHA
    setShowCaptcha(true);
  };
  
  const submitToWaitlist = async () => {
    setLoading(true);
    
    try {
      console.log(`Submitting to waitlist: ${email}, name: ${name}`);
      
      const result = await addToWaitlist(email, name);
      
      if (result.success) {
        setSubmitted(true);
        toast.success("Thank you for your interest! We'll notify you when we launch.");
        setEmail("");
        setName("");
        resetCaptcha();
      } else {
        toast.error(result.error || "Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto glass-effect rounded-lg p-0.5 overflow-hidden">
      <form 
        onSubmit={handleInitialSubmit} 
        className="flex flex-col gap-4 p-4"
      >
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            <Input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0 bg-transparent"
              disabled={loading || submitted}
            />
            
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) {
                  setEmailError("");
                }
              }}
              className={`border-0 shadow-none focus-visible:ring-0 bg-transparent ${emailError ? 'border-red-500' : ''}`}
              disabled={loading || submitted}
              required
            />
            {emailError && (
              <p className="text-xs text-destructive">{emailError}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={loading || submitted}
            className="w-full transition-all duration-300 hover:shadow-lg"
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
        
        {showCaptcha && !submitted && (
          <div className="flex justify-center mt-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} 
              onChange={onCaptchaChange}
              theme="dark"
              size="normal"
            />
          </div>
        )}
      </form>
    </div>
  );
}
