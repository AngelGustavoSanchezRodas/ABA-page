'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorCheck, FileText, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '@/shared/components/ui/GlassCard';

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  accentColor: string;
  accentBgClass: string;
  shadowGlow: string;
}

const services: ServiceItem[] = [
  {
    id: 'soluciones-web',
    title: 'Desarrollo de Software y Web',
    badge: 'Expansión',
    description: 'Creamos sitios y sistemas que te ayudan a vender, organizar pedidos y dejar de depender de tareas manuales.',
    icon: <Code2 size={28} />,
    features: [
      'Sitios Web & Landing Pages',
      'Sistemas Web Escalables',
      'Puntos de Venta (POS)',
    ],
    accentColor: 'text-brand-tech-blue',
    accentBgClass: 'bg-brand-tech-blue',
    shadowGlow: 'hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.4)]',
  },
  {
    id: 'sistemas-excel',
    title: 'Sistemas en Excel',
    badge: 'Gestión Interna',
    description: 'Convertimos tus hojas de cálculo en herramientas claras para llevar ventas, inventario y operaciones desde un solo lugar.',
    icon: <MonitorCheck size={28} />,
    features: [
      'Dashboards Interactivos',
      'Automatización de Procesos',
      'Interfaces Gráficas Personalizadas',
    ],
    accentColor: 'text-brand-purple',
    accentBgClass: 'bg-brand-purple',
    shadowGlow: 'hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]',
  },
  {
    id: 'professional-docs',
    title: 'Documentos Profesionales',
    badge: 'Estandarización',
    description: 'Diseñamos documentos y formatos que mantienen una presentación uniforme y te ahorran tiempo en el trabajo diario.',
    icon: <FileText size={28} />,
    features: [
      'Plantillas Corporativas',
      'Formatos Automatizados',
      'Documentación Estructurada',
    ],
    accentColor: 'text-brand-orange',
    accentBgClass: 'bg-brand-orange',
    shadowGlow: 'hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)]',
  }
];

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => (
  <motion.div
    id={service.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="h-full"
  >
    <GlassCard 
      className={`h-full flex flex-col items-start p-8 rounded-2xl relative border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${service.shadowGlow} group`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${service.accentBgClass} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.accentBgClass}/20 mb-6 transition-transform duration-300 group-hover:scale-110`}>
        <span className={service.accentColor}>{service.icon}</span>
      </div>

      <span
        className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${service.accentBgClass}/20 ${service.accentColor} mb-4 border border-white/5`}
      >
        {service.badge}
      </span>

      <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{service.title}</h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-8">{service.description}</p>

      <ul className="space-y-3 mt-auto w-full pt-6 border-t border-white/5">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-sm font-medium text-slate-300">
            <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${service.accentColor}`} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  </motion.div>
);

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/20 border border-brand-orange/30 px-4 py-1.5 rounded-full mb-4">
            Lo que hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Herramientas para trabajar mejor
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Desde una página web hasta un sistema interno: resolvemos el problema que tienes delante, sin añadir procesos innecesarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
