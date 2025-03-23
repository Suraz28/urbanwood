import React, { useRef, useEffect } from 'react';
import { BadgeCheck, Truck, RefreshCw, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'Crafted with exceptional materials and attention to every detail',
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: 'Free Shipping',
    description: 'Enjoy free delivery on all orders over $1000',
    icon: Truck,
  },
  {
    id: 3,
    title: '30-Day Returns',
    description: 'Not satisfied? Return within 30 days for a full refund',
    icon: RefreshCw,
  },
  {
    id: 4,
    title: '5-Year Warranty',
    description: 'We stand behind our quality with an extended warranty',
    icon: Clock,
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    featureRefs.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      featureRefs.current.forEach((feature) => {
        if (feature) observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 opacity-0 transition-opacity duration-1000 ease-out-expo"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (featureRefs.current[index] = el)}
              className={cn(
                "p-6 bg-white border border-gray-100 rounded-xl text-center shadow-sm opacity-0",
                "transform transition-all duration-700 ease-out-expo",
                `delay-[${index * 100}ms]`
              )}
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/5 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-primary/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;