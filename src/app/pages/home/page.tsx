'use client'
import Container from "@/app/components/layout/Container";
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useRouter } from "next/navigation";
import Footer from "@/app/components/layout/Footer";
import Behind from "@/app/components/layout/Behind";

interface Appointment {
  id: number;
  client: string;
  service: string;
  time: string;
  duration: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  price: string;
}


export default function Panel() {

  
  const [today] = useState(new Date());

  // Exemplo de dados vindos de uma API
  const appointments: Appointment[] = [
    { id: 1, client: "Carlos Oliveira", service: "Corte de Cabelo", time: "09:00", duration: "45min", status: 'confirmed', price: "R$ 50,00" },
    { id: 2, client: "Ana Beatriz", service: "Coloração", time: "10:30", duration: "2h", status: 'pending', price: "R$ 180,00" },
    { id: 3, client: "Marcos Souza", service: "Barba Trim", time: "14:00", duration: "30min", status: 'confirmed', price: "R$ 35,00" },
    { id: 4, client: "Julia Silva", service: "Manicure", time: "16:00", duration: "1h", status: 'cancelled', price: "R$ 60,00" },
  ];

  const statusColors = {
    confirmed: "bg-green-100 text-green-700 border-green-200",
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    cancelled: "bg-red-100 text-red-700 border-red-200",
  };
  return (
    <Behind classname={""}>  
    
      <Container className={"h-full overflow-y-auto"}>

      <div className=" max-w-screen-lg mx-auto min-h-screen flex flex-col">
        {/* Header Compacto para Mobile */}
        <div className="bg-primary/50 p-4  sticky top-0 z-10 shadow-sm rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold text-gray-900">Agenda de Hoje</h1>
              <p className="text-xs text-gray-900 capitalize">
                {format(today, "EEEE, dd 'de' MMMM", { locale: ptBR })}
              </p>
            </div>
        
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="p-4 space-y-3">
          {appointments.map((apt) => (
            <div key={apt.id} className="flex gap-4 group">
              {/* Linha do tempo lateral */}
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-gray-700 whitespace-nowrap">{apt.time}</span>
                <div className="w-px h-full bg-gray-200 my-1 relative">
                  <div className={`absolute -left-1 top-0 w-2 h-2 rounded-full ${apt.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                </div>
              </div>

              {/* Card do Agendamento */}
              <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 active:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900 text-base leading-tight">{apt.client}</h3>
                  <span className="text-sm font-bold text-indigo-600">{apt.price}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">{apt.service}</p>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border 
                    ${apt.status === 'confirmed' ? 'border-green-200 text-green-600 bg-green-50' : 'border-yellow-200 text-yellow-600 bg-yellow-50'}`}>
                    {apt.status === 'confirmed' ? 'Ok' : 'Pendente'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
          <Footer />
      </div>
      </Container>
     
    </Behind>
    
  );
};


