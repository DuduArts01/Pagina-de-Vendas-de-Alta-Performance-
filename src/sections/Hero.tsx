import React from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => (
  <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
    <div className="max-w-4xl mx-auto relative z-10">
      <span className="text-emerald-neon font-semibold tracking-[0.3em] text-xs mb-4 block">OPORTUNIDADE EXCLUSIVA</span>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Domine o Mercado de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-neon to-cyan-400">Criptomoedas</span>
      </h1>
      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
        A estratégia validada para identificar gemas antes da explosão. Saia do amadorismo e opere como as instituições.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button>Quero Minha Vaga Agora</Button>
        <Button variant="outline">Ver Cronograma</Button>
      </div>
    </div>
  </section>
);

export default Hero;