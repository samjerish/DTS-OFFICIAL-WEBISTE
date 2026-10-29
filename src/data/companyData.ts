import { Product, Capability, FacilityUnit, MachineryItem, CustomerLogo, GalleryItem } from '../types';

export const COMPANY_INFO = {
  name: "Dynamic Tooling Systems",
  shortName: "DTS",
  legalName: "Dynamic Tooling Systems (DTS)",
  establishedYear: 2004,
  industry: "Automotive tooling, press components, precision manufacturing, and CNC machining",
  tagline: "Precision Engineering. Reliable Manufacturing.",
  subtitle: "Supplying automotive press tools, press products, precision sub-assemblies, and CNC machining solutions with uncompromised quality and dependable delivery.",
  certifications: [
    {
      title: "ISO 9001:2015 Certified",
      standard: "ISO 9001:2015",
      body: "JAS-ANZ & IAF Registered Quality Management System",
      badgeImage: "images/branding/iso-9001-certification.png"
    }
  ],
  contact: {
    address: {
      line1: "S.No: 14/2, Plot No. 2-4, DTS Complex, Anumepalli",
      line2: "Near Rajeswari Layout, Zuzuvadi",
      city: "Hosur",
      postalCode: "635 126",
      district: "Krishnagiri District",
      state: "Tamil Nadu",
      country: "India",
      full: "S.No: 14/2, Plot No. 2-4, DTS Complex, Anumepalli, Near Rajeswari Layout, Zuzuvadi, Hosur – 635 126, Krishnagiri District, Tamil Nadu, India."
    },
    phones: [
      { display: "9750939432", link: "+919750939432" },
      { display: "9750939433", link: "+919750939433" }
    ],
    email: "dynamic_tooling@yahoo.co.in",
    workingHours: "Monday – Saturday: 8:30 AM – 6:00 PM (IST)",
    mapUrl: "https://maps.google.com/?q=Zuzuvadi,+Hosur,+Tamil+Nadu+635126"
  },
  mission: "Looking forward to the future, the company operates in line with the 'people-oriented', 'sincere faith', and 'quality win' spirit of enterprise, striving towards excellence in the automotive manufacturing sector by providing customers with unremitting dedication to high-quality products, robust engineering support, and dependable deliveries."
};

export const CAPABILITIES: Capability[] = [
  {
    id: "press-tool-design-manufacturing",
    title: "Press Tool Design & Manufacturing",
    category: "press-tooling",
    shortDesc: "Complete tooling development from tool design and CAD modeling to precision machining and progressive die tryouts.",
    fullDesc: "Dynamic Tooling Systems specializes in complete turnkey development of high-performance press tools for automotive OEM and tier-1 applications. Our tool room team designs, manufactures, and proves single-stage, multi-stage, and progressive press tools including Cam-Piercing Tools, Forming Tools, and Trimming Tools built to exact automotive dimensional standards.",
    iconName: "Wrench",
    image: "images/products/tool-cam-piercing.png",
    keyHighlights: [
      "In-house tool design & CAD modeling",
      "Specialized in Cam-Piercing, Forming, and Trimming tools",
      "Precision tool room machining & fitting",
      "Rigorous tryout & dimensional validation"
    ],
    linkTo: "/capabilities#press-tooling"
  },
  {
    id: "press-products-sheet-metal",
    title: "Press Products & Sheet Metal Components",
    category: "press-products",
    shortDesc: "High-volume stamping, deep drawing, blanking, piercing, and precision forming of automotive sheet metal parts.",
    fullDesc: "Equipped with power presses ranging from 20 Ton to 300 Ton and hydraulic presses up to 350 Ton, DTS supplies precision automotive press products and sheet metal stampings. From structural brackets and chassis clamps to deep-drawn components and perforated heat shields, we handle diverse materials and volume requirements with tight process controls.",
    iconName: "Layers",
    image: "images/facilities/press-shop-production-floor.jpg",
    keyHighlights: [
      "Press capacities from 20T to 300T Power Presses",
      "Heavy hydraulic deep drawing up to 350 Ton capacity",
      "Hydraulic shearing up to 10mm plate thickness",
      "High-speed repetitive stamping for two-wheelers and automotive OEMs"
    ],
    linkTo: "/capabilities#press-products"
  },
  {
    id: "jigs-fixtures-gauges",
    title: "Jigs, Fixtures & Gauges",
    category: "precision-machining",
    shortDesc: "Custom-engineered welding jigs, machining fixtures, checking gauges, and inspection tooling for automotive consistency.",
    fullDesc: "Precision alignment and repeatable tolerance control are essential in automotive assembly. DTS designs and manufactures robust jigs, machining fixtures, welding fixtures, and receiver gauges ensuring consistent part positioning, minimal cycle times, and foolproof quality checks on the shop floor.",
    iconName: "Crosshair",
    image: "images/facilities/tool-room-overview.jpg",
    keyHighlights: [
      "Custom welding & assembly fixtures",
      "High-precision inspection & receiver gauges",
      "Jig boring with WMW high-accuracy machines",
      "Rigid construction for heavy shop floor duty cycles"
    ],
    linkTo: "/capabilities#precision-manufacturing"
  },
  {
    id: "cnc-milling-works",
    title: "CNC Milling Works",
    category: "precision-machining",
    shortDesc: "High-precision vertical machining centers (VMC) and CNC wire EDM for complex die cavities, plates, and tool steel blocks.",
    fullDesc: "Our tool room is outfitted with high-speed STM Vertical Machining Centers (capacities up to 1200 x 800 mm) alongside precision Ruijun CNC Wire EDM cutting machines and EDM Super Drill systems. This enables micro-tolerance milling of hardened tool steels, intricate die cavities, precision punches, and complex contour geometries.",
    iconName: "Cpu",
    image: "images/facilities/tool-room-vmc-cnc-line.jpg",
    keyHighlights: [
      "STM Vertical Machining Centers (1200x800mm, 850x400mm, 600x400mm)",
      "Ruijun CNC EDM Wire Cutting (SR400S & SR600S)",
      "High-accuracy EDM Super Drilling for start holes and deep holes",
      "Surface grinding up to 1500 x 500 mm"
    ],
    linkTo: "/capabilities#precision-manufacturing"
  },
  {
    id: "sub-assembly-components",
    title: "Sub-Assembly Components",
    category: "press-products",
    shortDesc: "Value-added mechanical sub-assemblies integrating stamped press parts, projection welding, fasteners, and hardware.",
    fullDesc: "DTS delivers value beyond single stamped parts by supplying integrated automotive sub-assemblies. Leveraging in-house projection welding machines (Kelvin 12KVA), tapping, riveting, and mechanical hardware assembly, we deliver ready-to-fit modules directly to automotive OEM assembly lines.",
    iconName: "Boxes",
    image: "images/products/press-product-structural-mount.png",
    keyHighlights: [
      "Integrated projection welding (Kelvin 12KVA)",
      "Multi-part stamped sub-assemblies",
      "In-house tapping and fastening operations",
      "Direct line-side supply capability"
    ],
    linkTo: "/capabilities#press-products"
  },
  {
    id: "sample-processing-development",
    title: "Sample Processing & Product Development",
    category: "development",
    shortDesc: "Engineering prototyping, sample stamping, rapid pilot batches, and collaborative design refinement for new programs.",
    fullDesc: "Dynamic Tooling Systems actively supports customer R&D and new vehicle launches with rapid prototype tooling and sample processing. Our experienced engineering team analyzes component manufacturability, optimizes blank development, and produces pilot runs to prove tooling prior to full-scale mass production.",
    iconName: "Compass",
    image: "images/facilities/office-administration.jpg",
    keyHighlights: [
      "Rapid prototype sample stamping and tool tryouts",
      "Collaborative DFM (Design for Manufacturability) support",
      "Blank development and forming simulation review",
      "Support for EV, two-wheeler, and commercial vehicle platforms"
    ],
    linkTo: "/capabilities#development-support"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "cam-piercing-tool",
    name: "Cam-Piercing Tool",
    category: "tooling",
    categoryLabel: "Tooling Solution",
    tagline: "High-precision mechanical cam tooling for angled piercing operations.",
    description: "Engineered for piercing holes and slots in sheet metal components at angles different from the primary press stroke. Incorporates precision slider mechanics, hardened guide surfaces, and resilient return springs for continuous automotive production.",
    image: "images/products/tool-cam-piercing.png",
    badge: "Tooling Die",
    applications: ["Automotive body panels", "Angled bracket holes", "Deep-drawn shell piercings"],
    features: ["Precision cam slide mechanics", "Hardened tool steel wear plates", "High repetitive cycle endurance", "In-house tryout certified"],
    isAuthenticDTSProduct: true
  },
  {
    id: "forming-tool",
    name: "Forming Tool",
    category: "tooling",
    categoryLabel: "Tooling Solution",
    tagline: "Heavy-duty press forming die for contouring and flange development.",
    description: "Designed for precise contour forming, bending, and draw-embossing of automotive sheet metal components. Engineered with CNC-machined die profiles to deliver exact radius specifications without wrinkling or springback deviation.",
    image: "images/products/tool-forming.png",
    badge: "Tooling Die",
    applications: ["Structural vehicle brackets", "Automotive guards & cowls", "Support channel stampings"],
    features: ["Custom CNC-milled contour surfaces", "Springback-compensated geometry", "Heavy-duty die shoe construction", "Tryout validated on in-house presses"],
    isAuthenticDTSProduct: true
  },
  {
    id: "trimming-tool",
    name: "Trimming Tool",
    category: "tooling",
    categoryLabel: "Tooling Solution",
    tagline: "Precision trimming and edge-profiling tooling die for clean component perimeters.",
    description: "Manufactured for secondary perimeter shearing and scrap separation on drawn or formed press parts. Features high-grade D2/SKD11 tool steel cutting inserts wire-cut to micro-tolerances for burr-free edges and extended die life.",
    image: "images/products/tool-trimming.png",
    badge: "Tooling Die",
    applications: ["Post-forming perimeter trimming", "Draw scrap shedding", "Automotive cover components"],
    features: ["Wire EDM-machined shear edges", "Even clearance distribution", "Integrated scrap cutter design", "High wear-resistant steel inserts"],
    isAuthenticDTSProduct: true
  },
  {
    id: "tvs-rtr-exhaust-shield",
    name: "Stamped Exhaust Heat Shield (RTR Embossed)",
    category: "press-products",
    categoryLabel: "Press Product",
    tagline: "Automotive motorcycle exhaust heat protector with precision embossed branding.",
    description: "Genuine automotive press component manufactured by DTS for two-wheeler platforms (TVS Apache RTR series). Features complex 3D contour forming, mounting eyelets, slot ventilation, and clean embossed profile.",
    image: "images/products/press-product-rtr-exhaust-shield.png",
    badge: "Automotive Stamping",
    applications: ["Two-wheeler exhaust systems", "Thermal heat shielding", "Aesthetic motorcycle trim"],
    features: ["Multi-stage draw and form tooling", "Embossed branding detail", "High surface finish control", "Consistent mounting hole centerlines"],
    isAuthenticDTSProduct: true
  },
  {
    id: "perforated-cylindrical-baffle",
    name: "Perforated Cylindrical Baffle Component",
    category: "press-products",
    categoryLabel: "Press Product",
    tagline: "Precision perforated and rolled cylindrical internal exhaust/muffler baffle.",
    description: "High-accuracy perforated sheet metal component rolled and calibrated into a cylindrical structure for automotive exhaust and acoustic dampening applications.",
    image: "images/products/press-product-perforated-baffle.png",
    badge: "Specialized Stamping",
    applications: ["Automotive exhaust mufflers", "Acoustic dampeners", "Fluid filtration housings"],
    features: ["Uniform perforation mesh pattern", "Precision circularity calibration", "Burr-free pierced apertures", "Weld-ready edge condition"],
    isAuthenticDTSProduct: true
  },
  {
    id: "deep-drawn-casing",
    name: "Deep-Drawn Automotive Casing",
    category: "press-products",
    categoryLabel: "Press Product",
    tagline: "Seamless deep-drawn metal housing stamped on heavy hydraulic press lines.",
    description: "Manufactured using DTS 350-ton hydraulic press capabilities. Features uniform wall thickness distribution, drawn step contours, and tight bottom flatness tolerances.",
    image: "images/products/press-product-deep-drawn-casing.png",
    badge: "Deep Draw Stamping",
    applications: ["Automotive filter housings", "Fluid reservoir caps", "Actuator enclosures"],
    features: ["Multi-step draw process", "Controlled wall thinning", "High hydraulic tonnage execution", "Seamless cylindrical formation"],
    isAuthenticDTSProduct: true
  },
  {
    id: "structural-mounting-bracket",
    name: "Structural Support & Mounting Brackets",
    category: "press-products",
    categoryLabel: "Press Product",
    tagline: "Heavy-gauge formed steel bracket for vehicle frame and chassis reinforcement.",
    description: "High-strength sheet metal bracket with reinforced ribs and precision pierced mounting points, engineered for load-bearing automotive frame assemblies.",
    image: "images/products/press-product-structural-mount.png",
    badge: "Chassis Component",
    applications: ["Automotive chassis mounting", "Battery & powertrain support", "Suspension linkage brackets"],
    features: ["Heavy gauge steel stamping", "Formed stiffener ribs", "Accurate hole pitch control", "Deburred and rust-protected surface"],
    isAuthenticDTSProduct: true
  },
  {
    id: "formed-arm-linkage",
    name: "Formed Linkage Arm Component",
    category: "press-products",
    categoryLabel: "Press Product",
    tagline: "Dual-bend precision linkage arm with slotted adjustment aperture.",
    description: "Precision stamped and formed link arm featuring stepped offset bends and an elongated adjustment slot, used across automotive control and mounting linkages.",
    image: "images/products/press-product-formed-arm.png",
    badge: "Precision Component",
    applications: ["Actuator linkages", "Throttle/brake mechanical connections", "Equipment mounting stays"],
    features: ["Dual compound bend accuracy", "Precision punched slot geometry", "High repeatability across batches", "Quality-inspected critical centers"],
    isAuthenticDTSProduct: true
  },
  {
    id: "precision-backing-plate",
    name: "Precision Backing Plate Bracket",
    category: "sub-assemblies",
    categoryLabel: "Sub-Assembly Component",
    tagline: "Stamped backing plate designed for multi-point mechanical sub-assemblies.",
    description: "Engineered backing plate with countersunk apertures and edge flanges, serving as the foundational support component in automotive sub-assemblies.",
    image: "images/products/press-product-precision-plate.png",
    badge: "Sub-Assembly Part",
    applications: ["Instrument mounting plates", "Sensor bracket sub-assemblies", "Automotive lock mechanism bases"],
    features: ["Flatness control across plate area", "Pierced and countersunk holes", "Ready for projection welding and tapping", "Tightly controlled exterior envelope"],
    isAuthenticDTSProduct: true
  }
];

