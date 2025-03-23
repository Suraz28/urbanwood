import React, { useRef, useEffect } from 'react';
import { ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCart } from '../hooks/use-cart';

const products = [
  {
    id: 1,
    name: 'Curved Sofa',
    category: 'Living Room',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Wooden Coffee Table',
    category: 'Living Room',
    price: 449,
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Modern Armchair',
    category: 'Living Room',
    price: 599,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Minimalist Desk',
    category: 'Office',
    price: 349,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { addToCart, cart } = useCart();

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

    productRefs.current.forEach((product) => {
      if (product) observer.observe(product);
    });

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      productRefs.current.forEach((product) => {
        if (product) observer.unobserve(product);
      });
    };
  }, []);

  const isInCart = (productId: number) => {
    return cart.some(item => item.id === productId);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 opacity-0 transition-opacity duration-1000 ease-out-expo"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
            Featured Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Bestselling Products
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Discover our most popular designs, crafted with premium materials and exceptional attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[index] = el)}
              className={cn(
                "product-card opacity-0",
                "transform transition-all duration-700 ease-out-expo",
                `delay-[${index * 100}ms]`
              )}
            >
              <div className="product-image-container h-64 md:h-72">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:p-5">
                <span className="text-sm text-primary/60">{product.category}</span>
                <h3 className="font-medium mt-1 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold">${product.price}</span>
                  <Button
                    size="sm"
                    variant={isInCart(product.id) ? "secondary" : "outline"}
                    className="flex items-center gap-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only">
                      {isInCart(product.id) ? 'Add More' : 'Add to Cart'}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/shop" 
            className="inline-flex items-center font-medium text-primary hover:underline"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;