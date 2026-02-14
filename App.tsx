
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProductGrid from './components/ProductGrid.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import GeminiChat from './components/GeminiChat.tsx';
import { CartItem, Product } from './types.ts';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        
        <div className="bg-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-1">
                    <p className="text-emerald-400 text-3xl font-bold">1982</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Fundada em</p>
                </div>
                <div className="space-y-1">
                    <p className="text-white text-3xl font-bold">100%</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Movimento Suíço</p>
                </div>
                <div className="space-y-1">
                    <p className="text-white text-3xl font-bold">5 anos</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Garantia Total</p>
                </div>
                <div className="space-y-1">
                    <p className="text-white text-3xl font-bold">24h</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Envio Global</p>
                </div>
            </div>
        </div>

        <ProductGrid onAddToCart={handleAddToCart} />

        <section id="about" className="py-24 bg-sky-50">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1200" 
                        alt="Artesanato de Relógios" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/20"></div>
                </div>
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-slate-900 leading-tight">Criado para o Explorador Moderno</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Na Azure & Mint, acreditamos que o tempo deve ser medido não apenas em segundos, mas em estilo. Nossos mestres relojoeiros combinam o artesanato tradicional com uma paleta de cores contemporânea inspirada no mundo natural.
                    </p>
                    <ul className="space-y-4">
                        {[
                            'Metais e couro de origem sustentável',
                            'Ponteiro de segundos exclusivo Verde Menta',
                            'Cristal de safira resistente a riscos',
                            'À prova d\'água até 100 metros'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-900">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
      </main>

      <footer id="contact" className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 space-y-6">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-400 font-bold text-lg">A</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">
                        Azure <span className="text-emerald-500">&</span> Mint
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Redefinindo a horologia com foco em estética minimalista e engenharia premium de inspiração suíça.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Coleções</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-emerald-600">Série Azure</a></li>
                        <li><a href="#" className="hover:text-emerald-600">Edição Mint</a></li>
                        <li><a href="#" className="hover:text-emerald-600">Clássicos Navy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Suporte</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-emerald-600">Rastrear Pedido</a></li>
                        <li><a href="#" className="hover:text-emerald-600">Garantia</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Jornal</h4>
                    <div className="flex gap-2">
                        <input type="email" placeholder="E-mail" className="flex-1 px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm outline-none" />
                        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase">OK</button>
                    </div>
                </div>
            </div>
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-400">© 2024 Azure & Mint Horologia.</p>
            </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />

      <GeminiChat />

      <style>{`
        @keyframes slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slide-in-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.4s ease-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default App;
