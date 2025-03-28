import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { addToWaitlist } from "@/lib/waitlistService";
import { getCurrentUser } from "@/lib/supabase";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: "+1", country: "United States/Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+61", country: "Australia" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+52", country: "Mexico" },
  { code: "+55", country: "Brazil" },
  { code: "+34", country: "Spain" },
  { code: "+39", country: "Italy" },
];

export function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
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
    setShowCaptcha(false);
  };

  const validatePhoneNumber = (number: string): boolean => {
    if (!number) return true;
    const phoneRegex = /^\d{6,15}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    setPhoneNumber(digitsOnly);
    
    if (digitsOnly && !validatePhoneNumber(digitsOnly)) {
      setPhoneError("Please enter a valid phone number (6-15 digits)");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    if (!showCaptcha) {
      setShowCaptcha(true);
      return;
    }
    
    if (!captchaVerified) {
      toast.error("Please verify that you are not a robot");
      return;
    }
    
    setLoading(true);
    
    try {
      const fullPhoneNumber = phoneNumber ? `${countryCode}${phoneNumber}` : '';
      console.log(`Submitting email: ${email}, name: ${name}, phone: ${fullPhoneNumber}`);
      const result = await addToWaitlist(email, name, fullPhoneNumber);
      
      if (result.success) {
        setSubmitted(true);
        toast.success("Thank you for your interest! We'll notify you when we launch.");
        setEmail("");
        setName("");
        setPhoneNumber("");
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
        onSubmit={handleSubmit} 
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
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0 bg-transparent"
              disabled={loading || submitted}
              required
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">SMS notifications (optional)</span>
            </div>
            
            <div className="flex gap-2">
              <Select
                value={countryCode}
                onValueChange={setCountryCode}
                disabled={loading || submitted}
              >
                <SelectTrigger className="w-[130px] border-0 shadow-none focus-visible:ring-0 bg-transparent">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.code} {country.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="flex-1 border-0 shadow-none focus-visible:ring-0 bg-transparent"
                disabled={loading || submitted}
              />
            </div>
            
            {phoneError && (
              <p className="text-xs text-destructive mt-1">{phoneError}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={loading || submitted || (phoneNumber !== "" && !validatePhoneNumber(phoneNumber))}
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
        
        {showCaptcha && (
          <div className="flex justify-center">
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
