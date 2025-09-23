import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Leaf, Star, Beaker } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-melita-warm-sand text-melita-deep-coffee">
      {/* Features Bar */}
      <div className="border-b border-melita-golden-taupe/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <Shield className="w-12 h-12 mx-auto text-melita-golden-taupe" strokeWidth={1} />
              <p className="font-roboto font-semibold text-sm">DERMATOLOGICALLY</p>
              <p className="font-roboto font-semibold text-sm">TESTED</p>
            </div>
            <div className="text-center space-y-2">
              <Leaf className="w-12 h-12 mx-auto text-melita-golden-taupe" strokeWidth={1} />
              <p className="font-roboto font-semibold text-sm">VEGAN &</p>
              <p className="font-roboto font-semibold text-sm">CRUELTY FREE</p>
            </div>
            <div className="text-center space-y-2">
              <Star className="w-12 h-12 mx-auto text-melita-golden-taupe" strokeWidth={1} />
              <p className="font-roboto font-semibold text-sm">INDIAN SKIN</p>
              <p className="font-roboto font-semibold text-sm">FOCUSED</p>
            </div>
            <div className="text-center space-y-2">
              <Beaker className="w-12 h-12 mx-auto text-melita-golden-taupe" strokeWidth={1} />
              <p className="font-roboto font-semibold text-sm">ACTIVES AT</p>
              <p className="font-roboto font-semibold text-sm">OPTIMAL PERCENTAGE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-2xl font-semibold mb-4">Melita®</h3>
              <h4 className="font-roboto font-semibold text-lg mb-4">GET IN TOUCH</h4>
              <p className="font-roboto text-sm mb-2">Community@Melita.in</p>
              
              <div className="text-sm font-roboto space-y-1">
                <p>E&L Beauty Solutions Private Limited</p>
                <p>152/20, 3/F Royal Space 5th Main</p>
                <p>7th Sector, Madina Nagar, Hsr</p>
                <p>Layout Bangalore, Karnataka, India</p>
                <p>560102.</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <div className="relative">
                <Input
                  placeholder="PHONE"
                  className="bg-transparent border-melita-deep-coffee/40 text-melita-deep-coffee placeholder:text-melita-deep-coffee/60 font-roboto"
                />
              </div>
              <div className="relative">
                <Input
                  placeholder="EMAIL"
                  className="bg-transparent border-melita-deep-coffee/40 text-melita-deep-coffee placeholder:text-melita-deep-coffee/60 font-roboto"
                />
              </div>
              <Button className="w-full bg-melita-deep-coffee hover:bg-melita-deep-coffee/90 text-white font-roboto font-semibold py-3">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-roboto font-semibold text-lg mb-6">EXPLORE</h4>
            <div className="space-y-3 font-roboto text-sm">
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Cleanser</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Essence</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Moisturizer</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Sunscreen</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Combo</a></p>
            </div>
          </div>

          {/* Know More */}
          <div>
            <h4 className="font-roboto font-semibold text-lg mb-6">KNOW MORE</h4>
            <div className="space-y-3 font-roboto text-sm">
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">About Us</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Shop</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Blogs</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Take a Test</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Why Melita</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Our Journey</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">& Philosophy</a></p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-roboto font-semibold text-lg mb-6">INFO</h4>
            <div className="space-y-3 font-roboto text-sm">
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Terms & Conditions</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Refund & Returns</a></p>
              <p><a href="#" className="hover:text-melita-deep-coffee/80 transition-colors">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;