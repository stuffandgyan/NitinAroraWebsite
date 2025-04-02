
import { skills } from "@/lib/data";

const SkillCategory = ({ 
  category, 
  items, 
  icon: Icon 
}: { 
  category: string; 
  items: string[];
  icon: React.ComponentType<any>;
}) => {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md bg-primary bg-opacity-10 mr-3">
          <Icon className="text-primary" size={24} />
        </div>
        <h3 className="text-xl font-medium">{category}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {items.map((skill) => (
          <div key={skill} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_left,#ffffff,#f3f4f6)]" aria-hidden="true" />
      
      <div className="section-container">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Proficient in a wide range of technologies and tools for data analytics, business intelligence, and cloud solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <SkillCategory
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              icon={skillGroup.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-background/80 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-medium mb-4">Professional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="achievement-item">
              <div className="font-medium">Reporting Efficiency</div>
              <div className="text-muted-foreground">Enhanced reporting efficiency by 20% through automated dashboards</div>
            </div>
            <div className="achievement-item">
              <div className="font-medium">Processing Speed</div>
              <div className="text-muted-foreground">Increased data processing speed by 30% with optimized ETL pipelines</div>
            </div>
            <div className="achievement-item">
              <div className="font-medium">Operational Efficiency</div>
              <div className="text-muted-foreground">15% improvement in efficiency with AI/ML-driven insights</div>
            </div>
            <div className="achievement-item">
              <div className="font-medium">Inventory Management</div>
              <div className="text-muted-foreground">Reduced inventory waste by 20% using data-driven solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
