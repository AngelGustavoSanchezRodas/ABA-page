import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Zap, Layers, Target } from 'lucide-react';

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
    accentColor: 'text-[#dfa135]',
    accentBg: 'bg-[#dfa135]/10',
    title: 'Velocidad que vende',
    description: 'Páginas que cargan al instante para que no pierdas ni un solo cliente por culpa de la espera. Velocidad optimizada para móviles.',
  },
  {
    icon: <Layers size={26} />,
    accentColor: 'text-[#43b5a9]',
    accentBg: 'bg-[#43b5a9]/10',
    title: 'Tecnología sin dolores de cabeza',
    description: 'Desarrollamos sitios web robustos que no se rompen. Tu página estará siempre lista para recibir visitas sin errores técnicos.',
  },
  {
    icon: <Target size={26} />,
    accentColor: 'text-[#ce4a7e]',
    accentBg: 'bg-[#ce4a7e]/10',
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

export const Benefits = () => {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative accent line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#dfa135]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ce4a7e] bg-[#ce4a7e]/10 px-4 py-1.5 rounded-full mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3b3f46] leading-tight mb-4">
            Hacemos que tu tecnología trabaje para ti, no al revés.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
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
              className="group flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon bubble */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${b.accentBg} mb-6`}>
                <span className={b.accentColor}>{b.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-[#3b3f46] mb-3 leading-snug">
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {b.description}
              </p>

              {/* Subtle bottom accent */}
              <div className={`mt-6 w-10 h-1 rounded-full ${b.accentBg} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
