// Types pour la conciergerie Monarch
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  price?: {
    from: number;
    currency: string;
    unit: string; // 'day', 'hour', 'person', 'event'
  };
  images: string[];
  features: string[];
  duration?: string;
  capacity?: number;
  location?: string;
  available: boolean;
  isPopular?: boolean;
  isExclusive?: boolean;
  unsplashKeywords: string[]; // Pour générer les URLs Unsplash
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  tagline: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  heroImage: string;
  gallery: string[];
  services: Service[];
  atmosphere: string;
  highlights: string[];
  bestSeason: string;
  timeZone: string;
  unsplashKeywords: string[]; // Pour la hero image
}

export interface ServicesByCategory {
  [categoryId: string]: Service[];
}

// Categories de services de la conciergerie
export const serviceCategories: ServiceCategory[] = [
  {
    id: "locations",
    name: "Locations Premium",
    description: "Villas d'exception, véhicules de luxe et transports privés",
    icon: "lucide:home",
    color: "from-amber-600 to-orange-600",
  },
  {
    id: "activities",
    name: "Activités Exclusives",
    description: "Expériences uniques et sensations fortes",
    icon: "lucide:zap",
    color: "from-red-600 to-pink-600",
  },
  {
    id: "events",
    name: "Événementiels",
    description: "Soirées privées et événements sur mesure",
    icon: "lucide:party-popper",
    color: "from-purple-600 to-indigo-600",
  },
];

// Navigation item type
export interface NavigationItem {
  label: string;
  href: string;
  action?: string;
}

// Gallery item type
export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  type: "image" | "video";
  featured?: boolean;
}

// Booking inquiry type
export interface BookingInquiry {
  destinationId: string;
  serviceId: string;
  dates: {
    from: Date;
    to: Date;
  };
  guests: number;
  message?: string;
  contact: {
    name: string;
    email: string;
    phone?: string;
  };
}
