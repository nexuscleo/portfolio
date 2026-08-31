import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { skillCategories } from '../../data/skills';
import { Layout, Server, Cpu, Sparkles, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Layout className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    engineering: <Cpu className="w-4 h-4" />,
    tools: <Sparkles className="w-4 h-4" />
  };

  const tabs = [
    { id: 'all', label: 'Todas as Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'engineering', label: 'Engenharia & CAD' },
    { id: 'tools', label: 'Metodologias' }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Stack Tecnológica"
          title="Competências &"
          highlight="Ferramentas Dominadas"
          description="Um conjunto diversificado de tecnologias web, linguagens de programação e softwares de engenharia."
        />

        {/* Abas de Filtro de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-slate-950 shadow-lg shadow-primary/20 scale-105'
                    : 'bg-surface-100/70 hover:bg-surface-100 text-slate-300 border border-white/10 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Categorias e Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-100/70 border border-white/10 hover:border-primary/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    {categoryIcons[cat.category] || <Sparkles className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center gap-2 bg-surface-200/90 hover:bg-surface-200 border border-white/10 hover:border-primary/40 px-3.5 py-2 rounded-xl transition-all duration-200"
                    >
                      <Check className="w-3.5 h-3.5 text-primary group-hover/skill:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/skill:text-white">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-semibold text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

