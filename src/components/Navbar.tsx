import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const location = useLocation();
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const navLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

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

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const nav = desktopNavRef.current;
      const activeLink = navLinkRefs.current[location.pathname === '/' ? '/' : navLinks.find((link) => location.pathname.startsWith(link.path) && link.path !== '/')?.path ?? ''];

      if (!nav || !activeLink) return;

      const navBounds = nav.getBoundingClientRect();
      const linkBounds = activeLink.getBoundingClientRect();
      setIndicator({
        left: linkBounds.left - navBounds.left,
        width: linkBounds.width,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
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
      <div className="hidden bg-dts-navy text-[11px] font-medium text-slate-300 lg:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span>Automotive tooling & precision manufacturing</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${COMPANY_INFO.contact.phones[0].link}`} className="transition-colors hover:text-white">
              {COMPANY_INFO.contact.phones[0].display}
            </a>
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="transition-colors hover:text-white">
              {COMPANY_INFO.contact.email}
            </a>
            <span className="text-slate-500">ISO 9001:2015</span>
          </div>
        </div>
      </div>
      <nav
        className={`border-b border-slate-200 bg-white/95 backdrop-blur transition-shadow duration-200 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-[4.75rem]">
            {/* DTS Brand Logo */}
            <Link to="/" className="group flex min-w-0 max-w-[calc(100%-7rem)] items-center gap-2.5 sm:gap-3">
              <img 
                src="images/branding/dts-globe-logo.png" 
                alt="Dynamic Tooling Systems Logo" 
                className="h-9 w-auto shrink-0 object-contain mix-blend-multiply transition-transform group-hover:scale-105 sm:h-10"
              />
              <div className="min-w-0 flex flex-col">
                <span className="truncate text-sm font-extrabold leading-none tracking-tight text-dts-navy sm:text-lg">
                  DYNAMIC TOOLING SYSTEMS
                </span>
                <span className="mt-1 hidden truncate text-[9px] font-semibold uppercase leading-none tracking-[0.14em] text-dts-steel sm:block">
                  The Quality People
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div ref={desktopNavRef} className="relative hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  ref={(element) => {
                    navLinkRefs.current[link.path] = element;
                  }}
                  className={`relative px-3 py-5 text-[13px] font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'font-bold text-dts-accent'
                      : 'text-slate-600 hover:text-dts-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 h-0.5 bg-dts-accent transition-[left,width] duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
              />
            </div>

            <div className="hidden items-center border-l border-slate-200 pl-5 lg:flex">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-dts-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-dts-accent-hover active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-1 lg:hidden">
              <Link
                to="/contact"
                className="inline-flex min-h-10 items-center rounded-md bg-dts-accent px-3 text-xs font-semibold text-white"
              >
                Contact
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 hover:text-dts-navy focus:outline-none focus:ring-2 focus:ring-dts-accent"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          id="mobile-navigation"
          aria-hidden={!isOpen}
          className={`overflow-hidden bg-white px-4 shadow-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
            isOpen
              ? 'max-h-[40rem] border-b border-slate-200 opacity-100'
              : 'pointer-events-none max-h-0 border-b-0 opacity-0'
          }`}
        >
          <div className={`space-y-2 overflow-hidden ${isOpen ? 'pb-6 pt-3' : 'py-0'}`}>
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
        </div>
      </nav>
    </header>
  );
};
