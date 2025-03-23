
import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from '@/components/layouts/BaseLayout';

const collections = [
  {
    id: 1,
    name: 'Scandinavian Collection',
    description: 'Clean lines, natural materials, and light colors define this minimalist Nordic style.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    itemCount: 24,
  },
  {
    id: 2,
    name: 'Mid-Century Modern',
    description: 'Retro designs from the mid-20th century featuring tapered legs, organic shapes, and bold colors.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
    itemCount: 18,
  },
  {
    id: 3,
    name: 'Industrial Style',
    description: 'Raw and unfinished aesthetic with metal accents, exposed materials, and vintage elements.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5e8590?q=80&w=1000&auto=format&fit=crop',
    itemCount: 15,
  },
  {
    id: 4,
    name: 'Modern Farmhouse',
    description: 'The perfect blend of comfortable and contemporary, with rustic touches and clean lines.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    itemCount: 20,
  },
  {
    id: 5,
    name: 'Coastal Living',
    description: 'Airy and light designs inspired by the beach, with natural fibers and blue-white palettes.',
    image: 'https://images.unsplash.com/photo-1517858818796-d31fc694c7a3?q=80&w=1000&auto=format&fit=crop',
    itemCount: 12,
  },
  {
    id: 6,
    name: 'Contemporary Luxury',
    description: 'Sophisticated and elevated designs with premium materials and elegant finishes.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000&auto=format&fit=crop',
    itemCount: 16,
  },
];

const Collections = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">Our Collections</h1>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Explore our carefully curated furniture collections, each with a distinct style and personality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              to={`/category/${collection.id}`}
              className="group block overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-display font-medium mb-1">{collection.name}</h3>
                  <p className="text-sm opacity-80">{collection.itemCount} items</p>
                </div>
              </div>
              <div className="p-5 bg-white">
                <p className="text-gray-600">{collection.description}</p>
                <div className="mt-4 text-primary font-medium group-hover:text-primary/70 transition-colors flex items-center">
                  View Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Collections;