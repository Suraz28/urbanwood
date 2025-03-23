
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BaseLayout from '@/components/layouts/BaseLayout';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../hooks/use-cart';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();
  const { addToCart } = useCart();

  if (favorites.length === 0) {
    return (
      <BaseLayout>
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-6">Your Favorites</h1>
            <p className="text-lg text-primary/80 mb-8">You haven't added any products to your favorites yet.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Your Favorites</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border">
                <div className="relative">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-sm" 
                    onClick={() => removeFavorite(product.id)}
                  >
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                  </Button>
                </div>
                
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium text-lg hover:text-primary/80 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-primary/60 mb-3">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-display font-medium">${product.price.toFixed(2)}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Favorites;