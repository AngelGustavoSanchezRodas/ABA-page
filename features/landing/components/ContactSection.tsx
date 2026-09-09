'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MessageCircle, Phone } from 'lucide-react';
import { GlassCard } from '@/shared/components/ui/GlassCard';
import { createContactMailto, siteConfig, siteLinks, type ContactFormData } from '@/lib/config/site';

export const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', project: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = createContactMailto(formData);
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-tech-blue bg-brand-tech-blue/20 border border-brand-tech-blue/30 px-4 py-1.5 rounded-full mb-4">
            Empecemos
          </span>
          <h2 id="contact-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Háblanos de tu <span className="text-brand-tech-blue">Proyecto</span>
          </h2>
          <p className="text-slate-400 text-lg">Déjame tus datos y te responderé en menos de 24 horas.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Elige cómo contactarnos</h3>
            <p className="text-sm leading-relaxed text-slate-400">
            Cuéntame qué necesitas y encontraremos la mejor solución para tu negocio.
            </p>
            <div className="space-y-3">
              <a href={siteLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm transition-colors hover:border-[#25D366]/50 hover:bg-[#25D366]/10">
                <MessageCircle className="text-[#25D366]" size={21} />
                <span><strong className="block text-white">WhatsApp</strong><span className="text-slate-400">Respuesta rápida</span></span>
              </a>
              <a href={siteLinks.phone} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm transition-colors hover:border-brand-tech-blue/50 hover:bg-brand-tech-blue/10">
                <Phone className="text-brand-tech-blue" size={21} />
                <span><strong className="block text-white">Llamar ahora</strong><span className="text-slate-400">{siteConfig.phone}</span></span>
              </a>
              <a href={siteLinks.mailto} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm transition-colors hover:border-brand-purple/50 hover:bg-brand-purple/10">
                <Mail className="text-brand-purple" size={21} />
                <span><strong className="block text-white">Correo electrónico</strong><span className="text-slate-400">{siteConfig.email}</span></span>
              </a>
            </div>
          </div>

        <GlassCard className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl">
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-10"
              aria-live="polite"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje preparado!</h3>
              <p className="text-slate-400 mb-8 max-w-sm">Abrimos tu cliente de correo con los datos listos. Revisa el mensaje y confirma el envío.</p>
              <button 
                onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', project: '' }); }}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="w-full bg-[#1e293b]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-tech-blue focus:border-transparent transition-all shadow-inner"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full bg-[#1e293b]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-tech-blue focus:border-transparent transition-all shadow-inner"
                    placeholder="tucorreo@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-slate-300 ml-1">Detalles del Proyecto</label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-[#1e293b]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-tech-blue focus:border-transparent transition-all resize-none shadow-inner"
                  placeholder="Cuéntanos brevemente qué necesitas automatizar o desarrollar..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-tech-blue hover:bg-brand-tech-blue/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-brand-tech-blue/20 flex items-center justify-center gap-2 group"
              >
                Preparar Mensaje <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </GlassCard>
        </div>
      </div>
    </section>
  );
};
