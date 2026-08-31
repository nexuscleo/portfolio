import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, MessageSquare, Sparkles } from 'lucide-react';
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

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Jornada', id: 'jornada' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-cyan-400 p-[1px] shadow-md shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1">
              Cleomar<span className="text-primary">.dev</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 block -mt-1">
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

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contato')}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary-hover hover:to-indigo-500 text-slate-950 font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fale Comigo</span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-surface-100/80 border border-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Abrir menu móvel"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-2xl border-b border-white/15 p-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-primary/20 text-primary border border-primary/30 font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-primary" />}
                </button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/10">
              <button
                onClick={() => handleNavClick('contato')}
                className="w-full flex items-center justify-center gap-2 bg-primary text-slate-950 font-bold text-sm py-3 rounded-xl shadow-lg shadow-primary/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Iniciar Contato</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

