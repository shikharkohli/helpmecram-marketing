
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScienceSection } from "@/components/ScienceSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { DevBanner } from "@/components/DevBanner";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Force a window resize event to recalculate viewport height on iOS
    const handleResize = () => {
      // This helps with the iOS Safari issue where 100vh is incorrect
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            const yOffset = -80; // Header height adjustment
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
              top: y,
              behavior: isMobile ? 'auto' : 'smooth' // Use auto for iOS to prevent jank
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background overscroll-y-none">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ScienceSection />
      <FaqSection />
      <Footer />
      <DevBanner />
    </div>
  );
};

export default Index;
