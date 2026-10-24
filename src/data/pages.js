import { business, serviceZones, whatsappLink } from './business';

export const dreamCardData = {
  backgroundImage: '/assets/img/card_bg.jpg',
  tags: ['Casas', 'Jardines', 'Bodegas', 'Negocios'],
  title: '¿PLAGAS EN TU ESPACIO? <br /> NOSOTROS NOS ENCARGAMOS',
  buttonLink: '/contacto',
};

export const breadcrumbs = (label) => [
  { label: 'Inicio', link: '/' },
  { label, active: true },
];

export const generalFaq = [
  {
    question: '¿La fumigación es segura para niños y mascotas?',
    answer:
      'Usamos productos de uso urbano aplicados según las indicaciones del fabricante. Antes del servicio te decimos cómo preparar tu espacio y cuánto tiempo deben permanecer fuera las personas y las mascotas; al regresar, solo hay que ventilar y seguir las recomendaciones del técnico.',
  },
  {
    question: '¿Cuánto tiempo debo salir de casa?',
    answer:
      'Depende del producto, del método de aplicación y del tamaño del espacio. Normalmente se trata de algunas horas; el técnico te indicará el tiempo exacto para tu caso.',
  },
  {
    question: '¿Qué tengo que hacer antes del servicio?',
    answer:
      'Guarda alimentos y utensilios, despeja las zonas bajo la tarja y detrás de los muebles de cocina, y saca a tus mascotas. Te dejamos una guía completa en nuestro blog: <a href="/blog/como-preparar-tu-casa-para-una-fumigacion">Cómo preparar tu casa antes de una fumigación</a>.',
  },
  {
    question: '¿Cada cuánto conviene fumigar?',
    answer:
      'En casa, una fumigación preventiva cada seis meses suele ser suficiente si no hay infestación. Negocios de alimentos y bodegas necesitan un programa más frecuente, normalmente mensual o bimestral, según el riesgo.',
  },
  {
    question: '¿Atienden fuera de Pantitlán?',
    answer:
      `Sí. Estamos en ${business.baseZone}, pero vamos a cualquier zona de la Ciudad de México y del Estado de México.`,
  },
  {
    question: '¿Cómo puedo cotizar?',
    answer:
      `Escríbenos por <a href="${whatsappLink()}" target="_blank" rel="noopener noreferrer">WhatsApp</a> con el tipo de espacio (casa, jardín, bodega o negocio), los metros aproximados, la plaga que ves y, si puedes, algunas fotos.`,
  },
];

export const businessFaq = [
  {
    question: '¿Pueden trabajar fuera de mi horario de atención?',
    answer:
      'Sí. En negocios y bodegas programamos las visitas en horarios que no interrumpan la atención a tus clientes ni tu operación.',
  },
  {
    question: '¿Qué incluye un programa de control para negocios?',
    answer:
      'Una inspección inicial, el tratamiento de las áreas críticas (cocinas, almacenes, registros), estaciones para roedores cuando hacen falta y visitas periódicas con su reporte.',
  },
  {
    question: '¿Qué norma regula los servicios de control de plagas?',
    answer:
      'En México, la NOM-256-SSA1-2012 establece las condiciones sanitarias que deben cumplir los establecimientos y el personal dedicados a los servicios urbanos de control de plagas mediante plaguicidas.',
  },
  {
    question: '¿Atienden bodegas grandes o naves industriales?',
    answer:
      'Sí. Para espacios grandes hacemos primero una visita de diagnóstico y con ella armamos un programa a la medida del inmueble y su operación.',
  },
];

const galleryItem = (n, title, height) => ({ imgSrc: `/assets/img/work_thumb_${n}.jpg`, title, year: 'Biosfera', height });

export const aboutData = {
  heading: { backgroundImage: '/assets/img/about_heading_bg.jpg', title: 'NOSOTROS', breadcrumbs: breadcrumbs('Nosotros') },
  intro: {
    title: 'CUIDAMOS <br /><span>TU CASA Y TU NEGOCIO</span> <br />DE LAS PLAGAS',
    introduction:
      'Biosfera es una empresa de control de plagas del oriente de la Ciudad de México. Desde Pantitlán atendemos casas, jardines, bodegas y negocios que necesitan una solución segura y bien hecha',
    introduction1:
      'contra cucarachas, roedores, mosquitos y otras plagas. Trabajamos con diagnóstico previo, aplicación dirigida e indicaciones claras para que tu familia, tus clientes y tus mascotas estén protegidos.',
    image: '/assets/img/video_block_bg.jpg',
    cta: { backgroundImage: '/assets/img/cta_bg_3.jpg', btnText: 'Ver servicios', btnUrl: '/servicios' },
  },
  coverage: {
    title: 'COBERTURA',
    items: [
      { label: 'Ciudad de México', number: '01' },
      { label: 'Estado de México', number: '02' },
    ],
  },
  features: {
    title: 'NUESTRA <span>FORMA</span> DE TRABAJAR',
    btnText: 'Cotizar',
    btnUrl: '/contacto',
    image: '/assets/img/feature_thumb.jpg',
    items: [
      {
        icon: 'heart',
        title: 'Seguridad primero',
        text: 'Te explicamos cada paso y los cuidados necesarios para personas y mascotas antes y después del servicio.',
      },
      {
        icon: 'link',
        title: 'Trato directo',
        text: 'Hablas con quien hace el trabajo: resolvemos tus dudas por WhatsApp antes, durante y después.',
      },
      {
        icon: 'layers',
        title: 'Plan para cada espacio',
        text: 'No es lo mismo un departamento que una bodega; adaptamos el tratamiento al lugar y a la plaga.',
      },
      {
        icon: 'circles',
        title: 'Prevención',
        text: 'Además de eliminar la plaga, te decimos qué cambiar para que no regrese.',
      },
    ],
  },
  gallery: {
    subtitle: 'GALERÍA',
    title: 'EN <span>ACCIÓN</span>',
    items: [
      galleryItem(1, 'Áreas verdes', '694px'),
      galleryItem(2, 'Interiores', '287px'),
      galleryItem(3, 'Exteriores', '383px'),
      galleryItem(4, 'Patios', '480px'),
      galleryItem(5, 'Jardines', '190px'),
    ],
  },
};

