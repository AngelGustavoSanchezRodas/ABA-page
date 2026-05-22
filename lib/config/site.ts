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
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'ABA Estudios',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '50258463811',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'sangelgustavocom@gmail.com',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Hola ABA Estudios, me interesa mejorar la tecnología de mi negocio y me gustaría una asesoría.',
  emailSubject: process.env.NEXT_PUBLIC_EMAIL_SUBJECT || 'Consulta sobre servicios ABA Estudios',
  social: {
    facebook:  process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/abaestudios',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/abaestudios',
    linkedin:  process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/abaestudios',
  },
};

// ── Helpers de URL derivadas ──────────────────────────────────────────────────
const cleanPhone = (phone: string) => phone.replace(/[^0-9]/g, '');

export const siteLinks = {
  whatsapp: `https://wa.me/${cleanPhone(siteConfig.phone)}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
  mailto:   `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`,
};
