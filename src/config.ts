const E164_PATTERN = /^[1-9]\d{7,14}$/;

const logConfigError = (message: string): void => {
  console.error(`[appConfig] ${message}`);
};

const normalizeEnquiryPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  return E164_PATTERN.test(digits) ? digits : '';
};

const resolveEnquiryPhoneNumber = (): string => {
  const runtimeNumber = window.APP_CONFIG?.enquiryPhoneNumber;
  if (runtimeNumber) {
    const normalized = normalizeEnquiryPhoneNumber(runtimeNumber);
    if (normalized) return normalized;
    logConfigError(
      `Invalid enquiryPhoneNumber "${runtimeNumber}" in runtime config. Use an international number, digits only, with country code.`,
    );
    return '';
  }

  const devNumber = import.meta.env.VITE_ENQUIRY_PHONE_NUMBER;
  if (devNumber) {
    const normalized = normalizeEnquiryPhoneNumber(devNumber);
    if (normalized) return normalized;
    logConfigError(
      `Invalid VITE_ENQUIRY_PHONE_NUMBER "${devNumber}" in .env. Use an international number, digits only, with country code.`,
    );
    return '';
  }

  logConfigError(
    'Enquiry phone number is not configured. Set window.APP_CONFIG.enquiryPhoneNumber in public/config.js ' +
      '(see public/config.js.example) for production, or VITE_ENQUIRY_PHONE_NUMBER in .env for development.',
  );
  return '';
};

export const getEnquiryPhoneNumber = (): string => resolveEnquiryPhoneNumber();

export const isEnquiryPhoneConfigured = (): boolean => getEnquiryPhoneNumber() !== '';

export const getWhatsAppUrl = (message?: string): string => {
  const phone = getEnquiryPhoneNumber();
  if (!phone) return '';
  const url = `https://wa.me/${phone}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
};

export const formatEnquiryPhoneNumber = (): string => {
  const phone = getEnquiryPhoneNumber();
  if (!phone) return '';
  const countryCode = phone.slice(0, 2);
  const nationalNumber = phone.slice(2);
  const grouped = nationalNumber.replace(/\d{4}(?!$)/g, '$& ');
  return `+${countryCode} ${grouped}`;
};
