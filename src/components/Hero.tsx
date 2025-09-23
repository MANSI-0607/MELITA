import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-sunscreen.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] bg-gradient-hero overflow-hidden">
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-soft"
      >
        <ChevronLeft className="h-6 w-6 text-melita-deep-coffee" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-soft"
      >
        <ChevronRight className="h-6 w-6 text-melita-deep-coffee" />
      </Button>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-melita-deep-coffee">
                Your Skin's
              </h2>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-melita-deep-coffee">
                Daily Shield
              </h2>
            </div>
            
            <div className="inline-block bg-melita-deep-coffee text-white px-4 py-2 rounded-md">
              <span className="font-roboto font-semibold text-sm tracking-wider">
                INTRODUCING
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-melita-deep-coffee">
                ULTRA PROTECTING
              </h3>
              <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-melita-deep-coffee">
                SUNSCREEN
              </h3>
              <p className="font-roboto text-lg font-medium text-orange-600">
                SPF 50+ | PA++++
              </p>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroImage}
                alt="Melita Ultra Protecting Sunscreen"
                className="w-full max-w-md object-cover rounded-lg shadow-luxury"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;