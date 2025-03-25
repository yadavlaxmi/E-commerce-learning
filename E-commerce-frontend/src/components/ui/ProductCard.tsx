
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/utils/productData';
import { useCart } from '@/contexts/CartContext';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  featured?: boolean;
}

const ProductCard = ({ product, className, featured = false }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn(
        'group relative block bg-white overflow-hidden transition-all duration-300',
        featured ? 'rounded-2xl' : 'rounded-lg',
        className
      )}
    >
      <div className={cn(
        'aspect-square overflow-hidden',
        featured ? 'rounded-2xl' : 'rounded-lg'
      )}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className={cn(
        'p-4 flex flex-col',
        featured && 'p-6'
      )}>
        <div className="flex justify-between items-start mb-2">
          <h3 className={cn(
            'font-medium text-gray-900 group-hover:text-black transition-colors',
            featured ? 'text-xl' : 'text-base'
          )}>
            {product.name}
          </h3>
          <span className={cn(
            'font-medium ml-2 whitespace-nowrap',
            featured ? 'text-lg' : 'text-base'
          )}>
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <button
          onClick={handleAddToCart}
          className="mt-auto inline-flex items-center justify-center gap-2 self-start py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full text-sm font-medium transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Add to cart</span>
        </button>
      </div>
      
      {/* Quick action - add to cart */}
      <button
        onClick={handleAddToCart}
        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm shadow-sm rounded-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
        aria-label="Add to cart"
      >
        <Plus className="w-4 h-4" />
      </button>
    </Link>
  );
};

export default ProductCard;
