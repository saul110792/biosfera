// Sectores que atiende Biosfera, según el plan integral del brief v2.
// PENDIENTE: confirmar las frecuencias sugeridas con Biosfera; las fotos son de banco (Unsplash).
export const spaces = [
  {
    slug: 'casas-y-condominios',
    title: 'CASAS HABITACIÓN Y CONDOMINIOS',
    image: '/assets/img/bio/cocina-blanca.jpg',
    pests: 'CUCARACHAS, CHINCHES, ROEDORES',
    service: 'MANEJO DE FAUNA NOCIVA',
    frequency: 'CADA 6 MESES',
    serviceSlugs: ['cucarachas', 'chinches', 'control-de-roedores'],
    description:
      'Cocinas, baños, recámaras y coladeras son los puntos más comunes de entrada y refugio. En condominios la plaga se mueve entre departamentos por ductos y áreas comunes, así que conviene un plan para todo el edificio.',
    outcomes: 'Inspección de cocina, baños y recámaras <br /> Áreas comunes y cuartos de basura <br /> Seguro para niños, adultos mayores y mascotas',
  },
  {
    slug: 'restaurantes',
    title: 'RESTAURANTES Y CAFETERÍAS',
    image: '/assets/img/bio/cocina-restaurante.jpg',
    pests: 'CUCARACHAS, ROEDORES, MOSCAS',
    service: 'CONTRATO PERIÓDICO',
    frequency: 'MENSUAL',
    serviceSlugs: ['cucarachas', 'control-de-roedores', 'desinfeccion'],
    description:
      'Cocinas, almacenes de alimentos y áreas de atención al cliente necesitan un programa constante. Trabajamos fuera de tu horario de servicio y entregamos constancia para tus verificaciones sanitarias.',
    outcomes: 'Reporte técnico de cada visita <br /> Constancia de servicio <br /> Visitas fuera de horario',
  },
  {
    slug: 'oficinas',
    title: 'OFICINAS',
    image: '/assets/img/bio/oficina.jpg',
    pests: 'CUCARACHAS, ROEDORES, HORMIGAS',
    service: 'PREVENCIÓN Y DESINFECCIÓN',
    frequency: 'CADA 3 MESES',
    serviceSlugs: ['cucarachas', 'desinfeccion', 'control-de-roedores'],
    description:
      'Comedores, áreas de café, archivos y sanitarios son los puntos a vigilar en una oficina. Combinamos prevención y desinfección con visitas en horarios que no interrumpen el trabajo.',
    outcomes: 'Comedores y áreas de café <br /> Desinfección de áreas comunes <br /> Servicio fuera de horario laboral',
  },
  {
    slug: 'consultorios',
    title: 'CONSULTORIOS Y CLÍNICAS',
    image: '/assets/img/bio/consultorio.jpg',
    pests: 'CUCARACHAS, HORMIGAS, ROEDORES',
    service: 'MANEJO Y DESINFECCIÓN',
    frequency: 'MENSUAL O BIMESTRAL',
    serviceSlugs: ['desinfeccion', 'cucarachas', 'control-de-roedores'],
    description:
      'En consultorios la higiene es parte de la atención. Combinamos manejo de fauna nociva y desinfección de espacios con productos poco invasivos, sin interrumpir las consultas.',
    outcomes: 'Desinfección de áreas de atención <br /> Constancia de servicio <br /> Horarios sin interrumpir consultas',
  },
  {
    slug: 'escuelas',
    title: 'ESCUELAS',
    image: '/assets/img/bio/escuela.jpg',
    pests: 'CUCARACHAS, ROEDORES, HORMIGAS',
    service: 'CONTROL PREVENTIVO',
    frequency: 'CADA 3 MESES',
    serviceSlugs: ['cucarachas', 'control-de-roedores', 'desinfeccion'],
    description:
      'Aulas, comedores y áreas comunes reciben a muchas personas cada día. Programamos los servicios en fines de semana o vacaciones para que alumnos y personal estén seguros.',
    outcomes: 'Servicio en días sin clases <br /> Comedores y áreas comunes <br /> Desinfección de aulas',
  },
  {
    slug: 'pequenas-industrias',
    title: 'PEQUEÑAS INDUSTRIAS',
    image: '/assets/img/bio/nave.jpg',
    pests: 'ROEDORES, CUCARACHAS, INSECTOS DE LA MADERA',
    service: 'MANEJO INTEGRADO',
    frequency: 'MENSUAL O BIMESTRAL',
    serviceSlugs: ['control-de-roedores', 'cucarachas', 'insectos-de-la-madera'],
    description:
      'En bodegas y pequeñas industrias el control debe ser continuo: monitoreo con estaciones para roedores, revisión de tarimas y estructuras de madera e inspecciones periódicas para proteger la mercancía.',
    outcomes: 'Monitoreo con estaciones cerradas <br /> Revisión de tarimas y madera <br /> Visitas sin frenar la operación',
  },
  {
    slug: 'division-veterinaria',
    title: 'DIVISIÓN VETERINARIA',
    image: '/assets/img/bio/acuario.jpg',
    pests: 'PULGAS, GARRAPATAS, MOSCAS',
    service: 'CONSULTORIOS, ACUARIOS Y RANCHOS',
    frequency: 'SEGÚN CADA ESPACIO',
    serviceSlugs: ['division-veterinaria', 'control-de-roedores', 'desinfeccion'],
    description:
      'Consultorios veterinarios, acuarios y ranchos requieren cuidar a los animales tanto como controlar la plaga. Planeamos cada servicio según las especies del lugar y aplicamos lejos de peceras, comederos y bebederos.',
    outcomes: 'Consultorios veterinarios <br /> Acuarios <br /> Ranchos, corrales y bodegas de alimento',
  },
];

export const getSpace = (slug) => spaces.find((s) => s.slug === slug);

export const spaceUrl = (space) => `/sectores/${space.slug}`;

// Filas de datos que se muestran en las tarjetas de sectores
export const spaceInfoRows = (space) => [
  ['PLAGAS FRECUENTES', space.pests],
  ['SERVICIO', space.service],
  ['FRECUENCIA SUGERIDA', space.frequency],
];
