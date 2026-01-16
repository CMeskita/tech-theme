'use client';

import Behind from "@/app/components/layout/Behind";
import Container from "@/app/components/layout/Container";
import Footer from "@/app/components/layout/Footer";
import { ModalBase } from "@/app/components/Modal/ModalBase";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  HandPlatter,
  PhoneCall,
  Share2,
  Store,
  UserRoundCog,
  Clock10,
} from "lucide-react";

import { useState } from "react";


// 🔹 Tipos de modal
type ModalTipo =
  | "estabelecimento"
  | "usuario"
  | "funcao"
  | "contato"
  | "servico"
  | "parceiro"
  | "horario"
  | null;

export default function User() {

   const [today] = useState(new Date());
  const [modalAberto, setModalAberto] = useState<ModalTipo>(null);

  const cardStyle =
    "flex flex-row items-center shadow-lg p-6 rounded-lg bg-white gap-2 hover:bg-gray-50 transition";



  return (
  <Behind classname="">
    
    <Container className="">
        <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col">
              {/* Header */}
          <div className="bg-primary/50 rounded-lg p-4 sticky top-0 z-10 shadow-sm">
                <h1 className="text-lg font-bold text-gray-900">Cadastros</h1>
                <p className="text-xs text-gray-900 capitalize">
                   {format(today, "EEEE, dd 'de' MMMM", { locale: ptBR })}
                </p>
          </div>

              {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                
                <button className={cardStyle} onClick={() => setModalAberto("contato")}>
                  <PhoneCall />
                  <span>Contatos</span>
                </button>
                <button className={cardStyle} onClick={() => setModalAberto("estabelecimento")}>
                  <Store />
                  <span>Estabelecimento</span>
                </button>
                <button className={cardStyle} onClick={() => setModalAberto("horario")}>
                  <Clock10 />
                  <span>Horário</span>
                </button>
                  <button className={cardStyle} onClick={() => setModalAberto("parceiro")}>
                  <Share2 />
                  <span>Parceiro</span>
                </button>
                <button className={cardStyle} onClick={() => setModalAberto("servico")}>
                  <HandPlatter />
                  <span>Serviço</span>
                </button>
                <button className={cardStyle} onClick={() => setModalAberto("usuario")}>
                  <UserRoundCog />
                  <span>Usuário</span>
                </button>
          </div>

          <ModalBase isOpen={modalAberto !== null} onClose={() => setModalAberto(null)} >
              {modalAberto && (
                  <div className="p-4">
                    {/* Conteúdo do modal */}

                    <h2 className="text-xl font-bold mb-4">Em Breve</h2>
                      <h2 className="text-xl font-bold mb-4">Em Construção</h2>
                  </div>
                )}
          </ModalBase>

        <Footer />

        </div>
        
    </Container>

  </Behind>
  );
}
