import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from './use-toast';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  description?: string;
}

interface FavoritesContextProps {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const { toast } = useToast();

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product: Product) => {
    if (!isFavorite(product.id)) {
      setFavorites((prev) => [...prev, product]);
      toast({
        title: "Added to favorites",
        description: `${product.name} has been added to your favorites.`,
      });
    }
  };

  const removeFavorite = (productId: number) => {
    const product = favorites.find(fav => fav.id === productId);
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
    if (product) {
      toast({
        title: "Removed from favorites",
        description: `${product.name} has been removed from your favorites.`,
      });
    }
  };

  const isFavorite = (productId: number) => {
    return favorites.some((item) => item.id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};