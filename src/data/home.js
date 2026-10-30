import { business, whatsappLink } from './business';
import { getService, serviceUrl } from './services';
import { getSpace } from './spaces';
import { methodData, processSteps } from './pages';

// Servicios y sectores destacados en el inicio
const featuredServices = ['cucarachas', 'chinches', 'control-de-roedores', 'division-veterinaria'].map(getService);
const featuredSpaces = ['restaurantes', 'consultorios', 'pequenas-industrias', 'division-veterinaria'].map(getSpace);

export const homeData = {
  hero: {
    title: 'BIOSFERA <b>MANEJO DE FAUNA NOCIVA</b>',
    subtitle: `Control profesional de plagas urbanas y desinfección en la ${business.coverage}, con Manejo Integrado de Plagas y el menor impacto ambiental posible.`,
    primaryBtn: { text: 'Solicitar cotización', url: whatsappLink() },
    secondaryBtn: { text: 'Ver servicios', url: '/servicios' },
    funfact: { number: '+20 AÑOS', text: 'De experiencia familiar' },
    box: {
      title: 'Menos químicos',
      subtitle: 'Métodos físicos primero y aplicaciones mínimas, seguras para niños, adultos mayores y mascotas.',
      link: '/nosotros',
    },
    // PENDIENTE: fotos de banco (Unsplash); reemplazar por fotos reales del equipo trabajando
    backgrounds: ['/assets/img/bio/hero-casa.jpg', '/assets/img/bio/hero-jardin.jpg', '/assets/img/bio/hero-porche.jpg'],
  },
  values: {
    title: 'QUÉ HACEMOS',
    items: [
      { label: 'Manejo de fauna nociva', number: '01' },
      { label: 'Manejo Integrado de Plagas', number: '02' },
      { label: 'Desinfección de espacios', number: '03' },
    ],
  },
  method: methodData,
  howItWorks: {
    title: 'ASÍ ES NUESTRO <span>PROCESO</span>',
    subtitle: 'CÓMO FUNCIONA',
    steps: processSteps,
  },
  services: {
    title: 'Especies que controlamos',
    btnText: ' Ver todos los servicios',
    btnUrl: '/servicios',
    service: featuredServices.map((s) => ({
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
        text: 'Coloca <span>rejillas</span> en coladeras y registros: en temporada de lluvias son la principal entrada de <span>cucarachas</span> y <span>roedores</span> a tu casa.',
        name: 'CONSEJO 01',
        designation: 'Drenaje y coladeras',
      },
      {
        text: 'Revisa las <span>costuras del colchón</span> y la cabecera al volver de un viaje: es la forma más común de llevar <span>chinches</span> a casa.',
        name: 'CONSEJO 02',
        designation: 'Recámaras',
      },
      {
        text: 'Guarda los alimentos en <span>recipientes cerrados</span> y saca la basura todos los días para no darle a las plagas una razón para <span>quedarse</span>.',
        name: 'CONSEJO 03',
        designation: 'Cocina',
      },
    ],
  },
  spaces: {
    title: 'SECTORES QUE <br /> <span>ATENDEMOS</span>',
    subtitle: 'SECTORES',
    labels: { name: 'SECTOR', location: 'PLAGAS FRECUENTES' },
    nextLabel: 'SIGUIENTE',
    slides: featuredSpaces.map((s) => ({
      image: s.image,
      name: s.title,
      location: s.pests,
      description: s.description,
    })),
  },
  cta: {
    title: '¿NECESITAS ASESORÍA? <br /> TE AYUDAMOS',
    btnText: 'Solicitar cotización',
    btnUrl: whatsappLink(),
    backgroundImage: '/assets/img/bio/cocina-luminosa.jpg',
  },
};
