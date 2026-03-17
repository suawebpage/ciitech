// Load data and render components
//main.js
document.addEventListener('DOMContentLoaded', () => {
    initializeSite();
});

function initializeSite() {
    renderNavigation();
    renderHero();
    renderServices();
    renderPortfolio();
    renderTestimonials();
    renderCollaborators();
    renderFooter();
    initializeCarousel();
    initializeParallax();
    initializeMobileMenu();
    handleScrollEffects();
}

// Render Navigation
function renderNavigation() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    nav.innerHTML = `
        <div class="logo-container">
            <img src="${companyData.srcLogo}" alt="${companyData.name}" class="logo-image">
            <a href="index.html" class="logo">${companyData.name}</a>
        </div>
        <div class="menu-toggle">☰</div>
        <ul class="nav-menu">
            ${siteData.nav.links.map(link => `
                <li><a href="${link.url}" class="nav-link">${link.text}</a></li>
            `).join('')}
        </ul>
    `;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        const linkPage = href.split('#')[0].split('/').pop();
        const linkHash = href.includes('#') ? '#' + href.split('#')[1] : '';

        const pageMatch = linkPage === currentPage;
        const hashMatch = linkHash === currentHash;

        if (linkHash) {
            link.classList.toggle('active', pageMatch && hashMatch);
        } else {
            link.classList.toggle('active', pageMatch && currentHash === '');
        }
    });

    // ❌ REMOVIDO: initializeMobileMenu() daqui
}

// Render Hero Section
function renderHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    hero.innerHTML = `
        <video class="hero-video" autoplay muted loop playsinline>
            <source src="${siteData.hero.backgroundVideo}" type="video/mp4">
        </video>
        <div class="hero-content">
            <h1 class="hero-title">${siteData.hero.title}</h1>
            <p class="hero-subtitle">${siteData.hero.subtitle}</p>
            <a href="${siteData.hero.ctaLink}" class="hero-cta">${siteData.hero.ctaText}</a>
        </div>
    `;
}

// Render Services
function renderServices() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = siteData.services.map(service => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="${service.link}" class="category-link">Saiba mais</a>
        </div>
    `).join('');
}

// Render Portfolio/Carousel
function renderPortfolio() {
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselDots = document.querySelector('.carousel-dots');
    if (!carouselTrack || !carouselDots) return;

    carouselTrack.innerHTML = siteData.portfolio.map(item => `
        <div class="carousel-slide">
            <img src="${item.image}" alt="${item.title}">
            <div class="carousel-caption">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');

    carouselDots.innerHTML = siteData.portfolio.map((_, index) => `
        <div class="dot" data-index="${index}"></div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = siteData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <p class="testimonial-content">"${testimonial.content}"</p>
            <div class="testimonial-author">${testimonial.author}</div>
            <div class="testimonial-role">${testimonial.role}</div>
        </div>
    `).join('');
}

// Render Collaborators
function renderCollaborators() {
    const collaboratorsGrid = document.querySelector('.collaborators-grid');
    if (!collaboratorsGrid) return;

    collaboratorsGrid.innerHTML = siteData.collaborators.map(collab => `
        <div class="collaborator-card">
            <a href="${collab.portfolio}" target="_blank">
                <img src="${collab.photo}" alt="${collab.name}" class="collaborator-image">
            </a>
            <h3 class="collaborator-name">${collab.name}</h3>
            <p class="collaborator-role">${collab.role}</p>
        </div>
    `).join('');
}

// Render Categories (for Vendas Page)
function renderCategories() {
    const productsGrid = document.querySelector('.products-grid');
    const servicesGrid = document.querySelector('.services-grid');

    if (productsGrid) {
        productsGrid.innerHTML = siteData.categories.products.map(category => `
            <div class="category-card">
                <img src="${category.image}" alt="${category.title}" class="category-image">
                <div class="category-content">
                    <h3 class="category-title">${category.title}</h3>
                    <p class="category-description">${category.description}</p>
                    <a href="${generateCategoryLink(category)}" class="category-link" target="_blank">
                        Ver na Loja
                    </a>
                </div>
            </div>
        `).join('');
    }

    if (servicesGrid) {
        servicesGrid.innerHTML = siteData.categories.services.map(category => `
            <div class="category-card">
                <img src="${category.image}" alt="${category.title}" class="category-image">
                <div class="category-content">
                    <h3 class="category-title">${category.title}</h3>
                    <p class="category-description">${category.description}</p>
                    <a href="${generateCategoryLink(category)}" class="category-link" target="_blank">
                        Solicitar Orçamento
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Render Footer
function renderFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${companyData.name}</h3>
                    <p>${companyData.description}</p>
                    <p>📞 ${formatNumberContact(companyData.phone)}</p>
                    <p>✉️ ${companyData.email}</p>
                    <p>📍 ${companyData.address}</p>
                </div>
                <div class="footer-section">
                    <h3>Redes Sociais</h3>
                    <div class="social-links">
                        ${siteData.socialMedia.map(social => `
                            <a href="${social.url}" class="social-link" target="_blank" title="${social.name}">
                                <img src="${social.icon}" alt="${social.name}">
                            </a>
                        `).join('')}
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Parceiros</h3>
                    <div class="partners-list">
                        ${siteData.partners.map(partner => `
                            <span class="partner-item">${partner}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>${siteData.footer.rights} | ${siteData.footer.developed}</p>
            </div>
        </div>
    `;
}

// ─── Carousel ────────────────────────────────────────────────────────────────
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (!track || !slides.length) return;

    let currentIndex = 0;
    const slideCount = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    setInterval(nextSlide, 3000);
}

// ─── Parallax ────────────────────────────────────────────────────────────────
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.parallax-section');
        if (!parallax) return;
        parallax.style.backgroundPositionY = window.pageYOffset * 0.5 + 'px';
    });
}

// ─── Mobile Menu ─────────────────────────────────────────────────────────────
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });
}

// ─── Scroll Effects ───────────────────────────────────────────────────────────
function handleScrollEffects() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Gera o link correto para cada tipo de categoria.
 * - whatsapp: monta wa.me com número de companyData + mensagem pré-preenchida
 * - external: retorna o link direto
 */
function generateCategoryLink(category) {
    switch (category.type) {
        case "whatsapp":
            return formatWhatsappNumberLink(companyData.phone, category.mensage || "");
        case "external":
            return category.link;
        default:
            return "#";
    }
}

/**
 * Monta link wa.me com número limpo e mensagem encodada.
 */
function formatWhatsappNumberLink(phone, mensage) {
    const cleaned = phone.replace(/\D/g, '');
    const text = encodeURIComponent(mensage);
    return `https://wa.me/${cleaned}?text=${text}`;
}

/**
 * Formata número de telefone para exibição.
 * Ex: 5587996640299 → +55 87996-40299
 */
function formatNumberContact(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    if (cleaned.startsWith('55') && cleaned.length >= 12) {
        const ddd = cleaned.substring(2, 4);
        const rest = cleaned.substring(4);
        const part1 = rest.slice(0, rest.length - 4);
        const part2 = rest.slice(-4);
        return `+55 (${ddd}) ${part1}-${part2}`;
    }
    return phone;
}