import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/layout/components/Navbar";
import { Footer } from "@/features/layout/components/Footer";
import { FloatingContact } from "@/features/layout/components/FloatingContact";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABA Estudios | Desarrollo Web y Análisis de Datos",
  description: "ABA Estudios — Transformamos tus ideas en código y tus datos en decisiones. Desarrollo web a medida y análisis de datos avanzado para impulsar tu negocio.",
  keywords: "Desarrollo Web, Análisis de Datos, ABA Estudios, Diseño Web, Next.js, React",
  openGraph: {
    title: "ABA Estudios | Desarrollo Web y Análisis de Datos",
    description: "Transformamos tus ideas en código y tus datos en decisiones. Desarrollo web y análisis de datos avanzado.",
    url: "https://abaestudios.com", // Adjust as necessary
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${plusJakarta.className} antialiased bg-slate-50 text-slate-800`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
