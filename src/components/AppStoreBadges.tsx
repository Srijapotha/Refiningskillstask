
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";

export function AppStoreBadges() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("animate-fade-in");
            
            // Add animations to phone and badges
            const elements = contentRef.current?.querySelectorAll('.animate-element');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-scale-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  return (
    <section className="py-16 bg-secondary/10" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-0" 
          ref={contentRef}
        >
          <div className="max-w-md relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/20 rounded-full animate-float"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Download Our <span className="text-primary">App</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay connected with your child's progress, receive updates, and manage your bookings on the go with our mobile app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 animate-element opacity-0"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto"
                />
              </a>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 animate-element opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </a>
            </div>
            
            <Button 
              className="mt-6 bg-primary hover:bg-primary/90 animate-element opacity-0" 
              style={{ animationDelay: "0.3s" }}
            >
              <Sparkles className="w-4 h-4 mr-2" /> See App Features
            </Button>
          </div>
          
          <div className="relative animate-element opacity-0">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/30 blur-3xl"></div>
            <div className="relative bg-background/60 backdrop-blur-sm p-4 rounded-3xl border border-border shadow-xl max-w-xs mx-auto">
              <div className="rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=300" 
                  alt="KidsCraft App" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 p-2">
                <h4 className="text-lg font-bold text-center">KidsCraft App</h4>
                <div className="flex justify-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
              </div>
            </div>
            <Phone className="absolute -bottom-4 -right-4 text-primary opacity-40 w-10 h-10 animate-float" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
