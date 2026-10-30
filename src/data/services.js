// Servicios organizados por especie, como pidió Biosfera en el brief ("Especies que controlamos").
// El slug forma la URL /servicios/:slug.
// PENDIENTE: las fotos son de banco (Unsplash); reemplazar por fotos reales de cada servicio.
const featureIcons = ['vials', 'handHoldingDroplet', 'heart', 'handshake', 'seedling', 'layers'];

const withIcons = (items) => items.map((title, i) => ({ title, icon: featureIcons[i % featureIcons.length] }));

export const services = [
  {
    slug: 'cucarachas',
    cardTitle: 'CUCARACHAS',
    title: 'CONTROL DE CUCARACHAS',
    headingTitle: 'CONTROL DE <span>CUCARACHAS</span>',
    image: '/assets/img/bio/tarja.jpg',
    cardImage: '/assets/img/bio/tecnico-interior.jpg',
    pests: ['Cucaracha alemana', 'Cucaracha americana'],
    summary: 'Manejo de cucarachas en casas, condominios, restaurantes y negocios, empezando por métodos físicos y aplicaciones mínimas y dirigidas.',
    description:
      'En la Ciudad de México predominan la cucaracha americana, que entra por coladeras y registros, y la cucaracha alemana, que se instala en cocinas y aparatos eléctricos. Primero hacemos una inspección técnica de cocina, baños, coladeras y zonas húmedas para ubicar sus refugios y accesos. <br><br>Antes de aplicar cualquier producto priorizamos las medidas físicas: sellado de grietas, rejillas en coladeras y orden y limpieza de las zonas críticas. Cuando es necesario, usamos aplicaciones dirigidas con un insecticida inoloro e incoloro que no mancha superficies, adecuado para hogares con niños, adultos mayores y mascotas.',
    includes: withIcons([
      'Inspección de cocinas, baños y coladeras',
      'Sellado y exclusión de accesos',
      'Producto inoloro e incoloro',
      'Seguimiento y monitoreo',
      'Cuidado de personas y mascotas',
      'Recomendaciones preventivas',
    ]),
  },
  {
    slug: 'chinches',
    cardTitle: 'CHINCHES',
    title: 'CONTROL DE CHINCHES',
    headingTitle: 'CONTROL DE <span>CHINCHES</span>',
    image: '/assets/img/bio/recamara.jpg',
    cardImage: '/assets/img/bio/recamara.jpg',
    pests: ['Chinche de cama'],
    summary: 'Atención de chinches de cama en casas, hoteles, condominios y espacios de descanso, con inspección detallada y seguimiento.',
    description:
      'Las chinches se esconden en costuras de colchones, cabeceras, muebles y grietas cercanas a donde las personas descansan, y suelen detectarse por pequeñas manchas oscuras en la ropa de cama o por piquetes al despertar. Revisamos a detalle recámaras y muebles para confirmar su presencia y ubicar los focos. <br><br>Combinamos métodos físicos, como el aspirado, el lavado y secado de ropa de cama a alta temperatura y el uso de fundas protectoras, con aplicaciones dirigidas solo en los puntos necesarios. Como sus huevos pueden eclosionar después del primer servicio, damos seguimiento para confirmar que el problema quedó bajo control.',
    includes: withIcons([
      'Inspección de colchones y muebles',
      'Métodos físicos primero',
      'Indicaciones para la ropa de cama',
      'Visita de seguimiento',
      'Aplicación solo en focos',
      'Recomendaciones para viajes y mudanzas',
    ]),
  },
  {
    slug: 'insectos-de-la-madera',
    cardTitle: 'MADERA',
    title: 'INSECTOS DE LA MADERA',
    headingTitle: 'INSECTOS DE LA <span>MADERA</span>',
    image: '/assets/img/bio/vigas-madera.jpg',
    cardImage: '/assets/img/bio/vigas-madera.jpg',
    pests: ['Termitas', 'Carcoma', 'Escarabajos de la madera'],
    summary: 'Protección de vigas, muebles, puertas y estructuras de madera contra termitas, carcoma y otros insectos xilófagos.',
    description:
      'Las termitas y la carcoma se alimentan de la madera y pueden dañar vigas, marcos, pisos y muebles sin que se note a simple vista. Las señales más comunes son pequeños orificios, polvo fino parecido al aserrín, madera hueca al golpearla y túneles de lodo en muros. <br><br>Inspeccionamos las piezas afectadas para identificar el tipo de insecto y el alcance del daño, y aplicamos un tratamiento dirigido a la madera. También te ayudamos a corregir la humedad y el contacto de la madera con el suelo, que son las condiciones que favorecen a estos insectos.',
    includes: withIcons([
      'Identificación del insecto',
      'Tratamiento dirigido a la madera',
      'Revisión de humedad',
      'Seguimiento del tratamiento',
      'Vigas, muebles y estructuras',
      'Recomendaciones de conservación',
    ]),
  },
  {
    slug: 'control-de-roedores',
    cardTitle: 'ROEDORES',
    title: 'CONTROL DE ROEDORES',
    headingTitle: 'CONTROL DE <span>ROEDORES</span>',
    image: '/assets/img/bio/estacion-cebadera.jpg',
    cardImage: '/assets/img/bio/estacion-cebadera.jpg',
    pests: ['Ratas', 'Ratones'],
    summary: 'Manejo de ratas y ratones en casas, negocios e industrias, con exclusión física, monitoreo y estaciones cerradas.',
    description:
      'Las ratas y los ratones dañan cableado, mercancía y alimentos, y pueden transmitir enfermedades como leptospirosis y salmonelosis. En la Ciudad de México su presencia aumenta en temporada de lluvias, cuando el drenaje se inunda y buscan refugio en casas, sótanos y bodegas. <br><br>Nuestro manejo empieza por la exclusión: identificamos rutas y puntos de entrada y te indicamos qué sellar. Después colocamos trampas y estaciones cerradas con cebo específico, fuera del alcance de niños y mascotas, y les damos monitoreo periódico.',
    includes: withIcons([
      'Ubicación de rutas y accesos',
      'Exclusión y sellado',
      'Estaciones cerradas y seguras',
      'Monitoreo periódico',
      'Trampas mecánicas',
      'Recomendaciones de orden y limpieza',
    ]),
  },
  {
    slug: 'desinfeccion',
    cardTitle: 'DESINFECCIÓN',
    title: 'DESINFECCIÓN DE ESPACIOS',
    headingTitle: '<span>DESINFECCIÓN</span> DE ESPACIOS',
    image: '/assets/img/bio/desinfeccion-nebulizacion.jpg',
    cardImage: '/assets/img/bio/desinfeccion-nebulizacion.jpg',
    pests: ['Bacterias', 'Virus', 'Hongos'],
    summary: 'Desinfección de oficinas, restaurantes, consultorios, escuelas y vehículos, con reporte técnico y constancia de servicio.',
    description:
      'La desinfección reduce la presencia de bacterias, virus y hongos en superficies y ambientes. Es útil como mantenimiento en espacios con mucha afluencia de personas, después de una inundación o como parte de los protocolos de higiene de tu negocio. <br><br>Aplicamos el producto con equipo de aspersión o nebulización según el espacio y te damos indicaciones de ventilación y reingreso. Al terminar entregamos un reporte técnico, recomendaciones preventivas y una constancia de servicio.',
    includes: withIcons([
      'Oficinas, restaurantes y escuelas',
      'Aspersión o nebulización',
      'Indicaciones de reingreso',
      'Constancia de servicio',
      'Consultorios y vehículos',
      'Reporte técnico',
    ]),
  },
  {
    slug: 'division-veterinaria',
    cardTitle: 'VETERINARIA',
    title: 'DIVISIÓN VETERINARIA',
    headingTitle: 'DIVISIÓN <span>VETERINARIA</span>',
    image: '/assets/img/bio/veterinaria.jpg',
    cardImage: '/assets/img/bio/acuario.jpg',
    pests: ['Pulgas', 'Garrapatas', 'Moscas', 'Roedores'],
    summary: 'Manejo de plagas para consultorios veterinarios, acuarios y ranchos, cuidando la salud de los animales y de las personas.',
    description:
      'En consultorios veterinarios, acuarios y ranchos el reto es controlar pulgas, garrapatas, moscas y roedores sin poner en riesgo a los animales. Por eso cada servicio se planea según las especies que habitan el lugar, sus áreas de descanso y alimentación, y el manejo diario del espacio. <br><br>Damos prioridad a los métodos físicos y a la prevención, y cuando se requiere un producto elegimos el adecuado para el problema y lo aplicamos de forma dirigida, lejos de peceras, comederos y bebederos. En ranchos atendemos corrales, bodegas de alimento y áreas de servicio.',
    includes: withIcons([
      'Consultorios veterinarios',
      'Acuarios',
      'Cuidado de los animales',
      'Ranchos y corrales',
      'Bodegas de alimento',
      'Plan según cada especie',
    ]),
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const serviceUrl = (service) => `/servicios/${service.slug}`;
