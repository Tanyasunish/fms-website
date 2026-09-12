const FMS_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;

const getPhoneOrWarn = (): string => {
  if (!FMS_PHONE) {
    console.error(
      "WhatsApp phone number is missing! Please set VITE_WHATSAPP_PHONE in your .env file."
    );
    return "";
  }
  return FMS_PHONE;
};

export const openWhatsApp = (purpose: string) => {
  const phone = getPhoneOrWarn();
  if (!phone) return;

  const message = `Hello FMS Team, I am reaching out regarding: *${purpose}*. Please guide me on the next steps.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const orderProductWhatsApp = (title: string, price: string) => {
  const phone = getPhoneOrWarn();
  if (!phone) return;

  const message = `Hello FMS Team, I would like to order: *${title}* (${price}). Please let me know the availability and payment details.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
