import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "seno-sextavado",
    title: "Calculadora de Sextavado para Usinagem CNC",
    shortDescription: "Ferramenta de cálculo de precisão para peças sextavadas e quadradas na indústria metalmecânica.",
    fullDescription: "Desenvolvida para resolver um problema crítico do dia a dia na usinagem CNC e fresamento industrial. A aplicação calcula com exatidão as cotas trigonométricas de seno, apótema e raio, eliminando erros humanos em operações de alta tolerância mecânica.",
    category: "engineering",
    categoryLabel: "Engenharia & Ferramentas",
    technologies: ["JavaScript", "HTML5", "CSS3", "Trigonometria", "CNC"],
    image: "img/proj-calc-sextavado.png",
    demoUrl: "https://nexuscleo.github.io/seno-sextavado/",
    githubUrl: "https://github.com/nexuscleo/seno-sextavado",
    featured: true,
    highlights: [
      "Cálculo em tempo real de coordenadas angulares",
      "Interface otimizada para operadores em chão de fábrica e projetistas",
      "Redução comprovada de tempo de setup em tornos e fresadoras"
    ]
  },
  {
    id: "livro-de-enoque",
    title: "Livro de Enoque — Leitor Digital Interativo",
    shortDescription: "Aplicação web moderna em TypeScript para leitura estruturada, pesquisa e estudo de textos históricos.",
    fullDescription: "Uma plataforma web completa e tipada em TypeScript para leitura, navegação por capítulos e indexação de textos históricos. Conta com tema agradável para leitura prolongada, menu responsivo e carregamento rápido.",
    category: "web",
    categoryLabel: "Aplicações & Web Apps",
    technologies: ["TypeScript", "HTML5", "CSS3", "SPA", "Git"],
    image: "img/proj-convite.png", // fallback image
    demoUrl: "https://nexuscleo.github.io/livro-de-enoque/",
    githubUrl: "https://github.com/nexuscleo/livro-de-enoque",
    featured: true,
    highlights: [
      "Desenvolvido com tipagem estrita em TypeScript",
      "Navegação fluida entre seções e capítulos",
      "Design focado em legibilidade e conforto visual"
    ]
  },
  {
    id: "the-cube",
    title: "The Cube — Simulador 3D de Cubo Mágico",
    shortDescription: "Aplicação 3D interativa de cubo mágico que permite rotação 360°, manipulação de faces e solução lógica.",
    fullDescription: "Experimento interativo em JavaScript que renderiza um cubo mágico tridimensional manipulável no navegador. Permite girar camadas horizontais e verticais via mouse ou toque em telas sensíveis, demonstrando domínio de lógica espacial e animações complexas.",
    category: "interactive",
    categoryLabel: "Jogos & Interatividade",
    technologies: ["JavaScript", "CSS 3D Transforms", "HTML5", "DOM Events"],
    image: "img/proj-tabuada.png", // fallback image
    demoUrl: "https://nexuscleo.github.io/the-cube/",
    githubUrl: "https://github.com/nexuscleo/the-cube",
    featured: true,
    highlights: [
      "Manipulação em tempo real de eixos 3D (X, Y, Z)",
      "Detecção de gestos de arraste e cliques em camadas",
      "Lógica de estado dinâmico para faces do cubo"
    ]
  },
  {
    id: "lumiere-moda",
    title: "Lumière Moda Online — E-commerce Showcase",
    shortDescription: "Interface moderna para catálogo e loja virtual de moda, com layout responsivo de alta conversão.",
    fullDescription: "Vitrine digital criada com foco em experiência de compra, hierarquia visual refinada e transições suaves. Inclui catálogo de produtos em grid dinâmico, cartões informativos e design visual sofisticado.",
    category: "landing",
    categoryLabel: "Landing Pages & UI",
    technologies: ["JavaScript", "CSS3 Flex/Grid", "HTML5 Semântico", "UI/UX"],
    image: "img/proj-convite.png", // fallback image
    demoUrl: "https://nexuscleo.github.io/lumiere-moda-online/",
    githubUrl: "https://github.com/nexuscleo/lumiere-moda-online",
    featured: true,
    highlights: [
      "Grid responsivo adaptável a qualquer dispositivo",
      "Efeitos de hover e micro-interações elegantes",
      "Foco em identidade visual de marca e apelo comercial"
    ]
  },
  {
    id: "controle-producao",
    title: "Controle de Produção & Turnos Industriais",
    shortDescription: "Sistema de formulário e registro de produtividade diária para equipes operacionais de fábrica.",
    fullDescription: "Aplicação prática criada para suprir a necessidade de coleta de métricas em chão de fábrica. Registra dados de máquinas, peças produzidas, paradas não programadas e assinaturas de turno, integrando tecnologia ao processo produtivo.",
    category: "engineering",
    categoryLabel: "Engenharia & Ferramentas",
    technologies: ["JavaScript", "Forms Validation", "HTML5", "CSS3"],
    image: "img/proj-tarefas.png", // fallback image
    demoUrl: "https://nexuscleo.github.io/controle-producao/",
    githubUrl: "https://github.com/nexuscleo/controle-producao",
    featured: false,
    highlights: [
      "Validação estrita de campos de entrada industrial",
      "Geração estruturada de resumo para supervisores",
      "Interface direta e sem distrações para ambiente fabril"
    ]
  },
  {
    id: "todo-list",
    title: "TaskFlow — Gerenciador de Tarefas",
    shortDescription: "Aplicação de produtividade para organização pessoal de tarefas diárias com persistência e feedback.",
    fullDescription: "To-do list completa que permite adicionar, marcar como concluída, filtrar e excluir tarefas do dia a dia. Desenvolvida com código modular e foco em acessibilidade e facilidade de uso.",
    category: "web",
    categoryLabel: "Aplicações & Web Apps",
    technologies: ["JavaScript", "CSS3", "HTML5", "Local Storage", "DOM"],
    image: "img/proj-tarefas.png",
    demoUrl: "https://nexuscleo.github.io/todo-list/",
    githubUrl: "https://github.com/nexuscleo/todo-list",
    featured: true,
    highlights: [
      "Gerenciamento dinâmico de estados de tarefas",
      "Filtros de ativas, concluídas e todas",
      "Design limpo com foco no foco do usuário"
    ]
  },
  {
    id: "gerador-tabuada",
    title: "Gerador Dinâmico de Tabuadas",
    shortDescription: "Ferramenta matemática e pedagógica para cálculo instantâneo e visual de tabuadas interativas.",
    fullDescription: "Utilitário rápido que calcula, renderiza e organiza tabuadas personalizadas com múltiplos fatores. Possui design moderno com gradientes e resposta visual instantânea a cada dígito inserido.",
    category: "web",
    categoryLabel: "Aplicações & Web Apps",
    technologies: ["JavaScript", "CSS3 Moderno", "HTML5", "Algoritmos"],
    image: "img/proj-tabuada.png",
    demoUrl: "https://nexuscleo.github.io/gerador-tabuada/",
    githubUrl: "https://github.com/nexuscleo/gerador-tabuada",
    featured: true,
    highlights: [
      "Geração em tempo real sem recarregar a página",
      "Layout em cards com contraste balanceado",
      "Design 100% responsivo para smartphones e tablets"
    ]
  },
  {
    id: "aritmetica-basica",
    title: "Aritmética & Math Engine — Guia Interativo",
    shortDescription: "Vitrine interativa de demonstração prática dos métodos do objeto Math e lógica de programação em JS.",
    fullDescription: "Projeto educacional com interface visual concebido para servir como guia de referência rápida e sandbox de testes de operadores aritméticos, métodos como Math.round, Math.floor, Math.sqrt e comparações lógicas.",
    category: "web",
    categoryLabel: "Aplicações & Web Apps",
    technologies: ["JavaScript", "Math Object", "CSS3", "HTML5"],
    image: "img/proj-tabuada.png",
    demoUrl: "https://nexuscleo.github.io/aritmetica-basica/",
    githubUrl: "https://github.com/nexuscleo/aritmetica-basica",
    featured: false,
    highlights: [
      "Execução de expressões matemáticas com feedback imediato",
      "Documentação visual de operadores embutida",
      "Ótima ferramenta de consulta rápida para desenvolvedores"
    ]
  },
  {
    id: "convite-alyce",
    title: "Convite Digital Interativo — Alyce",
    shortDescription: "Landing page temática de convite digital com confirmação de presença e contagem regressiva.",
    fullDescription: "Landing page responsiva com design moderno e acolhedor, pensada para transmitir elegância e praticidade. Conta com contagem regressiva, localização com mapa interativo e botão de confirmação via WhatsApp.",
    category: "landing",
    categoryLabel: "Landing Pages & UI",
    technologies: ["JavaScript", "CSS3 Animations", "HTML5", "Responsive"],
    image: "img/proj-convite.png",
    demoUrl: "https://convite-alyce.netlify.app/",
    githubUrl: "https://github.com/nexuscleo/convite-alyce",
    featured: true,
    highlights: [
      "Efeitos suaves de animação de entrada",
      "Integração direta de confirmação via WhatsApp API",
      "Visual sofisticado e adaptado para telas mobile"
    ]
  },
  {
    id: "password-generator",
    title: "Password Generator — Utilitário TypeScript",
    shortDescription: "Gerador de senhas seguras e customizáveis com critérios de entropia e cópia em 1 clique.",
    fullDescription: "Aplicação construída em TypeScript focada em segurança da informação. Gera senhas com controle de tamanho, caracteres especiais, maiúsculas, números e indicador visual de força criptográfica.",
    category: "web",
    categoryLabel: "Aplicações & Web Apps",
    technologies: ["TypeScript", "Segurança", "CSS3", "HTML5"],
    image: "img/proj-tarefas.png",
    githubUrl: "https://github.com/nexuscleo/password-generator",
    featured: false,
    highlights: [
      "Algoritmo de geração randômica ponderada",
      "Indicador de força da senha em tempo real",
      "Cópia automática para a área de transferência"
    ]
  },
  {
    id: "asteroids",
    title: "Asteroids Arcade — Game Canvas em JS",
    shortDescription: "Reimaginação do clássico jogo de arcade Asteroids utilizando HTML5 Canvas e física vetorial.",
    fullDescription: "Jogo completo desenvolvido em JavaScript puro com manipulação de Canvas. Implementa física vetorial simples (inércia, aceleração, colisão circular), sistema de pontuação e controles por teclado.",
    category: "interactive",
    categoryLabel: "Jogos & Interatividade",
    technologies: ["JavaScript", "HTML5 Canvas", "Física 2D", "Game Loop"],
    image: "img/proj-tabuada.png",
    demoUrl: "https://nexuscleo.github.io/asteroids/",
    githubUrl: "https://github.com/nexuscleo/asteroids",
    featured: false,
    highlights: [
      "Game loop nativo com requestAnimationFrame",
      "Detecção de colisão poligonal/circular",
      "Efeitos de partículas ao destruir meteoros"
    ]
  },
  {
    id: "conversor-moedas",
    title: "Conversor de Moedas Global",
    shortDescription: "Calculadora de taxas de câmbio internacionais com interface responsiva e conversão rápida.",
    fullDescription: "Aplicação web para cálculo e conversão de múltiplos pares de moedas (BRL, USD, EUR, etc.), com tratamento numérico e interface amigável.",
    category: "web",
    categoryLabel: "Aplicações & Web Apps",
    technologies: ["JavaScript", "CSS3", "HTML5", "Formatação Monetária"],
    image: "img/proj-calc-sextavado.png",
    demoUrl: "https://nexuscleo.github.io/conversor-de-moedas/",
    githubUrl: "https://github.com/nexuscleo/conversor-de-moedas",
    featured: false,
    highlights: [
      "Formatação monetária internacional padronizada",
      "Interface intuitiva com troca instantânea de base",
      "Totalmente responsivo em qualquer resolução"
    ]
  }
];

