const FMS_PHONE = "919847984746";

export const openWhatsApp = (purpose: string) => {
  const message = `Hello FMS Team, I am reaching out regarding: *${purpose}*. Please guide me on the next steps.`;
  const url = `https://wa.me/${FMS_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const orderProductWhatsApp = (title: string, price: string) => {
  const message = `Hello FMS Team, I would like to order: *${title}* (${price}). Please let me know the availability and payment details.`;
  const url = `https://wa.me/${FMS_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};