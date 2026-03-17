// ─── Company Data ───────────────────────────────────────────────────────────
// new data
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
    products: {
        category: {
            grafica:{
                adesivos: [
                    {
                        id: 1,
                        title: "Adesivo Homem aranha",
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
                        images: [
                            "https://placehold.co/600x400?text=Impressao+3D"
                        ],
                        redirectLink: "https://shopee.com.br/impressao-3d"
                    },
                    {
                        id: 2,
                        title: "Prototipagem Rápida",
                        description: "Serviço de prototipagem rápida em impressão 3D, perfeito para desenvolvimento de produtos.",
                        price: 200.00,
                        images: [
                            "https://placehold.co/600x400?text=Prototipagem+Rapida"
                        ],
                        redirectLink: "https://shopee.com.br/prototipagem-rapida"
                    }
                ],
                topersBolos: [
                    {
                        id: 1,
                        title: "Toper de Bolo Personalizado",
                        description: "Toper de bolo personalizado, ideal para festas e comemorações especiais.",
                        price: 30.00,
                        images: [
                            "https://placehold.co/600x400?text=Toper+de+Bolo"
                        ],
                        redirectLink: "https://shopee.com.br/toper-bolo"
                    }
                ]
            }            
        }
    },

    services: {
        category: {
            comunicacaoVisual: [
                {
                    id: 1,
                    title: "Logo Design",
                    description: "Criação de logotipos personalizados para sua marca, transmitindo a identidade e valores da sua empresa.",
                    price: 500.00,
                    images: [
                        "https://placehold.co/600x400?text=Logo+Design"
                    ],
                    mensagem: "Olá, gostaria de solicitar um orçamento para logo design.",
                    redirectLink: "https://wa.me/" + companyData.phone + "?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20logo%20design."
                },
                {
                    id: 2,
                    title: "Identidade Visual",
                    description: "Desenvolvimento de identidade visual completa, incluindo paleta de cores, tipografia e elementos gráficos para fortalecer a presença da sua marca.",
                    price: 1500.00,
                    images: [
                        "https://placehold.co/600x400?text=Identidade+Visual"
                    ],
                    mensagem: "Olá, gostaria de solicitar um orçamento para identidade visual.",
                    redirectLink: "https://wa.me/" + companyData.phone + "?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20identidade%20visual."
                },
            ],
            desenvolvimentoWeb: [
                {
                    id: 1,
                    title: "Site Institucional",
                    description: "Desenvolvimento de site institucional responsivo, ideal para apresentar sua empresa e serviços online.",
                    price: 2000.00,
                    images: [
                        "https://placehold.co/600x400?text=Site+Institucional"
                    ],
                    mensagem: "Olá, gostaria de solicitar um orçamento para site institucional.",
                    redirectLink: "https://wa.me/" + companyData.phone + "?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20site%20institucional."
                },
            ],
            designGrafico: [
                {
                    id: 1,
                    title: "Material Promocional",
                    description: "Criação de materiais promocionais como folders, cartazes e banners para divulgar seus produtos e serviços.",
                    price: 300.00,
                    images: [
                        "https://placehold.co/600x400?text=Material+Promocional"
                    ],
                    mensagem: "Olá, gostaria de solicitar um orçamento para material promocional.",
                    redirectLink: "https://wa.me/" + companyData.phone + "?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20material%20promocional."
                },
            ]
        }
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