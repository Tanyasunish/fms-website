import { getWhatsAppUrl } from '@/config';

export const openWhatsApp = (purpose: string) => {
  const message = `Hello FMS Team, I am reaching out regarding: *${purpose}*. Please guide me on the next steps.`;
  const url = getWhatsAppUrl(message);
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const orderProductWhatsApp = (title: string, price: string) => {
  const message = `Hello FMS Team, I would like to order: *${title}* (${price}). Please let me know the availability and payment details.`;
  const url = getWhatsAppUrl(message);
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
};
