export interface Product {
  id: string;
  name: string;
  category: 'tooling' | 'press-products' | 'sub-assemblies';
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  applications: string[];
  features: string[];
  isAuthenticDTSProduct: boolean;
}

export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  category: 'press-tooling' | 'press-products' | 'precision-machining' | 'development';
  keyHighlights: string[];
  linkTo: string;
}

export interface FacilityUnit {
  id: string;
  unitNumber: string;
  name: string;
  subtitle: string;
  overview: string;
  exteriorImage: string;
  interiorImages: {
    src: string;
    caption: string;
    description: string;
  }[];
  specSheetImage?: string;
  keyHighlights: string[];
}

export interface MachineryItem {
  sNo: number;
  name: string;
  make: string;
  capacity: string;
  unit: 'Unit I (Tool Room)' | 'Unit II (Press Shop)';
}

export interface CustomerLogo {
  id: string;
  name: string;
  logo: string;
  sector: string;
  sourceVerified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'tool-room' | 'press-shop' | 'products' | 'facilities';
  image: string;
  caption: string;
  facilityUnit?: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productServiceRequired: string;
  projectDetails: string;
}

