import { ShoppingBag, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '@/assets/MelitaLogo.png';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`${isHome ? 'sticky top-0 z-50' : ''} relative bg-[#F5F0E8] border-b border-[#D4B5A0]/30 py-4 px-4 sm:px-6 backdrop-blur-sm`}>
      {/* Navigation */}
      <nav>
        <div className="max-w-6xl mx-auto px-1 sm:px-3 relative grid grid-cols-3 items-center">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-[#835339] focus:outline-none md:hidden justify-self-start p-2"
            aria-label="Toggle Menu"
          >
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Left Navigation (desktop) */}
          <div className="hidden md:flex items-center space-x-8 justify-self-start">
            <Link to="/about" className="font-headingOne text-lg text-[#835339] hover:text-[#2C3E50]">
              About Us
            </Link>
            <Link to="/shop" className="font-headingOne text-lg text-[#835339] hover:text-[#2C3E50]">
              Shop
            </Link>
            <Link to="/blog" className="font-headingOne text-lg text-[#835339] hover:text-[#2C3E50]">
              Blog
            </Link>
          </div>

          {/* Logo */}
          <div className="col-start-2 justify-self-center">
            <Link to="/">
              <img className="w-24 sm:w-28 md:w-32" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-1 sm:space-x-2 justify-self-end">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hover:bg-melita-soft-beige">
                <ShoppingBag className="h-6 w-6 scale-125 text-[#835339]" />
              </Button>
            </Link>
            <div className="hidden md:block">
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="hover:bg-melita-soft-beige">
                  <Heart className="h-6 w-6 scale-125 text-[#835339]" />
                </Button>
              </Link>
            </div>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="hover:bg-melita-soft-beige">
                <User className="h-6 w-6 scale-125 text-[#835339]" />
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-md border-t">
            <div className="flex flex-col px-4 py-2">
              <Link to="/about" className="block py-2 text-[#835339]" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/shop" className="block py-2 text-[#835339]" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/blog" className="block py-2 text-[#835339]" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;