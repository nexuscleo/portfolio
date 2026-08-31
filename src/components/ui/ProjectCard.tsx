import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../../types';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-surface-100/70 hover:bg-surface-100/95 border border-white/10 hover:border-primary/40 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      {/* Imagem do Projeto com Efeito Hover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/60">
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'img/proj-calc-sextavado.png';
          }}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-100 via-transparent to-transparent opacity-80" />

        {/* Badges no topo da imagem */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <Badge variant="primary" size="sm">
            {project.categoryLabel}
          </Badge>
          {project.featured && (
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-amber-400" /> Destaque
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2 flex-1">
          {project.shortDescription}
        </p>

        {/* Tags de Tecnologias */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] text-slate-400 self-center px-1">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Ações / Botões */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/5 cursor-pointer"
          >
            <Info className="w-4 h-4 text-primary" />
            <span>Detalhes</span>
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código do ${project.title} no GitHub`}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-primary/20 hover:bg-primary text-primary-light hover:text-slate-950 text-xs font-bold px-3 py-1.5 rounded-xl transition-all duration-200 border border-primary/30 hover:border-transparent"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

