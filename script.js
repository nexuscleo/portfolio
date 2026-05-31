const projectsData = [
	{
		title: "Sistema de Gerenciamento de Tarefas",
		description: "Aplicação web completa para gerenciamento de tarefas e projetos com interface intuitiva, suporte a categorias, prioridades e filtros avançados.",
		image: "img/tasks.png",
		technologies: ["JavaScript", "React", "Node.js", "MongoDB", "CSS"],
		link: "#"
	},
	{
		title: "E-commerce Responsivo",
		description: "Plataforma de e-commerce moderna com carrinho de compras, sistema de pagamento integrado, painel administrativo e design totalmente responsivo.",
		image: "img/ecommerce.png",
		technologies: ["JavaScript", "Vue.js", "Express", "PostgreSQL", "Stripe"],
		link: "#"
	},
	{
		title: "Dashboard de Análise de Dados",
		description: "Dashboard interativo para visualização e análise de dados em tempo real com gráficos dinâmicos, filtros personalizáveis e exportação de relatórios.",
		image: "img/dashboard.png",
		technologies: ["JavaScript", "D3.js", "Python", "Flask", "Chart.js"],
		link: "#"
	}
];

function renderProjects() {
	const container = document.getElementById('projects-grid');
	if (!container) {
		return;
	}
	container.innerHTML = '';

	projectsData.forEach(project => {
		const card = document.createElement('article');
		card.className = 'card project';

		const img = project.image || 'img/project-placeholder.png';

		card.innerHTML = `
			<img src="${img}" alt="${project.title}" onerror="this.src='img/project-placeholder.png'">
			<h3>${project.title}</h3>
			<p>${project.description}</p>
			<div class="tech-tag-container">
				${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
			</div>
			<a href="${project.link}" class="btn outline" target="_blank">Ver projeto</a>
		`;
		container.appendChild(card);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	renderProjects();

	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	const navToggle = document.getElementById('nav-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (navToggle && navLinks) {
		navToggle.addEventListener('click', () => {
			navLinks.classList.toggle('open');
			navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
		});
	}

	const form = document.getElementById('contact-form');
	const status = document.getElementById('form-status');

	if (form && status) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			status.textContent = 'Enviando...';
			setTimeout(() => {
				status.textContent = 'Mensagem enviada! Obrigado pelo contato.';
				form.reset();
			}, 900);
		});
	}
});
