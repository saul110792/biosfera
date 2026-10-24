import { business } from './business';

// PENDIENTE: reemplazar los logos de la plantilla por el logo de Biosfera (versión clara y oscura)
export const headerData = {
  logo: '/assets/img/brand_logo_1.svg',
  logoDark: '/assets/img/logo_2.svg',
  logoUrl: '/',
  menuItems: [
    { label: 'NOSOTROS', href: '/nosotros' },
    { label: 'SERVICIOS', href: '/servicios' },
    { label: 'ESPACIOS', href: '/espacios' },
    {
      label: 'MÁS',
      href: '/contacto',
      children: [
        { label: 'GALERÍA', href: '/galeria' },
        { label: 'BLOG', href: '/blog' },
        { label: 'PREGUNTAS FRECUENTES', href: '/preguntas-frecuentes' },
        { label: 'CONTACTO', href: '/contacto' },
      ],
    },
  ],
};

export const footerData = {
  logo: '/assets/img/footer_logo.svg',
  logoAlt: '/assets/img/footer_logo_2.svg',
  newsletterText: `Control de plagas y sanitización <br /> en ${business.coverage}.`,
  newsletterPlaceholder: 'Escribe tu duda y te respondemos por WhatsApp...',
  menus: [
    {
      title: 'SERVICIOS',
      links: [
        { label: 'FUMIGACIÓN DE CASAS', url: '/servicios/fumigacion-de-casas' },
        { label: 'JARDINES', url: '/servicios/control-de-plagas-en-jardines' },
        { label: 'BODEGAS', url: '/servicios/fumigacion-de-bodegas' },
        { label: 'ROEDORES', url: '/servicios/control-de-roedores' },
      ],
    },
    {
      title: 'ENLACES',
      links: [
        { label: 'NOSOTROS', url: '/nosotros' },
        { label: 'ESPACIOS', url: '/espacios' },
        { label: 'GALERÍA', url: '/galeria' },
        { label: 'BLOG', url: '/blog' },
      ],
    },
    {
      title: 'AYUDA',
      links: [
        { label: 'PREGUNTAS FRECUENTES', url: '/preguntas-frecuentes' },
        { label: 'CÓMO PREPARAR TU CASA', url: '/blog/como-preparar-tu-casa-para-una-fumigacion' },
        { label: 'ZONAS DE SERVICIO', url: '/contacto' },
        { label: 'CONTACTO', url: '/contacto' },
      ],
    },
  ],
  copyright: `BIOSFERA © ${new Date().getFullYear()}. TODOS LOS DERECHOS RESERVADOS.`,
  bottomLinks: [
    { label: 'PREGUNTAS FRECUENTES', url: '/preguntas-frecuentes' },
    { label: 'CONTACTO', url: '/contacto' },
  ],
};
