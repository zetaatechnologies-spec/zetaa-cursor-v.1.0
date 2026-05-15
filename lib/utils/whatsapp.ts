const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

export function getWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function getServiceInquiryMessage(serviceName: string) {
  return `Hi ZETAA Technologies! I'm interested in ${serviceName}. Please share more details.`;
}

export function getBookingInquiryMessage(bookingId: string) {
  return `Hi ZETAA Technologies! I have a query about my booking #${bookingId.slice(0, 8)}.`;
}
