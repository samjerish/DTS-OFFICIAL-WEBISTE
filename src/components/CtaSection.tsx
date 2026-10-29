import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CtaSectionProps {
  customHeading?: string;
  customText?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  customHeading = "Have a Tooling or Manufacturing Requirement?",
  customText = "Discuss your tooling, press component, machining, or product development requirements with Dynamic Tooling Systems."
}) => {
  return (
    <section className="relative bg-dts-navy text-white py-16 sm:py-20 overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 industrial-grid-dark opacity-10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-dts-charcoal to-slate-900 border border-slate-700/80 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle accent glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-dts-accent uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 9001:2015 Certified • Hosur</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {customHeading}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                {customText}
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-2">
                <span>Tool Room & Press Shop in-house</span>
                <span>Technical review for new requirements</span>
                <span>Direct engineering contact</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <Link
                to="/contact?mode=quote"
                className="inline-flex items-center justify-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover text-white font-bold px-6 py-3.5 rounded-lg shadow-md transition-all text-sm group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.contact.phones[0].link}`}
                className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-lg border border-slate-600/80 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-dts-accent" />
                <span>Call Our Team (+91 {COMPANY_INFO.contact.phones[0].display})</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="inline-flex items-center justify-center space-x-2 text-xs text-slate-400 hover:text-white transition-colors pt-1"
              >
                <Mail className="w-3.5 h-3.5 text-dts-accent" />
                <span>{COMPANY_INFO.contact.email}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
