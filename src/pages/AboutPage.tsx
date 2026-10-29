import React from 'react';
import { PageHero } from '../components/PageHero';
import { CtaSection } from '../components/CtaSection';
import { COMPANY_INFO, FACILITY_UNITS } from '../data/companyData';
import { 
  ShieldCheck, 
  Target, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  Users, 
  Factory, 
  Sparkles,
  Compass,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="About Dynamic Tooling Systems"
        subtitle="Established in Hosur in 2004, DTS makes automotive press tools, sheet metal components, and machined parts."
        badge="Company Overview"
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* Main Editorial Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Factory className="w-3.5 h-3.5" />
                <span>Company history</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-dts-navy tracking-tight leading-tight">
                From sheet metal parts to integrated tooling
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                <strong className="text-dts-navy font-semibold">Dynamic Tooling Systems</strong> was established in Hosur in 2004 to manufacture sheet metal components. The company has since expanded its tooling, machining, stamping, and inspection operations.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Today, Dynamic Tooling Systems operates a completely integrated manufacturing plant in Hosur, encompassing an advanced <strong className="text-dts-navy font-semibold">Tool Room (Unit I)</strong>, a high-capacity <strong className="text-dts-navy font-semibold">Press Shop (Unit II)</strong>, and administrative engineering offices.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                The company specializes in the design, development, and supply of automotive press tools (including Cam-Piercing Tools, Forming Tools, and Trimming Tools), press products, sheet metal components, sub-assemblies, jigs, fixtures, gauges, and CNC milling solutions for diverse automobile applications.
              </p>

              {/* Core Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center space-x-2 text-dts-navy font-bold text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-dts-accent" />
                    <span>Automotive Specialization</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Proven track record supplying two-wheeler OEMs, electric vehicle manufacturers, and tier-1 automotive suppliers across India.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center space-x-2 text-dts-navy font-bold text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-dts-accent" />
                    <span>Integrated Hosur Plant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Full in-house control over CAD design, CNC milling, wire EDM cutting, die assembly, and continuous stamping production.
                  </p>
                </div>
              </div>

            </div>

            {/* Visual Photography Column */}
            <div className="lg:col-span-5 space-y-5">
              {/* Unit I */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <img
                  src="images/facilities/unit1-tool-room-exterior.png"
                  alt="Dynamic Tooling Systems Unit I Hosur Facility"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dts-navy/90 via-dts-navy/40 to-transparent p-4 text-white text-xs">
                  <span className="font-bold text-sm block">Unit I — Tool Room Facility</span>
                  <p className="text-slate-300 text-xs mt-0.5">Hosur, Tamil Nadu — Tool Design, VMC & Wire EDM</p>
                </div>
              </div>

              {/* Unit II */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <img
                  src="images/facilities/unit2-press-shop-exterior.jpg"
                  alt="Dynamic Tooling Systems Unit II Press Shop Facility"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dts-navy/90 via-dts-navy/40 to-transparent p-4 text-white text-xs">
                  <span className="font-bold text-sm block">Unit II — Press Shop Facility</span>
                  <p className="text-slate-300 text-xs mt-0.5">Heavy Press Lines & Automotive Stamping (Up to 350T)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Team & Technical Capabilities */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200 mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Engineering team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
              Engineering and inspection
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our growth is driven by dedicated technical personnel and experienced toolmakers with deep familiarity in automotive dimensional standards and die kinematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-dts-accent flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-dts-navy mb-2">
                  Tooling Design & CAD Modeling
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Skilled design engineers conceptualize single-stage and progressive press tools, analyzing blank development, forming stages, stripping forces, and scrap chute ejection.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-dts-accent font-semibold">
                In-house CAD/CAM workstations
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-dts-accent flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-dts-navy mb-2">
                  Precision Machining & Fitting
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Expert CNC machinists and toolmakers operate high-speed STM Vertical Machining Centers, Ruijun Wire EDM cutters, and precision surface grinding machines for micro-tolerance die cavities.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-dts-accent font-semibold">
                VMC, Wire EDM, Lathes & Surface Grinders
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-dts-accent flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-dts-navy mb-2">
                  Inspection & Quality Assurance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rigorous dimensional inspection across die proving, first-piece sample inspection, and batch stamping checks adhering to ISO 9001:2015 quality standards.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-dts-accent font-semibold">
                ISO 9001:2015 Registered
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Enterprise Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-dts-navy via-dts-charcoal to-dts-navy text-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 industrial-grid-dark opacity-10 pointer-events-none" />

            <div className="max-w-5xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-300 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>Mission & Vision</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Our Mission
                  </h2>
                  <p className="mt-4 text-base text-slate-300 leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Our Vision
                  </h2>
                  <p className="mt-4 text-base text-slate-300 leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
                    <Users className="w-4 h-4" />
                    <span>People Oriented</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Valuing our skilled technicians, toolmakers, and engineers as the core foundation of engineering quality.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Sincere Faith</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Building trustworthy, transparent, and long-lasting partnerships with automotive OEMs and tier-1 customers.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Quality Win</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Built around controlled processes, dimensional checks, and planned deliveries.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ISO 9001:2015 Detailed Quality Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Certified Standard</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
                ISO 9001:2015 Certified Quality Management
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Dynamic Tooling Systems operates under a certified ISO 9001:2015 Quality Management System registered under BSA, with JAS-ANZ accreditation and recognized under the International Accreditation Forum (IAF) Multilateral Recognition Arrangement.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This certification confirms that our management systems, tool room machining procedures, die inspection processes, and stamping quality control comply with internationally recognized quality benchmarks.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <img
                src="images/branding/iso-9001-certification.png"
                alt="ISO 9001:2015 JAS-ANZ IAF Certificate Badge"
                className="h-28 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Facility Quick Link CTA */}
      <CtaSection
        customHeading="Ready to Discuss an Automotive Tooling or Stamping Program?"
        customText="Connect directly with our engineering and procurement team in Hosur to review your technical drawings and project requirements."
      />
    </div>
  );
};
