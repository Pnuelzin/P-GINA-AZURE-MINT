
import React, { useState } from 'react';
import { WATCHES } from '../constants.tsx';
import ProductCard from './ProductCard.tsx';
import { Product } from '../types.ts';

interface ProductGridProps {
  onAddToCart: (p: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Luxo', 'Minimalista', 'Premium', 'Esportivo'];

  const filteredWatches = activeFilter === 'Todos' 
    ? WATCHES 
    : WATCHES.filter(w => w.category === activeFilter);

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">O Catálogo</h2>
            <p className="text-slate-500 max-w-lg">
              Explore nossos cronógrafos feitos à mão, equilibrados com nossa paleta Azure & Mint.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === filter 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWatches.map(watch => (
            <ProductCard 
              key={watch.id} 
              product={watch} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
