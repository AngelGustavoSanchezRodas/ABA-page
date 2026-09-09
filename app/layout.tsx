import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/features/layout/components/Navbar';
import { Footer } from '@/features/layout/components/Footer';
import { FloatingContact } from '@/features/layout/components/FloatingContact';
import { Analytics } from "@vercel/analytics/next";
import { siteConfig, siteLinks } from '@/lib/config/site';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteLinks.phoneInternational,
  areaServed: 'Guatemala',
  availableLanguage: 'Spanish',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteLinks.phoneInternational,
    email: siteConfig.email,
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: Object.values(siteConfig.social),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ['desarrollo web', 'software', 'sistemas excel', 'plantillas profesionales', 'automatización', 'productividad'],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${lexend.variable} font-sans antialiased bg-[#0B1120] text-slate-300 selection:bg-cyan-500 selection:text-white flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-slate-900 focus:text-[var(--color-brand-tech-blue)] focus:z-50 focus:font-bold">
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <FloatingContact />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
