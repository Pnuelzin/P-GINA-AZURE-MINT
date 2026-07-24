
import React from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">
              Azure <span className="text-emerald-500">&</span> Mint
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-slate-900 transition-colors py-2 border-b-2 border-transparent hover:border-emerald-500">Início</a>
            <a href="#catalog" onClick={(e) => handleNavClick(e, 'catalog')} className="hover:text-slate-900 transition-colors py-2 border-b-2 border-transparent hover:border-emerald-500">Coleção</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-slate-900 transition-colors py-2 border-b-2 border-transparent hover:border-emerald-500">Legado</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-slate-900 transition-colors py-2 border-b-2 border-transparent hover:border-emerald-500">Suporte</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label="Carrinho de Compras"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col space-y-3 animate-slide-in-up">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="px-2 py-2 text-slate-700 hover:text-emerald-600 font-medium">Início</a>
            <a href="#catalog" onClick={(e) => handleNavClick(e, 'catalog')} className="px-2 py-2 text-slate-700 hover:text-emerald-600 font-medium">Coleção</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="px-2 py-2 text-slate-700 hover:text-emerald-600 font-medium">Legado</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-2 py-2 text-slate-700 hover:text-emerald-600 font-medium">Suporte</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
