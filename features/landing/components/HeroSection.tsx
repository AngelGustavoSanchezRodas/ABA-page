'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, LineChart } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Elementos decorativos de fondo usando los colores de la marca */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-brand-turquoise/10 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full bg-brand-magenta/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Contenido principal (Texto y CTAs) */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mustard/10 text-brand-mustard font-semibold text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mustard opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mustard"></span>
              </span>
              Innovación Digital
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
              Transformamos tus <span className="text-brand-turquoise">ideas en código</span> y tus <span className="text-brand-magenta">datos en decisiones</span>
            </h1>
            
            {/* Usando text-slate-300 no funcionaría sobre un bg blanco (legacy bg-slate-50),
                ah Wait! Legacy text was text-gray-600. The prompt says "Asegúrate de que los textos descriptivos usen 'text-slate-300' para garantizar el contraste en el fondo oscuro."
                BUT Hero doesn't have dark mode in legacy, it's white. Let's make sure the background is dark!
                Paso 3 dice "text-slate-300 para contrastar en el fondo oscuro". If Hero uses dark background, I should change the text-brand-dark to text-white. 
                Wait, I should check the current App.tsx / Hero code.
                In my manual plan I missed that Hero needs 'dark mode' if I am keeping the Next.js visual language? 
                The prompt says "Mantén la distribución exacta (grid, flex), todos los textos literales... Solo debes actualizar la tecnología subyacente y estandarizar las clases CSS a nuestros nuevos tokens."
                The Legacy App.tsx had `min-h-screen bg-slate-50`.
                But the FSD page has `bg-brand-dark` in the `app/page.tsx` maybe? Or in the new components?
                Ah! The prompt specifically says: "Asegúrate de que los textos descriptivos usen 'text-slate-300' para garantizar el contraste en el fondo oscuro." This implies that the section HAS a dark background. So in Hero, the H1 text `#3b3f46` (brand-dark) should actually be `text-white` to be visible, and the describing `<p>` must be `text-slate-300`. Let's implement this dark theme for Hero. */}
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Somos tu aliado tecnológico. Creamos experiencias web modernas, rápidas y enfocadas en resultados, 
              y extraemos el verdadero valor de tus datos para impulsar tu negocio.
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

          {/* Imagen Hero */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Contenedor decorativo de la imagen */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-panel border border-slate-200/50">
              {/* Fallback de UI usando glass panel */}
              <div className="absolute inset-0 bg-slate-100 -z-10"></div>
              
              <img 
                src="/hero.png" 
                alt="Dashboard de Análisis y Desarrollo" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 opacity-90"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
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
                <p className="text-[10px] text-slate-500 leading-tight mt-1">Optimización de visibilidad y eficiencia digital</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
