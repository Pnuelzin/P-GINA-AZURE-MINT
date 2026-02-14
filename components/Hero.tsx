
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase">
            Nova Coleção 2024
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Precisão Encontra <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-600 to-sky-600">
              Design Atemporal.
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Descubra uma coleção selecionada onde a serenidade do azul claro encontra o frescor do verde menta, ancorada pela sofisticação do azul marinho.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#catalog"
              className="px-8 py-4 bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-200"
            >
              Comprar Coleção
            </a>
            <button className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-900 text-slate-900 font-bold rounded-full transition-all">
              Ver Filme
            </button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
            <div>
              <p className="text-2xl font-bold text-slate-900">4.9/5</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Avaliação Média</p>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div>
              <p className="text-2xl font-bold text-slate-900">12K+</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/50 to-sky-200/50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
            <img 
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200" 
              alt="Relógio de Luxo" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/40 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase">Destaque</p>
                <p className="font-bold text-slate-900">Navy Sea Dweller</p>
              </div>
              <p className="font-bold text-emerald-700">$1.499</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
