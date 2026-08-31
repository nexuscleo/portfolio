import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../../types';
import { Badge } from './Badge';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card com comportamento Bottom Sheet no Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-3xl bg-surface-100 border-t sm:border border-white/15 rounded-t-[28px] sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] sm:max-h-[90vh] flex flex-col"
          >
            {/* Header da Modal com Imagem */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full bg-slate-950 overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'img/proj-calc-sextavado.png';
                }}
                className="w-full h-full object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-100 via-surface-100/40 to-transparent" />

              {/* Barra de arrastar no mobile */}
              <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full" />

              {/* Botão Fechar */}
              <button
                onClick={onClose}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-white/10 transition-all backdrop-blur-md cursor-pointer"
                aria-label="Fechar detalhes do projeto"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                <Badge variant="primary" size="md">
                  {project.categoryLabel}
                </Badge>
              </div>
            </div>

            {/* Conteúdo com Scroll Interno Fluido */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-5 sm:space-y-6 flex-1">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>

              {/* Destaques Técnicos */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="bg-surface-200/80 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                  <h4 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Destaques da Solução
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tecnologias Utilizadas */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 sm:mb-3">
                  Tecnologias & Ferramentas
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer com Botões de Ação Adaptados ao Mobile */}
            <div className="p-4 sm:p-6 bg-surface-200/95 border-t border-white/10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 shrink-0 pb-safe">
              <Button variant="ghost" onClick={onClose} className="w-full sm:w-auto py-2.5">
                Fechar
              </Button>
              {project.githubUrl && (
                <Button
                  variant="outline"
                  icon={<GithubIcon size={16} />}
                  href={project.githubUrl}
                  target="_blank"
                  className="w-full sm:w-auto py-2.5"
                >
                  Ver no GitHub
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  variant="primary"
                  icon={<ExternalLink className="w-4 h-4" />}
                  iconPosition="right"
                  href={project.demoUrl}
                  target="_blank"
                  className="w-full sm:w-auto py-2.5"
                >
                  Abrir Demonstração
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
