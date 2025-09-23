import { Button } from '@/components/ui/button';
import scienceCard from '@/assets/science-card.jpg';
import ingredientsCard from '@/assets/ingredients-card.jpg';
import climateCard from '@/assets/climate-card.jpg';
import routineCard from '@/assets/routine-card.jpg';

const WhyMelita = () => {
  const benefits = [
    {
      title: "Backed by Science",
      image: scienceCard,
      description: "Research-backed formulations with proven results"
    },
    {
      title: "Ingredients Your Skin Recognizes",
      image: ingredientsCard,
      description: "Natural, effective ingredients your skin loves"
    },
    {
      title: "Made for Our Climate",
      image: climateCard,
      description: "Specially formulated for humid tropical weather"
    },
    {
      title: "Small Routine, Big Impact",
      image: routineCard,
      description: "Minimalist approach with maximum effectiveness"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-melita-deep-coffee mb-4">
            WHY MELITA
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-luxury transition-all duration-300 group-hover:scale-105">
                {/* Card Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-roboto font-semibold text-lg text-melita-deep-coffee leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-melita-golden-taupe text-melita-deep-coffee hover:bg-melita-golden-taupe hover:text-white transition-colors"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMelita;