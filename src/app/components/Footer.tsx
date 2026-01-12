import { BriefcaseBusiness, HandPlatter, PhoneCall, Share2, User2,Home, UsersRound, CalendarDays   } from 'lucide-react';
interface IFooter {

onClick?: () => void
}

export default function Footer({onClick}:IFooter){
    return (
        <>
      {/* Menu Inferior (Tab Bar) - Comum em Mobile */}
<footer className="mt-auto bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around items-center p-2 sticky bottom-0 md:rounded-b-[3rem]">
  
            {/* Item: Agenda (Ativo) */}
            <button className="group flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-300 hover:bg-indigo-50 active:scale-90 flex-1">
                <div className="text-indigo-600 transition-transform duration-300 group-hover:-translate-y-1">
                {/* Ícone (SVG ou Emoji) */}
                <span className="text-xl"> <CalendarDays /></span>
                </div>
                <span className="text-[10px] font-bold text-indigo-600 tracking-wide">Agenda</span>
            </button>

            {/* Item: Clientes */}
            <button className="group flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-300 hover:bg-gray-100 active:scale-90 flex-1">
                <div className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-gray-600">
                <span className="text-xl">  <UsersRound /></span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-600 tracking-wide">Clientes</span>
            </button>

            {/* Item: Home */}
            <button 
                onClick={onClick} 
                className="group flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-300 hover:bg-gray-100 active:scale-90 flex-1"
            >
                <div className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-gray-600">
                <span className="text-xl"><Home/></span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-600 tracking-wide">Painel</span>
            </button>
            
            </footer>
</>
    );
}