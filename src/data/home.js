import { business, whatsappLink } from './business';
import { services, serviceUrl } from './services';
import { spaces } from './spaces';

export const homeData = {
  hero: {
    title: 'BIOSFERA <b>CONTROL DE PLAGAS</b>',
    subtitle: `Fumigamos y sanitizamos casas, jardines, bodegas y negocios en ${business.coverage}.`,
    primaryBtn: { text: 'Cotizar por WhatsApp', url: whatsappLink() },
    secondaryBtn: { text: 'Ver servicios', url: '/servicios' },
    funfact: { number: 'CDMX + EDOMEX', text: 'Servicio a domicilio' },
    box: {
      title: 'Desde Pantitlán',
      subtitle: 'Atendemos el oriente de la ciudad y cualquier zona de la CDMX y el Estado de México.',
      link: '/contacto',
    },
    // PENDIENTE: fotos de la plantilla; reemplazar por fotos reales del equipo trabajando
    backgrounds: ['/assets/img/hero_bg.jpg', '/assets/img/hero_bg_4.jpg', '/assets/img/hero_bg_2.jpg'],
  },
  values: {
    title: 'QUÉ HACEMOS',
    items: [
      { label: 'Fumigación y control de plagas', number: '01' },
      { label: 'Control de roedores', number: '02' },
      { label: 'Limpieza y sanitización', number: '03' },
    ],
  },
  features: {
    title: 'PROTEGEMOS <span>TU ESPACIO</span> DE LAS PLAGAS',
    btnText: 'SOLICITA TU COTIZACIÓN',
    btnUrl: '/contacto',
    image: '/assets/img/feature_thumb.jpg',
    items: [
      {
        icon: 'heart',
        title: 'Cuidamos a tu familia',
        text: 'Te indicamos cómo preparar tu espacio y cuánto tiempo esperar para volver a entrar con niños y mascotas.',
      },
      {
        icon: 'link',
        title: 'Diagnóstico primero',
        text: 'Revisamos el lugar para ubicar la plaga y sus refugios antes de aplicar, así tratamos solo donde hace falta.',
      },
      {
        icon: 'layers',
        title: 'Casas, jardines y bodegas',
        text: 'Atendemos desde un departamento hasta una nave industrial, con un plan adaptado a cada espacio.',
      },
      {
        icon: 'circles',
        title: 'Vamos a donde estés',
        text: `Salimos de Pantitlán a cualquier zona de la ${business.coverage}.`,
      },
    ],
  },
  howItWorks: {
    title: 'ASÍ <span>TRABAJAMOS</span> EN CADA SERVICIO',
    subtitle: 'CÓMO FUNCIONA',
    steps: [
      {
        title: '01 | Nos contactas',
        description: 'Escríbenos por WhatsApp con el tipo de espacio, la plaga que ves y, si puedes, algunas fotos.',
      },
      {
        title: '02 | Diagnóstico y cotización',
        description: 'Revisamos la información o el lugar y te damos una cotización clara con el tratamiento recomendado.',
      },
      {
        title: '03 | Aplicación',
        description: 'Realizamos el servicio en el horario acordado, con equipo de protección y siguiendo las indicaciones de cada producto.',
      },
      {
        title: '04 | Seguimiento',
        description: 'Te dejamos recomendaciones de prevención y damos seguimiento para confirmar que la plaga está bajo control.',
      },
    ],
  },
  services: {
    title: 'Servicios',
    btnText: ' Ver todos los servicios',
    btnUrl: '/servicios',
    service: services.slice(0, 4).map((s) => ({
      title: s.cardTitle,
      subtitle: s.summary,
      image: s.cardImage,
      link: serviceUrl(s),
      tags: s.pests.slice(0, 4).map((label) => ({ label, url: serviceUrl(s) })),
    })),
  },
  tips: {
    title: 'CONSEJOS DE PREVENCIÓN',
    testimonials: [
      {
        text: 'Coloca <span>rejillas</span> en coladeras y registros: en temporada de lluvias son la principal entrada de <span>cucarachas</span> y <span>ratas</span> a tu casa.',
        name: 'CONSEJO 01',
        designation: 'Drenaje y coladeras',
      },
      {
        text: 'Vacía cualquier recipiente con <span>agua estancada</span>: macetas, cubetas y llantas son criaderos de <span>mosquitos</span> en pocos días.',
        name: 'CONSEJO 02',
        designation: 'Patios y jardines',
      },
      {
        text: 'Guarda los alimentos en <span>recipientes cerrados</span> y saca la basura todos los días para no darle a las plagas una razón para <span>quedarse</span>.',
        name: 'CONSEJO 03',
        designation: 'Cocina',
      },
    ],
  },
  spaces: {
    title: 'CONOCE LOS <span>ESPACIOS</span> <br /> QUE <span>ATENDEMOS</span>',
    subtitle: 'ESPACIOS',
    labels: { name: 'ESPACIO', location: 'PLAGAS FRECUENTES' },
    nextLabel: 'SIGUIENTE',
    slides: spaces.slice(0, 4).map((s) => ({
      image: s.image,
      name: s.title,
      location: s.pests,
      description: s.description,
    })),
  },
  cta: {
    title: '¿TIENES UNA PLAGA? <br /> TE AYUDAMOS',
    btnText: 'Escríbenos por WhatsApp',
    btnUrl: whatsappLink(),
    backgroundImage: '/assets/img/cta_bg.jpg',
  },
};
