
import { FeatureCard } from "./FeatureCard";
import { Brain, Clock, Lightbulb, Map, Repeat, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function FeaturesSection() {
  const isMobile = useIsMobile();
  
  return (
    <section id="features" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            Learn Anything, Remember Everything
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Our AI-powered platform transforms how you study, using cutting-edge cognitive science to make learning efficient and lasting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          <FeatureCard 
            icon={Brain}
            title="Mind Palace Technique"
            description="Build powerful spatial memory frameworks to store and recall complex information with remarkable accuracy."
            delay={isMobile ? 0 : 100}
          />
          
          <FeatureCard 
            icon={Lightbulb}
            title="Mnemonic Generation"
            description="Create custom memory aids, from acronyms to visual associations, tailored to your personal learning style."
            delay={isMobile ? 0 : 200}
          />
          
          <FeatureCard 
            icon={Repeat}
            title="Spaced Repetition"
            description="Review content at scientifically optimized intervals to maximize long-term retention and minimize forgetting."
            delay={isMobile ? 0 : 300}
          />
          
          <FeatureCard 
            icon={Map}
            title="Concept Mapping"
            description="Visualize connections between ideas and develop a holistic understanding of complex subject matter."
            delay={isMobile ? 0 : 400}
          />
          
          <FeatureCard 
            icon={Clock}
            title="Time-Optimized Study"
            description="AI algorithms personalize your study schedule to maximize efficiency based on your learning patterns."
            delay={isMobile ? 0 : 500}
          />
          
          <FeatureCard 
            icon={Sparkles}
            title="AI Content Transformation"
            description="Upload your notes or textbooks and let AI restructure them into formats optimized for maximum recall."
            delay={isMobile ? 0 : 600}
          />
        </div>
      </div>
    </section>
  );
}
