import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { COMPANY_INFO, CAPABILITIES } from '../data/companyData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dts-navy text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Core Information & Quick Access */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Company Profile & Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="images/branding/dts-globe-logo.png" 
                alt="Dynamic Tooling Systems Logo" 
                className="h-11 w-auto object-contain bg-white/5 p-1 rounded border border-white/10"
              />
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block leading-tight">
                  DYNAMIC TOOLING SYSTEMS
                </span>
                <span className="text-xs text-dts-accent font-semibold tracking-wider uppercase">
                  Precision Automotive Tooling
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              Established in 2004 in Hosur, Dynamic Tooling Systems delivers automotive press tools, sheet metal components, sub-assemblies, and precision CNC milling solutions backed by quality-driven engineering.
            </p>

            {/* ISO 9001:2015 Badge */}
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center space-x-3.5">
              <img 
                src="images/branding/iso-9001-certification.png" 
                alt="ISO 9001:2015 Registered" 
                className="h-11 w-auto object-contain bg-white p-1 rounded"
              />
              <div className="text-xs">
                <span className="font-bold text-white block">ISO 9001:2015 Certified</span>
                <span className="text-slate-400">Quality Management System (JAS-ANZ / IAF)</span>
              </div>
            </div>

            <div className="pt-1 flex items-center space-x-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Integrated Tool Room & Press Shop Facilities in Hosur</span>
            </div>

            <a
              href={`${import.meta.env.BASE_URL}documents/DTS_Company_Brochure.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-white hover:underline"
            >
              <FileText className="h-4 w-4" />
              <span>View Company Brochure</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-dts-accent" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-dts-accent" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-white hover:underline transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-dts-accent" />
                  <span>Capabilities</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white hover:underline transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-dts-accent" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-white hover:underline transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-dts-accent" />
                  <span>Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white hover:underline transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-dts-accent" />
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-dts-accent" />
                  <span>Contact & RFQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <Link 
                    to={cap.linkTo}
                    className="hover:text-white transition-colors block text-slate-300 hover:translate-x-1 duration-150"
                  >
                    {cap.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs text-slate-400">
                Specialized in Cam-Piercing Tools, Forming Tools & Trimming Dies
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              Factory & Offices
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dts-accent shrink-0 mt-0.5" />
                <p className="text-slate-300 text-xs leading-relaxed">
                  {COMPANY_INFO.contact.address.full}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-dts-accent shrink-0" />
                <div className="text-xs">
                  <a href={`tel:${COMPANY_INFO.contact.phones[0].link}`} className="hover:text-white block hover:underline">
                    +91 {COMPANY_INFO.contact.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.contact.phones[1].link}`} className="hover:text-white block hover:underline">
                    +91 {COMPANY_INFO.contact.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-dts-accent shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`} 
                  className="text-xs hover:text-white hover:underline truncate"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs text-slate-400">
                  Mon – Sat: 8:30 AM – 6:00 PM
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-dts-accent hover:text-blue-400"
              >
                <span>View Hosur Plant on Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Declarations */}
      <div className="border-t border-slate-800 bg-[#0A121D] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-3 md:space-y-0">
          <div>
            © {currentYear} Dynamic Tooling Systems. All Rights Reserved.
          </div>
          <div className="flex flex-col items-center gap-1 md:items-end">
            <div className="flex items-center space-x-6 text-slate-400">
              <span>Automotive Tooling & Precision Manufacturing</span>
              <span>•</span>
              <span>Hosur, Krishnagiri Dist., Tamil Nadu, India</span>
            </div>
            <span className="text-[11px] font-semibold tracking-wide text-slate-500">
              Built by D SAM JERISH
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
