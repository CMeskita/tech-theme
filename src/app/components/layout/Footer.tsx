import { LayoutDashboard,Home, UsersRound, CalendarDays   } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface IFooter {

onClick?: (acao: "agenda" | "parceiros" | "painel") => void;
}

export default function Footer({onClick}:IFooter){
    
const router = useRouter();

  function lidarComClique(acao: "agenda" | "parceiros" | "painel") {
    // 1. Executa a função passada via props (se existir)
    onClick?.(acao);

    // 2. Executa a navegação
    if (acao === "agenda")   router.push('/pages/calendar');
    if (acao === "parceiros") router.push('/pages/partner/calendar');
    if (acao === "painel")   router.push('/pages/panel');
  }

    const buttonStyle = "group flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-300 hover:bg-gray-100 active:scale-90 flex-1";
    return (
        <>
      {/* Menu Inferior (Tab Bar) - Comum em Mobile */}
        <footer className="mt-auto bg-white/80 backdrop-blur-md border-t border-gray-100 
                  flex justify-around items-center p-2 sticky bottom-0 md:rounded-xl">
  
            {/* Item: Agenda (Ativo) */}
            <button 
           onClick={() => lidarComClique("agenda")}
            className={buttonStyle}>
                <div className="text-primary transition-transform duration-300 group-hover:-translate-y-1">
                {/* Ícone (SVG ou Emoji) */}
                <span className="text-xl"> <CalendarDays /></span>
                </div>
                <span className="text-[10px] font-bold text-primary tracking-wide">Agenda</span>
            </button>

            {/* Item: Clientes */}
            <button 
             onClick={() => lidarComClique("parceiros")}
            className={buttonStyle}>
                <div className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-gray-600">
                <span className="text-xl">  <UsersRound /></span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-600 tracking-wide">Parceiros</span>
            </button>

            {/* Item: Home */}
            <button 
               onClick={() => lidarComClique("painel")}
                className={buttonStyle}
            >
                <div className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-gray-600">
                <span className="text-xl"><LayoutDashboard/></span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-600 tracking-wide">Painel</span>
            </button>
            
            </footer>
</>
    );
}