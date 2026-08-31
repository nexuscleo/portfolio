import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/helpers';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Elementos Decorativos de Fundo / Aurora Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-primary/20 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-100/90 border border-white/10 backdrop-blur-md shadow-lg shadow-primary/5 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200">
              {profileData.status.text}
            </span>
          </motion.div>

          {/* Avatar com Moldura de Gradiente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-8 group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-indigo-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-glow" />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-slate-950">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'img/foto-perfil-1.jpg';
                }}
                className="w-full h-full object-cover rounded-full border-2 border-white/10"
              />
            </div>
            <div className="absolute bottom-1 right-2 bg-slate-900 border border-white/15 p-2 rounded-full shadow-lg text-primary">
              <Code2 className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Título Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Olá, eu sou o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-300 to-cyan-400 drop-shadow-[0_0_25px_rgba(129,140,248,0.4)]">
                Cleomar
              </span>
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-indigo-200/90 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Desenvolvedor Fullstack • Especialista em Soluções Web</span>
            </p>
          </motion.div>

          {/* Breve Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            {profileData.shortBio}
          </motion.p>

          {/* Botões de Ação / CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              onClick={() => scrollToSection('projetos')}
            >
              Explorar Projetos
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<MessageCircle className="w-5 h-5 text-emerald-400" />}
              href={profileData.whatsapp}
              target="_blank"
            >
              Conversar no WhatsApp
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<GithubIcon size={18} />}
              href={profileData.github}
              target="_blank"
            >
              GitHub
            </Button>
          </motion.div>

          {/* Cards de Métricas / Destaques Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl"
          >
            {profileData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-surface-100/60 hover:bg-surface-100/90 border border-white/10 hover:border-primary/30 p-5 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/10"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {metric.label}
                </div>
                {metric.sublabel && (
                  <div className="text-xs text-slate-400 mt-0.5">
                    {metric.sublabel}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

