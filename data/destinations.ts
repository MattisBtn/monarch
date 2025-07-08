import type { Destination, Service } from "~/types";

// Fonction utilitaire pour générer des URLs Unsplash
const unsplashUrl = (
  keywords: string[],
  width = 1200,
  height = 800
): string => {
  const query = keywords.join(",");
  return `https://images.unsplash.com/${width}x${height}/?${query}`;
};

// Services Los Angeles
const losAngelesServices: Service[] = [
  // Locations Premium
  {
    id: "la-villa-beverly",
    name: "Villa Beverly Hills",
    description: "Villa d'exception avec vue panoramique sur Hollywood",
    categoryId: "locations",
    price: { from: 5000, currency: "USD", unit: "day" },
    images: [],
    features: [
      "Piscine infinity",
      "Home cinema",
      "Spa privé",
      "Garage 6 voitures",
    ],
    duration: "Séjour minimum 3 nuits",
    capacity: 12,
    available: true,
    isPopular: true,
    unsplashKeywords: [
      "luxury-villa",
      "beverly-hills",
      "infinity-pool",
      "modern-architecture",
    ],
  },
  {
    id: "la-lamborghini",
    name: "Lamborghini Huracán",
    description: "Supercar italienne pour explorer LA avec style",
    categoryId: "locations",
    price: { from: 1200, currency: "USD", unit: "day" },
    images: [],
    features: ["V10 610ch", "Toit ouvrant", "Système audio premium"],
    duration: "Location journalière",
    capacity: 2,
    available: true,
    isExclusive: true,
    unsplashKeywords: ["lamborghini", "supercar", "luxury-car", "los-angeles"],
  },
  {
    id: "la-yacht-marina",
    name: "Yacht Marina del Rey",
    description: "Yacht de luxe pour naviguer le long de la côte californienne",
    categoryId: "locations",
    price: { from: 3500, currency: "USD", unit: "day" },
    images: [],
    features: ["3 cabines", "Jacuzzi", "Équipage professionnel", "Catering"],
    duration: "Demi-journée ou journée complète",
    capacity: 12,
    available: true,
    unsplashKeywords: ["luxury-yacht", "marina", "california-coast", "ocean"],
  },
  {
    id: "la-jet-private",
    name: "Jet Privé Citation",
    description: "Vol privé au départ de LAX vers toute destination",
    categoryId: "locations",
    price: { from: 8000, currency: "USD", unit: "hour" },
    images: [],
    features: ["8 passagers", "Wi-Fi haute vitesse", "Catering gourmet"],
    duration: "Vol à la demande",
    capacity: 8,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "private-jet",
      "luxury-aviation",
      "cessna-citation",
      "airport",
    ],
  },

  // Activités Exclusives
  {
    id: "la-shooting-range",
    name: "Tir de Précision VIP",
    description: "Séance de tir avec armes d'exception et instructeur privé",
    categoryId: "activities",
    price: { from: 500, currency: "USD", unit: "person" },
    images: [],
    features: ["Instructeur certifié", "Armes de collection", "Stand privé"],
    duration: "2 heures",
    capacity: 6,
    available: true,
    unsplashKeywords: [
      "shooting-range",
      "precision-shooting",
      "firearms",
      "training",
    ],
  },
  {
    id: "la-helicopter-tour",
    name: "Tour d'Hélicoptère Hollywood",
    description: "Survol privé des studios et du Hollywood Sign",
    categoryId: "activities",
    price: { from: 1500, currency: "USD", unit: "person" },
    images: [],
    features: [
      "Pilote professionnel",
      "Casques audio",
      "Photos professionnelles",
    ],
    duration: "45 minutes",
    capacity: 4,
    available: true,
    isPopular: true,
    unsplashKeywords: [
      "helicopter-tour",
      "hollywood-sign",
      "los-angeles-aerial",
      "city-skyline",
    ],
  },
  {
    id: "la-buggy-adventure",
    name: "Buggy Désert Mojave",
    description: "Expédition en buggy dans le désert avec guide expert",
    categoryId: "activities",
    price: { from: 800, currency: "USD", unit: "person" },
    images: [],
    features: [
      "Buggy haute performance",
      "Équipement sécurité",
      "Lunch gourmet",
    ],
    duration: "Journée complète",
    capacity: 8,
    available: true,
    unsplashKeywords: [
      "desert-buggy",
      "mojave-desert",
      "off-road",
      "adventure",
    ],
  },
  {
    id: "la-limousine",
    name: "Limousine Hollywood",
    description: "Service limousine premium pour vos soirées à LA",
    categoryId: "activities",
    price: { from: 300, currency: "USD", unit: "hour" },
    images: [],
    features: ["Chauffeur en uniforme", "Bar intégré", "Éclairage LED"],
    duration: "Service horaire",
    capacity: 8,
    available: true,
    unsplashKeywords: [
      "stretch-limousine",
      "hollywood",
      "luxury-transportation",
      "nightlife",
    ],
  },

  // Événementiels
  {
    id: "la-rooftop-party",
    name: "Soirée Rooftop Privée",
    description: "Rooftop exclusif avec vue sur downtown LA",
    categoryId: "events",
    price: { from: 15000, currency: "USD", unit: "event" },
    images: [],
    features: [
      "DJ professionnel",
      "Bar premium",
      "Catering gastronomique",
      "Sécurité",
    ],
    duration: "Soirée complète",
    capacity: 100,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "rooftop-party",
      "los-angeles-skyline",
      "luxury-event",
      "nightlife",
    ],
  },
  {
    id: "la-restaurant-festif",
    name: "Restaurant Festif Malibu",
    description: "Privatisation restaurant gastronomique avec vue océan",
    categoryId: "events",
    price: { from: 8000, currency: "USD", unit: "event" },
    images: [],
    features: ["Chef étoilé", "Menu sur mesure", "Vue océan panoramique"],
    duration: "Dîner privé",
    capacity: 50,
    available: true,
    unsplashKeywords: [
      "malibu-restaurant",
      "ocean-view-dining",
      "luxury-restaurant",
      "gourmet",
    ],
  },
  {
    id: "la-house-party",
    name: "House Party Beverly Hills",
    description: "Villa privée transformée en club exclusif",
    categoryId: "events",
    price: { from: 25000, currency: "USD", unit: "event" },
    images: [],
    features: [
      "Villa entière",
      "DJ international",
      "Service complet",
      "Sécurité 24h",
    ],
    duration: "Nuit complète",
    capacity: 150,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "beverly-hills-party",
      "luxury-villa-party",
      "exclusive-event",
      "mansion",
    ],
  },
  {
    id: "la-yacht-party",
    name: "Yacht Party Santa Monica",
    description: "Méga yacht pour événement en mer",
    categoryId: "events",
    price: { from: 20000, currency: "USD", unit: "event" },
    images: [],
    features: ["Méga yacht 150 pieds", "Équipage complet", "Catering premium"],
    duration: "Journée/Soirée",
    capacity: 80,
    available: true,
    isPopular: true,
    unsplashKeywords: [
      "mega-yacht-party",
      "santa-monica",
      "luxury-boat-party",
      "ocean-event",
    ],
  },
];

