import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import BaseLayout from '@/components/layouts/BaseLayout';
import ProductCard from '@/components/ProductCard';

// Mock data - in a real app this would come from an API
const collections = [
  {
    id: '1',
    name: 'Scandinavian Collection',
    description: 'Clean lines, natural materials, and light colors define this minimalist Nordic style.',
    banner: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop',
    products: [
      {
        id: 101,
        name: 'Nordic Armchair',
        price: 499.99,
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop',
        category: 'Living Room',
        rating: 4.7,
      },
      {
        id: 102,
        name: 'Minimalist Coffee Table',
        price: 349.99,
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=400&auto=format&fit=crop',
        category: 'Living Room',
        rating: 4.5,
      },
      {
        id: 103,
        name: 'Wooden Dining Table',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=400&auto=format&fit=crop',
        category: 'Dining Room',
        rating: 4.8,
      },
      {
        id: 104,
        name: 'Simple Bookshelf',
        price: 649.99,
        image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=400&auto=format&fit=crop',
        category: 'Study',
        rating: 4.6,
      },
    ],
  },
  {
    id: '2',
    name: 'Mid-Century Modern',
    description: 'Retro designs from the mid-20th century featuring tapered legs, organic shapes, and bold colors.',
    banner: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop',
    products: [
      {
        id: 201,
        name: 'Retro Lounge Chair',
        price: 649.99,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop',
        category: 'Living Room',
        rating: 4.9,
      },
      {
        id: 202,
        name: 'Vintage Sideboard',
        price: 799.99,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop',
        category: 'Dining Room',
        rating: 4.7,
      },
    ],
  },
  {
    id: '3',
    name: 'Industrial Style',
    description: 'Raw and unfinished aesthetic with metal accents, exposed materials, and vintage elements.',
    banner: 'https://images.unsplash.com/photo-1600607687644-c7f34b5e8590?q=80&w=1400&auto=format&fit=crop',
    products: [
      {
        id: 301,
        name: 'Metal Desk Lamp',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop',
        category: 'Lighting',
        rating: 4.5,
      },
      {
        id: 302,
        name: 'Rustic Dining Table',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=400&auto=format&fit=crop',
        category: 'Dining Room',
        rating: 4.8,
      },
    ],
  },
];

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections.find(c => c.id === id) || collections[0];

  return (
    <BaseLayout>
      <div className="relative">
        <div className="h-80 overflow-hidden">
          <img 
            src={collection.banner} 
            alt={collection.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                {collection.name}
              </h1>
              <p className="text-lg text-white/90 max-w-xl mx-auto">
                {collection.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/collections">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Collections
            </Button>
          </Link>
        </div>

        <Separator className="my-8" />

        <div className="mb-10">
          <h2 className="text-2xl font-display font-semibold mb-8">Products in this Collection</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Category;
