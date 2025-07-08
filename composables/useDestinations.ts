import { destinations as staticDestinations } from "~/data/destinations";
import type { Destination } from "~/types";

type TranslatedDestinationData = {
  name: string;
  description: string;
  tagline: string;
  highlights: string[];
  timeZone: string;
};

type TranslationData = {
  [locale: string]: {
    [destinationId: string]: TranslatedDestinationData;
  };
};

export const useDestinations = () => {
  const { locale } = useI18n();

  // Fonction pour obtenir une destination traduite
  const getTranslatedDestination = (
    destinationId: string
  ): Destination | undefined => {
    const staticDestination = staticDestinations.find(
      (d) => d.id === destinationId
    );
    if (!staticDestination) return undefined;

    // Accéder directement aux données de traduction selon le locale
    const translationData: TranslationData = {
      fr: {
        "los-angeles": {
          name: "Los Angeles",
          description:
            "Ville des anges où le luxe rencontre le glamour hollywoodien",
          tagline: "Hollywood Glamour & Pacific Dreams",
          highlights: [
            "Hollywood Sign",
            "Beverly Hills",
            "Malibu Beaches",
            "Sunset Strip",
          ],
          timeZone: "PST (UTC-8)",
        },
        "las-vegas": {
          name: "Las Vegas",
          description:
            "Capitale mondiale du divertissement et des expériences extrêmes",
          tagline: "Sin City & Extreme Experiences",
          highlights: [
            "The Strip",
            "Bellagio Fountains",
            "Desert Adventures",
            "World-class Shows",
          ],
          timeZone: "PST (UTC-8)",
        },
        miami: {
          name: "Miami",
          description: "Paradis tropical où Art Déco rencontre le luxe moderne",
          tagline: "Tropical Luxury & Art Deco Vibes",
          highlights: [
            "South Beach",
            "Art Deco District",
            "Biscayne Bay",
            "Florida Keys",
          ],
          timeZone: "EST (UTC-5)",
        },
        "new-york": {
          name: "New York",
          description:
            "Métropole ultime où sophistication et énergie se rencontrent",
          tagline: "Urban Sophistication & Endless Possibilities",
          highlights: [
            "Central Park",
            "Times Square",
            "Brooklyn Bridge",
            "Statue of Liberty",
          ],
          timeZone: "EST (UTC-5)",
        },
      },
      en: {
        "los-angeles": {
          name: "Los Angeles",
          description: "City of angels where luxury meets Hollywood glamour",
          tagline: "Hollywood Glamour & Pacific Dreams",
          highlights: [
            "Hollywood Sign",
            "Beverly Hills",
            "Malibu Beaches",
            "Sunset Strip",
          ],
          timeZone: "PST (UTC-8)",
        },
        "las-vegas": {
          name: "Las Vegas",
          description: "World capital of entertainment and extreme experiences",
          tagline: "Sin City & Extreme Experiences",
          highlights: [
            "The Strip",
            "Bellagio Fountains",
            "Desert Adventures",
            "World-class Shows",
          ],
          timeZone: "PST (UTC-8)",
        },
        miami: {
          name: "Miami",
          description: "Tropical paradise where Art Deco meets modern luxury",
          tagline: "Tropical Luxury & Art Deco Vibes",
          highlights: [
            "South Beach",
            "Art Deco District",
            "Biscayne Bay",
            "Florida Keys",
          ],
          timeZone: "EST (UTC-5)",
        },
        "new-york": {
          name: "New York",
          description:
            "Ultimate metropolis where sophistication and energy meet",
          tagline: "Urban Sophistication & Endless Possibilities",
          highlights: [
            "Central Park",
            "Times Square",
            "Brooklyn Bridge",
            "Statue of Liberty",
          ],
          timeZone: "EST (UTC-5)",
        },
      },
      es: {
        "los-angeles": {
          name: "Los Ángeles",
          description:
            "Ciudad de los ángeles donde el lujo se encuentra con el glamour de Hollywood",
          tagline: "Hollywood Glamour & Pacific Dreams",
          highlights: [
            "Hollywood Sign",
            "Beverly Hills",
            "Playas de Malibu",
            "Sunset Strip",
          ],
          timeZone: "PST (UTC-8)",
        },
        "las-vegas": {
          name: "Las Vegas",
          description:
            "Capital mundial del entretenimiento y las experiencias extremas",
          tagline: "Sin City & Extreme Experiences",
          highlights: [
            "The Strip",
            "Fuentes del Bellagio",
            "Aventuras del Desierto",
            "Espectáculos de Clase Mundial",
          ],
          timeZone: "PST (UTC-8)",
        },
        miami: {
          name: "Miami",
          description:
            "Paraíso tropical donde Art Déco se encuentra con el lujo moderno",
          tagline: "Tropical Luxury & Art Deco Vibes",
          highlights: [
            "South Beach",
            "Distrito Art Déco",
            "Bahía Biscayne",
            "Cayos de Florida",
          ],
          timeZone: "EST (UTC-5)",
        },
        "new-york": {
          name: "Nueva York",
          description:
            "Metrópolis definitiva donde la sofisticación y la energía se encuentran",
          tagline: "Urban Sophistication & Endless Possibilities",
          highlights: [
            "Central Park",
            "Times Square",
            "Puente de Brooklyn",
            "Estatua de la Libertad",
          ],
          timeZone: "EST (UTC-5)",
        },
      },
    };

    const currentLocale = locale.value;
    const translated = translationData[currentLocale]?.[destinationId];

    if (!translated) return staticDestination;

    return {
      ...staticDestination,
      name: translated.name,
      description: translated.description,
      tagline: translated.tagline,
      highlights: translated.highlights,
      timeZone: translated.timeZone,
    };
  };

  // Fonction pour obtenir toutes les destinations traduites
  const getTranslatedDestinations = (): Destination[] => {
    return staticDestinations.map((destination) => {
      const translated = getTranslatedDestination(destination.id);
      return translated || destination;
    });
  };

  // Fonction pour obtenir une destination par ID (traduite)
  const getDestinationById = (id: string): Destination | undefined => {
    return getTranslatedDestination(id);
  };

  return {
    destinations: computed(() => getTranslatedDestinations()),
    getDestinationById,
    getTranslatedDestination,
  };
};
