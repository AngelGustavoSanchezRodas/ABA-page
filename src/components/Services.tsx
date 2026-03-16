import React from 'react';
import { motion } from 'framer-motion';
import { Code, LineChart, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  index: number;
  icon: React.ReactNode;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  icon,
  accentColor,
  accentBg,
  accentBorder,
  badge,
  title,
  description,
  features,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
  >
    {/* Accent top border */}
    <div className={`absolute top-0 left-0 w-full h-1 ${accentBg}`} />

    {/* Icon */}
    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${accentBg} bg-opacity-15 mb-6`}>
      <span className={accentColor}>{icon}</span>
    </div>

    {/* Badge */}
    <span
      className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${accentBg} bg-opacity-10 ${accentColor} mb-4`}
    >
      {badge}
    </span>

    {/* Title */}
    <h3 className="text-2xl font-bold text-[#3b3f46] mb-3 leading-snug">{title}</h3>

    {/* Description */}
    <p className="text-gray-500 text-base leading-relaxed mb-6">{description}</p>

    {/* Features list */}
    <ul className="space-y-2">
      {features.map((feat) => (
        <li key={feat} className="flex items-center gap-2 text-sm font-medium text-gray-600">
          <CheckCircle2 size={16} className={accentColor} />
          {feat}
        </li>
      ))}
    </ul>

    {/* Subtle glow on hover */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ boxShadow: `inset 0 0 0 2px ${accentBorder}` }}
    />
  </motion.div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-[-8%] w-72 h-72 rounded-full bg-[#43b5a9]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-8%] w-72 h-72 rounded-full bg-[#ce4a7e]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#dfa135] bg-[#dfa135]/10 px-4 py-1.5 rounded-full mb-4">
            Lo que hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3b3f46] leading-tight mb-4">
            Nuestras Soluciones{' '}
            <span className="text-[#43b5a9]">Tecnológicas</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Dos pilares especializados que se complementan para hacer crecer tu negocio de forma integral y sostenible.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            index={0}
            icon={<Code size={28} />}
            accentColor="text-[#43b5a9]"
            accentBg="bg-[#43b5a9]"
            accentBorder="#43b5a9"
            badge="Desarrollo Web"
            title="Desarrollo Web a Medida"
            description="Páginas web ultrarrápidas que cargan en menos de 2 segundos. Creamos catálogos digitales y sitios corporativos optimizados para que tus clientes te contacten directo por WhatsApp."
            features={[
              'Landing Pages de Alta Conversión',
              'Sitios Web Corporativos Dinámicos',
              'Optimización para Buscadores y Velocidad',
            ]}
          />
          <ServiceCard
            index={1}
            icon={<LineChart size={28} />}
            accentColor="text-[#ce4a7e]"
            accentBg="bg-[#ce4a7e]"
            accentBorder="#ce4a7e"
            badge="Análisis de Datos"
            title="Análisis de Datos"
            description="Ponemos orden en tu negocio. Limpiamos tus bases de datos y creamos herramientas visuales para que sepas exactamente cuánto vendes y cuánto gastas sin perder horas."
            features={[
              'Automatización de Reportes (Excel/Google Sheets)',
              'Tableros de Control de Ventas y Gastos',
              'Análisis de Rentabilidad y Crecimiento',
            ]}
          />
        </div>
      </div>
    </section>
  );
};
