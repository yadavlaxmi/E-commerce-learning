
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const Hero = () => {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Discover quality products for your everyday needs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Explore our curated collection of premium products designed to enhance your lifestyle.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <CustomButton
                className="bg-black text-white"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Shop Now
              </CustomButton>
            </Link>
            
            <Link to="/about">
              <CustomButton
                variant="outline"
                className="border-gray-300"
              >
                Learn More
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute right-0 w-full md:w-1/2 h-full bg-gray-50 rounded-bl-[100px]"></div>
      </div>
    </section>
  );
};

export default Hero;
