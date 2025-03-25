
import React, { useState } from 'react';
import { products, Product } from '@/utils/productData';
import ProductCard from '@/components/ui/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories from products
  const categories = ['all', ...Array.from(new Set(products.map(product => product.category)))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory && selectedCategory !== 'all'
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-6">All Products</h1>
          <p className="text-gray-600 max-w-2xl mb-8">
            Browse our collection of premium products designed for your everyday needs.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'all' ? null : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  (category === 'all' && !selectedCategory) || selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
