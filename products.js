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
    id: 'retinex',
    category: 'serum',
    image: 'imagenes/retinex.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN RETINOICO',
    name: 'RETINEX 0.025 | Retinoic Acid 0.025% | pH 5.5-6.0',
    keywordsLabel: 'PALABRAS:',
    keywords: 'Renovación • Firmeza • Luminosidad',
    funcion: 'Renovación celular nocturna, líneas finas, manchas, textura, poros',
    modoUso: 'Noche única, piel limpia y seca. 1 gota tamaño arveja en rostro y cuello evitando párpados y comisuras. Iniciar 2 noches/semana, subir según tolerancia.',
    activos: 'Aqua, Retinoic Acid 0.025%, Glycerin, Propylene Glycol, Carbomer, Triethanolamine, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'SPF 50+ obligatorio día siguiente. NO combinar AHA/BHA/Vit C pura misma noche. Descamación leve semanas 1-3 es normal.',
    precauciones: 'NO embarazo, lactancia, menores 18 años. Fotosensibilizante. Solo uso externo.'
  },
  {
    id: 'glycolact',
    category: 'serum',
    image: 'imagenes/glycolact.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN GLICOLICO',
    name: 'GLYCOLACT 12 | Glycolic Acid 7% + Lactic Acid 5% | pH 3.5-4.0',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Exfoliación • Uniformidad • Resplandor',
    funcion: 'Exfoliación química, manchas post-acné, textura, glow',
    modoUso: 'Solo noche, piel limpia y seca. 2-3 gotas rostro y cuello. No enjuagar. 2-3 noches/semana máximo. Test parche 24h antes.',
    activos: 'Aqua, Glycolic Acid 7%, Lactic Acid 5%, Glycerin, Propylene Glycol, Sodium Hydroxide pH adjuster, Aloe Barbadensis Leaf Extract, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'Hormigueo leve normal. SPF 50+ obligatorio. NO combinar retinoico/BHA misma noche. Suspender si ardor intenso.',
    precauciones: 'No piel irritada, heridas, dermatitis activa. No embarazo sin supervisión médica.'
  },
  {
    id: 'saliclear',
    category: 'serum',
    image: 'imagenes/saliclear.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN SALICILICO',
    name: 'SALICLEAR 2% | Salicylic Acid 2% | pH 3.5-4.0',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Desobstrucción • Control • Pureza',
    funcion: 'BHA liposoluble, disuelve sebo, puntos negros, piel grasa/mixta',
    modoUso: 'Solo noche, piel limpia y seca. 2-3 gotas zona T o granitos puntuales. Iniciar 3 noches/semana.',
    activos: 'Aqua, Salicylic Acid 2%, Hamamelis Virginiana Extract, Niacinamide 2%, Glycerin, Propylene Glycol, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'SPF 50+ obligatorio. Para piel grasa/mixta y puntos negros. Si reseca bajar a 2 veces/semana + hidratante.',
    precauciones: 'NO embarazo, lactancia, alergia aspirinas. No menores 12 años. Solo uso externo.'
  },
  {
    id: 'clindasol',
    category: 'serum',
    image: 'imagenes/clindasol.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN CLINDAMICINA',
    name: 'CLINDASOL 1% FORTE | Clindamycin Phosphate 1% | pH 5.5-6.5',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Seca • Calma • Purifica',
    funcion: 'Antibiótico antiacné para granos inflamados con pus. Versión mejorada',
    modoUso: 'Día o noche, piel limpia y seca. Aplicar con hisopo solo sobre grano con pus, 2 veces al día. NO aplicar en piel sana. Máximo 8 semanas seguidas.',
    activos: 'Aqua, Clindamycin Phosphate 1%, Zinc PCA 0.5%, Niacinamide 2%, Propylene Glycol, Alcohol Isopropyl 30%, Carbomer, Triethanolamine, Allantoin 0.3%, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'Zinc PCA + Niacinamide + Allantoin agregados para reducir irritación. Alcohol bajado a 30% para menos resecamiento. NO combinar con eritromicina. NO más de 8 semanas.',
    precauciones: 'RECETA MEDICA DIGEMID OBLIGATORIA. VENTA SOLO FARMACIA/BOTICA. NO embarazo/lactancia sin indicación. NO menores 12 años. Puede causar diarrea severa. Solo uso externo.'
  },
  {
    id: 'calmederm',
    category: 'serum',
    image: 'imagenes/calmederm.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN ROSACEA',
    name: 'CALMEDERM RX 10% | Azelaic Acid 10% Potenciado | pH 4.5-5.0',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Calma • Repara • Protege',
    funcion: 'Rosácea, rojeces, cuperosis, piel reactiva. Versión potenciada',
    modoUso: 'Día y noche desde día 1, piel limpia y seca. 3-4 gotas rostro completo, masajear suave. Antes de crema hidratante. Uso continuo.',
    activos: 'Aqua, Azelaic Acid 10%, Sodium Hyaluronate 1%, Panthenol 2%, Beta-Glucan 0.5%, Allantoin 0.5%, Bisabolol 0.5%, Centella Asiatica Extract 1%, Madecassoside 0.1%, Ceramide NP 0.2%, Sodium PCA, Glycerin, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'SPF mineral 50+ obligatorio diario. Evitar triggers: calor, alcohol, picante, café, estrés. Si brote agudo usar 3 veces/día 1 semana. Resultados semana 4-6. Compatible con Niacinex 5%.',
    precauciones: 'Solo uso externo. Evitar contorno ojos y mucosas. Apto embarazo y lactancia. Test parche piel muy sensible.'
  },
  {
    id: 'hyaron-b3',
    category: 'serum',
    image: 'imagenes/hyaron-b3.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN HYARON B3',
    name: 'HYARON B3 5%',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Luminosidad • Tolerancia • Equilibrio',
    pending: true
  },
  {
    id: 'panthrepair',
    category: 'serum',
    image: 'imagenes/panthrepair.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN HYARON B5',
    name: 'PANTHREPAIR 2% | Panthenol 2% + Hyaluronic Acid 1% | pH 5.5-6.5',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Reparación • Calma • Restauración',
    funcion: 'Reparador barrera. Post-retinoico/AHA, piel tirante, rojez, post-procedimiento',
    modoUso: 'Día y noche. Piel limpia y seca. 2-3 gotas rostro. Último serum antes de crema. Ideal post-láser/peeling.',
    activos: 'Aqua, Panthenol 2%, Sodium Hyaluronate 1%, Glycerin, Beta-Glucan 0.5%, Allantoin 0.5%, Propylene Glycol, Carbomer, Triethanolamine, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'SPF 50+ si barrera dañada. Compatible con 100% de activos. Textura pegajosa 2 min luego seda es normal. Apaga irritación de retinoico/AHA.',
    precauciones: 'Solo uso externo. Suspender si reacción alérgica. Apto embarazo/lactancia.'
  },
  {
    id: 'codolux',
    category: 'serum',
    image: 'imagenes/codolux.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN PARA CODO',
    name: 'CODOLUX | Glycolic Acid 8% + Urea 10% | pH 3.5-4.0',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Suavidad • Aclarado • Renovación',
    funcion: 'Solo cuerpo. Quita lo oscuro y grueso de codos/rodillas',
    modoUso: 'Solo cuerpo, codo/rodilla limpia y seca. 5-6 gotas solo zona áspera. Masajear. Solo noche diario 2 semanas, luego 4x/semana.',
    activos: 'Aqua, Glycolic Acid 8%, Urea 10%, Lactic Acid 5%, Glycerin, Propylene Glycol, Sodium Hydroxide pH adjuster, Panthenol 1%, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'SPF 50+ en zona tratada día siguiente. Resultados semana 2-3. Hidratar después.',
    precauciones: 'NO USAR EN ROSTRO/CARA/MUCOSAS. NO menores 12 años. Fotosensibilizante. Solo uso externo cuerpo.'
  },
  {
    id: 'lumine',
    category: 'serum',
    image: 'imagenes/lumine.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN DESPIGMENTANTE',
    name: 'LUMINÉ | Alpha Arbutin 2% + Kojic Acid 1% | pH 5.5-6.0',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Despigmantación • Uniformidad • Radiancia',
    funcion: 'Manchas, melasma, tono irregular. Sin hidroquinona',
    modoUso: 'Día y noche. Piel limpia y seca. 3-4 gotas rostro. Antes de crema hidratante. Uso diario continuo.',
    activos: 'Aqua, Alpha Arbutin 2%, Kojic Acid 1%, Niacinamide 3%, Glycerin, Propylene Glycol, Sodium Hyaluronate 0.5%, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'SPF 50+ obligatorio 100% del tiempo. Resultados semana 6-8. No combinar con ácidos fuertes misma noche.',
    precauciones: 'Solo uso externo. Suspender si irritación. Test parche piel sensible.'
  },
  {
    id: 'zinc-clear',
    category: 'serum',
    image: 'imagenes/zinc-clear.png',
    line: 'LÍNEA DERMOCOSMÉTICA',
    type: 'SERUN ZINC',
    name: 'ZINC CLEAR 1% | Zinc PCA 1% + Sulfur 0.5% | pH 5.5-6.5',
    keywordsLabel: '3 PALABRAS:',
    keywords: 'Secado • Calma • Purificación',
    funcion: 'Alternativa cosmética legal a antibiótico. Granos inflamados con pus',
    modoUso: 'Día o noche. Piel limpia y seca. 2-3 gotas solo en granos inflamados con pus. Uso puntual. Máximo 2 veces/día.',
    activos: 'Aqua, Zinc PCA 1%, Sulfur 0.5%, Niacinamide 2%, Glycerin, Propylene Glycol, Carbomer, Triethanolamine, Phenoxyethanol, Ethylhexylglycerin',
    recomendaciones: 'Seca grano 24-48h. SPF 50+ obligatorio. No usar en piel sana. Alternativa a Clindasol para venta libre.',
    precauciones: 'Solo uso externo. NO embarazo sin indicación médica por sulfur. Suspender si irritación.'
  }
];

const COMING_SOON = {
  cremas: 'Próximamente — Descubre nuestra línea completa de cremas hidratantes y tratamiento.',
  bloqueador: 'Próximamente — Protección solar de amplio espectro SPF 50+.',
  jabon: 'Próximamente — Limpiadores suaves para todo tipo de piel.',
  tonico: 'Próximamente — Equilibrio y preparación para tu rutina de cuidado.',
  limpiador: 'Próximamente — Primera etapa esencial de tu rutina Perfect Skin.',
  exfoliante: 'Próximamente — Renovación celular para una piel radiante.'
};
