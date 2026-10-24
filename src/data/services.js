// Catálogo de servicios. El slug forma la URL /servicios/:slug.
// PENDIENTE: las imágenes son de la plantilla; reemplazar por fotos reales de cada servicio.
const featureIcons = ['vials', 'handHoldingDroplet', 'heart', 'handshake', 'seedling', 'layers'];

const withIcons = (items) => items.map((title, i) => ({ title, icon: featureIcons[i % featureIcons.length] }));

export const services = [
  {
    slug: 'fumigacion-de-casas',
    cardTitle: 'CASAS',
    title: 'FUMIGACIÓN DE CASAS',
    headingTitle: '<span>FUMIGACIÓN</span> DE CASAS',
    image: '/assets/img/project_thumb_1.jpg',
    cardImage: '/assets/img/service_thumb_1.jpg',
    pests: ['Cucarachas', 'Hormigas', 'Arañas', 'Pulgas', 'Chinches'],
    summary: 'Eliminamos cucarachas, hormigas, arañas, pulgas y chinches en casas y departamentos, con indicaciones claras para tu familia y mascotas.',
    description:
      'La fumigación de casas y departamentos empieza con una revisión de cocina, baños, coladeras, muebles y zonas húmedas, que es donde suelen esconderse las plagas. Con eso definimos el método y los puntos de aplicación, para tratar solo donde hace falta. <br><br>Antes del servicio te decimos cómo preparar tu casa y, al terminar, cuánto tiempo esperar para volver a entrar, cómo ventilar y qué cuidados tener con niños y mascotas. También te dejamos recomendaciones para que la plaga no regrese.',
    includes: withIcons([
      'Revisión de cocina, baños y coladeras',
      'Aplicación en puntos clave',
      'Indicaciones para niños y mascotas',
      'Seguimiento después del servicio',
      'Tratamiento de áreas exteriores',
      'Recomendaciones de prevención',
    ]),
  },
  {
    slug: 'control-de-plagas-en-jardines',
    cardTitle: 'JARDINES',
    title: 'JARDINES Y ÁREAS VERDES',
    headingTitle: '<span>JARDINES</span> Y ÁREAS VERDES',
    image: '/assets/img/project_thumb_2.jpg',
    cardImage: '/assets/img/service_thumb_2.jpg',
    pests: ['Mosquitos', 'Hormigas', 'Pulgas', 'Garrapatas', 'Alacranes'],
    summary: 'Controlamos mosquitos, hormigas, pulgas, garrapatas y alacranes en jardines, patios y áreas verdes de casas, escuelas y condominios.',
    description:
      'Los jardines y patios acumulan humedad, hojarasca y agua estancada, condiciones ideales para mosquitos, pulgas, garrapatas y hormigas, sobre todo en temporada de lluvias. Revisamos el área verde, macetas, bardas y registros para ubicar los focos. <br><br>Aplicamos el tratamiento en pasto, perímetros y zonas de refugio, y te recomendamos acciones sencillas de limpieza y mantenimiento (retirar cacharros, podar y vaciar recipientes con agua) para que el control dure más.',
    includes: withIcons([
      'Revisión de pasto, macetas y perímetros',
      'Tratamiento de focos de humedad',
      'Indicaciones para mascotas',
      'Control de mosquitos y agua estancada',
      'Cuidado de plantas y áreas verdes',
      'Limpieza de zonas de refugio',
    ]),
  },
  {
    slug: 'fumigacion-de-bodegas',
    cardTitle: 'BODEGAS',
    title: 'BODEGAS Y NAVES',
    headingTitle: '<span>BODEGAS</span> Y NAVES',
    image: '/assets/img/project_thumb_3.jpg',
    cardImage: '/assets/img/service_thumb_3.jpg',
    pests: ['Roedores', 'Cucarachas', 'Plagas de almacén', 'Aves'],
    summary: 'Programas de control para bodegas, almacenes y naves: roedores, cucarachas, insectos de producto almacenado y aves.',
    description:
      'En una bodega una plaga puede dañar mercancía, contaminar producto y generar problemas en revisiones sanitarias. Por eso trabajamos con un programa: inspección inicial, ubicación de estaciones para roedores, tratamiento de insectos rastreros y revisión periódica. <br><br>Nos adaptamos a los horarios de operación para no detener tu trabajo, y te entregamos un reporte de cada visita con lo encontrado y lo aplicado, útil para tu control interno.',
    includes: withIcons([
      'Inspección de andenes, racks y accesos',
      'Estaciones para roedores',
      'Plan de visitas periódicas',
      'Horarios que no frenan tu operación',
      'Control de insectos de almacén',
      'Reporte de cada visita',
    ]),
  },
  {
    slug: 'control-de-roedores',
    cardTitle: 'ROEDORES',
    title: 'CONTROL DE ROEDORES',
    headingTitle: 'CONTROL DE <span>ROEDORES</span>',
    image: '/assets/img/project_thumb_4.jpg',
    cardImage: '/assets/img/service_thumb_4.jpg',
    pests: ['Ratas', 'Ratones'],
    summary: 'Eliminamos ratas y ratones en casas, negocios y bodegas, y te ayudamos a cerrar los accesos para que no vuelvan.',
    description:
      'Las ratas y los ratones dañan cableado, muebles y alimentos, y pueden transmitir enfermedades como leptospirosis y salmonelosis. En la Ciudad de México su presencia aumenta en temporada de lluvias, cuando el drenaje se inunda y buscan refugio en casas y sótanos. <br><br>Identificamos rutas, madrigueras y puntos de entrada; colocamos estaciones y trampas en lugares seguros, lejos del alcance de niños y mascotas, y te indicamos qué accesos sellar para cortar el problema de raíz.',
    includes: withIcons([
      'Ubicación de rutas y madrigueras',
      'Estaciones y trampas seguras',
      'Lejos del alcance de niños y mascotas',
      'Revisión y reposición',
      'Cierre de accesos y registros',
      'Recomendaciones de limpieza',
    ]),
  },
  {
    slug: 'limpieza-y-sanitizacion',
    cardTitle: 'SANITIZACIÓN',
    title: 'LIMPIEZA Y SANITIZACIÓN',
    headingTitle: 'LIMPIEZA Y <span>SANITIZACIÓN</span>',
    image: '/assets/img/project_thumb_5.jpg',
    cardImage: '/assets/img/service_thumb_1.jpg',
    pests: ['Bacterias', 'Virus', 'Hongos'],
    summary: 'Desinfección de superficies y ambientes en casas, oficinas, escuelas y negocios para reducir bacterias, virus y hongos.',
    description:
      'La sanitización complementa el control de plagas: después de una infestación, una inundación o simplemente como mantenimiento, desinfectar superficies y ambientes reduce bacterias, virus y hongos. <br><br>Aplicamos el producto con equipo de aspersión o nebulización según el espacio, y te damos indicaciones de ventilación y reingreso. Es ideal para oficinas, escuelas, consultorios, locales y casas.',
    includes: withIcons([
      'Evaluación del espacio',
      'Aspersión o nebulización',
      'Indicaciones de reingreso',
      'Servicio en horarios flexibles',
      'Ideal después de inundaciones',
      'Oficinas, escuelas y locales',
    ]),
  },
  {
    slug: 'negocios-y-comercios',
    cardTitle: 'NEGOCIOS',
    title: 'NEGOCIOS Y COMERCIOS',
    headingTitle: '<span>NEGOCIOS</span> Y COMERCIOS',
    image: '/assets/img/project_thumb_6.jpg',
    cardImage: '/assets/img/service_thumb_2.jpg',
    pests: ['Cucarachas', 'Roedores', 'Moscas', 'Hormigas'],
    summary: 'Programas de control de plagas para restaurantes, cocinas, locales, oficinas y escuelas, con visitas periódicas y reporte de servicio.',
    description:
      'En restaurantes, cocinas, tiendas y oficinas una plaga afecta la imagen del negocio y puede causar problemas con las revisiones sanitarias. Te proponemos un programa de visitas periódicas adaptado a tu giro, en horarios fuera de servicio para no interrumpir la atención a tus clientes. <br><br>Cada visita queda registrada en un reporte con las áreas revisadas, los productos aplicados y las recomendaciones, para que tengas un control ordenado de tu programa de fumigación.',
    includes: withIcons([
      'Programa según tu giro',
      'Visitas fuera de horario',
      'Atención a cocinas y almacenes',
      'Reporte de cada servicio',
      'Control preventivo continuo',
      'Restaurantes, locales y oficinas',
    ]),
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const serviceUrl = (service) => `/servicios/${service.slug}`;
