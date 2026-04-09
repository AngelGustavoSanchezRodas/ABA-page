'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X, Sparkles } from 'lucide-react';

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = "Hola ABA Estudios, me interesa mejorar la tecnología de mi negocio y me gustaría una asesoría.";
  const emailSubject = "Consulta sobre servicios ABA Estudios";

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-72 glass-panel bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/20 bg-brand-turquoise/80 text-white rounded-t-2xl">
              <h3 className="font-bold flex items-center gap-2">
                <Sparkles size={18} /> ¿En qué podemos ayudarte?
              </h3>
              <p className="text-xs text-white/80 mt-1">Elige cómo prefieres contactarnos</p>
            </div>
            <div className="p-2 flex flex-col gap-1">
              <a
                href={`https://wa.me/50212345678?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">WhatsApp</div>
                  <div className="text-xs text-slate-500">Respuesta rápida</div>
                </div>
              </a>
              <a
                href={`mailto:hola@abaestudios.com?subject=${encodeURIComponent(emailSubject)}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 rounded-full bg-brand-mustard/20 flex items-center justify-center text-brand-mustard group-hover:bg-brand-mustard group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Correo Electrónico</div>
                  <div className="text-xs text-slate-500">Propuesta detallada</div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        className="w-14 h-14 rounded-full bg-brand-turquoise text-white shadow-lg shadow-brand-turquoise/30 flex items-center justify-center focus:outline-none"
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
