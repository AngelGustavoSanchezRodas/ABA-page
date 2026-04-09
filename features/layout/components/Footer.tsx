import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Facebook = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// ── Logo tipográfico reutilizable para el Footer ─────────────────────────────
const FooterLogo = () => (
  <span className="text-2xl font-black tracking-tight select-none">
    <span className="text-brand-turquoise">A</span>
    <span className="text-brand-mustard">B</span>
    <span className="text-brand-magenta">A</span>
    <span className="text-white font-semibold ml-2 text-lg">Estudios</span>
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
  { icon: <Facebook size={18} />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <Instagram  size={18} />, href: 'https://instagram.com',  label: 'Instagram'  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Línea decorativa superior con gradiente de marca */}
      <div className="h-px w-full bg-gradient-to-r from-brand-turquoise via-brand-mustard to-brand-magenta" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* ── Columna 1: Marca ─────────────────────────────────────────── */}
          <div className="space-y-4">
            <FooterLogo />
            <p className="text-sm leading-relaxed text-slate-300 max-w-xs">
              Creamos soluciones digitales a la medida para negocios que buscan crecer y optimizar su tiempo.
            </p>
          </div>

          {/* ── Columna 2: Navegación rápida ─────────────────────────────── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Conecta con nosotros
            </h4>

            {/* Email */}
            <a
              href="mailto:hola@abaestudios.com"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-brand-mustard transition-colors mb-6 group"
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
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-turquoise/20 hover:text-brand-turquoise text-slate-300 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Línea divisoria y Copyright ──────────────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {currentYear}{' '}
            <span className="text-white font-semibold">ABA Estudios</span>. Todos los derechos reservados.
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
