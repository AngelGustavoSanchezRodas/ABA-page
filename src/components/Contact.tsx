import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowRight, Sparkles } from 'lucide-react';

// Datos de contacto — ajusta número y correo según la empresa
const WHATSAPP_NUMBER = '50212345678'; // Formato internacional sin + ni espacios
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
    // Efecto hover táctil
    whileHover={{ scale: 1.03, y: -4 }}
    whileTap={{ scale: 0.98 }}
    className={`group relative flex flex-col items-start gap-5 p-8 bg-white rounded-3xl border-2 ${accentRing} shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden`}
  >
    {/* Blob decorativo de fondo que emerge en hover */}
    <div
      className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${accentBg} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl`}
    />

    {/* Ícono */}
    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${accentBg} ${accentColor}`}>
      {icon}
    </div>

    {/* Badge */}
    <span className={`text-xs font-bold uppercase tracking-widest ${accentColor} opacity-80`}>
      {badge}
    </span>

    {/* Título y subtítulo */}
    <div>
      <h3 className="text-xl font-extrabold text-[#3b3f46] mb-1 leading-snug">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{subtitle}</p>
    </div>

    {/* CTA arrow */}
    <div className={`flex items-center gap-2 text-sm font-bold ${accentColor} mt-auto`}>
      Iniciar conversación
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </div>
  </motion.a>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute bottom-0 left-[-10%] w-80 h-80 rounded-full bg-[#43b5a9]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-[-10%] w-80 h-80 rounded-full bg-[#dfa135]/10 blur-3xl pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#43b5a9]/10 text-[#43b5a9] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            <Sparkles size={14} />
            Hablemos
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3b3f46] leading-tight mb-5">
            ¿Listo para{' '}
            <span className="text-[#43b5a9]">impulsar</span>{' '}
            tu negocio?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Sin formularios complicados. Elige la vía que prefieras y cuéntanos sobre tu próximo proyecto.
          </p>
        </motion.div>

        {/* Tarjetas de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ContactCard
            index={0}
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.`}
            icon={<MessageCircle size={26} />}
            badge="Respuesta inmediata"
            title="Hablemos por WhatsApp"
            subtitle="Cuéntanos tu idea. Te respondemos en menos de 24 horas y agendamos una llamada sin compromiso."
            accentColor="text-[#43b5a9]"
            accentBg="bg-[#43b5a9]/10"
            accentRing="border-[#43b5a9]/20 hover:border-[#43b5a9]/60"
          />
          <ContactCard
            index={1}
            href={`mailto:${EMAIL_ADDRESS}?subject=Consulta%20sobre%20servicios%20ABA%20Estudios`}
            icon={<Mail size={26} />}
            badge="Propuesta detallada"
            title="Envíanos un Correo"
            subtitle="Prefiero detallar mi proyecto por escrito. Te enviamos una propuesta completa en 48 horas."
            accentColor="text-[#dfa135]"
            accentBg="bg-[#dfa135]/10"
            accentRing="border-[#dfa135]/20 hover:border-[#dfa135]/60"
          />
        </div>
      </div>
    </section>
  );
};
