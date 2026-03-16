import React from 'react';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

// ── Logo tipográfico reutilizable para el Footer ─────────────────────────────
const FooterLogo: React.FC = () => (
  <span className="text-2xl font-black tracking-tight select-none">
    <span className="text-[#43b5a9]">A</span>
    <span className="text-[#dfa135]">B</span>
    <span className="text-[#ce4a7e]">A</span>
    <span className="text-slate-300 font-semibold ml-2 text-lg">Estudios</span>
  </span>
);
// ─────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: 'Inicio',      href: '#home' },
  { label: 'Servicios',   href: '#services' },
  { label: 'Beneficios',  href: '#benefits' },
  { label: 'Contacto',    href: '#contact' },
];

const socialLinks = [
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Twitter  size={18} />, href: 'https://twitter.com',  label: 'Twitter'  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3b3f46] text-slate-400">
      {/* Línea decorativa superior con gradiente de marca */}
      <div className="h-px w-full bg-gradient-to-r from-[#43b5a9] via-[#dfa135] to-[#ce4a7e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* ── Columna 1: Marca ─────────────────────────────────────────── */}
          <div className="space-y-4">
            <FooterLogo />
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Creamos soluciones digitales a la medida para negocios que buscan crecer y optimizar su tiempo.
            </p>
          </div>

          {/* ── Columna 2: Navegación rápida ─────────────────────────────── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#43b5a9] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#43b5a9]">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna 3: Contacto y Redes ──────────────────────────────── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
              Conecta con nosotros
            </h4>

            {/* Email */}
            <a
              href="mailto:hola@abaestudios.com"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#dfa135] transition-colors mb-6 group"
            >
              hola@abaestudios.com
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>

            {/* Redes sociales */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-[#43b5a9]/20 hover:text-[#43b5a9] text-slate-400 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Línea divisoria y Copyright ──────────────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {currentYear}{' '}
            <span className="text-slate-400 font-semibold">ABA Estudios</span>. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho con
            <span className="text-[#ce4a7e] mx-1">♥</span>
            en Guatemala
          </p>
        </div>
      </div>
    </footer>
  );
};
