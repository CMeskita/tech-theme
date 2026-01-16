import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Parceiros } from "./Parceiros";
import { Horario } from "./Horario";
import ModalHeader from "./ModalHeader";


//import { Medico, Horario } from "./types";

interface AgendamentoModalProps {
  isOpen: boolean;
  selectedDate: Date | null;
  parceiro: Parceiros[];
  horarios: Horario[];
  parceiroSelecionado: number | null;
  setParceirosSelecionado: (id: number | null) => void;
  horarioSelecionado: string | null;
  setHorarioSelecionado: (hora: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

export default function AgendamentoModal({
  
  isOpen,
  selectedDate,
  parceiro,
  horarios,
  parceiroSelecionado,
  setParceirosSelecionado,
  horarioSelecionado,
  setHorarioSelecionado,
  onClose,
  onSubmit,
}: AgendamentoModalProps) {
  if (!isOpen || !selectedDate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          
         <ModalHeader onClose={onClose}/>

          <p className="text-sm text-gray-500 mb-6">
            Agendando para{" "}
            <span className="font-semibold text-primary">
              {format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}
            </span>
          </p>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            {/* Médico */}
            <select
              value={parceiroSelecionado ?? ""}
              onChange={(e) =>
                setParceirosSelecionado(Number(e.target.value))
              }
              className="w-full rounded-md border p-2.5"
              required
            >
              <option value="" disabled>
                Selecione o Parceiro
              </option>

              {parceiro.map((medico) => (
                <option key={medico.id} value={medico.id}>
                  {medico.nome} – {medico.especialidade}
                </option>
              ))}
            </select>

            {/* Horários */}
            <div className="grid grid-cols-5 gap-3">
              {horarios.map((item) => (
                <button
                  key={item.hora}
                  type="button"
                  disabled={!item.disponivel}
                  onClick={() => setHorarioSelecionado(item.hora)}
                  className={`p-2 rounded-lg text-sm font-medium ${
                    !item.disponivel
                      ? "bg-gray-100 text-gray-400"
                      : horarioSelecionado === item.hora
                      ? "bg-primary text-white"
                      : "border"
                  }`}
                >
                  {item.hora}
                </button>
              ))}
            </div>

            {/* Ações */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-100 py-2 rounded-lg"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={!parceiroSelecionado || !horarioSelecionado}
                className="flex-1 bg-primary text-white py-2 rounded-lg disabled:opacity-50"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
