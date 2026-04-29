import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  recommended?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", recommended = false }) => (
  <div className={`bg-dark-surface border border-dark-border p-8 rounded-2xl hover:border-emerald-neon/30 transition-all duration-300 ${recommended ? "border-emerald-neon/50 scale-105 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative" : ""} ${className}`}>
    {recommended && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-neon text-dark-bg text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">MAIS VENDIDO</span>}
    {children}
  </div>
);

export default Card;