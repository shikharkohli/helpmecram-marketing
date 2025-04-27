
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          <span className="text-lg md:text-xl font-display font-semibold">InstaCram</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#science" className="text-sm font-medium hover:text-primary transition-colors">The Science</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>
          <ThemeToggle />
          <Button size="sm">Join Waitlist</Button>
        </div>
        
        {/* Mobile menu */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[75vw]">
              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col items-start gap-4">
                  <a href="#features" className="text-lg font-medium hover:text-primary transition-colors">Features</a>
                  <a href="#science" className="text-lg font-medium hover:text-primary transition-colors">The Science</a>
                  <a href="#faq" className="text-lg font-medium hover:text-primary transition-colors">FAQ</a>
                </nav>
                <Button className="w-full">Join Waitlist</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
