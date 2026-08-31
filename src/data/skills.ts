import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Interfaces",
    category: "frontend",
    description: "Criação de aplicações web modernas, reativas e com experiência visual imersiva.",
    skills: [
      { name: "React", level: "Avançado", category: "frontend" },
      { name: "TypeScript", level: "Intermediário/Avançado", category: "frontend" },
      { name: "JavaScript (ES6+)", level: "Avançado", category: "frontend" },
      { name: "Tailwind CSS", level: "Avançado", category: "frontend" },
      { name: "HTML5 & CSS3", level: "Especialista", category: "frontend" },
      { name: "Design Responsivo & Mobile First", level: "Avançado", category: "frontend" },
      { name: "Framer Motion", level: "Intermediário", category: "frontend" },
      { name: "Acessibilidade Web (a11y)", level: "Intermediário", category: "frontend" },
    ]
  },
  {
    title: "Backend & Integrações",
    category: "backend",
    description: "Estruturação de servidores, APIs RESTful, lógicas de processamento e dados.",
    skills: [
      { name: "Node.js", level: "Intermediário/Avançado", category: "backend" },
      { name: "Express", level: "Intermediário", category: "backend" },
      { name: "Python", level: "Intermediário", category: "backend" },
      { name: "C#", level: "Fundamentos", category: "backend" },
      { name: "APIs RESTful", level: "Intermediário/Avançado", category: "backend" },
      { name: "Manipulação de JSON & Assincronismo", level: "Avançado", category: "backend" },
    ]
  },
  {
    title: "Engenharia & Ferramentas",
    category: "engineering",
    description: "Ferramentas técnicas, controle de versão e metodologias de precisão.",
    skills: [
      { name: "Git & GitHub", level: "Avançado", category: "engineering" },
      { name: "SolidWorks 3D CAD", level: "Especialista", category: "engineering" },
      { name: "Vite & Build Tools", level: "Avançado", category: "engineering" },
      { name: "VS Code & Linters", level: "Avançado", category: "engineering" },
      { name: "Usinagem CNC & Cálculos Técnicos", level: "Especialista", category: "engineering" },
      { name: "Deploy (GitHub Pages / Vercel / Netlify)", level: "Intermediário", category: "engineering" },
    ]
  },
  {
    title: "Metodologias & Diferenciais",
    category: "tools",
    description: "Habilidades profissionais de liderança, método e entrega contínua.",
    skills: [
      { name: "Clean Code & Refatoração", level: "Avançado", category: "tools" },
      { name: "Resolução Analítica de Problemas", level: "Especialista", category: "tools" },
      { name: "Liderança Técnica de Equipe", level: "Avançado", category: "tools" },
      { name: "Controle de Qualidade & Processos", level: "Avançado", category: "tools" },
      { name: "Comunicação & Trabalho em Equipe", level: "Avançado", category: "tools" },
    ]
  }
];

