import { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as DropdownMenu, Transition } from '@headlessui/react';
import { Menu, X, MessageCircle, Mail, ChevronDown, Download } from 'lucide-react';
import { cn } from '../lib/utils';

// ── ABA Estudios brand logo as inline SVG ────────────────────────────────────
interface AbaLogoProps {
  className?: string;
}

const AbaLogo = ({ className }: AbaLogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 70"
    className={className}
    aria-label="ABA Estudios"
    role="img"
  >
    <text x="4"   y="48" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="900" fontSize="52" fill="#43b5a9" letterSpacing="-2">A</text>
    <text x="52"  y="48" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="900" fontSize="52" fill="#dfa135" letterSpacing="-2">B</text>
    <text x="101" y="48" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="900" fontSize="52" fill="#ce4a7e" letterSpacing="-2">A</text>
    <text x="156" y="46" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="600" fontSize="16"  fill="#3b3f46" letterSpacing="0.5">Estudios</text>
    <line x1="150" y1="10" x2="150" y2="52" stroke="#e2e8f0" strokeWidth="1.5" />
  </svg>
);
// ─────────────────────────────────────────────────────────────────────────────

// ── Opciones del dropdown de contacto ────────────────────────────────────────
const dropdownItems = [
  {
    icon: <MessageCircle size={18} />,
    label: 'Chat por WhatsApp',
    sub: 'Respuesta en menos de 24 h',
    href: 'https://wa.me/50212345678',
    iconColor: 'text-[#43b5a9]',
    iconBg: 'bg-[#43b5a9]/10',
    highlight: false,
  },
  {
    icon: <Mail size={18} />,
    label: 'Enviar un Correo',
    sub: 'Propuesta detallada por email',
    href: 'mailto:hola@abaestudios.com',
    iconColor: 'text-[#dfa135]',
    iconBg: 'bg-[#dfa135]/10',
    highlight: false,
  },
  {
    icon: <Download size={18} />,
    label: 'Descargar Brochure',
    sub: 'PDF con nuestros servicios',
    href: '#',
    iconColor: 'text-[#ce4a7e]',
    iconBg: 'bg-[#ce4a7e]/10',
    highlight: true,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export const Navbar = () => {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sombra al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio',     href: '#home'     },
    { name: 'Servicios',  href: '#services'  },
    { name: 'Beneficios', href: '#benefits'  },
    { name: 'Contacto',   href: '#contact'  },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo SVG */}
          <a href="#home" aria-label="ABA Estudios – Ir al inicio">
            <AbaLogo className="h-10 w-auto" />
          </a>

          {/* ── Desktop Nav ───────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#3b3f46] hover:text-[#ce4a7e] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Botón "Hablemos" con Dropdown */}
            <div className="relative z-50">
              <DropdownMenu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <DropdownMenu.Button as={Fragment}>
                      <button className="flex items-center gap-1.5 bg-[#dfa135] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#c98e29] transition-colors shadow-lg shadow-[#dfa135]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfa135] focus-visible:ring-offset-2">
                        Hablemos
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
                      <DropdownMenu.Items className="absolute right-0 mt-3 w-72 origin-top-right rounded-2xl glass-panel overflow-hidden focus:outline-none">
                        {/* Franja de la marca */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#43b5a9] via-[#dfa135] to-[#ce4a7e]" />

                        <div className="p-2">
                          {dropdownItems.map((item) => (
                            <DropdownMenu.Item key={item.label}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  target={item.href.startsWith('http') ? '_blank' : undefined}
                                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className={cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-150 group",
                                    active ? "bg-white/60" : "hover:bg-white/40",
                                    item.highlight && "bg-white/50 ring-1 ring-[#ce4a7e]/10"
                                  )}
                                >
                                  <div className={cn("flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg", item.iconBg, item.iconColor)}>
                                    {item.icon}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <p className={cn("text-sm font-semibold leading-tight", item.iconColor)}>
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5 truncate">
                                      {item.sub}
                                    </p>
                                  </div>
                                </a>
                              )}
                            </DropdownMenu.Item>
                          ))}
                        </div>

                        {/* Pie de dropdown con opacidad modificada para integrarse al glassmorphism */}
                        <div className="px-4 py-3 border-t border-white/30 bg-white/30 backdrop-blur-md">
                          <p className="text-xs text-center text-gray-500">
                            Respondemos en menos de <span className="font-semibold text-gray-700">24 horas</span>
                          </p>
                        </div>
                      </DropdownMenu.Items>
                    </Transition>
                  </>
                )}
              </DropdownMenu>
            </div>
          </div>

          {/* ── Mobile Menu Button ────────────────────────────────────────── */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#3b3f46] hover:text-[#43b5a9] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Nav ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{    opacity: 0, height: 0      }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-[#3b3f46] hover:text-[#43b5a9] hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Sección "Hablemos" incrustada en el menú mobile */}
              <div className="pt-3 border-t border-gray-100 space-y-1">
                <p className="px-3 pb-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Hablemos
                </p>
                {dropdownItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${item.iconBg} ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${item.iconColor}`}>{item.label}</p>
                      <p className="text-xs text-gray-400">{item.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
