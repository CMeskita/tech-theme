'use client'
import Behind from "@/app/components/layout/Behind";
import CalendarDayDynamic from "@/app/components/CalendarDayDynamic";
import Container from "@/app/components/layout/Container";
import Footer from "@/app/components/layout/Footer";
import { Clock8 } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Calendar() {
  const router = useRouter()  

 
const dataAtual = new Date();

// Opção A: Nome completo do mês (ex: "janeiro")
const nomeMesCompleto = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });
const nomeDoAno: string = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(dataAtual);

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Tech Theme";
const appUser = process.env.NEXT_PUBLIC_APP_USER || "Tech Theme";

  return (
      <>
        
<Behind classname={""}>
    <div className="">
    <Container>
        
      <div className=" max-w-screen-lg mx-auto min-h-screen flex flex-col">              
          <div className="border border-gray-200">
                 
            <div className="w-full max-w-7xl mx-auto px-2 lg:px-8 xl:px-14">
              <CalendarDayDynamic/>
            </div>
            <div className="w-full lg:hidden py-8 px-2.5 ">
              <div className="bg-gray-50 w-full rounded-xl">
                <div className="p-3 w-full flex items-center justify-between group transition-all duration-300">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">Meet with friends</span>
                    <div className="flex items-center gap-2.5">
                        <Clock8 />
                      <span className="text-xs font-medium text-gray-600">9AM</span>
                    </div>
                  </div>
                  <button className="py-1 px-2 rounded border border-gray-400 text-xs font-medium text-gray-900 opacity-0 transition-all duration-500 group-hover:opacity-100">Edit</button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>

      </Container>
      </div>     
 </Behind>                         

</>
  );
}