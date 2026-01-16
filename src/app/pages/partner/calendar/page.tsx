'use client';
import { useState } from 'react';
import { CalendarDays, Clock, User, ChevronRight } from 'lucide-react';
import Behind from '@/app/components/layout/Behind';
import Container from '@/app/components/layout/Container';
import Footer from '@/app/components/layout/Footer';
import { AGENDAMENTOS} from '@/app/components/Modal/DadosMockados';

export default function AgendaParceiros() {
  const [filtroParceiro, setFiltroParceiro] = useState("Todos");

  // --- FUNÇÃO DE ANONIMIZAÇÃO ---
  // Transforma "Carlos Souza" em "Carlos S.***" ou "Carlos S."
  const anonimizarNome = (nome: string) => {
    const partes = nome.trim().split(" ");
    if (partes.length <= 1) return nome;
    
    const primeiroNome = partes[0];
    const sobrenomeInicial = partes[partes.length - 1][0]; // Pega a inicial do último nome
    return `${primeiroNome} ${sobrenomeInicial}.`;
  };

  const parceirosUnicos = ["Todos", ...new Set(AGENDAMENTOS.map(a => a.parceiro))];

  const agendamentosFiltrados = filtroParceiro === "Todos" 
    ? AGENDAMENTOS 
    : AGENDAMENTOS.filter(a => a.parceiro === filtroParceiro);

  return (
   <Behind classname={""}>
 

     <Container className='h-full overflow-y-auto'>
       <div className='max-w-screen-lg mx-auto min-h-screen flex flex-col'>
            <div className="bg-white p-4  sticky  z-10 shadow-sm rounded-lg">
              <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <CalendarDays className="text-primary" />
                Agenda dos Parceiros
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          
                  {parceirosUnicos.map((p) => (
                  <button
                  key={p}
                  onClick={() => setFiltroParceiro(p)}
                  className={` px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    filtroParceiro === p 
                    ? "bg-primary text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  >
                  {p}
                  </button>
                    ))}
             </div>
     
            </div>

            <div className="p-4 space-y-3">
              {agendamentosFiltrados.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-xl min-w-[70px]">
                      <Clock size={16} className="text-gray-400 mb-1" />
                      <span className="font-bold text-gray-800">{item.hora}</span>
                    </div>

                    <div>
                      {/* AQUI APLICAMOS A ANONIMIZAÇÃO */}
                      <h3 className="font-bold text-gray-800">
                          {/*  {anonimizarNome(item.cliente)} */}
                        
                      </h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <User size={12} /> {item.parceiro}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
                        {item.servico}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${item.status === 'Confirmado' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <ChevronRight className="text-gray-300 group-hover:text-primary" size={20} />
                  </div>
                </div>
              ))}
            </div>
       <Footer />
       </div>
   </Container>
   </Behind>
  );
}