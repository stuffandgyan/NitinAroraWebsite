
import { socialLinks } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-border/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(56,182,255,0.08),transparent_80%)]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent/60">
              Nitin Arora
            </a>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Data Analyst & BI Developer creating innovative data pipelines and analytics solutions that transform raw data into actionable business insights.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.name === "Email" ? "mailto:nitinaro95@gmail.com" : link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-accent bg-secondary/40 hover:bg-secondary/80 rounded-full transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={20} className="hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Nitin Arora. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Made with modern web technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
