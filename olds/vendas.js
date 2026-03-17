// ─── Helper: normaliza imagens (aceita image string ou images array) ──────────
function getImages(category) {
    if (Array.isArray(category.images) && category.images.length) return category.images;
    if (category.image) return [category.image];
    return ['images/placeholder.png'];
}

// ─── Helper: lê ?category= da URL ────────────────────────────────────────────
function getCategoryFilter() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || null;
}

// ─── Render Categories ────────────────────────────────────────────────────────
function renderCategories() {
    const productsGrid = document.querySelector('.products-grid');
    const servicesGrid = document.querySelector('.services-grid');
    const filter = getCategoryFilter();

    // filtra se tiver ?category= na URL, senão mostra tudo
    const filterList = (list) => filter
        ? list.filter(item => item.category === filter)
        : list;

    const buildCard = (category, type) => `
        <div class="category-card">
            <img src="${getImages(category)[0]}" alt="${category.title}" class="category-image">
            <div class="category-content">
                <h3 class="category-title">${category.title}</h3>
                <p class="category-description">${category.description}</p>
                <button class="category-link" onclick="openProductItem(${category.id}, '${type}')">
                    Ver detalhes
                </button>
            </div>
        </div>
    `;

    const filteredProducts = filterList(siteData.categories.products);
    const filteredServices = filterList(siteData.categories.services);

    if (productsGrid) {
        productsGrid.innerHTML = filteredProducts.map(c => buildCard(c, 'product')).join('');

        // esconde a seção inteira se não houver produtos na categoria
        const section = productsGrid.closest('section') || productsGrid.parentElement.parentElement;
        const header = productsGrid.previousElementSibling;
        if (filteredProducts.length === 0) {
            productsGrid.style.display = 'none';
            if (header) header.style.display = 'none';
        }
    }

    if (servicesGrid) {
        servicesGrid.innerHTML = filteredServices.map(c => buildCard(c, 'service')).join('');

        const header = servicesGrid.previousElementSibling;
        if (filteredServices.length === 0) {
            servicesGrid.style.display = 'none';
            if (header) header.style.display = 'none';
        }
    }

    // atualiza título da página se filtrou
    if (filter) {
        const pageTitle = document.querySelector('.products-header p');
        if (pageTitle) pageTitle.textContent = `Mostrando resultados para: ${filter}`;
    }
}

// ─── Open Product Item Container ──────────────────────────────────────────────
function openProductItem(id, type) {
    const list = type === 'product'
        ? siteData.categories.products
        : siteData.categories.services;

    const item = list.find(i => i.id === id);
    if (!item) return;

    const images = getImages(item);
    const container = document.getElementById('product-item-container');

    container.innerHTML = `
        <label for="toggle" class="product-item-close">✕</label>

        <div class="product-item-carousel">
            <div class="product-item-track">
                ${images.map((img, i) => `
                    <div class="product-item-slide">
                        <img src="${img}" alt="${item.title} - imagem ${i + 1}">
                    </div>
                `).join('')}
            </div>
            ${images.length > 1 ? `
                <button class="product-item-btn prev" onclick="slideItem(-1)">&#8592;</button>
                <button class="product-item-btn next" onclick="slideItem(1)">&#8594;</button>
                <div class="product-item-dots">
                    ${images.map((_, i) => `
                        <span class="product-item-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <div class="product-item-info">
            <h2 class="product-item-title">${item.title}</h2>
            <p class="product-item-description">${item.details || item.description}</p>
            ${item.price ? `<p class="product-item-price">${item.price}</p>` : ''}
            <a href="${generateCategoryLink(item)}" class="product-item-cta" target="_blank">
                ${type === 'product' ? '🛒 Ver na Loja' : '💬 Solicitar Orçamento'}
            </a>
        </div>
    `;

    document.getElementById('toggle').checked = true;
    currentSlide = 0;
    updateSlide();
}

// ─── Carrossel interno ────────────────────────────────────────────────────────
let currentSlide = 0;

function updateSlide() {
    const track = document.querySelector('.product-item-track');
    const dots = document.querySelectorAll('.product-item-dot');
    if (!track) return;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function slideItem(direction) {
    const slides = document.querySelectorAll('.product-item-slide');
    if (!slides.length) return;
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    renderCategories();
    renderFooter();
    initializeMobileMenu();
    handleScrollEffects();
});