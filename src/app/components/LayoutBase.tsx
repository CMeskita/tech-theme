'use client'
import BackgroundSection from "./layout/Behind";
import Behind from "./layout/Behind";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function LayoutBase({ children, className }: LayoutProps) {
  return (
    // h-screen: trava a altura na tela / overflow-hidden: evita scroll no pai
  
    <div className={`relative z-10 flex flex-col h-screen overflow-hidden bg-gray-50 ${className}`}>

      {/* 1. HEADER (Fixo no topo) */}
      <header className="flex-none p-5 sm:px-8 bg-white shadow-sm z-20">
         <h1 className="text-xl font-bold text-gray-800">Keepy</h1>
       <Header />
      </header>

      {/* 2. BODY (Área que faz scroll) */}
      <main className="flex-1 overflow-y-auto p-5 sm:p-8 scrollbar-hide">
        {children}
      </main>

      {/* 3. FOOTER (Fixo no rodapé) */}
    

  <footer className="flex-none">
        {/* O componente Footer que corrigimos antes entra aqui */}
        <div className="bg-white border-t border-gray-100">
           <Footer />
        </div>
      </footer>
    </div>
  
    
  );
}