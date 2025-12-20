 // ========================================
        // DADOS DO PORTFÓLIO - EDITE AQUI
        // ========================================
        
        // Para adicionar novos projetos, basta adicionar um objeto no array correspondente
        // Cada projeto precisa de: titulo, descricao, imagem (URL da imagem), link (opcional)
        
        const portfolioData = {
            identidade: [
                {
                    titulo: "Logo Empresa Tech",
                    descricao: "Criação completa de marca",
                    imagem: "https://via.placeholder.com/300x300/0a1628/d4af37?text=Logo+Tech",
                    link: "#"
                },
                {
                    titulo: "Manual de Marca",
                    descricao: "Guia de aplicação visual",
                    imagem: "https://via.placeholder.com/300x300/1a2942/d4af37?text=Manual",
                    link: "#"
                },
                {
                    titulo: "Rebranding Corporativo",
                    descricao: "Renovação de identidade",
                    imagem: "https://via.placeholder.com/300x300/0a1628/f4d976?text=Rebranding",
                    link: "#"
                },
                {
                    titulo: "Logo & Papelaria",
                    descricao: "Identidade completa",
                    imagem: "https://via.placeholder.com/300x300/1a2942/f4d976?text=Papelaria",
                    link: "#"
                }
            ],
            impressao3d: [
                {
                    titulo: "Protótipo Funcional",
                    descricao: "Peça técnica personalizada",
                    imagem: "src/img/portfolio/impressao3d/1.jpg",
                    link: "#"
                },
                {
                    titulo: "Miniatura Arquitetônica",
                    descricao: "Maquete em alta precisão",
                    imagem: "src/img/portfolio/impressao3d/2.jpg",
                    link: "#"
                },
                {
                    titulo: "Peça Decorativa",
                    descricao: "Objeto personalizado",
                    imagem: "src/img/portfolio/impressao3d/3.jpg",
                    link: "#"
                },
                {
                    titulo: "Protótipo Industrial",
                    descricao: "Validação de projeto",
                    imagem: "src/img/portfolio/impressao3d/.jpg",
                    link: "src/img/portfolio/impressao3d/1.jpg"
                }
            ],
            mdf: [
                {
                    titulo: "Corte Personalizado",
                    descricao: "Peça decorativa em MDF",
                    imagem: "https://via.placeholder.com/300x300/0a1628/d4af37?text=Corte+MDF",
                    link: "#"
                },
                {
                    titulo: "Display para Loja",
                    descricao: "Expositor customizado",
                    imagem: "https://via.placeholder.com/300x300/1a2942/d4af37?text=Display",
                    link: "#"
                },
                {
                    titulo: "Placa Decorativa",
                    descricao: "Sinalização personalizada",
                    imagem: "https://via.placeholder.com/300x300/0a1628/f4d976?text=Placa",
                    link: "#"
                },
                {
                    titulo: "Porta-objetos",
                    descricao: "Organizador funcional",
                    imagem: "https://via.placeholder.com/300x300/1a2942/f4d976?text=Organizador",
                    link: "#"
                }
            ],
            grafica: [
                {
                    titulo: "Cartões de Visita",
                    descricao: "Impressão premium",
                    imagem: "https://via.placeholder.com/300x300/0a1628/d4af37?text=Cartoes",
                    link: "#"
                },
                {
                    titulo: "Banners e Faixas",
                    descricao: "Material promocional",
                    imagem: "https://via.placeholder.com/300x300/1a2942/d4af37?text=Banners",
                    link: "#"
                },
                {
                    titulo: "Folders Institucionais",
                    descricao: "Material corporativo",
                    imagem: "https://via.placeholder.com/300x300/0a1628/f4d976?text=Folders",
                    link: "#"
                },
                {
                    titulo: "Papelaria Completa",
                    descricao: "Timbrados e envelopes",
                    imagem: "https://via.placeholder.com/300x300/1a2942/f4d976?text=Papelaria",
                    link: "#"
                }
            ]
        };

        // ========================================
        // FUNÇÕES DO SISTEMA - NÃO EDITAR
        // ========================================

        // Função para renderizar o portfólio
        function renderPortfolio() {
            Object.keys(portfolioData).forEach(category => {
                const carousel = document.getElementById('carousel-' + category);
                carousel.innerHTML = '';
                
                portfolioData[category].forEach(item => {
                    const portfolioItem = document.createElement('div');
                    portfolioItem.className = 'portfolio-item';
                    portfolioItem.style.backgroundImage = `url('${item.imagem}')`;
                    portfolioItem.style.backgroundSize = 'cover';
                    portfolioItem.style.backgroundPosition = 'center';
                    
                    const overlay = document.createElement('div');
                    overlay.className = 'portfolio-overlay';
                    overlay.innerHTML = `
                        <h4>${item.titulo}</h4>
                        <p>${item.descricao}</p>
                        ${item.link ? `<a href="${item.link}" style="color: var(--dourado); text-decoration: underline; margin-top: 0.5rem;">Ver mais</a>` : ''}
                    `;
                    
                    portfolioItem.appendChild(overlay);
                    carousel.appendChild(portfolioItem);
                });
            });
        }

        // Renderizar portfólio quando a página carregar
        document.addEventListener('DOMContentLoaded', function() {
            renderPortfolio();
        });

        // Smooth scroll para os links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Sistema de Carrossel
        const carouselPositions = {
            'identidade': 0,
            'impressao3d': 0,
            'mdf': 0,
            'grafica': 0
        };

        function moveCarousel(category, direction) {
            const carousel = document.getElementById('carousel-' + category);
            const items = carousel.querySelectorAll('.portfolio-item');
            if (items.length === 0) return;
            
            const itemWidth = items[0].offsetWidth + 32; // 32px é o gap
            const maxPosition = -(items.length - 3) * itemWidth;
            
            carouselPositions[category] += direction * itemWidth;
            
            if (carouselPositions[category] > 0) {
                carouselPositions[category] = 0;
            } else if (carouselPositions[category] < maxPosition) {
                carouselPositions[category] = maxPosition;
            }
            
            carousel.style.transform = `translateX(${carouselPositions[category]}px)`;
        }

        // Animação de entrada dos elementos quando aparecem na viewport
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.servico-card, .depoimento-card, .portfolio-category').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });