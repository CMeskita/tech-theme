import { Horario } from "./Horario";
import { Parceiros } from "./Parceiros";


export const PARCEIROS_MOCK: Parceiros[] = [
  { id: 1, nome: "João Silva", especialidade: "Cabeleireiro" },
  { id: 2, nome: "Maria Santos", especialidade: "Manicure" },
  { id: 3, nome: "Carlos Lima", especialidade: "Barbeiro" },
  { id: 4, nome: "Ana Costa", especialidade: "Barbeiro" },
];

export const HORARIOS_MOCK: Horario[] = [
  { hora: "09:00", disponivel: true },
  { hora: "09:30", disponivel: true },
  { hora: "10:00", disponivel: false },
  { hora: "10:30", disponivel: false },
  { hora: "11:00", disponivel: true },
  { hora: "11:30", disponivel: true },
  { hora: "13:00", disponivel: true },
  { hora: "13:30", disponivel: true },
  { hora: "14:00", disponivel: false },
  { hora: "14:30", disponivel: true },
];

export const AGENDAMENTOS = [
  { id: 1, parceiro: "João Silva", cliente: "Carlos Souza", hora: "09:00", servico: "Corte Moderno", status: "Confirmado" },
  { id: 2, parceiro: "Maria Santos", cliente: "Ana Beatriz", hora: "10:30", servico: "Coloração", status: "Pendente" },
  { id: 3, parceiro: "Carlos Lima", cliente: "Roberto Lima", hora: "14:00", servico: "Barba e Rosto", status: "Confirmado" },
  { id: 4, parceiro: "Ana Costa", cliente: "Fernanda Oliveira", hora: "16:15", servico: "Manicure", status: "Confirmado" },
  { id: 5, parceiro: "Ana Costa", cliente: "Fernanda Oliveira", hora: "16:15", servico: "Manicure", status: "Confirmado" },
  { id: 6, parceiro: "Ana Costa", cliente: "Fernanda Oliveira", hora: "16:15", servico: "Manicure", status: "Confirmado" },
  { id: 7, parceiro: "Ana Costa", cliente: "Fernanda Oliveira", hora: "16:15", servico: "Manicure", status: "Confirmado" },
  { id: 8, parceiro: "Ana Costa", cliente: "Fernanda Oliveira", hora: "16:15", servico: "Manicure", status: "Confirmado" },
];
