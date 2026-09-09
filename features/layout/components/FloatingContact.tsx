'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, X } from 'lucide-react';
import { siteConfig, siteLinks } from '@/lib/config/site';

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-80 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-bottom-right"
          >
            <div className="p-5 border-b border-white/10 bg-gradient-to-r from-brand-tech-blue/20 to-brand-purple/20">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                ¿Necesitas ayuda rápida?
              </h3>
              <p className="text-sm text-slate-300 mt-1">Te responderé en menos de 24 horas.</p>
            </div>
            
            <div className="p-4 flex flex-col gap-3">
              {siteConfig.phone && (
                <a
                  href={siteLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Chat por WhatsApp</div>
                    <div className="text-xs text-slate-400 mt-0.5">La vía más rápida</div>
                  </div>
                </a>
              )}
              
              <a
                href={siteLinks.mailto}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-tech-blue/50 hover:bg-brand-tech-blue/10 transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-12 h-12 rounded-full bg-brand-tech-blue/20 flex items-center justify-center text-brand-tech-blue group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Enviar un Correo</div>
                  <div className="text-xs text-slate-400 mt-0.5">Para consultas extensas</div>
                </div>
              </a>
              <a
                href={siteLinks.phone}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-purple/50 hover:bg-brand-purple/10 transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Llamar ahora</div>
                  <div className="text-xs text-slate-400 mt-0.5">{siteConfig.phone}</div>
                </div>
              </a>
            </div>
            <div className="px-4 py-3 bg-black/20 text-center text-xs text-slate-500">
              Respuesta en menos de 24 horas
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        type="button"
        aria-label={isOpen ? 'Cerrar opciones de contacto' : 'Abrir opciones de contacto'}
        aria-expanded={isOpen}
        className="w-16 h-16 rounded-full bg-brand-tech-blue text-white shadow-lg shadow-brand-tech-blue/40 flex items-center justify-center focus:outline-none border-2 border-white/10"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