export const FACILITY_UNITS: FacilityUnit[] = [
  {
    id: "unit-1-tool-room",
    unitNumber: "Unit I",
    name: "Tool Room Facility",
    subtitle: "Precision Tool Design, Machining, Die Fitting & Proving",
    overview: "Unit I houses the complete DTS Tool Room engineering operations. Equipped with vertical machining centers (VMC), CNC wire cut EDM, jig boring, precision grinding, and dedicated tool assembly bays, Unit I is where innovative press tool concepts are engineered into high-durability production dies.",
    exteriorImage: "images/facilities/unit1-tool-room-exterior.png",
    specSheetImage: "images/machinery/tool-room-machinery-specs.png",
    keyHighlights: [
      "Integrated CAD/CAM die design and engineering",
      "High-speed STM Vertical Machining Centers (VMC) up to 1200 x 800 mm",
      "Ruijun CNC Wire EDM cutting machines for micro-tolerance die cavities",
      "WMW Milling and Jig Boring machines for large tool bases",
      "In-house tool tryout, die validation, and inspection"
    ],
    interiorImages: [
      {
        src: "images/facilities/tool-room-overview.jpg",
        caption: "Tool Room Main Workshop",
        description: "Overview of tool fitting benches, die plates, and skilled toolmakers assembling automotive stamping dies."
      },
      {
        src: "images/facilities/tool-room-vmc-cnc-line.jpg",
        caption: "STM CNC Machining Line",
        description: "Precision CNC vertical machining centers cutting hardened die blocks and punch retainers."
      },
      {
        src: "images/facilities/tool-room-stm-vl850-machining-center.jpg",
        caption: "STM VL850 Vertical Machining Center",
        description: "Heavy-duty CNC milling machine configured for high-accuracy automotive tooling plates."
      },
      {
        src: "images/facilities/tool-room-wire-edm-drilling.jpg",
        caption: "Wire EDM & Spark Erosion Bay",
        description: "Ruijun CNC EDM wire cutting and super drill machines for hardened steel profiles."
      }
    ]
  },
  {
    id: "unit-2-press-shop",
    unitNumber: "Unit II",
    name: "Press Shop Facility",
    subtitle: "High-Volume Stamping, Deep Drawing & Press Component Manufacturing",
    overview: "Unit II is the mass-production backbone of Dynamic Tooling Systems. Spanning comprehensive power press lines from 20 Ton to 300 Ton and heavy hydraulic presses up to 350 Ton, Unit II operates high-efficiency stamping lines supported by heavy overhead cranes and dedicated material shearing equipment.",
    exteriorImage: "images/facilities/unit2-press-shop-exterior.jpg",
    specSheetImage: "images/machinery/press-shop-machinery-specs.png",
    keyHighlights: [
      "19 Mechanical Power Presses from 20 Ton to 300 Ton capacity (MILAP, SEW, WASINO, AMADA)",
      "3 Heavy Hydraulic Presses: 150T, 200T, and 350T capacity for deep drawing",
      "Haco Hydraulic Shearing Machine (0.5 to 10mm cutting capacity)",
      "Overhead yellow crane bay for efficient coil and die maneuvering",
      "Kelvin 12KVA projection welding for automotive sub-assemblies"
    ],
    interiorImages: [
      {
        src: "images/facilities/press-shop-bay-crane.jpg",
        caption: "Press Bay with Overhead Crane",
        description: "High-angle perspective of the press shop, showing sequential press rows and crane coverage."
      },
      {
        src: "images/facilities/press-shop-production-floor.jpg",
        caption: "High-Volume Stamping Operations",
        description: "Active press lines producing automotive heat shields, stamped parts, and component pallets."
      },
      {
        src: "images/facilities/press-shop-40t-power-press-line.jpg",
        caption: "40T Milap Power Press Line",
        description: "Operators producing continuous automotive pressings on dedicated safety-equipped press stations."
      },
      {
        src: "images/facilities/press-shop-shearing-machine.jpg",
        caption: "Haco Hydraulic Shearing Machine (DTS/SM-01)",
        description: "Heavy-duty precision shearing machine cutting sheet metal blanks up to 10mm thickness."
      }
    ]
  },
  {
    id: "office-engineering",
    unitNumber: "Office",
    name: "Engineering & Administration",
    subtitle: "CAD/CAM Engineering, Quality Inspection & Customer Management",
    overview: "Located adjacent to the manufacturing facilities, the DTS administrative and technical office coordinates production planning, quality assurance, CAD tooling design, procurement, and customer relationships.",
    exteriorImage: "images/facilities/office-administration.jpg",
    keyHighlights: [
      "CAD/CAM tooling design and 3D modeling workstations",
      "Production planning and inventory management",
      "Dedicated quality documentation and ISO compliance records",
      "Direct customer engineering interface and quotation desk"
    ],
    interiorImages: [
      {
        src: "images/facilities/office-administration.jpg",
        caption: "DTS Administration & Engineering Team",
        description: "Qualified engineers and administrative staff overseeing tooling design, production flow, and client deliveries."
      }
    ]
  }
];

