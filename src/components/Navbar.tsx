import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Products', path: '/products' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav 
        className={`bg-white/95 backdrop-blur transition-shadow duration-200 ${
          isScrolled ? 'shadow-lg border-b border-slate-200' : 'border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* DTS Brand Logo */}
            <Link to="/" className="flex min-w-0 max-w-[calc(100%-7rem)] items-center gap-2 sm:gap-3 group">
              <img 
                src="images/branding/dts-globe-logo.png" 
                alt="Dynamic Tooling Systems Logo" 
                className="h-8 sm:h-10 w-auto shrink-0 object-contain mix-blend-multiply transition-transform group-hover:scale-105"
              />
              <div className="min-w-0 flex flex-col">
                <span className="font-extrabold text-sm sm:text-lg tracking-tight text-dts-navy leading-none truncate">
                  DYNAMIC TOOLING SYSTEMS
                </span>
                <span className="hidden sm:block text-[10px] font-semibold text-dts-steel tracking-[0.14em] uppercase mt-0.5 leading-none truncate">
                  Automotive Tooling & Precision Mfg · Estd. 2004
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-dts-accent bg-blue-50 font-bold'
                      : 'text-slate-600 hover:text-dts-navy hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center pl-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-sm font-semibold px-4 py-2.5 rounded-md shadow-sm transition-all transform active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center bg-dts-accent text-white text-xs font-semibold px-3 rounded-md"
              >
                Contact
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-700 hover:text-dts-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-dts-accent"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-semibold ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-dts-accent font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-dts-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center space-x-2 bg-dts-accent text-white font-semibold py-3 px-4 rounded-md shadow-sm"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col space-y-2 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-dts-accent" />
                  <a href={`tel:${COMPANY_INFO.contact.phones[0].link}`} className="hover:underline">
                    {COMPANY_INFO.contact.phones[0].display}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-dts-accent" />
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:underline">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  Hosur, Tamil Nadu • ISO 9001:2015
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
