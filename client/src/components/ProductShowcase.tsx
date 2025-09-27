import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import cleanser1 from '@/assets/product_img/cleanser/cleanser1.jpg';
import cleanser2 from '@/assets/product_img/cleanser/cleanser2.jpg';
import essence1 from '@/assets/product_img/essence/essence1.jpg';
import essence2 from '@/assets/product_img/essence/essence2.jpg';
import moisturizer1 from '@/assets/product_img/moisturizer/moisturizer1.jpg';
import moisturizer2 from '@/assets/product_img/moisturizer/moisturizer2.jpg';
import sunscreen1 from '@/assets/product_img/sunscreen/sunscreen1.jpg';
import sunscreen2 from '@/assets/product_img/sunscreen/sunscreen2.jpg';
import combo1 from '@/assets/product_img/combo.jpg';
import combo2 from '@/assets/product_img/combo2.jpg';
import drySkin1 from '@/assets/product_img/dryskin.jpg';
import drySkin2 from '@/assets/product_img/dryskin2.jpg';
import oilySkin1 from '@/assets/product_img/oilyskin.jpg';
import oilySkin2 from '@/assets/product_img/oilyskin2.jpg';
import duo1 from '@/assets/product_img/duo.jpg';
import duo2 from '@/assets/product_img/duo2.jpg';

const ProductShowcase = () => {
  const products = [
    {
      name: "Melita Renewing Gel Cleanser",
      originalPrice: "₹375.00",
      salePrice: "₹335.00",
      image: cleanser1,
      hoverImage: cleanser2,
      link: "/products.php?sku=melita-renewing-gel-cleanser",
    },
    {
      name: "Melita Ultra Hydrating Essence",
      originalPrice: "₹1,499.00",
      salePrice: "₹1,199.00",
      image: essence1,
      hoverImage: essence2,
      link: "/products.php?sku=melita-ultra-hydrating-essence",
    },
    {
      name: "Melita Balancing Moisturizer",
      originalPrice: "₹1,299.00",
      salePrice: "₹1,099.00",
      image: moisturizer1,
      hoverImage: moisturizer2,
      link: "/products.php?sku=melita-balancing-moisturizer",
      featured: true,
      description: "PROVIDES INTENSE MOISTURIZATION",
    },
    {
      name: "Melita Ultra Protecting Sunscreen",
      originalPrice: "₹1,450.00",
      salePrice: "₹1,299.00",
      image: sunscreen1,
      hoverImage: sunscreen2,
      link: "/products.php?sku=melita-ultra-protecting-sunscreen",
    },
    {
      name: "Melita Barrier Boost Combo",
      originalPrice: "₹2,798.00",
      salePrice: "₹2,299.00",
      image: combo1,
      hoverImage: combo2,
      link: "/products.php?sku=melita-barrier-boost-combo",
    },
    {
      name: "Melita Dry Skin Daily Essentials",
      originalPrice: "₹4,623.00",
      salePrice: "₹3,699.00", // adjust if needed
      image: drySkin1,
      hoverImage: drySkin2,
      link: "/products.php?sku=melita-dry-skin-daily-essentials",
    },
    {
      name: "Melita Oily Skin Daily Essentials",
      originalPrice: "₹3,324.00",
      salePrice: "₹2,593.00",
      image: oilySkin1,
      hoverImage: oilySkin2,
      link: "/products.php?sku=melita-oily-skin-daily-essentials",
    },
    {
      name: "Melita Barrier Care Starter Duo",
      originalPrice: "₹1,874.00",
      salePrice: "₹1,499.00",
      image: duo1,
      hoverImage: duo2,
      link: "/products.php?sku=melita-barrier-care-starter-duo",
    },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section id="products">
      <div className="my-6 md:my-8">
        <h2 className="text-[#1e4323] text-center text-xl sm:text-2xl md:text-3xl font-headingOne font-semibold leading-snug uppercase">
          Take A Step Towards A Healthy Skin
        </h2>
      </div>

      <div className="relative px-4 sm:px-10">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-lg text-fuchsia-900 shadow-xl hover:shadow-2xl rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Product Slider */}
        <div
          ref={sliderRef}
          className="overflow-x-auto flex snap-x snap-mandatory gap-4 px-2 py-4 scroll-smooth scrollbar-custom"
        >
          {products.map((product, index) => (
            <div key={index} className="flex-none w-[280px] snap-center">
              <div className="relative group w-[280px] overflow-hidden rounded-lg shadow-lg bg-[#f0e4d4] border border-gray-200">
                <a href={product.link} className="block relative h-84 overflow-hidden">
                  <img
                    src={product.image}
                    loading="lazy"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      loading="lazy"
                      alt={`${product.name} hover`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                  )}
                  {/* Hover Add to Bag (Desktop) */}
                  <div className="hidden sm:block absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      type="button"
                      className="bg-[#835339] text-white font-headingTwo font-semibold rounded-sm text-base px-20 py-2 transition-all whitespace-nowrap shadow-md hover:bg-white hover:text-[#835339] hover:border border-[#835339]"
                    >
                      ADD TO BAG
                    </button>
                  </div>
                </a>

                {/* Product Info */}
                <div className="p-4 space-y-1 text-center bg-[#f0e4d4] h-[120px] flex flex-col justify-center">
                  <h3 className="text-lg font-headingTwo font-bold text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="pt-2 flex flex-col items-center">
                    <span className="text-lg line-through text-gray-400">
                      {product.originalPrice}
                    </span>
                    <span className="text-[#835339] text-md font-headingTwo font-bold">
                      {product.salePrice}
                    </span>
                  </div>
                </div>

                {/* Add to Bag (Mobile) */}
                <div className="block sm:hidden px-4 mb-6 bg-[#f0e4d4] h-[60px] flex items-center justify-center">
                  <button
                    type="button"
                    className="w-full block text-center bg-white font-headingTwo font-semibold rounded-sm text-base px-8 py-2 transition-all shadow-md text-[#835339] border border-[#835339] hover:bg-[#835339] hover:text-white"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-lg text-fuchsia-900 shadow-xl hover:shadow-2xl rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