export const TOOL_ROOM_MACHINERY: MachineryItem[] = [
  { sNo: 1, name: "Radial Drill Machine", make: "HMT", capacity: "3mm to 50mm", unit: "Unit I (Tool Room)" },
  { sNo: 2, name: "Lathe Machine", make: "SHOKI", capacity: "250 x 1000 mm", unit: "Unit I (Tool Room)" },
  { sNo: 3, name: "Drilling Machine", make: "CKP", capacity: "1mm to 25mm", unit: "Unit I (Tool Room)" },
  { sNo: 4, name: "Bench Grinding", make: "LAXHIMI", capacity: "200 x 25.4 mm", unit: "Unit I (Tool Room)" },
  { sNo: 5, name: "Surface Grinding - 2", make: "POVAZSKA BYSTRICA", capacity: "1500 x 500 mm", unit: "Unit I (Tool Room)" },
  { sNo: 6, name: "Surface Grinding - 3", make: "IMPACT", capacity: "700 x 300 mm", unit: "Unit I (Tool Room)" },
  { sNo: 7, name: "Milling Machine", make: "WMW", capacity: "1500 x 500 mm", unit: "Unit I (Tool Room)" },
  { sNo: 8, name: "Tapping Machine", make: "TAIPU", capacity: "M3 to M16", unit: "Unit I (Tool Room)" },
  { sNo: 9, name: "Cutter Grinding Machine", make: "VERTEX", capacity: "Ø3 to Ø12 mm", unit: "Unit I (Tool Room)" },
  { sNo: 10, name: "Industrial Air Compressor", make: "HAVELLS - LAFERT", capacity: "10 HP", unit: "Unit I (Tool Room)" },
  { sNo: 11, name: "Power Generator", make: "KIRLOSKAR", capacity: "62.5 KVA", unit: "Unit I (Tool Room)" },
  { sNo: 12, name: "VMC - Vertical Machining Center", make: "STM", capacity: "1200 x 800 mm", unit: "Unit I (Tool Room)" },
  { sNo: 13, name: "VMC - Vertical Machining Center", make: "STM", capacity: "600 x 400 mm", unit: "Unit I (Tool Room)" },
  { sNo: 14, name: "VMC - Vertical Machining Center", make: "STM", capacity: "850 x 400 mm (VL850)", unit: "Unit I (Tool Room)" },
  { sNo: 15, name: "Jig Boring Machine", make: "WMW", capacity: "1100 x 730 mm", unit: "Unit I (Tool Room)" },
  { sNo: 16, name: "CNC EDM Wire Cutting Machine", make: "RUIJUN", capacity: "Model SR400S", unit: "Unit I (Tool Room)" },
  { sNo: 17, name: "CNC EDM Wire Cutting Machine", make: "RUIJUN", capacity: "Model SR600S", unit: "Unit I (Tool Room)" },
  { sNo: 18, name: "EDM Super Drill Machine", make: "REIJUN", capacity: "Model MS-DZ430I", unit: "Unit I (Tool Room)" }
];

