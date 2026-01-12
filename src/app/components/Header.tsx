'use client'
import { Info,Settings} from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import { useRouter } from 'next/navigation';
 

export default function Header(){
    const settingsMenu = () => (alert('Janela de Configurações'));
    const infoMenu = () => (alert('Janela de informações do sistemas'));
    const UserDateMenu = () => (alert('Janela de informações do Usuário'));
    const router = useRouter()  
    function BackHome() {
      alert('Voltando para o Painel Principal!!');
          router.push('/pages/panel'); }
    const appName = process.env.NEXT_PUBLIC_APP_NAME || "Tech Theme";
    const appUser = process.env.NEXT_PUBLIC_APP_USER || "Tech Theme";


return(
    <div className="flex  items-center justify-between shadow-lg p-1 rounded-lg bg-white gap-3">
          <div className="flex items-center gap-px p-1 rounded-md ">
      
                <button onClick={BackHome} className="py-1 px-5 rounded-lg  text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                <h5 className="text-xl leading-8 font-semibold text-gray-900">{appName}</h5>
                </button>
        
          </div>
          
      
          <div className="dropdown relative inline-flex ">
                <div className="hidden md:flex items-center gap-3 ">
            <div className="flex items-center gap-2">
              <button onClick={infoMenu}  className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900">
               <Info className='h-5 w-5' />
              </button>

              <span className="w-px h-7 bg-gray-200"></span>

              <button onClick={settingsMenu} className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900">
                 <Settings className='h-5 w-5' />
              </button>
            </div>
    
                <button onClick={UserDateMenu} className="py-1 px-5 rounded-lg bg-gray-100 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                <h5 className="text-xl leading-8 font-semibold text-gray-900"> {appUser}</h5>
                </button>
           
          </div>
                <DropdownMenu/>
          </div>
        </div>
);
}