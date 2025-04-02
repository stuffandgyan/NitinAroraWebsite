
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  useEffect(() => {
    // Add smooth scroll behavior
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,182,255,0.1),transparent_50%)]"></div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-accent text-background hover:bg-accent/90"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default Index;
