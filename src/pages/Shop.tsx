import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import cleanser from '@/assets/cleanser.jpg';
import essence from '@/assets/essence.jpg';
import moisturizer from '@/assets/moisturizer.jpg';
import sunscreen from '@/assets/sunscreen.jpg';
import combo from '@/assets/combo.jpg';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Melita Renewing Gel Cleanser",
      originalPrice: "₹975.00",
      salePrice: "₹335.00",
      image: cleanser,
      description: "A gentle yet effective cleanser that removes impurities while maintaining skin barrier."
    },
    {
      id: 2,
      name: "Melita Ultra Hydrating Essence",
      originalPrice: "₹1,499.00",
      salePrice: "₹1,199.00",
      image: essence,
      description: "Lightweight hydrating essence that penetrates deep into skin layers."
    },
    {
      id: 3,
      name: "Melita Balancing Moisturizer",
      originalPrice: "₹1,299.00",
      salePrice: "₹1,099.00",
      image: moisturizer,
      description: "Provides intense moisturization while balancing oil production."
    },
    {
      id: 4,
      name: "Melita Ultra Protecting Sunscreen",
      originalPrice: "₹1,450.00",
      salePrice: "₹1,299.00",
      image: sunscreen,
      description: "SPF 50+ PA++++ broad spectrum protection designed for Indian skin."
    },
    {
      id: 5,
      name: "Melita Barrier Boost Combo",
      originalPrice: "₹2,799.00",
      salePrice: "₹2,299.00",
      image: combo,
      description: "Complete skincare routine to strengthen and protect your skin barrier."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-melita-deep-coffee mb-4">
            Shop Melita
          </h1>
          <p className="font-roboto text-lg text-melita-medium">
            Discover our complete range of luxury skincare products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-product overflow-hidden hover:shadow-luxury transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-playfair text-xl font-semibold text-melita-deep-coffee">
                  {product.name}
                </h3>
                
                <p className="font-roboto text-sm text-melita-medium">
                  {product.description}
                </p>
                
                <div className="flex items-center space-x-3">
                  <span className="font-roboto text-melita-medium line-through">
                    {product.originalPrice}
                  </span>
                  <span className="font-roboto font-bold text-lg text-melita-deep-coffee">
                    {product.salePrice}
                  </span>
                </div>
                
                <Button className="w-full bg-melita-golden-taupe hover:bg-melita-deep-coffee text-white font-roboto transition-colors">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;