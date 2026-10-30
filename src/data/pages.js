import { business, catalogLink, serviceZones, whatsappLink } from './business';

export const dreamCardData = {
  backgroundImage: '/assets/img/bio/perro-manguera.jpg',
  tags: ['Hogares', 'Negocios', 'Veterinarias', 'Escuelas'],
  title: 'CUIDAMOS <br /> TU ESPACIO',
  buttonLink: '/contacto',
};

export const breadcrumbs = (label) => [
  { label: 'Inicio', link: '/' },
  { label, active: true },
];

// Proceso de servicio según el plan integral de Biosfera
export const processSteps = [
  {
    title: '01 | Inspección técnica',
    description: 'Revisamos el lugar para identificar la especie, sus refugios, accesos y las condiciones que favorecen su presencia.',
  },
  {
    title: '02 | Diagnóstico',
    description: 'Con lo observado definimos el plan de manejo: primero medidas físicas y preventivas, y solo si hace falta, productos.',
  },
  {
    title: '03 | Intervención',
    description: 'Aplicamos el plan con equipo de protección y aplicaciones mínimas y dirigidas, cuidando a las personas, los animales y el entorno.',
  },
  {
    title: '04 | Seguimiento y prevención',
    description: 'Entregamos reporte técnico y recomendaciones preventivas, y damos seguimiento para mantener el control a largo plazo.',
  },
];

// Ventaja competitiva que Biosfera pidió destacar
export const methodData = {
  title: 'MENOS QUÍMICOS, <span>MÁS MÉTODO</span>',
  subtitle: 'NUESTRO MÉTODO',
  btnText: 'CONOCE NUESTROS SERVICIOS',
  btnUrl: '/servicios',
  image: '/assets/img/bio/tecnico-planta.jpg',
  items: [
    {
      icon: 'link',
      title: 'Métodos físicos primero',
      text: 'Exclusión, sellado de accesos, trampas, orden y limpieza: atacamos las causas antes de pensar en un producto.',
    },
    {
      icon: 'layers',
      title: 'El químico es el último recurso',
      text: 'Cuando se necesita, usamos la menor cantidad posible y el producto adecuado para cada problema, poco invasivo.',
    },
    {
      icon: 'handHoldingDroplet',
      title: 'Inoloro, incoloro y sin manchas',
      text: 'Nuestro insecticida no deja olor ni manchas en superficies, para que regreses a tu rutina sin molestias.',
    },
    {
      icon: 'heart',
      title: 'Apto para poblaciones vulnerables',
      text: 'Pensado para espacios con adultos mayores, niños y mascotas, siempre con indicaciones claras de reingreso.',
    },
  ],
};

export const generalFaq = [
  {
    question: '¿Qué es el manejo integrado de plagas?',
    answer:
      'Es una forma de trabajar que combina inspección, diagnóstico, prevención (sellado de accesos, orden y limpieza), métodos físicos y, solo cuando hace falta, aplicaciones dirigidas de productos. Así se logra un control duradero con el menor impacto para las personas, los animales y el ambiente.',
  },
  {
    question: '¿Usan productos químicos?',
    answer:
      'Tratamos de usar la menor cantidad posible. Primero aplicamos métodos físicos y preventivos, y el producto químico es nuestro último recurso. Cuando se necesita, elegimos uno poco invasivo y adecuado para el problema; nuestro insecticida es inoloro, incoloro y no mancha superficies.',
  },
  {
    question: '¿El servicio es seguro para niños, adultos mayores y mascotas?',
    answer:
      'Sí, lo planeamos pensando en poblaciones vulnerables. Antes del servicio te decimos cómo preparar tu espacio y, al terminar, cuánto tiempo esperar antes de volver a entrar; al regresar, solo hay que ventilar y seguir las recomendaciones del técnico.',
  },
  {
    question: '¿Qué tengo que hacer antes del servicio?',
    answer:
      'Guarda alimentos y utensilios, despeja las zonas bajo la tarja y detrás de los muebles de cocina, y saca a tus mascotas. Te dejamos una guía completa en nuestro blog: <a href="/blog/como-preparar-tu-casa-antes-del-servicio">Cómo preparar tu casa antes del servicio</a>.',
  },
  {
    question: '¿Cuánto cuesta el servicio?',
    answer:
      'El costo depende del tipo de espacio, sus metros, la especie y el nivel de presencia. Por eso preparamos cada cotización a la medida: escríbenos y te la enviamos sin compromiso.',
  },
  {
    question: '¿Cada cuánto conviene dar servicio?',
    answer:
      'En casa, un servicio preventivo cada seis meses suele ser suficiente si no hay infestación. Restaurantes, consultorios e industrias trabajan mejor con contratos trimestrales o semestrales y visitas mensuales o bimestrales, según el riesgo.',
  },
  {
    question: '¿En qué zonas dan servicio?',
    answer: `En toda la Ciudad de México y el Área Metropolitana, ${business.focusArea}. Todos nuestros servicios son a domicilio.`,
  },
  {
    question: '¿Cómo puedo cotizar o agendar una visita?',
    answer: `Escríbenos por <a href="${whatsappLink()}" target="_blank" rel="noopener noreferrer">WhatsApp</a> o llena el <a href="/contacto">formulario de contacto</a> con el tipo de espacio, la especie que observas y el día que te gustaría recibir la visita.`,
  },
];

