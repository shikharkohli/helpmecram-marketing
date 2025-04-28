
import { EmailCapture } from "./EmailCapture";
import { Brain, CheckCircle, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen pt-24 md:pt-28 pb-16 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-5xl text-center z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-4 animate-fade-in">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 mr-2">
            <Brain className="w-3 h-3 text-primary" />
          </div>
          <span className="text-xs sm:text-sm font-medium">Coming Soon — Join Our Waitlist</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Cram Smarter with <span className="text-primary">Science-Based</span> Methods
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
          Supercharge your exam prep with AI-powered study tools that use proven techniques like mind palaces, mnemonics, and spaced repetition.
        </p>
        
        <div className="mb-12 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "600ms" }}>
          <EmailCapture />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <div className="glass-effect rounded-lg p-4 sm:p-6 text-left">
            <div className="flex items-start mb-2">
              <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">Scientifically-proven to improve retention by up to 300%</p>
            </div>
          </div>
          
          <div className="glass-effect rounded-lg p-4 sm:p-6 text-left">
            <div className="flex items-start mb-2">
              <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">Personalized AI learning paths for all subjects</p>
            </div>
          </div>
          
          <div className="glass-effect rounded-lg p-4 sm:p-6 text-left">
            <div className="flex items-start mb-2">
              <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">Suitable for all education levels and exam types</p>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#features" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to features"
      >
        <span className="mb-2">Learn More</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
