// PROJECT DATA STORE
/**
 * Array de objetos contendo dados dos projetos do portfólio.
 * 
 * Campos obrigatórios:
 * - title (string): Nome do projeto (1-100 caracteres)
 * - description (string): Descrição do projeto (1-500 caracteres)
 * - image (string): Caminho ou URL da imagem (usa placeholder se inválido)
 * - technologies (array de strings): Lista de tecnologias usadas (1-20 elementos)
 * - link (string): URL do projeto ou repositório (omite botão se inválido)
 * 
 * Exemplo de projeto válido:
 * {
 *   title: "Sistema de Chat em Tempo Real",
 *   description: "Aplicação web de chat com suporte a múltiplas salas e mensagens em tempo real usando WebSockets.",
 *   image: "img/chat-app.png",
 *   technologies: ["JavaScript", "Node.js", "Socket.io", "HTML", "CSS"],
 *   link: "https://github.com/usuario/chat-app"
 * }
 */
const projectsData = [
	{
		title: "Sistema de Gerenciamento de Tarefas",
		description: "Aplicação web completa para gerenciamento de tarefas e projetos com interface intuitiva, suporte a categorias, prioridades e filtros avançados.",
		image: "img/task-manager.png",
		technologies: ["JavaScript", "React", "Node.js", "MongoDB", "CSS"],
		link: "https://github.com/usuario/task-manager"
	},
	{
		title: "E-commerce Responsivo",
		description: "Plataforma de e-commerce moderna com carrinho de compras, sistema de pagamento integrado, painel administrativo e design totalmente responsivo.",
		image: "img/ecommerce.png",
		technologies: ["JavaScript", "Vue.js", "Express", "PostgreSQL", "Stripe"],
		link: "https://github.com/usuario/ecommerce-platform"
	},
	{
		title: "Dashboard de Análise de Dados",
		description: "Dashboard interativo para visualização e análise de dados em tempo real com gráficos dinâmicos, filtros personalizáveis e exportação de relatórios.",
		image: "img/dashboard.png",
		technologies: ["JavaScript", "D3.js", "Python", "Flask", "Chart.js"],
		link: "https://github.com/usuario/data-dashboard"
	}
];

// HELPER FUNCTIONS

/**
 * Sanitiza uma string removendo espaços nas extremidades e truncando se necessário.
 * 
 * @param {string} str - String a ser sanitizada
 * @param {number} maxLength - Comprimento máximo permitido
 * @returns {string} String sanitizada e truncada
 * 
 * @example
 * sanitizeString("  Hello World  ", 5) // "Hello"
 * sanitizeString("Short", 10) // "Short"
 */
function sanitizeString(str, maxLength) {
	// Remove espaços em branco nas extremidades
	const trimmed = str.trim();
	
	// Trunca se exceder maxLength
	if (trimmed.length > maxLength) {
		return trimmed.substring(0, maxLength);
	}
	
	return trimmed;
}

// VALIDATION MODULE

/**
 * Valida se um objeto de projeto contém todos os campos obrigatórios e tipos corretos.
 * @param {Object} project - Objeto a ser validado
 * @returns {Object} { isValid: boolean, errors: string[] }
 */
function validateProject(project) {
	const errors = [];

	// Validar campo title
	if (!project.title || typeof project.title !== 'string') {
		errors.push('Project missing required field: title');
	} else {
		const trimmedTitle = project.title.trim();
		if (trimmedTitle === '') {
			errors.push('Project title cannot be empty');
		} else if (trimmedTitle.length < 1 || trimmedTitle.length > 100) {
			errors.push('Project title must be between 1 and 100 characters');
		}
	}

	// Validar campo description
	if (!project.description || typeof project.description !== 'string') {
		errors.push('Project missing required field: description');
	} else {
		const trimmedDescription = project.description.trim();
		if (trimmedDescription === '') {
			errors.push('Project description cannot be empty');
		} else if (trimmedDescription.length < 1 || trimmedDescription.length > 500) {
			errors.push('Project description must be between 1 and 500 characters');
		}
	}

	// Validar campo technologies
	if (!Array.isArray(project.technologies)) {
		errors.push('Project missing required field: technologies');
	} else {
		const hasValidTech = project.technologies.some(tech => 
			typeof tech === 'string' && tech.trim() !== ''
		);
		if (!hasValidTech) {
			errors.push('Project technologies must contain at least one non-empty string');
		}
	}

	return {
		isValid: errors.length === 0,
		errors: errors
	};
}

