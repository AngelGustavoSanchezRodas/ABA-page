import { motion } from 'framer-motion';
import { ArrowRight, Code, LineChart } from 'lucide-react';
import heroImg from '../assets/hero.png';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Elementos decorativos de fondo usando los colores de la marca */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-[#43b5a9]/10 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full bg-[#ce4a7e]/10 blur-3xl"></div>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dfa135]/10 text-[#dfa135] font-semibold text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfa135] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dfa135]"></span>
              </span>
              Innovación Digital
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3b3f46] leading-tight mb-6">
              Transformamos tus <span className="text-[#43b5a9]">ideas en código</span> y tus <span className="text-[#ce4a7e]">datos en decisiones</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Somos tu aliado tecnológico. Creamos experiencias web modernas, rápidas y enfocadas en resultados, 
              y extraemos el verdadero valor de tus datos para impulsar tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#43b5a9] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#349c91] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#43b5a9]/30"
              >
                Agenda una Asesoría Gratuita
                <ArrowRight size={20} />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#3b3f46] border-2 border-gray-200 px-8 py-3.5 rounded-full font-bold hover:border-[#43b5a9] hover:text-[#43b5a9] transition-all"
              >
                Ver Servicios
              </a>
            </div>

            {/* Badges de confianza */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <Code size={18} className="text-[#43b5a9]" />
                Desarrollo a medida
              </div>
              <div className="flex items-center gap-2">
                <LineChart size={18} className="text-[#ce4a7e]" />
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
              {/* Fallback de UI si no carga la imagen al instante, util también como placeholder visual */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100 -z-10"></div>
              
              <img 
                src={heroImg} 
                alt="Dashboard de Análisis y Desarrollo" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  // Fallback por si la imagen hero.png no existe en el sistema local yet
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            {/* Tarjeta flotante decorativa */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-[#dfa135]/20 p-3 rounded-lg flex-shrink-0">
                <LineChart className="text-[#dfa135]" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Crecimiento</p>
                <p className="text-lg font-bold text-[#3b3f46]">+120%</p>
                <p className="text-[10px] text-gray-400 leading-tight mt-1">Optimización de visibilidad y eficiencia digital</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
