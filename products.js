const WHATSAPP_NUMBER = '51999999999';

const CLINICAL_COLLECTION = {
  headline: 'PERFECT SKIN CLINICAL - PORTAFOLIO INYECTABLE ESTÉRIL 10 mL',
  subline: 'Vial ámbar con tapa dorada - Uso Profesional Exclusivo'
};

const MAGISTRAL_COLLECTION = {
  headline: 'PERFECT SKIN - COLECCIÓN FÓRMULA MAGISTRAL'
};

const CATEGORY_INTRO = {
  'serum-coleccion': CLINICAL_COLLECTION,
  coleccion: MAGISTRAL_COLLECTION
};

const CATEGORIES = [
  { id: 'serum', name: 'Sérum' },
  { id: 'jabon', name: 'Jabones' },
  { id: 'cremas', name: 'Cremas' },
  { id: 'mascarilla', name: 'Mascarillas' },
  { id: 'coleccion', name: 'Serum Colección' },
  { id: 'exfoliantes', name: 'Exfoliantes' },
  { id: 'fotoprotectores', name: 'Fotoprotectores' },
  { id: 'espumas', name: 'Espumas Limpiadoras' },
  { id: 'serum-coleccion', name: 'Vial DR PEN' }
];

const PRODUCTS = [
  {
    id: 'aha-resurface',
    category: 'serum',
    image: 'imagenes/aha-resurface.png',
    title: 'PERFECT SKIN - AHA RESURFACE 12%',
    subtitle: 'Sérum exfoliante nocturno que renueva tu piel en 14 días.',
    beneficios: [
      'Unifica el tono y borra manchas',
      'Exfolia sin raspar ni irritar',
      'Devuelve el resplandor natural',
      'Suaviza textura y poros'
    ],
    uso: '2 veces por semana en la noche. Solo sobre piel limpia.',
    importante: 'Usar SPF50 al día siguiente.'
  },
  {
    id: 'retinex',
    category: 'serum',
    image: 'imagenes/retinex.png',
    title: 'PERFECT SKIN - RETINEX 0.025% | 30ml',
    subtitle: 'Sérum anti-edad nocturno con Retinol puro.',
    subtitle2: 'Para piel más firme, luminosa y sin arrugas.',
    beneficios: [
      'RENOVACIÓN: Acelera recambio celular',
      'LUMINOSIDAD: Borra opacidad y manchas',
      'FIRMEZA: Estimula colágeno, reduce líneas'
    ],
    uso: '2-3 veces por semana en la noche. Iniciar gradual.',
    importante: 'SPF50 obligatorio al día siguiente.',
    extra: 'Resultados visibles desde el mes 1.'
  },
  {
    id: 'glycolact',
    category: 'serum',
    image: 'imagenes/glycolact.png',
    title: 'PERFECT SKIN - GLYCOLACT 12 | 30ml',
    subtitle: 'Sérum exfoliante nocturno con AHA 12%.',
    subtitle2: 'Renueva tu piel y le devuelve el resplandor en 14 días.',
    beneficios: [
      'EXFOLIACIÓN: Elimina células muertas sin irritar',
      'UNIFORMIDAD: Reduce manchas y empareja el tono',
      'RESPLANDOR: Activa el glow natural al instante'
    ],
    uso: '2 veces por semana en la noche. Sobre piel limpia.',
    importante: 'SPF50 obligatorio al día siguiente.',
    extra: 'Resultados visibles desde la semana 2.'
  },
  {
    id: 'saliclear',
    category: 'serum',
    image: 'imagenes/saliclear.png',
    title: 'PERFECT SKIN - SALICLEAR 2%',
    subtitle: 'Sérum con Ácido Salicílico 2% pH 3.5-4.0',
    subtitle2: 'El BHA liposoluble que desobstruye y purifica tu piel.',
    beneficios: [
      'DESOBSTRUCCIÓN: Disuelve sebo y puntos negros',
      'PUREZA: Reduce poros dilatados y textura',
      'CONTROL: Regula el exceso de grasa y brillo'
    ],
    uso: '2-3 veces por semana en la noche. Sobre piel limpia.',
    importante: 'SPF50 obligatorio al día siguiente.',
    extra: 'Ideal para piel grasa, mixta y con tendencia al acné.'
  },
  {
    id: 'clindasol',
    category: 'serum',
    image: 'imagenes/clindasol-forte.png',
    title: 'PERFECT SKIN - CLINDASOL FORTE 1%',
    subtitle: 'Sérum con Clindamicina 1%',
    subtitle2: 'Purifica, calma y seca granitos inflamados.',
    beneficios: [
      'PURIFICA: Combate bacterias que causan acné',
      'CALMA: Desinflama granitos rojos y dolorosos',
      'SECA: Acelera que se vayan más rápido'
    ],
    uso: 'Solo en granitos puntuales, 1 vez al día en la noche.',
    importante: 'Uso máximo 6-8 semanas seguidas.',
    extra: 'Ideal para acné inflamado y brotes puntuales.'
  },
  {
    id: 'calmederm',
    category: 'serum',
    image: 'imagenes/calmederm.png',
    title: 'PERFECT SKIN - CALMEDERM RX 10%',
    subtitle: 'Sérum con Ácido Azelaico 10% Potenciado pH 4.5-5.0',
    subtitle2: 'Calma, repara y protege piel sensible y con rosácea.',
    beneficios: [
      'CALMA: Baja el enrojecimiento y ardor',
      'REPARA: Fortalece barrera de piel sensible',
      'PROTEGE: Unifica tono y mejora textura'
    ],
    uso: '1 vez al día en la noche. Iniciar días alternos.',
    importante: 'SPF50 obligatorio al día siguiente.',
    extra: 'Ideal para rosácea, piel reactiva y con tendencia a rojez.'
  },
  {
    id: 'hyaron-b3',
    category: 'serum',
    image: 'imagenes/hyaron-b3.png',
    title: 'PERFECT SKIN - HYARON B3 5%',
    subtitle: 'Sérum con Niacinamida 5% + Ácido Hialurónico',
    subtitle2: 'Luminosidad, equilibrio y tolerancia para todo tipo de piel.',
    beneficios: [
      'LUMINOSIDAD: Unifica tono y da glow natural',
      'EQUILIBRIO: Regula grasa y minimiza poros',
      'TOLERANCIA: Fortalece barrera, apto piel sensible'
    ],
    uso: 'Día y noche. 3-4 gotas sobre piel limpia.',
    importante: 'SPF50 obligatorio si lo usas de día.',
    extra: 'Ideal para todo tipo de piel. Incluso sensible.'
  },
  {
    id: 'panthrepair',
    category: 'serum',
    image: 'imagenes/panthrepair.png',
    title: 'PERFECT SKIN - PANTHREPAIR 2%',
    subtitle: 'Sérum con Panthenol 2% + Ácido Hialurónico 1% pH 5.5-6.5',
    subtitle2: 'Restaura, repara y calma la barrera de tu piel.',
    beneficios: [
      'REPARACIÓN: Restaura barrera dañada por activos',
      'CALMA: Baja ardor, tirantez y rojez',
      'HIDRATACIÓN: Ácido Hialurónico para piel jugosa'
    ],
    uso: 'Día y noche. 3-4 gotas sobre piel limpia.',
    importante: 'Ideal post-ácidos, retinol o procedimientos.',
    extra: 'Ideal para piel sensible, irritada, post-tratamiento y tirante.'
  },
  {
    id: 'codolux',
    category: 'serum',
    image: 'imagenes/codolux-renew.png',
    title: 'PERFECT SKIN - CODOLUX RENEW',
    subtitle: 'Sérum corporal con Ácido Glicólico 8% + Urea 10% pH 3.5-4.0',
    subtitle2: 'Renueva, suaviza y aclara zonas oscuras y ásperas.',
    beneficios: [
      'RENOVACIÓN: Exfolia y quita células muertas',
      'ACLARADO: Baja lo oscuro de codos y rodillas',
      'SUAVIDAD: Urea para piel gruesa y áspera'
    ],
    uso: 'Solo cuerpo. Noche: 4-5 gotas en codo/rodilla limpia.',
    importante: 'SPF50 obligatorio de día en la zona. Solo uso externo.',
    extra: 'Ideal para: Codos, rodillas, talones y axilas oscuras y gruesas.'
  },
  {
    id: 'lumine',
    category: 'serum',
    image: 'imagenes/lumine.png',
    title: 'PERFECT SKIN - LUMINÉ |',
    subtitle: 'Sérum Despigmentante con Alpha Arbutin 2% + Ácido Kójico 1% pH 5.5-6.0',
    subtitle2: 'Unifica el tono, aclara manchas y da radiancia sin hidroquinona.',
    beneficios: [
      'DESPIGMENTACIÓN: Aclara manchas, melasma y marcas de acné',
      'UNIFORMIDAD: Tono parejo y luminoso',
      'RADIANCIA: Glow saludable sin irritar',
      'SEGURO: Sin hidroquinona. pH compatible con piel'
    ],
    uso: 'Noche. 3-4 gotas sobre piel limpia antes de tu crema.',
    importante: 'SPF50 obligatorio todos los días. Uso progresivo.',
    extra: 'Ideal para: Manchas, melasma, hiperpigmentación post-acné y tono irregular.'
  },
  {
    id: 'zinc-clear',
    category: 'serum',
    image: 'imagenes/zinc-clear.png',
    title: 'PERFECT SKIN - ZINC CLEAR 1%',
    subtitle: 'Sérum purificante con Zinc PCA 1% + Sulfur 0.5% pH 5.5-6.5',
    subtitle2: 'Seca, calma y purifica granitos inflamados.',
    beneficios: [
      'SECADO: Reduce tamaño de granos con pus en 24-48h',
      'CALMA: Baja rojez e inflamación',
      'PURIFICACIÓN: Regula grasa y evita nuevos brotes',
      'LEGAL: Alternativa cosmética al antibiótico'
    ],
    uso: 'Día o Noche. Piel limpia y seca. Aplicar 2-3 gotas solo en el grano.',
    importante: 'Uso puntual. No aplicar en toda la cara.',
    extra: 'Ideal para: Acné inflamado, granos con pus, piel grasa'
  },
  {
    id: 'piel-seda-luxe',
    category: 'cremas',
    image: 'imagenes/cremas/piel-seda-luxe.png',
    title: 'PERFECT SKIN - Piel Seda Luxe',
    subtitle: 'Repara - Calma - Seda',
    subtitle2: 'Reparadora'
  },
  {
    id: 'intenso',
    category: 'cremas',
    image: 'imagenes/cremas/intenso.png',
    title: 'PERFECT SKIN Intenso',
    subtitle: 'Aminoácidos + Péptidos + Vitaminas',
    subtitle2: 'Nutritiva'
  },
  {
    id: 'resveratrol-retinoico',
    category: 'cremas',
    image: 'imagenes/cremas/resveratrol-retinoico.png',
    title: 'PERFECT SKIN - Resveratrol + Retinoico',
    subtitle: 'Anti-Edad 35+'
  },
  {
    id: 'reafirmante-intenso',
    category: 'cremas',
    image: 'imagenes/cremas/reafirmante-intenso.png',
    title: 'PERFECT SKIN - Crema Anti-Edad Reafirmante Intenso 35+ | 50g',
    subtitle: 'Retinol + Aminoácidos',
    subtitle2: 'Fórmula dual potente · Reparadora',
    beneficios: [
      'ANTI-EDAD: Retinol que renueva y reduce arrugas y líneas finas',
      'REAFIRMANTE: Mejora firmeza y elasticidad de la piel caída',
      'REPARA: Los aminoácidos reparan la barrera y evitan la irritación del retinol'
    ],
    uso: 'Solo de noche. Aplicar en rostro, cuello y escote limpios.',
    extra: 'Crema nocturna rica para piel 35+ exigente.'
  },
  {
    id: 'despigmentante-corporal',
    category: 'cremas',
    image: 'imagenes/cremas/despigmentante-corporal.png',
    title: 'PERFECT SKIN - Crema Despigmentante Corporal Premium Aclarante | 50g',
    subtitle: 'Ácido Kójico + Tranexámico + Láctico',
    subtitle2: 'Aclara - Unifica - Renueva',
    beneficios: [
      'ACLARA: Aclara la apariencia de zonas oscuras',
      'UNIFICA: Unifica el tono y reduce manchas oscuras corporales',
      'RENUEVA: Renueva y suaviza la textura de piel gruesa'
    ],
    uso: 'Día y noche. Aplicar en zonas oscuras limpias.',
    extra: 'Zonas: Axilas, cuello, entrepiernas, codos y rodillas.'
  },
  {
    id: 'despigmentante-facial',
    category: 'cremas',
    image: 'imagenes/cremas/despigmentante-facial.png',
    title: 'PERFECT SKIN - Crema Despigmentante Facial Premium Aclarante | 50g',
    subtitle: 'Ácido Kójico + Tranexámico + Láctico',
    subtitle2: 'Unifica - Ilumina - Suaviza',
    beneficios: [
      'UNIFICA: Unifica el tono y reduce la apariencia de manchas',
      'ILUMINA: Devuelve la luminosidad natural',
      'SUAVIZA: Suaviza la textura y la apariencia de poros'
    ],
    uso: 'Aplicar de noche sobre el rostro limpio.',
    importante: 'Usar protector SPF50 durante el día siguiente.',
    extra: 'Tratamiento facial nocturno para manchas solares y post-acné.'
  },
  {
    id: 'crema-reparadora-post',
    category: 'cremas',
    image: 'imagenes/cremas/crema-reparadora-post.png',
    title: 'PERFECT SKIN - Crema Reparadora Post-Procedimiento | 70g',
    subtitle: 'Centella + Pantenol + Calmantes',
    subtitle2: 'Post-procedimiento · Profesional · Reparadora',
    beneficios: [
      'REPARADOR: Acelera la recuperación y calma post-tratamiento',
      'HIDRATANTE: Nutre y restaura la barrera cutánea'
    ],
    uso: 'Aplicar capa generosa post peeling, CO2, HIFU y láser.',
    extra: 'Crema suave de uso profesional en cabina.'
  },
  {
    id: 'glow-bright',
    category: 'serum-coleccion',
    image: 'imagenes/serum-coleccion/glow-bright.png',
    title: 'PERFECT SKIN - GLOW BRIGHT | SISTEMA DESPIGMENTANTE INTENSIVO',
    subtitle: 'Sistema despigmentante intensivo',
    composicion: 'Ácido Tranexámico (TXA) - Ácido Kójico - Ácido Fítico - Péptido de Cobre - Glutatión - Arbutina.',
    mecanismo: 'Inhibe la melanogénesis en diferentes vías, bloquea la transferencia de melanosomas, regula la actividad tirosinasa y ejerce potente acción antioxidante y antiinflamatoria.',
    indicacion: 'Hiperpigmentación, melasma epidérmico y mixto, hiperpigmentación post-inflamatoria (HPI), lentigos solares y discromías. Unificación del tono y efecto luminoso.',
    resultado: 'Piel uniforme, luminosa y con tono visiblemente regulado.',
    presentacion: 'Portafolio inyectable estéril 10 mL. Vial ámbar con tapa dorada. Uso microneedling estéril. Uso profesional exclusivo.'
  },
  {
    id: 'lift-cobre',
    category: 'serum-coleccion',
    image: 'imagenes/serum-coleccion/lift-cobre.png',
    title: 'PERFECT SKIN - LIFT COBRE | BIOESTIMULADOR Y REAFIRMANTE',
    subtitle: 'Bioestimulador y reafirmante',
    composicion: 'GHK-Cu (Péptido de Cobre).',
    mecanismo: 'Péptido señal que estimula la síntesis de colágeno I, III, elastina y glicosaminoglicanos. Potente remodelador, reparador y angiogénico. Mejora la firmeza y la densidad dérmica.',
    indicacion: 'Flacidez cutánea leve a moderada de rostro, cuello y escote, pérdida de turgencia, piel desvitalizada y protocolos de regeneración post-procedimiento.',
    resultado: 'Efecto tensado, piel más firme, densa y revitalizada.',
    presentacion: 'Portafolio inyectable estéril 10 mL. Vial ámbar con tapa dorada. Uso microneedling estéril. Uso profesional exclusivo.'
  },
  {
    id: 'adn-glow',
    category: 'serum-coleccion',
    image: 'imagenes/serum-coleccion/adn-glow.png',
    title: 'PERFECT SKIN - ADN GLOW | POLINUCLEÓTIDO + EXOSOMAS - SKIN BOOSTER',
    subtitle: 'Polinucleótido + exosomas — skin booster',
    composicion: 'PDRN (Polidesoxirribonucleótido) - Exosomas - Glutatión.',
    mecanismo: 'Reparación y bioestimulación celular. El PDRN estimula la reparación del ADN y la proliferación de fibroblastos. Los exosomas actúan como mensajeros celulares para regeneración. Glutatión como antioxidante maestro para luminosidad.',
    indicacion: 'Rejuvenecimiento global, fotoenvejecimiento, textura irregular, poro dilatado y apagamiento cutáneo. Protocolo Glow y efecto piel de porcelana.',
    resultado: 'Hidratación profunda, textura refinada, luminosidad extrema y revitalización.',
    presentacion: 'Portafolio inyectable estéril 10 mL. Vial ámbar con tapa dorada. Uso microneedling estéril. Uso profesional exclusivo.'
  },
  {
    id: 'adn-intensive-repair',
    category: 'serum-coleccion',
    image: 'imagenes/serum-coleccion/adn-intensive-repair.png',
    title: 'PERFECT SKIN - ADN INTENSIVE REPAIR | REPARADOR INTENSIVO POST-PROCEDIMIENTO',
    subtitle: 'Reparador intensivo post-procedimiento',
    composicion: 'PDRN - Exosomas - Centella Asiática.',
    mecanismo: 'Sinergia regeneradora, antiinflamatoria y cicatrizante. Restaura la barrera cutánea, modula la inflamación, acelera la reepitelización y calma la reactividad vascular.',
    indicacion: 'Piel sensible, reactiva, con barrera alterada, eritema persistente. Ideal como coadyuvante en recuperación post-láser, microneedling, peelings y para pieles con rosácea controlada.',
    resultado: 'Piel reparada, calmada, fortalecida y con mayor tolerancia.',
    presentacion: 'Portafolio inyectable estéril 10 mL. Vial ámbar con tapa dorada. Uso microneedling estéril. Uso profesional exclusivo.'
  },
  {
    id: 'exosomas-panax-ginseng',
    category: 'serum-coleccion',
    image: 'imagenes/serum-coleccion/exosomas-panax-ginseng.png',
    title: 'PERFECT SKIN - EXOSOMAS BIOACTIVOS DE PANAX GINSENG | FRACCIÓN EXOSOMAL PURIFICADA',
    subtitle: 'Fracción exosomal purificada',
    composicion: 'Exosomas bioactivos de Panax Ginseng (fracción exosomal purificada).',
    presentacion: 'Portafolio inyectable estéril 10 mL. Vial ámbar con tapa dorada. Uso microneedling estéril. Uso profesional exclusivo.'
  },
  {
    id: 'coleccion-glow-bright',
    category: 'coleccion',
    image: 'imagenes/coleccion/glow-bright.png',
    title: 'PERFECT SKIN - GLOW BRIGHT - SÉRUM DESPIGMENTANTE',
    subtitle: 'Iluminador intensivo de alta potencia',
    subtitle2: 'Su fórmula magistral despigmentante actúa sobre manchas solares, melasma y tono desigual, revelando una piel radiante y uniforme.',
    activos: 'TXA, Kójico, Fítico, Cobre, Glutatión, Arbutina',
    beneficios: [
      'Reduce manchas oscuras y melasma',
      'Unifica el tono y aporta luminosidad',
      'Antioxidante y antimanchas'
    ],
    uso: 'Aplicar 3-4 gotas por la noche sobre rostro limpio.',
    extra: 'Ideal para: Piel con manchas, tono opaco y desigual.'
  },
  {
    id: 'coleccion-adn-salmon',
    category: 'coleccion',
    image: 'imagenes/coleccion/adn-salmon-exo-microtech.png',
    title: 'PERFECT SKIN - ADN SALMON EXO + MICROTECH',
    subtitle: 'Biotecnología japonesa — fórmula magistral',
    subtitle2: 'Suero regenerador de alta pureza con PDRN de salmón japonés grado farmacéutico, exosomas y sistema Microtech Delivery.',
    sections: [
      {
        title: '¿QUÉ ES?',
        text: 'Suero regenerador de alta pureza formulado con PDRN de Salmón de origen japonés grado farmacéutico. Fusionado con Exosomas y sistema Microtech Delivery para reparación profunda del ADN, unificación del tono y efecto glow natural.'
      },
      {
        title: 'INGREDIENTES CLAVE',
        items: [
          'PDRN Salmón Japonés 2%: Grado farmacéutico, alta pureza y bajo peso molecular. Repara ADN celular y estimula colágeno.',
          'Exosomas: Potencian regeneración celular.',
          'Microtech Delivery System: Transporte transdérmico japonés para penetración profunda.',
          'Ácido Hialurónico + Niacinamida: Hidratación y unificación del tono.'
        ]
      },
      {
        title: '¿CÓMO SE USA?',
        paragraphs: [
          'Frecuencia: Todos los días, 7 días a la semana. Tratamiento regenerador.',
          'Aplicación: 2 veces al día, mañana y noche. En pieles sensibles, iniciar solo por la noche 5 días, luego 2 veces.'
        ],
        steps: [
          'Limpiar rostro.',
          'Aplicar 3 a 4 gotas en rostro, cuello y escote.',
          'Masajear suave hasta absorción total.',
          'Sellar con hidratante.',
          'De día, finalizar con bloqueador. Obligatorio.'
        ]
      },
      {
        title: '¿ES OBLIGATORIO EL BLOQUEADOR?',
        text: 'SÍ, 100% OBLIGATORIO. Sin fotoprotección no hay resultados. El PDRN japonés repara, pero el sol vuelve a pigmentar. SPF 50, 2 a 3 veces al día cada 3-4 horas.'
      },
      {
        title: '¿PARA QUIÉN ES?',
        items: [
          'Pieles con marcas de acné y textura irregular.',
          'Manchas post-inflamatorias y tono desigual.',
          'Piel opaca, sin vida y sin luminosidad.',
          'Primeras líneas y poro dilatado.',
          'Pieles post-peeling y post-láser.',
          'Todo tipo de piel, de 20 a 60 años.'
        ]
      },
      {
        title: '¿EN CUÁNTO TIEMPO SE VEN LOS RESULTADOS?',
        items: [
          'Día 3 a 7: Hidratación profunda, suavidad y primer glow.',
          'Semana 2 a 3: Tono unificado, poro cerrado, marcas más claras.',
          'Mes 1: Textura reparada visible.',
          'Mes 2 a 3: Resultado magistral completo. Colágeno nuevo desde el interior.'
        ]
      }
    ]
  },
  {
    id: 'coleccion-lift',
    category: 'coleccion',
    image: 'imagenes/coleccion/lift.png',
    title: 'PERFECT SKIN - LIFT - SÉRUM REAFIRMANTE',
    subtitle: 'Sérum tensor de efecto lifting',
    subtitle2: 'Estimula la producción natural de colágeno y elastina, redefiniendo el óvalo facial y mejorando la firmeza.',
    activos: 'Cobre GHK-Cu, Péptidos de Cobre',
    beneficios: [
      'Efecto lifting y reafirmante inmediato',
      'Estimula colágeno y elastina',
      'Reduce flacidez y líneas de expresión'
    ],
    uso: 'Aplicar mañana y noche con movimientos ascendentes.',
    extra: 'Ideal para: Piel con flacidez, pérdida de firmeza.'
  },
  {
    id: 'coleccion-adn-glow',
    category: 'coleccion',
    image: 'imagenes/coleccion/adn-glow.png',
    title: 'PERFECT SKIN - ADN GLOW - SÉRUM ILUMINADOR',
    subtitle: 'El secreto de la piel de porcelana',
    subtitle2: 'Tecnología regenerativa de ADN que repara a nivel celular e ilumina desde el interior con efecto glow de alta definición.',
    activos: 'PDRN, Exosomas, Glutatión',
    beneficios: [
      'Regeneración celular avanzada',
      'Efecto glow luminoso y piel de porcelana',
      'Repara y rejuvenece'
    ],
    uso: 'Aplicar 3-4 gotas por la noche como tratamiento intensivo.',
    extra: 'Ideal para: Piel apagada, con signos de fatiga y envejecimiento.'
  },
  {
    id: 'coleccion-adn-intensive-repair',
    category: 'coleccion',
    image: 'imagenes/coleccion/adn-intensive-repair.png',
    title: 'PERFECT SKIN - ADN INTENSIVE REPAIR - SÉRUM REPARADOR',
    subtitle: 'Reparador intensivo barrera',
    subtitle2: 'Calma, repara y fortalece la barrera cutánea. Ideal post-procedimientos, piel sensible o dañada.',
    activos: 'PDRN, Exosomas, Centella Asiática',
    beneficios: [
      'Repara barrera cutánea dañada',
      'Calma enrojecimiento y sensibilidad',
      'Regeneración intensiva'
    ],
    uso: 'Aplicar mañana y noche sobre piel limpia. Puede usarse como calmante.',
    extra: 'Ideal para: Piel sensible, sensibilizada, post-tratamiento.'
  },
  {
    id: 'benzo-clean-premium',
    category: 'jabon',
    image: 'imagenes/jabones/benzo-clean-premium.png',
    title: 'PERFECT SKIN - JABÓN DE BENZO CLEAN PREMIUM',
    subtitle: 'Limpieza profunda · Cuidado diario',
    caracteristicas: [
      'Fórmula Magistral',
      'Limpieza Profunda',
      'Apariencia de Poros Desobstruidos',
      'Textura Equilibrada',
      'Sensación de Pureza',
      'Cuidado Diario'
    ],
    notaEmpaque: 'Tratamiento efectivo para el acné grado 2, reduce bacterias y desobstruye poros a base de peróxido de benzoilo.'
  },
  {
    id: 'vitamina-premium',
    category: 'jabon',
    image: 'imagenes/jabones/vitamina-premium.png',
    title: 'PERFECT SKIN - JABÓN VITAMINA PREMIUM (Leche de Cabra)',
    subtitle: 'Leche de Cabra · Renueva e hidrata',
    caracteristicas: [
      'Fórmula Magistral',
      'Renueva e Hidrata',
      'Mejora Elasticidad y Firmeza',
      'Textura Suave',
      'Aspecto Luminoso',
      'Cuidado Diario'
    ],
    notaEmpaque: 'Contiene Colágeno, Elastina, B3, Vitamina E y Germen de Trigo para renovar, hidratar y mejorar la elasticidad y firmeza de la piel.'
  },
  {
    id: 'antiacne-premium',
    category: 'jabon',
    image: 'imagenes/jabones/antiacne-premium.png',
    title: 'PERFECT SKIN - JABÓN ANTIACNÉ PREMIUM',
    subtitle: 'Limpieza de poros · Sensación fresca',
    caracteristicas: [
      'Fórmula Magistral',
      'Limpieza de Poros',
      'Apariencia Más Uniforme',
      'Textura Suave',
      'Sensación Fresca',
      'Cuidado Diario'
    ],
    notaEmpaque: 'Contiene Ácido Salicílico y Ácido Láctico para combatir el acné y poros, hidratar y suavizar la piel.'
  },
  {
    id: 'aclarante-premium',
    category: 'jabon',
    image: 'imagenes/jabones/aclarante-premium.png',
    title: 'PERFECT SKIN - JABÓN ACLARANTE PREMIUM',
    subtitle: 'Aclaración y tono uniforme',
    caracteristicas: [
      'Fórmula Magistral',
      'Aclaración y Tono Uniforme',
      'Reduce Apariencia de Manchas',
      'Textura Suave',
      'Aspecto Luminoso',
      'Cuidado Diario'
    ],
    notaEmpaque: 'Contiene Ácido Kójico, Ácido Glicólico, Ácido Láctico y Vitamina C para la aclaración y unificación del tono, ayudando a reducir manchas e hiperpigmentación.'
  },
  {
    id: 'aloe-frio-calmante',
    category: 'mascarilla',
    image: 'imagenes/mascarillas/aloe-frio-calmante.png',
    title: 'PERFECT SKIN - Mascarilla Aloe Frío Calmante | 70g',
    subtitle: 'Aloe Vera + Extractos Calmantes',
    subtitle2: 'Post-procedimiento · Profesional · Calmante',
    beneficios: [
      'CALMA: Reduce rojeces y ardor post-tratamiento',
      'HIDRATANTE: Hidrata y refresca la piel sensibilizada'
    ],
    uso: 'Aplicar capa generosa post peeling, CO2, HIFU y láser.',
    extra: 'Gel frío de uso profesional en cabina.'
  },
  ...[
    ['antiage-ghk-lift', 'Exfoliante Antiage GHK Lift', 'GHK & Péptidos Colágeno', 'Movimientos ascendentes'],
    ['adn-glow', 'Exfoliante ADN Glow', 'Iluminadora Prime Exosomas', 'Movimientos ascendentes'],
    ['glow-bright-manchas', 'Exfoliante Glow Bright Manchas', '5% Arbutina + Niacinamida', 'Movimientos ascendentes'],
    ['suave-reparadora', 'Exfoliante Suave Reparadora', '3% Mandélico + Gluconolactona', 'Movimientos ascendentes'],
    ['acne', 'Exfoliante Acné', '7% Salicílico + Glicólico + Niacinamida', 'Movimientos circulares suaves']
  ].map(([slug, name, activos, masaje]) => ({
    id: `exfoliante-${slug}`,
    category: 'exfoliantes',
    image: `imagenes/exfoliantes/${slug}.png`,
    title: `PERFECT SKIN - ${name} | 70g`,
    subtitle: activos,
    uso: `Nocturno. 1) Limpia: rostro limpio y seco. 2) Aplica: capa fina uniforme. 3) Masajea: ${masaje.toLowerCase()}. 4) Enjuaga: dejar actuar 5-10 min y luego enjuagar con agua tibia.`
  })),
  ...[
    ['adn-glow', 'Espuma Limpiadora ADN Glow', 'Iluminadora · Prime Exosomas'],
    ['glow-bright', 'Espuma Limpiadora Glow Bright', 'Despigmentante y Antiaging'],
    ['acne', 'Espuma Limpiadora Acné', 'Control Sebo · Purifica'],
    ['lift', 'Espuma Limpiadora Lift', 'Reafirmante GHK & Péptidos']
  ].map(([slug, name, subtitle]) => ({
    id: `espuma-${slug}`,
    category: 'espumas',
    image: `imagenes/espumas/${slug}.png`,
    title: `PERFECT SKIN - ${name} | 200ml`,
    subtitle
  })),
  ...[
    ['ghk-cu', 'GHK-Cu Regenerador', 'Reparación bioactiva GHK-Cu + Péptidos + Microtech', '2% High-Potency · Regenerador',
      ['Estimula colágeno con péptido GHK-Cu', 'Repara y regenera tejido dañado', 'Hidrata y mejora elasticidad']],
    ['antioxidante', 'Antioxidante Glutatión', 'Escudo antioxidante Glutatión + Niacinamida + Microtech', '2% High-Potency · Defensor',
      ['Antioxidante, combate radicales libres', 'Ilumina y reduce manchas con glutatión', 'Unifica tono con niacinamida y glow']],
    ['pdrn', 'PDRN ADN Salmón', 'ADN de Salmón (PDRN) + Exosomas + Microtech', '2% High-Potency',
      ['Regeneración celular profunda con PDRN', 'Repara barrera dañada y mejora elasticidad', 'Hidratación intensa y glow con ácido hialurónico']],
    ['vitamina-c', 'Vitamina C+E+B5 Iluminador', 'Potencia antioxidante Vitamina C + E + B5 + Microtech', '2% High-Potency · Fórmula iluminadora',
      ['Ilumina y aporta glow instantáneo con vitamina C', 'Antioxidante, protege del fotoenvejecimiento', 'Unifica tono con vitamina E y B5']],
    ['antiedad', 'Anti Edad Retinoico', 'Retinoico + Ácido Hialurónico + Microtech', '2% High-Potency · Antiedad',
      ['Reduce arrugas y líneas finas con retinoico', 'Reafirma y mejora elasticidad', 'Rejuvenece e hidrata profundo']],
    ['despigmentante', 'Despigmentante Kójico', 'Ácido Kójico + Arbutina + Microtech', '2% High-Potency · Aclarador',
      ['Blanqueamiento natural, reduce manchas oscuras', 'Inhibe melanina con ácido kójico y arbutina', 'Unifica tono y aporta glow con niacinamida']]
  ].map(([slug, name, subtitle, subtitle2, [skin, firming, barrier]]) => ({
    id: `fotoprotector-${slug}`,
    category: 'fotoprotectores',
    image: `imagenes/fotoprotectores/${slug}.png`,
    title: `PERFECT SKIN - Fotoprotector FPS +50 ${name} | 100ml`,
    subtitle,
    subtitle2,
    beneficios: [
      `SKIN SUPPORT: ${skin}`,
      `FIRMING CARE: ${firming}`,
      `BARRIER CARE: ${barrier}`
    ],
    extra: 'Protección UVB · UVA · IR. Fórmula dermatológica de triple protección.'
  }))
];

const COMING_SOON = {};
