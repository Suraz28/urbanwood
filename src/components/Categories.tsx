import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 1,
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop',
    count: 42,
  },
  {
    id: 2,
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
    count: 38,
  },
  {
    id: 3,
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    count: 24,
  },
  {
    id: 4,
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
    count: 19,
  },
];

const Categories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    categoryRefs.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      categoryRefs.current.forEach((category) => {
        if (category) observer.unobserve(category);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary/50 opacity-0 transition-opacity duration-1000 ease-out-expo"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium mb-4">
            Browse Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Find What You Need
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Explore our carefully curated categories to find the perfect pieces for every space in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (categoryRefs.current[index] = el)}
              className={cn(
                "relative group overflow-hidden rounded-xl h-80 bg-white shadow-sm opacity-0",
                "transform transition-all duration-700 ease-out-expo",
                `delay-[${index * 100}ms]`
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4">{category.count} items</p>
                <Link
                  to={`/category/${category.id}`}
                  className="inline-block text-sm font-medium text-white bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-md transition-colors hover:bg-primary"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;