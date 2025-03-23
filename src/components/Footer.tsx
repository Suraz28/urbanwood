import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl text-white/80 font-display font-semibold mb-4">UrbanWood</h3>
            <p className="text-white/80 mb-6">
              Premium furniture for discerning tastes. Each piece is crafted to elevate your living space.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collections/living-room" className="text-white/80 hover:text-white transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/collections/bedroom" className="text-white/80 hover:text-white transition-colors">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="/collections/dining" className="text-white/80 hover:text-white transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/collections/office" className="text-white/80 hover:text-white transition-colors">
                  Office
                </Link>
              </li>
              <li>
                <Link to="/collections/outdoor" className="text-white/80 hover:text-white transition-colors">
                  Outdoor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/craftmanship" className="text-white/80 hover:text-white transition-colors">
                  Craftmanship
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-white/80 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/80 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-white/80 hover:text-white transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-white/80 hover:text-white transition-colors">
                  Care Instructions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} UrbanWood Furniture. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
