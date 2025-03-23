import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingCart, User, X, Plus, Minus, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useCart } from '../hooks/use-cart';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, getTotalItems, getTotalPrice, addToCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={cn(
      'navbar transition-all duration-300 ease-out-expo',
      isScrolled ? 'py-3 shadow-sm' : 'py-5'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-display font-bold">
              <span className="text-gradient">UrbanWood</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-primary/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium text-primary/80 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="font-medium text-primary/80 hover:text-primary transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-medium text-primary/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-primary/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:flex p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart">
    <button className="relative p-2 rounded-full hover:bg-secondary transition-colors">
      <ShoppingCart className="h-5 w-5" />
      <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
        {getTotalItems()}
      </span>
    </button>
            </Link>
            <Drawer>
  <DrawerTrigger asChild>
  </DrawerTrigger>
  <DrawerContent className="max-h-[85vh] overflow-y-auto p-4">
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-10">
          <ShoppingCart className="h-10 w-10 mx-auto mb-4 text-gray-400" />
          <p className="text-muted-foreground">Your cart is empty</p>
          <Link to="/shop">
            <Button variant="outline" className="mt-4">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-start gap-4 py-4 border-b">
                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                  <p className="font-display font-medium mt-1">${item.price}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeFromCart(item.id)}
                    className="h-7 w-7"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-2 py-4 border-t">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium">Calculated at checkout</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          
          {/* Footer Section for Buttons */}
          <div className="mt-6 space-y-3">
            <Button className="w-full">Checkout</Button>
            <Link to="/cart">
              <Button variant="outline" className="w-full">View Cart</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  </DrawerContent>
</Drawer>

            
            <Link to="/account" className="hidden md:flex p-2 rounded-full hover:bg-secondary transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-white flex flex-col transition-all duration-500 ease-custom-bezier transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="text-xl font-display font-bold">
            <span className="text-gradient">Elegance</span>
          </h1>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          <Link 
            to="/" 
            className="py-3 px-4 text-lg font-medium hover:bg-secondary rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="py-3 px-4 text-lg font-medium hover:bg-secondary rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link 
            to="/collections" 
            className="py-3 px-4 text-lg font-medium hover:bg-secondary rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Collections
          </Link>
          <Link 
            to="/about" 
            className="py-3 px-4 text-lg font-medium hover:bg-secondary rounded-md transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="py-3 px-4 text-lg font-medium hover:bg-secondary rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>

        <div className="mt-auto p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" className="w-full" onClick={toggleMenu}>
              <User className="h-4 w-4 mr-2" />
              Account
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <Button variant="default" className="w-full" onClick={toggleMenu}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Cart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
