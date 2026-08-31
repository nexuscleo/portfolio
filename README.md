# 🚀 Portfólio Profissional — Cleomar da Silva (NexusCleo)

Portfólio moderno, responsivo e de alta performance construído com **React 18, TypeScript, Tailwind CSS, Vite e Framer Motion**.

Unindo a precisão da engenharia mecânica e liderança técnica à agilidade do desenvolvimento web Fullstack.

---

## 🛠️ Stack Tecnológica & Ferramentas

- **Core & Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Fast HMR & Bundling)
- **Estilização & Design:** [Tailwind CSS](https://tailwindcss.com/) com paleta *Dark Slate / Cyber Indigo / Cyan Glow* e Glassmorphism
- **Animações & Transições:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/) + SVGs dedicados
- **Efeitos Interativos:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deploy Ready:** GitHub Pages, Vercel ou Netlify

---

## ✨ Funcionalidades Principais

1. **Hero Section de Alto Impacto:**
   - Avatar com moldura de gradiente dinâmica e glow ambiental.
   - Status badge animado: *"Disponível para novos projetos e contratações"*.
   - Chamadas para ação direta (WhatsApp, GitHub e Projetos).
   - Métricas em destaque (+28 repositórios, stack moderna, 100% código limpo).

2. **Sobre Mim & Diferencial de Engenharia:**
   - Narrativa profissional conectando liderança técnica, precisão com SolidWorks e usinagem CNC ao desenvolvimento web Fullstack moderno (DevClub).
   - 4 Pilares de competência destacados.

3. **Stack & Habilidades Interativas:**
   - Abas dinâmicas: *Todas as Skills*, *Frontend*, *Backend*, *Engenharia & CAD*, *Metodologias*.
   - Níveis de proficiência e badges categorizados.

4. **Galeria de Projetos Completa & Filtrável:**
   - Filtros instantâneos por categoria (*Engenharia & CNC*, *Aplicações Web*, *Jogos & 3D*, *Landing Pages*).
   - Barra de pesquisa em tempo real por tecnologia ou nome do projeto.
   - Modal de detalhes completos com solução técnica, highlights, link para demonstração ao vivo e repositório no GitHub.

5. **Linha do Tempo / Trajetória:**
   - Linha do tempo visual destacando os marcos de carreira e transição para desenvolvimento de software.

6. **Estatísticas & Presença no GitHub:**
   - Métricas de repositórios públicos, linguagens ativas e links diretos para os principais projetos open-source.

7. **Contato em 1 Clique:**
   - Formulário validado com notificação Toast e animação de celebração.
   - Botão de cópia de e-mail com feedback instantâneo na área de transferência.
   - Links diretos para WhatsApp, LinkedIn e GitHub.

---

## 📂 Arquitetura Modular & Fácil Manutenção

Os dados do portfólio foram 100% desacoplados da interface para garantir manutenção rápida:

```
src/
├── data/
│   ├── profile.ts      # Biografia, contatos, status e links sociais
│   ├── projects.ts     # Catálogo de projetos (adicione novos projetos aqui em segundos)
│   ├── skills.ts       # Habilidades e categorias
│   └── timeline.ts     # Marcos da linha do tempo
├── components/
│   ├── layout/         # Navbar e Footer
│   ├── sections/       # Hero, About, Skills, Projects, Timeline, GitHubStats, Contact
│   └── ui/             # Badge, Button, ProjectCard, ProjectModal, Toast, Icons, SectionHeader
├── types/              # Tipagens e interfaces TypeScript
├── utils/              # Helpers de scroll, cópia e confetti
├── App.tsx             # Componente raiz
├── main.tsx            # Ponto de entrada
└── index.css           # Tailwind e estilos globais
```

### Como Adicionar um Novo Projeto:
Basta abrir `src/data/projects.ts` e adicionar um novo objeto seguindo a interface `Project`. O card, os filtros, a busca e a modal são gerados automaticamente!

---

## ⚡ Como Executar Localmente

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gerar build de produção otimizado:**
   ```bash
   npm run build
   ```

4. **Visualizar o preview da build:**
   ```bash
   npm run preview
   ```

---

## 👤 Autor

**Cleomar da Silva (NexusCleo)**
- 🌐 [GitHub](https://github.com/nexuscleo)
- 💼 [LinkedIn](https://www.linkedin.com/in/cleomar-silva-173069246/)
- 💬 [WhatsApp](https://wa.me/555496272394)
- ✉️ [nexuscleo@gmail.com](mailto:nexuscleo@gmail.com)