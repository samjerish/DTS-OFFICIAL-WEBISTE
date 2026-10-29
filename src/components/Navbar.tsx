import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
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
    { name: 'About Us', path: '/about' },
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
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-dts-navy text-white text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6 text-slate-300">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-dts-accent" />
              <span className="font-medium text-slate-200">ISO 9001:2015 Certified</span>
              <span className="text-slate-400">| Automotive Tooling & Press Stamping</span>
            </span>
            <span className="text-slate-400">
              Hosur, Tamil Nadu, India
            </span>
          </div>

          <div className="flex items-center space-x-5 text-slate-300">
            <a 
              href={`tel:${COMPANY_INFO.contact.phones[0].link}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-dts-accent" />
              <span>{COMPANY_INFO.contact.phones[0].display} / 33</span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-dts-accent" />
              <span>{COMPANY_INFO.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* DTS Brand Logo */}
            <Link to="/" className="flex items-center space-x-3.5 group">
              <img 
                src="/images/branding/dts-globe-logo.png" 
                alt="Dynamic Tooling Systems Logo" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-dts-navy leading-none">
                  DYNAMIC TOOLING SYSTEMS
                </span>
                <span className="text-[11px] font-semibold text-dts-steel tracking-wider uppercase mt-1">
                  Automotive Tooling & Precision Mfg • Estd. 2004
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-dts-accent bg-blue-50/80 font-bold'
                      : 'text-slate-700 hover:text-dts-accent hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Request a Quote CTA */}
            <div className="hidden lg:flex items-center pl-3">
              <Link
                to="/contact?mode=quote"
                className="inline-flex items-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm transition-all transform active:scale-95"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                to="/contact?mode=quote"
                className="bg-dts-accent text-white text-xs font-semibold px-3 py-2 rounded-md"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-md text-slate-700 hover:text-dts-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-dts-accent"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
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
                to="/contact?mode=quote"
                className="w-full flex items-center justify-center space-x-2 bg-dts-accent text-white font-semibold py-3 px-4 rounded-md shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col space-y-2 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-dts-accent" />
                  <a href={`tel:${COMPANY_INFO.contact.phones[0].link}`} className="hover:underline">
                    {COMPANY_INFO.contact.phones[0].display} / 9750939433
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

