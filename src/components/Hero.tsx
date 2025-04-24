
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after a delay for a more dramatic entrance
    setTimeout(() => {
      titleRef.current?.classList.add('animate-fade-in');
      
      setTimeout(() => {
        textRef.current?.classList.add('animate-fade-in');
        
        setTimeout(() => {
          buttonsRef.current?.classList.add('animate-fade-in');
          
          setTimeout(() => {
            imageRef.current?.classList.add('animate-fade-in');
          }, 300);
        }, 300);
      }, 300);
    }, 500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden doodle-bg">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] animate-float">
          <div className="w-16 h-16 bg-primary/20 rounded-full"></div>
        </div>
        <div className="absolute top-[60%] right-[15%] animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-20 h-20 bg-secondary/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-[25%] left-[25%] animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-12 h-12 bg-accent/20 rounded-full"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        <div className="flex-1 max-w-xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
            ref={titleRef}
          >
            Unleash Your Child's <span className="text-primary">Creative Potential</span>
          </h1>
          <p 
            className="text-xl mb-8 opacity-80 opacity-0"
            ref={textRef}
          >
            Discover a world of imagination, learning, and fun with our interactive programs designed for young minds ages 3-12.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0"
            ref={buttonsRef}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 py-6 text-base">
              Book a Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:text-secondary-foreground group py-6 text-base"
            >
              <Play className="mr-2 h-5 w-5 fill-secondary group-hover:fill-secondary-foreground transition-colors" />
              Watch Our Approach
            </Button>
          </div>
          
          <div className="flex items-center mt-8 space-x-4">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&dpr=2&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&dpr=2&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&dpr=2&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
            </div>
            <div className="text-sm">
              <span className="font-semibold">500+</span> happy parents trust us
            </div>
          </div>
        </div>
        
        <div 
          className="flex-1 relative opacity-0" 
          ref={imageRef}
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -top-4 -left-4 w-full h-full bg-secondary/30 rounded-xl animate-float" style={{ animationDelay: "1.5s" }}></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-xl animate-float" style={{ animationDelay: "2s" }}></div>
            <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1000" 
                alt="Happy children playing and learning" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                  Enrollment Open!
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
