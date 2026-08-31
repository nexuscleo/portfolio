import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { copyToClipboard, triggerConfetti } from '../../utils/helpers';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  MapPin
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toast, setToast] = useState<{ isVisible: boolean; message: string; type: 'success' | 'error' }>({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        isVisible: true,
        message: 'Por favor, preencha todos os campos obrigatórios.',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    // Simulação de envio com efeito de comemoração
    setTimeout(() => {
      setIsSubmitting(false);
      triggerConfetti();
      setToast({
        isVisible: true,
        message: 'Mensagem enviada com sucesso! Responderei em breve.',
        type: 'success'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(profileData.email);
    if (success) {
      setCopiedEmail(true);
      setToast({
        isVisible: true,
        message: 'E-mail copiado para a área de transferência!',
        type: 'success'
      });
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Vamos Conversar"
          title="Pronto para Criar Algo"
          highlight="Incrível Juntos?"
          description="Tem um projeto em mente, uma oportunidade profissional ou deseja trocar ideias sobre engenharia e código? Entre em contato!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Coluna Esquerda: Cartões de Contato Rápido */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-surface-100/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Canais Diretos</span>
              </h3>

              {/* Botão de Cópia de E-mail */}
              <div className="bg-surface-200/90 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-slate-400 block">E-mail Profissional</span>
                    <span className="text-sm font-semibold text-white truncate block">
                      {profileData.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0 cursor-pointer"
                  title="Copiar e-mail"
                  aria-label="Copiar e-mail"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Card WhatsApp */}
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-200/90 hover:bg-surface-200 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-4 flex items-center justify-between transition-all group block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      Enviar mensagem direta
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                  Online
                </span>
              </a>

              {/* Redes Sociais */}
              <div className="pt-2 space-y-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Redes & Portfólio
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-surface-200/70 hover:bg-surface-200 border border-white/10 hover:border-primary/40 flex items-center gap-2.5 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                  >
                    <LinkedinIcon size={16} className="text-primary" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-surface-200/70 hover:bg-surface-200 border border-white/10 hover:border-primary/40 flex items-center gap-2.5 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                  >
                    <GithubIcon size={16} className="text-slate-200" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Baseado no Brasil • Atuação Remota Global</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-surface-100/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Carlos Silva"
                    required
                    className="w-full bg-surface-200/90 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@empresa.com"
                    required
                    className="w-full bg-surface-200/90 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ex: Proposta de Projeto / Oportunidade"
                  className="w-full bg-surface-200/90 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Olá Cleomar, gostaria de conversar sobre..."
                  required
                  className="w-full bg-surface-200/90 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder:text-slate-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Enviando mensagem...' : 'Enviar Mensagem'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </section>
  );
};

