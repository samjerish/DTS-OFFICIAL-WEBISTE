import React, { useState, useMemo } from 'react';
import { PageHero } from '../components/PageHero';
import { CtaSection } from '../components/CtaSection';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';
import { LightboxModal, LightboxImage } from '../components/LightboxModal';
import { Maximize2, Camera, ShieldCheck } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tool-room' | 'press-shop' | 'products' | 'facilities'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'tool-room', label: 'Tool Room' },
    { id: 'press-shop', label: 'Press Shop' },
    { id: 'products', label: 'Products & Tooling' },
    { id: 'facilities', label: 'Facilities' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const lightboxImages: LightboxImage[] = useMemo(() => {
    return filteredItems.map((item) => ({
      src: item.image,
      title: item.title,
      caption: item.caption,
      category: item.facilityUnit || item.category
    }));
  }, [filteredItems]);

  const handleImageClick = (index: number) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Industrial Image Gallery"
        subtitle="Genuine visual documentation of Dynamic Tooling Systems manufacturing plant, machining centers, power presses, and automotive tooling products."
        badge="Plant Tour & Media"
        breadcrumb={[{ label: 'Gallery' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Transparency / Source Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mb-10 flex items-center space-x-3 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>Authentic Plant Photography:</strong> All images shown in this gallery are genuine company photographs from Dynamic Tooling Systems facilities in Hosur, Tamil Nadu.
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-dts-navy text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-dts-navy'
              }`}
            >
              {cat.label} ({
                cat.id === 'all'
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter(i => i.category === cat.id).length
              })
            </button>
          ))}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(index)}
              className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-64 bg-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-dts-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {item.facilityUnit && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-dts-navy/90 text-white backdrop-blur-sm">
                    {item.facilityUnit}
                  </span>
                )}
              </div>

              {/* Text Caption */}
              <div className="p-4 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-dts-navy group-hover:text-dts-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={lightboxImages}
        currentIndex={currentLightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setCurrentLightboxIndex(idx)}
      />

      <CtaSection />
    </div>
  );
};

