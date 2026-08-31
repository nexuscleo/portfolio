import React from 'react';
import { Terminal, Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { scrollToSection } from '../../utils/helpers';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-primary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Perfil & Bio Rápida */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">
                Cleomar<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {profileData.tagline} Desenvolvendo aplicações web com arquitetura sólida, código limpo e foco em valor real.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Cleomar"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Cleomar"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Enviar E-mail para Cleomar"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('habilidades')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projetos')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Projetos & Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('jornada')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Trajetória
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Desenvolvimento React & TypeScript</li>
              <li>Aplicações Web SPA & APIs Node.js</li>
              <li>Ferramentas de Engenharia & Cálculos</li>
              <li>Design Responsivo & Tailwind CSS</li>
              <li>Código Limpo & Escalabilidade</li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior de Copyright e Botão Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            © {currentYear} {profileData.name} • Construído com{' '}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> em React & TypeScript.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 transition-all cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

