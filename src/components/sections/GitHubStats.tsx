import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ExternalLink, Code2, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';

export const GitHubStats: React.FC = () => {
  const stats = [
    { label: "Repositórios Públicos", value: "28+", icon: <Code2 className="w-5 h-5 text-primary" /> },
    { label: "Linguagens Ativas", value: "6+", icon: <Terminal className="w-5 h-5 text-cyan-400" /> },
    { label: "Projetos em Produção", value: "15+", icon: <Sparkles className="w-5 h-5 text-amber-400" /> },
    { label: "Código Aberto & Comunidade", value: "100%", icon: <GithubIcon size={20} className="text-emerald-400" /> },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Atividade Open Source"
          title="Presença no"
          highlight="GitHub & Comunidade"
          description="Acompanhe meu ecossistema de projetos, repositórios de código aberto e contribuições contínuas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card Principal de Destaque GitHub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-surface-100/70 border border-white/10 hover:border-primary/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <GithubIcon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    nexuscleo
                  </h3>
                  <p className="text-xs text-slate-400">
                    Cleomar da Silva no GitHub
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
                href={profileData.github}
                target="_blank"
              >
                Seguir
              </Button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Desenvolvimento constante com repositórios públicos em TypeScript, Python, JavaScript e CSS moderno. Acesse para ver histórico de commits, forks e projetos experimentais.
            </p>

            {/* Grid com os 4 stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-surface-200/80 border border-white/10 p-4 rounded-2xl flex items-center gap-3"
                >
                  <div className="p-2 rounded-xl bg-white/5 shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card Secundário: Destaque de Repositórios e Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-surface-100/60 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> Top Repositórios
              </h4>
              <div className="space-y-3">
                <a
                  href="https://github.com/nexuscleo/livro-de-enoque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl bg-surface-200/60 hover:bg-surface-200 border border-white/10 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                      livro-de-enoque
                    </span>
                    <span className="text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      TypeScript
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    Aplicação web completa com SPA e navegação estruturada.
                  </p>
                </a>

                <a
                  href="https://github.com/nexuscleo/seno-sextavado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl bg-surface-200/60 hover:bg-surface-200 border border-white/10 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                      seno-sextavado
                    </span>
                    <span className="text-[11px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                      Engenharia / JS
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    Calculadora de tolerâncias trigonométricas para usinagem CNC.
                  </p>
                </a>

                <a
                  href="https://github.com/nexuscleo/the-cube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl bg-surface-200/60 hover:bg-surface-200 border border-white/10 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                      the-cube
                    </span>
                    <span className="text-[11px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      3D & Lógica
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    Simulador tridimensional de Cubo Mágico no navegador.
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

