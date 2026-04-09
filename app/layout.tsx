import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/features/layout/components/Navbar';
import { Footer } from '@/features/layout/components/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'ABA Estudios | Soluciones Digitales y Análisis de Datos',
  description: 'Hacemos que tu tecnología trabaje para ti. Páginas web de alta velocidad y automatización de datos para hacer crecer tu negocio.',
  keywords: ['desarrollo web', 'landing pages', 'análisis de datos', 'automatización', 'pymes', 'latam'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased bg-gray-50 text-[#3b3f46] selection:bg-[#43b5a9] selection:text-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
