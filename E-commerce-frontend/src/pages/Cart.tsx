
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    toast.success('Checkout successful!', {
      description: 'This is a demo, but in a real store, you would proceed to payment.',
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-medium mb-3">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet. Start shopping to fill it with great items!
          </p>
          <CustomButton
            onClick={() => navigate('/products')}
            variant="primary"
            className="bg-black text-white"
          >
            Start Shopping
          </CustomButton>
        </div>
      </div>
    );
  }
  
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-medium">Shopping Cart</h1>
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Continue Shopping</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex bg-white p-4 rounded-lg shadow-sm gap-4 animate-fade-in">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium truncate">{item.name}</h3>
                        <span className="font-medium ml-2 whitespace-nowrap">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="mt-1 flex items-end justify-between">
                        <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={clearCart}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm mt-4 inline-flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Clear cart
              </button>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                </div>
                
                <CustomButton
                  onClick={handleCheckout}
                  fullWidth
                  size="lg"
                  className="bg-black text-white"
                >
                  Proceed to Checkout
                </CustomButton>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>We accept</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="bg-gray-100 px-2 py-1 rounded">Visa</div>
                    <div className="bg-gray-100 px-2 py-1 rounded">Mastercard</div>
                    <div className="bg-gray-100 px-2 py-1 rounded">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
