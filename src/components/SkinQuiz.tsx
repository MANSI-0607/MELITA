import { Button } from '@/components/ui/button';
import quizHero from '@/assets/quiz-hero.jpg';

const SkinQuiz = () => {
  return (
    <section className="py-16 bg-melita-soft-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-melita-deep-coffee">
            DISCOVER YOUR SKIN BARRIER'S HEALTH IN 2 MINUTES
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-melita-deep-coffee mb-6 text-center lg:text-left">
                TAKE THE QUIZ TO KNOW MORE
              </h3>
              <div className="text-center lg:text-left">
                <Button 
                  variant="melita" 
                  className="px-8 py-3 font-roboto font-medium text-sm tracking-wide"
                >
                  FIND OUT NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={quizHero}
                alt="Woman with skincare routine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinQuiz;