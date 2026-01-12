'use client'
import Behind from "@/app/components/Behind";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import { BriefcaseBusiness, HandPlatter, PhoneCall, Share2, Store,UserRoundCog   } from 'lucide-react';

export default function User() {
  return (
    <>
     <Behind classname={"p-10"} >
              <div className="h-full overflow-y-auto">
     <Container>
         <Header />

        <div className="h-full overflow-y-auto">
                 <Container>
                
                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
                          <div  className="shadow-lg p-6 rounded-lg bg-white"> 
                                <Store />
                            <a href="/pages/register/buildin">Estabelecimento</a></div>
                          <div className="shadow-lg p-6 rounded-lg bg-white">  
                            <UserRoundCog /> 
                            <a href="/pages/register/buildin" >Usuario</a></div>                    
                          <div className="shadow-lg p-6 rounded-lg bg-white"> 
                             <BriefcaseBusiness />
                            <a href="/pages/register/buildin" >Função</a></div>
                          <div className="shadow-lg p-6 rounded-lg bg-white">  
                             <PhoneCall />
                            <a href="/pages/register/buildin" >Contatos</a></div>
                           <div className="shadow-lg p-6 rounded-lg bg-white"> 
                               <HandPlatter />
                            <a href="/pages/register/buildin" >Serviço</a></div>  
                          <div className="shadow-lg p-6 rounded-lg bg-white"> 
                              <Share2 />
                            <a href="/pages/register/buildin" >Parceiro</a></div>  
                            
                            
                        </div>
    
                 </Container>
                   </div>

    </Container>
    </div>
   </Behind>
    </>
    
  );
}