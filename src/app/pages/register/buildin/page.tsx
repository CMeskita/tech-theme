'use client';

import Behind from "@/app/components/Behind";
import Container from "@/app/components/Container";


export default function Buildin() {


  return (
     <div className="h-full bg-gray-100"> 
        <Behind classname={"opacity-10"}>
            <Container>
                <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-PRIMARY">
                            <a href="/pages/panel">Bem vindo!!  Estamos Em Contrução</a>
                        </h1>
          
            </Container>
          
        </Behind>
      </div>
  )
}