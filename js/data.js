// new data.js final version

// ─── Company Data ────────────────────────────────────────────────────────────
const companyData = {
    name: "CII TECH",
    description: "Soluções completas em comunicação visual e design",
    srcLogo: "images/logo.jpg",
    phone: "558796640299",
    email: "contato@ciitech.com.br",
    address: "R. Vicente Ferreira Xavier - Mirandiba, PE, 56980-000",
    cnpj: "12.345.678/0001-99"
};

// ─── Site Data ────────────────────────────────────────────────────────────────
const siteData = {

    // ── Navegação ──────────────────────────────────────────────────────────────
    nav: {
        logo: "Vision Graphics",
        links: [
            { text: "Início",    url: "index.html",           active: true  },
            { text: "Serviços",  url: "index.html#servicos",  active: false },
            { text: "Portfólio", url: "index.html#portfolio", active: false },
            { text: "Vendas",    url: "vendas.html",          active: false },
            { text: "Contato",   url: "index.html#contato",   active: false }
        ]
    },

    // ── Hero ───────────────────────────────────────────────────────────────────
    hero: {
        title: "Transformando Ideias em Realidade Visual",
        subtitle: "Gráfica • Comunicação Visual • Design • Manufatura",
        ctaText: "Conheça Nossos Serviços",
        ctaLink: "#servicos",
        backgroundVideo: "videos/background.mp4"
    },

    // ── Cards de serviços do index (ARRAY — usado pelo renderServices()) ───────
    // ⚠️  NÃO renomeie esta chave; main.js depende de siteData.services como array
    services: [
        {
            icon: "🖨️",
            title: "Impressão & Personalizados",
            description: "Impressões e produtos personalizados sob medida",
            link: "vendas.html?category=personalizados"
        },
        {
            icon: "🧱",
            title: "Impressão 3D",
            description: "Prototipagem e peças personalizadas em impressão 3D",
            link: "vendas.html?category=3d"
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
        }
    ],

    // ── Portfólio ──────────────────────────────────────────────────────────────
    portfolio: [
        { image: "images/portifolio/portifolio1.jpg", title: "Identidade Visual - Empresa X", description: "Criação completa de branding"         },
        { image: "images/portifolio/portifolio2.jpg", title: "Site Institucional",             description: "Desenvolvimento de site responsivo"   },
        { image: "images/portifolio/portifolio3.jpg", title: "Material Gráfico",               description: "Folders e catálogos"                  },
        { image: "images/portifolio/portifolio4.jpg", title: "Sinalização",                    description: "Projeto de sinalização empresarial"    }
    ],

    // ── Depoimentos ────────────────────────────────────────────────────────────
    testimonials: [
        { content: "Excelente trabalho! A equipe entregou além do esperado. Muito profissionais e atenciosos.", author: "João Silva",    role: "CEO, Empresa X"        },
        { content: "Comunicação visual impecável. Super recomendo os serviços!",                                author: "Maria Santos",  role: "Marketing, Empresa Y"  },
        { content: "Desenvolvimento do site ficou perfeito. Design moderno e funcional.",                       author: "Pedro Oliveira", role: "Empresário"            }
    ],

    // ── Colaboradores ──────────────────────────────────────────────────────────
    collaborators: [
         { name: "Carlos Henrique", role: "Designer Gráfico", photoPerfil: "images/colaboradores/carlos.jpg", images: [''], redesSociais: { instagram: "https://www.instagram.com/carlos_dantas.ofc/", whatsApp: `https://wa.me/5511999999999` }, portfolio: "portifolio-carlos.html" },
        { name: "Emanoel Ferreira", role: "Desenvolvedor Web", photoPerfil: "images/colaboradores/emanoel.jpeg", images: [''], redesSociais: { instagram: "https://instagram.com/emanoelfls", whatsApp: `https://wa.me/5511999999999` }, portfolio: "portifolio-emanoel.html" },        
    ],

    // ── Parceiros ──────────────────────────────────────────────────────────────
    partners: ["<a href='https://suawebpage.com.br' target='_blank' class='partner-link'>Sua Web Page</a>", "Outros"],

    // ── Redes sociais ──────────────────────────────────────────────────────────
    socialMedia: [
        { name: "WhatsApp",  icon: "images/icons/whatsapp.svg",  url: `https://wa.me/${companyData.phone}`        },
        { name: "Instagram", icon: "images/icons/instagram.svg", url: "https://instagram.com/cii.tech"      }
    ],

    // ── Rodapé ─────────────────────────────────────────────────────────────────
    footer: {
        rights:    `© ${new Date().getFullYear()} ${companyData.name}. Todos os direitos reservados.`,
        developed: `Desenvolvido por <a href="https://suawebpage.com.br" target="_blank" class="footer-link" rel="noopener"> Sua Web Page </a>`
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  CATÁLOGO DE VENDAS
    //  Usado exclusivamente por vendas.js — chaves separadas para não colidir
    //  com siteData.services (array) acima.
    // ══════════════════════════════════════════════════════════════════════════

    // ── Produtos (gráfica) ─────────────────────────────────────────────────────
    products: {
        category: {
            grafica: {
                adesivos: [
                    {
                        id: 1,
                        title: "Adesivo Homem Aranha",
                        description: "Adesivo de alta qualidade com tema do Homem Aranha, ideal para decoração e personalização de objetos.",
                        price: 50.00,
                        images: [
                            "https://placehold.co/600x400?text=Adesivo+Homem+Aranha",
                            "https://placehold.co/600x400?text=Adesivo+Homem+Aranha+2"
                        ],
                        redirectLink: "https://shopee.com.br/adesivo-homem-aranha"
                    },
                    {
                        id: 2,
                        title: "Adesivo Mulher Maravilha",
                        description: "Adesivo de alta qualidade com tema da Mulher Maravilha, perfeito para decoração e personalização de objetos.",
                        price: 50.00,
                        images: [
                            "https://placehold.co/600x400?text=Adesivo+Mulher+Maravilha",
                            "https://placehold.co/600x400?text=Adesivo+Mulher+Maravilha+2"
                        ],
                        redirectLink: "https://shopee.com.br/adesivo-mulher-maravilha"
                    }
                ],
                banners: [
                    {
                        id: 1,
                        title: "Banner Promocional",
                        description: "Banner de alta qualidade para promoções e eventos, personalizável com seu design.",
                        price: 150.00,
                        images: [
                            "https://placehold.co/600x400?text=Banner+Promocional",
                            "https://placehold.co/600x400?text=Banner+Promocional+2"
                        ],
                        redirectLink: "https://shopee.com.br/banner-promocional"
                    },
                    {
                        id: 2,
                        title: "Banner Institucional",
                        description: "Banner de alta qualidade para divulgação institucional, personalizável com seu design.",
                        price: 150.00,
                        images: [
                            "https://placehold.co/600x400?text=Banner+Institucional",
                            "https://placehold.co/600x400?text=Banner+Institucional+2"
                        ],
                        redirectLink: "https://shopee.com.br/banner-institucional"
                    }
                ],
                impressao3d: [
                    {
                        id: 1,
                        title: "Peça Personalizada",
                        description: "Peça personalizada em impressão 3D, ideal para prototipagem e projetos criativos.",
                        price: 200.00,
                        images: ["https://placehold.co/600x400?text=Impressao+3D"],
                        redirectLink: "https://shopee.com.br/impressao-3d"
                    },
                    {
                        id: 2,
                        title: "Prototipagem Rápida",
                        description: "Serviço de prototipagem rápida em impressão 3D, perfeito para desenvolvimento de produtos.",
                        price: 200.00,
                        images: ["https://placehold.co/600x400?text=Prototipagem+Rapida"],
                        redirectLink: "https://shopee.com.br/prototipagem-rapida"
                    }
                ],
                topersBolos: [
                    {
                        id: 1,
                        title: "Toper de Bolo Personalizado",
                        description: "Toper de bolo personalizado, ideal para festas e comemorações especiais.",
                        price: 30.00,
                        images: ["https://placehold.co/600x400?text=Toper+de+Bolo"],
                        redirectLink: "https://shopee.com.br/toper-bolo"
                    }
                ]
            }
        }
    },

    // ── Serviços do catálogo (OBJETO — usado por vendas.js) ───────────────────
    // ⚠️  Chave diferente: "servicesCatalog" para não sobrescrever siteData.services (array)
    servicesCatalog: {
        category: {
            comunicacaoVisual: [
                {
                    id: 1,
                    title: "Logo Design",
                    description: "Criação de logotipos personalizados para sua marca, transmitindo a identidade e valores da sua empresa.",
                    price: 500.00,
                    images: ["https://placehold.co/600x400?text=Logo+Design"],
                    mensagem: "Olá, gostaria de solicitar um orçamento para logo design.",
                    redirectLink: `https://wa.me/${companyData.phone}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20logo%20design.`
                },
                {
                    id: 2,
                    title: "Identidade Visual",
                    description: "Desenvolvimento de identidade visual completa, incluindo paleta de cores, tipografia e elementos gráficos.",
                    price: 1500.00,
                    images: ["https://placehold.co/600x400?text=Identidade+Visual"],
                    mensagem: "Olá, gostaria de solicitar um orçamento para identidade visual.",
                    redirectLink: `https://wa.me/${companyData.phone}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20identidade%20visual.`
                }
            ],
            desenvolvimentoWeb: [
                {
                    id: 1,
                    title: "Site Institucional",
                    description: "Desenvolvimento de site institucional responsivo, ideal para apresentar sua empresa e serviços online.",
                    price: 2000.00,
                    images: ["https://placehold.co/600x400?text=Site+Institucional"],
                    mensagem: "Olá, gostaria de solicitar um orçamento para site institucional.",
                    redirectLink: `https://wa.me/${companyData.phone}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20site%20institucional.`
                }
            ],
            designGrafico: [
                {
                    id: 1,
                    title: "Material Promocional",
                    description: "Criação de materiais promocionais como folders, cartazes e banners para divulgar seus produtos e serviços.",
                    price: 300.00,
                    images: ["https://placehold.co/600x400?text=Material+Promocional"],
                    mensagem: "Olá, gostaria de solicitar um orçamento para material promocional.",
                    redirectLink: `https://wa.me/${companyData.phone}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20material%20promocional.`
                }
            ]
        }
    }

};