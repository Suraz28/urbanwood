import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 opacity-0 transition-opacity duration-1000 ease-out-expo"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
            Stay in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            Be the first to know about new collections, special offers, and exclusive design insights.
          </p>
          
          <form className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
            <div className="w-full sm:flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <p className="text-sm text-primary/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;