export const servicesPageData = {
  heading: { backgroundImage: '/assets/img/service_heading_bg.jpg', title: 'SERVICIOS', breadcrumbs: breadcrumbs('Servicios') },
  cta: {
    title: '¿LISTO PARA OLVIDARTE DE LAS PLAGAS?',
    btnText: 'Cotizar por WhatsApp',
    btnUrl: whatsappLink(),
    backgroundImage: '/assets/img/cta_bg_2.jpg',
  },
};

// Contenido común a todas las páginas de detalle de servicio
export const serviceDetailCommon = {
  cta: { backgroundImage: '/assets/img/cta_bg_4.jpg', btnText: 'Cotizar este servicio' },
  howItWorks: {
    title: 'CUATRO PASOS PARA <span>ACABAR</span> CON LA PLAGA',
    subtitle: 'CÓMO FUNCIONA',
    steps: [
      { title: '01 | Contacto', description: 'Nos cuentas qué plaga ves, en qué tipo de espacio y desde cuándo; si puedes, envíanos fotos.' },
      { title: '02 | Diagnóstico', description: 'Revisamos el lugar para ubicar refugios, accesos y el nivel de infestación.' },
      { title: '03 | Tratamiento', description: 'Aplicamos el método adecuado en los puntos clave, con equipo de protección.' },
      { title: '04 | Prevención', description: 'Te dejamos recomendaciones y damos seguimiento para que la plaga no regrese.' },
    ],
  },
  tips: {
    title: 'ANTES Y DESPUÉS DEL SERVICIO',
    items: [
      {
        name: 'ANTES',
        designation: 'Prepara tu espacio',
        text: 'Guarda <span>alimentos</span> y utensilios, despeja las zonas a tratar y saca a tus <span>mascotas</span> antes de que llegue el técnico.',
      },
      {
        name: 'DESPUÉS',
        designation: 'Regreso seguro',
        text: 'Respeta el <span>tiempo de reingreso</span> indicado, <span>ventila</span> bien y lava las superficies donde preparas alimentos.',
      },
      {
        name: 'PREVENCIÓN',
        designation: 'Que no regrese',
        text: 'Sella <span>grietas</span>, coloca rejillas en coladeras y no dejes agua estancada ni basura acumulada.',
      },
    ],
  },
  dreamCard: { backgroundImage: '/assets/img/card_bg_2.jpg' },
};

export const spacesPageData = {
  heading: {
    backgroundImage: '/assets/img/project_heading_bg.jpg',
    title: 'ESPACIOS QUE ATENDEMOS',
    breadcrumbs: breadcrumbs('Espacios'),
  },
  labels: { description: 'DESCRIPCIÓN', outcomes: 'QUÉ INCLUYE' },
  faq: {
    title: 'PREGUNTAS <br /><span>FRECUENTES</span>',
    subtitle: 'F.A.Q',
    image: '/assets/img/faq_img.jpg',
    items: generalFaq.slice(0, 4),
  },
};

export const galleryData = {
  heading: { backgroundImage: '/assets/img/about_heading_bg.jpg', title: 'GALERÍA', breadcrumbs: breadcrumbs('Galería') },
  // PENDIENTE: reemplazar por fotos reales de servicios realizados
  items: [
    galleryItem(1, 'Áreas verdes', '694px'),
    galleryItem(2, 'Interiores', '383px'),
    galleryItem(3, 'Exteriores', '383px'),
    galleryItem(4, 'Patios', '383px'),
    galleryItem(3, 'Exteriores', '287px'),
    galleryItem(2, 'Interiores', '480px'),
    galleryItem(5, 'Jardines', '190px'),
    galleryItem(4, 'Patios', '383px'),
  ],
};

export const faqData = {
  heading: {
    backgroundImage: '/assets/img/about_heading_bg.jpg',
    title: 'PREGUNTAS FRECUENTES',
    breadcrumbs: breadcrumbs('Preguntas frecuentes'),
  },
  sections: [
    { title: 'PREGUNTAS <span>GENERALES</span>', image: '/assets/img/faq_img.jpg', items: generalFaq },
    { title: 'NEGOCIOS Y <span>BODEGAS</span>', image: '/assets/img/faq_img_2.jpg', items: businessFaq },
  ],
};

export const contactData = {
  heading: { backgroundImage: '/assets/img/about_heading_bg.jpg', title: 'CONTACTO', breadcrumbs: breadcrumbs('Contacto') },
  info: [
    { label: 'WHATSAPP', value: business.phone },
    { label: 'CORREO', value: business.email },
    { label: 'ZONA BASE', value: business.baseZone },
    { label: 'HORARIO', value: business.hours },
  ],
  zones: serviceZones,
};

export const notFoundData = {
  heading: { backgroundImage: '/assets/img/about_heading_bg.jpg', title: 'Página no encontrada', breadcrumbs: breadcrumbs('404') },
};
