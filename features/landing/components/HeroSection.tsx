'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, LayoutDashboard, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange font-semibold text-sm mb-6 border border-brand-orange/30 shadow-lg shadow-brand-orange/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Sistemas Modulares a Medida
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Construimos el <span className="text-brand-tech-blue">software</span>, las <span className="text-brand-purple">plataformas</span> y las <span className="text-brand-orange">plantillas</span> que automatizan tu trabajo.
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Ordenamos los procesos que hoy te quitan tiempo y los convertimos en herramientas que tu equipo pueda usar sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-tech-blue text-white px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-tech-blue/30"
              >
                Agendar Consultoría
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#plantillas"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-slate-200 border-2 border-slate-700 px-8 py-3.5 rounded-full font-bold hover:border-brand-tech-blue hover:text-brand-tech-blue transition-all"
              >
                Explorar Plantillas
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand-tech-blue" />
                Desarrollo Escalable
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand-purple" />
                Automatización Inteligente
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex items-center justify-center">
            
            <motion.div
              className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-64 sm:w-72 z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [-15, 10, -15] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            >
              <div className="glass-panel p-5 rounded-2xl border border-white/10 shadow-2xl bg-[#0f172a]/60 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                    <LayoutDashboard size={20} className="text-brand-purple" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Dashboard Admin</div>
                    <div className="text-xs text-slate-400">Gestión centralizada</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="h-16 flex-1 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-brand-purple/20 to-transparent"></div>
                    </div>
                    <div className="h-16 flex-1 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-tech-blue/20 to-transparent"></div>
                    </div>
                  </div>
                  <div className="h-4 w-3/4 rounded-full bg-white/10"></div>
                  <div className="h-4 w-1/2 rounded-full bg-white/5"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-0 sm:left-10 top-10 sm:top-20 w-56 sm:w-64 z-30"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: [10, -10, 10] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              <div className="glass-panel p-5 rounded-2xl border border-white/10 shadow-xl bg-[#0f172a]/70 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-tech-blue/20 flex items-center justify-center">
                    <Code2 size={16} className="text-brand-tech-blue" />
                  </div>
                  <div className="text-sm font-bold text-white">App.tsx</div>
                </div>
                <div className="space-y-2 font-mono text-[10px] text-slate-400">
                  <div className="flex gap-2"><span className="text-brand-purple">import</span> {'{'} modular {'}'} <span className="text-brand-orange">from</span> &apos;core&apos;;</div>
                  <div className="flex gap-2"><span className="text-brand-purple">const</span> App = () =&gt; (</div>
                  <div className="pl-4 flex gap-2">{'<'}SystemLayout{'>'}</div>
                  <div className="pl-8 h-2 w-16 bg-white/10 rounded-sm mt-1"></div>
                  <div className="pl-8 h-2 w-24 bg-brand-tech-blue/20 rounded-sm mt-1"></div>
                  <div className="pl-4">&lt;/SystemLayout&gt;</div>
                  <div>);</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-8 sm:left-20 bottom-10 sm:bottom-16 w-60 sm:w-72 z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: [-5, 15, -5] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.6 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }}
            >
              <div className="glass-panel p-5 rounded-2xl border border-brand-orange/20 shadow-xl bg-[#0f172a]/80 backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                    <FileSpreadsheet size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Sistema Excel</div>
                    <div className="text-xs text-slate-400">Plantilla automatizada</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-2 border-b border-white/10 pb-2">
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                  </div>
                  {[1, 2, 3].map((row) => (
                    <div key={row} className="grid grid-cols-4 gap-2">
                      <div className="h-2 bg-white/5 rounded w-full"></div>
                      <div className="h-2 bg-white/10 rounded w-full"></div>
                      <div className="h-2 bg-brand-tech-blue/20 rounded w-full"></div>
                      <div className="h-2 bg-white/5 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M 150 200 C 250 200, 200 300, 350 300" 
                fill="transparent" 
                stroke="url(#grad1)" 
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path 
                d="M 180 400 C 250 400, 250 350, 350 320" 
                fill="transparent" 
                stroke="url(#grad2)" 
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
            
          </div>

        </div>
      </div>
    </section>
  );
};
