import { HeroSection } from '@/features/landing/components/HeroSection';
import { ServicesSection } from '@/features/landing/components/ServicesSection';
import { BenefitsSection } from '@/features/landing/components/BenefitsSection';
import { ContactSection } from '@/features/landing/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </main>
  );
}