export const businessFaq = [
  {
    question: '¿Entregan constancia de servicio?',
    answer:
      'Sí. En cada servicio entregamos reporte técnico, recomendaciones preventivas y constancia de servicio, que restaurantes y comercios suelen necesitar para sus verificaciones sanitarias.',
  },
  {
    question: '¿Pueden trabajar fuera de mi horario de atención?',
    answer:
      'Sí. En negocios, consultorios y escuelas programamos las visitas en horarios que no interrumpan la atención a tus clientes, pacientes o alumnos.',
  },
  {
    question: '¿Ofrecen contratos para empresas?',
    answer:
      'Sí. Trabajamos con contratos trimestrales o semestrales con visitas periódicas, reportes técnicos y un enfoque preventivo más que reactivo.',
  },
  {
    question: '¿Qué norma regula los servicios de control de plagas?',
    answer:
      'En México, la NOM-256-SSA1-2012 establece las condiciones sanitarias que deben cumplir los establecimientos y el personal dedicados a los servicios urbanos de control de plagas mediante plaguicidas.',
  },
  {
    question: '¿Atienden consultorios veterinarios, acuarios y ranchos?',
    answer:
      'Sí, es nuestra división veterinaria. Planeamos cada servicio según las especies que habitan el lugar y aplicamos lejos de peceras, comederos y bebederos.',
  },
];

export const aboutData = {
  heading: { backgroundImage: '/assets/img/bio/perro-jardin.jpg', title: 'NOSOTROS', breadcrumbs: breadcrumbs('Nosotros') },
  intro: {
    title: `${business.experience.toUpperCase()} <br /><span>CUIDANDO ESPACIOS</span> <br />CON RESPONSABILIDAD`,
    introduction:
      'Biosfera Control es una empresa mexicana y familiar especializada en el manejo de fauna nociva y la desinfección, enfocada en proteger la salud de las personas, los trabajadores y el medio ambiente.',
    introduction1:
      'Combinamos más de 20 años de experiencia con un enfoque técnico en Manejo Integrado de Plagas (MIP), protocolos escritos, reportes técnicos y capacitación constante.',
    image: '/assets/img/bio/limpieza-ventana.jpg',
    cta: { backgroundImage: '/assets/img/bio/cocina-hogar.jpg', btnText: 'Ver servicios', btnUrl: '/servicios' },
  },
  // Misión, visión y valores oficiales (plan integral del brief v2)
  identity: [
    {
      title: 'Misión',
      text: 'Brindar soluciones profesionales de control de plagas y desinfección con el menor impacto ambiental posible, priorizando la salud humana, la seguridad ocupacional y el equilibrio ecológico.',
    },
    {
      title: 'Visión',
      text: 'Ser la empresa referente en la CDMX en control de plagas sustentable y desinfección responsable, reconocida por su ética, eficacia y compromiso ambiental.',
    },
    {
      title: 'Valores',
      text: 'Responsabilidad ambiental, seguridad y salud ocupacional, ética profesional, transparencia, innovación técnica y educación preventiva.',
    },
  ],
  coverage: {
    title: 'COBERTURA',
    items: [
      { label: 'Ciudad de México (enfoque en el oriente)', number: '01' },
      { label: 'Área Metropolitana', number: '02' },
    ],
  },
};

