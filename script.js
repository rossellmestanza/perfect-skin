let activeCategory = 'serum';

const tabsEl = document.querySelector('.tabs');
const gridEl = document.getElementById('products-grid');
const emptyStateEl = document.getElementById('empty-state');
const emptyMessageEl = document.getElementById('empty-message');
const categoryIntroEl = document.getElementById('category-intro');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function getCardName(product) {
  const title = product.title.trim();
  if (/^PERFECT SKIN\s*[-–]\s*/i.test(title)) {
    return title.replace(/^PERFECT SKIN\s*[-–]\s*/i, '').trim();
  }
  if (/^PERFECT SKIN\s+/i.test(title)) {
    return title.replace(/^PERFECT SKIN\s+/i, '').trim();
  }
  return title;
}

function initTabs() {
  tabsEl.innerHTML = CATEGORIES.map(cat => `
    <button
      class="tab ${cat.id === activeCategory ? 'active' : ''}"
      role="tab"
      aria-selected="${cat.id === activeCategory}"
      data-category="${cat.id}"
    >${cat.name}</button>
  `).join('');

  tabsEl.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeCategory = tab.dataset.category;
      tabsEl.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.category === activeCategory);
        t.setAttribute('aria-selected', t.dataset.category === activeCategory);
      });
      renderProducts();
    });
  });
}

function isClinicalCollection(product) {
  return product.category === 'serum-coleccion';
}

function isMagistralCollection(product) {
  return product.category === 'coleccion';
}

function getProductBrandLine(product) {
  if (isClinicalCollection(product)) return 'PERFECT SKIN CLINICAL';
  if (isMagistralCollection(product)) return 'PERFECT SKIN - COLECCIÓN';
  return 'PERFECT SKIN';
}

function getWhatsAppBrand(product) {
  if (isClinicalCollection(product)) return 'Perfect Skin Clinical';
  if (isMagistralCollection(product)) return 'Perfect Skin Colección';
  return 'Perfect Skin';
}

function renderMagistralSections(product) {
  if (!product.sections || !product.sections.length) return '';

  return product.sections.map(section => {
    let body = '';
    if (section.text) {
      body += `<p>${section.text}</p>`;
    }
    if (section.paragraphs) {
      body += section.paragraphs.map(p => `<p>${p}</p>`).join('');
    }
    if (section.items) {
      body += `<ul class="product-beneficios">${section.items.map(item => `<li>✓ ${item}</li>`).join('')}</ul>`;
    }
    if (section.steps) {
      body += `<ol class="product-steps">${section.steps.map(step => `<li>${step}</li>`).join('')}</ol>`;
    }
    return `
      <div class="product-block">
        <p class="product-block-title"><strong>${section.title}</strong></p>
        ${body}
      </div>
    `;
  }).join('');
}

function renderProductCard(product) {
  const cardName = getCardName(product);
  const brandLine = getProductBrandLine(product);
  const clinicalSubline = isClinicalCollection(product)
    ? `<p class="shop-card-clinical">${CLINICAL_COLLECTION.subline}</p>`
    : '';
  return `
    <article class="shop-card" data-id="${product.id}" tabindex="0" role="button" aria-label="Ver detalles de ${cardName}">
      <div class="shop-card-image">
        <img src="${product.image}" alt="${product.title}">
        <span class="shop-card-hover">Ver detalles</span>
      </div>
      <div class="shop-card-info">
        <p class="shop-card-type">${brandLine}</p>
        <h3 class="shop-card-name">${cardName}</h3>
        <p class="shop-card-keywords">${product.subtitle}</p>
        ${clinicalSubline}
      </div>
    </article>
  `;
}

function renderCategoryIntro() {
  if (!categoryIntroEl) return;
  const intro = CATEGORY_INTRO[activeCategory];
  if (!intro) {
    categoryIntroEl.classList.add('hidden');
    categoryIntroEl.innerHTML = '';
    return;
  }
  categoryIntroEl.classList.remove('hidden');
  categoryIntroEl.innerHTML = `
    <p class="category-intro-headline">${intro.headline}</p>
    ${intro.subline ? `<p class="category-intro-subline">${intro.subline}</p>` : ''}
  `;
}

