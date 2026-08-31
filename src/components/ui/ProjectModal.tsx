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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
            className="relative w-full max-w-3xl bg-surface-100 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
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

              {/* Botão Fechar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-white/10 transition-all backdrop-blur-md cursor-pointer"
                aria-label="Fechar detalhes do projeto"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <Badge variant="primary" size="md">
                  {project.categoryLabel}
                </Badge>
              </div>
            </div>

            {/* Conteúdo com Scroll Interno se Necessário */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-slate-300 text-base leading-relaxed">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>

              {/* Destaques Técnicos */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="bg-surface-200/80 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Destaques da Solução
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tecnologias Utilizadas */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Tecnologias & Ferramentas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer com Botões de Ação */}
            <div className="p-6 bg-surface-200/90 border-t border-white/10 flex flex-wrap items-center justify-end gap-3 shrink-0">
              <Button variant="ghost" onClick={onClose}>
                Fechar
              </Button>
              {project.githubUrl && (
                <Button
                  variant="outline"
                  icon={<GithubIcon size={16} />}
                  href={project.githubUrl}
                  target="_blank"
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

