import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Teacher', href: '#teacher' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo variant={isScrolled ? 'dark' : 'light'} />

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all"
            >
              Book a Trial
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-2 text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Trial
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}