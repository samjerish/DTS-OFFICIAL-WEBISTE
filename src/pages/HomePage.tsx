import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Wrench, 
  Layers, 
  Crosshair, 
  Cpu, 
  Boxes, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  Factory, 
  Phone, 
  Building2,
  Calendar,
  Award
} from 'lucide-react';
import { COMPANY_INFO, CAPABILITIES, PRODUCTS, FACILITY_UNITS } from '../data/companyData';
import { CustomerMarquee } from '../components/CustomerMarquee';
import { CtaSection } from '../components/CtaSection';

export const HomePage: React.FC = () => {
  const heroImages = [
    'images/facilities/press-shop-bay-crane.jpg',
    'images/facilities/press-shop-production-floor.jpg',
    'images/facilities/tool-room-vmc-cnc-line.jpg',
    'images/facilities/unit2-press-shop-exterior.jpg',
  ];
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  const toolingProducts = PRODUCTS.filter(p => p.category === 'tooling');

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[600px] lg:min-h-[640px] flex items-center bg-dts-navy text-white overflow-hidden">
        {/* Rotating manufacturing images */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45] contrast-105 transition-opacity duration-1000 ${
                index === heroImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-dts-navy via-dts-navy/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dts-navy via-transparent to-black/30" />
          <div className="absolute inset-0 industrial-grid-dark opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase mb-7">
              <span className="h-px w-10 bg-dts-accent" />
              <span>Dynamic Tooling Systems</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Precision Engineering. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                Reliable Manufacturing.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
              DTS makes automotive tooling, press products, precision components, and CNC-machined parts for production programs.
            </p>

            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-sm font-semibold px-5 py-3 rounded-md shadow-lg transition-all transform active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5 whitespace-nowrap">
                <Calendar className="w-4 h-4 text-dts-accent shrink-0" />
                <span>Established 2004</span>
              </div>

              <div className="flex items-center space-x-2.5 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-dts-accent shrink-0" />
                <span>ISO 9001:2015</span>
              </div>

              <div className="flex items-center space-x-2.5 whitespace-nowrap">
                <Factory className="w-4 h-4 text-dts-accent shrink-0" />
                <span>Two integrated units</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerMarquee />

      {/* ========================================================
          COMPANY INTRODUCTION (Two-Column Layout)
          ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Award className="w-3.5 h-3.5" />
                <span>Automotive Industry Foundation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-dts-navy tracking-tight leading-tight">
                Engineering Quality Since 2004
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Dynamic Tooling Systems was established in 2004 as a small-scale industry manufacturing sheet metal components. Through sustained dedication to technical precision and customer satisfaction, the company has grown in size and operation into a well-respected medium-scale manufacturing enterprise.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                DTS operates an integrated manufacturing plant in Hosur, Tamil Nadu, with teams for tooling design, machining, stamping, and inspection.
              </p>

              {/* Value Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-dts-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-dts-navy block">Automotive work</span>
                    <span className="text-xs text-slate-600">Tooling and stampings for two-wheelers, passenger cars, and commercial vehicles.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-dts-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-dts-navy block">Two units</span>
                    <span className="text-xs text-slate-600">Unit I Tool Room and Unit II Press Shop operate from the Hosur site.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-dts-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-dts-navy block">Engineering team</span>
                    <span className="text-xs text-slate-600">Designers, CNC machinists, toolmakers, and inspection staff.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-dts-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-dts-navy block">Planned production</span>
                    <span className="text-xs text-slate-600">Production planning for regular supply to automotive assembly lines.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-dts-accent hover:text-dts-accent-hover group"
                >
                  <span>Learn more about our company journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Column: Facility Photography */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="images/facilities/press-shop-production-floor.jpg"
                  alt="DTS Hosur Production Floor"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dts-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="text-xs font-semibold text-dts-accent uppercase tracking-wider block">
                    Manufacturing Operations
                  </span>
                  <h3 className="text-lg font-bold">Integrated Stamping & Tooling Plant</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Hosur, Tamil Nadu — Unit I Tool Room & Unit II Press Shop
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          CAPABILITIES OVERVIEW (6 Cards Grid)
          ======================================================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200 mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>Core Engineering Services</span>
              </div>
              <h2 className="text-3xl font-extrabold text-dts-navy tracking-tight">
                Our Manufacturing Capabilities
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                From initial tool design and prototype tryouts to high-tonnage stamping and CNC machining, DTS provides end-to-end tooling and component solutions.
              </p>
            </div>

            <Link
              to="/capabilities"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-sm font-bold text-dts-accent hover:text-dts-accent-hover"
            >
              <span>View detailed capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                {/* Capability Card Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-dts-navy/90 text-white p-2 rounded-lg backdrop-blur-sm">
                    {getIcon(cap.iconName)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-dts-navy group-hover:text-dts-accent transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={cap.linkTo}
                      className="text-xs font-bold text-dts-accent hover:text-dts-accent-hover flex items-center space-x-1"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to={`/contact?service=${encodeURIComponent(cap.title)}`}
                      className="text-[11px] font-semibold text-slate-500 hover:text-dts-navy"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          MANUFACTURING FACILITIES (Unit I, Unit II, Office)
          ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
              <Factory className="w-3.5 h-3.5" />
              <span>Integrated Infrastructure</span>
            </div>
            <h2 className="text-3xl font-extrabold text-dts-navy tracking-tight">
              Integrated Manufacturing Facilities
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our Hosur campus integrates specialized tool room engineering, high-tonnage mechanical & hydraulic stamping bays, and administrative CAD design offices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {FACILITY_UNITS.map((unit) => (
              <div
                key={unit.id}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-all flex flex-col"
              >
                <div className="relative h-56 bg-slate-200 overflow-hidden">
                  <img
                    src={unit.exteriorImage}
                    alt={unit.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-dts-navy text-white text-xs font-extrabold px-2.5 py-1 rounded">
                    {unit.unitNumber}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-dts-navy">
                      {unit.name}
                    </h3>
                    <p className="text-xs text-dts-accent font-semibold mt-0.5">
                      {unit.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {unit.overview}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200">
                      <span className="text-xs font-bold text-slate-700 block mb-2">Key Equipment & Operations:</span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {unit.keyHighlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start space-x-1.5">
                            <span className="text-dts-accent font-bold">•</span>
                            <span className="truncate">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <Link
                      to={`/infrastructure#${unit.id}`}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-dts-accent hover:text-dts-accent-hover"
                    >
                      <span>Inspect Facility & Machinery</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          TOOLING PRODUCTS SHOWCASE (Cam-Piercing, Forming, Trimming)
          ======================================================== */}
      <section className="py-20 bg-dts-navy text-white subtle-blueprint-bg border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-300 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>Tool Room Products</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Precision Tooling Solutions
              </h2>
              <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
                Featured press tool dies designed, machined, assembled, and validated in our Hosur tool room facility.
              </p>
            </div>

            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-sm font-bold text-blue-400 hover:text-blue-300"
            >
              <span>View all tooling & press products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolingProducts.map((tool) => (
              <div
                key={tool.id}
                className="bg-slate-900/90 rounded-xl border border-slate-700/80 overflow-hidden shadow-xl flex flex-col group"
              >
                {/* Product Photo */}
                <div className="relative h-56 bg-slate-800 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white">
                    {tool.badge}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-medium">
                      {tool.tagline}
                    </p>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Key Engineering Attributes:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {tool.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-center space-x-1.5">
                            <span className="text-blue-400 font-bold">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <Link
                      to={`/contact?product=${encodeURIComponent(tool.name)}`}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-xs font-semibold py-2.5 px-4 rounded transition-colors"
                    >
                      <span>Discuss This Tooling Die</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          QUALITY & CERTIFICATION SECTION
          ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Quality Systems & Process Controls</span>
                </div>

                <h2 className="text-3xl font-extrabold text-dts-navy tracking-tight">
                  Quality at Every Stage
                </h2>

                <p className="text-base text-slate-700 leading-relaxed">
                  Dynamic Tooling Systems maintains a strict, quality-focused manufacturing culture across every phase of production. From raw material inspection to precision CNC milling, tool assembly tryouts, and high-speed stamping inspection, our team enforces dimensional accuracy, repeatable tolerances, and reliable deliveries.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-sm text-dts-navy block">Qualified Engineers</span>
                    <span className="text-xs text-slate-600 mt-1 block">Dedicated specialists in CAD die design, CNC machining, and quality inspection.</span>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-sm text-dts-navy block">ISO 9001:2015</span>
                    <span className="text-xs text-slate-600 mt-1 block">Certified quality management system accredited under JAS-ANZ and IAF.</span>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-sm text-dts-navy block">On-Time Delivery</span>
                    <span className="text-xs text-slate-600 mt-1 block">Consistently high-standard deliveries meeting tier-1 automotive production schedules.</span>
                  </div>
                </div>
              </div>

              {/* Certificate Badge Display */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm text-center">
                <img
                  src="images/branding/iso-9001-certification.png"
                  alt="ISO 9001:2015 Registered - JAS-ANZ / IAF"
                  className="h-28 w-auto object-contain mb-4"
                />
                <span className="font-extrabold text-sm text-dts-navy">ISO 9001:2015 Registered</span>
                <span className="text-xs text-slate-500 mt-1">
                  Quality Management System
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  Member of Multilateral Recognition Arrangement
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FINAL CALL TO ACTION
          ======================================================== */}
      <CtaSection />

    </div>
  );
};
