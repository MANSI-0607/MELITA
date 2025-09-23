import { Shield, Leaf, Star, Beaker } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "DERMATOLOGICALLY",
      subtitle: "TESTED",
      description: "Clinically tested for safety and efficacy"
    },
    {
      icon: Leaf,
      title: "VEGAN &",
      subtitle: "CRUELTY FREE",
      description: "Ethically made without animal testing"
    },
    {
      icon: Star,
      title: "INDIAN SKIN",
      subtitle: "FOCUSED",
      description: "Specially formulated for Indian skin tones"
    },
    {
      icon: Beaker,
      title: "ACTIVES AT",
      subtitle: "OPTIMAL PERCENTAGE",
      description: "Maximum efficacy with proven concentrations"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-melita-soft-beige flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-melita-golden-taupe" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Title */}
              <div className="space-y-1">
                <h3 className="font-roboto font-semibold text-sm text-melita-deep-coffee tracking-wide">
                  {feature.title}
                </h3>
                <h3 className="font-roboto font-semibold text-sm text-melita-deep-coffee tracking-wide">
                  {feature.subtitle}
                </h3>
              </div>
              
              {/* Description */}
              <p className="font-roboto text-xs text-melita-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;