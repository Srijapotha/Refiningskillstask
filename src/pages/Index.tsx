
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { GoogleReviews } from "@/components/GoogleReviews";
import { InstagramFeed } from "@/components/InstagramFeed";
import { AppStoreBadges } from "@/components/AppStoreBadges";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider defaultTheme="light">
      {isLoading && <LoadingScreen />}
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <section id="programs" className="py-16 bg-primary/5 doodle-bg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              We offer a variety of programs tailored to different age groups and interests, ensuring every child finds their perfect creative outlet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Creative Arts",
                  ages: "Ages 3-5",
                  description: "Introduction to colors, shapes, and basic art techniques in a fun, exploratory environment.",
                  color: "bg-secondary/20",
                  highlight: "bg-secondary"
                },
                {
                  name: "STEM Discovery",
                  ages: "Ages 6-8",
                  description: "Hands-on science experiments and engineering challenges that spark curiosity and problem-solving.",
                  color: "bg-primary/20",
                  highlight: "bg-primary"
                },
                {
                  name: "Digital Creation",
                  ages: "Ages 9-12",
                  description: "Introduction to digital art, animation, and basic coding concepts for tech-savvy kids.",
                  color: "bg-accent/20",
                  highlight: "bg-accent"
                },
              ].map((program, index) => (
                <div key={index} className={`rounded-2xl ${program.color} p-6 hover:shadow-lg transition-all group`}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-background">
                    <div className={`w-8 h-8 rounded-full ${program.highlight}`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{program.ages}</p>
                  <p className="mb-6">{program.description}</p>
                  <Button variant="outline" className="group-hover:bg-background">Learn More</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <GoogleReviews />
        <InstagramFeed />
        <AppStoreBadges />
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <Button
        className={`fixed bottom-6 right-6 bg-primary/80 hover:bg-primary backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        size="icon"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </ThemeProvider>
  );
};

export default Index;
