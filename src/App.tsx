import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth selection:bg-[#43b5a9]/30 selection:text-[#3b3f46]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
