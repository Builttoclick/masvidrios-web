export interface FaqZ { q: string; a: string; }
export interface Zona {
  slug: string;
  nombre: string;          // nombre de la ciudad/zona
  metaTitle: string;       // prefijo del <title>
  titleTail: string;
  metaDesc: string;
  hero: string;
  intro: string[];
  local: string[];         // contenido hiperlocal
  faqs: FaqZ[];
}

export const zonas: Zona[] = [
  {
    slug: 'san-lorenzo',
    nombre: 'San Lorenzo',
    metaTitle: 'Vidriería en San Lorenzo',
    titleTail: 'vidrio templado, cerramientos, mamparas y aberturas de aluminio en San Lorenzo',
    metaDesc: 'Vidriería en San Lorenzo: vidrio templado, cerramientos, mamparas, divisorias y aberturas de aluminio. Empresa familiar local con +15 años. Vamos a tu obra. Presupuesto sin compromiso.',
    hero: 'Somos de San Lorenzo. Acá nacimos en 2009 y acá tenemos nuestro taller.',
    intro: [
      'MÁS VIDRIOS es una empresa sanlorenzana de pies a cabeza. Desde 2009 trabajamos el vidrio y el aluminio en San Lorenzo y desde acá salimos a toda la Gran Asunción. Conocemos los barrios, las calles y el tipo de obra de la zona, eso hace que llegar, medir y colocar sea más rápido y más prolijo.',
      'Si estás en San Lorenzo, somos literalmente tu vidriería de barrio: nos trasladamos a tu casa, comercio u obra sin costo para presupuestar, y coordinamos los trabajos con la cercanía de quien está a la vuelta.',
    ],
    local: [
      'Trabajamos en todos los barrios de San Lorenzo, del centro a las zonas de quintas, atendiendo tanto viviendas como locales comerciales y oficinas. Para los comercios sobre las avenidas principales hacemos vidrieras, frentes y cerramientos; para las casas, cerramientos de galería, mamparas, ventanas de aluminio y barandas.',
      'Al ser locales, los plazos de visita y colocación en San Lorenzo son los más cortos de toda nuestra cobertura. Y si surge algún ajuste o mantenimiento, estamos cerca para resolverlo.',
    ],
    faqs: [
      { q: '¿Atienden en todo San Lorenzo?', a: 'Sí, en todos los barrios de San Lorenzo, tanto en el centro como en las zonas de quintas. Es nuestra ciudad base, así que la cobertura es total y los plazos los más rápidos.' },
      { q: '¿Tienen taller o local en San Lorenzo?', a: 'Sí, nuestro taller está en San Lorenzo. La dirección exacta te la pasamos al coordinar la visita o el retiro de un trabajo.' },
      { q: '¿Cobran la visita para presupuestar en San Lorenzo?', a: 'No. La visita para tomar medidas y presupuestar es sin cargo y sin compromiso dentro de San Lorenzo y la Gran Asunción.' },
    ],
  },
  {
    slug: 'asuncion',
    nombre: 'Asunción',
    metaTitle: 'Vidriería en Asunción',
    titleTail: 'vidrio templado, cerramientos, divisorias de oficina y aberturas de aluminio en Asunción',
    metaDesc: 'Vidriería en Asunción: vidrio templado, cerramientos, divisorias de oficina, fachadas y aberturas de aluminio. +15 años de experiencia. Obras como la fachada de SITRANDE/ANDE. Presupuesto gratis.',
    hero: 'Trabajamos en toda Asunción, de la vivienda al edificio corporativo.',
    intro: [
      'Asunción es donde están muchas de nuestras obras más exigentes. Desde MÁS VIDRIOS cruzamos a la capital de forma constante para cerramientos, divisorias de oficina, fachadas comerciales y trabajos de vidrio templado en viviendas y edificios.',
      'Una de nuestras obras destacadas está justamente en Asunción: la fachada del Sindicato de Trabajadores de la ANDE (SITRANDE), sobre la calle Tte. Fariña. Ese tipo de trabajo en altura y de cara al público es la mejor carta de presentación de lo que hacemos.',
    ],
    local: [
      'En el microcentro y las zonas comerciales trabajamos vidrieras, frentes y muros cortina; en los barrios residenciales, cerramientos de galería, mamparas y aberturas de aluminio. Para oficinas y edificios corporativos, nuestras divisiones de vidrio son una de las soluciones más pedidas.',
      'Coordinamos las visitas y la logística para movernos con la realidad del tránsito asunceno, y si la obra lo requiere trabajamos por etapas o en horarios convenidos.',
    ],
    faqs: [
      { q: '¿Hacen divisiones de oficina en Asunción?', a: 'Sí, es uno de nuestros trabajos más solicitados en la capital. Hacemos tabiquería de vidrio, salas de reunión y puertas vidriadas a medida para oficinas y edificios.' },
      { q: '¿Trabajan fachadas y vidrieras comerciales en Asunción?', a: 'Sí. Hicimos, por ejemplo, la fachada de SITRANDE/ANDE. Hacemos vidrieras, frentes comerciales y muros cortina en zonas de alto tránsito.' },
      { q: '¿Llegan a todos los barrios de Asunción?', a: 'Sí, cubrimos toda Asunción. Coordinamos la visita según la zona para optimizar los tiempos.' },
    ],
  },
  {
    slug: 'luque',
    nombre: 'Luque',
    metaTitle: 'Vidriería en Luque',
    titleTail: 'vidrio templado, cerramientos, mamparas y aberturas de aluminio en Luque',
    metaDesc: 'Vidriería en Luque: cerramientos de vidrio, mamparas, divisorias y aberturas de aluminio a medida. Empresa familiar con +15 años. Vamos a tu obra. Presupuesto sin compromiso.',
    hero: 'Llegamos a Luque y alrededores con el mismo servicio de siempre.',
    intro: [
      'Luque está dentro de nuestra zona de trabajo habitual. Desde San Lorenzo llegamos sin problema para cerramientos de galería, mamparas de baño, ventanas de aluminio, barandas y trabajos de vidrio templado en viviendas y comercios.',
      'El crecimiento residencial de Luque trajo muchas casas nuevas que buscan cerrar galerías y quinchos para aprovecharlos todo el año, uno de los trabajos que más hacemos en la zona.',
    ],
    local: [
      'Atendemos tanto las zonas residenciales de Luque como los barrios cercanos al centro y a las avenidas comerciales. Para las casas con jardín y piscina, los cerramientos de vidrio con aluminio negro son tendencia y quedan espectaculares; para los comercios, hacemos vidrieras y frentes.',
      'Como en toda nuestra cobertura, la visita para presupuestar en Luque es sin cargo y sin compromiso.',
    ],
    faqs: [
      { q: '¿Atienden en Luque sin recargo por distancia?', a: 'Luque está dentro de nuestra zona habitual; la visita para presupuestar es sin cargo. Cualquier detalle de logística lo charlamos al coordinar.' },
      { q: '¿Qué es lo que más hacen en Luque?', a: 'Cerramientos de galería y quincho, mamparas y aberturas de aluminio para las viviendas nuevas de la zona.' },
      { q: '¿Trabajan en barrios cerrados de Luque?', a: 'Sí. Coordinamos el ingreso y los horarios según las reglas de cada barrio cerrado o condominio.' },
    ],
  },
  {
    slug: 'fernando-de-la-mora',
    nombre: 'Fernando de la Mora',
    metaTitle: 'Vidriería en Fernando de la Mora',
    titleTail: 'vidrio templado, mamparas, cerramientos y aberturas de aluminio en Fernando de la Mora',
    metaDesc: 'Vidriería en Fernando de la Mora: vidrio templado, mamparas, cerramientos y aberturas de aluminio a medida. +15 años de experiencia. Presupuesto sin compromiso, vamos a tu obra.',
    hero: 'Fernando de la Mora, a pasos de nuestra base en San Lorenzo.',
    intro: [
      'Fernando de la Mora limita con San Lorenzo, así que es una de las zonas que atendemos con mayor rapidez. Hacemos mamparas, cerramientos, divisiones, ventanas de aluminio y todo tipo de trabajos de vidrio templado, tanto en viviendas como en comercios y oficinas.',
      'La cercanía con nuestro taller hace que medir, fabricar y colocar en Fernando de la Mora sea ágil, ideal cuando necesitás resolver rápido.',
    ],
    local: [
      'Cubrimos tanto Fernando de la Mora Norte como Sur, atendiendo las zonas residenciales y los corredores comerciales sobre las avenidas principales. Para casas hacemos cerramientos y mamparas; para locales, vidrieras y frentes de aluminio y vidrio.',
      'La visita para tomar medidas y presupuestar es sin cargo, como en toda nuestra cobertura de la Gran Asunción.',
    ],
    faqs: [
      { q: '¿Cuánto tardan en ir a Fernando de la Mora?', a: 'Al estar pegado a San Lorenzo, es de las zonas que atendemos más rápido. Coordinamos la visita en pocos días.' },
      { q: '¿Hacen mamparas a medida en Fernando de la Mora?', a: 'Sí. Vamos a tu baño, medimos y fabricamos la mampara de vidrio templado a la medida exacta.' },
      { q: '¿Atienden comercios sobre las avenidas?', a: 'Sí, hacemos vidrieras, frentes y cerramientos comerciales en los corredores de avenidas de Fernando de la Mora.' },
    ],
  },
  {
    slug: 'capiata',
    nombre: 'Capiatá',
    metaTitle: 'Vidriería en Capiatá',
    titleTail: 'vidrio templado, cerramientos, aberturas de aluminio y mamparas en Capiatá',
    metaDesc: 'Vidriería en Capiatá: cerramientos de vidrio, aberturas de aluminio, mamparas y vidrio templado a medida. Empresa familiar con +15 años. Vamos a tu obra. Presupuesto gratis.',
    hero: 'Capiatá también está dentro de nuestra zona de cobertura.',
    intro: [
      'Capiatá forma parte del corredor donde trabajamos habitualmente desde San Lorenzo. Hacemos cerramientos de galería, aberturas de aluminio, mamparas, barandas y trabajos de vidrio templado para las viviendas y comercios de la zona.',
      'Con el crecimiento de Capiatá, cada vez más casas buscan cerrar galerías y poner aberturas de aluminio de calidad, justo lo nuestro.',
    ],
    local: [
      'Atendemos las zonas residenciales y los barrios sobre la Ruta 2 y avenidas principales de Capiatá. Para las viviendas hacemos cerramientos y mamparas; para los comercios, frentes y vidrieras.',
      'La visita para presupuestar en Capiatá es sin cargo y sin compromiso.',
    ],
    faqs: [
      { q: '¿Atienden en Capiatá?', a: 'Sí, Capiatá está dentro de nuestra zona de cobertura habitual. Coordinamos la visita para tomar medidas sin cargo.' },
      { q: '¿Qué trabajos hacen más seguido en Capiatá?', a: 'Cerramientos de galería, aberturas de aluminio y mamparas para las viviendas de la zona.' },
      { q: '¿Hay costo de traslado a Capiatá?', a: 'La visita para presupuestar es sin cargo. Si hubiera algún detalle de logística por la distancia, lo charlamos de forma transparente antes de empezar.' },
    ],
  },
  {
    slug: 'lambare',
    nombre: 'Lambaré',
    metaTitle: 'Vidriería en Lambaré',
    titleTail: 'vidrio templado, cerramientos, divisorias y aberturas de aluminio en Lambaré',
    metaDesc: 'Vidriería en Lambaré: vidrio templado, cerramientos, divisorias de oficina y aberturas de aluminio a medida. +15 años de experiencia. Presupuesto sin compromiso, vamos a tu obra.',
    hero: 'Trabajamos en Lambaré con el mismo estándar de siempre.',
    intro: [
      'Lambaré está dentro de nuestra zona de trabajo en la Gran Asunción. Hacemos cerramientos, mamparas, divisiones de oficina, aberturas de aluminio y vidrio templado en viviendas, comercios y oficinas de la ciudad.',
      'Desde San Lorenzo llegamos a Lambaré de forma habitual para presupuestar y colocar, con la misma prolijidad y cumplimiento que nos caracteriza desde 2009.',
    ],
    local: [
      'Cubrimos las zonas residenciales de Lambaré y los corredores comerciales. Para casas hacemos cerramientos de galería y mamparas; para oficinas y locales, divisiones de vidrio, vidrieras y frentes.',
      'La visita para tomar medidas y presupuestar es sin cargo, como en toda la Gran Asunción.',
    ],
    faqs: [
      { q: '¿Llegan a Lambaré?', a: 'Sí, Lambaré está dentro de nuestra cobertura habitual de la Gran Asunción. Coordinamos la visita sin cargo.' },
      { q: '¿Hacen divisiones de oficina en Lambaré?', a: 'Sí. Hacemos tabiquería de vidrio y puertas vidriadas a medida para oficinas y locales de Lambaré.' },
      { q: '¿La visita tiene costo?', a: 'No, la visita para presupuestar es gratuita y sin compromiso.' },
    ],
  },
];

export const getZona = (slug: string) => zonas.find((z) => z.slug === slug);
