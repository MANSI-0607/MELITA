import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-melita-deep-coffee">
            About Melita
          </h1>
          <p className="font-roboto text-lg text-melita-medium leading-relaxed">
            Melita is a luxury skincare brand dedicated to creating scientifically-backed, 
            dermatologically tested products specifically formulated for Indian skin. 
            Our commitment to vegan, cruelty-free formulations ensures that you can care 
            for your skin while staying true to your values.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-melita-soft-beige p-8 rounded-lg">
              <h3 className="font-playfair text-2xl font-semibold text-melita-deep-coffee mb-4">
                Our Mission
              </h3>
              <p className="font-roboto text-melita-medium">
                To provide effective, safe, and luxurious skincare solutions that celebrate 
                and protect the unique beauty of Indian skin.
              </p>
            </div>
            <div className="bg-melita-soft-beige p-8 rounded-lg">
              <h3 className="font-playfair text-2xl font-semibold text-melita-deep-coffee mb-4">
                Our Values
              </h3>
              <p className="font-roboto text-melita-medium">
                Science-backed formulations, ethical sourcing, sustainability, 
                and a deep respect for the diversity of Indian skin tones and types.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;