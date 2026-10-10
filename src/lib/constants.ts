export const WHATSAPP_PHONE = "+91 6377841469";
export const WHATSAPP_RAW = "916377841469";
export const FOUNDER_NAME = "Pariyushna Lunawat";
export const AGENCY_NAME = "STAVAN";
export const AGENCY_TAGLINE = "AI • AUTOMATION • BUSINESS SOLUTIONS";

export const WHATSAPP_DEFAULT_MSG =
  "Hi Stavan, I'd like to discuss an AI/automation solution for my business.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MSG
)}`;

export const getWhatsAppUrlForService = (serviceName: string) => {
  const msg = `Hi Stavan, I'm interested in discussing ${serviceName} for my business.`;
  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(msg)}`;
};
