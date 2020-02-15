module.exports = {
    title: 'San Thies',
    description: 'San Thies - Engenharia Elétrica e Mecânica',
    themeConfig: {
        logo: '/logo.png',
        sidebar: 'auto',
        pref: true,
        next: true,
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Eventos',
                items: [
                    { text: 'Feira Manutenção 2011', link: '/eventos/#feira-manutencao-2011' }
                ]
            },
            { text: 'Clientes', link: '/clientes/' },
            {
                text: 'Produtos',
                ariaLabel: 'Menu de produtos',
                items: [
                    { text: 'Esteiras transportadoras', link: '/produtos/#esteiras-transportadoras' },
                    { text: 'Agitadores', link: '/produtos/#agitadores' },
                    { text: 'Cortadeiras de bobinas', link: '/produtos/#cortadeiras-de-bobinas' },
                    { text: 'Desbobinadores', link: '/produtos/#desbobinadores' },
                    { text: 'Carros de transporte e especiais', link: '/produtos/#carros-transporte-especiais' },
                    { text: 'Sistemas de elevação', link: '/produtos/#sistemas-de-elevacao' },
                    { text: 'Prensas hidráulicas', link: '/produtos/#prensas-hidraulicas' },
                    { text: 'Máquinas diversas', link: '/produtos/#maquinas-diversas' },
                    { text: 'Equipamentos para logística', link: '/produtos/#equipamentos-para-logistica' },
                    { text: 'Estruturas metálicas', link: '/produtos/#estruturas-metalicas' },
                    { text: 'Plataformas', link: '/produtos/#plataformas' },
                    { text: 'Moldes expansivos', link: '/produtos/#moldes-expansivos' }
                ]
            }, {
                text: 'Serviços',
                ariaLabel: 'Menu de serviços',
                items: [
                    { text: 'Projetos', link: '/servicos/#projetos' },
                    { text: 'Manutenção e Instalação elétrica e Mecânica Industrial', link: '/servicos/#manutencao-e-instalacao-eletrica-e-mecanica-industrial' },
                    { text: 'Usinagem', link: '/servicos/#usinagem' },
                    { text: 'Soldagens', link: '/servicos/#soldagens' }
                ]
            }
        ]
    }
}