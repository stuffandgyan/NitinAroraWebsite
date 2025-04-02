
import { useState, useRef } from "react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="relative py-24 bg-secondary/30">
      <div className="section-container">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Project Highlights</h2>
          <p className="text-lg text-muted-foreground">
            A selection of my data analytics and business intelligence projects showcasing my expertise in building data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "project-card group bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg",
                index === activeIndex && "ring-2 ring-primary ring-opacity-50"
              )}
              onClick={() => handleProjectClick(index)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        View Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
