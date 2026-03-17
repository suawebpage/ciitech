// ─────────────────────────────────────────────────────────────────────────────
//  vendas.js  –  Catálogo de produtos e serviços
// ─────────────────────────────────────────────────────────────────────────────

// ─── Mapa: valor de ?category= → { section, key }
// section: 'products' | 'services' | 'both'
// key    : chave dentro de grafica{} ou services.category{}
const CATEGORY_MAP = {
    grafica:       { section: 'products', key: null       },  // mostra toda a gráfica
    adesivos:      { section: 'products', key: 'adesivos' },
    banners:       { section: 'products', key: 'banners'  },
    '3d':          { section: 'products', key: 'impressao3d' },
    bolos:         { section: 'products', key: 'topersBolos' },
    comunicacao:   { section: 'services', key: 'comunicacaoVisual'  },
    web:           { section: 'services', key: 'desenvolvimentoWeb' },
    design:        { section: 'services', key: 'designGrafico'      },
    manufatura:    { section: 'services', key: null       },  // mostra todos os serviços
};

// ─── Lê ?category= da URL ─────────────────────────────────────────────────────
function getActiveFilter() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    return cat ? cat.toLowerCase() : null;
}

document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    renderFooter();

    const filter = getActiveFilter();

    if (filter && CATEGORY_MAP[filter]) {
        applyFilter(filter);
    } else {
        renderProductsCatalog();
        renderServicesCatalog();
    }

    initModal();
    initializeMobileMenu();
    handleScrollEffects();
});

