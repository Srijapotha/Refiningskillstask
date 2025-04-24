
import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            
            // Add animations to nested elements
            if (entry.target.classList.contains('animated-container')) {
              const items = entry.target.querySelectorAll('.animated-item');
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-fade-in');
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    "Expert educators with 10+ years of experience",
    "Age-appropriate curriculum for optimal development",
    "Small class sizes for personalized attention",
    "Safe and nurturing environment for all children",
    "Emphasis on creativity and critical thinking",
    "Regular progress updates for parents",
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden doodle-bg">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-[30%] right-[10%] w-20 h-20 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-[20%] left-[15%] w-12 h-12 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
            ref={(el) => (elementsRef.current[0] = el)}
          >
            Why <span className="text-primary">Choose</span> Us?
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto opacity-0"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            We believe every child has unique talents waiting to be discovered. Our program is designed to nurture these talents while fostering growth and development in a fun, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="flex flex-col gap-6 opacity-0 animated-container" 
            ref={(el) => (elementsRef.current[2] = el)}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 animated-item opacity-0"
              >
                <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                <p>{feature}</p>
              </div>
            ))}
            
            <div className="mt-4 animated-item opacity-0">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book a Demo Class
              </Button>
            </div>
          </div>
          
          <div 
            className="relative opacity-0" 
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <div className="absolute -top-8 -left-8 w-full h-full bg-primary/10 rounded-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-secondary/15 rounded-3xl"></div>
            <div className="relative bg-background/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-border">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/20 rounded-full animate-float"></div>
              <h3 className="text-2xl font-bold mb-6">Our Learning Philosophy</h3>
              <p className="mb-8">
                At KidsCraft, we believe learning should be joyful, creative, and meaningful. Our unique approach combines play-based activities with structured learning to develop the whole child.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-center bg-secondary/10 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl font-bold">01</span>
                  </div>
                  <div>
                    <p className="font-semibold">Learn through play</p>
                    <p className="text-sm text-muted-foreground">Children explore concepts through engaging activities</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center bg-primary/10 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl font-bold">02</span>
                  </div>
                  <div>
                    <p className="font-semibold">Build confidence early</p>
                    <p className="text-sm text-muted-foreground">Creating an environment where children feel empowered</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center bg-secondary/10 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary text-xl font-bold">03</span>
                  </div>
                  <div>
                    <p className="font-semibold">Foster lifelong curiosity</p>
                    <p className="text-sm text-muted-foreground">Encouraging questions and exploration of new ideas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
