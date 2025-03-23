import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Martinez',
    title: 'Interior Designer',
    content: "The quality of every piece I've purchased has exceeded my expectations. The attention to detail and craftsmanship is impeccable.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Alex Johnson',
    title: 'Homeowner',
    content: "Not only is the furniture beautiful, but the customer service is outstanding. They made sure my pieces arrived safely and on time.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emily Chen',
    title: 'Architect',
    content: "I've recommended Elegance to all my clients. Their furniture perfectly balances form and function, with styles that will last for years.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    testimonialRefs.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      testimonialRefs.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Discover why design enthusiasts and homeowners choose our furniture for their spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className={cn(
                "p-6 md:p-8 bg-white rounded-xl shadow-sm opacity-0",
                "transform transition-all duration-700 ease-out-expo",
                `delay-[${index * 100}ms]`
              )}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-primary/80 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-primary/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;