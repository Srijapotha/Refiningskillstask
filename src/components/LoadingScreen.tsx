
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Simulate loading progress with easing
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        // Slow down as we approach 100%
        const increment = Math.max(1, 15 * (1 - prevProgress / 100));
        const newProgress = prevProgress + increment;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);
    
    // When progress reaches 100%, begin fade out
    if (progress === 100) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [progress]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={`fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
        <div className="absolute inset-3 rounded-full bg-secondary/30 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
        <div className="absolute inset-6 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-2xl font-bold">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">KidsCraft</h2>
      
      <div className="w-64 h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="mt-4 text-sm text-muted-foreground">
        {progress < 100 ? "Loading awesome experiences..." : "Welcome!"}
      </p>
      
      <div className="mt-8 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  );
}
