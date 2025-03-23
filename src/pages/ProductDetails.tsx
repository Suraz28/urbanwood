import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BaseLayout from '@/components/layouts/BaseLayout';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '../hooks/use-cart';
import { useFavorites } from '../hooks/useFavorites';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  features: string[];
}

interface CartItem extends Product {
  quantity: number;
}

// Simulated product data
const products: Product[] = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
    category: 'Living Room',
    rating: 4.5,
    description: 'A comfortable modern sofa with clean lines and durable fabric upholstery. Perfect for contemporary living spaces.',
    features: ['Stain-resistant fabric', 'Hardwood frame', 'Memory foam cushions', 'Easy assembly'],
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop',
    category: 'Dining Room',
    rating: 4.7,
    description: 'Elegant solid wood dining table that seats up to 6 people. Features beautiful grain patterns and expert craftsmanship.',
    features: ['Solid oak construction', 'Seats 6 people', 'Scratch-resistant finish', 'Sturdy design'],
  },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  
  useEffect(() => {
    const productId = parseInt(id || '0');
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <BaseLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p>Product not found</p>
            <Link to="/shop">
              <Button variant="outline" className="mt-4">Back to Shop</Button>
            </Link>
          </div>
        </div>
      </BaseLayout>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        ...product,
        quantity,
      };
      addToCart(cartItem);
      toast({
        title: "Added to cart",
        description: `${product.name} × ${quantity} added to your cart.`,
      });
    }
  };

  const handleToggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const isProductFavorite = isFavorite(product.id);

  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-12">
        <Link to="/shop" className="inline-flex items-center text-primary/70 hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-sm"
              onClick={handleToggleFavorite}
            >
              <Heart className={cn("h-5 w-5", isProductFavorite ? "fill-red-500 text-red-500" : "text-slate-600")} />
            </Button>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-display font-semibold mb-2">{product.name}</h1>
            <p className="text-primary/60 mb-4">{product.category}</p>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "h-5 w-5 mr-1",
                    i < Math.floor(product.rating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  )}
                />
              ))}
              <span className="ml-2 text-primary/60">{product.rating} stars</span>
            </div>
            
            <h2 className="text-2xl font-display font-semibold mb-6">${product.price.toFixed(2)}</h2>
            
            <p className="text-primary/80 mb-6">{product.description}</p>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="font-medium mb-3">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-primary/70">
                {product.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            {/* Quantity */}
            <div className="flex items-center mb-6">
              <span className="mr-4">Quantity:</span>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <span>-</span>
                </Button>
                <span className="mx-4 font-medium">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <span>+</span>
                </Button>
              </div>
            </div>
            
            {/* Add to cart button */}
            <Button className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProductDetails;