// Services Las Vegas
const lasVegasServices: Service[] = [
  // Locations Premium
  {
    id: "lv-penthouse-strip",
    name: "Penthouse The Strip",
    description: "Penthouse de luxe avec vue sur le Strip légendaire",
    categoryId: "locations",
    price: { from: 3000, currency: "USD", unit: "day" },
    images: [],
    features: [
      "Vue panoramique Strip",
      "Terrasse privée",
      "Jacuzzi",
      "Service majordome",
    ],
    duration: "Séjour minimum 2 nuits",
    capacity: 8,
    available: true,
    isPopular: true,
    unsplashKeywords: [
      "las-vegas-penthouse",
      "strip-view",
      "luxury-suite",
      "casino",
    ],
  },
  {
    id: "lv-ferrari-488",
    name: "Ferrari 488 Spider",
    description: "Supercar italienne pour briller sur le Strip",
    categoryId: "locations",
    price: { from: 1500, currency: "USD", unit: "day" },
    images: [],
    features: ["V8 Turbo", "Toit rétractable", "Intérieur cuir"],
    duration: "Location journalière",
    capacity: 2,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "ferrari-488",
      "las-vegas-strip",
      "luxury-car",
      "supercar",
    ],
  },
  {
    id: "lv-jet-charter",
    name: "Jet Charter Vegas",
    description: "Jet privé depuis McCarran Airport",
    categoryId: "locations",
    price: { from: 6000, currency: "USD", unit: "hour" },
    images: [],
    features: ["Gulfstream G450", "Service concierge", "Catering premium"],
    duration: "À la demande",
    capacity: 12,
    available: true,
    unsplashKeywords: [
      "gulfstream-jet",
      "las-vegas-airport",
      "private-aviation",
      "luxury-travel",
    ],
  },

  // Activités Exclusives
  {
    id: "lv-tank-experience",
    name: "Expérience Tank M1 Abrams",
    description: "Conduite de tank militaire dans le désert du Nevada",
    categoryId: "activities",
    price: { from: 2500, currency: "USD", unit: "person" },
    images: [],
    features: ["Tank authentique", "Instructeur militaire", "Parcours désert"],
    duration: "4 heures",
    capacity: 2,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "military-tank",
      "nevada-desert",
      "extreme-experience",
      "armored-vehicle",
    ],
  },
  {
    id: "lv-helicopter-minigun",
    name: "Hélicoptère Minigun",
    description: "Tir depuis hélicoptère avec minigun sur cibles désert",
    categoryId: "activities",
    price: { from: 3000, currency: "USD", unit: "person" },
    images: [],
    features: ["Hélico militaire", "Minigun M134", "Cibles explosives"],
    duration: "3 heures",
    capacity: 4,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "military-helicopter",
      "minigun",
      "aerial-shooting",
      "extreme-activity",
    ],
  },
  {
    id: "lv-grenade-launcher",
    name: "Lance-Grenades Training",
    description: "Formation lance-grenades avec explosifs dans zone sécurisée",
    categoryId: "activities",
    price: { from: 1500, currency: "USD", unit: "person" },
    images: [],
    features: [
      "Explosifs réels",
      "Zone militaire sécurisée",
      "Instructeur expert",
    ],
    duration: "2 heures",
    capacity: 6,
    available: true,
    unsplashKeywords: [
      "grenade-launcher",
      "military-training",
      "explosives",
      "combat-experience",
    ],
  },

  // Événementiels
  {
    id: "lv-nightclub-vip",
    name: "Nightclub VIP Takeover",
    description: "Privatisation complète des meilleurs clubs du Strip",
    categoryId: "events",
    price: { from: 50000, currency: "USD", unit: "event" },
    images: [],
    features: [
      "Club entier privatisé",
      "DJ international",
      "Service champagne illimité",
    ],
    duration: "Nuit complète",
    capacity: 300,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "las-vegas-nightclub",
      "vip-club",
      "strip-nightlife",
      "exclusive-party",
    ],
  },
  {
    id: "lv-casino-party",
    name: "Casino Party Privé",
    description: "Salon de jeu privé avec croupiers professionnels",
    categoryId: "events",
    price: { from: 30000, currency: "USD", unit: "event" },
    images: [],
    features: ["Tables de jeu privées", "Croupiers pros", "Bar premium"],
    duration: "Soirée casino",
    capacity: 50,
    available: true,
    unsplashKeywords: [
      "private-casino",
      "poker-table",
      "vegas-gambling",
      "high-stakes",
    ],
  },
];

