import { ShoppingBag, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="font-roboto text-foreground hover:text-melita-golden-taupe transition-colors">
              About Us
            </Link>
            <Link to="/shop" className="font-roboto text-foreground hover:text-melita-golden-taupe transition-colors">
              Shop
            </Link>
            <Link to="/blog" className="font-roboto text-foreground hover:text-melita-golden-taupe transition-colors">
              Blog
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center">
            <Link to="/">
              <h1 className="font-playfair text-3xl font-semibold text-melita-deep-coffee tracking-wide hover:text-melita-golden-taupe transition-colors">
                Melita
                <span className="text-xs align-super font-roboto">®</span>
              </h1>
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-melita-soft-beige">
              <ShoppingBag className="h-5 w-5 text-melita-deep-coffee" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-melita-soft-beige">
              <Heart className="h-5 w-5 text-melita-deep-coffee" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-melita-soft-beige">
              <User className="h-5 w-5 text-melita-deep-coffee" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;