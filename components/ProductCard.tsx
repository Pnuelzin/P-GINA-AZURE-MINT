
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-500 ease-out hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/60 hover:-translate-y-1.5">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm border border-slate-100">
            {product.category}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 pointer-events-none"></div>
        
        {/* Interaction Button */}
        <div className="absolute inset-x-4 bottom-4 overflow-hidden pointer-events-none">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full pointer-events-auto translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold py-3.5 rounded-xl shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-bold text-slate-900">${product.price.toLocaleString()}</p>
        </div>
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed h-10">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full shadow-inner ${
                    product.color === 'Navy' ? 'bg-slate-900' : 
                    product.color === 'Light Blue' ? 'bg-sky-300' : 'bg-emerald-300'
                }`}></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Edição {product.color}</span>
            </div>
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-slate-200"></div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
