import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, X } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { projectsData } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'engineering', label: 'Engenharia & CNC' },
    { id: 'web', label: 'Aplicações Web' },
    { id: 'interactive', label: 'Jogos & 3D' },
    { id: 'landing', label: 'Landing Pages & UI' },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projetos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Galeria de Trabalhos"
          title="Projetos &"
          highlight="Aplicações em Produção"
          description="Explore um catálogo diversificado de soluções práticas, desde calculadoras industriais até aplicações web modernas e interativas."
        />

        {/* Barra de Filtros e Busca */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Abas de Categorias */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-surface-100/80 border border-white/10 rounded-2xl backdrop-blur-md w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-slate-950 shadow-md shadow-primary/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Campo de Busca Rápida */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por React, CNC, JS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-100/80 border border-white/10 hover:border-white/20 focus:border-primary text-white text-xs sm:text-sm pl-10 pr-10 py-2.5 rounded-2xl backdrop-blur-md outline-none transition-all placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 cursor-pointer"
                aria-label="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Grid de Cards de Projetos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={setActiveModalProject}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-surface-100/40 border border-white/10 rounded-3xl p-12 text-center max-w-md mx-auto">
            <FolderGit2 className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-1">
              Nenhum projeto encontrado
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Não encontramos projetos com os termos pesquisados.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-primary/20 text-primary hover:bg-primary hover:text-slate-950 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Resetar Filtros
            </button>
          </div>
        )}

        {/* Modal de Detalhes do Projeto */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};

