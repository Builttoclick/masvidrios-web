// `galeria` = clave `sub` de galeria.ts: las fotos de ese grupo se muestran debajo de este bloque.
export interface Bloque { h2: string; parrafos?: string[]; lista?: string[]; galeria?: string; }
export interface Faq { q: string; a: string; }
export interface VideoServicio { src: string; poster: string; titulo: string; }
export interface Servicio {
  slug: string;
  nombre: string;          // nombre corto (cards, nav)
  categoria: string;       // keyword para H1 (categoría + ciudad lo arma la página)
  icon: string;            // svg inner paths
  foto: string;            // /fotos/proyectos/...
  fotoAlt: string;
  metaTitle: string;       // prefijo del <title> (keyword + ciudad)
  titleTail: string;       // cola del <title>
  metaDesc: string;
  hero: string;            // bajada del hero
  intro: string[];
  bloques: Bloque[];
  destacados: string[];
  faqs: Faq[];
  videos?: VideoServicio[]; // videos reales de obra (self-hosted en /videos/)
}

const CIUDAD = 'San Lorenzo';

// Orden de presentacion (home, /servicios/, interlinking): primero los TRES VIDRIOS con que se trabaja
// (templado, laminado y DVH) y despues la carpinteria de aluminio, que es la que los aloja.
// Pedido de Jose en la revision del 09-ago. Lo que no este aca queda al final, en el orden del catalogo.
const ORDEN = [
  'vidrio-templado',
  'vidrio-laminado',
  'dvh-doble-vidriado-hermetico',
  'aberturas-de-aluminio',
  'cerramientos-de-vidrio',
  'mamparas-de-bano',
  'divisorias-de-oficina',
  'barandas-vidriadas',
  'cielo-raso-durlock',
  'policarbonato',
  'espejos',
  'puertas-automaticas',
  'stampa-vidrio-impreso',
  'mantenimientos',
];

