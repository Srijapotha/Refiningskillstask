
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
};

// Mock data for Google Reviews
const mockReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "KidsCraft has been incredible for my daughter! She loves the creative activities and has made so many friends. The teachers are patient, kind, and truly invested in each child's development.",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&dpr=2&q=80"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    rating: 5,
    comment: "We've tried several programs, but none compare to KidsCraft. My son has flourished here. The staff creates such a positive, nurturing environment where kids can explore and learn.",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&dpr=2&q=80"
  },
  {
    id: 3,
    name: "Emily Chen",
    rating: 4,
    comment: "Very impressed with the curriculum and how engaged my children are after each class. They're always excited to show me what they've created and learned.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&dpr=2&q=80"
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    comment: "The attention to detail and personalized approach at KidsCraft is outstanding. My twins have completely different learning styles, and the teachers accommodate both beautifully.",
    date: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&dpr=2&q=80"
  },
  {
    id: 5,
    name: "Olivia Williams",
    rating: 5,
    comment: "Best decision we made for our child's early development. The balance of fun and education is perfect, and we've seen tremendous growth in his confidence and social skills.",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&dpr=2&q=80"
  }
];

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Auto-scroll reviews every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex(current => (current + 1) % mockReviews.length);
    }, 5000);
    
    // Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              titleRef.current?.classList.add("animate-fade-in");
            }
            if (entry.target === reviewsRef.current) {
              reviewsRef.current?.classList.add("animate-fade-in");
              
              // Animate each review card with a delay
              const cards = reviewsRef.current?.querySelectorAll('.review-card');
              cards?.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate-scale-in');
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (reviewsRef.current) observer.observe(reviewsRef.current);
    
    return () => {
      clearInterval(interval);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (reviewsRef.current) observer.unobserve(reviewsRef.current);
    };
  }, []);
  
  return (
    <section id="reviews" className="py-20 bg-muted/50 doodle-bg" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0" ref={titleRef}>
            What <span className="text-primary">Parents</span> Say About Us
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Based on 128 Google Reviews</p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0" 
          ref={reviewsRef}
        >
          {mockReviews.map((review, index) => (
            <Card 
              key={review.id} 
              className={`review-card bg-card hover:shadow-lg transition-all opacity-0 ${
                index === currentIndex ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  {review.avatar && (
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < review.rating 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm line-clamp-4">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {mockReviews.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center"
          >
            See all reviews on Google
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
