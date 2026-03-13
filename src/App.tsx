import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth selection:bg-[#43b5a9]/30 selection:text-[#3b3f46]">
      <Navbar />
      <main>
        <Hero />
        {/* Futuras secciones a añadir aquí: */}
        {/* <Services /> */}
        {/* <Benefits /> */}
        {/* <Contact /> */}
      </main>
      
      {/* Footer minimalista temporal hasta construir el componente Footer completo */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} ABA Estudios. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