// VALIDATION HELPER FUNCTIONS

/**
 * Verifica se uma string é uma URL válida ou caminho relativo.
 * 
 * @param {string} url - URL ou caminho a ser validado
 * @returns {boolean} - true se a URL é válida ou é um caminho relativo válido, false caso contrário
 * 
 * Considera válido:
 * - URLs absolutas com protocolo (http://, https://, etc.)
 * - Caminhos relativos (img/foto.png, ./assets/image.jpg, ../files/doc.pdf)
 * - Caminhos absolutos (/assets/image.png)
 * 
 * Considera inválido:
 * - null, undefined
 * - Strings vazias ou apenas espaços em branco
 * - String "#" (usado como placeholder para links vazios)
 */
function isValidUrl(url) {
	// Verifica se url é null, undefined, não é string, ou é vazia após trim
	if (!url || typeof url !== 'string' || url.trim() === '') {
		return false;
	}
	
	// Remove espaços em branco
	const trimmedUrl = url.trim();
	
	// Considera "#" como inválido (placeholder comum para links vazios)
	if (trimmedUrl === '#') {
		return false;
	}
	
	// Tenta validar como URL absoluta usando a API URL do navegador
	try {
		new URL(trimmedUrl);
		return true; // É uma URL absoluta válida
	} catch (e) {
		// Não é uma URL absoluta, verifica se é um caminho relativo válido
		// Caminhos relativos válidos:
		// - Começam com ./ ou ../
		// - Começam com / (caminho absoluto no servidor)
		// - Começam com um nome de arquivo/diretório (ex: img/foto.png)
		
		// Verifica se contém caracteres inválidos para caminhos
		const invalidChars = /[<>"|?*]/;
		if (invalidChars.test(trimmedUrl)) {
			return false;
		}
		
		// Aceita caminhos que começam com ./, ../, / ou nome de arquivo/diretório
		// Basicamente, se passou pelas validações anteriores e não tem caracteres inválidos,
		// consideramos como um caminho relativo válido
		return true;
	}
}

// PROJECT RENDERER

/**
 * Renderiza todos os projetos do projectsData no container da página.
 * Remove cards hardcoded existentes e cria cards dinamicamente.
 */
function renderProjects() {
	// Localizar container
	const container = document.querySelector('.projetos .grid');
	
	// Tratamento de container ausente
	if (!container) {
		console.error('Error: Projects container (.projetos .grid) not found in DOM');
		return;
	}
	
	// Limpar conteúdo existente
	container.innerHTML = '';
	
	// Tratamento de store vazio
	if (!projectsData || projectsData.length === 0) {
		return;
	}
	
	// Iterar sobre projetos e renderizar
	projectsData.forEach((project, index) => {
		// Validar projeto
		const validation = validateProject(project);
		
		if (!validation.isValid) {
			// Registrar warning e continuar
			console.warn(`Warning: Project ${index + 1} skipped - ${validation.errors.join(', ')}`);
			return;
		}
		
		// Criar e inserir card
		const card = createProjectCard(project);
		container.appendChild(card);
	});
}

// PROJECT CARD CREATOR

/**
 * Cria um elemento DOM para um projeto validado.
 * 
 * @param {Object} project - Objeto de projeto válido
 * @returns {HTMLElement} - Elemento article.card.project
 * 
 * Estrutura HTML gerada:
 * <article class="card project">
 *   <img src="{image}" alt="{title}">
 *   <h3>{title}</h3>
 *   <p>{description} Tecnologias: {tech1, tech2, tech3}</p>
 *   <a class="btn" href="{link}" aria-label="Ver {title}">Ver projeto</a>
 * </article>
 * 
 * Regras:
 * - Se image for inválida (null, vazia, whitespace), usa "img/project-placeholder.png"
 * - Título truncado em 100 caracteres se necessário
 * - Descrição truncada em 500 caracteres se necessário
 * - Tecnologias filtradas (remove null/undefined/vazias), formatadas como "Tecnologias: X, Y, Z"
 * - Se link for inválido (null, vazio, whitespace, "#"), o elemento <a> não é criado
 */
function createProjectCard(project) {
	// Criar elemento article com classes
	const article = document.createElement('article');
	article.classList.add('card', 'project');
	
	// Criar elemento img com fallback
	const img = document.createElement('img');
	
	// Determinar URL da imagem (usar placeholder se inválida)
	const imageUrl = (project.image && typeof project.image === 'string' && project.image.trim() !== '')
		? project.image.trim()
		: 'img/project-placeholder.png';
	
	img.src = imageUrl;
	img.alt = sanitizeString(project.title, 100);
	
	// Adicionar event listener para fallback em caso de erro de carregamento
	img.addEventListener('error', function() {
		this.src = 'img/project-placeholder.png';
	});
	
	article.appendChild(img);
	
	// Criar elemento h3 com título (truncado se necessário)
	const h3 = document.createElement('h3');
	h3.textContent = sanitizeString(project.title, 100);
	article.appendChild(h3);
	
	// Criar elemento p com descrição e tecnologias
	const p = document.createElement('p');
	
	// Truncar descrição se necessário
	const description = sanitizeString(project.description, 500);
	
	// Filtrar tecnologias inválidas e formatar
	const validTechnologies = project.technologies.filter(tech => 
		tech && typeof tech === 'string' && tech.trim() !== ''
	);
	
	const technologiesText = validTechnologies.length > 0
		? ' Tecnologias: ' + validTechnologies.join(', ')
		: '';
	
	p.textContent = description + technologiesText;
	article.appendChild(p);
	
	// Criar elemento a (link) condicionalmente
	if (isValidUrl(project.link)) {
		const a = document.createElement('a');
		a.classList.add('btn');
		a.href = project.link;
		a.setAttribute('aria-label', 'Ver ' + sanitizeString(project.title, 100));
		a.textContent = 'Ver projeto';
		article.appendChild(a);
	}
	
	return article;
}

document.addEventListener('DOMContentLoaded', function () {
	// Renderizar projetos dinamicamente
	renderProjects();
	
	// Set current year
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// Mobile nav toggle
	const navToggle = document.getElementById('nav-toggle');
	const siteNav = document.querySelector('.site-nav');
	if (navToggle && siteNav) {
		navToggle.addEventListener('click', () => {
			siteNav.classList.toggle('open');
			navToggle.setAttribute('aria-expanded', siteNav.classList.contains('open'));
		});
	}

	// Smooth scrolling for in-page links (fallback for older browsers)
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			// ignore external and empty hrefs
			const href = this.getAttribute('href');
			if (!href || href === '#' || href.startsWith('mailto:') || href.startsWith('tel:')) return;
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			// close mobile nav after clicking
			if (siteNav && siteNav.classList.contains('open')) siteNav.classList.remove('open');
		});
	});

	// Simple contact form handler (simula envio)
	const form = document.getElementById('contact-form');
	const status = document.getElementById('form-status');
	if (form && status) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const data = new FormData(form);
			const name = data.get('name')?.toString().trim();
			const email = data.get('email')?.toString().trim();
			const message = data.get('message')?.toString().trim();
			if (!name || !email || !message) {
				status.textContent = 'Por favor, preencha todos os campos.';
				return;
			}
			status.textContent = 'Enviando...';
			// Simula envio assíncrono
			setTimeout(() => {
				status.textContent = 'Mensagem enviada! Obrigado pelo contato.';
				form.reset();
			}, 900);
		});
	}
});
