
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(56,182,255,0.12),rgba(56,182,255,0.05),transparent_70%)]" aria-hidden="true" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 blur-blob opacity-30" />
      <div className="absolute bottom-1/4 -right-24 w-64 h-64 blur-blob opacity-20" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="mb-4 text-gradient animate-fade-in">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
          </div>
          
          <div className="group relative bg-black/40 backdrop-blur-md border border-accent/20 rounded-2xl p-12 shadow-lg hover:shadow-accent/10 transition-all duration-500">
            {/* Decorative gradient circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/5 blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-accent/5 blur-3xl -z-10" />
            
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="p-5 rounded-full bg-accent/10 border border-accent/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mail size={38} className="text-accent animate-pulse" />
              </div>
              <h3 className="text-2xl mb-4 font-bold tracking-tighter text-gradient">Send me an email</h3>
              <p className="text-lg mb-8 text-muted-foreground">Feel free to reach out anytime at:</p>
              <Button 
                size="lg"
                className="text-lg bg-accent hover:bg-accent/90 text-background font-medium rounded-xl px-8 py-6 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 animate-fade-in-up"
                asChild
              >
                <a href="mailto:nitinaro95@gmail.com" className="flex items-center gap-3">
                  <Mail size={20} />
                  nitinaro95@gmail.com
                </a>
              </Button>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
