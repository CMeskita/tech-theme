
'use client'
import { 
  DollarSign , 
  LogIn, 
  ClockAlert , 
  CalendarCheck2 , 
  LucideIcon 
} from 'lucide-react';
interface NavCard {
  label: string;
  valor: string;
  icon: LucideIcon;
}
export default function NavigationGrid(){
 const cards: NavCard[] = [
    { label: 'Valor Mês', valor: '3000,00', icon: DollarSign  },
    { label: 'Valor Senanal', valor: '1500', icon: DollarSign },
    { label: 'Agendamento Pedente ', valor: '20', icon: ClockAlert  },
    { label: 'Agendamento Confirmado ', valor: '10', icon: CalendarCheck2  },
  ];
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {cards.map((card) => {
        // Criamos uma constante com letra maiúscula para renderizar como componente
        const Icon = card.icon;
        
        return (
          <button
            key={card.valor}
           
            className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 hover:border-primary hover:bg-gray-50 active:scale-95"
          >
            {/* Container do Ícone */}
            <div className="mb-3 p-3 rounded-x">
              <Icon size={28} strokeWidth={2}  className='text-primary'/>
                     <span className="text-5xl font-bold text-gray-700 group-hover:text-primary transition-colors">
            
              {card.valor}
            </span>
            </div>

            {/* Texto do Card */}
            <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">
              {card.label}
         
            </span>
     
          </button>
        );
      })}
    </div>

  );

}