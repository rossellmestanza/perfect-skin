let activeCategory = 'serum';

const tabsEl = document.querySelector('.tabs');
const gridEl = document.getElementById('products-grid');
const emptyStateEl = document.getElementById('empty-state');
const emptyMessageEl = document.getElementById('empty-message');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

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
  const shortName = product.name.split('|')[0].trim();
  const keywords = product.keywords
    ? `<p class="shop-card-keywords">${product.keywords}</p>`
    : '';
  return `
    <article class="shop-card" data-id="${product.id}" tabindex="0" role="button" aria-label="Ver detalles de ${shortName}">
      <div class="shop-card-image">
        <img src="${product.image}" alt="${product.name}">
        <span class="shop-card-hover">Ver detalles</span>
      </div>
      <div class="shop-card-info">
        <p class="shop-card-type">${product.type}</p>
        <h3 class="shop-card-name">${shortName}</h3>
        ${keywords}
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
  const productName = product.name.split('|')[0].trim();
  const message = encodeURIComponent(
    `Hola, quiero comprar ${productName} de Perfect Skin.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function renderModalContent(product) {
  const keywords = product.keywords
    ? `<p class="product-keywords"><strong>${product.keywordsLabel}</strong> ${product.keywords}</p>`
    : '';

  const details = product.pending
    ? `<div class="modal-details modal-pending"><p>Descripción próximamente.</p></div>`
    : `<div class="modal-details">
          ${product.funcion ? `<p><strong>Función:</strong> ${product.funcion}</p>` : ''}
          ${product.modoUso ? `<p><strong>MODO DE USO:</strong> ${product.modoUso}</p>` : ''}
          ${product.activos ? `<p><strong>ACTIVOS INCI:</strong> ${product.activos}</p>` : ''}
          ${product.recomendaciones ? `<p><strong>RECOMENDACIONES:</strong> ${product.recomendaciones}</p>` : ''}
          ${product.precauciones ? `<p><strong>PRECAUCIONES:</strong> ${product.precauciones}</p>` : ''}
        </div>`;

  return `
    <div class="modal-grid">
      <div class="modal-product">
        <div class="modal-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <a
          href="${getWhatsAppUrl(product)}"
          class="btn btn-buy"
          target="_blank"
          rel="noopener noreferrer"
        >Comprar</a>
      </div>
      <div class="modal-info">
        <p class="product-line">${product.line}</p>
        <h2 class="product-type" id="modal-title">${product.type}</h2>
        <h3 class="product-name">${product.name}</h3>
        ${keywords}
        ${details}
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
