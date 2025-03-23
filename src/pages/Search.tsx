
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BaseLayout from '@/components/layouts/BaseLayout';
import ProductCard from '@/components/ProductCard';

// This would come from an API in a real app
const allProducts = [
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
  {
    id: 7,
    name: 'Velvet Armchair',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop',
    category: 'Living Room',
    rating: 4.7,
  },
  {
    id: 8,
    name: 'Pendant Light',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop',
    category: 'Lighting',
    rating: 4.5,
  },
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<typeof allProducts>([]);
  
  useEffect(() => {
    if (query) {
      // Simple search implementation - in a real app this would be an API call
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) || 
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
    }
  }, [query]);

  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-display font-semibold mb-4">
          Search Results for "{query}"
        </h1>
        
        <Link to="/">
          <Button variant="outline" size="sm" className="mb-8 flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-secondary/20 rounded-lg">
            <ShoppingBag className="h-12 w-12 mx-auto text-primary/50 mb-4" />
            <p className="text-lg text-gray-600 mb-4">
              No results found for "{query}".
            </p>
            <p className="text-gray-500 mb-6">
              Try checking your spelling or using more general terms.
            </p>
            <Link to="/shop">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default Search;