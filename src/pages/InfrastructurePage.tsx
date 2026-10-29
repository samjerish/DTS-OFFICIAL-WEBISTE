import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { CtaSection } from '../components/CtaSection';
import { FACILITY_UNITS } from '../data/companyData';
import { MachineryTable } from '../components/MachineryTable';
import { LightboxModal, LightboxImage } from '../components/LightboxModal';
import { 
  Factory, 
  Wrench, 
  Cpu, 
  Layers, 
  Maximize2, 
  ShieldCheck, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export const InfrastructurePage: React.FC = () => {
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Compile all facility images for the lightbox
  const facilityLightboxImages: LightboxImage[] = [
    {
      src: "images/facilities/unit1-tool-room-exterior.png",
      title: "Unit I Tool Room Plant Exterior",
      caption: "External plant view of Dynamic Tooling Systems Unit I in Hosur.",
      category: "Unit I (Tool Room)"
    },
    {
      src: "images/facilities/tool-room-overview.jpg",
      title: "Tool Room Workshop Interior",
      caption: "Toolmakers and assembly benches for automotive stamping dies.",
      category: "Unit I (Tool Room)"
    },
    {
      src: "images/facilities/tool-room-vmc-cnc-line.jpg",
      title: "STM Vertical Machining Center Line",
      caption: "CNC milling centers cutting precision die plates and tool steel blocks.",
      category: "Unit I (Tool Room)"
    },
    {
      src: "images/facilities/tool-room-stm-vl850-machining-center.jpg",
      title: "STM VL850 VMC Machine",
      caption: "High-precision vertical machining center for automotive die contours.",
      category: "Unit I (Tool Room)"
    },
    {
      src: "images/facilities/tool-room-wire-edm-drilling.jpg",
      title: "Ruijun Wire EDM & Spark Drilling Station",
      caption: "Precision CNC wire EDM cutting machine for hardened punches and die inserts.",
      category: "Unit I (Tool Room)"
    },
    {
      src: "images/facilities/unit2-press-shop-exterior.jpg",
      title: "Unit II Press Shop Facility Exterior",
      caption: "External view of Unit II heavy press shop and logistics loading bay.",
      category: "Unit II (Press Shop)"
    },
    {
      src: "images/facilities/press-shop-bay-crane.jpg",
      title: "Press Shop High Bay with Overhead Crane",
      caption: "Overview of press shop lines and overhead heavy-duty crane rail.",
      category: "Unit II (Press Shop)"
    },
    {
      src: "images/facilities/press-shop-production-floor.jpg",
      title: "Automotive Stamping Production Lines",
      caption: "Active continuous stamping lines for automotive sheet metal parts.",
      category: "Unit II (Press Shop)"
    },
    {
      src: "images/facilities/press-shop-40t-power-press-line.jpg",
      title: "40T Milap Power Press Line (DTS/PP-12)",
      caption: "Power press stations equipped with operator safety features.",
      category: "Unit II (Press Shop)"
    },
    {
      src: "images/facilities/press-shop-shearing-machine.jpg",
      title: "Haco Hydraulic Shearing Machine (DTS/SM-01)",
      caption: "Heavy hydraulic shearing machine with 0.5 to 10mm cutting capacity.",
      category: "Unit II (Press Shop)"
    },
    {
      src: "images/facilities/office-administration.jpg",
      title: "Engineering & Administration Office",
      caption: "CAD tooling design engineers and administrative staff in Hosur.",
      category: "Office"
    }
  ];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Manufacturing Infrastructure"
        subtitle="Fully integrated industrial facilities in Hosur, Tamil Nadu. Encompassing Unit I Tool Room, Unit II Press Shop, and administrative engineering offices."
        badge="Plant & Machinery"
        breadcrumb={[{ label: 'Infrastructure' }]}
      />

      <div className="w-full min-w-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* ========================================================
            OVERVIEW SECTION
            ======================================================== */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200 mb-3">
              <Factory className="w-3.5 h-3.5" />
              <span>Integrated Hosur Campus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
              Two Specialized Manufacturing Units Under One Roof
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              To meet the current volume and quality standards demanded by Indian automotive manufacturers, Dynamic Tooling Systems operates completely integrated manufacturing facilities in Hosur. Having our tool room and stamping plant in direct proximity allows our engineering team to solve stamping challenges, prove dies, and conduct rapid maintenance without production delays.
            </p>
          </div>
        </section>

        {/* ========================================================
            UNIT I: TOOL ROOM
            ======================================================== */}
        <section id="unit-1-tool-room" className="scroll-mt-32">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-2.5 py-1 rounded bg-dts-navy text-white text-xs font-extrabold uppercase tracking-wider">
                Unit I
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
                Tool Room Facility
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Precision Tool Design, Machining, Die Fitting, Wire EDM & Tool Proving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Unit I is equipped with specialized precision machinery designed to build durable automotive press tooling. From large bolster plates to micro-clearance punches, Unit I utilizes high-speed STM Vertical Machining Centers, Ruijun CNC Wire EDM cutting systems, WMW Jig Boring machines, and extensive surface grinders.
              </p>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-700 block">
                  Verified Tool Room Highlights:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>STM VMC (1200 x 800 mm)</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>STM VL850 VMC (850 x 400 mm)</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>Ruijun Wire EDM (SR400S & SR600S)</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>Reijun EDM Super Drill (MS-DZ430I)</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>WMW Jig Boring (1100 x 730 mm)</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>Surface Grinding up to 1500 x 500 mm</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Facility Exterior Photo */}
            <div className="lg:col-span-5">
              <div 
                className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md group cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <img
                  src="images/facilities/unit1-tool-room-exterior.png"
                  alt="Unit I Tool Room Exterior"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-dts-navy/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-3 text-white text-xs">
                  Unit I Plant Exterior — Tool Room Facility
                </div>
              </div>
            </div>
          </div>

          {/* Tool Room Interior Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(1)}
            >
              <img
                src="images/facilities/tool-room-overview.jpg"
                alt="Tool Room Fitting Benches"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">Fitting & Assembly Bay</span>
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(2)}
            >
              <img
                src="images/facilities/tool-room-vmc-cnc-line.jpg"
                alt="STM VMC Machining Center Line"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">STM VMC Machining Center</span>
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(3)}
            >
              <img
                src="images/facilities/tool-room-stm-vl850-machining-center.jpg"
                alt="STM VL850 Vertical Machining Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">STM VL850 VMC Center</span>
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(4)}
            >
              <img
                src="images/facilities/tool-room-wire-edm-drilling.jpg"
                alt="Ruijun Wire EDM and Spark Erosion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">Ruijun Wire EDM Bay</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            UNIT II: PRESS SHOP
            ======================================================== */}
        <section id="unit-2-press-shop" className="scroll-mt-32">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-2.5 py-1 rounded bg-dts-navy text-white text-xs font-extrabold uppercase tracking-wider">
                Unit II
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
                Press Shop Facility
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              High-Volume Mechanical & Hydraulic Stamping, Shearing, Projection Welding & Assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Unit II provides high-throughput sheet metal stamping for Indian automotive manufacturers. Housing 19 mechanical power presses (from 20T to 300T) and 3 hydraulic deep-drawing presses (up to 350T), Unit II is designed for continuous, high-volume production with yellow overhead cranes for rapid die changes and material handling.
              </p>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-700 block">
                  Verified Press Shop Highlights:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>300T SEW Power Press</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>350T SPM Hydraulic Press</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>250T & 200T SEW Power Presses</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>Haco Hydraulic Shearing (0.5 - 10mm)</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>Kelvin 12KVA Projection Welding</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dts-accent shrink-0" />
                    <span>Kirloskar 160 KVA Standby Generator</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Facility Exterior Photo */}
            <div className="lg:col-span-5">
              <div 
                className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md group cursor-pointer"
                onClick={() => openLightbox(5)}
              >
                <img
                  src="images/facilities/unit2-press-shop-exterior.jpg"
                  alt="Unit II Press Shop Exterior"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-dts-navy/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-3 text-white text-xs">
                  Unit II Plant Exterior — Press Shop & Loading Bay
                </div>
              </div>
            </div>
          </div>

          {/* Press Shop Interior Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(6)}
            >
              <img
                src="images/facilities/press-shop-bay-crane.jpg"
                alt="Press Shop Bay with Overhead Crane"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">Press Bay & Crane Rail</span>
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(7)}
            >
              <img
                src="images/facilities/press-shop-production-floor.jpg"
                alt="Active Stamping Lines"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">Stamping Production Floor</span>
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(8)}
            >
              <img
                src="images/facilities/press-shop-40t-power-press-line.jpg"
                alt="40T Milap Power Press Line"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">40T Power Press Line</span>
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
              onClick={() => openLightbox(9)}
            >
              <img
                src="images/facilities/press-shop-shearing-machine.jpg"
                alt="Haco Shearing Machine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-semibold">Haco Shearing Machine</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            OFFICE & ENGINEERING
            ======================================================== */}
        <section id="office-engineering" className="scroll-mt-32">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-2.5 py-1 rounded bg-dts-navy text-white text-xs font-extrabold uppercase tracking-wider">
                Office
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
                Engineering Design & Administration
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              CAD/CAM Tooling Engineering, Production Scheduling & Quality Documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Adjacent to the manufacturing floors, our administrative office coordinates tool engineering, CNC programming, quality certification tracking, customer communication, and material procurement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-dts-navy block">CAD/CAM Design Workstations</span>
                  <span className="text-slate-600">3D die solid modeling, blank development, and CAM NC toolpath generation.</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-dts-navy block">Quality Documentation Desk</span>
                  <span className="text-xs text-slate-600">ISO 9001:2015 traceability records, inspection reports, and calibration certificates.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div 
                className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md group cursor-pointer"
                onClick={() => openLightbox(10)}
              >
                <img
                  src="images/facilities/office-administration.jpg"
                  alt="DTS Engineering Office"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-dts-navy/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-3 text-white text-xs">
                  Administration & Engineering Office Workstations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            COMPLETE VERIFIED MACHINERY SPECIFICATION TABLE
            ======================================================== */}
        <section className="pt-8">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Plant Equipment List</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dts-navy tracking-tight">
              Machinery Specifications & Working Capacities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Complete equipment inventory directly verified from DTS company profile specifications, covering both Tool Room and Press Shop facilities.
            </p>
          </div>

          <MachineryTable />
        </section>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={facilityLightboxImages}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />

      <CtaSection />
    </div>
  );
};
