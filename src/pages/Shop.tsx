
import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import ProductCard from '@/components/ProductCard';

// In a real app, this would come from an API
const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
    category: 'Living Room',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop',
    category: 'Dining Room',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1561330713-2d6e2e5e8b9f?q=80&w=1000&auto=format&fit=crop',
    category: 'Office',
    rating: 4.3,
  },
  {
    id: 4,
    name: 'King Size Bed',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop',
    category: 'Bedroom',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Minimalist Coffee Table',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop',
    category: 'Living Room',
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Bookshelf Unit',
    price: 549.99,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000&auto=format&fit=crop',
    category: 'Study',
    rating: 4.4,
  },
];

const Shop = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">Shop All Products</h1>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Browse our curated collection of premium furniture for every room in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Shop;