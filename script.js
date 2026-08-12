let activeCategory = 'serum';

const tabsEl = document.querySelector('.tabs');
const gridEl = document.getElementById('products-grid');
const emptyStateEl = document.getElementById('empty-state');
const emptyMessageEl = document.getElementById('empty-message');
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

function renderProductCard(product) {
  const cardName = getCardName(product);
  return `
    <article class="shop-card" data-id="${product.id}" tabindex="0" role="button" aria-label="Ver detalles de ${cardName}">
      <div class="shop-card-image">
        <img src="${product.image}" alt="${product.title}">
        <span class="shop-card-hover">Ver detalles</span>
      </div>
      <div class="shop-card-info">
        <p class="shop-card-type">PERFECT SKIN</p>
        <h3 class="shop-card-name">${cardName}</h3>
        <p class="shop-card-keywords">${product.subtitle}</p>
      </div>
    </article>
  `;
}

function renderProducts() {
  const products = PRODUCTS.filter(p => p.category === activeCategory);

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
  const message = encodeURIComponent(
    `Hola, quiero comprar ${productName} de Perfect Skin.`
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
        <h2 class="product-type" id="modal-title">${product.title}</h2>
        <p class="product-subtitle">${product.subtitle}</p>
        ${subtitle2}
        ${beneficios}
        ${product.uso ? `<p><strong>USO:</strong> ${product.uso}</p>` : ''}
        ${product.importante ? `<p><strong>IMPORTANTE:</strong> ${product.importante}</p>` : ''}
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
