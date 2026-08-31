import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { profileData } from '../../data/profile';
import { Wrench, Code2, Award, Zap, CheckCircle2, Laptop } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Wrench className="w-5 h-5 text-indigo-400" />,
      title: "Rigor e Precisão de Engenharia",
      description: "Bagagem sólida em ferramentas de precisão como SolidWorks e projetos mecânicos, traduzindo atenção milimétrica a detalhes para o código e arquitetura de software."
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: "Desenvolvimento Fullstack Moderno",
      description: "Construção de aplicações completas com React, TypeScript, Node.js e Python, prezando por componentes modulares, tipagem robusta e performance."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Foco em Soluções Reais",
      description: "Experiência prática em identificar gargalos e criar ferramentas que simplificam rotinas (como calculadoras industriais e sistemas de controle)."
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      title: "Evolução Contínua com DevClub",
      description: "Imersão constante em metodologias ágeis, Clean Code, arquitetura de sistemas e boas práticas exigidas pelo mercado de tecnologia."
    }
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Conheça Minha História"
          title="Do Chão de Fábrica ao"
          highlight="Código de Alto Nível"
          description="Descubra como a transição da engenharia técnica para a tecnologia potencializa a criação de software confiável e inteligente."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Texto Narrativo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-surface-100/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-5">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Laptop className="w-6 h-6 text-primary" />
                <span>Uma trajetória guiada pela resolução de problemas</span>
              </h3>

              {profileData.fullBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Código Limpo & Escalável</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Entrega Orientada a Resultados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mentalidade Ágil</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Cards dos Pilares de Competência */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-surface-100/50 hover:bg-surface-100/80 border border-white/10 hover:border-primary/40 rounded-2xl p-5 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/40 transition-all">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

