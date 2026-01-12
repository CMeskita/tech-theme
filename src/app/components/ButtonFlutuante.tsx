
import { LogOut } from 'lucide-react';

export function ButtonFlutuante() {
   
    return (
         <button  className={`
         fixed w-14 h-14 top-5 right-5  
         text-primary rounded-full flex items-center 
         justify-center text-2xl 
         shadow-lg hover:bg-gray-900 transform hover:scale-100 transition duration-300`}>
      <LogOut />
  </button>
    );
}