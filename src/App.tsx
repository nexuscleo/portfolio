import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { GitHubStats } from './components/sections/GitHubStats';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        const sectionId = section.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-slate-100 relative selection:bg-primary/30 selection:text-primary-light">
      {/* Luzes Ambientes de Fundo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px]" />
      </div>

      {/* Navbar com detecção da seção ativa */}
      <Navbar activeSection={activeSection} />

      {/* Conteúdo Principal com todas as seções */}
      <main className="flex-grow z-10 space-y-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <GitHubStats />
        <Contact />
      </main>

      {/* Rodapé Moderno */}
      <Footer />
    </div>
  );
};

export default App;

