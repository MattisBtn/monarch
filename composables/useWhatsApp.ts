export const useWhatsApp = () => {
  const { t } = useI18n();
  const appConfig = useAppConfig();

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || t("whatsapp.fab.message");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${appConfig.whatsapp.number}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return {
    openWhatsApp,
  };
};