const catalogo: Servicio[] = [
  {
    slug: 'vidrio-templado',
    nombre: 'Vidrio templado',
    categoria: 'Vidrio templado',
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 3v18"/>',
    foto: '/fotos/proyectos/puerta-corrediza-vidrio-aluminio-negro-estilo-industrial-cuadricula.jpg',
    fotoAlt: 'Puerta corrediza de vidrio templado estilo industrial con aluminio negro · MÁS VIDRIOS',
    metaTitle: 'Vidrio templado en San Lorenzo',
    titleTail: 'puertas, ventanas, mamparas y tapas de vidrio templado a medida cerca tuyo',
    metaDesc: 'Puertas, ventanas, tapas de mesa y cerramientos con vidrio templado en San Lorenzo y Gran Asunción, hechos a medida e instalados. Empresa familiar con +15 años. Presupuesto sin compromiso.',
    hero: 'Nuestro rubro principal: puertas, ventanas, mamparas y tapas de mesa con vidrio templado de seguridad, a medida y con terminación prolija.',
    intro: [
      'El vidrio templado es el corazón de lo que hacemos en MÁS VIDRIOS desde 2009. Es un vidrio sometido a un tratamiento térmico que lo vuelve hasta cinco veces más resistente que un vidrio común y que, ante un golpe extremo, se fragmenta en pedazos pequeños y sin filo en lugar de astillas peligrosas. Por eso es el material indicado para puertas, ventanas, mamparas, barandas y tapas de mesa donde la seguridad importa.',
      'Trabajamos toda la cadena: te asesoramos sobre el espesor y el tipo de vidrio según el uso, tomamos las medidas en tu obra, coordinamos el corte y el templado de cada pieza con la planta, y armamos y colocamos el trabajo con la perfilería y los herrajes correctos. En San Lorenzo y toda Gran Asunción nos trasladamos a tu domicilio u obra para presupuestar sin compromiso.',
    ],
    bloques: [
      {
        h2: '¿Para qué se usa el vidrio templado?', galeria: 'usos-templado',
        lista: [
          'Puertas de vidrio templado (de abrir, corredizas o pivotantes) para viviendas y locales.',
          'Ventanas y paños fijos de gran formato que aprovechan la luz natural.',
          'Tapas de mesa de vidrio templado a medida, con cantos pulidos.',
          'Mamparas de baño y divisorios donde se necesita resistencia y seguridad.',
          'Frentes comerciales y vidrieras de alto tránsito.',
        ],
      },
      {
        h2: 'Por qué elegir vidrio templado y no vidrio común',
        parrafos: [
          'La diferencia se nota en el uso diario. Un vidrio crudo de la misma medida es mucho más frágil y, si se rompe, lo hace en placas con filo. El templado resiste mejor los golpes, los cambios de temperatura y el peso de los herrajes, y cumple con las exigencias de seguridad para puertas y barandas.',
          'Si tu proyecto no requiere templado, también hacemos trabajos con vidrio crudo, laminado y espejos: te recomendamos la opción justa para que no pagues de más ni de menos.',
        ],
      },
      {
        h2: 'Cuándo va templado y cuándo va laminado',
        parrafos: [
          'El templado es el indicado para puertas, ventanas, mamparas, barandas y tapas de mesa. Para fachadas de edificios y techos de vidrio, en cambio, va el laminado: lleva una lámina intermedia que sostiene los pedazos si el vidrio llega a romperse, y por eso es el que corresponde cuando el vidrio está en altura sobre la gente.',
          'Trabajamos los dos, y cuando vamos a tu obra te decimos cuál corresponde en cada lugar. Muchas veces en la misma casa conviven los dos, y saber cuál va en cada sitio es parte del asesoramiento.',
        ],
      },
    ],
    destacados: [
      'Trabajos a medida con vidrio templado de seguridad',
      'Asesoramiento de espesor y herrajes según el uso',
      'Medición en obra y colocación profesional',
      'Cobertura en San Lorenzo y toda Gran Asunción',
    ],
    faqs: [
      { q: '¿El vidrio templado se puede cortar después de templado?', a: 'No. El vidrio se corta y se procesa (perforaciones, pulido) antes del templado. Por eso es clave tomar bien las medidas en obra desde el principio, de eso nos encargamos nosotros.' },
      { q: '¿Cuánto tarda un trabajo con vidrio templado?', a: 'Depende del tamaño y de la cola de fabricación, pero en general entre una y dos semanas desde que se aprueba el presupuesto y se toman las medidas definitivas. Te damos un plazo concreto al presupuestar.' },
      { q: '¿Hacen tapas de mesa de vidrio templado a medida?', a: 'Sí, con el espesor y el canto que prefieras (pulido recto, biselado, etc.). Tomamos el molde exacto de tu mesa para que calce perfecto.' },
      { q: '¿Qué vidrio corresponde en una fachada o en un techo de vidrio?', a: 'Ahí va vidrio laminado: lleva una lámina intermedia que sostiene los pedazos si el vidrio llega a romperse, y por eso es el que corresponde cuando el vidrio está en altura. El templado va en puertas, ventanas, mamparas, barandas y tapas de mesa. Trabajamos los dos y te decimos cuál corresponde en cada parte de tu obra.' },
    ],
    videos: [
      { src: '/videos/video-puerta-pivotante-vidrio-aluminio-negro.mp4', poster: '/videos/video-puerta-pivotante-vidrio-aluminio-negro-poster.jpg', titulo: 'Puerta pivotante de vidrio con marco de aluminio negro y manijón de acero' },
    ],
  },
  {
    slug: 'vidrio-laminado',
    nombre: 'Vidrio laminado',
    categoria: 'Vidrio laminado',
    icon: '<path d="M4 5h16v5H4z"/><path d="M4 14h16v5H4z"/><path d="M2 12h20"/>',
    foto: '/fotos/proyectos/muro-cortina-vidrio-fachada-edificio-ladrillo.jpg',
    fotoAlt: 'Muro cortina de vidrio en la fachada de un edificio, donde corresponde vidrio laminado · MÁS VIDRIOS',
    metaTitle: 'Vidrio laminado en San Lorenzo',
    titleTail: 'fachadas, techos de vidrio y barandas en altura con vidrio laminado de seguridad cerca tuyo',
    metaDesc: 'Vidrio laminado de seguridad en San Lorenzo y Gran Asunción: fachadas, techos de vidrio, barandas en altura y vidrieras. Dos vidrios unidos por una lámina que los sostiene en su lugar. Presupuesto sin compromiso.',
    hero: 'El vidrio que se queda en su lugar aunque llegue a romperse: el que corresponde en fachadas, techos de vidrio y barandas en altura.',
    intro: [
      'El vidrio laminado son dos vidrios unidos por una lámina intermedia transparente que queda pegada a los dos. Si el paño recibe un golpe fuerte, los pedazos quedan adheridos a esa lámina y el vidrio se mantiene en su lugar en lugar de caer. Por eso es el vidrio de seguridad que corresponde cuando hay gente circulando abajo.',
      'La diferencia se nota sobre todo en altura. En una fachada de varios pisos o en un techo de vidrio, el laminado es lo que hace que un vidrio golpeado siga siendo un vidrio golpeado dentro de su marco. En MÁS VIDRIOS lo usamos justamente ahí, y cuando vamos a tu obra te decimos en qué parte corresponde cada uno.',
    ],
    bloques: [
      {
        h2: 'Dónde va vidrio laminado',
        lista: [
          'Fachadas y muros cortina de edificios y locales.',
          'Techos de vidrio y aberturas en el techo para iluminar ambientes interiores.',
          'Barandas de balcones y terrazas con circulación abajo.',
          'Escaleras y entrepisos vidriados.',
          'Vidrieras y frentes comerciales de alto tránsito.',
          'Paños grandes donde además se busca cortar el ruido de la calle.',
        ],
      },
      {
        h2: 'Laminado y templado: cuál va en cada lugar',
        parrafos: [
          'Los dos son vidrios de seguridad y muchas veces conviven en la misma obra. El templado es el más resistente al golpe y es el que va en puertas, ventanas, mamparas y tapas de mesa. El laminado es el que va cuando lo importante es que el vidrio se quede donde está: fachadas, techos y barandas en altura.',
          'Cuando vamos a tu obra miramos qué hay arriba y qué hay abajo de cada paño y te decimos cuál corresponde. Es la parte del trabajo que no se ve en la foto terminada y es la que más importa.',
        ],
      },
      {
        h2: 'Además de la seguridad',
        parrafos: [
          'La lámina intermedia corta buena parte de los rayos UV, así que protege pisos, muebles y cortinas de la decoloración, y amortigua la vibración del vidrio, con lo cual entra menos ruido de la calle. En dormitorios y oficinas sobre avenida es una diferencia que se escucha.',
        ],
      },
    ],
    destacados: [
      'Los pedazos quedan sostenidos por la lámina',
      'Fachadas, techos de vidrio y barandas en altura',
      'Filtra rayos UV y baja el ruido',
      'Asesoramiento de espesor según el uso',
    ],
    faqs: [
      { q: '¿Qué diferencia hay entre vidrio laminado y vidrio templado?', a: 'El templado es hasta cinco veces más resistente al golpe y, si se rompe, se deshace en pedazos chicos y sin filo. El laminado lleva una lámina intermedia que sostiene esos pedazos en su lugar, así que el paño no cae. Por eso el templado va en puertas, ventanas y mamparas, y el laminado en fachadas, techos y barandas en altura.' },
      { q: '¿Por qué en una fachada corresponde laminado?', a: 'Porque está en altura y hay gente circulando abajo. Con laminado, un vidrio golpeado queda entero en su marco hasta que se lo reemplaza. Es la razón por la que lo pedimos en edificios y frentes de varios pisos.' },
      { q: '¿Se puede usar laminado en una baranda?', a: 'Sí, y en muchos casos es lo que corresponde: cuando la baranda está sobre otro balcón, sobre la vereda o sobre un espacio por donde pasa gente. Lo definimos cuando vemos la obra.' },
      { q: '¿El laminado sirve para bajar el ruido?', a: 'Ayuda bastante, porque la lámina intermedia amortigua la vibración del vidrio. Si lo que más te interesa es la aislación del ruido y del calor, mirá también el DVH, que es el que mejor rinde en eso.' },
    ],
  },
  {
    slug: 'dvh-doble-vidriado-hermetico',
    nombre: 'DVH · doble vidriado',
    categoria: 'DVH, doble vidriado hermético',
    icon: '<rect x="3" y="4" width="6" height="16" rx="1"/><rect x="15" y="4" width="6" height="16" rx="1"/><path d="M12 9v6"/>',
    foto: '/fotos/galeria/ventana-corrediza-aluminio-negro-ladrillo-visto.jpg',
    fotoAlt: 'Ventana corrediza de aluminio negro, el tipo de abertura donde se coloca DVH · MÁS VIDRIOS',
    metaTitle: 'DVH doble vidriado hermético en San Lorenzo',
    titleTail: 'ventanas con doble vidrio hermético para aislar el calor y el ruido cerca tuyo',
    metaDesc: 'DVH, doble vidriado hermético, en San Lorenzo y Gran Asunción: dos vidrios con cámara de aire sellada que aíslan el calor y el ruido. Para dormitorios, oficinas y ambientes con aire acondicionado. Presupuesto sin compromiso.',
    hero: 'Dos vidrios con una cámara de aire sellada entre medio: el vidrio que aísla el calor y el ruido, cada vez más pedido en casas.',
    intro: [
      'El DVH, doble vidriado hermético, son dos vidrios separados por una cámara de aire que se sella de fábrica. Esa cámara es la que hace el trabajo: frena el paso del calor y amortigua el ruido de afuera. Como el conjunto va sellado, adentro no entra ni aire ni humedad, y el vidrio se mantiene transparente.',
      'Es lo que más creció en los últimos años, sobre todo en viviendas. Con el calor de acá, un ambiente con aire acondicionado y ventanas comunes pelea contra la ventana todo el día. Con DVH el equipo enfría más rápido y después mantiene el ambiente con mucho menos esfuerzo.',
    ],
    bloques: [
      {
        h2: 'Qué resuelve el DVH',
        lista: [
          'Ambientes con aire acondicionado que cuesta mantener frescos.',
          'Dormitorios y oficinas sobre calles con mucho movimiento.',
          'Ventanales grandes que reciben sol directo buena parte del día.',
          'Fachadas y frentes vidriados de casas y edificios.',
          'Ambientes donde el vidrio se empaña con el cambio de temperatura.',
        ],
      },
      {
        h2: 'Va con la perfilería que le corresponde',
        parrafos: [
          'El DVH es más grueso y más pesado que un vidrio simple, así que necesita una línea de aluminio preparada para alojarlo. Cuando presupuestamos una abertura con DVH elegimos esa línea desde el principio, para que el paño calce y cierre como tiene que cerrar. Te entregamos la abertura completa, con el vidrio, la perfilería y los herrajes que van juntos.',
        ],
      },
      {
        h2: 'Cuándo conviene',
        parrafos: [
          'Donde mejor rinde cada guaraní es en ambientes climatizados y en frentes con sol directo o con ruido de calle. Para aberturas interiores o chicas, un vidrio templado o laminado resuelve igual de bien y sale menos. Contanos qué querés mejorar, si es el calor, el ruido o las dos cosas, y te decimos qué conviene en tu caso.',
        ],
      },
    ],
    destacados: [
      'Dos vidrios con cámara de aire sellada',
      'Aísla el calor y el ruido de la calle',
      'El aire acondicionado rinde más',
      'Con la línea de aluminio que le corresponde',
    ],
    faqs: [
      { q: '¿Qué significa DVH?', a: 'Doble vidriado hermético. Son dos vidrios separados por una cámara de aire que se sella de fábrica, de manera que adentro no entre ni aire ni humedad. Es el mismo producto que mucha gente llama "doble vidrio".' },
      { q: '¿Cuánto aísla realmente?', a: 'La diferencia se siente sobre todo en ambientes climatizados y en frentes con sol directo: el aire acondicionado enfría más rápido y después se mantiene con menos esfuerzo. Contra el ruido continuo de avenida también ayuda bastante.' },
      { q: '¿Puedo poner DVH en las ventanas que ya tengo?', a: 'El DVH necesita una perfilería preparada para su espesor y su peso, así que lo habitual es hacer la abertura nueva completa. Vamos a tu casa u obra, medimos y te presupuestamos la ventana con el DVH ya incluido.' },
      { q: '¿El DVH se empaña por dentro?', a: 'La cámara va sellada de fábrica justamente para que eso no pase, y bien colocado se mantiene transparente por años. Por eso importa que el sellado y la colocación los haga gente del rubro.' },
    ],
  },
  {
    slug: 'cerramientos-de-vidrio',
    nombre: 'Cerramientos & galerías',
    categoria: 'Cerramientos de vidrio',
    icon: '<path d="M4 20V8l8-5 8 5v12"/><path d="M9 20v-6h6v6"/>',
    foto: '/fotos/proyectos/cerramiento-vidrio-quincho-aluminio-negro-exterior.jpg',
    fotoAlt: 'Cerramiento de quincho con vidrio y aluminio negro, deck de madera · MÁS VIDRIOS',
    metaTitle: 'Cerramientos de vidrio en San Lorenzo',
    titleTail: 'cerramiento de galerías, quinchos y patios con vidrio y aluminio cerca tuyo',
    metaDesc: 'Cerramientos de vidrio para galerías, quinchos y patios en San Lorenzo y Gran Asunción. Ganá un ambiente nuevo sin perder la vista. Vidrio templado y aluminio a medida. Presupuesto gratis.',
    hero: 'Convertí tu galería, quincho o patio en un ambiente que se usa todo el año, sin perder la vista al jardín.',
    intro: [
      'Un cerramiento de vidrio es la forma más elegante de ganar metros útiles en tu casa. Cerrás la galería o el quincho con grandes paños de vidrio y perfilería de aluminio, y de golpe tenés un ambiente protegido del viento, la lluvia y el polvo, pero que sigue sintiéndose abierto, porque la vista al jardín queda intacta.',
      'En MÁS VIDRIOS diseñamos cada cerramiento a medida del espacio: corredizos para abrir en los días lindos, paños fijos para maximizar la transparencia, y la combinación de aluminio (blanco, negro o símil madera) que mejor acompañe tu casa.',
    ],
    bloques: [
      {
        h2: 'Tipos de cerramiento que hacemos', galeria: 'tipos-cerr',
        lista: [
          'Cerramiento de galerías y corredores con vidrio templado.',
          'Cierre de quinchos y áreas de parrilla para usarlos en invierno.',
          'Patios y terrazas convertidos en living o comedor.',
          'Sistemas corredizos de varios paños para abrir totalmente el ambiente.',
          'Cerramientos comerciales para locales y oficinas.',
        ],
      },
      {
        h2: 'Aluminio negro, blanco o símil madera', galeria: 'colores-cerr',
        parrafos: [
          'La perfilería define el carácter del cerramiento. El aluminio negro da un look moderno e industrial muy buscado; el blanco es clásico y luminoso; el símil madera aporta calidez sin el mantenimiento de la madera real. Te mostramos opciones y elegís la que combine con tu obra.',
        ],
      },
    ],
    destacados: [
      'Diseño a medida del espacio',
      'Sistemas corredizos o fijos',
      'Aluminio negro, blanco o símil madera',
      'Ideal para galerías, quinchos y patios',
    ],
    faqs: [
      { q: '¿Puedo abrir el cerramiento en los días lindos?', a: 'Sí. Con sistemas corredizos podés abrir total o parcialmente los paños y dejar la galería como estaba. Es la opción más elegida porque combina lo mejor de los dos mundos.' },
      { q: '¿El cerramiento aísla del frío y del ruido?', a: 'En buena medida. Cortar el viento ya hace una diferencia enorme de confort; si necesitás más aislación térmica y acústica podemos usar vidrios de mayor espesor o laminados.' },
      { q: '¿Trabajan con medidas irregulares?', a: 'Sí, justamente por eso medimos en obra. Nos adaptamos a galerías con desniveles, columnas o formas no rectangulares.' },
    ],
    videos: [
      { src: '/videos/video-cerramiento-vidrio-galeria-obra.mp4', poster: '/videos/video-cerramiento-vidrio-galeria-obra-poster.jpg', titulo: 'Cerramiento de una galería con paños fijos, en obra' },
    ],
  },
  {
    slug: 'mamparas-de-bano',
    nombre: 'Mamparas de baño',
    categoria: 'Mamparas de baño',
    icon: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 4l9 8 9-8"/>',
    foto: '/fotos/galeria/mampara-ducha-esquinera-vidrio-corrediza.jpg',
    fotoAlt: 'Mampara de ducha esquinera de vidrio con puertas corredizas en baño de mármol · MÁS VIDRIOS',
    metaTitle: 'Mamparas de baño en San Lorenzo',
    titleTail: 'mamparas de ducha con vidrio templado a medida cerca tuyo',
    metaDesc: 'Mamparas de baño en San Lorenzo y Gran Asunción: de ducha en vidrio templado de seguridad, y mamparas y divisiones de baño en Eucatex para locales y oficinas. A medida. Presupuesto sin compromiso.',
    hero: 'Mamparas de ducha con vidrio templado de seguridad: a medida, resistentes y fáciles de limpiar.',
    intro: [
      'La mampara de ducha es uno de esos detalles que cambian por completo un baño. Evita las salpicaduras, mantiene el ambiente cálido durante el baño y le da una sensación de amplitud y prolijidad que ninguna cortina logra. En MÁS VIDRIOS las fabricamos a medida de tu baño.',
      'Apostamos por el vidrio templado de seguridad: robusto, con una durabilidad garantizada y una transparencia que se mantiene en el tiempo. Vos elegís el sistema de apertura, los herrajes y el acabado; nosotros nos encargamos del resto.',
    ],
    bloques: [
      {
        h2: 'Opciones de mampara', galeria: 'opciones-mampara',
        lista: [
          'Mamparas fijas (cubre ducha), la opción más limpia y económica.',
          'Mamparas con puerta de abrir o corrediza.',
          'Vidrio transparente, ploteado o arenado para más privacidad.',
          'Herrajes en acero inoxidable, negro mate o cromados.',
        ],
      },
      {
        h2: 'Mamparas de baño en Eucatex', galeria: 'eucatex-bano',
        parrafos: [
          'Además de la mampara de ducha en vidrio, hacemos mamparas y divisiones de baño en Eucatex: paneles con parantes y perfilería de aluminio que separan duchas, inodoros y lavatorios. Es lo que más nos piden en baños de locales, fábricas, colegios y oficinas, porque se monta rápido, aguanta el uso intenso y queda prolijo.',
          'Se arman a la medida del baño, con la cantidad de cabinas que entren, el color de panel que elijas y las puertas con su herraje y su cierre. Van levantadas del piso para que se pueda limpiar por debajo.',
        ],
      },
    ],
    destacados: [
      'Vidrio templado de seguridad a medida',
      'Sistemas fijos, de abrir o corredizos',
      'Vidrio transparente, ploteado o con diseño',
      'Perfiles de aluminio en colores disponibles',
    ],
    faqs: [
      { q: '¿La mampara se hace a la medida exacta de mi baño?', a: 'Sí. Vamos a tu baño, tomamos las medidas reales (incluyendo desniveles y fuera de escuadra) y fabricamos la mampara para que calce perfecto, sin filtraciones.' },
      { q: '¿Qué espesor de vidrio usan?', a: 'Para mamparas usamos generalmente vidrio templado de 8 mm o 10 mm según el tamaño y el sistema. Te recomendamos el adecuado al presupuestar.' },
      { q: '¿Cómo se limpia una mampara de vidrio templado?', a: 'Con un limpiavidrios común y un secador de goma. Si querés que repela el agua y el sarro, podemos aplicar un tratamiento antical que facilita mucho el mantenimiento.' },
    ],
    videos: [
      { src: '/videos/video-mampara-corrediza-ducha-marmol.mp4', poster: '/videos/video-mampara-corrediza-ducha-marmol-poster.jpg', titulo: 'Mampara corrediza de ducha probada en obra por nuestro instalador' },
    ],
  },
  {
    slug: 'divisorias-de-oficina',
    nombre: 'Divisorias de oficina',
    categoria: 'Divisorias de oficina en vidrio',
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 3v18"/>',
    foto: '/fotos/proyectos/divisiones-oficina-vidrio-aluminio-blanco-interior.jpg',
    fotoAlt: 'Divisiones de oficina en vidrio con aluminio blanco y puertas vidriadas · MÁS VIDRIOS',
    metaTitle: 'Divisorias de oficina en San Lorenzo',
    titleTail: 'divisiones de vidrio y aluminio para oficinas cerca tuyo',
    metaDesc: 'Divisorias de oficina en vidrio, drywall y Eucatex en San Lorenzo y Gran Asunción, y divisiones de sanitarios a medida. Aislamiento acústico y térmico y diseño a medida. Presupuesto gratis.',
    hero: 'Oficinas más luminosas y ordenadas con divisiones a medida, en vidrio, drywall o Eucatex, y divisiones de sanitarios.',
    intro: [
      'Las divisiones de vidrio transformaron la forma de pensar las oficinas: separan ambientes sin cerrar la luz, dan sensación de amplitud y proyectan una imagen profesional y vanguardista. En MÁS VIDRIOS las diseñamos y personalizamos según tu presupuesto y la distribución real de tu espacio, porque sabemos que cada empresa tiene necesidades distintas.',
      'Trabajamos las divisiones vidriadas de piso a techo, las combinadas (drywall abajo y vidrio arriba, que es la más pedida) y las de Eucatex, siempre con perfilería de aluminio prolija y puertas con herrajes de calidad. El resultado: un ambiente de trabajo aislado del ruido pero conectado visualmente.',
    ],
    bloques: [
      {
        h2: 'Tres materiales para dividir una oficina', galeria: 'materiales-div',
        parrafos: [
          'Dividir dos oficinas se puede resolver de tres maneras, y muchas veces se combinan en el mismo trabajo. En vidrio, cuando lo que se busca es luz y amplitud. En drywall (placa de yeso), cuando se necesita una pared llena, con aislación adentro y lista para pintar. Y en Eucatex, la opción más económica y rápida de montar para dividir un espacio de trabajo.',
          'La combinación que más nos piden es drywall en la parte baja y vidrio arriba: da privacidad a la altura del escritorio y deja pasar la luz por encima. Contanos cómo es tu oficina y armamos la mezcla que mejor funcione.',
        ],
      },
      {
        h2: 'Qué resolvemos con las divisorias',
        lista: [
          'Separar oficinas, salas de reunión y recepciones manteniendo la luz natural.',
          'Aislamiento acústico y térmico entre ambientes.',
          'Puertas de vidrio con manijones de acero y cierres suaves.',
          'Divisiones combinadas: drywall o Eucatex abajo, vidrio arriba.',
          'Cabinas y divisiones de sanitarios en Eucatex para baños de empresa.',
          'Vinilos o vidrio arenado para zonas que requieren reserva.',
        ],
      },
      {
        h2: 'Divisiones de sanitarios',
        parrafos: [
          'El mismo sistema resuelve los baños de locales, fábricas, colegios y oficinas: cabinas de sanitario en paneles de Eucatex con parantes y perfilería de aluminio, puertas con herrajes y cierre, y todo levantado del piso para que se pueda limpiar por debajo. Las fotos de esos trabajos están en la página de mamparas de baño, que es donde agrupamos todo lo de sanitarios.',
        ],
      },
      {
        h2: 'Aluminio blanco o negro, a tu medida',
        parrafos: [
          'La perfilería puede ir en blanco para un look limpio y luminoso, o en negro para una estética más corporativa y de tendencia. Nos adaptamos a tu presupuesto y ajustamos el diseño y la distribución de los espacios, para nosotros cada cliente es único.',
        ],
      },
    ],
    destacados: [
      'Vidrio, drywall o Eucatex',
      'Cabinas de sanitarios en Eucatex',
      'Diseño y distribución a medida',
      'Aislamiento acústico y térmico',
    ],
    faqs: [
      { q: '¿Con qué materiales se hace una divisoria de oficina?', a: 'Con tres: vidrio, drywall (placa de yeso) y Eucatex. Se pueden combinar, y de hecho la solución más pedida es drywall o Eucatex en la parte baja y vidrio arriba.' },
      { q: '¿Las divisiones de vidrio dejan pasar el ruido?', a: 'Bien instaladas, con el espesor y la silicona correctos, aíslan muy bien el ruido entre ambientes. Para salas que necesitan más reserva usamos vidrios de mayor espesor o doble vidrio.' },
      { q: '¿Puedo tener privacidad sin perder la luz?', a: 'Sí. Se puede usar vidrio arenado, vinilos decorativos o un paño lleno de drywall o Eucatex en la parte baja, manteniendo la luz natural en la parte superior.' },
      { q: '¿Trabajan en oficinas ya en funcionamiento?', a: 'Sí. Coordinamos la instalación para minimizar la interrupción, y de ser necesario trabajamos por etapas o fuera del horario laboral.' },
    ],
  },
  {
    slug: 'aberturas-de-aluminio',
    nombre: 'Aberturas de aluminio',
    categoria: 'Aberturas de aluminio',
    icon: '<rect x="2" y="6" width="20" height="12" rx="1"/><path d="M6 6v12M10 6v12M14 6v12M18 6v12"/>',
    foto: '/fotos/proyectos/ventana-corrediza-aluminio-simil-madera-mosquitero-ladrillo.jpg',
    fotoAlt: 'Ventana corrediza de aluminio símil madera con mosquitero · MÁS VIDRIOS',
    metaTitle: 'Aberturas de aluminio en San Lorenzo',
    titleTail: 'ventanas y puertas de aluminio a medida cerca tuyo',
    metaDesc: 'Aberturas de aluminio en San Lorenzo y Gran Asunción: ventanas y puertas corredizas, batientes y proyectantes, líneas Inova, Gold y Alpha, efecto madera y tela mosquitera. A medida y bien instaladas. Presupuesto sin compromiso.',
    hero: 'Ventanas y puertas de aluminio a medida, en líneas Inova, Gold y Alpha, con o sin vidrio, con tela mosquitera y en distintos diseños y colores.',
    intro: [
      'El aluminio es el complemento natural del vidrio y una de nuestras especialidades. Es un metal liviano y no inflamable, no se oxida, casi no necesita mantenimiento y permite armar ventanas y puertas de gran tamaño con marcos más finos que los de otros materiales, que dejan entrar la mayor cantidad de luz posible.',
      'En MÁS VIDRIOS trabajamos las líneas Inova, Gold y Alpha, además de las aberturas con tela mosquitera y el color efecto madera para quienes buscan la calidez de la madera sin su mantenimiento. Fabricamos y colocamos a medida, con el vidrio que corresponda en cada caso.',
    ],
    bloques: [
      {
        h2: 'Líneas y productos', galeria: 'productos',
        lista: [
          'Ventanas corredizas, batientes y proyectantes en líneas Inova, Gold y Alpha.',
          'Puertas de aluminio con o sin vidrio para entradas y balcones.',
          'Puertas vaivén para locales y ambientes de paso.',
          'Aluminio en distintos diseños y colores, incluido el efecto madera.',
          'Aberturas con tela mosquitera.',
          'Paños fijos y ventanales de gran formato.',
        ],
      },
      {
        h2: 'Aberturas sin vidrio', galeria: 'sinvidrio',
        parrafos: [
          'No toda la carpintería de aluminio lleva vidrio. Hacemos puertas ciegas de aluminio para lavaderos, depósitos, accesos de servicio y baños, puertas con tela mosquitera para el paso al patio, y tapas y cierres de aluminio a medida. Es el mismo trabajo de perfilería y herrajes, con el paño lleno en lugar del vidrio.',
        ],
      },
      {
        h2: 'Distintos diseños y colores', galeria: 'colores-alu',
        parrafos: [
          'El aluminio viene en distintos diseños y colores, del blanco y el negro al aluminio natural y el efecto madera. Te mostramos las muestras reales para que elijas viendo el material y no una pantalla. De la medida y del cierre nos encargamos nosotros: la abertura tiene que calzar y cerrar perfecto.',
        ],
      },
    ],
    destacados: [
      'Líneas Inova, Gold y Alpha',
      'Distintos diseños y colores',
      'Aberturas con y sin vidrio, y con tela mosquitera',
      'Fabricación y colocación a medida',
    ],
    faqs: [
      { q: '¿Qué línea de aluminio me conviene?', a: 'Depende del tamaño de la abertura, del peso del vidrio que va a llevar y del uso que le vas a dar. Trabajamos las líneas Inova, Gold y Alpha, y te decimos cuál corresponde en tu caso cuando vemos la obra.' },
      { q: '¿En qué colores viene el aluminio?', a: 'En distintos diseños y colores, del blanco y el negro al aluminio natural y el efecto madera. Contanos cómo es tu fachada o tu ambiente y te decimos cuál queda mejor, o te mostramos las muestras para que elijas viendo el material.' },
      { q: '¿Hacen puertas y ventanas que no lleven vidrio?', a: 'Sí. Hacemos puertas ciegas de aluminio, puertas con tela mosquitera y paños llenos a medida, con la misma perfilería y los mismos herrajes que las aberturas vidriadas.' },
      { q: '¿El aluminio efecto madera se mantiene como la madera?', a: 'No requiere el mantenimiento de la madera real: no hay que barnizar ni se pudre. Da la estética cálida de la madera con la durabilidad del aluminio.' },
      { q: '¿Incluye el vidrio y la colocación?', a: 'Sí. Presupuestamos la abertura completa, perfilería, vidrio, herrajes y colocación, para que no tengas que coordinar con varios proveedores.' },
    ],
    videos: [
      { src: '/videos/video-frente-corredizo-aluminio-galeria.mp4', poster: '/videos/video-frente-corredizo-aluminio-galeria-poster.jpg', titulo: 'Frente corredizo de aluminio negro cerrando una galería' },
      { src: '/videos/video-aberturas-aluminio-quincho.mp4', poster: '/videos/video-aberturas-aluminio-quincho-poster.jpg', titulo: 'Ventanas proyectantes y corredizas en un quincho' },
    ],
  },
  {
    slug: 'cielo-raso-durlock',
    nombre: 'Cielo raso & tabiques',
    categoria: 'Cielo raso y tabiques',
    icon: '<path d="M3 12h18"/><path d="M3 6h18M3 18h18"/>',
    foto: '/fotos/galeria/cielo-raso-tabique-drywall-masillado-obra.jpg',
    fotoAlt: 'Tabique de drywall masillado y cielo raso con spots embutidos, en obra · MÁS VIDRIOS',
    metaTitle: 'Cielo raso y tabiques en San Lorenzo',
    titleTail: 'cielo raso de PVC, de yeso y desmontable, y tabiques de drywall cerca tuyo',
    metaDesc: 'Cielo raso de PVC, de yeso y desmontable, y tabiques de drywall en San Lorenzo y Gran Asunción. Construcción en seco: prolijo, rápido y limpio. Presupuesto sin compromiso.',
    hero: 'Cielo raso de PVC, de yeso y desmontable, y tabiques para dividir ambientes: prolijo, rápido y limpio.',
    intro: [
      'Además del vidrio y el aluminio, en MÁS VIDRIOS completamos la terminación de tus ambientes con cielo raso y tabiques. Los dos son construcción en seco (drywall): no llevan agua ni mezcla, y por eso son la forma más rápida y limpia de renovar un techo, ocultar instalaciones, mejorar la aislación y dividir un ambiente sin los tiempos ni la suciedad de la obra húmeda.',
      'Hacemos los tres tipos de cielo raso que se usan acá y los tabiques de placa de yeso para dividir ambientes, con la terminación prolija que hace que un techo se vea nuevo.',
    ],
    bloques: [
      {
        h2: 'Los tres tipos de cielo raso',
        lista: [
          'Cielo raso de PVC: el más resistente a la humedad, ideal para baños, cocinas, lavaderos y galerías.',
          'Cielo raso de yeso cerrado: placa de yeso tomada y masillada, queda una superficie lisa y continua, sin juntas a la vista.',
          'Cielo raso desmontable: paneles de yeso apoyados sobre perfilería tipo "T" que se levantan cuando hace falta.',
        ],
      },
      {
        h2: 'Cuál te conviene',
        parrafos: [
          'El desmontable es el más práctico cuando arriba del techo hay cables, caños o aire acondicionado que se van a tocar: se levanta un panel, se trabaja y se vuelve a colocar, sin romper nada. El de yeso cerrado es el más prolijo a la vista y el que mejor queda en living, dormitorios y locales, porque no se le ven las juntas. Y el de PVC es el que va donde hay humedad. Contanos el ambiente y te decimos cuál corresponde.',
        ],
      },
      {
        h2: 'Tabiques y divisiones de drywall', galeria: 'tabiques',
        parrafos: [
          'El tabique es la pared de construcción en seco: estructura metálica y placa de yeso a los dos lados, con la aislación que necesites adentro. Se levanta en días, no en semanas, y deja la pared lista para pintar. Es lo que más se usa para dividir oficinas, cerrar un ambiente grande o armar una habitación nueva.',
        ],
      },
      {
        h2: 'Iluminación embutida',
        parrafos: [
          'Dejamos previsto y montado el lugar para los spots y la iluminación embutida en el cielo raso. La instalación eléctrica la resuelve tu electricista, y nosotros le dejamos las indicaciones de dónde va cada punto.',
        ],
      },
    ],
    destacados: [
      'Cielo raso de PVC, de yeso y desmontable',
      'Tabiques y divisiones de drywall',
      'Construcción en seco: sin agua ni mezcla',
      'Lugar previsto para iluminación embutida',
    ],
    faqs: [
      { q: '¿Cuántos tipos de cielo raso hay?', a: 'Tres, y hacemos los tres: el de PVC, el de yeso cerrado (una superficie lisa y continua) y el desmontable de paneles de yeso sobre perfilería tipo "T". Cada uno resuelve una situación distinta y te decimos cuál va en tu ambiente.' },
      { q: '¿El cielo raso desmontable se puede levantar después?', a: 'Sí, esa es su gran ventaja: los paneles se levantan para acceder a cables, caños o aire acondicionado, y se vuelven a colocar sin romper nada.' },
      { q: '¿Sirve para baños y galerías?', a: 'Para zonas húmedas o semicubiertas va el cielo raso de PVC, que es el que mejor aguanta la humedad.' },
      { q: '¿Qué es la construcción en seco o drywall?', a: 'Es levantar techos y paredes con estructura metálica y placa de yeso, sin agua ni mezcla. Por eso es más rápida, más limpia y permite acceder después a las instalaciones. El cielo raso y los tabiques son las dos aplicaciones más comunes.' },
      { q: '¿Hacen también la iluminación?', a: 'Dejamos previsto y montado el lugar para spots e iluminación embutida, y le pasamos las indicaciones a tu electricista para que haga la conexión.' },
    ],
    videos: [
      { src: '/videos/video-tabique-drywall-masillado-obra.mp4', poster: '/videos/video-tabique-drywall-masillado-obra-poster.jpg', titulo: 'Tabique de drywall masillado y vano nuevo, en obra' },
    ],
  },
  {
    slug: 'barandas-vidriadas',
    nombre: 'Barandas vidriadas',
    categoria: 'Barandas de vidrio',
    icon: '<path d="M4 18V9M9 18V5M14 18v-7M19 18V8"/><path d="M3 21h18"/>',
    foto: '/fotos/galeria/baranda-vidrio-aluminio-negro-terraza-panoramica.jpg',
    fotoAlt: 'Baranda de vidrio con perfilería de aluminio negro en terraza panorámica sobre el río · MÁS VIDRIOS',
    metaTitle: 'Barandas de vidrio en San Lorenzo',
    titleTail: 'barandas vidriadas para escaleras, balcones y entrepisos cerca tuyo',
    metaDesc: 'Barandas con vidrio de seguridad combinadas con aluminio y acero inoxidable en San Lorenzo y Gran Asunción. Seguras, elegantes y a medida para escaleras, balcones y entrepisos. Presupuesto gratis.',
    hero: 'Barandas con vidrio de seguridad combinadas con aluminio y acero inoxidable: seguras y elegantes.',
    intro: [
      'Una baranda de vidrio resuelve la seguridad de una escalera, un balcón o un entrepiso sin tapar la vista ni cortar la luz. Es la opción más elegante y contemporánea, y cuando se hace bien, con vidrio de seguridad del espesor correcto y herrajes adecuados, es tan segura como cualquier baranda tradicional.',
      'En MÁS VIDRIOS combinamos el vidrio de seguridad con aluminio y acero inoxidable para lograr barandas firmes, prolijas y a medida de cada proyecto, tanto en viviendas como en obras comerciales.',
    ],
    bloques: [
      {
        h2: 'Dónde se usan', galeria: 'escaleras',
        lista: [
          'Escaleras interiores y exteriores.',
          'Balcones y terrazas.',
          'Entrepisos.',
          'Bordes de piscina y desniveles de jardín.',
        ],
      },
      {
        h2: 'Templado o laminado, según dónde vaya', galeria: 'altura',
        parrafos: [
          'Los dos son vidrios de seguridad y los dos se usan en barandas, pero no en el mismo lugar. En una escalera o un entrepiso interior va templado. Cuando la baranda está en altura y hay gente circulando abajo (un balcón sobre otro balcón, una terraza sobre la vereda) va laminado, porque la lámina intermedia sostiene el vidrio en su lugar aunque llegue a romperse.',
          'Cuando vamos a tu obra miramos qué hay debajo de la baranda y te decimos cuál corresponde. Es la clase de detalle que no se ve en la foto y hace toda la diferencia.',
        ],
      },
      {
        h2: 'Sistemas de fijación', galeria: 'fijacion',
        parrafos: [
          'Según el diseño usamos perfilería de aluminio que toma el vidrio en la base, botones/separadores de acero inoxidable, o pasamanos superior combinado. Te recomendamos el sistema que mejor equilibre estética, seguridad y presupuesto.',
        ],
      },
    ],
    destacados: [
      'Vidrio de seguridad, templado o laminado',
      'Combinado con aluminio y acero inox',
      'Escaleras, balcones y entrepisos',
      'A medida de cada proyecto',
    ],
    faqs: [
      { q: '¿Una baranda de vidrio es segura?', a: 'Sí, siempre que se use vidrio de seguridad del espesor correcto y herrajes adecuados. Cumplida esa condición, es tan segura como una baranda metálica y mucho más vistosa.' },
      { q: '¿Va templado o laminado en mi baranda?', a: 'Depende de dónde esté. En escaleras y entrepisos interiores usamos templado. Si la baranda está en altura con gente circulando abajo, corresponde laminado: la lámina intermedia sostiene el vidrio en su lugar. Lo definimos cuando vemos la obra.' },
      { q: '¿Lleva pasamanos arriba?', a: 'Puede llevarlo o no, según el diseño y el uso. El pasamanos de acero inoxidable aporta firmeza y un acabado prolijo; en algunos casos se deja el vidrio "limpio" sin perfil superior.' },
      { q: '¿Sirve para el borde de la piscina?', a: 'Sí, es una solución muy elegante para cercos de piscina, con herrajes resistentes a la intemperie y al cloro.' },
    ],
  },
  {
    slug: 'policarbonato',
    nombre: 'Policarbonato',
    categoria: 'Techos de policarbonato',
    icon: '<path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M3 7v6l9 4 9-4V7"/>',
    foto: '/fotos/proyectos/cerramiento-galeria-vidrio-marco-madera-exterior.jpg',
    fotoAlt: 'Galería cubierta con estructura y cerramiento · MÁS VIDRIOS',
    metaTitle: 'Techos de policarbonato en San Lorenzo',
    titleTail: 'techos y cubiertas de policarbonato translúcido cerca tuyo',
    metaDesc: 'Policarbonato alveolar en San Lorenzo y Gran Asunción: cambio de placas deterioradas sobre tu estructura existente y cubiertas nuevas con estructura de aluminio. Presupuesto sin compromiso.',
    hero: 'Policarbonato alveolar: cambio de placas sobre tu estructura existente y cubiertas nuevas en aluminio.',
    intro: [
      'El policarbonato es la solución cuando querés cubrir un espacio dejando pasar la luz: galerías, patios, cocheras, pasillos y aberturas en el techo para iluminar ambientes interiores. Es mucho más resistente al impacto que el vidrio, muy liviano, y filtra los rayos UV protegiendo lo que hay debajo.',
      'Lo que más nos piden es el cambio de placas: desmontamos la placa deteriorada de tu techo existente, colocamos la nueva y sellamos, sea cual sea la estructura que ya tengas. Y cuando la cubierta es nueva, la hacemos completa con estructura de aluminio, que es liviana, no se oxida y acompaña perfecto al policarbonato.',
    ],
    bloques: [
      {
        h2: 'Qué hacemos con policarbonato',
        lista: [
          'Cambio de placas deterioradas sobre tu estructura existente, con desmonte y sellado.',
          'Techos de galerías, patios y quinchos con estructura de aluminio.',
          'Cubiertas de cocheras y entradas.',
          'Cerramientos translúcidos y medias sombras.',
        ],
      },
      {
        h2: 'Policarbonato alveolar',
        parrafos: [
          'Trabajamos policarbonato alveolar, el tipo "panal": liviano, resistente al granizo y con cámaras de aire que ayudan a aislar el calor. Es el que mejor rinde en el clima de acá y viene en varios tonos para graduar cuánta luz y cuánto calor dejás pasar. Contanos qué querés cubrir y te decimos el tono y el espesor que conviene.',
        ],
      },
    ],
    destacados: [
      'Cambio de placas sobre estructura existente',
      'Policarbonato alveolar',
      'Estructura nueva en aluminio',
      'Resistente al impacto y a los rayos UV',
    ],
    faqs: [
      { q: '¿Se puede cambiar solo la placa y aprovechar el techo que ya tengo?', a: 'Sí, es lo que más hacemos. Desmontamos la placa deteriorada, colocamos la nueva sobre tu estructura existente y sellamos. Sale bastante menos que rehacer el techo entero.' },
      { q: '¿Hacen también la estructura del techo?', a: 'Sí, la hacemos en aluminio, que es liviano, no se oxida y acompaña perfecto al policarbonato. Contanos la medida del espacio a cubrir y te presupuestamos la cubierta completa.' },
      { q: '¿El policarbonato amarillea con el sol?', a: 'Los policarbonatos de calidad vienen con protección UV en una de sus caras; instalados con esa cara hacia el sol, resisten muy bien y mantienen su transparencia por muchos años.' },
      { q: '¿Aísla del calor?', a: 'El alveolar tiene cámaras de aire que ayudan a aislar; además hay colores y tonos que reducen el ingreso de calor y el resplandor.' },
    ],
  },
  {
    slug: 'mantenimientos',
    nombre: 'Mantenimientos',
    categoria: 'Mantenimiento de vidrios y aluminio',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5L9 5a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.5 2h5l.5-2a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6a7 7 0 0 0 .1-1Z"/>',
    foto: '/fotos/proyectos/puerta-vidrio-aluminio-salida-emergencia-cierrapuertas.jpg',
    fotoAlt: 'Puerta de vidrio con aluminio, manijón de acero y freno aéreo · MÁS VIDRIOS',
    metaTitle: 'Mantenimiento de vidrios y aluminio en San Lorenzo',
    titleTail: 'reparación y service de puertas, ventanas, mamparas y herrajes cerca tuyo',
    metaDesc: 'Mantenimiento y reparación de instalaciones de vidrio y aluminio en San Lorenzo y Gran Asunción: herrajes, ruedas, frenos de puerta, felpas, gomas, silicona y cambio de vidrios. Presupuesto sin compromiso.',
    hero: 'Reparamos y damos service a tus puertas, ventanas, mamparas y cerramientos de vidrio y aluminio.',
    intro: [
      'El vidrio y el aluminio duran décadas, pero lo que los mueve y los sella se gasta con el uso: las ruedas, las cerraduras, los frenos de las puertas, las felpas, las gomas y la silicona. En MÁS VIDRIOS no solo instalamos: también mantenemos y reparamos lo que ya tenés, sea instalado por nosotros o por otros.',
      'Un mantenimiento a tiempo evita que un problema chico (una puerta que cuesta correr, una mampara que filtra) se transforme en un cambio completo. Revisamos, ajustamos y reemplazamos lo justo para que todo vuelva a funcionar como el primer día.',
    ],
    bloques: [
      {
        h2: 'Qué reparamos',
        lista: [
          'Cambio de ruedas y ajuste de puertas y ventanas corredizas.',
          'Reparación de herrajes, cerraduras y manijones.',
          'Frenos de puertas de vidrio: freno de piso y brazo hidráulico (freno aéreo).',
          'Cambio de felpas y gomas en aberturas de aluminio.',
          'Silicona nueva en mamparas y cerramientos que filtran agua.',
          'Reemplazo de vidrios rotos o rayados.',
        ],
      },
      {
        h2: 'Service para comercios y oficinas',
        parrafos: [
          'Las puertas de vidrio de locales y oficinas son de alto tránsito y necesitan mantenimiento periódico de sus frenos y herrajes para seguir funcionando seguras. El freno es la pieza que más sufre: puede ser de piso, embutido bajo la puerta, o un brazo hidráulico aéreo, y los dos se regulan y se cambian. Coordinamos visitas de service para que tu local nunca tenga una puerta fuera de uso.',
        ],
      },
    ],
    destacados: [
      'Ajuste y cambio de herrajes y ruedas',
      'Frenos de piso y brazos hidráulicos',
      'Felpas, gomas y silicona nueva',
      'Reemplazo de vidrios rotos',
    ],
    faqs: [
      { q: '¿Reparan trabajos que no instalaron ustedes?', a: 'Sí. Reparamos y damos mantenimiento a instalaciones de vidrio y aluminio sin importar quién las haya hecho.' },
      { q: '¿Mi puerta corrediza cuesta correr, tiene arreglo?', a: 'Casi siempre sí. Generalmente es cuestión de cambiar las ruedas y limpiar/ajustar el riel, sin reemplazar la abertura entera.' },
      { q: '¿Hacen contratos de mantenimiento para locales?', a: 'Sí, coordinamos visitas periódicas de service para comercios y oficinas con puertas de alto tránsito.' },
    ],
  },
  {
    slug: 'espejos',
    nombre: 'Espejos',
    categoria: 'Espejos a medida',
    icon: '<ellipse cx="12" cy="11" rx="7" ry="8"/><path d="M8.5 8c-.8.8-1.3 1.8-1.5 3"/><path d="M8 21h8"/>',
    foto: '/fotos/galeria/espejo-organico-sin-marco-bano-moderno-02.jpg',
    fotoAlt: 'Espejo de forma orgánica sin marco sobre bacha en baño moderno · MÁS VIDRIOS',
    metaTitle: 'Espejos a medida en San Lorenzo',
    titleTail: 'espejos orgánicos, retroiluminados LED y a medida cerca tuyo',
    metaDesc: 'Espejos a medida en San Lorenzo y Gran Asunción: formas orgánicas sin marco, espejos retroiluminados con LED y espejos clásicos para baños, dormitorios y pasillos. Corte, pulido e instalación incluidos.',
    hero: 'Espejos a medida que transforman el ambiente: formas orgánicas sin marco, retroiluminados LED y clásicos.',
    intro: [
      'El espejo dejó de ser un accesorio para convertirse en protagonista del diseño. Las formas orgánicas e irregulares sin marco, tan buscadas hoy en los baños modernos, y los espejos retroiluminados con LED que suman una luz cálida y pareja, son de los trabajos que más nos piden últimamente. En MÁS VIDRIOS los cortamos, pulimos e instalamos a medida.',
      'Trabajamos espejos para baños, dormitorios, pasillos, gimnasios y locales comerciales. Vos elegís la forma y el tamaño, y nosotros te asesoramos sobre lo que mejor funciona en tu ambiente y nos encargamos de que llegue a tu pared con el canto pulido, la fijación segura y la terminación prolija que un espejo necesita.',
    ],
    bloques: [
      {
        h2: 'Tipos de espejo que hacemos', galeria: 'tipos-espejo',
        lista: [
          'Espejos de formas orgánicas e irregulares, sin marco, cortados a medida.',
          'Espejos retroiluminados con LED perimetral para baños.',
          'Espejos clásicos rectangulares o redondos, con o sin bisel.',
          'Espejos de gran formato para gimnasios, estudios de danza y locales.',
          'Reposición de espejos rotos o manchados.',
        ],
      },
      {
        h2: 'Instalación segura y prolija',
        parrafos: [
          'Un espejo grande mal fijado es un riesgo. Usamos la fijación correcta para cada pared y cada peso (pegado estructural, grampas o perfiles ocultos), cuidamos el apoyo sobre mesadas y zócalos, y dejamos el canto pulido para que el espejo se pueda tocar sin peligro. Si lleva LED, dejamos las indicaciones para tu electricista.',
        ],
      },
    ],
    destacados: [
      'Formas orgánicas cortadas a medida',
      'Retroiluminación LED cálida o fría',
      'Canto pulido y fijación segura',
      'Baños, dormitorios, gimnasios y locales',
    ],
    faqs: [
      { q: '¿El espejo retroiluminado necesita instalación eléctrica especial?', a: 'Necesita un punto de corriente detrás del espejo. Te indicamos exactamente qué dejar previsto y tu electricista lo resuelve antes de la colocación.' },
      { q: '¿Qué espejo conviene para un baño con mucha humedad?', a: 'Usamos espejos de calidad con respaldo protegido y evitamos apoyos que acumulen agua. Con ventilación razonable, el espejo se mantiene impecable por años.' },
    ],
  },
  {
    slug: 'puertas-automaticas',
    nombre: 'Puertas automáticas',
    categoria: 'Puertas automáticas de vidrio',
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 3v18"/><path d="M9.5 12H5.5M5.5 12l2-2M5.5 12l2 2"/><path d="M14.5 12h4M18.5 12l-2-2M18.5 12l-2 2"/>',
    foto: '/fotos/galeria/frente-vidriado-puerta-automatica-local.jpg',
    fotoAlt: 'Frente vidriado con puerta automática en local comercial · MÁS VIDRIOS',
    metaTitle: 'Puertas automáticas en San Lorenzo',
    titleTail: 'puertas corredizas automáticas de vidrio para comercios cerca tuyo',
    metaDesc: 'Puertas automáticas de vidrio en San Lorenzo y Gran Asunción: corredizas con sensor de movimiento para comercios, oficinas, sanatorios y edificios. Instalación completa y service. Presupuesto sin compromiso.',
    hero: 'Puertas corredizas automáticas de vidrio con sensor: la entrada que tu comercio necesita.',
    intro: [
      'La puerta automática es la carta de presentación de un comercio moderno: se abre sola al detectar a tu cliente, mantiene el aire acondicionado adentro y deja el frente completamente vidriado y luminoso. En MÁS VIDRIOS instalamos puertas corredizas automáticas de vidrio completas, con el operador, los sensores y el vidrio de seguridad que corresponde.',
      'Las instalamos en locales comerciales, oficinas, sanatorios, farmacias y edificios de toda Gran Asunción. Nos encargamos del conjunto completo: el frente de vidrio templado, el cabezal con el mecanismo arriba de la puerta, la puesta en marcha y la regulación fina para que abra y cierre suave, sin golpes.',
    ],
    bloques: [
      {
        h2: 'Dónde conviene una puerta automática', galeria: 'donde-automatica',
        lista: [
          'Locales comerciales y shoppings: entrada libre con las manos ocupadas.',
          'Farmacias, sanatorios y consultorios: acceso sin contacto, más higiénico.',
          'Oficinas corporativas y edificios: imagen profesional desde la entrada.',
          'Supermercados y autoservicios de alto tránsito.',
          'Cualquier frente donde quieras climatizar sin dejar la puerta abierta.',
        ],
      },
      {
        h2: 'Instalación completa y service',
        parrafos: [
          'Instalamos el sistema completo: paños fijos y hojas móviles de vidrio templado de seguridad, operador electromecánico dentro del cabezal de aluminio que va arriba de la puerta, sensores de movimiento y presencia, y los modos de funcionamiento que necesites (apertura total, parcial, bloqueo nocturno). Después de la instalación hacemos el service periódico para que la puerta de tu negocio nunca quede fuera de uso.',
        ],
      },
    ],
    destacados: [
      'Corredizas automáticas con sensor',
      'Vidrio templado de seguridad',
      'Operador silencioso y regulable',
      'Instalación completa y service',
    ],
    faqs: [
      { q: '¿Qué pasa si se corta la luz?', a: 'El automatismo funciona con corriente, así que durante el corte la puerta deja de abrir sola y se opera a mano hasta que vuelve la luz. Cuando la vuelve, retoma el funcionamiento normal sola. Si tu local necesita que siga abriendo durante los cortes, contanos y lo vemos al presupuestar.' },
      { q: '¿Sirve para un local que ya tiene el frente de vidrio?', a: 'Sí. Podemos automatizar la entrada aprovechando el frente existente o renovarlo completo, según el estado de la perfilería y el vidrio actual.' },
      { q: '¿Cada cuánto necesita mantenimiento?', a: 'Para un local de tránsito normal recomendamos un service cada 6 a 12 meses: limpieza de guías, chequeo de sensores y regulación del operador. Coordinamos las visitas para que no interrumpan tu atención.' },
    ],
    videos: [
      { src: '/videos/video-puerta-automatica-local-comercial.mp4', poster: '/videos/video-puerta-automatica-local-comercial-poster.jpg', titulo: 'Puerta automática de vidrio funcionando en un local comercial' },
      { src: '/videos/video-puerta-automatica-mrodamientos.mp4', poster: '/videos/video-puerta-automatica-mrodamientos-poster.jpg', titulo: 'Puerta automática instalada en un comercio de repuestos' },
    ],
  },
  {
    slug: 'stampa-vidrio-impreso',
    nombre: 'Stampa · vidrio impreso',
    categoria: 'Vidrio impreso stampa',
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7 15l3-4 3 3 4-6"/><circle cx="8.5" cy="7.5" r="1.2"/>',
    foto: '/fotos/galeria/muestrario-vidrio-impreso-stampa-disenos.jpg',
    fotoAlt: 'Muestrario de vidrio impreso Stampa con diseños de aves, paisajes y mármol · MÁS VIDRIOS',
    metaTitle: 'Vidrio impreso stampa en San Lorenzo',
    titleTail: 'impresión digital sobre vidrio: símil mármol, madera y diseños personalizados',
    metaDesc: 'Vidrio impreso stampa en San Lorenzo y Gran Asunción: impresión digital sobre vidrio templado con diseños símil mármol, símil madera, naturaleza o personalizados. Para revestimientos, puertas y divisores.',
    hero: 'Impresión digital sobre vidrio templado: mármol, madera, naturaleza o el diseño que imagines.',
    intro: [
      'El vidrio impreso stampa es pintura digital aplicada directamente sobre el vidrio: permite llevar cualquier diseño (un símil mármol, una textura de madera, un paisaje, una foto o un patrón geométrico) a un paño de vidrio templado. El resultado es un revestimiento vistoso, higiénico y que no se despega ni se decolora como un vinilo común.',
      'En MÁS VIDRIOS trabajamos con muestrarios de diseños listos para elegir y también imprimimos diseños personalizados. Es una solución cada vez más pedida para dar personalidad a cocinas, baños, locales y oficinas sin obra húmeda.',
    ],
    bloques: [
      {
        h2: 'Dónde se usa el vidrio impreso',
        lista: [
          'Revestimiento de paredes de cocina (frente de mesada) fácil de limpiar.',
          'Paredes de baño y duchas con diseño, sin juntas que junten hongos.',
          'Puertas y divisores de ambientes con diseño translúcido.',
          'Tapas de mesa y mobiliario con diseño bajo el vidrio.',
          'Locales y oficinas: logos y gráficas impresas en el vidrio.',
        ],
      },
      {
        h2: 'Diseños de muestrario o personalizados', galeria: 'disenos-stampa',
        parrafos: [
          'Tenemos muestrarios con diseños listos: símil mármol blanco, negro o azul, símil madera, follajes, aves, paisajes y tramas geométricas. Y si tenés otra idea, se puede imprimir un diseño propio o una imagen en alta resolución. Te mostramos las muestras reales para que elijas viendo el material, no un catálogo en pantalla.',
        ],
      },
    ],
    destacados: [
      'Impresión digital directa sobre el vidrio',
      'Símil mármol, madera, naturaleza y tramas',
      'Diseños personalizados con tu imagen',
      'Higiénico, sin juntas y fácil de limpiar',
    ],
    faqs: [
      { q: '¿La impresión se raya o se despega con el tiempo?', a: 'No. La pintura digital queda integrada al vidrio y en la mayoría de las aplicaciones va por la cara interna, protegida. No es un vinilo pegado: no se despega, no junta humedad y se limpia con cualquier limpiavidrios.' },
      { q: '¿Puedo imprimir una foto o un diseño propio?', a: 'Sí, siempre que la imagen tenga buena resolución para el tamaño del paño. Te confirmamos la calidad antes de imprimir.' },
      { q: '¿Sirve para la pared de la cocina detrás de la hornalla?', a: 'Sí, es uno de sus usos más comunes: vidrio templado resistente al calor con el diseño que quieras, de una sola pieza y sin juntas. Mucho más higiénico que los azulejos.' },
    ],
    videos: [
      { src: '/videos/video-stampa-muestrario-en-mano.mp4', poster: '/videos/video-stampa-muestrario-en-mano-poster.jpg', titulo: 'Recorrido por el muestrario de diseños stampa' },
      { src: '/videos/video-stampa-muestrario-paneo.mp4', poster: '/videos/video-stampa-muestrario-paneo-poster.jpg', titulo: 'Muestras de vidrio impreso: mármol, aves y paisajes' },
    ],
  },
];

const pos = (slug: string) => {
  const i = ORDEN.indexOf(slug);
  return i === -1 ? ORDEN.length : i;
};

export const servicios: Servicio[] = catalogo.slice().sort((a, b) => pos(a.slug) - pos(b.slug));

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
