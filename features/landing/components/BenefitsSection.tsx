'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Calculator, Package, Download, ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/shared/components/ui/GlassCard';

interface TemplateProduct {
  id: string;
  title: string;
  price: string;
  thumbnailIcon: React.ReactNode;
  accentClass: string;
}

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

const templates: TemplateProduct[] = [
  {
    id: 'tpl-1',
    title: 'Dashboard de Ventas (Excel)',
    price: '$29.99',
    thumbnailIcon: <FileSpreadsheet size={32} className="text-brand-orange" />,
    accentClass: 'hover:border-brand-orange/50',
  },
  {
    id: 'tpl-2',
    title: 'Cotizador Corporativo',
    price: '$19.99',
    thumbnailIcon: <Calculator size={32} className="text-brand-purple" />,
    accentClass: 'hover:border-brand-purple/50',
  },
  {
    id: 'tpl-3',
    title: 'Control de Inventario',
    price: '$34.99',
    thumbnailIcon: <Package size={32} className="text-brand-tech-blue" />,
    accentClass: 'hover:border-brand-tech-blue/50',
  },
  {
    id: 'tpl-4',
    title: 'Kit de RRHH Completo',
    price: '$49.99',
    thumbnailIcon: <FileSpreadsheet size={32} className="text-emerald-500" />,
    accentClass: 'hover:border-emerald-500/50',
  }
];

const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    title: 'Descubrimiento',
    description: 'Analizamos tus flujos de trabajo y detectamos cuellos de botella para diseñar la arquitectura ideal de tu nuevo sistema.'
  },
  {
    id: 'step-2',
    stepNumber: '02',
    title: 'Desarrollo Modular',
    description: 'Construimos tu plataforma web o sistema en Excel de forma iterativa, permitiéndote probar módulos a medida que avanzamos.'
  },
  {
    id: 'step-3',
    stepNumber: '03',
    title: 'Lanzamiento',
    description: 'Implementamos la solución final en tu equipo, asegurando la adopción y dejando las bases listas para futuras expansiones.'
  }
];

export const BenefitsSection = () => {
  return (
    <section id="paths" className="relative py-24 lg:py-32 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/20 border border-brand-purple/30 px-4 py-1.5 rounded-full mb-4">
            Dos formas de empezar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Empieza por lo que necesitas
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Puedes usar una plantilla para resolver algo puntual o trabajar conmigo en una herramienta hecha para tu operación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          <motion.div
            id="plantillas"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-8 sm:p-10 rounded-3xl border-t-4 border-t-brand-orange relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/10 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-all duration-500"></div>
              
              <div className="mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-wider mb-2">
                      <Download size={18} /> Soluciones listas
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-3">Plantillas Listas</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Plantillas profesionales para estandarizar procesos y resolver problemas operativos con mayor rapidez.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
                {templates.map(tpl => (
                  <div key={tpl.id} className={`p-4 rounded-xl border border-white/5 bg-white/5 transition-all duration-300 ${tpl.accentClass} hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 cursor-pointer`}>
                    <div className="w-full h-28 bg-[#0f172a] rounded-lg mb-4 flex items-center justify-center border border-white/5 shadow-inner">
                       {tpl.thumbnailIcon}
                    </div>
                    <div className="flex justify-between items-start mb-3 gap-2">
                       <h4 className="text-white font-bold text-sm leading-snug">{tpl.title}</h4>
                       <span className="text-brand-orange font-black text-sm">{tpl.price}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded w-full justify-center border border-emerald-400/20">
                       <Download size={12} /> Disponible bajo consulta
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <Link href="#contact" className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-brand-orange/20">
                  Consultar plantillas
                  <ArrowRight size={18} />
                </Link>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="h-full p-8 sm:p-10 rounded-3xl border-t-4 border-t-brand-tech-blue relative overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-tech-blue/10 rounded-full blur-2xl group-hover:bg-brand-tech-blue/20 transition-all duration-500"></div>
              
              <div className="mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 text-brand-tech-blue font-bold text-sm uppercase tracking-wider mb-2">
                  <Rocket size={18} /> Desarrollo a medida
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-3">Soluciones a Medida</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Sistemas web, plataformas POS y dashboards avanzados desarrollados específicamente para los flujos únicos de tu empresa.
                </p>
              </div>

              <div className="space-y-8 relative z-10 mb-10 pl-2">
                <div className="absolute top-6 bottom-6 left-[25px] w-[2px] bg-white/10"></div>
                
                {processSteps.map((step) => (
                  <div key={step.id} className="flex gap-6 group/step relative">
                     <div className="w-12 h-12 rounded-full bg-[#0f172a] border-2 border-white/20 flex items-center justify-center font-black text-slate-500 group-hover/step:border-brand-tech-blue group-hover/step:text-brand-tech-blue transition-colors duration-300 shrink-0 z-10 shadow-lg">
                        {step.stepNumber}
                     </div>
                     <div className="pt-1.5">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover/step:text-brand-tech-blue transition-colors">{step.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                     </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <Link href="#contact" className="w-full flex items-center justify-center gap-2 bg-brand-tech-blue text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-brand-tech-blue/20">
                  Agendar Proyecto
                  <ArrowRight size={18} />
                </Link>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
