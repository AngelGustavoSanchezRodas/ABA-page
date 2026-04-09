import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
import Link from 'next/link';

// ── Logo tipográfico reutilizable para el Footer ─────────────────────────────
const FooterLogo = () => (
  <span className="text-2xl font-black tracking-tight select-none">
    <span className="text-brand-turquoise">A</span>
    <span className="text-brand-mustard">B</span>
    <span className="text-brand-magenta">A</span>
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

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-400">
      {/* Línea decorativa superior con gradiente de marca */}
      <div className="h-px w-full bg-gradient-to-r from-brand-turquoise via-brand-mustard to-brand-magenta" />

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
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-turquoise transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-brand-turquoise">›</span>
                    {link.label}
                  </Link>
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
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-mustard transition-colors mb-6 group"
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
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-turquoise/20 hover:text-brand-turquoise text-slate-400 transition-all duration-200"
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
            <span className="text-brand-magenta mx-1">♥</span>
            en Guatemala
          </p>
        </div>
      </div>
    </footer>
  );
};