function renderProducts() {
  const products = PRODUCTS.filter(p => p.category === activeCategory);
  renderCategoryIntro();

  if (products.length === 0) {
    gridEl.innerHTML = '';
    gridEl.classList.add('hidden');
    emptyStateEl.classList.remove('hidden');
    emptyMessageEl.textContent = COMING_SOON[activeCategory] || 'Próximamente.';
    return;
  }

  gridEl.classList.remove('hidden');
  emptyStateEl.classList.add('hidden');
  gridEl.innerHTML = products.map(renderProductCard).join('');

  gridEl.querySelectorAll('.shop-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });
}

function getWhatsAppUrl(product) {
  const productName = getCardName(product);
  const brand = getWhatsAppBrand(product);
  const message = encodeURIComponent(
    `Hola, quiero comprar ${productName} de ${brand}.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function renderModalContent(product) {
  const beneficios = product.beneficios
    ? `<div class="product-block">
        <p class="product-block-title"><strong>BENEFICIOS:</strong></p>
        <ul class="product-beneficios">
          ${product.beneficios.map(b => `<li>✓ ${b}</li>`).join('')}
        </ul>
      </div>`
    : '';

  const subtitle2 = product.subtitle2
    ? `<p class="product-subtitle">${product.subtitle2}</p>`
    : '';

  const extra = product.extra
    ? `<p class="product-extra">${product.extra}</p>`
    : '';

  const clinicalBrand = isClinicalCollection(product)
    ? `<div class="product-clinical-brand">
        <p class="product-clinical-headline">${CLINICAL_COLLECTION.headline}</p>
        <p class="product-clinical-subline">${CLINICAL_COLLECTION.subline}</p>
      </div>`
    : '';

  const magistralBrand = isMagistralCollection(product)
    ? `<div class="product-clinical-brand">
        <p class="product-clinical-headline">${MAGISTRAL_COLLECTION.headline}</p>
      </div>`
    : '';

  const activos = product.activos
    ? `<p><strong>Activos:</strong> ${product.activos}</p>`
    : '';

  const caracteristicas = product.caracteristicas
    ? `<div class="product-block">
        <p class="product-block-title"><strong>Características principales:</strong></p>
        <ul class="product-beneficios">
          ${product.caracteristicas.map(c => `<li>✓ ${c}</li>`).join('')}
        </ul>
      </div>`
    : '';

  const notaEmpaque = product.notaEmpaque
    ? `<p class="product-nota"><strong>Nota del empaque:</strong> ${product.notaEmpaque}</p>`
    : '';

  const magistralSections = renderMagistralSections(product);

  const usoLabel = isMagistralCollection(product) ? 'Modo de uso' : 'USO';

  const clinical = product.composicion || product.mecanismo || product.indicacion || product.resultado
    ? `
        ${product.composicion ? `<p><strong>Composición clave:</strong> ${product.composicion}</p>` : ''}
        ${product.mecanismo ? `<p><strong>Mecanismo de acción:</strong> ${product.mecanismo}</p>` : ''}
        ${product.indicacion ? `<p><strong>Indicación clínica:</strong> ${product.indicacion}</p>` : ''}
        ${product.resultado ? `<p><strong>Resultado:</strong> ${product.resultado}</p>` : ''}
        ${product.presentacion ? `<p class="product-presentacion"><strong>Presentación:</strong> ${product.presentacion}</p>` : ''}
      `
    : '';

  return `
    <div class="modal-grid">
      <div class="modal-product">
        <div class="modal-image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <a
          href="${getWhatsAppUrl(product)}"
          class="btn btn-buy"
          target="_blank"
          rel="noopener noreferrer"
        >Comprar</a>
      </div>
      <div class="modal-info">
        ${clinicalBrand}
        ${magistralBrand}
        <h2 class="product-type" id="modal-title">${product.title}</h2>
        <p class="product-subtitle">${product.subtitle}</p>
        ${subtitle2}
        ${activos}
        ${caracteristicas}
        ${beneficios}
        ${notaEmpaque}
        ${product.uso ? `<p><strong>${usoLabel}:</strong> ${product.uso}</p>` : ''}
        ${product.importante ? `<p><strong>IMPORTANTE:</strong> ${product.importante}</p>` : ''}
        ${clinical}
        ${magistralSections}
        ${extra}
      </div>
    </div>
  `;
}

function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalBody.innerHTML = renderModalContent(product);
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav') && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

initTabs();
renderProducts();
