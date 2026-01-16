
interface iModalHeader {

  onClose: () => void;
}
export default function ModalHeader({onClose}: iModalHeader) {
  return (
    <header className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              Novo Agendamento
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>
          </header>

  )
}