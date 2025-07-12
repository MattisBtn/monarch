// Types pour la conciergerie Monarch
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

// Structure simplifiée des services par destination
export interface DestinationServices {
  locations: string[];
  activities: string[];
  events: string[];
}

export interface Destination {
  id: string;
  name: string;
  nameKey: string;
  descriptionKey: string;
  taglineKey: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  heroImage: string;
  services: DestinationServices;
  atmosphereKey: string;
  highlightsKey: string;
  bestSeasonKey: string;
  timeZone: string;
  unsplashKeywords: string[];
  isComingSoon?: boolean;
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
  serviceKey: string;
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
