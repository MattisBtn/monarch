import { destinations as staticDestinations } from "~/data/destinations";
import type { Destination } from "~/types";

export const useDestinations = () => {
  const { t } = useI18n();

  // Fonction pour obtenir une destination traduite
  const getTranslatedDestination = (
    destinationId: string
  ): Destination | undefined => {
    const staticDestination = staticDestinations.find(
      (d) => d.id === destinationId
    );
    if (!staticDestination) return undefined;

    // Retourner la destination avec ses clés de traduction
    return staticDestination;
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
    getTranslatedDestination,
    getTranslatedDestinations,
    getDestinationById,
  };
};
