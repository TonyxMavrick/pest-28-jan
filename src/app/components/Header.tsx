import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <div>
              <h1 className="font-black text-xl text-gray-900">PestGuard Pro</h1>
              <p className="text-xs text-emerald-600">Protecting Your Space</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+16517627822"
              className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+1-651-762-7822</span>
            </a>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Get Free Inspection
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium ${
                    isActive(link.path)
                      ? 'text-emerald-600'
                      : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+16517627822"
                className="flex items-center space-x-2 text-gray-700 pt-4 border-t"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1-651-762-7822</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-center hover:bg-emerald-700"
              >
                Get Free Inspection
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}