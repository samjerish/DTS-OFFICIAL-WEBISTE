import React, { useState, useMemo } from 'react';
import { PageHero } from '../components/PageHero';
import { CtaSection } from '../components/CtaSection';
import { PRODUCTS } from '../data/companyData';
import { Product } from '../types';
import { ArrowRight, Wrench, Layers, Boxes, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tooling' | 'press-products' | 'sub-assemblies'>('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Products & Tooling Solutions"
        subtitle="Explore precision press tool dies, automotive stamped components, deep-drawn enclosures, and sub-assemblies manufactured by Dynamic Tooling Systems."
        badge="Product Portfolio"
        breadcrumb={[{ label: 'Products' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Engineered For Automotive Applications</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-dts-navy">
              Custom Industrial Tooling & Stamped Automotive Components
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every item featured below is manufactured to custom customer drawings and technical specifications. DTS does not offer off-the-shelf retail items; we partner with automotive OEMs and tier-1 suppliers to design, tool, and mass-produce components.
            </p>
          </div>

          <Link
            to="/contact?mode=quote"
            className="inline-flex items-center justify-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg shadow-sm shrink-0 transition-colors"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-dts-navy text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-dts-navy'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('tooling')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'tooling'
                ? 'bg-dts-navy text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-dts-navy'
            }`}
          >
            Tooling Dies ({PRODUCTS.filter(p => p.category === 'tooling').length})
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('press-products')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'press-products'
                ? 'bg-dts-navy text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-dts-navy'
            }`}
          >
            Press Products & Stampings ({PRODUCTS.filter(p => p.category === 'press-products').length})
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('sub-assemblies')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'sub-assemblies'
                ? 'bg-dts-navy text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-dts-navy'
            }`}
          >
            Sub-Assemblies ({PRODUCTS.filter(p => p.category === 'sub-assemblies').length})
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              id={prod.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Product Image Stage */}
              <div className="relative h-60 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
                {prod.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-dts-navy text-white shadow-sm">
                    {prod.badge}
                  </span>
                )}
                {prod.isAuthenticDTSProduct && (
                  <span className="absolute bottom-2 left-3 text-[10px] text-slate-400 font-mono">
                    Authentic DTS Production
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-dts-accent uppercase tracking-wider block">
                    {prod.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-dts-navy mt-1 group-hover:text-dts-accent transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {prod.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Typical Applications */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 block mb-1">
                      Applications:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mt-3 pt-2">
                    <ul className="space-y-1 text-xs text-slate-600">
                      {prod.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pre-filled CTA Link to Contact Page */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/contact?product=${encodeURIComponent(prod.name)}`}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-dts-accent hover:text-white text-dts-navy font-semibold text-xs py-2.5 px-4 rounded-lg transition-colors group-hover:bg-dts-accent group-hover:text-white"
                  >
                    <span>Discuss This Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <CtaSection
        customHeading="Need a Custom Tooling or Stamping Solution?"
        customText="Send us your 2D/3D component drawings (STEP, IGES, DXF, PDF). Our engineering team in Hosur will provide a comprehensive technical and commercial review."
      />
    </div>
  );
};

