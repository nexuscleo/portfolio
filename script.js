const projectsData = [
	{
		title: "Gerador de tabuadas",
		description: "Uma ferramenta online rápida e fácil de usar para calcular tabuadas instantaneamente, contando com um design moderno e responsivo.",
		image: "img/proj-tabuada.png",
		technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
		link: "https://nexuscleo.github.io/gerador-tabuada/"
	},
	{
		title: "Calculadora de sextavado para usinagem CNC",
		description: "Ferramenta especializada para cálculo de sextavado em processos de usinagem CNC, com interface intuitiva e resultados precisos.",
		image: "img/proj-calc-sextavado.png",
		technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
		link: "https://nexuscleo.github.io/seno-sextavado/"
	},
	{
		title: "Lista de tarefas",
		description: "Adicionar itens em uma lista, como tarefas a serem realizadas por uma pessoa durante sua rotina diária.",
		image: "img/proj-tarefas.png",
		technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
		link: "https://nexuscleo.github.io/todo-list/"
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
