'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as DropdownMenu, Transition } from '@headlessui/react';
import { Menu, X, MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { siteConfig, siteLinks } from '@/lib/config/site';

interface TripleALogoProps {
  className?: string;
}

const TripleALogo: React.FC<TripleALogoProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 70"
    className={className}
    aria-label="TripleAEstudio"
    role="img"
  >
    <text x="4"   y="48" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="900" fontSize="52" className="fill-[var(--color-brand-tech-blue)]" letterSpacing="-2">A</text>
    <text x="46"  y="48" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="900" fontSize="52" className="fill-[var(--color-brand-purple)]" letterSpacing="-2">A</text>
    <text x="88"  y="48" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="900" fontSize="52" className="fill-[var(--color-brand-orange)]" letterSpacing="-2">A</text>
    <text x="138" y="46" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="600" fontSize="16"  className="fill-white" letterSpacing="0.5">Estudio</text>
    <line x1="130" y1="14" x2="130" y2="48" className="stroke-slate-500" strokeWidth="1.5" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownItems = [
    ...(siteConfig.phone ? [{
      icon: <MessageCircle size={18} />,
      label: 'Chat por WhatsApp',
      sub: 'Respuesta en menos de 24 h',
      href: siteLinks.whatsapp,
      iconColor: 'text-[var(--color-brand-tech-blue)]',
      iconBg: 'bg-[var(--color-brand-tech-blue)]/10',
      highlight: false,
    }] : []),
    {
      icon: <Mail size={18} />,
      label: 'Enviar un Correo',
      sub: 'Propuesta detallada por email',
      href: siteLinks.mailto,
      iconColor: 'text-[var(--color-brand-purple)]',
      iconBg: 'bg-[var(--color-brand-purple)]/10',
      highlight: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluciones Web', href: '#soluciones-web' },
    { name: 'Sistemas Excel', href: '#sistemas-excel' },
    { name: 'Plantillas',     href: '#plantillas' },
  ];

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-4"
      )}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="#home" aria-label="TripleAEstudio – Ir al inicio">
            <TripleALogo className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="relative z-50">
              <DropdownMenu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <DropdownMenu.Button as={Fragment}>
                      <button className="flex items-center gap-1.5 bg-[var(--color-brand-tech-blue)] text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition-all shadow-lg shadow-[var(--color-brand-tech-blue)]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-tech-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                        Cotizar Proyecto
                        <ChevronDown
                          size={15}
                          className={cn("transition-transform duration-200", open ? "rotate-180" : "rotate-0")}
                        />
                      </button>
                    </DropdownMenu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-2 scale-95"
                      enterTo="opacity-100 translate-y-0 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0 scale-100"
                      leaveTo="opacity-0 translate-y-2 scale-95"
                    >
                      <DropdownMenu.Items className="absolute right-0 mt-3 w-72 origin-top-right rounded-2xl glass-panel shadow-xl overflow-hidden focus:outline-none border-0">
                        <div className="h-1 w-full bg-gradient-to-r from-[var(--color-brand-tech-blue)] via-[var(--color-brand-purple)] to-[var(--color-brand-orange)]" />

                        <div className="p-2">
                          {dropdownItems.map((item) => (
                            <DropdownMenu.Item key={item.label}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  target={item.href.startsWith('http') ? '_blank' : undefined}
                                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className={cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-150 group",
                                    active ? "bg-white/10" : "hover:bg-white/5",
                                    item.highlight && "bg-white/5 ring-1 ring-[var(--color-brand-orange)]/30"
                                  )}
                                >
                                  <div className={cn("flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg", item.iconBg, item.iconColor)}>
                                    {item.icon}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <p className={cn("text-sm font-semibold leading-tight", item.iconColor)}>
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5 truncate">
                                      {item.sub}
                                    </p>
                                  </div>
                                </Link>
                              )}
                            </DropdownMenu.Item>
                          ))}
                        </div>

                        <div className="px-4 py-3 border-t border-white/10 bg-slate-900/50">
                          <p className="text-xs text-center text-slate-400">
                            Respondemos en menos de <span className="font-semibold text-slate-200">24 horas</span>
                          </p>
                        </div>
                      </DropdownMenu.Items>
                    </Transition>
                  </>
                )}
              </DropdownMenu>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú principal"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-slate-200 hover:text-white transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden glass-panel absolute top-full left-0 w-full mt-2 rounded-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-white/10 space-y-1">
                <p className="px-3 pb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                  Cotizar Proyecto
                </p>
                {dropdownItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${item.iconBg} ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${item.iconColor}`}>{item.label}</p>
                      <p className="text-xs text-slate-400">{item.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
