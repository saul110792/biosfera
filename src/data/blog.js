// Artículos informativos. El slug forma la URL /blog/:slug y el contenido (body) es HTML.
export const blogPosts = [
  {
    slug: 'control-quimico-tradicional-vs-manejo-integrado',
    image: '/assets/img/bio/tecnico-sendero.jpg',
    date: '27 Oct 2026',
    category: 'Manejo integrado',
    title: 'Control químico tradicional vs. Manejo Integrado de Plagas',
    excerpt:
      'Rociar producto en toda la casa no es la única forma de controlar una plaga. Te explicamos en qué se diferencia el Manejo Integrado de Plagas y por qué cuida mejor tu salud y el ambiente.',
    body: `
      <p>Durante mucho tiempo, controlar una plaga significó aplicar producto químico en todo el espacio, con fuerte olor y a veces cada mes aunque no hubiera problema. Hoy existe una forma más responsable de trabajar: el Manejo Integrado de Plagas (MIP).</p>
      <h3>El enfoque tradicional</h3>
      <ul>
        <li>Aplicación general en todo el inmueble, haya o no presencia de la plaga.</li>
        <li>Mayor cantidad de producto y, muchas veces, olor fuerte y residuos.</li>
        <li>Ataca a los insectos visibles, pero no las causas que los atraen.</li>
        <li>Si las condiciones no cambian, la plaga regresa.</li>
      </ul>
      <h3>El Manejo Integrado de Plagas</h3>
      <ul>
        <li><strong>Inspección y diagnóstico:</strong> primero se identifica la especie, sus refugios y por dónde entra.</li>
        <li><strong>Métodos físicos:</strong> sellado de accesos, rejillas, trampas, orden y limpieza de zonas críticas.</li>
        <li><strong>Aplicación mínima y dirigida:</strong> el químico es el último recurso y se usa solo en los puntos necesarios.</li>
        <li><strong>Monitoreo y prevención:</strong> seguimiento para confirmar el resultado y recomendaciones para evitar que vuelva.</li>
      </ul>
      <blockquote>Usar menos producto no significa un control más débil: significa atacar las causas, no solo los síntomas. <small>Equipo Biosfera Control</small></blockquote>
      <h3>¿Por qué importa?</h3>
      <p>Con el MIP se reduce la exposición de niños, adultos mayores y mascotas a productos químicos, se protege a las especies que no son plaga y el control dura más, porque se corrigen las condiciones que permitían la infestación.</p>
    `,
  },
  {
    slug: 'mitos-sobre-las-plagas',
    image: '/assets/img/bio/tecnico-jardin.jpg',
    date: '24 Oct 2026',
    category: 'Prevención',
    title: 'Seis mitos sobre las plagas que debes dejar de creer',
    excerpt:
      '¿Las cucarachas solo aparecen en casas sucias? ¿Entre más producto, mejor? Desmentimos las creencias más comunes sobre el control de plagas.',
    body: `
      <p>Alrededor de las plagas circulan muchas ideas que, además de no ayudar, pueden hacer que el problema crezca o que te expongas a productos sin necesidad.</p>
      <h3>1. "Si no las veo, no las tengo"</h3>
      <p>Cucarachas, chinches y roedores son principalmente nocturnos y pasan el día escondidos. Excremento, manchas en la ropa de cama o marcas de roeduras suelen aparecer antes que el insecto o el animal.</p>
      <h3>2. "Las cucarachas solo están en casas sucias"</h3>
      <p>La limpieza ayuda mucho, pero la cucaracha americana llega por el drenaje, coladeras y registros, incluso a cocinas impecables. Sellar accesos es tan importante como limpiar.</p>
      <h3>3. "Entre más producto, mejor"</h3>
      <p>Aplicar de más no mejora el resultado: aumenta la exposición de tu familia y tus mascotas y puede favorecer que la plaga se vuelva resistente. Lo eficaz es aplicar poco y en el lugar correcto.</p>
      <h3>4. "Los remedios caseros son suficientes"</h3>
      <p>Algunos remedios ahuyentan temporalmente a ciertos insectos, pero no llegan a los nidos ni corrigen la causa. Si la plaga persiste, conviene una inspección profesional.</p>
      <h3>5. "Con un solo servicio queda resuelto para siempre"</h3>
      <p>Las plagas pueden volver a entrar con la mercancía, el drenaje o una mudanza. La prevención y el seguimiento son parte del control.</p>
      <h3>6. "Si no huele fuerte, no funciona"</h3>
      <p>El olor no indica eficacia. En Biosfera Control usamos un insecticida inoloro e incoloro que no mancha superficies, para que vuelvas a tu rutina sin molestias.</p>
    `,
  },
  {
    slug: 'como-preparar-tu-casa-antes-del-servicio',
    image: '/assets/img/bio/cocina-hogar.jpg',
    date: '20 Oct 2026',
    category: 'Prevención',
    title: 'Cómo preparar tu casa antes del servicio',
    excerpt:
      'Guardar alimentos, proteger a tus mascotas y despejar las zonas a tratar hace que el servicio sea más seguro y efectivo. Te dejamos una lista práctica para antes y después del servicio.',
    body: `
      <p>Una buena preparación hace que el producto llegue a donde se esconden las plagas y reduce riesgos para tu familia. Estos son los pasos que recomendamos antes de que llegue el técnico.</p>
      <h3>Antes del servicio</h3>
      <ul>
        <li>Guarda alimentos, platos, vasos y utensilios en cajones cerrados o dentro del refrigerador.</li>
        <li>Despeja la parte baja de la tarja, alacenas y zonas detrás de la estufa y el refrigerador.</li>
        <li>Cubre o retira peceras y jaulas, y saca a tus mascotas de la casa durante el servicio.</li>
        <li>Recoge juguetes, ropa y objetos del piso para que el técnico pueda aplicar en zócalos y esquinas.</li>
        <li>Avisa si en casa hay bebés, personas embarazadas o con problemas respiratorios.</li>
      </ul>
      <blockquote>El técnico te indicará cuánto tiempo deben permanecer fuera las personas y las mascotas, ya que depende del producto y del método que se use. <small>Equipo Biosfera</small></blockquote>
      <h3>Después del servicio</h3>
      <ul>
        <li>Respeta el tiempo de reingreso indicado y ventila abriendo puertas y ventanas.</li>
        <li>Lava trastes o superficies de preparación de alimentos que hayan quedado expuestas.</li>
        <li>Pregunta cuándo puedes trapear las zonas tratadas para no retirar el producto antes de tiempo.</li>
        <li>Es normal ver algunos insectos en los días siguientes: salen de sus refugios al tener contacto con el producto.</li>
      </ul>
    `,
  },
  {
    slug: 'plagas-en-temporada-de-lluvias-cdmx',
    image: '/assets/img/bio/lluvia.jpg',
    date: '14 Oct 2026',
    category: 'Temporada de lluvias',
    title: 'Plagas más comunes en la CDMX en temporada de lluvias',
    excerpt:
      'Entre junio y septiembre aumentan las ratas, cucarachas, mosquitos y arañas en casas y negocios de la Ciudad de México. Te contamos por qué pasa y cómo prevenirlo.',
    body: `
      <p>Con las lluvias, el drenaje se llena y muchas plagas que viven en coladeras y alcantarillas buscan refugio en lugares secos: casas, sótanos, bodegas y locales. Estas son las más frecuentes en la Ciudad de México.</p>
      <h3>Ratas y ratones</h3>
      <p>Cuando el drenaje se inunda, los roedores suben a viviendas y sótanos. Además de dañar cableado y alimentos, pueden transmitir enfermedades como leptospirosis y salmonelosis.</p>
      <h3>Cucarachas</h3>
      <p>En la CDMX predominan la cucaracha americana, grande y rojiza, que sale de coladeras y registros, y la cucaracha alemana, más pequeña, que se instala en cocinas y aparatos eléctricos.</p>
      <h3>Mosquitos</h3>
      <p>Se multiplican en cualquier recipiente con agua estancada: cubetas, macetas, llantas, tinacos destapados y canaletas.</p>
      <h3>Arañas y alacranes</h3>
      <p>Buscan grietas secas dentro de casas y almacenes. En zonas del Estado de México con terrenos o construcciones cercanas, los alacranes son más frecuentes.</p>
      <h3>Cómo prevenir</h3>
      <ul>
        <li>Coloca rejillas o tapas en coladeras y registros.</li>
        <li>Sella grietas en muros y pisos y alrededor de tuberías.</li>
        <li>Guarda alimentos en recipientes cerrados y saca la basura diario.</li>
        <li>Vacía cualquier recipiente con agua estancada.</li>
        <li>Agenda un servicio preventivo antes o al inicio de la temporada.</li>
      </ul>
    `,
  },
  {
    slug: 'senales-de-que-tienes-roedores',
    image: '/assets/img/bio/estacion-cebadera.jpg',
    date: '07 Oct 2026',
    category: 'Plagas comunes',
    title: 'Señales de que tienes ratas o ratones en casa',
    excerpt:
      'Excremento, marcas de roeduras, ruidos por la noche y manchas de grasa en paredes son señales claras. Aprende a identificarlas a tiempo y qué hacer.',
    body: `
      <p>Los roedores son nocturnos y desconfiados, así que es común tenerlos en casa sin verlos. Estas son las señales más claras de su presencia.</p>
      <ul>
        <li><strong>Excremento:</strong> pequeñas bolitas oscuras cerca de alimentos, en cajones o detrás de muebles.</li>
        <li><strong>Roeduras:</strong> marcas en cables, empaques, puertas de madera o bolsas de alimento.</li>
        <li><strong>Ruidos:</strong> rasguños o pasos en techos, muros o plafones, sobre todo de noche.</li>
        <li><strong>Manchas de grasa:</strong> marcas oscuras en zoclos y paredes por donde pasan seguido.</li>
        <li><strong>Olor:</strong> un olor fuerte y persistente a orina en espacios cerrados.</li>
        <li><strong>Mascotas inquietas:</strong> perros y gatos que olfatean o rascan un mismo punto.</li>
      </ul>
      <blockquote>Evita barrer en seco el excremento de roedores: humedece primero la zona con desinfectante y usa guantes. <small>Equipo Biosfera</small></blockquote>
      <h3>¿Qué hacer?</h3>
      <p>Las trampas caseras pueden atrapar algún ejemplar, pero si las señales continúan es probable que haya un nido. Un control profesional ubica rutas y accesos, coloca estaciones seguras para niños y mascotas y te indica qué sellar para que no regresen.</p>
    `,
  },
  {
    slug: 'control-de-plagas-en-negocios-y-bodegas',
    image: '/assets/img/bio/restaurante.jpg',
    date: '30 Sep 2026',
    category: 'Negocios',
    title: 'Control de plagas en negocios y bodegas: qué debes saber',
    excerpt:
      'Restaurantes, locales y bodegas necesitan un programa constante, no un servicio aislado. Te explicamos por qué y qué pedirle a la empresa que contrates.',
    body: `
      <p>En un negocio una plaga no solo es una molestia: puede contaminar alimentos o mercancía, dañar tu reputación y causar problemas en una revisión sanitaria. Por eso conviene trabajar con un programa de control y no esperar a que aparezca el problema.</p>
      <h3>¿Por qué un programa periódico?</h3>
      <p>Las plagas entran todos los días con la mercancía, el drenaje y el movimiento de personas. Las visitas periódicas permiten detectar actividad a tiempo, revisar estaciones de roedores y reforzar los puntos críticos antes de que la población crezca.</p>
      <h3>Qué pedirle a la empresa de control de plagas</h3>
      <ul>
        <li>Un reporte de cada visita con áreas revisadas, productos aplicados y recomendaciones.</li>
        <li>Productos de uso urbano registrados y con su hoja de seguridad disponible.</li>
        <li>Horarios que no interrumpan la atención a tus clientes ni tu operación.</li>
        <li>Que cumpla con la NOM-256-SSA1-2012, la norma oficial que establece las condiciones sanitarias para los servicios urbanos de control de plagas mediante plaguicidas.</li>
      </ul>
      <h3>Buenas prácticas en tu negocio</h3>
      <ul>
        <li>Revisa la mercancía al recibirla y no almacenes directamente sobre el piso.</li>
        <li>Mantén limpias las zonas debajo de equipos de cocina y refrigeradores.</li>
        <li>Cierra huecos en puertas, cortinas y registros.</li>
      </ul>
    `,
  },
];

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug);

export const postUrl = (post) => `/blog/${post.slug}`;

export const blogSidebar = {
  categories: ['Manejo integrado', 'Prevención', 'Temporada de lluvias', 'Plagas comunes', 'Negocios'],
  tags: ['Cucarachas', 'Chinches', 'Termitas', 'Carcoma', 'Ratas', 'Ratones', 'Pulgas', 'Desinfección'],
};
