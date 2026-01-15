'use client'
import Behind from "@/app/components/Behind";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { BriefcaseBusiness, HandPlatter, PhoneCall, Share2, Store,UserRoundCog   } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function User() {
  const cardStyle = "flex  flex-row justify-lefth shadow-lg p-6 rounded-lg bg-white gap-2 ";
  const router = useRouter()  

   function clicando(acao: "agenda" | "clientes" | "painel") {
  if (acao === "agenda")   router.push('/pages/calendar');
  if (acao === "clientes") router.push('/pages/register');
  if (acao === "painel") router.push('/pages/panel');
}
  return (
    
     <Behind classname={""} >
     
              <div className="h-full overflow-y-auto">
     <Container>
       <div className=" max-w-screen-lg mx-auto min-h-screen flex flex-col">
           {/* Header Compacto para Mobile */}
                  <div className="bg-primary/50 rounded-lg p-4 sticky top-0 z-10 shadow-sm  ">
                    <div className="flex justify-between items-center">
                      <div>
                        <h1 className="text-lg font-bold text-gray-900">Cadastros </h1>
                        
                      </div>
                  
                    </div>
                  </div>
       
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
                 <div className={cardStyle} > 
                    <Store />
                    <a href="/pages/register/buildin">Estabelecimento</a>
                  </div>
                 <div className={cardStyle}>  
                    <UserRoundCog /> 
                      <a href="/pages/register/buildin" >Usuario</a>
                  </div>                    
                 <div className={cardStyle}> 
                      <BriefcaseBusiness />
                      <a href="/pages/register/buildin" >Função</a>
                      
                  </div>
                 <div className={cardStyle}>  
                      <PhoneCall />
                      <a href="/pages/register/buildin" >Contatos</a>
                  </div>
                  <div className={cardStyle}> 
                      <HandPlatter />
                      <a href="/pages/register/buildin" >Serviço</a>
                  </div>  
                  <div className={cardStyle}> 
                      <Share2 />
                      <a href="/pages/register/buildin" >Parceiro</a>
                  </div>  
           
            </div>
          <Footer onClick={clicando}/>
    </div>
    </Container>
    </div>
  
   </Behind>
    
    
  );
}