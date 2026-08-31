import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Terminal, 
  MessageSquare, 
  Home, 
  User, 
  Cpu, 
  FolderGit2, 
  History, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { scrollToSection } from '../../utils/helpers';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll da página de fundo quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Início', id: 'home', icon: <Home className="w-4 h-4" /> },
    { label: 'Sobre', id: 'sobre', icon: <User className="w-4 h-4" /> },
    { label: 'Habilidades', id: 'habilidades', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Projetos', id: 'projetos', icon: <FolderGit2 className="w-4 h-4" /> },
    { label: 'Jornada', id: 'jornada', icon: <History className="w-4 h-4" /> },
    { label: 'Contato', id: 'contato', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-lg shadow-black/25'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          aria-label="Ir para o início"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-primary to-cyan-400 p-[1px] shadow-md shadow-primary/20 group-hover:shadow-primary/40 transition-shadow shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1 leading-none">
              Cleomar<span className="text-primary">.dev</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-slate-400 block mt-0.5">
              Fullstack Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-100/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer relative ${
                  isActive
                    ? 'text-white bg-primary/20 text-primary-light shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Desktop & Hamburger Mobile */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleNavClick('contato')}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary-hover hover:to-indigo-500 text-slate-950 font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fale Comigo</span>
          </button>

          {/* Botão WhatsApp Rápido no Mobile */}
          <a
            href={profileData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Direto"
            className="sm:hidden p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Hamburger Menu Toggle com área de toque de 44px */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-surface-100/90 border border-white/10 text-slate-200 hover:text-white active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? 'Fechar menu móvel' : 'Abrir menu móvel'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu com Animação Fluida */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop escuro com desfoque */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 top-[60px] bg-slate-950/80 backdrop-blur-md z-30"
            />

            {/* Menu deslizante */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden fixed inset-x-0 top-[60px] max-h-[calc(100vh-60px)] overflow-y-auto bg-slate-950/95 border-b border-white/15 p-5 shadow-2xl z-40 pb-safe"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-primary/20 text-primary border border-primary/30 font-semibold'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`p-1.5 rounded-lg ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-400 bg-white/5'}`}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {isActive && <Sparkles className="w-4 h-4 text-primary" />}
                    </button>
                  );
                })}

                {/* Botões de Ação no Rodapé do Menu Mobile */}
                <div className="pt-4 mt-3 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => handleNavClick('contato')}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-indigo-600 text-slate-950 font-bold text-sm py-3.5 rounded-2xl shadow-lg shadow-primary/25 active:scale-98 transition-transform"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Iniciar Contato</span>
                  </button>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <a
                      href={profileData.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
