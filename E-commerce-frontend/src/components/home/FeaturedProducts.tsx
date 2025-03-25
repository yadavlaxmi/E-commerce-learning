
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { getFeaturedProducts } from '@/utils/productData';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-medium tracking-tight mb-3">Featured Products</h2>
            <p className="text-gray-600 max-w-lg">
              Carefully selected items that exemplify our commitment to quality and design.
            </p>
          </div>
          <Link 
            to="/products" 
            className="inline-flex items-center group"
          >
            <span className="mr-2 font-medium">View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              featured={true}
              className="animate-scale-in" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
