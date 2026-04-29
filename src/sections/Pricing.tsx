import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const tiers = [
    { name: "Starter", price: "97", features: ["Acesso vitalício", "Módulo básico", "Suporte e-mail"] },
    { name: "Pro", price: "197", features: ["Tudo do Starter", "Carteira recomendada", "Grupo VIP"], recommended: true },
    { name: "Elite", price: "497", features: ["Tudo do Pro", "Mentoria mensal", "Setup Pro"] }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">Escolha seu plano de <span className="text-gold-neon">aceleração</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card key={tier.name} recommended={tier.recommended}>
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <div className="text-4xl font-bold mb-6">R$ {tier.price}<span className="text-sm text-slate-500 font-normal">/ano</span></div>
            <ul className="space-y-4 mb-8 text-slate-400 text-sm">
              {tier.features.map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-emerald-neon">✓</span> {f}
                </li>
              ))}
            </ul>
            <Button variant={tier.recommended ? 'primary' : 'outline'} className="w-full">Assinar Agora</Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;