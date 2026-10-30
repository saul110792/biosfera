import { business, socialLinks } from './business';

export const headerData = {
  logoUrl: '/',
  menuItems: [
    { label: 'NOSOTROS', href: '/nosotros' },
    { label: 'SERVICIOS', href: '/servicios' },
    { label: 'PROMOCIONES', href: '/promociones' },
    {
      label: 'MÁS',
      href: '/contacto',
      children: [
        { label: 'SECTORES', href: '/sectores' },
        { label: 'BLOG', href: '/blog' },
        { label: 'PREGUNTAS FRECUENTES', href: '/preguntas-frecuentes' },
        { label: 'CONTACTO', href: '/contacto' },
      ],
    },
  ],
};

export const footerData = {
  newsletterText: `Manejo de fauna nociva y desinfección <br /> en la ${business.coverage}.`,
  newsletterPlaceholder: 'Escribe tu duda y te respondemos por WhatsApp...',
  menus: [
    {
      title: 'SERVICIOS',
      links: [
        { label: 'CUCARACHAS', url: '/servicios/cucarachas' },
        { label: 'CHINCHES', url: '/servicios/chinches' },
        { label: 'ROEDORES', url: '/servicios/control-de-roedores' },
        { label: 'DIVISIÓN VETERINARIA', url: '/servicios/division-veterinaria' },
      ],
    },
    {
      title: 'ENLACES',
      links: [
        { label: 'NOSOTROS', url: '/nosotros' },
        { label: 'SECTORES', url: '/sectores' },
        { label: 'PROMOCIONES', url: '/promociones' },
        { label: 'BLOG', url: '/blog' },
      ],
    },
    {
      title: 'AYUDA',
      links: [
        { label: 'PREGUNTAS FRECUENTES', url: '/preguntas-frecuentes' },
        { label: 'CÓMO PREPARAR TU CASA', url: '/blog/como-preparar-tu-casa-antes-del-servicio' },
        { label: 'SOLICITAR VISITA', url: '/contacto' },
        { label: 'CONTACTO', url: '/contacto' },
      ],
    },
  ],
  copyright: `BIOSFERA CONTROL © ${new Date().getFullYear()}. TODOS LOS DERECHOS RESERVADOS.`,
  bottomLinks: socialLinks,
};
