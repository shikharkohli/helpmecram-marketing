
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border">
              <AccordionTrigger className="py-4 text-lg font-medium">
                When will StudyNinja be available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We're currently in the final stages of development. Sign up for our waitlist to be among the first to know when we launch and to receive exclusive early access.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-border">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Which subjects and education levels does it support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                StudyNinja will support all major subjects across all education levels - from primary school to postgraduate studies and professional certifications. Our AI adapts to the complexity level appropriate for your needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-border">
              <AccordionTrigger className="py-4 text-lg font-medium">
                How does AI enhance the learning process?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our AI analyzes your learning patterns, identifies knowledge gaps, and customizes study material using proven cognitive techniques tailored to your specific learning style and needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-border">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Can I upload my own study materials?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, StudyNinja will allow you to upload notes, textbooks, and other materials. Our AI will restructure this content into optimized learning formats using memory techniques.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-border">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Is StudyNinja backed by research?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Every feature on our platform is based on established cognitive science research and validated learning methodologies. We combine decades of academic research with cutting-edge AI to create an evidence-based learning system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
