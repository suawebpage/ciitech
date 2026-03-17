// ─── Company Data ───────────────────────────────────────────────────────────
//old data
const companyData = {
    name: "CII TECH",
    description: "Soluções completas em comunicação visual e design",
    srcLogo: "images/logo.jpg",
    phone: "558796640299",
    email: "contato@visiongraphics.com.br",
    address: "Av. Principal, 1000 - São Paulo, SP",
    cnpj: "12.345.678/0001-99"

};

// ─── Site Data ───────────────────────────────────────────────────────────────
const siteData = {

    // Navigation
    nav: {
        logo: "Vision Graphics",
        links: [
            { text: "Início",     url: "index.html",  active: true  },
            { text: "Serviços",   url: "index.html#servicos",   active: false },
            { text: "Portfólio",  url: "index.html#portfolio",  active: false },
            { text: "Vendas",     url: "vendas.html", active: false },
            { text: "Contato",    url: "index.html#contato",    active: false }
        ]
    },

    // Hero Section
    hero: {
        title: "Transformando Ideias em Realidade Visual",
        subtitle: "Gráfica • Comunicação Visual • Design • Manufatura",
        ctaText: "Conheça Nossos Serviços",
        ctaLink: "#servicos",
        backgroundVideo: "videos/background.mp4"
    },

    // Services
    services: [
        {
            icon: "🖨️",
            title: "Serviços Gráficos",
            description: "Impressões de alta qualidade para todos os tipos de materiais gráficos",
            link: "vendas.html?category=grafica"
        },
        {
            icon: "🎨",
            title: "Comunicação Visual",
            description: "Identidade visual, branding, sinalização e muito mais",
            link: "vendas.html?category=comunicacao"
        },
        {
            icon: "💻",
            title: "Desenvolvimento de Sites",
            description: "Sites responsivos e modernos para sua empresa",
            link: "vendas.html?category=web"
        },
        {
            icon: "🖨️",
            title: "Impressão 3D",
            description: "Prototipagem e peças personalizadas em impressão 3D",
            link: "vendas.html?category=3d"
        },
        {
            icon: "✏️",
            title: "Design Gráfico",
            description: "Criação de artes, logos e materiais promocionais",
            link: "vendas.html?category=design"
        },
        {
            icon: "🏭",
            title: "Manufatura",
            description: "Produção de peças e produtos personalizados",
            link: "vendas.html?category=manufatura"
        }
    ],

    // Portfolio
    portfolio: [
        {
            image: "images/portifolio/portifolio1.jpg",
            title: "Identidade Visual - Empresa X",
            description: "Criação completa de branding"
        },
        {
            image: "images/portifolio/portifolio2.jpg",
            title: "Site Institucional",
            description: "Desenvolvimento de site responsivo"
        },
        {
            image: "images/portifolio/portifolio3.jpg",
            title: "Material Gráfico",
            description: "Folders e catálogos"
        },
        {
            image: "images/portifolio/portifolio4.jpg",
            title: "Sinalização",
            description: "Projeto de sinalização empresarial"
        },

    ],

    // Testimonials
    testimonials: [
        {
            content: "Excelente trabalho! A equipe entregou além do esperado. Muito profissionais e atenciosos.",
            author: "João Silva",
            role: "CEO, Empresa X"
        },
        {
            content: "Comunicação visual impecável. Super recomendo os serviços!",
            author: "Maria Santos",
            role: "Marketing, Empresa Y"
        },
        {
            content: "Desenvolvimento do site ficou perfeito. Design moderno e funcional.",
            author: "Pedro Oliveira",
            role: "Empresário"
        }
    ],

    // Collaborators
    collaborators: [
        {
            name: "Carlos Henrique",
            role: "Designer Gráfico",
            photo: "images/colaboradores/carlos.jpg",
            portfolio: "https://instagram.com/carlos_dantas.ofc"
        },
        {
            name: "Emanoel Ferreira",
            role: "Desenvolvedor Web",
            photo: "images/colaboradores/emanoel.jpg",
            portfolio: "https://instagram.com/emanuel.ferreira"
        }
    ],

    // Categories for Vendas Page
    categories: {
        products: [
            {
                id: 1,
                title: "Produtos Gráficos",
                description: "Cartões de visita, folders, banners e muito mais",
                category: "grafica",
                image: "images/produtos/adesivos.png",
                link: "https://shopee.com.br/yourstore",
                type: "external"
            },
            {
                id: 2,
                title: "Comunicação Visual",
                description: "Adesivos, placas, fachadas e sinalização",
                category: "comunicacao",
                image: "images/produtos/comunicação-visual-chaveiro.png",
                link: "https://shopee.com.br/yourstore",
                type: "external"
            },
            {
                id: 3,
                title: "Impressão 3D",
                description: "Peças personalizadas e protótipos",
                category: "3d",
                image: "images/produtos/3d-cerebro.png",
                link: "https://shopee.com.br/yourstore",
                type: "external"
            }
        ],
        services: [
            {
                id: 1,
                title: "Design Gráfico",
                description: "Criação de logos, artes e identidade visual",
                category: "design",
                image: "images/servicos/logo.png",
                link: `https://wa.me/${companyData.phone}`,
                mensage: "Olá, gostaria de solicitar um orçamento para Design Gráfico.",
                type: "whatsapp"
            },
            {
                id: 2,
                title: "Desenvolvimento Web",
                description: "Sites institucionais e lojas virtuais",
                category: "web",
                image: "images/servicos/site.png",
                link: `https://wa.me/${companyData.phone}`,
                mensage: "Olá, gostaria de solicitar um orçamento para Desenvolvimento Web.",
                type: "whatsapp"
            },
            
        ]
    },

    // Partners
    partners: [
        "Sua Web Page",
        "Outros"
    ],

    // Social Media
    socialMedia: [
        /*{ name: "Facebook",  icon: "images/icons/facebook.svg", url: "https://facebook.com/visiongraphics"            },
        { name: "LinkedIn",  icon: "images/icons/linkedin.svg", url: "https://linkedin.com/company/visiongraphics"    },
        { name: "YouTube",   icon: "images/icons/youtube.svg", url: "https://youtube.com/visiongraphics"             },*/
        { name: "WhatsApp",  icon: "images/icons/whatsapp.svg", url: `https://wa.me/${companyData.phone}`             },
        { name: "Instagram", icon: "images/icons/instagram.svg", url: "https://instagram.com/visiongraphics"           },
    ],

    // Footer
    footer: {
        rights: `© ${new Date().getFullYear()} ${companyData.name}. Todos os direitos reservados.`,
        developed: `Desenvolvido por SuaWebPage.com`
    }
};