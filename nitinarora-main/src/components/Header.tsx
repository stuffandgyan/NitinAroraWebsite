
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navLinks, socialLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-medium tracking-tight">
          Nitin Arora
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "60px" }}
      >
        <nav className="h-full flex flex-col p-6">
          <ul className="space-y-4 my-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pb-8 flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
