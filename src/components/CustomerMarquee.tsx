import React from 'react';
import { VERIFIED_CUSTOMERS } from '../data/companyData';
import { ShieldCheck } from 'lucide-react';

export const CustomerMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Customers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
            Built for Automotive Manufacturing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dts-steel leading-relaxed">
            We supply press tools, stamped components, sub-assemblies, and machining work to automotive manufacturers and tier-1 suppliers across India.
          </p>
        </div>

        {/* Verified Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {VERIFIED_CUSTOMERS.map((cust) => (
            <div
              key={cust.id}
              className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm flex flex-col items-center justify-center hover:border-dts-accent/50 hover:shadow transition-all group"
            >
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src={cust.logo}
                  alt={`${cust.name} Logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="mt-3 text-center border-t border-slate-100 pt-2 w-full">
                <span className="text-xs font-semibold text-slate-800 block truncate" title={cust.name}>
                  {cust.name}
                </span>
                <span className="text-[10px] text-slate-500 block truncate" title={cust.sector}>
                  {cust.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Customers shown are listed in the DTS company profile.
        </div>

      </div>
    </section>
  );
};
