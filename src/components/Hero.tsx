import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[80vh] flex items-center opacity-0 transition-opacity duration-1000 ease-out-expo"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col md:flex-row">
        <div className={cn(
          "glass-card p-8 md:p-12 rounded-xl max-w-2xl",
          "transform transition-all duration-1000 ease-out-expo delay-300",
          "opacity-0 animate-fade-in"
        )}>
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4 animate-fade-in">
            New Collection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight mb-6 animate-fade-in">
            Elevate Your Living Space With Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl text-primary/80 mb-8 animate-fade-in">
            Discover our curated collection of premium furniture pieces designed to transform your home into a sanctuary of style and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link 
              to="/shop" 
              className="btn-primary inline-flex items-center"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/collections" 
              className="px-6 py-3 rounded-md border border-primary/20 text-primary font-medium transition-all duration-300 hover:bg-secondary"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;