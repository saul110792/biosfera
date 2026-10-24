// Datos de contacto del negocio en un solo lugar.
// PENDIENTE: los valores marcados deben reemplazarse con los datos reales antes de publicar.
export const business = {
  name: 'Biosfera',
  tagline: 'Control de plagas y fumigación',
  baseZone: 'Pantitlán, Iztacalco, CDMX',
  coverage: 'CDMX y Estado de México',
  phone: '55 0000 0000', // PENDIENTE
  whatsapp: '525500000000', // PENDIENTE: 52 + número a 10 dígitos, sin espacios
  email: 'contacto@tudominio.com', // PENDIENTE
  hours: 'Lunes a sábado, 8:00 a 19:00 h', // PENDIENTE: confirmar horario
  mapSrc: 'https://www.google.com/maps?q=Pantitl%C3%A1n,+Iztacalco,+Ciudad+de+M%C3%A9xico&output=embed',
};

export const defaultWhatsappMessage = 'Hola Biosfera, quiero cotizar un servicio de control de plagas.';

export const whatsappLink = (message = defaultWhatsappMessage) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

// Zonas que se mencionan como referencia; el servicio llega a cualquier punto de CDMX y Edomex
export const serviceZones = {
  cdmx: ['Iztacalco', 'Venustiano Carranza', 'Iztapalapa', 'Gustavo A. Madero', 'Benito Juárez', 'Coyoacán'],
  edomex: ['Nezahualcóyotl', 'Los Reyes La Paz', 'Chimalhuacán', 'Ecatepec', 'Chalco', 'Texcoco'],
};