export const servicesPageData = {
  heading: { backgroundImage: '/assets/img/bio/hero-porche.jpg', title: 'SERVICIOS', breadcrumbs: breadcrumbs('Servicios') },
  intro: 'Manejo de fauna nociva con Manejo Integrado de Plagas: métodos físicos primero y aplicaciones mínimas y dirigidas.',
  catalog: {
    text: 'El costo de cada servicio depende del espacio y de la especie, por eso cotizamos a la medida.',
    btnText: business.catalogPdf ? 'Descargar catálogo (PDF)' : 'Solicitar catálogo',
    btnUrl: catalogLink(),
  },
  cta: {
    title: '¿LISTO PARA UN ESPACIO MÁS SANO?',
    btnText: 'Solicitar cotización',
    btnUrl: whatsappLink(),
    backgroundImage: '/assets/img/bio/oficina.jpg',
  },
};

// Contenido común a todas las páginas de detalle de servicio
export const serviceDetailCommon = {
  cta: { backgroundImage: '/assets/img/bio/desinfeccion-guantes.jpg', btnText: 'Cotizar este servicio' },
  howItWorks: {
    title: 'ASÍ ES NUESTRO <span>PROCESO</span>',
    subtitle: 'CÓMO FUNCIONA',
    steps: processSteps,
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
        designation: 'Control duradero',
        text: 'Sella <span>grietas</span>, coloca rejillas en coladeras y no dejes agua estancada ni basura acumulada.',
      },
    ],
  },
  dreamCard: { backgroundImage: '/assets/img/bio/perro-jardin.jpg' },
};

export const spacesPageData = {
  heading: {
    backgroundImage: '/assets/img/bio/restaurante.jpg',
    title: 'SECTORES QUE ATENDEMOS',
    breadcrumbs: breadcrumbs('Sectores'),
  },
  labels: { description: 'DESCRIPCIÓN', outcomes: 'QUÉ INCLUYE' },
  faq: {
    title: 'PREGUNTAS <br /><span>FRECUENTES</span>',
    subtitle: 'F.A.Q',
    image: '/assets/img/bio/veterinaria-perro.jpg',
    items: generalFaq.slice(0, 4),
  },
};

// Promociones vigentes (plan integral: referidos y contratos). PENDIENTE: confirmar condiciones y vigencia con Ruth.
export const promotionsData = {
  heading: { backgroundImage: '/assets/img/bio/hero-porche.jpg', title: 'PROMOCIONES', breadcrumbs: breadcrumbs('Promociones') },
  intro: 'Consulta las promociones vigentes. Para hacerlas válidas, menciónalas al solicitar tu cotización.',
  items: [
    {
      tag: 'REFERIDOS',
      title: '10% de descuento por cliente referido',
      text: 'Recomienda a Biosfera Control y recibe un 10% de descuento en tu siguiente servicio por cada cliente referido que contrate.',
      validity: 'Pregunta por las condiciones',
      image: '/assets/img/bio/hero-casa.jpg',
    },
    {
      tag: 'EMPRESAS',
      title: 'Contratos trimestrales o semestrales',
      text: 'Programa de visitas periódicas para tu negocio, con reportes técnicos y enfoque preventivo.',
      validity: 'Cotización a la medida',
      image: '/assets/img/bio/restaurante.jpg',
    },
    {
      tag: 'PAQUETE',
      title: 'Manejo de plagas + desinfección',
      text: 'Combina el manejo de fauna nociva con la desinfección de tus espacios y recibe constancia de servicio.',
      validity: 'Cotización a la medida',
      image: '/assets/img/bio/desinfeccion-nebulizacion.jpg',
    },
  ],
};

export const faqData = {
  heading: {
    backgroundImage: '/assets/img/bio/perro-jardin.jpg',
    title: 'PREGUNTAS FRECUENTES',
    breadcrumbs: breadcrumbs('Preguntas frecuentes'),
  },
  sections: [
    { title: 'PREGUNTAS <span>GENERALES</span>', image: '/assets/img/bio/veterinaria-perro.jpg', items: generalFaq },
    { title: 'EMPRESAS E <span>INSTITUCIONES</span>', image: '/assets/img/bio/tecnico-planta.jpg', items: businessFaq },
  ],
};

export const contactData = {
  heading: { backgroundImage: '/assets/img/bio/perro-jardin.jpg', title: 'CONTACTO', breadcrumbs: breadcrumbs('Contacto') },
  image: '/assets/img/bio/tecnico-jardin.jpg',
  info: [
    { label: 'WHATSAPP', value: business.phone },
    { label: 'CORREO', value: business.email },
    { label: 'HORARIO', value: business.hours },
    { label: 'SERVICIO', value: 'A domicilio' },
  ],
  zones: serviceZones,
};

export const notFoundData = {
  heading: { backgroundImage: '/assets/img/bio/perro-jardin.jpg', title: 'Página no encontrada', breadcrumbs: breadcrumbs('404') },
};
