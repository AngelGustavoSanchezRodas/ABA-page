// ──────────────────────────────────────────────────────────────────────────────
// lib/config/site.ts
// Fuente única de verdad para la información de contacto y redes sociales.
// Importar desde aquí: import { siteConfig } from '@/lib/config/site'
// ──────────────────────────────────────────────────────────────────────────────

interface SiteConfig {
  name: string;
  phone: string;
  email: string;
  whatsappMessage: string;
  emailSubject: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'ABA Estudios',
  phone: '50212345678',
  email: 'hola@abaestudios.com',
  whatsappMessage:
    'Hola ABA Estudios, me interesa mejorar la tecnología de mi negocio y me gustaría una asesoría.',
  emailSubject: 'Consulta sobre servicios ABA Estudios',
  social: {
    facebook:  'https://www.facebook.com/abaestudios',
    instagram: 'https://www.instagram.com/abaestudios',
    linkedin:  'https://www.linkedin.com/company/abaestudios',
  },
};

// ── Helpers de URL derivadas ──────────────────────────────────────────────────
export const siteLinks = {
  whatsapp: `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
  mailto:   `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`,
};
