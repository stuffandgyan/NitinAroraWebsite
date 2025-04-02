
import { aboutMe, workExperience } from "@/lib/data";
import { cn } from "@/lib/utils";
import { School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/lovable-uploads/1ffd237e-d696-4df8-a88f-66e72341c335.png"
                  alt="Profile of Nitin Arora"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <School className="mr-2" size={20} />
                Education
              </h3>
              <div className="space-y-4">
                {aboutMe.education.map((edu, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border border-border">
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground">{edu.institution}, {edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-6">About Me</h2>
            
            <div className="space-y-6">
              <p className="text-lg">{aboutMe.summary}</p>
              <p>{aboutMe.experience}</p>
              <p>{aboutMe.approach}</p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold mb-1">6+</div>
                <div className="text-sm text-muted-foreground">BI Platforms</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-medium">{job.role}</h4>
                    <div className="text-lg">{job.company}</div>
                    <div className="text-muted-foreground">{job.location}</div>
                  </div>
                  <div className="text-muted-foreground font-medium mt-2 md:mt-0">{job.period}</div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