// ─── Formatação de preço ──────────────────────────────────────────────────────
function formatPrice(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ─── Aplica filtro de categoria ───────────────────────────────────────────────
function applyFilter(filter) {
    const rule    = CATEGORY_MAP[filter];
    const prodCat = document.getElementById('products-catalog');
    const svcCat  = document.getElementById('services-catalog');
    const secProd = document.getElementById('section-produtos');
    const secSvc  = document.getElementById('section-servicos');

    const productLabels = {
        adesivos:    '🎨 Adesivos',
        banners:     '📢 Banners',
        impressao3d: '🖨️ Impressão 3D',
        topersBolos: '🎂 Topers de Bolo',
    };
    const serviceLabels = {
        comunicacaoVisual:  '🖼️ Comunicação Visual',
        desenvolvimentoWeb: '💻 Desenvolvimento Web',
        designGrafico:      '✏️ Design Gráfico',
    };

    // Oculta a seção que não pertence ao filtro
    if (rule.section === 'products') {
        secSvc?.style.setProperty('display', 'none');
    } else if (rule.section === 'services') {
        secProd?.style.setProperty('display', 'none');
    }

    // Renderiza apenas o que é relevante
    if (rule.section === 'products' || rule.section === 'both') {
        const grafica = siteData?.products?.category?.grafica ?? {};
        let html = '';
        if (rule.key) {
            html = buildCategoryRow(productLabels[rule.key] ?? rule.key, grafica[rule.key]);
        } else {
            for (const [k, items] of Object.entries(grafica)) {
                if (!Array.isArray(items) || !items.length) continue;
                html += buildCategoryRow(productLabels[k] ?? k, items);
            }
        }
        prodCat.innerHTML = html || '<p class="empty-msg">Nenhum produto encontrado.</p>';
        bindCategoryArrows(prodCat);
        bindCardClicks(prodCat, false);
    }

    if (rule.section === 'services' || rule.section === 'both') {
        const cats = siteData?.servicesCatalog?.category ?? {};
        let html = '';
        if (rule.key) {
            html = buildCategoryRow(serviceLabels[rule.key] ?? rule.key, cats[rule.key]);
        } else {
            for (const [k, items] of Object.entries(cats)) {
                if (!Array.isArray(items) || !items.length) continue;
                html += buildCategoryRow(serviceLabels[k] ?? k, items);
            }
        }
        svcCat.innerHTML = html || '<p class="empty-msg">Nenhum serviço encontrado.</p>';
        bindCategoryArrows(svcCat);
        bindCardClicks(svcCat, true);
    }

    injectFilterBanner(filter);
}

// ─── Banner "filtrando por X — Ver tudo" ─────────────────────────────────────
function injectFilterBanner(filter) {
    const main = document.querySelector('.vendas-main');
    if (!main) return;

    const readable = {
        grafica:     'Gráfica',
        adesivos:    'Adesivos',
        banners:     'Banners',
        '3d':        'Impressão 3D',
        bolos:       'Topers de Bolo',
        comunicacao: 'Comunicação Visual',
        web:         'Desenvolvimento Web',
        design:      'Design Gráfico',
        manufatura:  'Serviços',
    };

    const banner = document.createElement('div');
    banner.className = 'filter-banner';
    banner.innerHTML = `
        <div class="container filter-banner-inner">
            <span class="filter-banner-text">
                <span class="filter-banner-icon">🔍</span>
                Exibindo resultados para: <strong>${readable[filter] ?? filter}</strong>
            </span>
            <a href="vendas.html" class="filter-banner-clear">Ver tudo &nbsp;✕</a>
        </div>
    `;

    const hero = main.querySelector('.vendas-hero');
    if (hero) hero.insertAdjacentElement('afterend', banner);
    else main.prepend(banner);
}

// ─── Monta o HTML de uma "row" de categoria ───────────────────────────────────
// categoryLabel : string exibida como título da categoria
// items         : array de produtos/serviços
// isService     : bool – muda o texto do CTA dentro do modal
function buildCategoryRow(categoryLabel, items) {
    if (!items || items.length === 0) return '';

    const cardsHTML = items.map(item => `
        <div class="prod-card" data-id="${item.id}" tabindex="0" role="button"
             aria-label="Abrir detalhes: ${item.title}">
            <div class="prod-card-img-wrap">
                <img
                    src="${item.images?.[0] ?? 'https://placehold.co/400x300?text=Sem+Imagem'}"
                    alt="${item.title}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/400x300?text=Imagem+indispon%C3%ADvel'"
                >
                ${item.images?.length > 1
                    ? `<span class="prod-card-img-count">+${item.images.length - 1} fotos</span>`
                    : ''}
            </div>
            <div class="prod-card-body">
                <h4 class="prod-card-title">${item.title}</h4>
                ${item.price != null
                    ? `<span class="prod-card-price">${formatPrice(item.price)}</span>`
                    : `<span class="prod-card-price">Sob consulta</span>`}
            </div>
        </div>
    `).join('');

    return `
        <div class="category-row">
            <h3 class="category-row-label">${categoryLabel}</h3>
            <div class="category-scroll-wrap">
                <button class="cat-arrow left" aria-label="Rolar esquerda">&#10094;</button>
                <div class="category-track">
                    ${cardsHTML}
                </div>
                <button class="cat-arrow right" aria-label="Rolar direita">&#10095;</button>
            </div>
        </div>
    `;
}

// ─── Render: Produtos ─────────────────────────────────────────────────────────
function renderProductsCatalog() {
    const container = document.getElementById('products-catalog');
    if (!container) return;

    const grafica = siteData?.products?.category?.grafica;
    if (!grafica) {
        container.innerHTML = '<p class="empty-msg">Nenhum produto cadastrado.</p>';
        return;
    }

    // Label amigável para cada subcategoria
    const labels = {
        adesivos:    '🎨 Adesivos',
        banners:     '📢 Banners',
        impressao3d: '🖨️ Impressão 3D',
        topersBolos: '🎂 Topers de Bolo',
    };

    let html = '';
    for (const [key, items] of Object.entries(grafica)) {
        if (!Array.isArray(items) || items.length === 0) continue;
        html += buildCategoryRow(labels[key] ?? key, items);
    }

    container.innerHTML = html || '<p class="empty-msg">Nenhum produto cadastrado.</p>';

    bindCategoryArrows(container);
    bindCardClicks(container, false);
}

// ─── Render: Serviços ─────────────────────────────────────────────────────────
function renderServicesCatalog() {
    const container = document.getElementById('services-catalog');
    if (!container) return;

    // ⚠️  Lê servicesCatalog (não services, que é o array do index)
    const categories = siteData?.servicesCatalog?.category;
    if (!categories) {
        container.innerHTML = '<p class="empty-msg">Nenhum serviço cadastrado.</p>';
        return;
    }

    const labels = {
        comunicacaoVisual:  '🖼️ Comunicação Visual',
        desenvolvimentoWeb: '💻 Desenvolvimento Web',
        designGrafico:      '✏️ Design Gráfico',
    };

    let html = '';
    for (const [key, items] of Object.entries(categories)) {
        if (!Array.isArray(items) || items.length === 0) continue;
        html += buildCategoryRow(labels[key] ?? key, items);
    }

    container.innerHTML = html || '<p class="empty-msg">Nenhum serviço cadastrado.</p>';

    bindCategoryArrows(container);
    bindCardClicks(container, true);
}

// ─── Scroll lateral das categorias ───────────────────────────────────────────
function bindCategoryArrows(container) {
    container.querySelectorAll('.category-row').forEach(row => {
        const track = row.querySelector('.category-track');
        const leftBtn  = row.querySelector('.cat-arrow.left');
        const rightBtn = row.querySelector('.cat-arrow.right');
        const SCROLL = 300;

        if (leftBtn)  leftBtn.addEventListener('click',  () => track.scrollBy({ left: -SCROLL, behavior: 'smooth' }));
        if (rightBtn) rightBtn.addEventListener('click', () => track.scrollBy({ left:  SCROLL, behavior: 'smooth' }));

        // Atualiza visibilidade das setas conforme scroll
        function updateArrows() {
            if (!leftBtn || !rightBtn) return;
            leftBtn.style.opacity  = track.scrollLeft > 0 ? '1' : '0.25';
            rightBtn.style.opacity = track.scrollLeft + track.clientWidth < track.scrollWidth - 2 ? '1' : '0.25';
        }
        track.addEventListener('scroll', updateArrows, { passive: true });
        // Chama uma vez para estado inicial
        requestAnimationFrame(updateArrows);
    });
}

// ─── Clique nos cards ──────────────────────────────────────────────────────────
function bindCardClicks(container, isService) {
    container.querySelectorAll('.prod-card').forEach(card => {
        const open = () => {
            // Encontra o item pelo título (compatível com ids não-únicos entre produtos/serviços)
            const titleEl = card.querySelector('.prod-card-title');
            const itemTitle = titleEl?.textContent;

            const item = findItemByTitle(itemTitle, isService);
            if (item) openModal(item, isService);
        };

        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
    });
}

// Busca item pelo título nas estruturas de dados
function findItemByTitle(title, isService) {
    if (isService) {
        const cats = siteData?.servicesCatalog?.category ?? {};
        for (const items of Object.values(cats)) {
            const found = items.find(i => i.title === title);
            if (found) return found;
        }
    } else {
        const grafica = siteData?.products?.category?.grafica ?? {};
        for (const items of Object.values(grafica)) {
            if (!Array.isArray(items)) continue;
            const found = items.find(i => i.title === title);
            if (found) return found;
        }
    }
    return null;
}

// ─── Modal ─────────────────────────────────────────────────────────────────────
let _modalImages  = [];
let _modalIdx     = 0;
let _modalIsOpen  = false;

function initModal() {
    const modal    = document.getElementById('productModal');
    const backdrop = modal?.querySelector('.modal-backdrop');
    const closeBtn = document.getElementById('modalClose');
    const prevBtn  = modal?.querySelector('.modal-img-btn.prev');
    const nextBtn  = modal?.querySelector('.modal-img-btn.next');

    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    prevBtn?.addEventListener('click', () => stepModalImg(-1));
    nextBtn?.addEventListener('click', () => stepModalImg( 1));

    document.addEventListener('keydown', e => {
        if (!_modalIsOpen) return;
        if (e.key === 'Escape')     closeModal();
        if (e.key === 'ArrowLeft')  stepModalImg(-1);
        if (e.key === 'ArrowRight') stepModalImg( 1);
    });
}

function openModal(item, isService) {
    const modal     = document.getElementById('productModal');
    const track     = document.getElementById('modalImgTrack');
    const dots      = document.getElementById('modalImgDots');
    const titleEl   = document.getElementById('modalTitle');
    const descEl    = document.getElementById('modalDesc');
    const priceEl   = document.getElementById('modalPrice');
    const linkEl    = document.getElementById('modalLink');

    _modalImages = (item.images?.length ? item.images : ['https://placehold.co/700x400?text=Sem+Imagem']);
    _modalIdx    = 0;

    // Monta slides
    track.innerHTML = _modalImages.map((src, i) => `
        <div class="modal-slide ${i === 0 ? 'active' : ''}">
            <img src="${src}"
                 alt="Imagem ${i + 1}"
                 onerror="this.src='https://placehold.co/700x400?text=Imagem+indispon%C3%ADvel'">
        </div>
    `).join('');

    // Monta dots
    dots.innerHTML = _modalImages.map((_, i) => `
        <button class="modal-dot ${i === 0 ? 'active' : ''}" data-idx="${i}" aria-label="Imagem ${i + 1}"></button>
    `).join('');
    dots.querySelectorAll('.modal-dot').forEach(dot => {
        dot.addEventListener('click', () => goModalImg(+dot.dataset.idx));
    });

    // Esconde setas se só 1 imagem
    const showArrows = _modalImages.length > 1;
    modal.querySelectorAll('.modal-img-btn').forEach(b => b.style.display = showArrows ? '' : 'none');
    dots.style.display = showArrows ? '' : 'none';

    // Info
    titleEl.textContent = item.title;
    descEl.textContent  = item.description;
    priceEl.textContent = item.price != null ? formatPrice(item.price) : 'Sob consulta';

    if (isService && item.redirectLink) {
        linkEl.href        = item.redirectLink;
        linkEl.textContent = 'Solicitar Orçamento →';
    } else if (item.redirectLink) {
        linkEl.href        = item.redirectLink;
        linkEl.textContent = 'Ver / Comprar →';
    } else {
        linkEl.style.display = 'none';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    _modalIsOpen = true;
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    _modalIsOpen = false;
    document.getElementById('modalLink').style.display = '';
}

function stepModalImg(dir) {
    const next = (_modalIdx + dir + _modalImages.length) % _modalImages.length;
    goModalImg(next);
}

function goModalImg(idx) {
    const track = document.getElementById('modalImgTrack');
    const dots  = document.getElementById('modalImgDots');

    track.querySelectorAll('.modal-slide').forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.querySelectorAll('.modal-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    _modalIdx = idx;
}