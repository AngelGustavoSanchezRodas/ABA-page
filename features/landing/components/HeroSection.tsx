'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, LineChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-brand-turquoise/10 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full bg-brand-magenta/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Texto y CTAs */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mustard/10 text-brand-mustard font-semibold text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mustard opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mustard"></span>
              </span>
              Innovación Digital
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
              Transformamos tus{' '}
              <span className="text-brand-turquoise">ideas en código</span> y tus{' '}
              <span className="text-brand-magenta">datos en decisiones</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Somos tu aliado tecnológico. Creamos experiencias web modernas, rápidas y enfocadas
              en resultados, y extraemos el verdadero valor de tus datos para impulsar tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-turquoise text-white px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-turquoise/30"
              >
                Agenda una Asesoría Gratuita
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-slate-700 border-2 border-slate-300 px-8 py-3.5 rounded-full font-bold hover:border-brand-turquoise hover:text-brand-turquoise transition-all"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Badges de confianza */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Code size={18} className="text-brand-turquoise" />
                Desarrollo a medida
              </div>
              <div className="flex items-center gap-2">
                <LineChart size={18} className="text-brand-magenta" />
                Data-driven
              </div>
            </div>
          </motion.div>

          {/* Imagen Hero — LCP */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-panel border border-slate-200/50 aspect-[4/3]">
              <Image
                src="/hero.png"
                alt="Dashboard de Análisis y Desarrollo"
                fill
                priority
                className="object-cover transform hover:scale-105 transition-transform duration-700 opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Tarjeta flotante decorativa */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl shadow-xl border border-slate-200 flex items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-brand-mustard/20 p-3 rounded-lg flex-shrink-0">
                <LineChart className="text-brand-mustard" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Crecimiento</p>
                <p className="text-lg font-bold text-slate-900">+120%</p>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">
                  Optimización de visibilidad y eficiencia digital
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
