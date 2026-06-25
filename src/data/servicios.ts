export interface Bloque { h2: string; parrafos?: string[]; lista?: string[]; }
export interface Faq { q: string; a: string; }
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
}

const CIUDAD = 'San Lorenzo';

export const servicios: Servicio[] = [
  {
    slug: 'vidrio-templado',
    nombre: 'Vidrio templado',
    categoria: 'Vidrio templado',
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 3v18"/>',
    foto: '/fotos/proyectos/puerta-corrediza-vidrio-aluminio-negro-estilo-industrial-cuadricula.jpg',
    fotoAlt: 'Puerta corrediza de vidrio templado estilo industrial con aluminio negro — MÁS VIDRIOS',
    metaTitle: 'Vidrio templado en San Lorenzo',
    titleTail: 'colocación, puertas, ventanas y tapas de vidrio templado cerca tuyo',
    metaDesc: 'Colocación e instalación de vidrio templado en San Lorenzo y Gran Asunción: puertas, ventanas, tapas de mesa y cerramientos. Empresa familiar con +15 años. Presupuesto sin compromiso.',
    hero: 'Nuestro rubro principal: provisión y colocación de vidrio templado de seguridad, a medida y con terminación prolija.',
    intro: [
      'El vidrio templado es el corazón de lo que hacemos en MÁS VIDRIOS desde 2009. Es un vidrio sometido a un tratamiento térmico que lo vuelve hasta cinco veces más resistente que un vidrio común y que, ante un golpe extremo, se fragmenta en pedazos pequeños y sin filo en lugar de astillas peligrosas. Por eso es el material indicado para puertas, ventanas, mamparas, barandas y tapas de mesa donde la seguridad importa.',
      'Trabajamos toda la cadena: te asesoramos sobre el espesor y el tipo de vidrio según el uso, tomamos las medidas en tu obra, y nos encargamos de la colocación con la perfilería y los herrajes correctos. En San Lorenzo y toda la Gran Asunción nos trasladamos a tu domicilio u obra para presupuestar sin compromiso.',
    ],
    bloques: [
      {
        h2: '¿Para qué se usa el vidrio templado?',
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
          'Si tu proyecto no requiere templado, también trabajamos vidrio crudo, laminado y espejos: te recomendamos la opción justa para que no pagues de más ni de menos.',
        ],
      },
    ],
    destacados: [
      'Vidrio templado de seguridad, cortado y procesado a medida',
      'Asesoramiento de espesor y herrajes según el uso',
      'Medición en obra y colocación profesional',
      'Cobertura en San Lorenzo y toda la Gran Asunción',
    ],
    faqs: [
      { q: '¿El vidrio templado se puede cortar después de templado?', a: 'No. El vidrio se corta y se procesa (perforaciones, pulido) antes del templado. Por eso es clave tomar bien las medidas en obra desde el principio — de eso nos encargamos nosotros.' },
      { q: '¿Cuánto tarda un trabajo de vidrio templado?', a: 'Depende del tamaño y de la cola de fabricación, pero en general entre una y dos semanas desde que se aprueba el presupuesto y se toman las medidas definitivas. Te damos un plazo concreto al presupuestar.' },
      { q: '¿Hacen tapas de mesa de vidrio templado a medida?', a: 'Sí, con el espesor y el canto que prefieras (pulido recto, biselado, etc.). Tomamos el molde exacto de tu mesa para que calce perfecto.' },
    ],
  },
  {
    slug: 'cerramientos-de-vidrio',
    nombre: 'Cerramientos & galerías',
    categoria: 'Cerramientos de vidrio',
    icon: '<path d="M4 20V8l8-5 8 5v12"/><path d="M9 20v-6h6v6"/>',
    foto: '/fotos/proyectos/cerramiento-vidrio-quincho-aluminio-negro-exterior.jpg',
    fotoAlt: 'Cerramiento de quincho con vidrio y aluminio negro, deck de madera — MÁS VIDRIOS',
    metaTitle: 'Cerramientos de vidrio en San Lorenzo',
    titleTail: 'cerramiento de galerías, quinchos y patios con vidrio y aluminio cerca tuyo',
    metaDesc: 'Cerramientos de vidrio para galerías, quinchos y patios en San Lorenzo y Gran Asunción. Ganá un ambiente nuevo sin perder la vista. Vidrio templado y aluminio a medida. Presupuesto gratis.',
    hero: 'Convertí tu galería, quincho o patio en un ambiente que se usa todo el año, sin perder la vista al jardín.',
    intro: [
      'Un cerramiento de vidrio es la forma más elegante de ganar metros útiles en tu casa. Cerrás la galería o el quincho con grandes paños de vidrio y perfilería de aluminio, y de golpe tenés un ambiente protegido del viento, la lluvia y el polvo — pero que sigue sintiéndose abierto, porque la vista al jardín queda intacta.',
      'En MÁS VIDRIOS diseñamos cada cerramiento a medida del espacio: corredizos para abrir en los días lindos, paños fijos para maximizar la transparencia, y la combinación de aluminio (blanco, negro o símil madera) que mejor acompañe tu casa.',
    ],
    bloques: [
      {
        h2: 'Tipos de cerramiento que hacemos',
        lista: [
          'Cerramiento de galerías y corredores con vidrio templado.',
          'Cierre de quinchos y áreas de parrilla para usarlos en invierno.',
          'Patios y terrazas convertidos en living o comedor.',
          'Sistemas corredizos de varios paños para abrir totalmente el ambiente.',
          'Cerramientos comerciales para locales y oficinas.',
        ],
      },
      {
        h2: 'Aluminio negro, blanco o símil madera',
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
  },
  {
    slug: 'mamparas-de-bano',
    nombre: 'Mamparas de baño',
    categoria: 'Mamparas de baño',
    icon: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 4l9 8 9-8"/>',
    foto: '/fotos/proyectos/puerta-bambu-marco-madera-bano-marmol.jpg',
    fotoAlt: 'Baño revestido en mármol con carpintería a medida — MÁS VIDRIOS',
    metaTitle: 'Mamparas de baño en San Lorenzo',
    titleTail: 'mamparas de ducha en vidrio templado a medida cerca tuyo',
    metaDesc: 'Mamparas de baño en vidrio templado de seguridad en San Lorenzo y Gran Asunción. A medida, robustas y de durabilidad garantizada. Evitá salpicaduras con estilo. Presupuesto sin compromiso.',
    hero: 'Mamparas de ducha en vidrio templado de seguridad: a medida, resistentes y fáciles de limpiar.',
    intro: [
      'La mampara de ducha es uno de esos detalles que cambian por completo un baño. Evita las salpicaduras, mantiene el ambiente cálido durante el baño y le da una sensación de amplitud y prolijidad que ninguna cortina logra. En MÁS VIDRIOS las fabricamos a medida de tu baño, no con kits estándar que nunca terminan de calzar.',
      'Apostamos sin dudas por el vidrio templado de seguridad: mucho más robusto y resistente que el acrílico, con una durabilidad garantizada y una transparencia que se mantiene en el tiempo. Vos elegís el sistema de apertura, los herrajes y el acabado; nosotros nos encargamos del resto.',
    ],
    bloques: [
      {
        h2: 'Opciones de mampara',
        lista: [
          'Mamparas fijas (paño único) — la opción más limpia y económica.',
          'Mamparas con puerta de abrir o corrediza.',
          'Vidrio transparente, esmerilado/arenado o con diseño para más privacidad.',
          'Herrajes en acero inoxidable, negro mate o cromados.',
        ],
      },
      {
        h2: 'Vidrio templado vs. acrílico',
        parrafos: [
          'Las mamparas acrílicas son algo más baratas, pero se rayan, se opacan y se vuelven amarillentas con el tiempo. El vidrio templado de seguridad se mantiene impecable durante años, resiste golpes y es mucho más fácil de limpiar. Para algo que vas a usar todos los días, la diferencia se paga sola.',
        ],
      },
    ],
    destacados: [
      'Vidrio templado de seguridad a medida',
      'Sistemas fijos, de abrir o corredizos',
      'Vidrio transparente, esmerilado o con diseño',
      'Herrajes en acero inox, negro o cromado',
    ],
    faqs: [
      { q: '¿La mampara se hace a la medida exacta de mi baño?', a: 'Sí. Vamos a tu baño, tomamos las medidas reales (incluyendo desniveles y fuera de escuadra) y fabricamos la mampara para que calce perfecto, sin filtraciones.' },
      { q: '¿Qué espesor de vidrio usan?', a: 'Para mamparas usamos generalmente vidrio templado de 8 mm o 10 mm según el tamaño y el sistema. Te recomendamos el adecuado al presupuestar.' },
      { q: '¿Cómo se limpia una mampara de vidrio templado?', a: 'Con un limpiavidrios común y un secador de goma. Si querés que repela el agua y el sarro, podemos aplicar un tratamiento antical que facilita mucho el mantenimiento.' },
    ],
  },
  {
    slug: 'divisorias-de-oficina',
    nombre: 'Divisorias de oficina',
    categoria: 'Divisorias de oficina en vidrio',
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 3v18"/>',
    foto: '/fotos/proyectos/divisiones-oficina-vidrio-aluminio-blanco-interior.jpg',
    fotoAlt: 'Divisiones de oficina en vidrio con aluminio blanco y puertas vidriadas — MÁS VIDRIOS',
    metaTitle: 'Divisorias de oficina en San Lorenzo',
    titleTail: 'divisiones de vidrio y aluminio para oficinas cerca tuyo',
    metaDesc: 'Divisorias de oficina en vidrio y aluminio en San Lorenzo y Gran Asunción. Aislamiento acústico y térmico, diseño a medida y look vanguardista para tu espacio de trabajo. Presupuesto gratis.',
    hero: 'Oficinas más luminosas, ordenadas y modernas con divisiones de vidrio a medida.',
    intro: [
      'Las divisiones de vidrio transformaron la forma de pensar las oficinas: separan ambientes sin cerrar la luz, dan sensación de amplitud y proyectan una imagen profesional y vanguardista. En MÁS VIDRIOS las diseñamos y personalizamos según tu presupuesto y la distribución real de tu espacio, porque sabemos que cada empresa tiene necesidades distintas.',
      'Trabajamos tanto la tabiquería vidriada de piso a techo como las divisiones combinadas con paneles ciegos, siempre con perfilería de aluminio prolija y puertas de vidrio con herrajes de calidad. El resultado: un ambiente de trabajo aislado del ruido pero conectado visualmente.',
    ],
    bloques: [
      {
        h2: 'Qué resolvemos con las divisorias',
        lista: [
          'Separar oficinas, salas de reunión y recepciones manteniendo la luz natural.',
          'Aislamiento acústico y térmico entre ambientes.',
          'Puertas de vidrio con manijones de acero y cierres suaves.',
          'Combinación de vidrio con paneles ciegos para privacidad parcial.',
          'Vinilos o vidrio esmerilado para zonas que requieren reserva.',
        ],
      },
      {
        h2: 'Aluminio blanco o negro, a tu medida',
        parrafos: [
          'La perfilería puede ir en blanco para un look limpio y luminoso, o en negro para una estética más corporativa y de tendencia. Nos adaptamos a tu presupuesto y ajustamos el diseño y la distribución de los espacios — para nosotros cada cliente es único.',
        ],
      },
    ],
    destacados: [
      'Aislamiento acústico y térmico',
      'Diseño y distribución a medida',
      'Aluminio blanco o negro',
      'Puertas vidriadas con herrajes de calidad',
    ],
    faqs: [
      { q: '¿Las divisiones de vidrio dejan pasar el ruido?', a: 'Bien instaladas, con el espesor y los sellos correctos, aíslan muy bien el ruido entre ambientes. Para salas que necesitan más reserva usamos vidrios de mayor espesor o doble vidrio.' },
      { q: '¿Puedo tener privacidad sin perder la luz?', a: 'Sí. Se puede usar vidrio esmerilado/arenado, vinilos decorativos o paneles ciegos en la parte baja, manteniendo la luz natural en la parte superior.' },
      { q: '¿Trabajan en oficinas ya en funcionamiento?', a: 'Sí. Coordinamos la instalación para minimizar la interrupción, y de ser necesario trabajamos por etapas o fuera del horario laboral.' },
    ],
  },
  {
    slug: 'aberturas-de-aluminio',
    nombre: 'Aberturas de aluminio',
    categoria: 'Aberturas de aluminio',
    icon: '<rect x="2" y="6" width="20" height="12" rx="1"/><path d="M6 6v12M10 6v12M14 6v12M18 6v12"/>',
    foto: '/fotos/proyectos/ventana-corrediza-aluminio-simil-madera-mosquitero-ladrillo.jpg',
    fotoAlt: 'Ventana corrediza de aluminio símil madera con mosquitero — MÁS VIDRIOS',
    metaTitle: 'Aberturas de aluminio en San Lorenzo',
    titleTail: 'ventanas y puertas de aluminio a medida cerca tuyo',
    metaDesc: 'Aberturas de aluminio en San Lorenzo y Gran Asunción: ventanas y puertas corredizas, líneas suprema y 25, símil madera y mosquiteros. A medida y bien instaladas. Presupuesto sin compromiso.',
    hero: 'Ventanas y puertas de aluminio a medida — líneas suprema, 25, módulo práctico, símil madera y mosquiteros.',
    intro: [
      'El aluminio es el complemento natural del vidrio y una de nuestras especialidades. Es liviano, no se oxida, casi no necesita mantenimiento y permite armar ventanas y puertas de gran tamaño con marcos finos que dejan entrar la mayor cantidad de luz posible.',
      'En MÁS VIDRIOS trabajamos las líneas más usadas del mercado — suprema, línea 25, módulo práctico — además de mosquiteros corredizos y la línea símil madera para quienes buscan la calidez de la madera sin su mantenimiento. Fabricamos y colocamos a medida, con el vidrio que corresponda en cada caso.',
    ],
    bloques: [
      {
        h2: 'Líneas y productos',
        lista: [
          'Ventanas corredizas y de abrir en líneas suprema, 25 y módulo práctico.',
          'Puertas de aluminio con vidrio para entradas y balcones.',
          'Aluminio símil madera (símil roble y otros tonos).',
          'Mosquiteros corredizos integrados.',
          'Paños fijos y ventanales de gran formato.',
        ],
      },
      {
        h2: 'Color y acabado',
        parrafos: [
          'El aluminio puede ir en blanco, negro, anodizado natural o símil madera. Elegís el acabado que mejor combine con la fachada y la carpintería de tu casa, y nosotros nos encargamos de que las aberturas calcen y cierren perfecto.',
        ],
      },
    ],
    destacados: [
      'Líneas suprema, 25 y módulo práctico',
      'Símil madera y acabados a elección',
      'Mosquiteros corredizos integrados',
      'Fabricación y colocación a medida',
    ],
    faqs: [
      { q: '¿Qué línea de aluminio me conviene?', a: 'Depende del tamaño de la abertura, la exposición al viento y el presupuesto. La línea suprema es más robusta para grandes vanos; la línea 25 es ideal para aberturas estándar. Te asesoramos según tu caso.' },
      { q: '¿El aluminio símil madera se mantiene como la madera?', a: 'No requiere el mantenimiento de la madera real: no hay que barnizar ni se pudre. Da la estética cálida de la madera con la durabilidad del aluminio.' },
      { q: '¿Incluye el vidrio y la colocación?', a: 'Sí. Presupuestamos la abertura completa — perfilería, vidrio, herrajes y colocación — para que no tengas que coordinar con varios proveedores.' },
    ],
  },
  {
    slug: 'cielo-raso-durlock',
    nombre: 'Cielo raso & Durlock',
    categoria: 'Cielo raso y Durlock',
    icon: '<path d="M3 12h18"/><path d="M3 6h18M3 18h18"/>',
    foto: '/fotos/proyectos/puerta-bambu-revestimiento-madera-detalle-marco.jpg',
    fotoAlt: 'Detalle de revestimiento de madera en cielorraso con spots embutidos — MÁS VIDRIOS',
    metaTitle: 'Cielo raso y Durlock en San Lorenzo',
    titleTail: 'cielo raso desmontable, PVC y tabiques de construcción en seco cerca tuyo',
    metaDesc: 'Cielo raso desmontable de yeso/cartón Durlock y PVC, y tabiques de construcción en seco en San Lorenzo y Gran Asunción. Prolijo, rápido y limpio. Presupuesto sin compromiso.',
    hero: 'Cielo raso desmontable de Durlock y PVC, y tabiques de construcción en seco — prolijo, rápido y limpio.',
    intro: [
      'Además del vidrio y el aluminio, en MÁS VIDRIOS completamos la terminación de tus ambientes con cielo raso y construcción en seco. Es la forma más rápida y limpia de renovar un techo, ocultar instalaciones, mejorar la aislación y darle a un ambiente esa terminación prolija y moderna que se nota.',
      'Trabajamos cielo raso desmontable de placa de yeso "Durlock" con perfilería de aluminio tipo "T", cielo raso de PVC, y tabiques de yeso para dividir ambientes sin la suciedad ni los tiempos de la obra húmeda.',
    ],
    bloques: [
      {
        h2: 'Qué incluye',
        lista: [
          'Cielo raso desmontable de yeso/cartón "Durlock" con perfilería tipo "T".',
          'Cielo raso de PVC, ideal para zonas húmedas y exteriores cubiertos.',
          'Tabiques de yeso "Durlock" para dividir ambientes (construcción en seco).',
          'Integración de spots e iluminación embutida.',
        ],
      },
      {
        h2: 'Por qué construcción en seco',
        parrafos: [
          'La construcción en seco es más rápida, más limpia y permite acceder a las instalaciones cuando hace falta (el cielo raso desmontable se levanta sin romper nada). Es la opción ideal para renovar oficinas, locales y viviendas sin las molestias de la obra tradicional.',
        ],
      },
    ],
    destacados: [
      'Cielo raso desmontable de Durlock',
      'Cielo raso de PVC para zonas húmedas',
      'Tabiques de construcción en seco',
      'Integración de iluminación embutida',
    ],
    faqs: [
      { q: '¿El cielo raso desmontable se puede levantar después?', a: 'Sí, esa es su gran ventaja: las placas se levantan para acceder a cables, caños o aire acondicionado, y se vuelven a colocar sin romper nada.' },
      { q: '¿Sirve para baños y galerías?', a: 'Para zonas húmedas o semicubiertas recomendamos cielo raso de PVC, que resiste mejor la humedad que la placa de yeso común.' },
      { q: '¿Hacen también la iluminación?', a: 'Dejamos previsto y montado el lugar para spots e iluminación embutida. La instalación eléctrica fina se coordina con tu electricista o con un profesional de confianza.' },
    ],
  },
  {
    slug: 'barandas-vidriadas',
    nombre: 'Barandas vidriadas',
    categoria: 'Barandas de vidrio',
    icon: '<path d="M4 18V9M9 18V5M14 18v-7M19 18V8"/><path d="M3 21h18"/>',
    foto: '/fotos/proyectos/muro-cortina-vidrio-fachada-edificio-ladrillo.jpg',
    fotoAlt: 'Vidrio templado en altura sobre fachada de edificio — MÁS VIDRIOS',
    metaTitle: 'Barandas de vidrio en San Lorenzo',
    titleTail: 'barandas vidriadas para escaleras, balcones y entrepisos cerca tuyo',
    metaDesc: 'Barandas de vidrio templado combinadas con aluminio y acero inoxidable en San Lorenzo y Gran Asunción. Seguras, elegantes y a medida para escaleras, balcones y entrepisos. Presupuesto gratis.',
    hero: 'Barandas de vidrio templado combinadas con aluminio y acero inoxidable: seguras y elegantes.',
    intro: [
      'Una baranda de vidrio resuelve la seguridad de una escalera, un balcón o un entrepiso sin tapar la vista ni cortar la luz. Es la opción más elegante y contemporánea, y cuando se hace bien — con vidrio templado de seguridad y herrajes correctos — es tan segura como cualquier baranda tradicional.',
      'En MÁS VIDRIOS combinamos el vidrio templado con aluminio y acero inoxidable para lograr barandas firmes, prolijas y a medida de cada proyecto, tanto en viviendas como en obras comerciales.',
    ],
    bloques: [
      {
        h2: 'Dónde se usan',
        lista: [
          'Escaleras interiores y exteriores.',
          'Balcones y terrazas.',
          'Entrepisos y mezzanines.',
          'Bordes de piscina y desniveles de jardín.',
        ],
      },
      {
        h2: 'Sistemas de fijación',
        parrafos: [
          'Según el diseño usamos perfilería de aluminio que toma el vidrio en la base, botones/separadores de acero inoxidable, o pasamanos superior combinado. Te recomendamos el sistema que mejor equilibre estética, seguridad y presupuesto.',
        ],
      },
    ],
    destacados: [
      'Vidrio templado de seguridad',
      'Combinado con aluminio y acero inox',
      'Escaleras, balcones y entrepisos',
      'A medida de cada proyecto',
    ],
    faqs: [
      { q: '¿Una baranda de vidrio es segura?', a: 'Sí, siempre que se use vidrio templado (o laminado) del espesor correcto y herrajes adecuados. Cumplida esa condición, es tan segura como una baranda metálica y mucho más vistosa.' },
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
    fotoAlt: 'Galería cubierta con estructura y cerramiento — MÁS VIDRIOS',
    metaTitle: 'Techos de policarbonato en San Lorenzo',
    titleTail: 'techos y cubiertas de policarbonato translúcido cerca tuyo',
    metaDesc: 'Techos y cubiertas de policarbonato en San Lorenzo y Gran Asunción: translúcidos, resistentes y livianos para galerías, patios y aberturas cenitales. Presupuesto sin compromiso.',
    hero: 'Techos y cubiertas de policarbonato: translúcidos, resistentes y livianos.',
    intro: [
      'El policarbonato es la solución ideal cuando querés cubrir un espacio dejando pasar la luz: galerías, patios, cocheras, pasillos y aberturas cenitales. Es hasta 200 veces más resistente al impacto que el vidrio, muy liviano, y filtra los rayos UV protegiendo lo que hay debajo.',
      'En MÁS VIDRIOS proveemos e instalamos policarbonato alveolar y compacto, con la estructura de soporte y los perfiles de sujeción correctos para que la cubierta sea estanca y dure años.',
    ],
    bloques: [
      {
        h2: 'Aplicaciones',
        lista: [
          'Techos de galerías, patios y quinchos.',
          'Cubiertas de cocheras y entradas.',
          'Cerramientos translúcidos y medias sombras.',
          'Aberturas cenitales para iluminar ambientes interiores.',
        ],
      },
      {
        h2: 'Alveolar o compacto',
        parrafos: [
          'El policarbonato alveolar (tipo "panal") es más liviano y económico, con buena aislación; el compacto es macizo, más resistente y transparente, parecido al vidrio. Según el uso y el presupuesto te recomendamos el indicado.',
        ],
      },
    ],
    destacados: [
      'Policarbonato alveolar y compacto',
      'Resistente al impacto y a los rayos UV',
      'Liviano y translúcido',
      'Estructura y colocación incluidas',
    ],
    faqs: [
      { q: '¿El policarbonato amarillea con el sol?', a: 'Los policarbonatos de calidad vienen con protección UV en una de sus caras; instalados con esa cara hacia el sol, resisten muy bien y mantienen su transparencia por muchos años.' },
      { q: '¿Aísla del calor?', a: 'El alveolar tiene cámaras de aire que ayudan a aislar; además podés elegir colores y tonos (opal, bronce) que reducen el ingreso de calor y el resplandor.' },
      { q: '¿Incluye la estructura?', a: 'Sí, presupuestamos la cubierta completa: estructura de soporte, perfiles de sujeción y el policarbonato, todo instalado.' },
    ],
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
