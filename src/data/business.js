// Datos del negocio en un solo lugar (fuente: brief de proyecto de Ruth López, v2 oct 2026).
// PENDIENTE: confirmar con Ruth que el teléfono y el correo pueden publicarse (en el brief el teléfono viene como personal).
export const business = {
  name: 'Biosfera',
  brandName: 'Biosfera Control',
  tagline: 'Manejo de fauna nociva y desinfección',
  coverage: 'CDMX y Área Metropolitana',
  focusArea: 'con enfoque en el oriente de la Ciudad de México',
  experience: 'Más de 20 años',
  phone: '56 1609 0126',
  whatsapp: '525616090126',
  email: 'lopez.ruth.biosfera@gmail.com',
  hours: '8:00 a 18:00 h',
  catalogPdf: '', // PENDIENTE: ruta del PDF en /public (por ejemplo /catalogo-biosfera.pdf)
};

// PENDIENTE: URLs de los perfiles; mientras estén vacías se enlaza a la página principal de cada red
export const socialLinks = [
  { label: 'INSTAGRAM', url: '', fallback: 'https://www.instagram.com/' },
  { label: 'FACEBOOK', url: '', fallback: 'https://www.facebook.com/' },
  { label: 'TIKTOK', url: '', fallback: 'https://www.tiktok.com/' },
].map((s) => ({ label: s.label, url: s.url || s.fallback }));

export const defaultWhatsappMessage = 'Hola Biosfera, me gustaría solicitar una cotización o asesoría.';

export const whatsappLink = (message = defaultWhatsappMessage) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

// Si aún no hay PDF, el botón de catálogo pide el catálogo por WhatsApp
export const catalogLink = () =>
  business.catalogPdf || whatsappLink('Hola Biosfera, ¿me pueden compartir su catálogo de servicios?');

// Zonas de referencia: enfoque en el oriente de la CDMX, pero se atiende toda la ciudad y el Área Metropolitana
export const serviceZones = {
  cdmx: ['Iztacalco', 'Iztapalapa', 'Venustiano Carranza', 'Gustavo A. Madero', 'Tláhuac', 'Benito Juárez', 'Coyoacán'],
  edomex: ['Nezahualcóyotl', 'Los Reyes La Paz', 'Chimalhuacán', 'Ecatepec', 'Chalco', 'Texcoco'],
};