// Services Miami
const miamiServices: Service[] = [
  // Locations Premium
  {
    id: "mi-villa-south-beach",
    name: "Villa South Beach",
    description: "Villa Art Déco face à l'océan Atlantique",
    categoryId: "locations",
    price: { from: 4000, currency: "USD", unit: "day" },
    images: [],
    features: [
      "Accès plage privé",
      "Piscine infinity",
      "Architecture Art Déco",
    ],
    duration: "Séjour minimum 3 nuits",
    capacity: 10,
    available: true,
    isPopular: true,
    unsplashKeywords: [
      "south-beach-villa",
      "art-deco",
      "ocean-view",
      "miami-beach",
    ],
  },
  {
    id: "mi-mclaren-720s",
    name: "McLaren 720S",
    description: "Supercar britannique pour Ocean Drive",
    categoryId: "locations",
    price: { from: 1800, currency: "USD", unit: "day" },
    images: [],
    features: ["V8 710ch", "Portes papillon", "Mode Track"],
    duration: "Location journalière",
    capacity: 2,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "mclaren-720s",
      "ocean-drive",
      "miami-supercar",
      "luxury-rental",
    ],
  },
  {
    id: "mi-mega-yacht",
    name: "Méga Yacht Biscayne",
    description: "Yacht de 200 pieds pour croisière dans les Keys",
    categoryId: "locations",
    price: { from: 5000, currency: "USD", unit: "day" },
    images: [],
    features: [
      "5 cabines",
      "Hélipad",
      "Équipage 8 personnes",
      "Toys nautiques",
    ],
    duration: "Croisière journée/semaine",
    capacity: 20,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "mega-yacht",
      "biscayne-bay",
      "florida-keys",
      "luxury-charter",
    ],
  },

  // Activités Exclusives
  {
    id: "mi-helicopter-keys",
    name: "Hélicoptère Florida Keys",
    description: "Survol des Keys avec atterrissage sur île privée",
    categoryId: "activities",
    price: { from: 2000, currency: "USD", unit: "person" },
    images: [],
    features: ["Vol panoramique", "Île privée", "Déjeuner gourmet"],
    duration: "Demi-journée",
    capacity: 6,
    available: true,
    unsplashKeywords: [
      "florida-keys-helicopter",
      "aerial-tour",
      "private-island",
      "tropical",
    ],
  },
  {
    id: "mi-speedboat-racing",
    name: "Course Speedboat Offshore",
    description: "Pilotage speedboat de course en haute mer",
    categoryId: "activities",
    price: { from: 1200, currency: "USD", unit: "person" },
    images: [],
    features: ["Boat 1000ch", "Instructeur pro", "Équipement sécurité"],
    duration: "3 heures",
    capacity: 4,
    available: true,
    unsplashKeywords: [
      "offshore-racing",
      "speedboat",
      "miami-waters",
      "high-speed",
    ],
  },

  // Événementiels
  {
    id: "mi-beach-club",
    name: "Beach Club Privatisation",
    description: "Club de plage exclusif South Beach",
    categoryId: "events",
    price: { from: 40000, currency: "USD", unit: "event" },
    images: [],
    features: ["Plage privée", "DJ résidence", "Service premium"],
    duration: "Journée beach party",
    capacity: 200,
    available: true,
    isPopular: true,
    unsplashKeywords: [
      "south-beach-club",
      "beach-party",
      "miami-nightlife",
      "ocean-view",
    ],
  },
  {
    id: "mi-yacht-party-bay",
    name: "Yacht Party Biscayne Bay",
    description: "Méga yacht pour soirée dans la baie",
    categoryId: "events",
    price: { from: 35000, currency: "USD", unit: "event" },
    images: [],
    features: ["Yacht 150 pieds", "Skyline Miami", "Catering cubain"],
    duration: "Sunset party",
    capacity: 100,
    available: true,
    unsplashKeywords: [
      "biscayne-bay-yacht",
      "miami-skyline",
      "sunset-party",
      "luxury-event",
    ],
  },
];

// Services New York
const newYorkServices: Service[] = [
  // Locations Premium
  {
    id: "ny-penthouse-manhattan",
    name: "Penthouse Manhattan",
    description: "Penthouse avec vue sur Central Park et skyline",
    categoryId: "locations",
    price: { from: 6000, currency: "USD", unit: "day" },
    images: [],
    features: ["Vue Central Park", "Terrasse 360°", "Service concierge 24h"],
    duration: "Séjour minimum 2 nuits",
    capacity: 8,
    available: true,
    isPopular: true,
    unsplashKeywords: [
      "manhattan-penthouse",
      "central-park-view",
      "nyc-skyline",
      "luxury-apartment",
    ],
  },
  {
    id: "ny-rolls-royce",
    name: "Rolls-Royce Phantom",
    description: "Luxe britannique pour parcourir Manhattan",
    categoryId: "locations",
    price: { from: 800, currency: "USD", unit: "day" },
    images: [],
    features: ["Chauffeur privé", "Intérieur cuir", "Bar intégré"],
    duration: "Service journalier",
    capacity: 4,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "rolls-royce-phantom",
      "manhattan-luxury",
      "chauffeur-service",
      "prestige",
    ],
  },
  {
    id: "ny-helicopter-charter",
    name: "Hélicoptère VIP",
    description: "Transfer héliport Manhattan vers Hamptons",
    categoryId: "locations",
    price: { from: 4000, currency: "USD", unit: "hour" },
    images: [],
    features: ["Héliport Manhattan", "Vol panoramique", "Service VIP"],
    duration: "Transfer à la demande",
    capacity: 6,
    available: true,
    unsplashKeywords: [
      "nyc-helicopter",
      "manhattan-heliport",
      "hamptons-transfer",
      "aerial-view",
    ],
  },

  // Activités Exclusives
  {
    id: "ny-shooting-upstate",
    name: "Shooting Club Upstate",
    description: "Club de tir privé dans les montagnes Catskills",
    categoryId: "activities",
    price: { from: 800, currency: "USD", unit: "person" },
    images: [],
    features: [
      "Armes de collection",
      "Instructeur expert",
      "Lunch gastronomique",
    ],
    duration: "Journée complète",
    capacity: 8,
    available: true,
    unsplashKeywords: [
      "upstate-shooting",
      "catskills-mountains",
      "private-club",
      "firearms",
    ],
  },
  {
    id: "ny-limousine-tour",
    name: "Limousine Manhattan Tour",
    description: "Tour privé de Manhattan en limousine de luxe",
    categoryId: "activities",
    price: { from: 400, currency: "USD", unit: "hour" },
    images: [],
    features: ["Guide privé", "Champagne service", "Arrêts personnalisés"],
    duration: "Tour personnalisé",
    capacity: 8,
    available: true,
    unsplashKeywords: [
      "manhattan-limousine",
      "nyc-tour",
      "luxury-sightseeing",
      "times-square",
    ],
  },

  // Événementiels
  {
    id: "ny-rooftop-manhattan",
    name: "Rooftop Exclusif Manhattan",
    description: "Rooftop privé avec vue Empire State Building",
    categoryId: "events",
    price: { from: 60000, currency: "USD", unit: "event" },
    images: [],
    features: ["Vue 360° Manhattan", "Service traiteur étoilé", "Bar premium"],
    duration: "Soirée privée",
    capacity: 150,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "manhattan-rooftop",
      "empire-state-view",
      "nyc-skyline",
      "exclusive-event",
    ],
  },
  {
    id: "ny-restaurant-michelin",
    name: "Restaurant Michelin Privatisé",
    description: "Restaurant 3 étoiles Michelin en privatisation",
    categoryId: "events",
    price: { from: 45000, currency: "USD", unit: "event" },
    images: [],
    features: ["Chef 3 étoiles", "Menu dégustation", "Service impeccable"],
    duration: "Dîner gastronomique",
    capacity: 40,
    available: true,
    isExclusive: true,
    unsplashKeywords: [
      "michelin-restaurant",
      "fine-dining",
      "nyc-gastronomy",
      "luxury-dining",
    ],
  },
];

// Données des destinations
export const destinations: Destination[] = [
  {
    id: "los-angeles",
    name: "Los Angeles",
    description: "Ville des anges où le luxe rencontre le glamour hollywoodien",
    tagline: "Hollywood Glamour & Pacific Dreams",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    heroImage: unsplashUrl([
      "los-angeles",
      "hollywood-sign",
      "sunset-boulevard",
      "luxury",
    ]),
    gallery: [],
    services: losAngelesServices,
    atmosphere: "Élégance décontractée avec une touche de glamour hollywoodien",
    highlights: [
      "Hollywood Sign",
      "Beverly Hills",
      "Malibu Beaches",
      "Sunset Strip",
    ],
    bestSeason: "Toute l'année - Climat méditerranéen",
    timeZone: "PST (UTC-8)",
    unsplashKeywords: [
      "los-angeles",
      "hollywood",
      "beverly-hills",
      "malibu",
      "sunset",
    ],
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    description:
      "Capital mondiale du divertissement et des expériences extrêmes",
    tagline: "Sin City & Extreme Experiences",
    coordinates: { lat: 36.1699, lng: -115.1398 },
    heroImage: unsplashUrl(["las-vegas", "strip", "neon-lights", "casino"]),
    gallery: [],
    services: lasVegasServices,
    atmosphere: "Énergie électrisante 24h/24 avec un goût pour l'extrême",
    highlights: [
      "The Strip",
      "Bellagio Fountains",
      "Desert Adventures",
      "World-class Shows",
    ],
    bestSeason: "Automne et Printemps - Éviter l'été caniculaire",
    timeZone: "PST (UTC-8)",
    unsplashKeywords: ["las-vegas", "strip", "casino", "neon", "desert"],
  },
  {
    id: "miami",
    name: "Miami",
    description: "Paradis tropical où Art Déco rencontre le luxe moderne",
    tagline: "Tropical Luxury & Art Deco Vibes",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    heroImage: unsplashUrl(["miami", "south-beach", "art-deco", "ocean-drive"]),
    gallery: [],
    services: miamiServices,
    atmosphere: "Ambiance tropicale sophistiquée avec une énergie latine",
    highlights: [
      "South Beach",
      "Art Deco District",
      "Biscayne Bay",
      "Florida Keys",
    ],
    bestSeason: "Novembre à Avril - Éviter la saison des ouragans",
    timeZone: "EST (UTC-5)",
    unsplashKeywords: [
      "miami",
      "south-beach",
      "art-deco",
      "biscayne-bay",
      "tropical",
    ],
  },
  {
    id: "new-york",
    name: "New York",
    description: "Métropole ultime où sophistication et énergie se rencontrent",
    tagline: "Urban Sophistication & Endless Possibilities",
    coordinates: { lat: 40.7128, lng: -74.006 },
    heroImage: unsplashUrl([
      "new-york",
      "manhattan",
      "central-park",
      "skyline",
    ]),
    gallery: [],
    services: newYorkServices,
    atmosphere: "Sophistication urbaine avec un rythme effréné unique",
    highlights: [
      "Central Park",
      "Times Square",
      "Brooklyn Bridge",
      "Statue of Liberty",
    ],
    bestSeason: "Printemps et Automne - Quatre saisons distinctes",
    timeZone: "EST (UTC-5)",
    unsplashKeywords: [
      "new-york",
      "manhattan",
      "skyline",
      "central-park",
      "urban",
    ],
  },
];

// Fonction utilitaire pour obtenir une destination par ID
export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find((dest) => dest.id === id);
};

// Fonction utilitaire pour obtenir les services par catégorie pour une destination
export const getServicesByCategory = (
  destinationId: string
): Record<string, Service[]> => {
  const destination = getDestinationById(destinationId);
  if (!destination) return {};

  const servicesByCategory: Record<string, Service[]> = {};

  destination.services.forEach((service) => {
    if (!servicesByCategory[service.categoryId]) {
      servicesByCategory[service.categoryId] = [];
    }
    servicesByCategory[service.categoryId].push(service);
  });

  return servicesByCategory;
};

// Fonction utilitaire pour obtenir un service par ID
export const getServiceById = (
  serviceId: string
): { service: Service; destination: Destination } | undefined => {
  for (const destination of destinations) {
    const service = destination.services.find((s) => s.id === serviceId);
    if (service) {
      return { service, destination };
    }
  }
  return undefined;
};
