
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/utils/productData';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(id) : undefined;
  
  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <CustomButton
            onClick={() => navigate('/products')}
            variant="primary"
          >
            Return to Products
          </CustomButton>
        </div>
      </div>
    );
  }
  
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back</span>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="lg:py-12">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">{product.name}</h1>
            <div className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <p className="text-gray-600">
                {product.description}
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Quantity</span>
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg inline-flex">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton 
                onClick={handleAddToCart}
                leftIcon={<ShoppingBag className="w-5 h-5" />}
                fullWidth
                size="lg"
                className="bg-black text-white"
              >
                Add to Cart
              </CustomButton>
              <CustomButton 
                variant="outline"
                size="lg"
                fullWidth
                className="border-gray-300"
              >
                Save to Wishlist
              </CustomButton>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium mb-1">Free Delivery</h4>
                <p className="text-sm text-gray-600">For orders over $50</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium mb-1">Easy Returns</h4>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
