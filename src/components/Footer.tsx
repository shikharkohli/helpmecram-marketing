
import { Button } from "@/components/ui/button";
import { Brain, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-accent/10 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-display font-semibold">InstaCram</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Revolutionizing exam prep with AI and cognitive science. Cram smarter, not harder.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 tap-target">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 tap-target">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 tap-target">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 tap-target">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Features</a></li>
              <li><a href="#science" className="text-muted-foreground hover:text-primary transition-colors block tap-target">The Science</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Pricing</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors block tap-target">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors block tap-target">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-sm sm:text-base">&copy; {year} InstaCram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
