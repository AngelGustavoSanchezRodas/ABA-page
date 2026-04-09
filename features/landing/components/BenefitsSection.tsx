'use client';

import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Zap, Layers, Target } from 'lucide-react';
import { GlassCard } from '@/shared/components/ui/GlassCard';

interface Benefit {
  icon: ReactNode;
  accentColor: string;
  accentBg: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Zap size={26} />,
    accentColor: 'text-brand-mustard',
    accentBg: 'bg-brand-mustard/10',
    title: 'Velocidad que vende',
    description: 'Páginas que cargan al instante para que no pierdas ni un solo cliente por culpa de la espera. Velocidad optimizada para móviles.',
  },
  {
    icon: <Layers size={26} />,
    accentColor: 'text-brand-turquoise',
    accentBg: 'bg-brand-turquoise/10',
    title: 'Tecnología sin dolores de cabeza',
    description: 'Desarrollamos sitios web robustos que no se rompen. Tu página estará siempre lista para recibir visitas sin errores técnicos.',
  },
  {
    icon: <Target size={26} />,
    accentColor: 'text-brand-magenta',
    accentBg: 'bg-brand-magenta/10',
    title: 'Datos para ganar más',
    description: 'Convierte los números de tu negocio en una guía clara. Te mostramos exactamente qué está pasando en tu empresa para que sepas dónde invertir.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      {/* Decorative accent line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[600px] h-48 bg-brand-mustard/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-magenta bg-brand-magenta/10 px-4 py-1.5 rounded-full mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Hacemos que tu tecnología trabaje para ti, no al revés.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            No solo entregamos proyectos, construimos ventajas competitivas reales para tu empresa.
          </p>
        </motion.div>

        {/* Cards grid with stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={itemVariants}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col group hover:border-slate-500/50">
                {/* Icon bubble */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${b.accentBg} mb-6`}>
                  <span className={b.accentColor}>{b.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {b.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                  {b.description}
                </p>

                {/* Subtle bottom accent */}
                <div className={`mt-6 w-10 h-1 rounded-full ${b.accentColor.replace('text-', 'bg-')} group-hover:w-full transition-all duration-500 opacity-80`} />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
