import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cleanser from '@/assets/cleanser.jpg';
import essence from '@/assets/essence.jpg';
import moisturizer from '@/assets/moisturizer.jpg';
import sunscreen from '@/assets/sunscreen.jpg';
import combo from '@/assets/combo.jpg';

const ProductShowcase = () => {
  const products = [
    {
      name: "Melita Renewing Gel Cleanser",
      originalPrice: "₹975.00",
      salePrice: "₹335.00",
      image: cleanser
    },
    {
      name: "Melita Ultra Hydrating Essence",
      originalPrice: "₹1,499.00",
      salePrice: "₹1,199.00",
      image: essence
    },
    {
      name: "Melita Balancing Moisturizer",
      originalPrice: "₹1,299.00",
      salePrice: "₹1,099.00",
      image: moisturizer,
      featured: true,
      description: "PROVIDES INTENSE MOISTURIZATION"
    },
    {
      name: "Melita Ultra Protecting Sunscreen",
      originalPrice: "₹1,450.00",
      salePrice: "₹1,299.00",
      image: sunscreen
    },
    {
      name: "Melita Barrier Boost Combo",
      originalPrice: "₹2,799.00",
      salePrice: "₹2,299.00",
      image: combo
    }
  ];

  return (
    <section className="py-16 bg-melita-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-melita-deep-coffee mb-4">
            TAKE A STEP TOWARDS A HEALTHY SKIN
          </h2>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-soft hover:bg-melita-soft-beige"
          >
            <ChevronLeft className="h-6 w-6 text-melita-deep-coffee" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-soft hover:bg-melita-soft-beige"
          >
            <ChevronRight className="h-6 w-6 text-melita-deep-coffee" />
          </Button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-12">
            {products.map((product, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-lg shadow-product overflow-hidden hover:shadow-luxury transition-all duration-300 group-hover:scale-105">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Featured Product Badge */}
                  {product.featured && (
                    <div className="absolute top-4 left-4 right-4">
                      <div className="bg-white/90 rounded-lg p-3 text-center">
                        <p className="font-roboto text-xs font-medium text-melita-deep-coffee">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Product Info */}
                  <div className="p-4 space-y-3">
                    <h3 className="font-roboto font-medium text-sm text-melita-deep-coffee leading-tight">
                      {product.name}
                    </h3>
                    
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-roboto text-xs text-melita-medium line-through">
                          {product.originalPrice}
                        </span>
                        <span className="font-roboto font-semibold text-melita-deep-coffee">
                          {product.salePrice}
                        </span>
                      </div>
                    </div>
                    
                    {product.featured && (
                      <Button className="w-full bg-melita-golden-taupe hover:bg-melita-deep-coffee text-white font-roboto text-xs py-2 rounded-md transition-colors">
                        ADD TO BAG
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-melita-deep-coffee">
            DISCOVER YOUR SKIN BARRIER'S HEALTH IN 2 MINUTES
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;