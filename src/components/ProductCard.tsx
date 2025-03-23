import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../hooks/use-cart';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating?: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const isProductFavorite = isFavorite(product.id);

  const handleFavoriteClick = () => {
    if (isProductFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-tr from-[#f0e9e6] to-white border border-[#b1b2b9]/20">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 ease-out-expo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#272e36]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Badge variant="outline" className="absolute top-3 left-3 bg-[#f0e9e6]/80 text-[#191f25] backdrop-blur-sm">
          {product.category}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-[#f0e9e6]/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm hover:bg-[#9095a1]/30"
          onClick={handleFavoriteClick}
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-all duration-300", 
              isProductFavorite 
                ? "fill-red-500 text-red-500 scale-110 heart-animation" 
                : "text-[#5b5d62]"
            )} 
          />
        </Button>
      </div>
      
      <div className="p-4 bg-gradient-to-b from-[#f0e9e6]/30 to-white">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg text-[#272e36] hover:text-primary/80 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-3">
          <span className="font-display font-medium text-[#191f25]">${product.price.toFixed(2)}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-primary/90 to-primary text-white border-none hover:from-primary hover:to-primary/90 shadow-sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;