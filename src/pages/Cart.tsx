import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plus, Minus, Trash, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/use-cart';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-6">Your Cart</h1>
            <p className="text-lg text-primary/80 mb-8">Your cart is currently empty.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Your Cart</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="border-b pb-4 mb-4 hidden md:grid md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <span className="font-medium">Product</span>
                </div>
                <div className="md:col-span-2 text-center">
                  <span className="font-medium">Price</span>
                </div>
                <div className="md:col-span-2 text-center">
                  <span className="font-medium">Quantity</span>
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="font-medium">Subtotal</span>
                </div>
              </div>
              
              {cart.map((item) => (
                <div key={item.id} className="border-b py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-6 flex items-center gap-4">
                    <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-primary/60">{item.category}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 flex md:justify-center items-center">
                    <span className="font-display">${item.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="md:col-span-2 flex md:justify-center items-center">
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
                  
                  <div className="md:col-span-2 flex justify-between md:justify-end items-center">
                    <span className="font-display font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive ml-3"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between items-center mt-8">
                <Link to="/">
                  <Button variant="outline" className="flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;