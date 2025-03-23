import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearching(true);
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsSearching(false);
    }
  };

  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      handleSearch,
      isSearching
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  
  return context;
};