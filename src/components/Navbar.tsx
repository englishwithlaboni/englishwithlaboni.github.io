import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'Why Me', href: isHome ? '#why-me' : '/#why-me' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-rose/10 flex items-center justify-center group-hover:bg-brand-rose/20 transition-colors">
              <BookOpen className="w-5 h-5 text-brand-rose" />
            </div>
            <span className="font-serif text-xl font-semibold text-brand-teal">
              English with Laboni
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-teal/80 hover:text-brand-rose transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="px-5 py-2.5 rounded-full bg-brand-teal text-brand-cream text-sm font-medium hover:bg-brand-teal/90 transition-colors"
            >
              Book a Class
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-teal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-teal/10 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-brand-teal/80 hover:text-brand-rose transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="px-5 py-3 rounded-lg bg-brand-teal text-brand-cream text-center font-medium hover:bg-brand-teal/90 transition-colors mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Class
          </a>
        </div>
      )}
    </nav>
  );
}
