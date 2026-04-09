'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { GlassCard } from '@/shared/components/ui/GlassCard';

// Datos de contacto — ajusta número y correo según la empresa
const WHATSAPP_NUMBER = '50212345678';
const EMAIL_ADDRESS   = 'hola@abaestudios.com';

interface ContactCardProps {
  index: number;
  href: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  accentColor: string;
  accentBg: string;
  accentRing: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  index,
  href,
  icon,
  badge,
  title,
  subtitle,
  accentColor,
  accentBg,
  accentRing,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Entrada escalonada al entrar en viewport
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.55, delay: index * 0.15 }}
    // Efecto hover táctil delegado a la animacion de tailwind y framer motion
    whileTap={{ scale: 0.98 }}
    className="block group focus:outline-none"
  >
    <GlassCard className={`h-full flex flex-col items-start gap-5 border-2 ${accentRing} cursor-pointer`}>
      {/* Blob decorativo de fondo que emerge en hover */}
      <div
        className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${accentBg.replace('/10', '/30')} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl`}
      />

      {/* Ícono */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${accentBg} ${accentColor}`}>
        {icon}
      </div>

      {/* Badge */}
      <span className={`text-xs font-bold uppercase tracking-widest ${accentColor} opacity-90`}>
        {badge}
      </span>

      {/* Título y subtítulo */}
      <div>
        <h3 className="text-xl font-extrabold text-white mb-1 leading-snug relative z-10">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed relative z-10">{subtitle}</p>
      </div>

      {/* CTA arrow */}
      <div className={`flex items-center gap-2 text-sm font-bold ${accentColor} mt-auto relative z-10`}>
        Iniciar conversación
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </GlassCard>
  </motion.a>
);

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute bottom-0 left-[-10%] w-80 h-80 rounded-full bg-brand-turquoise/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-[-10%] w-80 h-80 rounded-full bg-brand-mustard/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-turquoise/10 text-brand-turquoise text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            <Sparkles size={14} />
            Hablemos
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            ¿Listo para{' '}
            <span className="text-brand-turquoise">impulsar</span>{' '}
            tu negocio?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Sin formularios complicados. Elige la vía que prefieras y cuéntanos sobre tu próximo proyecto.
          </p>
        </motion.div>

        {/* Tarjetas de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ContactCard
            index={0}
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola ABA Estudios, me interesa mejorar la tecnología de mi negocio y me gustaría una asesoría.")}`}
            icon={<MessageCircle size={26} />}
            badge="Respuesta inmediata"
            title="Hablemos por WhatsApp"
            subtitle="Escríbenos y despeja tus dudas al instante. Atención personalizada sin compromisos."
            accentColor="text-brand-turquoise"
            accentBg="bg-brand-turquoise/10"
            accentRing="border-brand-turquoise/30 hover:border-brand-turquoise/70"
          />
          <ContactCard
            index={1}
            href={`mailto:${EMAIL_ADDRESS}?subject=Consulta%20sobre%20servicios%20ABA%20Estudios`}
            icon={<Mail size={26} />}
            badge="Propuesta detallada"
            title="Envíanos un Correo"
            subtitle="Cuéntanos los detalles de tu proyecto. Analizamos tu caso y te enviamos una propuesta clara."
            accentColor="text-brand-mustard"
            accentBg="bg-brand-mustard/10"
            accentRing="border-brand-mustard/30 hover:border-brand-mustard/70"
          />
        </div>
      </div>
    </section>
  );
};