export const PRESS_SHOP_MACHINERY: MachineryItem[] = [
  { sNo: 1, name: "Power Press 150T", make: "MILAP", capacity: "150 TON", unit: "Unit II (Press Shop)" },
  { sNo: 2, name: "Power Press 300T", make: "SEW", capacity: "300 TON", unit: "Unit II (Press Shop)" },
  { sNo: 3, name: "Power Press 200T", make: "SEW", capacity: "200 TON", unit: "Unit II (Press Shop)" },
  { sNo: 4, name: "Power Press 200T (Line 2)", make: "SEW", capacity: "200 TON", unit: "Unit II (Press Shop)" },
  { sNo: 5, name: "Power Press 250T", make: "SEW", capacity: "250 TON", unit: "Unit II (Press Shop)" },
  { sNo: 6, name: "Power Press 80T", make: "WASINO", capacity: "80 TON", unit: "Unit II (Press Shop)" },
  { sNo: 7, name: "Power Press 100T", make: "MILAP", capacity: "100 TON", unit: "Unit II (Press Shop)" },
  { sNo: 8, name: "Power Press 60T", make: "MILAP", capacity: "60 TON", unit: "Unit II (Press Shop)" },
  { sNo: 9, name: "Power Press 40T (DTS/PP-12)", make: "MILAP", capacity: "40 TON", unit: "Unit II (Press Shop)" },
  { sNo: 10, name: "Power Press 20T", make: "MILAP", capacity: "20 TON", unit: "Unit II (Press Shop)" },
  { sNo: 11, name: "Power Press 80T", make: "AMADA", capacity: "80 TON", unit: "Unit II (Press Shop)" },
  { sNo: 12, name: "Power Press 100T", make: "WASINO", capacity: "100 TON", unit: "Unit II (Press Shop)" },
  { sNo: 13, name: "Power Press 30T", make: "MILAP", capacity: "30 TON", unit: "Unit II (Press Shop)" },
  { sNo: 14, name: "Power Press 40T (Line 2)", make: "MILAP", capacity: "40 TON", unit: "Unit II (Press Shop)" },
  { sNo: 15, name: "Power Press 60T (Line 2)", make: "MILAP", capacity: "60 TON", unit: "Unit II (Press Shop)" },
  { sNo: 16, name: "Power Press 100T (Line 3)", make: "MILAP", capacity: "100 TON", unit: "Unit II (Press Shop)" },
  { sNo: 17, name: "Power Press 150T (Line 2)", make: "MILAP", capacity: "150 TON", unit: "Unit II (Press Shop)" },
  { sNo: 18, name: "Power Press 150T (Line 3)", make: "SEW", capacity: "150 TON", unit: "Unit II (Press Shop)" },
  { sNo: 19, name: "Power Press 110T", make: "SEW", capacity: "110 TON", unit: "Unit II (Press Shop)" },
  { sNo: 20, name: "Hydraulic Press 200T", make: "SPM", capacity: "200 TON", unit: "Unit II (Press Shop)" },
  { sNo: 21, name: "Hydraulic Press 150T", make: "MILAP", capacity: "150 TON", unit: "Unit II (Press Shop)" },
  { sNo: 22, name: "Hydraulic Press 350T", make: "SPM", capacity: "350 TON", unit: "Unit II (Press Shop)" },
  { sNo: 23, name: "Screw Compressor", make: "LG", capacity: "15 HP", unit: "Unit II (Press Shop)" },
  { sNo: 24, name: "Hydraulic Shearing Machine (DTS/SM-01)", make: "HACO", capacity: "0.5 – 10 mm", unit: "Unit II (Press Shop)" },
  { sNo: 25, name: "Bench Grinding", make: "LAXHIMI", capacity: "200 x 25.4 mm", unit: "Unit II (Press Shop)" },
  { sNo: 26, name: "Surface Grinding - 1", make: "BHURJI", capacity: "550 x 200 mm", unit: "Unit II (Press Shop)" },
  { sNo: 27, name: "Projection Welding Machine", make: "KELVIN", capacity: "12 KVA", unit: "Unit II (Press Shop)" },
  { sNo: 28, name: "Compressor - 2", make: "MAGNUM", capacity: "10 HP", unit: "Unit II (Press Shop)" },
  { sNo: 29, name: "Standby Generator", make: "KIRLOSKAR", capacity: "160 KVA", unit: "Unit II (Press Shop)" }
];

