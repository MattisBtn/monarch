export const useRealTime = () => {
  // Map pour stocker les heures par timezone
  const currentTimes = ref<Record<string, string>>({});

  // Formater l'heure pour un timezone donné
  const formatTimeForTimezone = (timezone: string): string => {
    try {
      const now = new Date();
      return new Intl.DateTimeFormat("fr-FR", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
    } catch (error) {
      console.warn(`Invalid timezone: ${timezone}`);
      return "--:--";
    }
  };

  // Obtenir l'heure actuelle pour un timezone
  const getCurrentTime = (timezone: string): string => {
    return formatTimeForTimezone(timezone);
  };

  // Mettre à jour toutes les heures
  const updateAllTimes = (timezones: string[]) => {
    timezones.forEach((timezone) => {
      currentTimes.value[timezone] = formatTimeForTimezone(timezone);
    });
  };

  // Démarrer la mise à jour automatique
  const startRealTimeUpdate = (timezones: string[]) => {
    // Mise à jour initiale
    updateAllTimes(timezones);

    // Mise à jour toutes les 30 secondes
    const interval = setInterval(() => {
      updateAllTimes(timezones);
    }, 30000);

    // Nettoyer l'interval quand le composable est détruit
    onUnmounted(() => {
      clearInterval(interval);
    });

    return interval;
  };

  // Obtenir l'heure réactive pour un timezone
  const getReactiveTime = (timezone: string) => {
    return computed(
      () => currentTimes.value[timezone] || getCurrentTime(timezone)
    );
  };

  return {
    currentTimes: readonly(currentTimes),
    getCurrentTime,
    getReactiveTime,
    startRealTimeUpdate,
    updateAllTimes,
  };
};
