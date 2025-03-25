
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-medium tracking-tight focus:outline-none"
        >
          minima.
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks className="flex items-center space-x-8" />
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/cart" 
            className="relative p-2 focus:outline-none"
            aria-label="Cart"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium bg-black text-white rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden focus:outline-none" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <nav className="container mx-auto p-4">
            <NavLinks className="flex flex-col space-y-4" />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <div className={className}>
      {links.map(link => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            'inline-block text-base transition-colors duration-200 link-hover',
            location.pathname === link.path ? 'font-medium' : 'text-gray-600 hover:text-black'
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
