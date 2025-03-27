
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ScienceSection() {
  return (
    <section id="science" className="section-spacing bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Backed by Cognitive Science
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              StudyNinja isn't just another flashcard app. Our platform integrates decades of research in cognitive psychology and neuroscience to optimize how your brain processes, stores, and retrieves information.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="glass-effect p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Memory Encoding</h3>
                <p className="text-muted-foreground text-sm">
                  Our techniques leverage the brain's preference for spatial, visual, and associative information to transform abstract concepts into memorable content.
                </p>
              </div>
              
              <div className="glass-effect p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Retention Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Precisely timed review sessions based on the forgetting curve ensure information moves from short-term to long-term memory.
                </p>
              </div>
              
              <div className="glass-effect p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Retrieval Practice</h3>
                <p className="text-muted-foreground text-sm">
                  Strategically designed quizzes strengthen neural pathways, making recall faster and more reliable during exams.
                </p>
              </div>
            </div>
            
            <Button className="gap-2 group">
              Learn More About Our Methods
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
              <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-border glass-effect animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Brain visualization" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
