import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { timelineData } from '../../data/timeline';
import { Badge } from '../ui/Badge';
import { Briefcase, GraduationCap, Trophy, Calendar } from 'lucide-react';

export const Timeline: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'milestone':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="jornada" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Evolução & Marcos"
          title="Minha Jornada"
          highlight="Profissional"
          description="Acompanhe a linha do tempo da minha carreira técnica, unindo engenharia e tecnologia."
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Linha Central do Timeline */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-indigo-600 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Ícone no Centro da Linha */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-primary shadow-lg shadow-primary/30 flex items-center justify-center z-10">
                    {getCategoryIcon(item.category)}
                  </div>

                  {/* Espaço Vazio para Alinhamento Alternado */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card de Conteúdo */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="bg-surface-100/70 hover:bg-surface-100/90 border border-white/10 hover:border-primary/30 p-6 rounded-3xl backdrop-blur-md transition-all duration-300 shadow-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-bold text-primary tracking-wide">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>

                      <h4 className="text-xs font-semibold text-slate-400 mb-3">
                        {item.subtitle}
                      </h4>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.skillsUsed && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                          {item.skillsUsed.map((skill) => (
                            <Badge key={skill} variant="secondary" size="sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