export const VERIFIED_CUSTOMERS: CustomerLogo[] = [
  { id: "tvs-motor", name: "TVS Motor Company", logo: "images/customers/tvs-motor.png", sector: "Two-Wheeler & Three-Wheeler OEM", sourceVerified: true },
  { id: "royal-enfield", name: "Royal Enfield", logo: "images/customers/royal-enfield.png", sector: "Motorcycle OEM", sourceVerified: true },
  { id: "sandhar", name: "Sandhar Technologies", logo: "images/customers/sandhar.png", sector: "Automotive Tier-1 Component Group", sourceVerified: true },
  { id: "jbm-neel-metal", name: "JBM Group / Neel Metal Products", logo: "images/customers/jbm-neel-metal.png", sector: "Automotive Pressing & Sub-Assemblies", sourceVerified: true },
  { id: "elkayem", name: "Elkayem Auto Components", logo: "images/customers/elkayem.png", sector: "Automotive Systems Supplier", sourceVerified: true },
  { id: "supangita", name: "Supangita Engineers", logo: "images/customers/supangita.png", sector: "Precision Engineering & Pressings", sourceVerified: true },
  { id: "lgb", name: "LGB (L.G. Balakrishnan & Bros)", logo: "images/customers/lgb.png", sector: "Automotive Transmission & Chains", sourceVerified: true },
  { id: "metalman", name: "Metalman Auto", logo: "images/customers/metalman.png", sector: "Sheet Metal & Tubular Fabrications", sourceVerified: true },
  { id: "simple-energy", name: "Simple Energy", logo: "images/customers/simple-energy.png", sector: "Electric Vehicle (EV) Manufacturer", sourceVerified: true },
  { id: "samvardhana-motherson", name: "Samvardhana Motherson Group", logo: "images/customers/samvardhana-motherson.png", sector: "Global Automotive Tier-1 Systems", sourceVerified: true },
  { id: "thai-summit", name: "Thai Summit Group (TS)", logo: "images/customers/thai-summit.png", sector: "Automotive Body & Chassis Parts", sourceVerified: true },
  { id: "sharda-motor", name: "SM (Sharda Motor)", logo: "images/customers/sharda-motor.png", sector: "Exhaust Systems & Suspensions", sourceVerified: true },
  { id: "ather-energy", name: "Ather Energy", logo: "images/customers/ather-energy.png", sector: "Electric Vehicle (EV) OEM", sourceVerified: true },
  { id: "nahars-group", name: "Nahars / Laxmi / Luminaz Group", logo: "images/customers/nahars-group.png", sector: "Metal Pressing & Glass Assemblies", sourceVerified: true },
  { id: "rucha-engineering", name: "Rucha Engineering 2.0", logo: "images/customers/rucha-engineering.png", sector: "Automotive Exhausts & Press Components", sourceVerified: true }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-toolroom-1",
    title: "Tool Room Fitting & Assembly Bay",
    category: "tool-room",
    facilityUnit: "Unit I",
    image: "images/facilities/tool-room-overview.jpg",
    caption: "Die fitting benches and toolmakers machining precision tooling components."
  },
  {
    id: "gal-toolroom-2",
    title: "STM Vertical Machining Center Line",
    category: "tool-room",
    facilityUnit: "Unit I",
    image: "images/facilities/tool-room-vmc-cnc-line.jpg",
    caption: "High-speed CNC milling machines shaping high-tensile tool steel dies."
  },
  {
    id: "gal-toolroom-3",
    title: "STM VL850 VMC Machining Center",
    category: "tool-room",
    facilityUnit: "Unit I",
    image: "images/facilities/tool-room-stm-vl850-machining-center.jpg",
    caption: "Precision vertical machining center with CNC control console."
  },
  {
    id: "gal-toolroom-4",
    title: "CNC Wire EDM & Super Drill Bay",
    category: "tool-room",
    facilityUnit: "Unit I",
    image: "images/facilities/tool-room-wire-edm-drilling.jpg",
    caption: "Ruijun CNC EDM wire cutting machine and drilling station for hardened dies."
  },
  {
    id: "gal-press-1",
    title: "Press Shop Overview with Overhead Crane",
    category: "press-shop",
    facilityUnit: "Unit II",
    image: "images/facilities/press-shop-bay-crane.jpg",
    caption: "Unit II heavy stamping bay showing crane rail and progressive press lines."
  },
  {
    id: "gal-press-2",
    title: "Active Automotive Stamping Production",
    category: "press-shop",
    facilityUnit: "Unit II",
    image: "images/facilities/press-shop-production-floor.jpg",
    caption: "Operators performing sequential stamping runs for automotive sheet metal parts."
  },
  {
    id: "gal-press-3",
    title: "40-Ton Milap Power Press Line",
    category: "press-shop",
    facilityUnit: "Unit II",
    image: "images/facilities/press-shop-40t-power-press-line.jpg",
    caption: "40T mechanical power presses actively stamping precision automotive brackets."
  },
  {
    id: "gal-press-4",
    title: "Hydraulic Shearing Machine (DTS/SM-01)",
    category: "press-shop",
    facilityUnit: "Unit II",
    image: "images/facilities/press-shop-shearing-machine.jpg",
    caption: "Haco hydraulic shearing machine handling sheet metal cutting up to 10mm."
  },
  {
    id: "gal-prod-1",
    title: "Cam-Piercing Tool Die",
    category: "products",
    image: "images/products/tool-cam-piercing.png",
    caption: "Heavy-duty cam piercing press tool die for angled aperture punching."
  },
  {
    id: "gal-prod-2",
    title: "Forming Tool Die",
    category: "products",
    image: "images/products/tool-forming.png",
    caption: "Contour press forming tool with CNC-contoured punch and cavity."
  },
  {
    id: "gal-prod-3",
    title: "Trimming Tool Die",
    category: "products",
    image: "images/products/tool-trimming.png",
    caption: "Precision trimming die with high-durability steel shear edges."
  },
  {
    id: "gal-prod-4",
    title: "Stamped Exhaust Heat Shield (RTR)",
    category: "products",
    image: "images/products/press-product-rtr-exhaust-shield.png",
    caption: "High-finish stamped motorcycle exhaust heat protector with embossed branding."
  },
  {
    id: "gal-prod-5",
    title: "Perforated Exhaust Baffle Component",
    category: "products",
    image: "images/products/press-product-perforated-baffle.png",
    caption: "Precision rolled and pierced cylindrical automotive exhaust acoustic baffle."
  },
  {
    id: "gal-prod-6",
    title: "Deep-Drawn Automotive Casing",
    category: "products",
    image: "images/products/press-product-deep-drawn-casing.png",
    caption: "Hydraulic deep-drawn seamless enclosure with uniform wall thickness."
  },
  {
    id: "gal-fac-1",
    title: "Unit I Tool Room Facility Exterior",
    category: "facilities",
    facilityUnit: "Unit I",
    image: "images/facilities/unit1-tool-room-exterior.png",
    caption: "External view of Dynamic Tooling Systems Unit I manufacturing plant in Hosur."
  },
  {
    id: "gal-fac-2",
    title: "Unit II Press Shop Facility Exterior",
    category: "facilities",
    facilityUnit: "Unit II",
    image: "images/facilities/unit2-press-shop-exterior.jpg",
    caption: "External view of Unit II heavy press shop and logistics loading bay."
  },
  {
    id: "gal-fac-3",
    title: "Engineering & Administrative Office",
    category: "facilities",
    facilityUnit: "Office",
    image: "images/facilities/office-administration.jpg",
    caption: "Office workstations for CAD tooling designers and administrative operations."
  }
];

