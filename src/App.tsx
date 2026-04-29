import React from 'react';
import Button from './components/Button';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';

export default function App() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <nav className="fixed top-0 w-full z-50 border-b border-dark-border bg-dark-bg/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-neon rounded-lg flex items-center justify-center text-dark-bg">₿</div>
            Cripto<span className="text-emerald-neon font-light">Master</span>
          </div>
          <Button variant="outline" className="hidden md:flex py-2 px-4">Área de Membros</Button>
        </div>
      </nav>

      <Hero />
      
      <section className="py-20 bg-dark-surface/30 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[{l: "Alunos", v: "15k+"}, {l: "Lucro", v: "240%"}, {l: "Aulas", v: "80+"}, {l: "Suporte", v: "24/7"}].map(s => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl font-bold text-emerald-neon mb-1">{s.v}</div>
              <div className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <Pricing />

      <footer className="border-t border-dark-border py-12 text-center text-slate-600 text-sm">
        <p>© 2026 CriptoMaster. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}