import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./hooks/useFavorites";
import { SearchProvider } from "./hooks/useSearch";
import { CartProvider } from "./hooks/use-cart";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import About from "./pages/About";
import { Search } from "lucide-react";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <SearchProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index/>} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/category/:id" element={<Category/>} />
              <Route path="/product/:id" element={<ProductDetails/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/favorites" element={<Favorites/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
              <Route path="/terms" element={<TermsOfService/>} />
              <Route path="/cookie-policy" element={<CookiePolicy/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </SearchProvider>
        </BrowserRouter>
      </FavoritesProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;