
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <h2 className="text-2xl font-bold text-primary">KidsCraft</h2>
            <div className="relative ml-2">
              <div className="w-6 h-6 bg-secondary rounded-full animate-float"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-primary transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#programs" className="hover:text-primary transition-colors relative group">
            Programs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#reviews" className="hover:text-primary transition-colors relative group">
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-primary transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Button className="bg-secondary hover:bg-secondary/80 text-black">
            Book a Demo
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="relative"
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#about"
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#programs"
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#reviews"
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              className="mt-2 bg-secondary hover:bg-secondary/80 text-black w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
