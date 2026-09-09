interface SiteConfig {
  name: string;
  url: string;
  title: string;
  description: string;
  locale: string;
  phone: string;
  phoneCountryCode: string;
  email: string;
  whatsappMessage: string;
  emailSubject: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'TripleAEstudio',
  url: 'https://www.tripleaestudio.com',
  title: 'TripleAEstudio | Desarrollo web y sistemas para tu negocio',
  description:
    'Desarrollo web, sistemas en Excel y plantillas para ordenar el trabajo diario de tu negocio.',
  locale: 'es_GT',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '58463811',
  phoneCountryCode: process.env.NEXT_PUBLIC_PHONE_COUNTRY_CODE || '502',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'angelgustavos93@gmail.com',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Hola TripleAEstudio, quisiera conversar sobre una solución para mi negocio.',
  emailSubject: process.env.NEXT_PUBLIC_EMAIL_SUBJECT || 'Consulta sobre servicios TripleAEstudio',
  social: {
    facebook:  process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/tripleaestudio',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/tripleaestudio',
    linkedin:  process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/tripleaestudio',
  },
};

const cleanPhone = (phone: string) => phone.replace(/[^0-9]/g, '');
const normalizedPhone = cleanPhone(siteConfig.phone);
const countryCode = cleanPhone(siteConfig.phoneCountryCode);
const fullPhone = normalizedPhone.startsWith(countryCode)
  ? normalizedPhone
  : `${countryCode}${normalizedPhone}`;

export const siteLinks = {
  phoneInternational: `+${fullPhone}`,
  phone: `tel:+${fullPhone}`,
  whatsapp: `https://wa.me/${fullPhone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
  mailto:   `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`,
};

export const createContactMailto = ({ name, email, project }: ContactFormData) => {
  const body = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    '',
    'Detalles del proyecto:',
    project,
  ].join('\n');

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}&body=${encodeURIComponent(body)}`;
};
