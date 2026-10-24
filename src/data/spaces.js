// Tipos de inmueble que atiende Biosfera (sección "Espacios", antes "Proyectos" en la plantilla).
// PENDIENTE: confirmar las frecuencias sugeridas con Biosfera y cambiar las imágenes por fotos reales.
export const spaces = [
  {
    slug: 'casas-y-departamentos',
    title: 'CASAS Y DEPARTAMENTOS',
    image: '/assets/img/project_thumb_10.jpg',
    pests: 'CUCARACHAS, HORMIGAS, ARAÑAS',
    service: 'FUMIGACIÓN DE CASAS',
    frequency: 'CADA 6 MESES',
    serviceSlugs: ['fumigacion-de-casas', 'control-de-roedores', 'limpieza-y-sanitizacion'],
    description:
      'Cocinas, baños y coladeras son los puntos más comunes de entrada y refugio. Una fumigación preventiva dos veces al año ayuda a mantener tu casa libre de plagas.',
    outcomes: 'Revisión de cocina, baños y coladeras <br /> Indicaciones para niños y mascotas <br /> Recomendaciones de prevención',
  },
  {
    slug: 'jardines-y-patios',
    title: 'JARDINES Y PATIOS',
    image: '/assets/img/project_thumb_11.jpg',
    pests: 'MOSQUITOS, PULGAS, GARRAPATAS',
    service: 'CONTROL EN ÁREAS VERDES',
    frequency: 'TEMPORADA DE LLUVIAS',
    serviceSlugs: ['control-de-plagas-en-jardines', 'control-de-roedores', 'fumigacion-de-casas'],
    description:
      'La humedad, la hojarasca y el agua estancada convierten jardines y patios en criaderos de mosquitos, pulgas y garrapatas, sobre todo de junio a septiembre. Tratamos pasto, macetas y perímetros para proteger a tu familia y a tus mascotas.',
    outcomes: 'Menos mosquitos y pulgas <br /> Áreas verdes seguras para mascotas <br /> Focos de humedad identificados',
  },
  {
    slug: 'bodegas-y-naves',
    title: 'BODEGAS Y NAVES',
    image: '/assets/img/project_thumb_12.jpg',
    pests: 'ROEDORES, CUCARACHAS, AVES',
    service: 'PROGRAMA DE CONTROL',
    frequency: 'MENSUAL O BIMESTRAL',
    serviceSlugs: ['fumigacion-de-bodegas', 'control-de-roedores', 'limpieza-y-sanitizacion'],
    description:
      'En bodegas y almacenes el control debe ser continuo: estaciones para roedores, tratamiento de insectos y revisiones periódicas para proteger la mercancía y estar preparados para revisiones sanitarias.',
    outcomes: 'Mercancía protegida <br /> Reporte de cada visita <br /> Visitas sin frenar la operación',
  },
  {
    slug: 'negocios-y-restaurantes',
    title: 'NEGOCIOS Y RESTAURANTES',
    image: '/assets/img/project_thumb_13.jpg',
    pests: 'CUCARACHAS, ROEDORES, MOSCAS',
    service: 'PROGRAMA PARA NEGOCIOS',
    frequency: 'MENSUAL',
    serviceSlugs: ['negocios-y-comercios', 'control-de-roedores', 'limpieza-y-sanitizacion'],
    description:
      'Cocinas, almacenes de alimentos y áreas de atención al cliente necesitan un programa constante. Trabajamos fuera de tu horario de servicio y dejamos registro de cada visita.',
    outcomes: 'Programa adaptado a tu giro <br /> Visitas fuera de horario <br /> Reporte de servicio',
  },
  {
    slug: 'condominios-y-oficinas',
    title: 'CONDOMINIOS Y OFICINAS',
    image: '/assets/img/project_thumb_9.jpg',
    pests: 'CUCARACHAS, ROEDORES, CHINCHES',
    service: 'FUMIGACIÓN Y SANITIZACIÓN',
    frequency: 'CADA 3 A 6 MESES',
    serviceSlugs: ['fumigacion-de-casas', 'control-de-roedores', 'limpieza-y-sanitizacion'],
    description:
      'En condominios la plaga se mueve entre departamentos por ductos, drenaje y áreas comunes, así que conviene tratar todo el edificio. En oficinas, una sanitización periódica complementa el control de plagas.',
    outcomes: 'Áreas comunes y cuartos de basura <br /> Coordinación con la administración <br /> Sanitización de oficinas',
  },
];

export const getSpace = (slug) => spaces.find((s) => s.slug === slug);

export const spaceUrl = (space) => `/espacios/${space.slug}`;

// Filas de datos que se muestran en las tarjetas de espacios
export const spaceInfoRows = (space) => [
  ['PLAGAS FRECUENTES', space.pests],
  ['SERVICIO', space.service],
  ['FRECUENCIA SUGERIDA', space.frequency],
];
