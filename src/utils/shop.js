/**
 * Shop helpers — pricing + WhatsApp order links.
 *
 * The WhatsApp number is injected at build time via VITE_WHATSAPP_NUMBER
 * and is never committed to the repository. When unset, the links come
 * back empty and the UI falls back to Instagram.
 */
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || "").replace(
  /\D/g,
  "",
);

export const INSTAGRAM_URL =
  (import.meta.env.VITE_INSTAGRAM_URL || "") ||
  "https://www.instagram.com/BlueAoi_HandmadeBracelet";

export const formatPrice = (price) => `HK$${Number(price ?? 0).toLocaleString("en-HK")}`;

const toWaLink = (message) =>
  WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : "";

/** Pre-filled order message for a product → opens WhatsApp chat. */
export const orderOnWhatsApp = (product) =>
  toWaLink(
    `Hi Blue Aoi 🎀 I'd like to order ${product.id} "${product.name}" — ${formatPrice(product.price)}. Is it still available?`,
  );

/** General enquiry link (Buy Now page). */
export const chatOnWhatsApp = () =>
  toWaLink("Hi Blue Aoi 🎀 I'd like to ask about your handmade bracelets!");