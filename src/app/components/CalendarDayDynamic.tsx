'use client'
import React, { useState } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isToday, 
  startOfDay
} from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Para nomes de meses em português
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';


export default function CalendarDayDynamic({ currentMonth = new Date() }){
    
  const [currentDate, setCurrentDate] = useState(new Date());
     // Gerar array de 24 horas (0 a 23)
  const hours = Array.from({ length: 24 }, (_, i) => i); 


// Lógica para gerar os dias do grid
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // Handlers para os botões
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  // Exemplo de dados de eventos (num app real viria de uma API)
  const events: Record<string, string> = {
    [format(new Date(), 'yyyy-MM-dd')]: "Hoje é o dia!",
    "2026-01-15": "Lançamento do Projeto",
  };
      // Estados para o Modal
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);

        const handleOpenModal = (day: Date) => {
          setSelectedDate(day);
          setIsModalOpen(true);
        };

    return(
<div className="w-full max-w-4xl mx-auto p-4">
      {/* Cabeçalho de Navegação */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 capitalize">
          {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
        </h2>
        <div className="flex gap-2">
         
              <button  onClick={prevMonth} className="text-gray-500 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900">
                 <ChevronLeft />
               </button>
          
              <button onClick={() => setCurrentDate(new Date())} className="hidden md:flex py-2 pl-1.5 pr-3 rounded-md bg-gray-50 border border-gray-300 items-center gap-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100">
               <CalendarDays className="opacity-50" />Today
              </button>

              <button   onClick={nextMonth} className="text-gray-500 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900">
                <ChevronRight />
              </button>

        </div>
      </div>

      {/* Grid de Dias da Semana (Dom, Seg...) */}
      <div className="grid grid-cols-7 mb-2">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-500 pb-2">
            {day}
          </div>
        ))}
      </div>

      {/* Grid Principal do Calendário */}
      <div className="grid grid-cols-7 border-t border-l border-gray-200 shadow-sm">
        {calendarDays.map((day, index) => {
          const dateKey = format(day, 'yyyy-MM-dd');
          const event = events[dateKey];
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isSelectedDay = isToday(day);
          const isLastInRow = (index + 1) % 7 === 0;

          return (
            <div
              key={dateKey}
              onClick={() => handleOpenModal(day)}
              className={`
              p-1 sm:p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer
              min-h-[50px] sm:min-h-[80px] lg:h-28 border-b border-r border-gray-200 
              ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'}
              ${isLastInRow ? 'border-r-0' : ''}
              `}
            >
              <span
                className={`
                text-[10px] sm:text-xs font-semibold flex items-center justify-center 
                w-5 h-5 sm:w-7 sm:h-7 rounded-full
                ${isSelectedDay ? 'bg-indigo-600 text-white' : 'text-gray-900'}
              `}
              >
                {format(day, 'd')}
              </span>

              {event && (
                <div className="mt-2">
                  <span className="hidden lg:block text-[10px] leading-tight font-medium text-indigo-700 bg-indigo-50 p-1 rounded border border-indigo-100 truncate">
                    {event}
                  </span>
                  <span className="lg:hidden block w-1.5 h-1.5 rounded-full bg-indigo-500 mx-auto"></span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* --- MODAL DE AGENDAMENTO --- */}
      {isModalOpen && selectedDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Novo Agendamento</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                Agendando para: <span className="font-semibold text-indigo-600">
                  {format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}
                </span>
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Título do Evento</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border" placeholder="Ex: Consulta Médica" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Hora Início</label>
                    <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Hora Fim</label>
                    <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border" />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">Cancelar</button>
                  <button type="submit" className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>

    );

}