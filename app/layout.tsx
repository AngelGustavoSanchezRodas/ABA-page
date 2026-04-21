import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/features/layout/components/Navbar';
import { Footer } from '@/features/layout/components/Footer';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});

const SITE_URL = 'https://www.abaestudios.com';
const SITE_TITLE = 'ABA Estudios | Soluciones Digitales y Análisis de Datos';
const SITE_DESCRIPTION =
  'Hacemos que tu tecnología trabaje para ti. Páginas web de alta velocidad y automatización de datos para hacer crecer tu negocio.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['desarrollo web', 'landing pages', 'análisis de datos', 'automatización', 'pymes', 'latam'],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'ABA Estudios',
    locale: 'es_GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${lexend.variable} font-sans antialiased bg-white text-slate-900 selection:bg-[#43b5a9] selection:text-white flex flex-col min-h-screen`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-[#43b5a9] focus:z-50 focus:font-bold">
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
