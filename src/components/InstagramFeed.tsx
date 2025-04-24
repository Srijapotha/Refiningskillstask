
import { useEffect, useRef } from "react";

// Mock Instagram posts with real-looking images
const instagramPosts = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1576504677634-06b2130bd1f3?q=80&w=500",
    caption: "Art time with our little creators! 🎨 #KidsCraft #ArtClass",
    likes: 124,
    comments: 23,
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=500",
    caption: "Celebrating creativity and imagination! ✨ #ChildDevelopment",
    likes: 98,
    comments: 15,
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=500",
    caption: "Learning through play - the best way! 🧩 #EarlyEducation",
    likes: 156,
    comments: 31,
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=500",
    caption: "Today's craft project was a huge success! 🌈 #KidsActivities",
    likes: 87,
    comments: 12,
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=500",
    caption: "Building confidence one project at a time 💪 #KidsCraft",
    likes: 112,
    comments: 19,
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=500",
    caption: "Fun science experiments today! 🔬 #STEM #KidsLearning",
    likes: 143,
    comments: 27,
  },
];

export function InstagramFeed() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              titleRef.current?.classList.add("animate-fade-in");
            }
            if (entry.target === feedRef.current) {
              const items = feedRef.current?.querySelectorAll('.instagram-item');
              items?.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-fade-in');
                }, index * 100);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (feedRef.current) observer.observe(feedRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (feedRef.current) observer.unobserve(feedRef.current);
    };
  }, []);
  
  return (
    <section className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0" ref={titleRef}>
            Follow Our <span className="text-primary">Creative</span> Journey
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join our community on Instagram <span className="font-semibold">@KidsCraft</span> and see our daily activities and special moments!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" ref={feedRef}>
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="instagram-item group relative overflow-hidden rounded-xl aspect-square opacity-0"
            >
              <img 
                src={post.imageUrl} 
                alt={`Instagram post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                <p className="text-white text-xs md:text-sm text-center mb-4 line-clamp-3">
                  {post.caption}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-white text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                    </svg>
                    <span className="text-white text-xs">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @KidsCraft
          </a>
        </div>
      </div>
    </section>
  );
}
