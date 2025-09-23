import { Button } from '@/components/ui/button';
import journeyHero from '@/assets/journey-hero.jpg';

const JourneyPhilosophy = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={journeyHero}
                alt="Our journey and philosophy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 bg-melita-soft-beige p-8 rounded-lg">
            <div>
              <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-melita-deep-coffee mb-4">
                OUR JOURNEY
                <br />
                AND PHILOSOPHY
              </h2>
              <p className="font-roboto text-melita-deep-coffee text-sm leading-relaxed mb-6">
                At Melita, we believe in creating skincare simple and effective. Our 
                products use powerful ingredients to nourish your skin, healthier skin and 
                soul. The belief in providing great sense that enhances your natural 
                beauty, helping you shine through your skin becoming rich and refreshed every day.
              </p>
            </div>
            
            <Button 
              variant="melita" 
              className="px-8 py-3 font-roboto font-medium text-sm tracking-wide"
            >
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPhilosophy;