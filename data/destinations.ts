import type { Destination } from "~/types";

// Fonction utilitaire pour générer des URLs Unsplash
const unsplashUrl = (
  keywords: string[],
  width = 1200,
  height = 800
): string => {
  const query = keywords.join(",");
  return `https://images.unsplash.com/${width}x${height}/?${query}`;
};

// Services par destination - Structure simplifiée
const destinationServices = {
  "los-angeles": {
    locations: [
      "services.locations.luxury_villa",
      "services.locations.supercar",
      "services.locations.private_yacht",
      "services.locations.private_jet",
    ],
    events: [
      "services.events.nightclub",
      "services.events.restaurant",
      "services.events.yacht_party",
    ],
  },
  "las-vegas": {
    locations: [
      "services.locations.luxury_limousine",
      "services.locations.private_helicopter",
    ],
    events: [
      "services.events.nightclub",
      "services.events.restaurant",
      "services.events.beach_club",
    ],
  },
  miami: {
    locations: [
      "services.locations.luxury_villa",
      "services.locations.luxury_vehicle",
      "services.locations.private_yacht",
      "services.locations.private_jet",
    ],
    activities: ["services.activities.jet_ski"],
    events: [
      "services.events.nightclub",
      "services.events.restaurant",
      "services.events.yacht_party",
    ],
  },
  "new-york": {
    locations: [
      "services.locations.manhattan_penthouse",
      "services.locations.luxury_van",
      "services.locations.private_helicopter",
    ],
    events: ["services.events.nightclub", "services.events.restaurant"],
  },
};

// Données des destinations
export const destinations: Destination[] = [
  {
    id: "los-angeles",
    name: "Los Angeles",
    nameKey: "destinations.los_angeles.name",
    descriptionKey: "destinations.los_angeles.description",
    taglineKey: "destinations.los_angeles.tagline",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    heroImage: unsplashUrl([
      "los-angeles",
      "hollywood-sign",
      "sunset-boulevard",
      "luxury",
    ]),
    services: destinationServices["los-angeles"],
    atmosphereKey: "destinations.los_angeles.atmosphere",
    highlightsKey: "destinations.los_angeles.highlights",
    bestSeasonKey: "destinations.los_angeles.best_season",
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
    nameKey: "destinations.las_vegas.name",
    descriptionKey: "destinations.las_vegas.description",
    taglineKey: "destinations.las_vegas.tagline",
    coordinates: { lat: 36.1699, lng: -115.1398 },
    heroImage: unsplashUrl(["las-vegas", "strip", "neon-lights", "casino"]),
    services: destinationServices["las-vegas"],
    atmosphereKey: "destinations.las_vegas.atmosphere",
    highlightsKey: "destinations.las_vegas.highlights",
    bestSeasonKey: "destinations.las_vegas.best_season",
    timeZone: "PST (UTC-8)",
    unsplashKeywords: ["las-vegas", "strip", "casino", "neon", "desert"],
  },
  {
    id: "miami",
    name: "Miami",
    nameKey: "destinations.miami.name",
    descriptionKey: "destinations.miami.description",
    taglineKey: "destinations.miami.tagline",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    heroImage: unsplashUrl(["miami", "south-beach", "art-deco", "ocean-drive"]),
    services: destinationServices["miami"],
    atmosphereKey: "destinations.miami.atmosphere",
    highlightsKey: "destinations.miami.highlights",
    bestSeasonKey: "destinations.miami.best_season",
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
    nameKey: "destinations.new_york.name",
    descriptionKey: "destinations.new_york.description",
    taglineKey: "destinations.new_york.tagline",
    coordinates: { lat: 40.7128, lng: -74.006 },
    heroImage: unsplashUrl([
      "new-york",
      "manhattan",
      "central-park",
      "skyline",
    ]),
    services: destinationServices["new-york"],
    atmosphereKey: "destinations.new_york.atmosphere",
    highlightsKey: "destinations.new_york.highlights",
    bestSeasonKey: "destinations.new_york.best_season",
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
  destinationId: string,
  categoryId: string
): string[] => {
  const destination = getDestinationById(destinationId);
  if (!destination || !destination.services) return [];

  return (
    destination.services[categoryId as keyof typeof destination.services] || []
  );
};

// Fonction utilitaire pour obtenir toutes les catégories pour une destination
export const getUniqueCategories = (destinationId: string): string[] => {
  const destination = getDestinationById(destinationId);
  if (!destination || !destination.services) return [];

  return Object.keys(destination.services);
};
