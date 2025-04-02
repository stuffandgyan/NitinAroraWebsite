
import { ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen relative flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background" aria-hidden="true" />
      
      {/* Floating blobs for the modern look */}
      <div className="blur-blob w-[500px] h-[500px] left-[-100px] top-[20%]"></div>
      <div className="blur-blob w-[600px] h-[600px] right-[-100px] bottom-[10%]"></div>
      
      <div className="section-container h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <p className="chip mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Data Analyst & BI Developer
          </p>
          
          <h1 
            className="mb-6 animate-fade-in-up text-[#fff] font-bold"
            style={{ animationDelay: "0.3s" }}
          >
            Transforming data <span className="text-accent">into valuable insights.</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in-up" 
            style={{ animationDelay: "0.4s" }}
          >
            I build powerful data pipelines and insightful analytics solutions that drive 
            business decisions and optimize operations.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 animate-fade-in-up" 
            style={{ animationDelay: "0.5s" }}
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-accent text-background hover:bg-accent/90"
            >
              View My Work
              <ArrowDownIcon 
                size={16} 
                className="ml-2 transition-transform group-hover:translate-y-1" 
              />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-accent/30 hover:bg-accent/10 hover:text-accent"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="p-2 rounded-full bg-accent/10 border border-accent/30 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll down"
        >
          <ArrowDownIcon size={20} className="text-accent" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
