const WHATSAPP_NUMBER = '51999999999';

const CATEGORIES = [
  { id: 'serum', name: 'Sérum' },
  { id: 'cremas', name: 'Cremas' },
  { id: 'bloqueador', name: 'Bloqueador' },
  { id: 'jabon', name: 'Jabón' },
  { id: 'tonico', name: 'Tónico' },
  { id: 'limpiador', name: 'Limpiador' },
  { id: 'exfoliante', name: 'Exfoliante' }
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
  }
];

const COMING_SOON = {
  bloqueador: 'Próximamente — Protección solar de amplio espectro SPF 50+.',
  jabon: 'Próximamente — Limpiadores suaves para todo tipo de piel.',
  tonico: 'Próximamente — Equilibrio y preparación para tu rutina de cuidado.',
  limpiador: 'Próximamente — Primera etapa esencial de tu rutina Perfect Skin.',
  exfoliante: 'Próximamente — Renovación celular para una piel radiante.'
};
