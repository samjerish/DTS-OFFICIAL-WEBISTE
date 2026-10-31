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

        {/* Verified Logos Track */}
        <div className="customer-marquee -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8" aria-label="Our customers">
          <div className="customer-marquee__track flex w-max items-stretch">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                aria-hidden={copyIndex === 1}
                className="customer-marquee__group flex shrink-0 items-stretch gap-4 pr-4 sm:gap-6 sm:pr-6"
              >
                {VERIFIED_CUSTOMERS.map((cust) => (
                  <div
                    key={cust.id}
                    className="w-56 shrink-0 border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:border-dts-accent/50 hover:shadow"
                  >
                    <div className="flex h-16 w-full items-center justify-center p-2">
                      <img
                        src={cust.logo}
                        alt={`${cust.name} Logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="mt-3 w-full border-t border-slate-100 pt-2 text-center">
                      <span className="block truncate text-xs font-semibold text-slate-800" title={cust.name}>
                        {cust.name}
                      </span>
                      <span className="block truncate text-[10px] text-slate-500" title={cust.sector}>
                        {cust.sector}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
