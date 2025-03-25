
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Facebook, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">All Products</Link></li>
              <li><Link to="/products/new" className="text-gray-600 hover:text-gray-900 transition-colors">New Arrivals</Link></li>
              <li><Link to="/products/featured" className="text-gray-600 hover:text-gray-900 transition-colors">Featured</Link></li>
              <li><Link to="/products/sale" className="text-gray-600 hover:text-gray-900 transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-gray-900 transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-gray-900 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/warranty" className="text-gray-600 hover:text-gray-900 transition-colors">Warranty</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Subscribe for updates on new products and exclusive offers.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Store. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>by Designers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
