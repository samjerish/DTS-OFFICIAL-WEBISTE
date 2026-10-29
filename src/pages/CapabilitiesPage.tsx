import React from 'react';
import { PageHero } from '../components/PageHero';
import { CtaSection } from '../components/CtaSection';
import { CAPABILITIES } from '../data/companyData';
import { 
  Wrench, 
  Layers, 
  Crosshair, 
  Cpu, 
  Boxes, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const CapabilitiesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Manufacturing Capabilities"
        subtitle="Comprehensive automotive tooling, precision press stamping, CNC milling, and product development services from our integrated Hosur facilities."
        badge="Engineering Services"
        breadcrumb={[{ label: 'Capabilities' }]}
      />

      {/* Navigation Sub-Bar / Quick Jumps */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-6 overflow-x-auto text-xs font-semibold text-slate-700 py-1">
            <span className="text-slate-400 uppercase tracking-wider hidden sm:inline">Jump to:</span>
            <a href="#press-tooling" className="px-3 py-1 rounded bg-white border border-slate-200 hover:text-dts-accent shrink-0">
              Press Tooling
            </a>
            <a href="#press-products" className="px-3 py-1 rounded bg-white border border-slate-200 hover:text-dts-accent shrink-0">
              Press Products & Stampings
            </a>
            <a href="#precision-manufacturing" className="px-3 py-1 rounded bg-white border border-slate-200 hover:text-dts-accent shrink-0">
              Precision CNC Machining & Fixtures
            </a>
            <a href="#development-support" className="px-3 py-1 rounded bg-white border border-slate-200 hover:text-dts-accent shrink-0">
              Sample Processing & Development
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ========================================================
            SECTION 1: PRESS TOOLING
            ======================================================== */}
        <section id="press-tooling" className="scroll-mt-36">
          <div className="border-b border-slate-200 pb-6 mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>Category 01</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
              Press Tool Design & Manufacturing
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Dynamic Tooling Systems has built an outstanding reputation in the automotive sector for in-house design, machining, fitting, and proving of robust press tools engineered for high-volume automotive production.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-dts-navy">
                End-to-End Tool Room Engineering
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Operating out of Unit I, our tool room engineers utilize precision 3D CAD modeling to engineer press tools optimized for automotive sheet metal components. Every tool undergoes detailed feasibility analysis, punch/die clearance allocation, and stripper mechanism design before precision machining on our CNC Vertical Machining Centers and Wire EDM cutters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <span className="font-bold text-dts-navy block">CAD Tool Design</span>
                  <span className="text-slate-600">3D blank layout, strip progression, and die structure engineering.</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <span className="font-bold text-dts-navy block">In-House Tryout & Proving</span>
                  <span className="text-slate-600">Full tryout on in-house mechanical and hydraulic presses before customer handover.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact?service=Press+Tool+Design+and+Manufacturing"
                  className="inline-flex items-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-xs font-semibold px-4 py-2.5 rounded shadow-sm transition-colors"
                >
                  <span>Discuss a Press Tool Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/images/facilities/tool-room-overview.jpg"
                  alt="DTS Tool Room Workshop"
                  className="w-full h-72 object-cover"
                />
                <div className="p-3 bg-slate-50 text-xs text-slate-600 border-t border-slate-200">
                  Unit I Tool Room — Assembly benches and die fitting operations
                </div>
              </div>
            </div>
          </div>

          {/* Featured Tool Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="h-44 bg-white rounded-lg border border-slate-200 p-3 mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/products/tool-cam-piercing.png"
                    alt="Cam-Piercing Tool"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="text-base font-bold text-dts-navy mb-1">
                  Cam-Piercing Tools
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized mechanical cam tooling designed to punch apertures, holes, and slots at angles differing from the primary vertical press ram stroke.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <Link
                  to="/products#cam-piercing-tool"
                  className="text-xs font-bold text-dts-accent hover:underline flex items-center space-x-1"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="h-44 bg-white rounded-lg border border-slate-200 p-3 mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/products/tool-forming.png"
                    alt="Forming Tool"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="text-base font-bold text-dts-navy mb-1">
                  Forming Tools
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy-duty press forming dies engineered to impart precise contours, bends, and ribs into sheet metal blanks without wrinkling or cracking.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <Link
                  to="/products#forming-tool"
                  className="text-xs font-bold text-dts-accent hover:underline flex items-center space-x-1"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="h-44 bg-white rounded-lg border border-slate-200 p-3 mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/products/tool-trimming.png"
                    alt="Trimming Tool"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="text-base font-bold text-dts-navy mb-1">
                  Trimming Tools
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precision cutting dies designed to trim excess peripheral material and separate scrap on drawn or formed press parts with clean shear edges.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <Link
                  to="/products#trimming-tool"
                  className="text-xs font-bold text-dts-accent hover:underline flex items-center space-x-1"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: PRESS PRODUCTS & SHEET METAL
            ======================================================== */}
        <section id="press-products" className="scroll-mt-36">
          <div className="border-b border-slate-200 pb-6 mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Category 02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
              Press Products, Sheet Metal & Sub-Assemblies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              High-volume stamping, deep drawing, and sub-assembly manufacturing powered by Unit II Press Shop, featuring power presses from 20T to 300T and hydraulic presses up to 350T.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/images/facilities/press-shop-production-floor.jpg"
                  alt="DTS Unit II Press Shop Floor"
                  className="w-full h-72 object-cover"
                />
                <div className="p-3 bg-slate-50 text-xs text-slate-600 border-t border-slate-200">
                  Unit II Press Shop — Continuous automotive stamping lines in Hosur
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <h3 className="text-xl font-bold text-dts-navy">
                High-Volume Automotive Pressings
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Unit II operates 19 mechanical power presses (20 Ton to 300 Ton from SEW, Milap, Wasino, Amada) and 3 hydraulic deep-drawing presses (up to 350 Ton from SPM). Supported by Haco hydraulic shearing and Kelvin projection welding, DTS manufactures structural brackets, chassis clamps, deep-drawn enclosures, and perforated exhaust baffles.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Sheet Metal Components:</strong> Brackets, stays, mounting arms, and chassis hardware.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Press Products:</strong> Deep-drawn casings, embossed heat shields (e.g. TVS Apache RTR), perforated baffles.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Sub-Assembly Components:</strong> Multi-part stamped assemblies with projection welding and tapping.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact?service=Press+Products+and+Sheet+Metal+Components"
                  className="inline-flex items-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-xs font-semibold px-4 py-2.5 rounded shadow-sm transition-colors"
                >
                  <span>Request Stamping Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: PRECISION MANUFACTURING (CNC, Jigs, Gauges)
            ======================================================== */}
        <section id="precision-manufacturing" className="scroll-mt-36">
          <div className="border-b border-slate-200 pb-6 mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Category 03</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
              Precision CNC Machining, Jigs, Fixtures & Gauges
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Tight-tolerance machining solutions supporting automotive production consistency, tooling maintenance, and shop-floor inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-dts-accent flex items-center justify-center font-bold mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-dts-navy mb-2">
                  CNC Milling Works
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-speed STM Vertical Machining Centers (capacities up to 1200 x 800 mm) performing 3-axis CNC contour milling on hardened steel die blocks, bolster plates, and automotive precision parts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-dts-accent">
                STM VMCs: 1200x800, 850x400, 600x400
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-dts-accent flex items-center justify-center font-bold mb-4">
                  <Crosshair className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-dts-navy mb-2">
                  Jigs & Fixtures
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Custom-engineered welding fixtures, assembly jigs, and machining work-holding devices engineered to ensure repeatable orientation, rapid clamping, and distortion prevention.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-dts-accent">
                Jig Boring (WMW 1100x730 mm)
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-dts-accent flex items-center justify-center font-bold mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-dts-navy mb-2">
                  Precision Gauges
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Receiver gauges, flush-pin checking fixtures, and contour go/no-go gauges manufactured for rapid on-line quality verification of stamped sheet metal parts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-dts-accent">
                Wire EDM & Micro Grinding
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: DEVELOPMENT SUPPORT
            ======================================================== */}
        <section id="development-support" className="scroll-mt-36">
          <div className="border-b border-slate-200 pb-6 mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Category 04</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
              Sample Processing & Product Development
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Supporting Indian automotive manufacturers and tier-1 programs from initial prototype stamping through tooling maturation and production sign-off.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-dts-navy">
                  Collaborative Development for Automotive Programs
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  As stated in our company profile, Dynamic Tooling Systems ranks among advanced developers of automotive accessories and components in India. We provide a full series of services including tool design, sample processing, pilot batch stamping, and product development for leading automotive brands.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Our engineering experts work closely with customer technical teams to analyze part geometries, optimize blank layout, minimize material utilization, and deliver proven samples prior to volume commitment.
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact?service=Sample+Processing+and+Product+Development"
                    className="inline-flex items-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover text-white text-xs font-semibold px-5 py-3 rounded shadow-sm transition-colors"
                  >
                    <span>Initiate Development Discussion</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <span className="font-bold text-sm text-dts-navy block">Prototype Tooling & Tryouts</span>
                  <span className="text-xs text-slate-600 mt-0.5 block">Rapid manufacturing of prototype dies to validate formability and vehicle fitment.</span>
                </div>

                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <span className="font-bold text-sm text-dts-navy block">Blank Optimization & DFM</span>
                  <span className="text-xs text-slate-600 mt-0.5 block">Collaborative design review to optimize strip nesting, reduce scrap, and lower part cost.</span>
                </div>

                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <span className="font-bold text-sm text-dts-navy block">Pre-Series Pilot Batches</span>
                  <span className="text-xs text-slate-600 mt-0.5 block">Controlled pilot press batches for assembly line trials and quality PPAP documentation.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <CtaSection />
    </div>
  );
};

